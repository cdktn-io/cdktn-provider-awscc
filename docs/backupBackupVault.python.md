# `backupBackupVault` Submodule <a name="`backupBackupVault` Submodule" id="@cdktn/provider-awscc.backupBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupBackupVault <a name="BackupBackupVault" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault awscc_backup_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_vault

backupBackupVault.BackupBackupVault(
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
  access_policy: str = None,
  backup_vault_tags: typing.Mapping[str] = None,
  encryption_key_arn: str = None,
  lock_configuration: BackupBackupVaultLockConfiguration = None,
  notifications: BackupBackupVaultNotifications = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.backupVaultName">backup_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#backup_vault_name BackupBackupVault#backup_vault_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.accessPolicy">access_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#access_policy BackupBackupVault#access_policy}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.backupVaultTags">backup_vault_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#backup_vault_tags BackupBackupVault#backup_vault_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#encryption_key_arn BackupBackupVault#encryption_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.lockConfiguration">lock_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#lock_configuration BackupBackupVault#lock_configuration}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.notifications">notifications</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#notifications BackupBackupVault#notifications}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_vault_name`<sup>Required</sup> <a name="backup_vault_name" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.backupVaultName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#backup_vault_name BackupBackupVault#backup_vault_name}.

---

##### `access_policy`<sup>Optional</sup> <a name="access_policy" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.accessPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#access_policy BackupBackupVault#access_policy}.

---

##### `backup_vault_tags`<sup>Optional</sup> <a name="backup_vault_tags" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.backupVaultTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#backup_vault_tags BackupBackupVault#backup_vault_tags}.

---

##### `encryption_key_arn`<sup>Optional</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.encryptionKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#encryption_key_arn BackupBackupVault#encryption_key_arn}.

---

##### `lock_configuration`<sup>Optional</sup> <a name="lock_configuration" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.lockConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#lock_configuration BackupBackupVault#lock_configuration}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.notifications"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#notifications BackupBackupVault#notifications}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putLockConfiguration">put_lock_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putNotifications">put_notifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetAccessPolicy">reset_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetBackupVaultTags">reset_backup_vault_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetEncryptionKeyArn">reset_encryption_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetLockConfiguration">reset_lock_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetNotifications">reset_notifications</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_lock_configuration` <a name="put_lock_configuration" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putLockConfiguration"></a>

```python
def put_lock_configuration(
  changeable_for_days: typing.Union[int, float] = None,
  max_retention_days: typing.Union[int, float] = None,
  min_retention_days: typing.Union[int, float] = None
) -> None
```

###### `changeable_for_days`<sup>Optional</sup> <a name="changeable_for_days" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putLockConfiguration.parameter.changeableForDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#changeable_for_days BackupBackupVault#changeable_for_days}.

---

###### `max_retention_days`<sup>Optional</sup> <a name="max_retention_days" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putLockConfiguration.parameter.maxRetentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#max_retention_days BackupBackupVault#max_retention_days}.

---

###### `min_retention_days`<sup>Optional</sup> <a name="min_retention_days" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putLockConfiguration.parameter.minRetentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#min_retention_days BackupBackupVault#min_retention_days}.

---

##### `put_notifications` <a name="put_notifications" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putNotifications"></a>

```python
def put_notifications(
  backup_vault_events: typing.List[str] = None,
  sns_topic_arn: str = None
) -> None
```

###### `backup_vault_events`<sup>Optional</sup> <a name="backup_vault_events" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putNotifications.parameter.backupVaultEvents"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#backup_vault_events BackupBackupVault#backup_vault_events}.

---

###### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putNotifications.parameter.snsTopicArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#sns_topic_arn BackupBackupVault#sns_topic_arn}.

---

##### `reset_access_policy` <a name="reset_access_policy" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetAccessPolicy"></a>

```python
def reset_access_policy() -> None
```

##### `reset_backup_vault_tags` <a name="reset_backup_vault_tags" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetBackupVaultTags"></a>

```python
def reset_backup_vault_tags() -> None
```

##### `reset_encryption_key_arn` <a name="reset_encryption_key_arn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetEncryptionKeyArn"></a>

```python
def reset_encryption_key_arn() -> None
```

##### `reset_lock_configuration` <a name="reset_lock_configuration" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetLockConfiguration"></a>

```python
def reset_lock_configuration() -> None
```

##### `reset_notifications` <a name="reset_notifications" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetNotifications"></a>

```python
def reset_notifications() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BackupBackupVault resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isConstruct"></a>

```python
from cdktn_provider_awscc import backup_backup_vault

backupBackupVault.BackupBackupVault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformElement"></a>

```python
from cdktn_provider_awscc import backup_backup_vault

backupBackupVault.BackupBackupVault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformResource"></a>

```python
from cdktn_provider_awscc import backup_backup_vault

backupBackupVault.BackupBackupVault.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import backup_backup_vault

backupBackupVault.BackupBackupVault.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BackupBackupVault resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupBackupVault to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultArn">backup_vault_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lockConfiguration">lock_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference">BackupBackupVaultLockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.notifications">notifications</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference">BackupBackupVaultNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.accessPolicyInput">access_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultNameInput">backup_vault_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultTagsInput">backup_vault_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.encryptionKeyArnInput">encryption_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lockConfigurationInput">lock_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.notificationsInput">notifications_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.accessPolicy">access_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultName">backup_vault_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultTags">backup_vault_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_vault_arn`<sup>Required</sup> <a name="backup_vault_arn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultArn"></a>

```python
backup_vault_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lock_configuration`<sup>Required</sup> <a name="lock_configuration" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lockConfiguration"></a>

```python
lock_configuration: BackupBackupVaultLockConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference">BackupBackupVaultLockConfigurationOutputReference</a>

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.notifications"></a>

```python
notifications: BackupBackupVaultNotificationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference">BackupBackupVaultNotificationsOutputReference</a>

---

##### `access_policy_input`<sup>Optional</sup> <a name="access_policy_input" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.accessPolicyInput"></a>

```python
access_policy_input: str
```

- *Type:* str

---

##### `backup_vault_name_input`<sup>Optional</sup> <a name="backup_vault_name_input" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultNameInput"></a>

```python
backup_vault_name_input: str
```

- *Type:* str

---

##### `backup_vault_tags_input`<sup>Optional</sup> <a name="backup_vault_tags_input" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultTagsInput"></a>

```python
backup_vault_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `encryption_key_arn_input`<sup>Optional</sup> <a name="encryption_key_arn_input" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.encryptionKeyArnInput"></a>

```python
encryption_key_arn_input: str
```

- *Type:* str

---

##### `lock_configuration_input`<sup>Optional</sup> <a name="lock_configuration_input" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lockConfigurationInput"></a>

```python
lock_configuration_input: IResolvable | BackupBackupVaultLockConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a>

---

##### `notifications_input`<sup>Optional</sup> <a name="notifications_input" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.notificationsInput"></a>

```python
notifications_input: IResolvable | BackupBackupVaultNotifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a>

---

##### `access_policy`<sup>Required</sup> <a name="access_policy" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.accessPolicy"></a>

```python
access_policy: str
```

- *Type:* str

---

##### `backup_vault_name`<sup>Required</sup> <a name="backup_vault_name" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultName"></a>

```python
backup_vault_name: str
```

- *Type:* str

---

##### `backup_vault_tags`<sup>Required</sup> <a name="backup_vault_tags" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultTags"></a>

```python
backup_vault_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `encryption_key_arn`<sup>Required</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.encryptionKeyArn"></a>

```python
encryption_key_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupBackupVaultConfig <a name="BackupBackupVaultConfig" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_vault

backupBackupVault.BackupBackupVaultConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_vault_name: str,
  access_policy: str = None,
  backup_vault_tags: typing.Mapping[str] = None,
  encryption_key_arn: str = None,
  lock_configuration: BackupBackupVaultLockConfiguration = None,
  notifications: BackupBackupVaultNotifications = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.backupVaultName">backup_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#backup_vault_name BackupBackupVault#backup_vault_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.accessPolicy">access_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#access_policy BackupBackupVault#access_policy}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.backupVaultTags">backup_vault_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#backup_vault_tags BackupBackupVault#backup_vault_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#encryption_key_arn BackupBackupVault#encryption_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.lockConfiguration">lock_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#lock_configuration BackupBackupVault#lock_configuration}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.notifications">notifications</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#notifications BackupBackupVault#notifications}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_vault_name`<sup>Required</sup> <a name="backup_vault_name" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.backupVaultName"></a>

```python
backup_vault_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#backup_vault_name BackupBackupVault#backup_vault_name}.

---

##### `access_policy`<sup>Optional</sup> <a name="access_policy" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.accessPolicy"></a>

```python
access_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#access_policy BackupBackupVault#access_policy}.

---

##### `backup_vault_tags`<sup>Optional</sup> <a name="backup_vault_tags" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.backupVaultTags"></a>

```python
backup_vault_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#backup_vault_tags BackupBackupVault#backup_vault_tags}.

---

##### `encryption_key_arn`<sup>Optional</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.encryptionKeyArn"></a>

```python
encryption_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#encryption_key_arn BackupBackupVault#encryption_key_arn}.

---

##### `lock_configuration`<sup>Optional</sup> <a name="lock_configuration" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.lockConfiguration"></a>

```python
lock_configuration: BackupBackupVaultLockConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#lock_configuration BackupBackupVault#lock_configuration}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.notifications"></a>

```python
notifications: BackupBackupVaultNotifications
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#notifications BackupBackupVault#notifications}.

---

### BackupBackupVaultLockConfiguration <a name="BackupBackupVaultLockConfiguration" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_vault

backupBackupVault.BackupBackupVaultLockConfiguration(
  changeable_for_days: typing.Union[int, float] = None,
  max_retention_days: typing.Union[int, float] = None,
  min_retention_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.changeableForDays">changeable_for_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#changeable_for_days BackupBackupVault#changeable_for_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.maxRetentionDays">max_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#max_retention_days BackupBackupVault#max_retention_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.minRetentionDays">min_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#min_retention_days BackupBackupVault#min_retention_days}. |

---

##### `changeable_for_days`<sup>Optional</sup> <a name="changeable_for_days" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.changeableForDays"></a>

```python
changeable_for_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#changeable_for_days BackupBackupVault#changeable_for_days}.

---

##### `max_retention_days`<sup>Optional</sup> <a name="max_retention_days" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.maxRetentionDays"></a>

```python
max_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#max_retention_days BackupBackupVault#max_retention_days}.

---

##### `min_retention_days`<sup>Optional</sup> <a name="min_retention_days" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.minRetentionDays"></a>

```python
min_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#min_retention_days BackupBackupVault#min_retention_days}.

---

### BackupBackupVaultNotifications <a name="BackupBackupVaultNotifications" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_vault

backupBackupVault.BackupBackupVaultNotifications(
  backup_vault_events: typing.List[str] = None,
  sns_topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications.property.backupVaultEvents">backup_vault_events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#backup_vault_events BackupBackupVault#backup_vault_events}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#sns_topic_arn BackupBackupVault#sns_topic_arn}. |

---

##### `backup_vault_events`<sup>Optional</sup> <a name="backup_vault_events" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications.property.backupVaultEvents"></a>

```python
backup_vault_events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#backup_vault_events BackupBackupVault#backup_vault_events}.

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#sns_topic_arn BackupBackupVault#sns_topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupBackupVaultLockConfigurationOutputReference <a name="BackupBackupVaultLockConfigurationOutputReference" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_vault

backupBackupVault.BackupBackupVaultLockConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetChangeableForDays">reset_changeable_for_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetMaxRetentionDays">reset_max_retention_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetMinRetentionDays">reset_min_retention_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_changeable_for_days` <a name="reset_changeable_for_days" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetChangeableForDays"></a>

```python
def reset_changeable_for_days() -> None
```

##### `reset_max_retention_days` <a name="reset_max_retention_days" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetMaxRetentionDays"></a>

```python
def reset_max_retention_days() -> None
```

##### `reset_min_retention_days` <a name="reset_min_retention_days" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetMinRetentionDays"></a>

```python
def reset_min_retention_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.changeableForDaysInput">changeable_for_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.maxRetentionDaysInput">max_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.minRetentionDaysInput">min_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.changeableForDays">changeable_for_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.maxRetentionDays">max_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.minRetentionDays">min_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `changeable_for_days_input`<sup>Optional</sup> <a name="changeable_for_days_input" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.changeableForDaysInput"></a>

```python
changeable_for_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retention_days_input`<sup>Optional</sup> <a name="max_retention_days_input" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.maxRetentionDaysInput"></a>

```python
max_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_retention_days_input`<sup>Optional</sup> <a name="min_retention_days_input" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.minRetentionDaysInput"></a>

```python
min_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `changeable_for_days`<sup>Required</sup> <a name="changeable_for_days" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.changeableForDays"></a>

```python
changeable_for_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retention_days`<sup>Required</sup> <a name="max_retention_days" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.maxRetentionDays"></a>

```python
max_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_retention_days`<sup>Required</sup> <a name="min_retention_days" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.minRetentionDays"></a>

```python
min_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupVaultLockConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a>

---


### BackupBackupVaultNotificationsOutputReference <a name="BackupBackupVaultNotificationsOutputReference" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_vault

backupBackupVault.BackupBackupVaultNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resetBackupVaultEvents">reset_backup_vault_events</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resetSnsTopicArn">reset_sns_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup_vault_events` <a name="reset_backup_vault_events" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resetBackupVaultEvents"></a>

```python
def reset_backup_vault_events() -> None
```

##### `reset_sns_topic_arn` <a name="reset_sns_topic_arn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resetSnsTopicArn"></a>

```python
def reset_sns_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.backupVaultEventsInput">backup_vault_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.snsTopicArnInput">sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.backupVaultEvents">backup_vault_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_vault_events_input`<sup>Optional</sup> <a name="backup_vault_events_input" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.backupVaultEventsInput"></a>

```python
backup_vault_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sns_topic_arn_input`<sup>Optional</sup> <a name="sns_topic_arn_input" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.snsTopicArnInput"></a>

```python
sns_topic_arn_input: str
```

- *Type:* str

---

##### `backup_vault_events`<sup>Required</sup> <a name="backup_vault_events" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.backupVaultEvents"></a>

```python
backup_vault_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupVaultNotifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a>

---



