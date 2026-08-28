# `efsFileSystem` Submodule <a name="`efsFileSystem` Submodule" id="@cdktn/provider-awscc.efsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EfsFileSystem <a name="EfsFileSystem" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system awscc_efs_file_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystem;

EfsFileSystem.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .availabilityZoneName(java.lang.String)
//  .backupPolicy(EfsFileSystemBackupPolicy)
//  .bypassPolicyLockoutSafetyCheck(java.lang.Boolean|IResolvable)
//  .encrypted(java.lang.Boolean|IResolvable)
//  .fileSystemPolicy(java.lang.String)
//  .fileSystemProtection(EfsFileSystemFileSystemProtection)
//  .fileSystemTags(IResolvable|java.util.List<EfsFileSystemFileSystemTags>)
//  .kmsKeyId(java.lang.String)
//  .lifecyclePolicies(IResolvable|java.util.List<EfsFileSystemLifecyclePolicies>)
//  .performanceMode(java.lang.String)
//  .provisionedThroughputInMibps(java.lang.Number)
//  .replicationConfiguration(EfsFileSystemReplicationConfiguration)
//  .throughputMode(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.availabilityZoneName">availabilityZoneName</a></code> | <code>java.lang.String</code> | For One Zone file systems, specify the AWS Availability Zone in which to create the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.backupPolicy">backupPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a></code> | Use the ``BackupPolicy`` to turn automatic backups on or off for the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.bypassPolicyLockoutSafetyCheck">bypassPolicyLockoutSafetyCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Optional) A boolean that specifies whether or not to bypass the ``FileSystemPolicy`` lockout safety check. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.encrypted">encrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A Boolean value that, if true, creates an encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.fileSystemPolicy">fileSystemPolicy</a></code> | <code>java.lang.String</code> | The ``FileSystemPolicy`` for the EFS file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.fileSystemProtection">fileSystemProtection</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a></code> | Describes the protection on the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.fileSystemTags">fileSystemTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>></code> | Use to create one or more tags associated with the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ID of the kms-key-long to be used to protect the encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.lifecyclePolicies">lifecyclePolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>></code> | An array of ``LifecyclePolicy`` objects that define the file system's ``LifecycleConfiguration`` object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.performanceMode">performanceMode</a></code> | <code>java.lang.String</code> | The performance mode of the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.provisionedThroughputInMibps">provisionedThroughputInMibps</a></code> | <code>java.lang.Number</code> | The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a></code> | Describes the replication configuration for a specific file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.throughputMode">throughputMode</a></code> | <code>java.lang.String</code> | Specifies the throughput mode for the file system. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityZoneName`<sup>Optional</sup> <a name="availabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.availabilityZoneName"></a>

- *Type:* java.lang.String

For One Zone file systems, specify the AWS Availability Zone in which to create the file system.

Use the format `us-east-1a` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html#file-system-type) in the *Amazon EFS User Guide*.
One Zone file systems are not available in all Availability Zones in AWS-Regions where Amazon EFS is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}

---

##### `backupPolicy`<sup>Optional</sup> <a name="backupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.backupPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

Use the ``BackupPolicy`` to turn automatic backups on or off for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#backup_policy EfsFileSystem#backup_policy}

---

##### `bypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="bypassPolicyLockoutSafetyCheck" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.bypassPolicyLockoutSafetyCheck"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Optional) A boolean that specifies whether or not to bypass the ``FileSystemPolicy`` lockout safety check.

The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future `PutFileSystemPolicy` requests on this file system. Set `BypassPolicyLockoutSafetyCheck` to `True` only when you intend to prevent the IAM principal that is making the request from making subsequent `PutFileSystemPolicy` requests on this file system. The default value is `False`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#bypass_policy_lockout_safety_check EfsFileSystem#bypass_policy_lockout_safety_check}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.encrypted"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A Boolean value that, if true, creates an encrypted file system.

When creating an encrypted file system, you have the option of specifying a KmsKeyId for an existing kms-key-long. If you don't specify a kms-key, then the default kms-key for EFS, `/aws/elasticfilesystem`, is used to protect the encrypted file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#encrypted EfsFileSystem#encrypted}

---

##### `fileSystemPolicy`<sup>Optional</sup> <a name="fileSystemPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.fileSystemPolicy"></a>

- *Type:* java.lang.String

The ``FileSystemPolicy`` for the EFS file system.

A file system policy is an IAM resource policy used to control NFS access to an EFS file system. For more information, see [Using to control NFS access to Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#file_system_policy EfsFileSystem#file_system_policy}

---

##### `fileSystemProtection`<sup>Optional</sup> <a name="fileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.fileSystemProtection"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

Describes the protection on the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#file_system_protection EfsFileSystem#file_system_protection}

---

##### `fileSystemTags`<sup>Optional</sup> <a name="fileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.fileSystemTags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>>

Use to create one or more tags associated with the file system.

Each tag is a user-defined key-value pair. Name your file system on creation by including a `"Key":"Name","Value":"{value}"` key-value pair. Each key must be unique. For more information, see [Tagging resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *General Reference Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#file_system_tags EfsFileSystem#file_system_tags}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The ID of the kms-key-long to be used to protect the encrypted file system.

This parameter is only required if you want to use a nondefault kms-key. If this parameter is not specified, the default kms-key for EFS is used. This ID can be in one of the following formats:

* Key ID - A unique identifier of the key, for example `1234abcd-12ab-34cd-56ef-1234567890ab`.
* ARN - An Amazon Resource Name (ARN) for the key, for example `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
* Key alias - A previously created display name for a key, for example `alias/projectKey1`.
* Key alias ARN - An ARN for a key alias, for example `arn:aws:kms:us-west-2:444455556666:alias/projectKey1`.

If `KmsKeyId` is specified, the `Encrypted` parameter must be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}

---

##### `lifecyclePolicies`<sup>Optional</sup> <a name="lifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.lifecyclePolicies"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>>

An array of ``LifecyclePolicy`` objects that define the file system's ``LifecycleConfiguration`` object.

A `LifecycleConfiguration` object informs Lifecycle management of the following:

* When to move files in the file system from primary storage to IA storage.
* When to move files in the file system from primary storage or IA storage to Archive storage.
* When to move files that are in IA or Archive storage to primary storage.

EFS requires that each `LifecyclePolicy` object have only a single transition. This means that in a request body, `LifecyclePolicies` needs to be structured as an array of `LifecyclePolicy` objects, one object for each transition, `TransitionToIA`, `TransitionToArchive````TransitionToPrimaryStorageClass`. See the example requests in the following section for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#lifecycle_policies EfsFileSystem#lifecycle_policies}

---

##### `performanceMode`<sup>Optional</sup> <a name="performanceMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.performanceMode"></a>

- *Type:* java.lang.String

The performance mode of the file system.

We recommend `generalPurpose` performance mode for all file systems. File systems using the `maxIO` performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. The `maxIO` mode is not supported on One Zone file systems.
Due to the higher per-operation latencies with Max I/O, we recommend using General Purpose performance mode for all file systems.
Default is `generalPurpose`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#performance_mode EfsFileSystem#performance_mode}

---

##### `provisionedThroughputInMibps`<sup>Optional</sup> <a name="provisionedThroughputInMibps" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.provisionedThroughputInMibps"></a>

- *Type:* java.lang.Number

The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating.

Required if `ThroughputMode` is set to `provisioned`. Valid values are 1-3414 MiBps, with the upper limit depending on Region. To increase this limit, contact SUP. For more information, see [Amazon EFS quotas that you can increase](https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.replicationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

Describes the replication configuration for a specific file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#replication_configuration EfsFileSystem#replication_configuration}

---

##### `throughputMode`<sup>Optional</sup> <a name="throughputMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.throughputMode"></a>

- *Type:* java.lang.String

Specifies the throughput mode for the file system.

The mode can be `bursting`, `provisioned`, or `elastic`. If you set `ThroughputMode` to `provisioned`, you must also set a value for `ProvisionedThroughputInMibps`. After you create the file system, you can decrease your file system's Provisioned throughput or change between the throughput modes, with certain time restrictions. For more information, see [Specifying throughput with provisioned mode](https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput) in the *Amazon EFS User Guide*.
Default is `bursting`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putBackupPolicy">putBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemProtection">putFileSystemProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemTags">putFileSystemTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putLifecyclePolicies">putLifecyclePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putReplicationConfiguration">putReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName">resetAvailabilityZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBackupPolicy">resetBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBypassPolicyLockoutSafetyCheck">resetBypassPolicyLockoutSafetyCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemPolicy">resetFileSystemPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemProtection">resetFileSystemProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemTags">resetFileSystemTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetLifecyclePolicies">resetLifecyclePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetPerformanceMode">resetPerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps">resetProvisionedThroughputInMibps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetReplicationConfiguration">resetReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetThroughputMode">resetThroughputMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupPolicy` <a name="putBackupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putBackupPolicy"></a>

```java
public void putBackupPolicy(EfsFileSystemBackupPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

---

##### `putFileSystemProtection` <a name="putFileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemProtection"></a>

```java
public void putFileSystemProtection(EfsFileSystemFileSystemProtection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemProtection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

---

##### `putFileSystemTags` <a name="putFileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemTags"></a>

```java
public void putFileSystemTags(IResolvable|java.util.List<EfsFileSystemFileSystemTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>>

---

##### `putLifecyclePolicies` <a name="putLifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putLifecyclePolicies"></a>

```java
public void putLifecyclePolicies(IResolvable|java.util.List<EfsFileSystemLifecyclePolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putLifecyclePolicies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>>

---

##### `putReplicationConfiguration` <a name="putReplicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putReplicationConfiguration"></a>

```java
public void putReplicationConfiguration(EfsFileSystemReplicationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

---

##### `resetAvailabilityZoneName` <a name="resetAvailabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName"></a>

```java
public void resetAvailabilityZoneName()
```

##### `resetBackupPolicy` <a name="resetBackupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBackupPolicy"></a>

```java
public void resetBackupPolicy()
```

##### `resetBypassPolicyLockoutSafetyCheck` <a name="resetBypassPolicyLockoutSafetyCheck" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBypassPolicyLockoutSafetyCheck"></a>

```java
public void resetBypassPolicyLockoutSafetyCheck()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetFileSystemPolicy` <a name="resetFileSystemPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemPolicy"></a>

```java
public void resetFileSystemPolicy()
```

##### `resetFileSystemProtection` <a name="resetFileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemProtection"></a>

```java
public void resetFileSystemProtection()
```

##### `resetFileSystemTags` <a name="resetFileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemTags"></a>

```java
public void resetFileSystemTags()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetLifecyclePolicies` <a name="resetLifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetLifecyclePolicies"></a>

```java
public void resetLifecyclePolicies()
```

##### `resetPerformanceMode` <a name="resetPerformanceMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetPerformanceMode"></a>

```java
public void resetPerformanceMode()
```

##### `resetProvisionedThroughputInMibps` <a name="resetProvisionedThroughputInMibps" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps"></a>

```java
public void resetProvisionedThroughputInMibps()
```

##### `resetReplicationConfiguration` <a name="resetReplicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetReplicationConfiguration"></a>

```java
public void resetReplicationConfiguration()
```

##### `resetThroughputMode` <a name="resetThroughputMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetThroughputMode"></a>

```java
public void resetThroughputMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EfsFileSystem resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isConstruct"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystem;

EfsFileSystem.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystem;

EfsFileSystem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystem;

EfsFileSystem.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystem;

EfsFileSystem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EfsFileSystem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EfsFileSystem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EfsFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EfsFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EfsFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicy">backupPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference">EfsFileSystemBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtection">fileSystemProtection</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference">EfsFileSystemFileSystemProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTags">fileSystemTags</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList">EfsFileSystemFileSystemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePolicies">lifecyclePolicies</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList">EfsFileSystemLifecyclePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference">EfsFileSystemReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput">availabilityZoneNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicyInput">backupPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheckInput">bypassPolicyLockoutSafetyCheckInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicyInput">fileSystemPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtectionInput">fileSystemProtectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTagsInput">fileSystemTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePoliciesInput">lifecyclePoliciesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceModeInput">performanceModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput">provisionedThroughputInMibpsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfigurationInput">replicationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputModeInput">throughputModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneName">availabilityZoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheck">bypassPolicyLockoutSafetyCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicy">fileSystemPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceMode">performanceMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps">provisionedThroughputInMibps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputMode">throughputMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `backupPolicy`<sup>Required</sup> <a name="backupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicy"></a>

```java
public EfsFileSystemBackupPolicyOutputReference getBackupPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference">EfsFileSystemBackupPolicyOutputReference</a>

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `fileSystemProtection`<sup>Required</sup> <a name="fileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtection"></a>

```java
public EfsFileSystemFileSystemProtectionOutputReference getFileSystemProtection();
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference">EfsFileSystemFileSystemProtectionOutputReference</a>

---

##### `fileSystemTags`<sup>Required</sup> <a name="fileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTags"></a>

```java
public EfsFileSystemFileSystemTagsList getFileSystemTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList">EfsFileSystemFileSystemTagsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecyclePolicies`<sup>Required</sup> <a name="lifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePolicies"></a>

```java
public EfsFileSystemLifecyclePoliciesList getLifecyclePolicies();
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList">EfsFileSystemLifecyclePoliciesList</a>

---

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfiguration"></a>

```java
public EfsFileSystemReplicationConfigurationOutputReference getReplicationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference">EfsFileSystemReplicationConfigurationOutputReference</a>

---

##### `availabilityZoneNameInput`<sup>Optional</sup> <a name="availabilityZoneNameInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput"></a>

```java
public java.lang.String getAvailabilityZoneNameInput();
```

- *Type:* java.lang.String

---

##### `backupPolicyInput`<sup>Optional</sup> <a name="backupPolicyInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicyInput"></a>

```java
public IResolvable|EfsFileSystemBackupPolicy getBackupPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

---

##### `bypassPolicyLockoutSafetyCheckInput`<sup>Optional</sup> <a name="bypassPolicyLockoutSafetyCheckInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getBypassPolicyLockoutSafetyCheckInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encryptedInput"></a>

```java
public java.lang.Boolean|IResolvable getEncryptedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fileSystemPolicyInput`<sup>Optional</sup> <a name="fileSystemPolicyInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicyInput"></a>

```java
public java.lang.String getFileSystemPolicyInput();
```

- *Type:* java.lang.String

---

##### `fileSystemProtectionInput`<sup>Optional</sup> <a name="fileSystemProtectionInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtectionInput"></a>

```java
public IResolvable|EfsFileSystemFileSystemProtection getFileSystemProtectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

---

##### `fileSystemTagsInput`<sup>Optional</sup> <a name="fileSystemTagsInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTagsInput"></a>

```java
public IResolvable|java.util.List<EfsFileSystemFileSystemTags> getFileSystemTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `lifecyclePoliciesInput`<sup>Optional</sup> <a name="lifecyclePoliciesInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePoliciesInput"></a>

```java
public IResolvable|java.util.List<EfsFileSystemLifecyclePolicies> getLifecyclePoliciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>>

---

##### `performanceModeInput`<sup>Optional</sup> <a name="performanceModeInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceModeInput"></a>

```java
public java.lang.String getPerformanceModeInput();
```

- *Type:* java.lang.String

---

##### `provisionedThroughputInMibpsInput`<sup>Optional</sup> <a name="provisionedThroughputInMibpsInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput"></a>

```java
public java.lang.Number getProvisionedThroughputInMibpsInput();
```

- *Type:* java.lang.Number

---

##### `replicationConfigurationInput`<sup>Optional</sup> <a name="replicationConfigurationInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfigurationInput"></a>

```java
public IResolvable|EfsFileSystemReplicationConfiguration getReplicationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

---

##### `throughputModeInput`<sup>Optional</sup> <a name="throughputModeInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputModeInput"></a>

```java
public java.lang.String getThroughputModeInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneName`<sup>Required</sup> <a name="availabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneName"></a>

```java
public java.lang.String getAvailabilityZoneName();
```

- *Type:* java.lang.String

---

##### `bypassPolicyLockoutSafetyCheck`<sup>Required</sup> <a name="bypassPolicyLockoutSafetyCheck" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheck"></a>

```java
public java.lang.Boolean|IResolvable getBypassPolicyLockoutSafetyCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encrypted"></a>

```java
public java.lang.Boolean|IResolvable getEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fileSystemPolicy`<sup>Required</sup> <a name="fileSystemPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicy"></a>

```java
public java.lang.String getFileSystemPolicy();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `performanceMode`<sup>Required</sup> <a name="performanceMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceMode"></a>

```java
public java.lang.String getPerformanceMode();
```

- *Type:* java.lang.String

---

##### `provisionedThroughputInMibps`<sup>Required</sup> <a name="provisionedThroughputInMibps" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps"></a>

```java
public java.lang.Number getProvisionedThroughputInMibps();
```

- *Type:* java.lang.Number

---

##### `throughputMode`<sup>Required</sup> <a name="throughputMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputMode"></a>

```java
public java.lang.String getThroughputMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EfsFileSystemBackupPolicy <a name="EfsFileSystemBackupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystemBackupPolicy;

EfsFileSystemBackupPolicy.builder()
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy.property.status">status</a></code> | <code>java.lang.String</code> | Set the backup policy status for the file system. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Set the backup policy status for the file system.

* *ENABLED* - Turns automatic backups on for the file system.
* *DISABLED* - Turns automatic backups off for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#status EfsFileSystem#status}

---

### EfsFileSystemConfig <a name="EfsFileSystemConfig" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystemConfig;

EfsFileSystemConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .availabilityZoneName(java.lang.String)
//  .backupPolicy(EfsFileSystemBackupPolicy)
//  .bypassPolicyLockoutSafetyCheck(java.lang.Boolean|IResolvable)
//  .encrypted(java.lang.Boolean|IResolvable)
//  .fileSystemPolicy(java.lang.String)
//  .fileSystemProtection(EfsFileSystemFileSystemProtection)
//  .fileSystemTags(IResolvable|java.util.List<EfsFileSystemFileSystemTags>)
//  .kmsKeyId(java.lang.String)
//  .lifecyclePolicies(IResolvable|java.util.List<EfsFileSystemLifecyclePolicies>)
//  .performanceMode(java.lang.String)
//  .provisionedThroughputInMibps(java.lang.Number)
//  .replicationConfiguration(EfsFileSystemReplicationConfiguration)
//  .throughputMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName">availabilityZoneName</a></code> | <code>java.lang.String</code> | For One Zone file systems, specify the AWS Availability Zone in which to create the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.backupPolicy">backupPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a></code> | Use the ``BackupPolicy`` to turn automatic backups on or off for the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.bypassPolicyLockoutSafetyCheck">bypassPolicyLockoutSafetyCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Optional) A boolean that specifies whether or not to bypass the ``FileSystemPolicy`` lockout safety check. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A Boolean value that, if true, creates an encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemPolicy">fileSystemPolicy</a></code> | <code>java.lang.String</code> | The ``FileSystemPolicy`` for the EFS file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemProtection">fileSystemProtection</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a></code> | Describes the protection on the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemTags">fileSystemTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>></code> | Use to create one or more tags associated with the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ID of the kms-key-long to be used to protect the encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicies">lifecyclePolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>></code> | An array of ``LifecyclePolicy`` objects that define the file system's ``LifecycleConfiguration`` object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.performanceMode">performanceMode</a></code> | <code>java.lang.String</code> | The performance mode of the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps">provisionedThroughputInMibps</a></code> | <code>java.lang.Number</code> | The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a></code> | Describes the replication configuration for a specific file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.throughputMode">throughputMode</a></code> | <code>java.lang.String</code> | Specifies the throughput mode for the file system. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityZoneName`<sup>Optional</sup> <a name="availabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName"></a>

```java
public java.lang.String getAvailabilityZoneName();
```

- *Type:* java.lang.String

For One Zone file systems, specify the AWS Availability Zone in which to create the file system.

Use the format `us-east-1a` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html#file-system-type) in the *Amazon EFS User Guide*.
One Zone file systems are not available in all Availability Zones in AWS-Regions where Amazon EFS is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}

---

##### `backupPolicy`<sup>Optional</sup> <a name="backupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.backupPolicy"></a>

```java
public EfsFileSystemBackupPolicy getBackupPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

Use the ``BackupPolicy`` to turn automatic backups on or off for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#backup_policy EfsFileSystem#backup_policy}

---

##### `bypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="bypassPolicyLockoutSafetyCheck" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```java
public java.lang.Boolean|IResolvable getBypassPolicyLockoutSafetyCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Optional) A boolean that specifies whether or not to bypass the ``FileSystemPolicy`` lockout safety check.

The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future `PutFileSystemPolicy` requests on this file system. Set `BypassPolicyLockoutSafetyCheck` to `True` only when you intend to prevent the IAM principal that is making the request from making subsequent `PutFileSystemPolicy` requests on this file system. The default value is `False`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#bypass_policy_lockout_safety_check EfsFileSystem#bypass_policy_lockout_safety_check}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.encrypted"></a>

```java
public java.lang.Boolean|IResolvable getEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A Boolean value that, if true, creates an encrypted file system.

When creating an encrypted file system, you have the option of specifying a KmsKeyId for an existing kms-key-long. If you don't specify a kms-key, then the default kms-key for EFS, `/aws/elasticfilesystem`, is used to protect the encrypted file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#encrypted EfsFileSystem#encrypted}

---

##### `fileSystemPolicy`<sup>Optional</sup> <a name="fileSystemPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemPolicy"></a>

```java
public java.lang.String getFileSystemPolicy();
```

- *Type:* java.lang.String

The ``FileSystemPolicy`` for the EFS file system.

A file system policy is an IAM resource policy used to control NFS access to an EFS file system. For more information, see [Using to control NFS access to Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#file_system_policy EfsFileSystem#file_system_policy}

---

##### `fileSystemProtection`<sup>Optional</sup> <a name="fileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemProtection"></a>

```java
public EfsFileSystemFileSystemProtection getFileSystemProtection();
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

Describes the protection on the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#file_system_protection EfsFileSystem#file_system_protection}

---

##### `fileSystemTags`<sup>Optional</sup> <a name="fileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemTags"></a>

```java
public IResolvable|java.util.List<EfsFileSystemFileSystemTags> getFileSystemTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>>

Use to create one or more tags associated with the file system.

Each tag is a user-defined key-value pair. Name your file system on creation by including a `"Key":"Name","Value":"{value}"` key-value pair. Each key must be unique. For more information, see [Tagging resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *General Reference Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#file_system_tags EfsFileSystem#file_system_tags}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The ID of the kms-key-long to be used to protect the encrypted file system.

This parameter is only required if you want to use a nondefault kms-key. If this parameter is not specified, the default kms-key for EFS is used. This ID can be in one of the following formats:

* Key ID - A unique identifier of the key, for example `1234abcd-12ab-34cd-56ef-1234567890ab`.
* ARN - An Amazon Resource Name (ARN) for the key, for example `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
* Key alias - A previously created display name for a key, for example `alias/projectKey1`.
* Key alias ARN - An ARN for a key alias, for example `arn:aws:kms:us-west-2:444455556666:alias/projectKey1`.

If `KmsKeyId` is specified, the `Encrypted` parameter must be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}

---

##### `lifecyclePolicies`<sup>Optional</sup> <a name="lifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicies"></a>

```java
public IResolvable|java.util.List<EfsFileSystemLifecyclePolicies> getLifecyclePolicies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>>

An array of ``LifecyclePolicy`` objects that define the file system's ``LifecycleConfiguration`` object.

A `LifecycleConfiguration` object informs Lifecycle management of the following:

* When to move files in the file system from primary storage to IA storage.
* When to move files in the file system from primary storage or IA storage to Archive storage.
* When to move files that are in IA or Archive storage to primary storage.

EFS requires that each `LifecyclePolicy` object have only a single transition. This means that in a request body, `LifecyclePolicies` needs to be structured as an array of `LifecyclePolicy` objects, one object for each transition, `TransitionToIA`, `TransitionToArchive````TransitionToPrimaryStorageClass`. See the example requests in the following section for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#lifecycle_policies EfsFileSystem#lifecycle_policies}

---

##### `performanceMode`<sup>Optional</sup> <a name="performanceMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.performanceMode"></a>

```java
public java.lang.String getPerformanceMode();
```

- *Type:* java.lang.String

The performance mode of the file system.

We recommend `generalPurpose` performance mode for all file systems. File systems using the `maxIO` performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. The `maxIO` mode is not supported on One Zone file systems.
Due to the higher per-operation latencies with Max I/O, we recommend using General Purpose performance mode for all file systems.
Default is `generalPurpose`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#performance_mode EfsFileSystem#performance_mode}

---

##### `provisionedThroughputInMibps`<sup>Optional</sup> <a name="provisionedThroughputInMibps" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps"></a>

```java
public java.lang.Number getProvisionedThroughputInMibps();
```

- *Type:* java.lang.Number

The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating.

Required if `ThroughputMode` is set to `provisioned`. Valid values are 1-3414 MiBps, with the upper limit depending on Region. To increase this limit, contact SUP. For more information, see [Amazon EFS quotas that you can increase](https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.replicationConfiguration"></a>

```java
public EfsFileSystemReplicationConfiguration getReplicationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

Describes the replication configuration for a specific file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#replication_configuration EfsFileSystem#replication_configuration}

---

##### `throughputMode`<sup>Optional</sup> <a name="throughputMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.throughputMode"></a>

```java
public java.lang.String getThroughputMode();
```

- *Type:* java.lang.String

Specifies the throughput mode for the file system.

The mode can be `bursting`, `provisioned`, or `elastic`. If you set `ThroughputMode` to `provisioned`, you must also set a value for `ProvisionedThroughputInMibps`. After you create the file system, you can decrease your file system's Provisioned throughput or change between the throughput modes, with certain time restrictions. For more information, see [Specifying throughput with provisioned mode](https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput) in the *Amazon EFS User Guide*.
Default is `bursting`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}

---

### EfsFileSystemFileSystemProtection <a name="EfsFileSystemFileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection.Initializer"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystemFileSystemProtection;

EfsFileSystemFileSystemProtection.builder()
//  .replicationOverwriteProtection(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection.property.replicationOverwriteProtection">replicationOverwriteProtection</a></code> | <code>java.lang.String</code> | The status of the file system's replication overwrite protection. |

---

##### `replicationOverwriteProtection`<sup>Optional</sup> <a name="replicationOverwriteProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection.property.replicationOverwriteProtection"></a>

```java
public java.lang.String getReplicationOverwriteProtection();
```

- *Type:* java.lang.String

The status of the file system's replication overwrite protection.

* `ENABLED` ? The file system cannot be used as the destination file system in a replication configuration. The file system is writeable. Replication overwrite protection is `ENABLED` by default.
* `DISABLED` ? The file system can be used as the destination file system in a replication configuration. The file system is read-only and can only be modified by EFS replication.
* `REPLICATING` ? The file system is being used as the destination file system in a replication configuration. The file system is read-only and is modified only by EFS replication.

If the replication configuration is deleted, the file system's replication overwrite protection is re-enabled, the file system becomes writeable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#replication_overwrite_protection EfsFileSystem#replication_overwrite_protection}

---

### EfsFileSystemFileSystemTags <a name="EfsFileSystemFileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystemFileSystemTags;

EfsFileSystemFileSystemTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key (String). The key can't start with ``aws:``. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key (String). The key can't start with ``aws:``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#key EfsFileSystem#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#value EfsFileSystem#value}

---

### EfsFileSystemLifecyclePolicies <a name="EfsFileSystemLifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.Initializer"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystemLifecyclePolicies;

EfsFileSystemLifecyclePolicies.builder()
//  .transitionToArchive(java.lang.String)
//  .transitionToIa(java.lang.String)
//  .transitionToPrimaryStorageClass(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToArchive">transitionToArchive</a></code> | <code>java.lang.String</code> | The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToIa">transitionToIa</a></code> | <code>java.lang.String</code> | The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Infrequent Access (IA) storage. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToPrimaryStorageClass">transitionToPrimaryStorageClass</a></code> | <code>java.lang.String</code> | Whether to move files back to primary (Standard) storage after they are accessed in IA or Archive storage. |

---

##### `transitionToArchive`<sup>Optional</sup> <a name="transitionToArchive" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToArchive"></a>

```java
public java.lang.String getTransitionToArchive();
```

- *Type:* java.lang.String

The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage.

Metadata operations such as listing the contents of a directory don't count as file access events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#transition_to_archive EfsFileSystem#transition_to_archive}

---

##### `transitionToIa`<sup>Optional</sup> <a name="transitionToIa" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToIa"></a>

```java
public java.lang.String getTransitionToIa();
```

- *Type:* java.lang.String

The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Infrequent Access (IA) storage.

Metadata operations such as listing the contents of a directory don't count as file access events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#transition_to_ia EfsFileSystem#transition_to_ia}

---

##### `transitionToPrimaryStorageClass`<sup>Optional</sup> <a name="transitionToPrimaryStorageClass" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToPrimaryStorageClass"></a>

```java
public java.lang.String getTransitionToPrimaryStorageClass();
```

- *Type:* java.lang.String

Whether to move files back to primary (Standard) storage after they are accessed in IA or Archive storage.

Metadata operations such as listing the contents of a directory don't count as file access events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}

---

### EfsFileSystemReplicationConfiguration <a name="EfsFileSystemReplicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystemReplicationConfiguration;

EfsFileSystemReplicationConfiguration.builder()
//  .destinations(IResolvable|java.util.List<EfsFileSystemReplicationConfigurationDestinations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration.property.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>></code> | An array of destination objects. Only one destination object is supported. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration.property.destinations"></a>

```java
public IResolvable|java.util.List<EfsFileSystemReplicationConfigurationDestinations> getDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>>

An array of destination objects. Only one destination object is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#destinations EfsFileSystem#destinations}

---

### EfsFileSystemReplicationConfigurationDestinations <a name="EfsFileSystemReplicationConfigurationDestinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.Initializer"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystemReplicationConfigurationDestinations;

EfsFileSystemReplicationConfigurationDestinations.builder()
//  .availabilityZoneName(java.lang.String)
//  .fileSystemId(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .region(java.lang.String)
//  .roleArn(java.lang.String)
//  .status(java.lang.String)
//  .statusMessage(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.availabilityZoneName">availabilityZoneName</a></code> | <code>java.lang.String</code> | For One Zone file systems, the replication configuration must specify the Availability Zone in which the destination file system is located. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | The ID of the destination Amazon EFS file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ID of an kms-key-long used to protect the encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.region">region</a></code> | <code>java.lang.String</code> | The AWS-Region in which the destination file system is located. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the current source file system in the replication configuration. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.status">status</a></code> | <code>java.lang.String</code> | Describes the status of the replication configuration. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | Message that provides details about the ``PAUSED`` or ``ERRROR`` state of the replication destination configuration. |

---

##### `availabilityZoneName`<sup>Optional</sup> <a name="availabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.availabilityZoneName"></a>

```java
public java.lang.String getAvailabilityZoneName();
```

- *Type:* java.lang.String

For One Zone file systems, the replication configuration must specify the Availability Zone in which the destination file system is located.

Use the format `us-east-1a` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html) in the *Amazon EFS User Guide*.
One Zone file system type is not available in all Availability Zones in AWS-Regions where Amazon EFS is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

The ID of the destination Amazon EFS file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#file_system_id EfsFileSystem#file_system_id}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The ID of an kms-key-long used to protect the encrypted file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The AWS-Region in which the destination file system is located.

For One Zone file systems, the replication configuration must specify the AWS-Region in which the destination file system is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#region EfsFileSystem#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the current source file system in the replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#role_arn EfsFileSystem#role_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Describes the status of the replication configuration.

For more information about replication status, see [Viewing replication details](https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#status EfsFileSystem#status}

---

##### `statusMessage`<sup>Optional</sup> <a name="statusMessage" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

Message that provides details about the ``PAUSED`` or ``ERRROR`` state of the replication destination configuration.

For more information about replication status messages, see [Viewing replication details](https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_file_system#status_message EfsFileSystem#status_message}

---

## Classes <a name="Classes" id="Classes"></a>

### EfsFileSystemBackupPolicyOutputReference <a name="EfsFileSystemBackupPolicyOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystemBackupPolicyOutputReference;

new EfsFileSystemBackupPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|EfsFileSystemBackupPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

---


### EfsFileSystemFileSystemProtectionOutputReference <a name="EfsFileSystemFileSystemProtectionOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystemFileSystemProtectionOutputReference;

new EfsFileSystemFileSystemProtectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resetReplicationOverwriteProtection">resetReplicationOverwriteProtection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReplicationOverwriteProtection` <a name="resetReplicationOverwriteProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resetReplicationOverwriteProtection"></a>

```java
public void resetReplicationOverwriteProtection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtectionInput">replicationOverwriteProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtection">replicationOverwriteProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `replicationOverwriteProtectionInput`<sup>Optional</sup> <a name="replicationOverwriteProtectionInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtectionInput"></a>

```java
public java.lang.String getReplicationOverwriteProtectionInput();
```

- *Type:* java.lang.String

---

##### `replicationOverwriteProtection`<sup>Required</sup> <a name="replicationOverwriteProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtection"></a>

```java
public java.lang.String getReplicationOverwriteProtection();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.internalValue"></a>

```java
public IResolvable|EfsFileSystemFileSystemProtection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

---


### EfsFileSystemFileSystemTagsList <a name="EfsFileSystemFileSystemTagsList" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystemFileSystemTagsList;

new EfsFileSystemFileSystemTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.get"></a>

```java
public EfsFileSystemFileSystemTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EfsFileSystemFileSystemTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>>

---


### EfsFileSystemFileSystemTagsOutputReference <a name="EfsFileSystemFileSystemTagsOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystemFileSystemTagsOutputReference;

new EfsFileSystemFileSystemTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|EfsFileSystemFileSystemTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>

---


### EfsFileSystemLifecyclePoliciesList <a name="EfsFileSystemLifecyclePoliciesList" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystemLifecyclePoliciesList;

new EfsFileSystemLifecyclePoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.get"></a>

```java
public EfsFileSystemLifecyclePoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EfsFileSystemLifecyclePolicies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>>

---


### EfsFileSystemLifecyclePoliciesOutputReference <a name="EfsFileSystemLifecyclePoliciesOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystemLifecyclePoliciesOutputReference;

new EfsFileSystemLifecyclePoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToArchive">resetTransitionToArchive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToIa">resetTransitionToIa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToPrimaryStorageClass">resetTransitionToPrimaryStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransitionToArchive` <a name="resetTransitionToArchive" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToArchive"></a>

```java
public void resetTransitionToArchive()
```

##### `resetTransitionToIa` <a name="resetTransitionToIa" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToIa"></a>

```java
public void resetTransitionToIa()
```

##### `resetTransitionToPrimaryStorageClass` <a name="resetTransitionToPrimaryStorageClass" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToPrimaryStorageClass"></a>

```java
public void resetTransitionToPrimaryStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchiveInput">transitionToArchiveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIaInput">transitionToIaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClassInput">transitionToPrimaryStorageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchive">transitionToArchive</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIa">transitionToIa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClass">transitionToPrimaryStorageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `transitionToArchiveInput`<sup>Optional</sup> <a name="transitionToArchiveInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchiveInput"></a>

```java
public java.lang.String getTransitionToArchiveInput();
```

- *Type:* java.lang.String

---

##### `transitionToIaInput`<sup>Optional</sup> <a name="transitionToIaInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIaInput"></a>

```java
public java.lang.String getTransitionToIaInput();
```

- *Type:* java.lang.String

---

##### `transitionToPrimaryStorageClassInput`<sup>Optional</sup> <a name="transitionToPrimaryStorageClassInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClassInput"></a>

```java
public java.lang.String getTransitionToPrimaryStorageClassInput();
```

- *Type:* java.lang.String

---

##### `transitionToArchive`<sup>Required</sup> <a name="transitionToArchive" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchive"></a>

```java
public java.lang.String getTransitionToArchive();
```

- *Type:* java.lang.String

---

##### `transitionToIa`<sup>Required</sup> <a name="transitionToIa" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIa"></a>

```java
public java.lang.String getTransitionToIa();
```

- *Type:* java.lang.String

---

##### `transitionToPrimaryStorageClass`<sup>Required</sup> <a name="transitionToPrimaryStorageClass" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClass"></a>

```java
public java.lang.String getTransitionToPrimaryStorageClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.internalValue"></a>

```java
public IResolvable|EfsFileSystemLifecyclePolicies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>

---


### EfsFileSystemReplicationConfigurationDestinationsList <a name="EfsFileSystemReplicationConfigurationDestinationsList" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystemReplicationConfigurationDestinationsList;

new EfsFileSystemReplicationConfigurationDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.get"></a>

```java
public EfsFileSystemReplicationConfigurationDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EfsFileSystemReplicationConfigurationDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>>

---


### EfsFileSystemReplicationConfigurationDestinationsOutputReference <a name="EfsFileSystemReplicationConfigurationDestinationsOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystemReplicationConfigurationDestinationsOutputReference;

new EfsFileSystemReplicationConfigurationDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetAvailabilityZoneName">resetAvailabilityZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatusMessage">resetStatusMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZoneName` <a name="resetAvailabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetAvailabilityZoneName"></a>

```java
public void resetAvailabilityZoneName()
```

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetFileSystemId"></a>

```java
public void resetFileSystemId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetStatusMessage` <a name="resetStatusMessage" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatusMessage"></a>

```java
public void resetStatusMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneNameInput">availabilityZoneNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessageInput">statusMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneName">availabilityZoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZoneNameInput`<sup>Optional</sup> <a name="availabilityZoneNameInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneNameInput"></a>

```java
public java.lang.String getAvailabilityZoneNameInput();
```

- *Type:* java.lang.String

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemIdInput"></a>

```java
public java.lang.String getFileSystemIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `statusMessageInput`<sup>Optional</sup> <a name="statusMessageInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessageInput"></a>

```java
public java.lang.String getStatusMessageInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneName`<sup>Required</sup> <a name="availabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneName"></a>

```java
public java.lang.String getAvailabilityZoneName();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|EfsFileSystemReplicationConfigurationDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>

---


### EfsFileSystemReplicationConfigurationOutputReference <a name="EfsFileSystemReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.efs_file_system.EfsFileSystemReplicationConfigurationOutputReference;

new EfsFileSystemReplicationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.putDestinations"></a>

```java
public void putDestinations(IResolvable|java.util.List<EfsFileSystemReplicationConfigurationDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.putDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resetDestinations"></a>

```java
public void resetDestinations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList">EfsFileSystemReplicationConfigurationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinations"></a>

```java
public EfsFileSystemReplicationConfigurationDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList">EfsFileSystemReplicationConfigurationDestinationsList</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinationsInput"></a>

```java
public IResolvable|java.util.List<EfsFileSystemReplicationConfigurationDestinations> getDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|EfsFileSystemReplicationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

---



