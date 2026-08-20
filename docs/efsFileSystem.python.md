# `efsFileSystem` Submodule <a name="`efsFileSystem` Submodule" id="@cdktn/provider-awscc.efsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EfsFileSystem <a name="EfsFileSystem" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system awscc_efs_file_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystem(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  availability_zone_name: str = None,
  backup_policy: EfsFileSystemBackupPolicy = None,
  bypass_policy_lockout_safety_check: bool | IResolvable = None,
  encrypted: bool | IResolvable = None,
  file_system_policy: str = None,
  file_system_protection: EfsFileSystemFileSystemProtection = None,
  file_system_tags: IResolvable | typing.List[EfsFileSystemFileSystemTags] = None,
  kms_key_id: str = None,
  lifecycle_policies: IResolvable | typing.List[EfsFileSystemLifecyclePolicies] = None,
  performance_mode: str = None,
  provisioned_throughput_in_mibps: typing.Union[int, float] = None,
  replication_configuration: EfsFileSystemReplicationConfiguration = None,
  throughput_mode: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.availabilityZoneName">availability_zone_name</a></code> | <code>str</code> | For One Zone file systems, specify the AWS Availability Zone in which to create the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.backupPolicy">backup_policy</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a></code> | Use the ``BackupPolicy`` to turn automatic backups on or off for the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.bypassPolicyLockoutSafetyCheck">bypass_policy_lockout_safety_check</a></code> | <code>bool \| cdktn.IResolvable</code> | (Optional) A boolean that specifies whether or not to bypass the ``FileSystemPolicy`` lockout safety check. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.encrypted">encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean value that, if true, creates an encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.fileSystemPolicy">file_system_policy</a></code> | <code>str</code> | The ``FileSystemPolicy`` for the EFS file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.fileSystemProtection">file_system_protection</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a></code> | Describes the protection on the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.fileSystemTags">file_system_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>]</code> | Use to create one or more tags associated with the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ID of the kms-key-long to be used to protect the encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.lifecyclePolicies">lifecycle_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>]</code> | An array of ``LifecyclePolicy`` objects that define the file system's ``LifecycleConfiguration`` object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.performanceMode">performance_mode</a></code> | <code>str</code> | The performance mode of the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.provisionedThroughputInMibps">provisioned_throughput_in_mibps</a></code> | <code>typing.Union[int, float]</code> | The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.replicationConfiguration">replication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a></code> | Describes the replication configuration for a specific file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.throughputMode">throughput_mode</a></code> | <code>str</code> | Specifies the throughput mode for the file system. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `availability_zone_name`<sup>Optional</sup> <a name="availability_zone_name" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.availabilityZoneName"></a>

- *Type:* str

For One Zone file systems, specify the AWS Availability Zone in which to create the file system.

Use the format `us-east-1a` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html#file-system-type) in the *Amazon EFS User Guide*.
One Zone file systems are not available in all Availability Zones in AWS-Regions where Amazon EFS is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}

---

##### `backup_policy`<sup>Optional</sup> <a name="backup_policy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.backupPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

Use the ``BackupPolicy`` to turn automatic backups on or off for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#backup_policy EfsFileSystem#backup_policy}

---

##### `bypass_policy_lockout_safety_check`<sup>Optional</sup> <a name="bypass_policy_lockout_safety_check" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.bypassPolicyLockoutSafetyCheck"></a>

- *Type:* bool | cdktn.IResolvable

(Optional) A boolean that specifies whether or not to bypass the ``FileSystemPolicy`` lockout safety check.

The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future `PutFileSystemPolicy` requests on this file system. Set `BypassPolicyLockoutSafetyCheck` to `True` only when you intend to prevent the IAM principal that is making the request from making subsequent `PutFileSystemPolicy` requests on this file system. The default value is `False`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#bypass_policy_lockout_safety_check EfsFileSystem#bypass_policy_lockout_safety_check}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.encrypted"></a>

- *Type:* bool | cdktn.IResolvable

A Boolean value that, if true, creates an encrypted file system.

When creating an encrypted file system, you have the option of specifying a KmsKeyId for an existing kms-key-long. If you don't specify a kms-key, then the default kms-key for EFS, `/aws/elasticfilesystem`, is used to protect the encrypted file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#encrypted EfsFileSystem#encrypted}

---

##### `file_system_policy`<sup>Optional</sup> <a name="file_system_policy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.fileSystemPolicy"></a>

- *Type:* str

The ``FileSystemPolicy`` for the EFS file system.

A file system policy is an IAM resource policy used to control NFS access to an EFS file system. For more information, see [Using to control NFS access to Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#file_system_policy EfsFileSystem#file_system_policy}

---

##### `file_system_protection`<sup>Optional</sup> <a name="file_system_protection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.fileSystemProtection"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

Describes the protection on the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#file_system_protection EfsFileSystem#file_system_protection}

---

##### `file_system_tags`<sup>Optional</sup> <a name="file_system_tags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.fileSystemTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>]

Use to create one or more tags associated with the file system.

Each tag is a user-defined key-value pair. Name your file system on creation by including a `"Key":"Name","Value":"{value}"` key-value pair. Each key must be unique. For more information, see [Tagging resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *General Reference Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#file_system_tags EfsFileSystem#file_system_tags}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The ID of the kms-key-long to be used to protect the encrypted file system.

This parameter is only required if you want to use a nondefault kms-key. If this parameter is not specified, the default kms-key for EFS is used. This ID can be in one of the following formats:

* Key ID - A unique identifier of the key, for example `1234abcd-12ab-34cd-56ef-1234567890ab`.
* ARN - An Amazon Resource Name (ARN) for the key, for example `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
* Key alias - A previously created display name for a key, for example `alias/projectKey1`.
* Key alias ARN - An ARN for a key alias, for example `arn:aws:kms:us-west-2:444455556666:alias/projectKey1`.

If `KmsKeyId` is specified, the `Encrypted` parameter must be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}

---

##### `lifecycle_policies`<sup>Optional</sup> <a name="lifecycle_policies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.lifecyclePolicies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>]

An array of ``LifecyclePolicy`` objects that define the file system's ``LifecycleConfiguration`` object.

A `LifecycleConfiguration` object informs Lifecycle management of the following:

* When to move files in the file system from primary storage to IA storage.
* When to move files in the file system from primary storage or IA storage to Archive storage.
* When to move files that are in IA or Archive storage to primary storage.

EFS requires that each `LifecyclePolicy` object have only a single transition. This means that in a request body, `LifecyclePolicies` needs to be structured as an array of `LifecyclePolicy` objects, one object for each transition, `TransitionToIA`, `TransitionToArchive````TransitionToPrimaryStorageClass`. See the example requests in the following section for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#lifecycle_policies EfsFileSystem#lifecycle_policies}

---

##### `performance_mode`<sup>Optional</sup> <a name="performance_mode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.performanceMode"></a>

- *Type:* str

The performance mode of the file system.

We recommend `generalPurpose` performance mode for all file systems. File systems using the `maxIO` performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. The `maxIO` mode is not supported on One Zone file systems.
Due to the higher per-operation latencies with Max I/O, we recommend using General Purpose performance mode for all file systems.
Default is `generalPurpose`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#performance_mode EfsFileSystem#performance_mode}

---

##### `provisioned_throughput_in_mibps`<sup>Optional</sup> <a name="provisioned_throughput_in_mibps" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.provisionedThroughputInMibps"></a>

- *Type:* typing.Union[int, float]

The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating.

Required if `ThroughputMode` is set to `provisioned`. Valid values are 1-3414 MiBps, with the upper limit depending on Region. To increase this limit, contact SUP. For more information, see [Amazon EFS quotas that you can increase](https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}

---

##### `replication_configuration`<sup>Optional</sup> <a name="replication_configuration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.replicationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

Describes the replication configuration for a specific file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#replication_configuration EfsFileSystem#replication_configuration}

---

##### `throughput_mode`<sup>Optional</sup> <a name="throughput_mode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.throughputMode"></a>

- *Type:* str

Specifies the throughput mode for the file system.

The mode can be `bursting`, `provisioned`, or `elastic`. If you set `ThroughputMode` to `provisioned`, you must also set a value for `ProvisionedThroughputInMibps`. After you create the file system, you can decrease your file system's Provisioned throughput or change between the throughput modes, with certain time restrictions. For more information, see [Specifying throughput with provisioned mode](https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput) in the *Amazon EFS User Guide*.
Default is `bursting`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putBackupPolicy">put_backup_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemProtection">put_file_system_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemTags">put_file_system_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putLifecyclePolicies">put_lifecycle_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putReplicationConfiguration">put_replication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName">reset_availability_zone_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBackupPolicy">reset_backup_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBypassPolicyLockoutSafetyCheck">reset_bypass_policy_lockout_safety_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemPolicy">reset_file_system_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemProtection">reset_file_system_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemTags">reset_file_system_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetLifecyclePolicies">reset_lifecycle_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetPerformanceMode">reset_performance_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps">reset_provisioned_throughput_in_mibps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetReplicationConfiguration">reset_replication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetThroughputMode">reset_throughput_mode</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backup_policy` <a name="put_backup_policy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putBackupPolicy"></a>

```python
def put_backup_policy(
  status: str = None
) -> None
```

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putBackupPolicy.parameter.status"></a>

- *Type:* str

Set the backup policy status for the file system.

* *ENABLED* - Turns automatic backups on for the file system.
* *DISABLED* - Turns automatic backups off for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#status EfsFileSystem#status}

---

##### `put_file_system_protection` <a name="put_file_system_protection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemProtection"></a>

```python
def put_file_system_protection(
  replication_overwrite_protection: str = None
) -> None
```

###### `replication_overwrite_protection`<sup>Optional</sup> <a name="replication_overwrite_protection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemProtection.parameter.replicationOverwriteProtection"></a>

- *Type:* str

The status of the file system's replication overwrite protection.

* `ENABLED` ? The file system cannot be used as the destination file system in a replication configuration. The file system is writeable. Replication overwrite protection is `ENABLED` by default.
* `DISABLED` ? The file system can be used as the destination file system in a replication configuration. The file system is read-only and can only be modified by EFS replication.
* `REPLICATING` ? The file system is being used as the destination file system in a replication configuration. The file system is read-only and is modified only by EFS replication.

If the replication configuration is deleted, the file system's replication overwrite protection is re-enabled, the file system becomes writeable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#replication_overwrite_protection EfsFileSystem#replication_overwrite_protection}

---

##### `put_file_system_tags` <a name="put_file_system_tags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemTags"></a>

```python
def put_file_system_tags(
  value: IResolvable | typing.List[EfsFileSystemFileSystemTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>]

---

##### `put_lifecycle_policies` <a name="put_lifecycle_policies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putLifecyclePolicies"></a>

```python
def put_lifecycle_policies(
  value: IResolvable | typing.List[EfsFileSystemLifecyclePolicies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putLifecyclePolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>]

---

##### `put_replication_configuration` <a name="put_replication_configuration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putReplicationConfiguration"></a>

```python
def put_replication_configuration(
  destinations: IResolvable | typing.List[EfsFileSystemReplicationConfigurationDestinations] = None
) -> None
```

###### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putReplicationConfiguration.parameter.destinations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>]

An array of destination objects. Only one destination object is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#destinations EfsFileSystem#destinations}

---

##### `reset_availability_zone_name` <a name="reset_availability_zone_name" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName"></a>

```python
def reset_availability_zone_name() -> None
```

##### `reset_backup_policy` <a name="reset_backup_policy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBackupPolicy"></a>

```python
def reset_backup_policy() -> None
```

##### `reset_bypass_policy_lockout_safety_check` <a name="reset_bypass_policy_lockout_safety_check" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBypassPolicyLockoutSafetyCheck"></a>

```python
def reset_bypass_policy_lockout_safety_check() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_file_system_policy` <a name="reset_file_system_policy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemPolicy"></a>

```python
def reset_file_system_policy() -> None
```

##### `reset_file_system_protection` <a name="reset_file_system_protection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemProtection"></a>

```python
def reset_file_system_protection() -> None
```

##### `reset_file_system_tags` <a name="reset_file_system_tags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemTags"></a>

```python
def reset_file_system_tags() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_lifecycle_policies` <a name="reset_lifecycle_policies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetLifecyclePolicies"></a>

```python
def reset_lifecycle_policies() -> None
```

##### `reset_performance_mode` <a name="reset_performance_mode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetPerformanceMode"></a>

```python
def reset_performance_mode() -> None
```

##### `reset_provisioned_throughput_in_mibps` <a name="reset_provisioned_throughput_in_mibps" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps"></a>

```python
def reset_provisioned_throughput_in_mibps() -> None
```

##### `reset_replication_configuration` <a name="reset_replication_configuration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetReplicationConfiguration"></a>

```python
def reset_replication_configuration() -> None
```

##### `reset_throughput_mode` <a name="reset_throughput_mode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetThroughputMode"></a>

```python
def reset_throughput_mode() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EfsFileSystem resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isConstruct"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformElement"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformResource"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystem.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystem.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EfsFileSystem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EfsFileSystem to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EfsFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EfsFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicy">backup_policy</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference">EfsFileSystemBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtection">file_system_protection</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference">EfsFileSystemFileSystemProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTags">file_system_tags</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList">EfsFileSystemFileSystemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePolicies">lifecycle_policies</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList">EfsFileSystemLifecyclePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfiguration">replication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference">EfsFileSystemReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput">availability_zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicyInput">backup_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheckInput">bypass_policy_lockout_safety_check_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encryptedInput">encrypted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicyInput">file_system_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtectionInput">file_system_protection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTagsInput">file_system_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePoliciesInput">lifecycle_policies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceModeInput">performance_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput">provisioned_throughput_in_mibps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfigurationInput">replication_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputModeInput">throughput_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneName">availability_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheck">bypass_policy_lockout_safety_check</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encrypted">encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicy">file_system_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceMode">performance_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps">provisioned_throughput_in_mibps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputMode">throughput_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `backup_policy`<sup>Required</sup> <a name="backup_policy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicy"></a>

```python
backup_policy: EfsFileSystemBackupPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference">EfsFileSystemBackupPolicyOutputReference</a>

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `file_system_protection`<sup>Required</sup> <a name="file_system_protection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtection"></a>

```python
file_system_protection: EfsFileSystemFileSystemProtectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference">EfsFileSystemFileSystemProtectionOutputReference</a>

---

##### `file_system_tags`<sup>Required</sup> <a name="file_system_tags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTags"></a>

```python
file_system_tags: EfsFileSystemFileSystemTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList">EfsFileSystemFileSystemTagsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_policies`<sup>Required</sup> <a name="lifecycle_policies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePolicies"></a>

```python
lifecycle_policies: EfsFileSystemLifecyclePoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList">EfsFileSystemLifecyclePoliciesList</a>

---

##### `replication_configuration`<sup>Required</sup> <a name="replication_configuration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfiguration"></a>

```python
replication_configuration: EfsFileSystemReplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference">EfsFileSystemReplicationConfigurationOutputReference</a>

---

##### `availability_zone_name_input`<sup>Optional</sup> <a name="availability_zone_name_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput"></a>

```python
availability_zone_name_input: str
```

- *Type:* str

---

##### `backup_policy_input`<sup>Optional</sup> <a name="backup_policy_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicyInput"></a>

```python
backup_policy_input: IResolvable | EfsFileSystemBackupPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

---

##### `bypass_policy_lockout_safety_check_input`<sup>Optional</sup> <a name="bypass_policy_lockout_safety_check_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheckInput"></a>

```python
bypass_policy_lockout_safety_check_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encryptedInput"></a>

```python
encrypted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `file_system_policy_input`<sup>Optional</sup> <a name="file_system_policy_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicyInput"></a>

```python
file_system_policy_input: str
```

- *Type:* str

---

##### `file_system_protection_input`<sup>Optional</sup> <a name="file_system_protection_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtectionInput"></a>

```python
file_system_protection_input: IResolvable | EfsFileSystemFileSystemProtection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

---

##### `file_system_tags_input`<sup>Optional</sup> <a name="file_system_tags_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTagsInput"></a>

```python
file_system_tags_input: IResolvable | typing.List[EfsFileSystemFileSystemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `lifecycle_policies_input`<sup>Optional</sup> <a name="lifecycle_policies_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePoliciesInput"></a>

```python
lifecycle_policies_input: IResolvable | typing.List[EfsFileSystemLifecyclePolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>]

---

##### `performance_mode_input`<sup>Optional</sup> <a name="performance_mode_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceModeInput"></a>

```python
performance_mode_input: str
```

- *Type:* str

---

##### `provisioned_throughput_in_mibps_input`<sup>Optional</sup> <a name="provisioned_throughput_in_mibps_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput"></a>

```python
provisioned_throughput_in_mibps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replication_configuration_input`<sup>Optional</sup> <a name="replication_configuration_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfigurationInput"></a>

```python
replication_configuration_input: IResolvable | EfsFileSystemReplicationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

---

##### `throughput_mode_input`<sup>Optional</sup> <a name="throughput_mode_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputModeInput"></a>

```python
throughput_mode_input: str
```

- *Type:* str

---

##### `availability_zone_name`<sup>Required</sup> <a name="availability_zone_name" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneName"></a>

```python
availability_zone_name: str
```

- *Type:* str

---

##### `bypass_policy_lockout_safety_check`<sup>Required</sup> <a name="bypass_policy_lockout_safety_check" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheck"></a>

```python
bypass_policy_lockout_safety_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encrypted"></a>

```python
encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `file_system_policy`<sup>Required</sup> <a name="file_system_policy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicy"></a>

```python
file_system_policy: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `performance_mode`<sup>Required</sup> <a name="performance_mode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceMode"></a>

```python
performance_mode: str
```

- *Type:* str

---

##### `provisioned_throughput_in_mibps`<sup>Required</sup> <a name="provisioned_throughput_in_mibps" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps"></a>

```python
provisioned_throughput_in_mibps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_mode`<sup>Required</sup> <a name="throughput_mode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputMode"></a>

```python
throughput_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EfsFileSystemBackupPolicy <a name="EfsFileSystemBackupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystemBackupPolicy(
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy.property.status">status</a></code> | <code>str</code> | Set the backup policy status for the file system. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy.property.status"></a>

```python
status: str
```

- *Type:* str

Set the backup policy status for the file system.

* *ENABLED* - Turns automatic backups on for the file system.
* *DISABLED* - Turns automatic backups off for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#status EfsFileSystem#status}

---

### EfsFileSystemConfig <a name="EfsFileSystemConfig" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.Initializer"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystemConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  availability_zone_name: str = None,
  backup_policy: EfsFileSystemBackupPolicy = None,
  bypass_policy_lockout_safety_check: bool | IResolvable = None,
  encrypted: bool | IResolvable = None,
  file_system_policy: str = None,
  file_system_protection: EfsFileSystemFileSystemProtection = None,
  file_system_tags: IResolvable | typing.List[EfsFileSystemFileSystemTags] = None,
  kms_key_id: str = None,
  lifecycle_policies: IResolvable | typing.List[EfsFileSystemLifecyclePolicies] = None,
  performance_mode: str = None,
  provisioned_throughput_in_mibps: typing.Union[int, float] = None,
  replication_configuration: EfsFileSystemReplicationConfiguration = None,
  throughput_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName">availability_zone_name</a></code> | <code>str</code> | For One Zone file systems, specify the AWS Availability Zone in which to create the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.backupPolicy">backup_policy</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a></code> | Use the ``BackupPolicy`` to turn automatic backups on or off for the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.bypassPolicyLockoutSafetyCheck">bypass_policy_lockout_safety_check</a></code> | <code>bool \| cdktn.IResolvable</code> | (Optional) A boolean that specifies whether or not to bypass the ``FileSystemPolicy`` lockout safety check. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.encrypted">encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean value that, if true, creates an encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemPolicy">file_system_policy</a></code> | <code>str</code> | The ``FileSystemPolicy`` for the EFS file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemProtection">file_system_protection</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a></code> | Describes the protection on the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemTags">file_system_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>]</code> | Use to create one or more tags associated with the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ID of the kms-key-long to be used to protect the encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicies">lifecycle_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>]</code> | An array of ``LifecyclePolicy`` objects that define the file system's ``LifecycleConfiguration`` object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.performanceMode">performance_mode</a></code> | <code>str</code> | The performance mode of the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps">provisioned_throughput_in_mibps</a></code> | <code>typing.Union[int, float]</code> | The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.replicationConfiguration">replication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a></code> | Describes the replication configuration for a specific file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.throughputMode">throughput_mode</a></code> | <code>str</code> | Specifies the throughput mode for the file system. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `availability_zone_name`<sup>Optional</sup> <a name="availability_zone_name" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName"></a>

```python
availability_zone_name: str
```

- *Type:* str

For One Zone file systems, specify the AWS Availability Zone in which to create the file system.

Use the format `us-east-1a` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html#file-system-type) in the *Amazon EFS User Guide*.
One Zone file systems are not available in all Availability Zones in AWS-Regions where Amazon EFS is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}

---

##### `backup_policy`<sup>Optional</sup> <a name="backup_policy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.backupPolicy"></a>

```python
backup_policy: EfsFileSystemBackupPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

Use the ``BackupPolicy`` to turn automatic backups on or off for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#backup_policy EfsFileSystem#backup_policy}

---

##### `bypass_policy_lockout_safety_check`<sup>Optional</sup> <a name="bypass_policy_lockout_safety_check" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```python
bypass_policy_lockout_safety_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Optional) A boolean that specifies whether or not to bypass the ``FileSystemPolicy`` lockout safety check.

The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future `PutFileSystemPolicy` requests on this file system. Set `BypassPolicyLockoutSafetyCheck` to `True` only when you intend to prevent the IAM principal that is making the request from making subsequent `PutFileSystemPolicy` requests on this file system. The default value is `False`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#bypass_policy_lockout_safety_check EfsFileSystem#bypass_policy_lockout_safety_check}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.encrypted"></a>

```python
encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A Boolean value that, if true, creates an encrypted file system.

When creating an encrypted file system, you have the option of specifying a KmsKeyId for an existing kms-key-long. If you don't specify a kms-key, then the default kms-key for EFS, `/aws/elasticfilesystem`, is used to protect the encrypted file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#encrypted EfsFileSystem#encrypted}

---

##### `file_system_policy`<sup>Optional</sup> <a name="file_system_policy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemPolicy"></a>

```python
file_system_policy: str
```

- *Type:* str

The ``FileSystemPolicy`` for the EFS file system.

A file system policy is an IAM resource policy used to control NFS access to an EFS file system. For more information, see [Using to control NFS access to Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#file_system_policy EfsFileSystem#file_system_policy}

---

##### `file_system_protection`<sup>Optional</sup> <a name="file_system_protection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemProtection"></a>

```python
file_system_protection: EfsFileSystemFileSystemProtection
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

Describes the protection on the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#file_system_protection EfsFileSystem#file_system_protection}

---

##### `file_system_tags`<sup>Optional</sup> <a name="file_system_tags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemTags"></a>

```python
file_system_tags: IResolvable | typing.List[EfsFileSystemFileSystemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>]

Use to create one or more tags associated with the file system.

Each tag is a user-defined key-value pair. Name your file system on creation by including a `"Key":"Name","Value":"{value}"` key-value pair. Each key must be unique. For more information, see [Tagging resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *General Reference Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#file_system_tags EfsFileSystem#file_system_tags}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The ID of the kms-key-long to be used to protect the encrypted file system.

This parameter is only required if you want to use a nondefault kms-key. If this parameter is not specified, the default kms-key for EFS is used. This ID can be in one of the following formats:

* Key ID - A unique identifier of the key, for example `1234abcd-12ab-34cd-56ef-1234567890ab`.
* ARN - An Amazon Resource Name (ARN) for the key, for example `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
* Key alias - A previously created display name for a key, for example `alias/projectKey1`.
* Key alias ARN - An ARN for a key alias, for example `arn:aws:kms:us-west-2:444455556666:alias/projectKey1`.

If `KmsKeyId` is specified, the `Encrypted` parameter must be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}

---

##### `lifecycle_policies`<sup>Optional</sup> <a name="lifecycle_policies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicies"></a>

```python
lifecycle_policies: IResolvable | typing.List[EfsFileSystemLifecyclePolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>]

An array of ``LifecyclePolicy`` objects that define the file system's ``LifecycleConfiguration`` object.

A `LifecycleConfiguration` object informs Lifecycle management of the following:

* When to move files in the file system from primary storage to IA storage.
* When to move files in the file system from primary storage or IA storage to Archive storage.
* When to move files that are in IA or Archive storage to primary storage.

EFS requires that each `LifecyclePolicy` object have only a single transition. This means that in a request body, `LifecyclePolicies` needs to be structured as an array of `LifecyclePolicy` objects, one object for each transition, `TransitionToIA`, `TransitionToArchive````TransitionToPrimaryStorageClass`. See the example requests in the following section for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#lifecycle_policies EfsFileSystem#lifecycle_policies}

---

##### `performance_mode`<sup>Optional</sup> <a name="performance_mode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.performanceMode"></a>

```python
performance_mode: str
```

- *Type:* str

The performance mode of the file system.

We recommend `generalPurpose` performance mode for all file systems. File systems using the `maxIO` performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. The `maxIO` mode is not supported on One Zone file systems.
Due to the higher per-operation latencies with Max I/O, we recommend using General Purpose performance mode for all file systems.
Default is `generalPurpose`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#performance_mode EfsFileSystem#performance_mode}

---

##### `provisioned_throughput_in_mibps`<sup>Optional</sup> <a name="provisioned_throughput_in_mibps" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps"></a>

```python
provisioned_throughput_in_mibps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating.

Required if `ThroughputMode` is set to `provisioned`. Valid values are 1-3414 MiBps, with the upper limit depending on Region. To increase this limit, contact SUP. For more information, see [Amazon EFS quotas that you can increase](https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}

---

##### `replication_configuration`<sup>Optional</sup> <a name="replication_configuration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.replicationConfiguration"></a>

```python
replication_configuration: EfsFileSystemReplicationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

Describes the replication configuration for a specific file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#replication_configuration EfsFileSystem#replication_configuration}

---

##### `throughput_mode`<sup>Optional</sup> <a name="throughput_mode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.throughputMode"></a>

```python
throughput_mode: str
```

- *Type:* str

Specifies the throughput mode for the file system.

The mode can be `bursting`, `provisioned`, or `elastic`. If you set `ThroughputMode` to `provisioned`, you must also set a value for `ProvisionedThroughputInMibps`. After you create the file system, you can decrease your file system's Provisioned throughput or change between the throughput modes, with certain time restrictions. For more information, see [Specifying throughput with provisioned mode](https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput) in the *Amazon EFS User Guide*.
Default is `bursting`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}

---

### EfsFileSystemFileSystemProtection <a name="EfsFileSystemFileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection.Initializer"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystemFileSystemProtection(
  replication_overwrite_protection: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection.property.replicationOverwriteProtection">replication_overwrite_protection</a></code> | <code>str</code> | The status of the file system's replication overwrite protection. |

---

##### `replication_overwrite_protection`<sup>Optional</sup> <a name="replication_overwrite_protection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection.property.replicationOverwriteProtection"></a>

```python
replication_overwrite_protection: str
```

- *Type:* str

The status of the file system's replication overwrite protection.

* `ENABLED` ? The file system cannot be used as the destination file system in a replication configuration. The file system is writeable. Replication overwrite protection is `ENABLED` by default.
* `DISABLED` ? The file system can be used as the destination file system in a replication configuration. The file system is read-only and can only be modified by EFS replication.
* `REPLICATING` ? The file system is being used as the destination file system in a replication configuration. The file system is read-only and is modified only by EFS replication.

If the replication configuration is deleted, the file system's replication overwrite protection is re-enabled, the file system becomes writeable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#replication_overwrite_protection EfsFileSystem#replication_overwrite_protection}

---

### EfsFileSystemFileSystemTags <a name="EfsFileSystemFileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.Initializer"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystemFileSystemTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.key">key</a></code> | <code>str</code> | The tag key (String). The key can't start with ``aws:``. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.value">value</a></code> | <code>str</code> | The value of the tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key (String). The key can't start with ``aws:``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#key EfsFileSystem#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#value EfsFileSystem#value}

---

### EfsFileSystemLifecyclePolicies <a name="EfsFileSystemLifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.Initializer"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystemLifecyclePolicies(
  transition_to_archive: str = None,
  transition_to_ia: str = None,
  transition_to_primary_storage_class: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToArchive">transition_to_archive</a></code> | <code>str</code> | The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToIa">transition_to_ia</a></code> | <code>str</code> | The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Infrequent Access (IA) storage. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToPrimaryStorageClass">transition_to_primary_storage_class</a></code> | <code>str</code> | Whether to move files back to primary (Standard) storage after they are accessed in IA or Archive storage. |

---

##### `transition_to_archive`<sup>Optional</sup> <a name="transition_to_archive" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToArchive"></a>

```python
transition_to_archive: str
```

- *Type:* str

The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage.

Metadata operations such as listing the contents of a directory don't count as file access events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#transition_to_archive EfsFileSystem#transition_to_archive}

---

##### `transition_to_ia`<sup>Optional</sup> <a name="transition_to_ia" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToIa"></a>

```python
transition_to_ia: str
```

- *Type:* str

The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Infrequent Access (IA) storage.

Metadata operations such as listing the contents of a directory don't count as file access events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#transition_to_ia EfsFileSystem#transition_to_ia}

---

##### `transition_to_primary_storage_class`<sup>Optional</sup> <a name="transition_to_primary_storage_class" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToPrimaryStorageClass"></a>

```python
transition_to_primary_storage_class: str
```

- *Type:* str

Whether to move files back to primary (Standard) storage after they are accessed in IA or Archive storage.

Metadata operations such as listing the contents of a directory don't count as file access events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}

---

### EfsFileSystemReplicationConfiguration <a name="EfsFileSystemReplicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystemReplicationConfiguration(
  destinations: IResolvable | typing.List[EfsFileSystemReplicationConfigurationDestinations] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>]</code> | An array of destination objects. Only one destination object is supported. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration.property.destinations"></a>

```python
destinations: IResolvable | typing.List[EfsFileSystemReplicationConfigurationDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>]

An array of destination objects. Only one destination object is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#destinations EfsFileSystem#destinations}

---

### EfsFileSystemReplicationConfigurationDestinations <a name="EfsFileSystemReplicationConfigurationDestinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystemReplicationConfigurationDestinations(
  availability_zone_name: str = None,
  file_system_id: str = None,
  kms_key_id: str = None,
  region: str = None,
  role_arn: str = None,
  status: str = None,
  status_message: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.availabilityZoneName">availability_zone_name</a></code> | <code>str</code> | For One Zone file systems, the replication configuration must specify the Availability Zone in which the destination file system is located. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.fileSystemId">file_system_id</a></code> | <code>str</code> | The ID of the destination Amazon EFS file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ID of an kms-key-long used to protect the encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.region">region</a></code> | <code>str</code> | The AWS-Region in which the destination file system is located. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the current source file system in the replication configuration. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.status">status</a></code> | <code>str</code> | Describes the status of the replication configuration. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.statusMessage">status_message</a></code> | <code>str</code> | Message that provides details about the ``PAUSED`` or ``ERRROR`` state of the replication destination configuration. |

---

##### `availability_zone_name`<sup>Optional</sup> <a name="availability_zone_name" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.availabilityZoneName"></a>

```python
availability_zone_name: str
```

- *Type:* str

For One Zone file systems, the replication configuration must specify the Availability Zone in which the destination file system is located.

Use the format `us-east-1a` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html) in the *Amazon EFS User Guide*.
One Zone file system type is not available in all Availability Zones in AWS-Regions where Amazon EFS is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}

---

##### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

The ID of the destination Amazon EFS file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#file_system_id EfsFileSystem#file_system_id}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The ID of an kms-key-long used to protect the encrypted file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.region"></a>

```python
region: str
```

- *Type:* str

The AWS-Region in which the destination file system is located.

For One Zone file systems, the replication configuration must specify the AWS-Region in which the destination file system is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#region EfsFileSystem#region}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the current source file system in the replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#role_arn EfsFileSystem#role_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.status"></a>

```python
status: str
```

- *Type:* str

Describes the status of the replication configuration.

For more information about replication status, see [Viewing replication details](https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#status EfsFileSystem#status}

---

##### `status_message`<sup>Optional</sup> <a name="status_message" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

Message that provides details about the ``PAUSED`` or ``ERRROR`` state of the replication destination configuration.

For more information about replication status messages, see [Viewing replication details](https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#status_message EfsFileSystem#status_message}

---

## Classes <a name="Classes" id="Classes"></a>

### EfsFileSystemBackupPolicyOutputReference <a name="EfsFileSystemBackupPolicyOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystemBackupPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EfsFileSystemBackupPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

---


### EfsFileSystemFileSystemProtectionOutputReference <a name="EfsFileSystemFileSystemProtectionOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resetReplicationOverwriteProtection">reset_replication_overwrite_protection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_replication_overwrite_protection` <a name="reset_replication_overwrite_protection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resetReplicationOverwriteProtection"></a>

```python
def reset_replication_overwrite_protection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtectionInput">replication_overwrite_protection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtection">replication_overwrite_protection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replication_overwrite_protection_input`<sup>Optional</sup> <a name="replication_overwrite_protection_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtectionInput"></a>

```python
replication_overwrite_protection_input: str
```

- *Type:* str

---

##### `replication_overwrite_protection`<sup>Required</sup> <a name="replication_overwrite_protection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtection"></a>

```python
replication_overwrite_protection: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EfsFileSystemFileSystemProtection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

---


### EfsFileSystemFileSystemTagsList <a name="EfsFileSystemFileSystemTagsList" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystemFileSystemTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EfsFileSystemFileSystemTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EfsFileSystemFileSystemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>]

---


### EfsFileSystemFileSystemTagsOutputReference <a name="EfsFileSystemFileSystemTagsOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystemFileSystemTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EfsFileSystemFileSystemTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>

---


### EfsFileSystemLifecyclePoliciesList <a name="EfsFileSystemLifecyclePoliciesList" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystemLifecyclePoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EfsFileSystemLifecyclePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EfsFileSystemLifecyclePolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>]

---


### EfsFileSystemLifecyclePoliciesOutputReference <a name="EfsFileSystemLifecyclePoliciesOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToArchive">reset_transition_to_archive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToIa">reset_transition_to_ia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToPrimaryStorageClass">reset_transition_to_primary_storage_class</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_transition_to_archive` <a name="reset_transition_to_archive" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToArchive"></a>

```python
def reset_transition_to_archive() -> None
```

##### `reset_transition_to_ia` <a name="reset_transition_to_ia" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToIa"></a>

```python
def reset_transition_to_ia() -> None
```

##### `reset_transition_to_primary_storage_class` <a name="reset_transition_to_primary_storage_class" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToPrimaryStorageClass"></a>

```python
def reset_transition_to_primary_storage_class() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchiveInput">transition_to_archive_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIaInput">transition_to_ia_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClassInput">transition_to_primary_storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchive">transition_to_archive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIa">transition_to_ia</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClass">transition_to_primary_storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transition_to_archive_input`<sup>Optional</sup> <a name="transition_to_archive_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchiveInput"></a>

```python
transition_to_archive_input: str
```

- *Type:* str

---

##### `transition_to_ia_input`<sup>Optional</sup> <a name="transition_to_ia_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIaInput"></a>

```python
transition_to_ia_input: str
```

- *Type:* str

---

##### `transition_to_primary_storage_class_input`<sup>Optional</sup> <a name="transition_to_primary_storage_class_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClassInput"></a>

```python
transition_to_primary_storage_class_input: str
```

- *Type:* str

---

##### `transition_to_archive`<sup>Required</sup> <a name="transition_to_archive" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchive"></a>

```python
transition_to_archive: str
```

- *Type:* str

---

##### `transition_to_ia`<sup>Required</sup> <a name="transition_to_ia" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIa"></a>

```python
transition_to_ia: str
```

- *Type:* str

---

##### `transition_to_primary_storage_class`<sup>Required</sup> <a name="transition_to_primary_storage_class" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClass"></a>

```python
transition_to_primary_storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EfsFileSystemLifecyclePolicies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>

---


### EfsFileSystemReplicationConfigurationDestinationsList <a name="EfsFileSystemReplicationConfigurationDestinationsList" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EfsFileSystemReplicationConfigurationDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EfsFileSystemReplicationConfigurationDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>]

---


### EfsFileSystemReplicationConfigurationDestinationsOutputReference <a name="EfsFileSystemReplicationConfigurationDestinationsOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetAvailabilityZoneName">reset_availability_zone_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetFileSystemId">reset_file_system_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatusMessage">reset_status_message</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone_name` <a name="reset_availability_zone_name" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetAvailabilityZoneName"></a>

```python
def reset_availability_zone_name() -> None
```

##### `reset_file_system_id` <a name="reset_file_system_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetFileSystemId"></a>

```python
def reset_file_system_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_status_message` <a name="reset_status_message" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatusMessage"></a>

```python
def reset_status_message() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneNameInput">availability_zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessageInput">status_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneName">availability_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_name_input`<sup>Optional</sup> <a name="availability_zone_name_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneNameInput"></a>

```python
availability_zone_name_input: str
```

- *Type:* str

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status_message_input`<sup>Optional</sup> <a name="status_message_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessageInput"></a>

```python
status_message_input: str
```

- *Type:* str

---

##### `availability_zone_name`<sup>Required</sup> <a name="availability_zone_name" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneName"></a>

```python
availability_zone_name: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EfsFileSystemReplicationConfigurationDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>

---


### EfsFileSystemReplicationConfigurationOutputReference <a name="EfsFileSystemReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import efs_file_system

efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destinations` <a name="put_destinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.putDestinations"></a>

```python
def put_destinations(
  value: IResolvable | typing.List[EfsFileSystemReplicationConfigurationDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>]

---

##### `reset_destinations` <a name="reset_destinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList">EfsFileSystemReplicationConfigurationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinationsInput">destinations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinations"></a>

```python
destinations: EfsFileSystemReplicationConfigurationDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList">EfsFileSystemReplicationConfigurationDestinationsList</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinationsInput"></a>

```python
destinations_input: IResolvable | typing.List[EfsFileSystemReplicationConfigurationDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EfsFileSystemReplicationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

---



