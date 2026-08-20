# `backupLogicallyAirGappedBackupVault` Submodule <a name="`backupLogicallyAirGappedBackupVault` Submodule" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupLogicallyAirGappedBackupVault <a name="BackupLogicallyAirGappedBackupVault" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault awscc_backup_logically_air_gapped_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer"></a>

```python
from cdktn_provider_awscc import backup_logically_air_gapped_backup_vault

backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_vault_name: str,
  max_retention_days: typing.Union[int, float],
  min_retention_days: typing.Union[int, float],
  access_policy: str = None,
  backup_vault_tags: typing.Mapping[str] = None,
  encryption_key_arn: str = None,
  mpa_approval_team_arn: str = None,
  notifications: BackupLogicallyAirGappedBackupVaultNotifications = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.backupVaultName">backup_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_name BackupLogicallyAirGappedBackupVault#backup_vault_name}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.maxRetentionDays">max_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#max_retention_days BackupLogicallyAirGappedBackupVault#max_retention_days}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.minRetentionDays">min_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#min_retention_days BackupLogicallyAirGappedBackupVault#min_retention_days}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.accessPolicy">access_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#access_policy BackupLogicallyAirGappedBackupVault#access_policy}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.backupVaultTags">backup_vault_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_tags BackupLogicallyAirGappedBackupVault#backup_vault_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#encryption_key_arn BackupLogicallyAirGappedBackupVault#encryption_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.mpaApprovalTeamArn">mpa_approval_team_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#mpa_approval_team_arn BackupLogicallyAirGappedBackupVault#mpa_approval_team_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.notifications">notifications</a></code> | <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#notifications BackupLogicallyAirGappedBackupVault#notifications}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_vault_name`<sup>Required</sup> <a name="backup_vault_name" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.backupVaultName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_name BackupLogicallyAirGappedBackupVault#backup_vault_name}.

---

##### `max_retention_days`<sup>Required</sup> <a name="max_retention_days" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.maxRetentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#max_retention_days BackupLogicallyAirGappedBackupVault#max_retention_days}.

---

##### `min_retention_days`<sup>Required</sup> <a name="min_retention_days" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.minRetentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#min_retention_days BackupLogicallyAirGappedBackupVault#min_retention_days}.

---

##### `access_policy`<sup>Optional</sup> <a name="access_policy" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.accessPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#access_policy BackupLogicallyAirGappedBackupVault#access_policy}.

---

##### `backup_vault_tags`<sup>Optional</sup> <a name="backup_vault_tags" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.backupVaultTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_tags BackupLogicallyAirGappedBackupVault#backup_vault_tags}.

---

##### `encryption_key_arn`<sup>Optional</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.encryptionKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#encryption_key_arn BackupLogicallyAirGappedBackupVault#encryption_key_arn}.

---

##### `mpa_approval_team_arn`<sup>Optional</sup> <a name="mpa_approval_team_arn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.mpaApprovalTeamArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#mpa_approval_team_arn BackupLogicallyAirGappedBackupVault#mpa_approval_team_arn}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.notifications"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#notifications BackupLogicallyAirGappedBackupVault#notifications}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.putNotifications">put_notifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetAccessPolicy">reset_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetBackupVaultTags">reset_backup_vault_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetEncryptionKeyArn">reset_encryption_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetMpaApprovalTeamArn">reset_mpa_approval_team_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetNotifications">reset_notifications</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_notifications` <a name="put_notifications" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.putNotifications"></a>

```python
def put_notifications(
  backup_vault_events: typing.List[str] = None,
  sns_topic_arn: str = None
) -> None
```

###### `backup_vault_events`<sup>Optional</sup> <a name="backup_vault_events" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.putNotifications.parameter.backupVaultEvents"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_events BackupLogicallyAirGappedBackupVault#backup_vault_events}.

---

###### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.putNotifications.parameter.snsTopicArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#sns_topic_arn BackupLogicallyAirGappedBackupVault#sns_topic_arn}.

---

##### `reset_access_policy` <a name="reset_access_policy" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetAccessPolicy"></a>

```python
def reset_access_policy() -> None
```

##### `reset_backup_vault_tags` <a name="reset_backup_vault_tags" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetBackupVaultTags"></a>

```python
def reset_backup_vault_tags() -> None
```

##### `reset_encryption_key_arn` <a name="reset_encryption_key_arn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetEncryptionKeyArn"></a>

```python
def reset_encryption_key_arn() -> None
```

##### `reset_mpa_approval_team_arn` <a name="reset_mpa_approval_team_arn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetMpaApprovalTeamArn"></a>

```python
def reset_mpa_approval_team_arn() -> None
```

##### `reset_notifications` <a name="reset_notifications" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetNotifications"></a>

```python
def reset_notifications() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BackupLogicallyAirGappedBackupVault resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isConstruct"></a>

```python
from cdktn_provider_awscc import backup_logically_air_gapped_backup_vault

backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformElement"></a>

```python
from cdktn_provider_awscc import backup_logically_air_gapped_backup_vault

backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformResource"></a>

```python
from cdktn_provider_awscc import backup_logically_air_gapped_backup_vault

backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import backup_logically_air_gapped_backup_vault

backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BackupLogicallyAirGappedBackupVault resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupLogicallyAirGappedBackupVault to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupLogicallyAirGappedBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupLogicallyAirGappedBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultArn">backup_vault_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.notifications">notifications</a></code> | <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference">BackupLogicallyAirGappedBackupVaultNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.vaultState">vault_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.vaultType">vault_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.accessPolicyInput">access_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultNameInput">backup_vault_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultTagsInput">backup_vault_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.encryptionKeyArnInput">encryption_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.maxRetentionDaysInput">max_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.minRetentionDaysInput">min_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArnInput">mpa_approval_team_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.notificationsInput">notifications_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.accessPolicy">access_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultName">backup_vault_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultTags">backup_vault_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.maxRetentionDays">max_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.minRetentionDays">min_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArn">mpa_approval_team_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_vault_arn`<sup>Required</sup> <a name="backup_vault_arn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultArn"></a>

```python
backup_vault_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.notifications"></a>

```python
notifications: BackupLogicallyAirGappedBackupVaultNotificationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference">BackupLogicallyAirGappedBackupVaultNotificationsOutputReference</a>

---

##### `vault_state`<sup>Required</sup> <a name="vault_state" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.vaultState"></a>

```python
vault_state: str
```

- *Type:* str

---

##### `vault_type`<sup>Required</sup> <a name="vault_type" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.vaultType"></a>

```python
vault_type: str
```

- *Type:* str

---

##### `access_policy_input`<sup>Optional</sup> <a name="access_policy_input" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.accessPolicyInput"></a>

```python
access_policy_input: str
```

- *Type:* str

---

##### `backup_vault_name_input`<sup>Optional</sup> <a name="backup_vault_name_input" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultNameInput"></a>

```python
backup_vault_name_input: str
```

- *Type:* str

---

##### `backup_vault_tags_input`<sup>Optional</sup> <a name="backup_vault_tags_input" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultTagsInput"></a>

```python
backup_vault_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `encryption_key_arn_input`<sup>Optional</sup> <a name="encryption_key_arn_input" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.encryptionKeyArnInput"></a>

```python
encryption_key_arn_input: str
```

- *Type:* str

---

##### `max_retention_days_input`<sup>Optional</sup> <a name="max_retention_days_input" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.maxRetentionDaysInput"></a>

```python
max_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_retention_days_input`<sup>Optional</sup> <a name="min_retention_days_input" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.minRetentionDaysInput"></a>

```python
min_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mpa_approval_team_arn_input`<sup>Optional</sup> <a name="mpa_approval_team_arn_input" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArnInput"></a>

```python
mpa_approval_team_arn_input: str
```

- *Type:* str

---

##### `notifications_input`<sup>Optional</sup> <a name="notifications_input" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.notificationsInput"></a>

```python
notifications_input: IResolvable | BackupLogicallyAirGappedBackupVaultNotifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a>

---

##### `access_policy`<sup>Required</sup> <a name="access_policy" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.accessPolicy"></a>

```python
access_policy: str
```

- *Type:* str

---

##### `backup_vault_name`<sup>Required</sup> <a name="backup_vault_name" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultName"></a>

```python
backup_vault_name: str
```

- *Type:* str

---

##### `backup_vault_tags`<sup>Required</sup> <a name="backup_vault_tags" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultTags"></a>

```python
backup_vault_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `encryption_key_arn`<sup>Required</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.encryptionKeyArn"></a>

```python
encryption_key_arn: str
```

- *Type:* str

---

##### `max_retention_days`<sup>Required</sup> <a name="max_retention_days" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.maxRetentionDays"></a>

```python
max_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_retention_days`<sup>Required</sup> <a name="min_retention_days" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.minRetentionDays"></a>

```python
min_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mpa_approval_team_arn`<sup>Required</sup> <a name="mpa_approval_team_arn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArn"></a>

```python
mpa_approval_team_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupLogicallyAirGappedBackupVaultConfig <a name="BackupLogicallyAirGappedBackupVaultConfig" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.Initializer"></a>

```python
from cdktn_provider_awscc import backup_logically_air_gapped_backup_vault

backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_vault_name: str,
  max_retention_days: typing.Union[int, float],
  min_retention_days: typing.Union[int, float],
  access_policy: str = None,
  backup_vault_tags: typing.Mapping[str] = None,
  encryption_key_arn: str = None,
  mpa_approval_team_arn: str = None,
  notifications: BackupLogicallyAirGappedBackupVaultNotifications = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.backupVaultName">backup_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_name BackupLogicallyAirGappedBackupVault#backup_vault_name}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.maxRetentionDays">max_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#max_retention_days BackupLogicallyAirGappedBackupVault#max_retention_days}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.minRetentionDays">min_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#min_retention_days BackupLogicallyAirGappedBackupVault#min_retention_days}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.accessPolicy">access_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#access_policy BackupLogicallyAirGappedBackupVault#access_policy}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.backupVaultTags">backup_vault_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_tags BackupLogicallyAirGappedBackupVault#backup_vault_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#encryption_key_arn BackupLogicallyAirGappedBackupVault#encryption_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.mpaApprovalTeamArn">mpa_approval_team_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#mpa_approval_team_arn BackupLogicallyAirGappedBackupVault#mpa_approval_team_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.notifications">notifications</a></code> | <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#notifications BackupLogicallyAirGappedBackupVault#notifications}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_vault_name`<sup>Required</sup> <a name="backup_vault_name" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.backupVaultName"></a>

```python
backup_vault_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_name BackupLogicallyAirGappedBackupVault#backup_vault_name}.

---

##### `max_retention_days`<sup>Required</sup> <a name="max_retention_days" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.maxRetentionDays"></a>

```python
max_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#max_retention_days BackupLogicallyAirGappedBackupVault#max_retention_days}.

---

##### `min_retention_days`<sup>Required</sup> <a name="min_retention_days" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.minRetentionDays"></a>

```python
min_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#min_retention_days BackupLogicallyAirGappedBackupVault#min_retention_days}.

---

##### `access_policy`<sup>Optional</sup> <a name="access_policy" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.accessPolicy"></a>

```python
access_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#access_policy BackupLogicallyAirGappedBackupVault#access_policy}.

---

##### `backup_vault_tags`<sup>Optional</sup> <a name="backup_vault_tags" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.backupVaultTags"></a>

```python
backup_vault_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_tags BackupLogicallyAirGappedBackupVault#backup_vault_tags}.

---

##### `encryption_key_arn`<sup>Optional</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.encryptionKeyArn"></a>

```python
encryption_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#encryption_key_arn BackupLogicallyAirGappedBackupVault#encryption_key_arn}.

---

##### `mpa_approval_team_arn`<sup>Optional</sup> <a name="mpa_approval_team_arn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.mpaApprovalTeamArn"></a>

```python
mpa_approval_team_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#mpa_approval_team_arn BackupLogicallyAirGappedBackupVault#mpa_approval_team_arn}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.notifications"></a>

```python
notifications: BackupLogicallyAirGappedBackupVaultNotifications
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#notifications BackupLogicallyAirGappedBackupVault#notifications}.

---

### BackupLogicallyAirGappedBackupVaultNotifications <a name="BackupLogicallyAirGappedBackupVaultNotifications" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications.Initializer"></a>

```python
from cdktn_provider_awscc import backup_logically_air_gapped_backup_vault

backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications(
  backup_vault_events: typing.List[str] = None,
  sns_topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications.property.backupVaultEvents">backup_vault_events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_events BackupLogicallyAirGappedBackupVault#backup_vault_events}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#sns_topic_arn BackupLogicallyAirGappedBackupVault#sns_topic_arn}. |

---

##### `backup_vault_events`<sup>Optional</sup> <a name="backup_vault_events" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications.property.backupVaultEvents"></a>

```python
backup_vault_events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_events BackupLogicallyAirGappedBackupVault#backup_vault_events}.

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_logically_air_gapped_backup_vault#sns_topic_arn BackupLogicallyAirGappedBackupVault#sns_topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupLogicallyAirGappedBackupVaultNotificationsOutputReference <a name="BackupLogicallyAirGappedBackupVaultNotificationsOutputReference" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_logically_air_gapped_backup_vault

backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resetBackupVaultEvents">reset_backup_vault_events</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resetSnsTopicArn">reset_sns_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup_vault_events` <a name="reset_backup_vault_events" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resetBackupVaultEvents"></a>

```python
def reset_backup_vault_events() -> None
```

##### `reset_sns_topic_arn` <a name="reset_sns_topic_arn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resetSnsTopicArn"></a>

```python
def reset_sns_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEventsInput">backup_vault_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArnInput">sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEvents">backup_vault_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_vault_events_input`<sup>Optional</sup> <a name="backup_vault_events_input" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEventsInput"></a>

```python
backup_vault_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sns_topic_arn_input`<sup>Optional</sup> <a name="sns_topic_arn_input" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArnInput"></a>

```python
sns_topic_arn_input: str
```

- *Type:* str

---

##### `backup_vault_events`<sup>Required</sup> <a name="backup_vault_events" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEvents"></a>

```python
backup_vault_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupLogicallyAirGappedBackupVaultNotifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a>

---



