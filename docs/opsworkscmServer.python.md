# `opsworkscmServer` Submodule <a name="`opsworkscmServer` Submodule" id="@cdktn/provider-awscc.opsworkscmServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworkscmServer <a name="OpsworkscmServer" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server awscc_opsworkscm_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer"></a>

```python
from cdktn_provider_awscc import opsworkscm_server

opsworkscmServer.OpsworkscmServer(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_profile_arn: str,
  instance_type: str,
  service_role_arn: str,
  associate_public_ip_address: bool | IResolvable = None,
  backup_id: str = None,
  backup_retention_count: typing.Union[int, float] = None,
  custom_certificate: str = None,
  custom_domain: str = None,
  custom_private_key: str = None,
  disable_automated_backup: bool | IResolvable = None,
  engine: str = None,
  engine_attributes: IResolvable | typing.List[OpsworkscmServerEngineAttributes] = None,
  engine_model: str = None,
  engine_version: str = None,
  key_pair: str = None,
  preferred_backup_window: str = None,
  preferred_maintenance_window: str = None,
  security_group_ids: typing.List[str] = None,
  server_name: str = None,
  subnet_ids: typing.List[str] = None,
  tags: IResolvable | typing.List[OpsworkscmServerTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_profile_arn OpsworkscmServer#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_type OpsworkscmServer#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#service_role_arn OpsworkscmServer#service_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#associate_public_ip_address OpsworkscmServer#associate_public_ip_address}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.backupId">backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_id OpsworkscmServer#backup_id}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.backupRetentionCount">backup_retention_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_retention_count OpsworkscmServer#backup_retention_count}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.customCertificate">custom_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_certificate OpsworkscmServer#custom_certificate}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.customDomain">custom_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_domain OpsworkscmServer#custom_domain}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.customPrivateKey">custom_private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_private_key OpsworkscmServer#custom_private_key}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.disableAutomatedBackup">disable_automated_backup</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#disable_automated_backup OpsworkscmServer#disable_automated_backup}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine OpsworkscmServer#engine}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.engineAttributes">engine_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_attributes OpsworkscmServer#engine_attributes}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.engineModel">engine_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_model OpsworkscmServer#engine_model}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_version OpsworkscmServer#engine_version}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.keyPair">key_pair</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#key_pair OpsworkscmServer#key_pair}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_backup_window OpsworkscmServer#preferred_backup_window}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_maintenance_window OpsworkscmServer#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#security_group_ids OpsworkscmServer#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#server_name OpsworkscmServer#server_name}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#subnet_ids OpsworkscmServer#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#tags OpsworkscmServer#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_profile_arn`<sup>Required</sup> <a name="instance_profile_arn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.instanceProfileArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_profile_arn OpsworkscmServer#instance_profile_arn}.

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_type OpsworkscmServer#instance_type}.

---

##### `service_role_arn`<sup>Required</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.serviceRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#service_role_arn OpsworkscmServer#service_role_arn}.

---

##### `associate_public_ip_address`<sup>Optional</sup> <a name="associate_public_ip_address" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.associatePublicIpAddress"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#associate_public_ip_address OpsworkscmServer#associate_public_ip_address}.

---

##### `backup_id`<sup>Optional</sup> <a name="backup_id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.backupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_id OpsworkscmServer#backup_id}.

---

##### `backup_retention_count`<sup>Optional</sup> <a name="backup_retention_count" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.backupRetentionCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_retention_count OpsworkscmServer#backup_retention_count}.

---

##### `custom_certificate`<sup>Optional</sup> <a name="custom_certificate" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.customCertificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_certificate OpsworkscmServer#custom_certificate}.

---

##### `custom_domain`<sup>Optional</sup> <a name="custom_domain" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.customDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_domain OpsworkscmServer#custom_domain}.

---

##### `custom_private_key`<sup>Optional</sup> <a name="custom_private_key" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.customPrivateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_private_key OpsworkscmServer#custom_private_key}.

---

##### `disable_automated_backup`<sup>Optional</sup> <a name="disable_automated_backup" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.disableAutomatedBackup"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#disable_automated_backup OpsworkscmServer#disable_automated_backup}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine OpsworkscmServer#engine}.

---

##### `engine_attributes`<sup>Optional</sup> <a name="engine_attributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.engineAttributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_attributes OpsworkscmServer#engine_attributes}.

---

##### `engine_model`<sup>Optional</sup> <a name="engine_model" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.engineModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_model OpsworkscmServer#engine_model}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_version OpsworkscmServer#engine_version}.

---

##### `key_pair`<sup>Optional</sup> <a name="key_pair" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.keyPair"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#key_pair OpsworkscmServer#key_pair}.

---

##### `preferred_backup_window`<sup>Optional</sup> <a name="preferred_backup_window" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.preferredBackupWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_backup_window OpsworkscmServer#preferred_backup_window}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_maintenance_window OpsworkscmServer#preferred_maintenance_window}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#security_group_ids OpsworkscmServer#security_group_ids}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#server_name OpsworkscmServer#server_name}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#subnet_ids OpsworkscmServer#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#tags OpsworkscmServer#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putEngineAttributes">put_engine_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetAssociatePublicIpAddress">reset_associate_public_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetBackupId">reset_backup_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetBackupRetentionCount">reset_backup_retention_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomCertificate">reset_custom_certificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomDomain">reset_custom_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomPrivateKey">reset_custom_private_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetDisableAutomatedBackup">reset_disable_automated_backup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineAttributes">reset_engine_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineModel">reset_engine_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetKeyPair">reset_key_pair</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetPreferredBackupWindow">reset_preferred_backup_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_engine_attributes` <a name="put_engine_attributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putEngineAttributes"></a>

```python
def put_engine_attributes(
  value: IResolvable | typing.List[OpsworkscmServerEngineAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putEngineAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[OpsworkscmServerTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>]

---

##### `reset_associate_public_ip_address` <a name="reset_associate_public_ip_address" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetAssociatePublicIpAddress"></a>

```python
def reset_associate_public_ip_address() -> None
```

##### `reset_backup_id` <a name="reset_backup_id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetBackupId"></a>

```python
def reset_backup_id() -> None
```

##### `reset_backup_retention_count` <a name="reset_backup_retention_count" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetBackupRetentionCount"></a>

```python
def reset_backup_retention_count() -> None
```

##### `reset_custom_certificate` <a name="reset_custom_certificate" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomCertificate"></a>

```python
def reset_custom_certificate() -> None
```

##### `reset_custom_domain` <a name="reset_custom_domain" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomDomain"></a>

```python
def reset_custom_domain() -> None
```

##### `reset_custom_private_key` <a name="reset_custom_private_key" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomPrivateKey"></a>

```python
def reset_custom_private_key() -> None
```

##### `reset_disable_automated_backup` <a name="reset_disable_automated_backup" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetDisableAutomatedBackup"></a>

```python
def reset_disable_automated_backup() -> None
```

##### `reset_engine` <a name="reset_engine" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_engine_attributes` <a name="reset_engine_attributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineAttributes"></a>

```python
def reset_engine_attributes() -> None
```

##### `reset_engine_model` <a name="reset_engine_model" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineModel"></a>

```python
def reset_engine_model() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_key_pair` <a name="reset_key_pair" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetKeyPair"></a>

```python
def reset_key_pair() -> None
```

##### `reset_preferred_backup_window` <a name="reset_preferred_backup_window" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetPreferredBackupWindow"></a>

```python
def reset_preferred_backup_window() -> None
```

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OpsworkscmServer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isConstruct"></a>

```python
from cdktn_provider_awscc import opsworkscm_server

opsworkscmServer.OpsworkscmServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformElement"></a>

```python
from cdktn_provider_awscc import opsworkscm_server

opsworkscmServer.OpsworkscmServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformResource"></a>

```python
from cdktn_provider_awscc import opsworkscm_server

opsworkscmServer.OpsworkscmServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import opsworkscm_server

opsworkscmServer.OpsworkscmServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OpsworkscmServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpsworkscmServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpsworkscmServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpsworkscmServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineAttributes">engine_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList">OpsworkscmServerEngineAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList">OpsworkscmServerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.associatePublicIpAddressInput">associate_public_ip_address_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupIdInput">backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupRetentionCountInput">backup_retention_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customCertificateInput">custom_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customDomainInput">custom_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customPrivateKeyInput">custom_private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.disableAutomatedBackupInput">disable_automated_backup_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineAttributesInput">engine_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineModelInput">engine_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceProfileArnInput">instance_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.keyPairInput">key_pair_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredBackupWindowInput">preferred_backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serviceRoleArnInput">service_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupRetentionCount">backup_retention_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customCertificate">custom_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customDomain">custom_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customPrivateKey">custom_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.disableAutomatedBackup">disable_automated_backup</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineModel">engine_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.keyPair">key_pair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `engine_attributes`<sup>Required</sup> <a name="engine_attributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineAttributes"></a>

```python
engine_attributes: OpsworkscmServerEngineAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList">OpsworkscmServerEngineAttributesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tags"></a>

```python
tags: OpsworkscmServerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList">OpsworkscmServerTagsList</a>

---

##### `associate_public_ip_address_input`<sup>Optional</sup> <a name="associate_public_ip_address_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.associatePublicIpAddressInput"></a>

```python
associate_public_ip_address_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `backup_id_input`<sup>Optional</sup> <a name="backup_id_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupIdInput"></a>

```python
backup_id_input: str
```

- *Type:* str

---

##### `backup_retention_count_input`<sup>Optional</sup> <a name="backup_retention_count_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupRetentionCountInput"></a>

```python
backup_retention_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_certificate_input`<sup>Optional</sup> <a name="custom_certificate_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customCertificateInput"></a>

```python
custom_certificate_input: str
```

- *Type:* str

---

##### `custom_domain_input`<sup>Optional</sup> <a name="custom_domain_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customDomainInput"></a>

```python
custom_domain_input: str
```

- *Type:* str

---

##### `custom_private_key_input`<sup>Optional</sup> <a name="custom_private_key_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customPrivateKeyInput"></a>

```python
custom_private_key_input: str
```

- *Type:* str

---

##### `disable_automated_backup_input`<sup>Optional</sup> <a name="disable_automated_backup_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.disableAutomatedBackupInput"></a>

```python
disable_automated_backup_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `engine_attributes_input`<sup>Optional</sup> <a name="engine_attributes_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineAttributesInput"></a>

```python
engine_attributes_input: IResolvable | typing.List[OpsworkscmServerEngineAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>]

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_model_input`<sup>Optional</sup> <a name="engine_model_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineModelInput"></a>

```python
engine_model_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `instance_profile_arn_input`<sup>Optional</sup> <a name="instance_profile_arn_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceProfileArnInput"></a>

```python
instance_profile_arn_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `key_pair_input`<sup>Optional</sup> <a name="key_pair_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.keyPairInput"></a>

```python
key_pair_input: str
```

- *Type:* str

---

##### `preferred_backup_window_input`<sup>Optional</sup> <a name="preferred_backup_window_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredBackupWindowInput"></a>

```python
preferred_backup_window_input: str
```

- *Type:* str

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `service_role_arn_input`<sup>Optional</sup> <a name="service_role_arn_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serviceRoleArnInput"></a>

```python
service_role_arn_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[OpsworkscmServerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>]

---

##### `associate_public_ip_address`<sup>Required</sup> <a name="associate_public_ip_address" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `backup_retention_count`<sup>Required</sup> <a name="backup_retention_count" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupRetentionCount"></a>

```python
backup_retention_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_certificate`<sup>Required</sup> <a name="custom_certificate" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customCertificate"></a>

```python
custom_certificate: str
```

- *Type:* str

---

##### `custom_domain`<sup>Required</sup> <a name="custom_domain" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customDomain"></a>

```python
custom_domain: str
```

- *Type:* str

---

##### `custom_private_key`<sup>Required</sup> <a name="custom_private_key" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customPrivateKey"></a>

```python
custom_private_key: str
```

- *Type:* str

---

##### `disable_automated_backup`<sup>Required</sup> <a name="disable_automated_backup" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.disableAutomatedBackup"></a>

```python
disable_automated_backup: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_model`<sup>Required</sup> <a name="engine_model" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineModel"></a>

```python
engine_model: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `instance_profile_arn`<sup>Required</sup> <a name="instance_profile_arn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `key_pair`<sup>Required</sup> <a name="key_pair" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

---

##### `preferred_backup_window`<sup>Required</sup> <a name="preferred_backup_window" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredBackupWindow"></a>

```python
preferred_backup_window: str
```

- *Type:* str

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `service_role_arn`<sup>Required</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworkscmServerConfig <a name="OpsworkscmServerConfig" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import opsworkscm_server

opsworkscmServer.OpsworkscmServerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_profile_arn: str,
  instance_type: str,
  service_role_arn: str,
  associate_public_ip_address: bool | IResolvable = None,
  backup_id: str = None,
  backup_retention_count: typing.Union[int, float] = None,
  custom_certificate: str = None,
  custom_domain: str = None,
  custom_private_key: str = None,
  disable_automated_backup: bool | IResolvable = None,
  engine: str = None,
  engine_attributes: IResolvable | typing.List[OpsworkscmServerEngineAttributes] = None,
  engine_model: str = None,
  engine_version: str = None,
  key_pair: str = None,
  preferred_backup_window: str = None,
  preferred_maintenance_window: str = None,
  security_group_ids: typing.List[str] = None,
  server_name: str = None,
  subnet_ids: typing.List[str] = None,
  tags: IResolvable | typing.List[OpsworkscmServerTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_profile_arn OpsworkscmServer#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_type OpsworkscmServer#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#service_role_arn OpsworkscmServer#service_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#associate_public_ip_address OpsworkscmServer#associate_public_ip_address}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.backupId">backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_id OpsworkscmServer#backup_id}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.backupRetentionCount">backup_retention_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_retention_count OpsworkscmServer#backup_retention_count}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customCertificate">custom_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_certificate OpsworkscmServer#custom_certificate}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customDomain">custom_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_domain OpsworkscmServer#custom_domain}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customPrivateKey">custom_private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_private_key OpsworkscmServer#custom_private_key}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.disableAutomatedBackup">disable_automated_backup</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#disable_automated_backup OpsworkscmServer#disable_automated_backup}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine OpsworkscmServer#engine}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineAttributes">engine_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_attributes OpsworkscmServer#engine_attributes}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineModel">engine_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_model OpsworkscmServer#engine_model}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_version OpsworkscmServer#engine_version}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.keyPair">key_pair</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#key_pair OpsworkscmServer#key_pair}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_backup_window OpsworkscmServer#preferred_backup_window}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_maintenance_window OpsworkscmServer#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#security_group_ids OpsworkscmServer#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#server_name OpsworkscmServer#server_name}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#subnet_ids OpsworkscmServer#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#tags OpsworkscmServer#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_profile_arn`<sup>Required</sup> <a name="instance_profile_arn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_profile_arn OpsworkscmServer#instance_profile_arn}.

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_type OpsworkscmServer#instance_type}.

---

##### `service_role_arn`<sup>Required</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#service_role_arn OpsworkscmServer#service_role_arn}.

---

##### `associate_public_ip_address`<sup>Optional</sup> <a name="associate_public_ip_address" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#associate_public_ip_address OpsworkscmServer#associate_public_ip_address}.

---

##### `backup_id`<sup>Optional</sup> <a name="backup_id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_id OpsworkscmServer#backup_id}.

---

##### `backup_retention_count`<sup>Optional</sup> <a name="backup_retention_count" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.backupRetentionCount"></a>

```python
backup_retention_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_retention_count OpsworkscmServer#backup_retention_count}.

---

##### `custom_certificate`<sup>Optional</sup> <a name="custom_certificate" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customCertificate"></a>

```python
custom_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_certificate OpsworkscmServer#custom_certificate}.

---

##### `custom_domain`<sup>Optional</sup> <a name="custom_domain" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customDomain"></a>

```python
custom_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_domain OpsworkscmServer#custom_domain}.

---

##### `custom_private_key`<sup>Optional</sup> <a name="custom_private_key" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customPrivateKey"></a>

```python
custom_private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_private_key OpsworkscmServer#custom_private_key}.

---

##### `disable_automated_backup`<sup>Optional</sup> <a name="disable_automated_backup" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.disableAutomatedBackup"></a>

```python
disable_automated_backup: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#disable_automated_backup OpsworkscmServer#disable_automated_backup}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine OpsworkscmServer#engine}.

---

##### `engine_attributes`<sup>Optional</sup> <a name="engine_attributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineAttributes"></a>

```python
engine_attributes: IResolvable | typing.List[OpsworkscmServerEngineAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_attributes OpsworkscmServer#engine_attributes}.

---

##### `engine_model`<sup>Optional</sup> <a name="engine_model" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineModel"></a>

```python
engine_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_model OpsworkscmServer#engine_model}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_version OpsworkscmServer#engine_version}.

---

##### `key_pair`<sup>Optional</sup> <a name="key_pair" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#key_pair OpsworkscmServer#key_pair}.

---

##### `preferred_backup_window`<sup>Optional</sup> <a name="preferred_backup_window" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.preferredBackupWindow"></a>

```python
preferred_backup_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_backup_window OpsworkscmServer#preferred_backup_window}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_maintenance_window OpsworkscmServer#preferred_maintenance_window}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#security_group_ids OpsworkscmServer#security_group_ids}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#server_name OpsworkscmServer#server_name}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#subnet_ids OpsworkscmServer#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[OpsworkscmServerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#tags OpsworkscmServer#tags}.

---

### OpsworkscmServerEngineAttributes <a name="OpsworkscmServerEngineAttributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import opsworkscm_server

opsworkscmServer.OpsworkscmServerEngineAttributes(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#name OpsworkscmServer#name}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#value OpsworkscmServer#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#name OpsworkscmServer#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#value OpsworkscmServer#value}.

---

### OpsworkscmServerTags <a name="OpsworkscmServerTags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.Initializer"></a>

```python
from cdktn_provider_awscc import opsworkscm_server

opsworkscmServer.OpsworkscmServerTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#key OpsworkscmServer#key}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#value OpsworkscmServer#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#key OpsworkscmServer#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#value OpsworkscmServer#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworkscmServerEngineAttributesList <a name="OpsworkscmServerEngineAttributesList" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import opsworkscm_server

opsworkscmServer.OpsworkscmServerEngineAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsworkscmServerEngineAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OpsworkscmServerEngineAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>]

---


### OpsworkscmServerEngineAttributesOutputReference <a name="OpsworkscmServerEngineAttributesOutputReference" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opsworkscm_server

opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpsworkscmServerEngineAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>

---


### OpsworkscmServerTagsList <a name="OpsworkscmServerTagsList" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import opsworkscm_server

opsworkscmServer.OpsworkscmServerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsworkscmServerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OpsworkscmServerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>]

---


### OpsworkscmServerTagsOutputReference <a name="OpsworkscmServerTagsOutputReference" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opsworkscm_server

opsworkscmServer.OpsworkscmServerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpsworkscmServerTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>

---



