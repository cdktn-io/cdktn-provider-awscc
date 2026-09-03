# `rdsDbInstance` Submodule <a name="`rdsDbInstance` Submodule" id="@cdktn/provider-awscc.rdsDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbInstance <a name="RdsDbInstance" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance awscc_rds_db_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.NewRdsDbInstance(scope Construct, id *string, config RdsDbInstanceConfig) RdsDbInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig">RdsDbInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig">RdsDbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAdditionalStorageVolumes">PutAdditionalStorageVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAssociatedRoles">PutAssociatedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putMasterUserSecret">PutMasterUserSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putProcessorFeatures">PutProcessorFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAdditionalStorageVolumes">ResetAdditionalStorageVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAllocatedStorage">ResetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAllowMajorVersionUpgrade">ResetAllowMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetApplyImmediately">ResetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAssociatedRoles">ResetAssociatedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationKmsKeyId">ResetAutomaticBackupReplicationKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationRegion">ResetAutomaticBackupReplicationRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationRetentionPeriod">ResetAutomaticBackupReplicationRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetBackupRetentionPeriod">ResetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetBackupTarget">ResetBackupTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCaCertificateIdentifier">ResetCaCertificateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCertificateRotationRestart">ResetCertificateRotationRestart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCharacterSetName">ResetCharacterSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCopyTagsToSnapshot">ResetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCustomIamInstanceProfile">ResetCustomIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDatabaseInsightsMode">ResetDatabaseInsightsMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbClusterIdentifier">ResetDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbClusterSnapshotIdentifier">ResetDbClusterSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbInstanceClass">ResetDbInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbInstanceIdentifier">ResetDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbName">ResetDbName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbParameterGroupName">ResetDbParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSecurityGroups">ResetDbSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSnapshotIdentifier">ResetDbSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSubnetGroupName">ResetDbSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSystemId">ResetDbSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDedicatedLogVolume">ResetDedicatedLogVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDeleteAutomatedBackups">ResetDeleteAutomatedBackups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainAuthSecretArn">ResetDomainAuthSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainDnsIps">ResetDomainDnsIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainFqdn">ResetDomainFqdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainIamRoleName">ResetDomainIamRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainOu">ResetDomainOu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnableCloudwatchLogsExports">ResetEnableCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnableIamDatabaseAuthentication">ResetEnableIamDatabaseAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnablePerformanceInsights">ResetEnablePerformanceInsights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngineLifecycleSupport">ResetEngineLifecycleSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetManageMasterUserPassword">ResetManageMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserAuthenticationType">ResetMasterUserAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUsername">ResetMasterUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserPassword">ResetMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserSecret">ResetMasterUserSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMaxAllocatedStorage">ResetMaxAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMonitoringInterval">ResetMonitoringInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMonitoringRoleArn">ResetMonitoringRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMultiAz">ResetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetNcharCharacterSetName">ResetNcharCharacterSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetOptionGroupName">ResetOptionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPerformanceInsightsKmsKeyId">ResetPerformanceInsightsKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPerformanceInsightsRetentionPeriod">ResetPerformanceInsightsRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPreferredBackupWindow">ResetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetProcessorFeatures">ResetProcessorFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPromotionTier">ResetPromotionTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetReplicaMode">ResetReplicaMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetRestoreTime">ResetRestoreTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbClusterIdentifier">ResetSourceDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbInstanceAutomatedBackupsArn">ResetSourceDbInstanceAutomatedBackupsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbInstanceIdentifier">ResetSourceDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbiResourceId">ResetSourceDbiResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceRegion">ResetSourceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageEncrypted">ResetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageThroughput">ResetStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTdeCredentialArn">ResetTdeCredentialArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTdeCredentialPassword">ResetTdeCredentialPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetUseDefaultProcessorFeatures">ResetUseDefaultProcessorFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetUseLatestRestorableTime">ResetUseLatestRestorableTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetVpcSecurityGroups">ResetVpcSecurityGroups</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalStorageVolumes` <a name="PutAdditionalStorageVolumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAdditionalStorageVolumes"></a>

```go
func PutAdditionalStorageVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAdditionalStorageVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAssociatedRoles` <a name="PutAssociatedRoles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAssociatedRoles"></a>

```go
func PutAssociatedRoles(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAssociatedRoles.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMasterUserSecret` <a name="PutMasterUserSecret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putMasterUserSecret"></a>

```go
func PutMasterUserSecret(value RdsDbInstanceMasterUserSecret)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putMasterUserSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a>

---

##### `PutProcessorFeatures` <a name="PutProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putProcessorFeatures"></a>

```go
func PutProcessorFeatures(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putProcessorFeatures.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalStorageVolumes` <a name="ResetAdditionalStorageVolumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAdditionalStorageVolumes"></a>

```go
func ResetAdditionalStorageVolumes()
```

##### `ResetAllocatedStorage` <a name="ResetAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAllocatedStorage"></a>

```go
func ResetAllocatedStorage()
```

##### `ResetAllowMajorVersionUpgrade` <a name="ResetAllowMajorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAllowMajorVersionUpgrade"></a>

```go
func ResetAllowMajorVersionUpgrade()
```

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetApplyImmediately"></a>

```go
func ResetApplyImmediately()
```

##### `ResetAssociatedRoles` <a name="ResetAssociatedRoles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAssociatedRoles"></a>

```go
func ResetAssociatedRoles()
```

##### `ResetAutomaticBackupReplicationKmsKeyId` <a name="ResetAutomaticBackupReplicationKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationKmsKeyId"></a>

```go
func ResetAutomaticBackupReplicationKmsKeyId()
```

##### `ResetAutomaticBackupReplicationRegion` <a name="ResetAutomaticBackupReplicationRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationRegion"></a>

```go
func ResetAutomaticBackupReplicationRegion()
```

##### `ResetAutomaticBackupReplicationRetentionPeriod` <a name="ResetAutomaticBackupReplicationRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationRetentionPeriod"></a>

```go
func ResetAutomaticBackupReplicationRetentionPeriod()
```

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutoMinorVersionUpgrade"></a>

```go
func ResetAutoMinorVersionUpgrade()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetBackupRetentionPeriod` <a name="ResetBackupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetBackupRetentionPeriod"></a>

```go
func ResetBackupRetentionPeriod()
```

##### `ResetBackupTarget` <a name="ResetBackupTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetBackupTarget"></a>

```go
func ResetBackupTarget()
```

##### `ResetCaCertificateIdentifier` <a name="ResetCaCertificateIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCaCertificateIdentifier"></a>

```go
func ResetCaCertificateIdentifier()
```

##### `ResetCertificateRotationRestart` <a name="ResetCertificateRotationRestart" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCertificateRotationRestart"></a>

```go
func ResetCertificateRotationRestart()
```

##### `ResetCharacterSetName` <a name="ResetCharacterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCharacterSetName"></a>

```go
func ResetCharacterSetName()
```

##### `ResetCopyTagsToSnapshot` <a name="ResetCopyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCopyTagsToSnapshot"></a>

```go
func ResetCopyTagsToSnapshot()
```

##### `ResetCustomIamInstanceProfile` <a name="ResetCustomIamInstanceProfile" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCustomIamInstanceProfile"></a>

```go
func ResetCustomIamInstanceProfile()
```

##### `ResetDatabaseInsightsMode` <a name="ResetDatabaseInsightsMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDatabaseInsightsMode"></a>

```go
func ResetDatabaseInsightsMode()
```

##### `ResetDbClusterIdentifier` <a name="ResetDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbClusterIdentifier"></a>

```go
func ResetDbClusterIdentifier()
```

##### `ResetDbClusterSnapshotIdentifier` <a name="ResetDbClusterSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbClusterSnapshotIdentifier"></a>

```go
func ResetDbClusterSnapshotIdentifier()
```

##### `ResetDbInstanceClass` <a name="ResetDbInstanceClass" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbInstanceClass"></a>

```go
func ResetDbInstanceClass()
```

##### `ResetDbInstanceIdentifier` <a name="ResetDbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbInstanceIdentifier"></a>

```go
func ResetDbInstanceIdentifier()
```

##### `ResetDbName` <a name="ResetDbName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbName"></a>

```go
func ResetDbName()
```

##### `ResetDbParameterGroupName` <a name="ResetDbParameterGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbParameterGroupName"></a>

```go
func ResetDbParameterGroupName()
```

##### `ResetDbSecurityGroups` <a name="ResetDbSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSecurityGroups"></a>

```go
func ResetDbSecurityGroups()
```

##### `ResetDbSnapshotIdentifier` <a name="ResetDbSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSnapshotIdentifier"></a>

```go
func ResetDbSnapshotIdentifier()
```

##### `ResetDbSubnetGroupName` <a name="ResetDbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSubnetGroupName"></a>

```go
func ResetDbSubnetGroupName()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSystemId"></a>

```go
func ResetDbSystemId()
```

##### `ResetDedicatedLogVolume` <a name="ResetDedicatedLogVolume" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDedicatedLogVolume"></a>

```go
func ResetDedicatedLogVolume()
```

##### `ResetDeleteAutomatedBackups` <a name="ResetDeleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDeleteAutomatedBackups"></a>

```go
func ResetDeleteAutomatedBackups()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetDomainAuthSecretArn` <a name="ResetDomainAuthSecretArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainAuthSecretArn"></a>

```go
func ResetDomainAuthSecretArn()
```

##### `ResetDomainDnsIps` <a name="ResetDomainDnsIps" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainDnsIps"></a>

```go
func ResetDomainDnsIps()
```

##### `ResetDomainFqdn` <a name="ResetDomainFqdn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainFqdn"></a>

```go
func ResetDomainFqdn()
```

##### `ResetDomainIamRoleName` <a name="ResetDomainIamRoleName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainIamRoleName"></a>

```go
func ResetDomainIamRoleName()
```

##### `ResetDomainOu` <a name="ResetDomainOu" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainOu"></a>

```go
func ResetDomainOu()
```

##### `ResetEnableCloudwatchLogsExports` <a name="ResetEnableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnableCloudwatchLogsExports"></a>

```go
func ResetEnableCloudwatchLogsExports()
```

##### `ResetEnableIamDatabaseAuthentication` <a name="ResetEnableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnableIamDatabaseAuthentication"></a>

```go
func ResetEnableIamDatabaseAuthentication()
```

##### `ResetEnablePerformanceInsights` <a name="ResetEnablePerformanceInsights" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnablePerformanceInsights"></a>

```go
func ResetEnablePerformanceInsights()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngine"></a>

```go
func ResetEngine()
```

##### `ResetEngineLifecycleSupport` <a name="ResetEngineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngineLifecycleSupport"></a>

```go
func ResetEngineLifecycleSupport()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetLicenseModel"></a>

```go
func ResetLicenseModel()
```

##### `ResetManageMasterUserPassword` <a name="ResetManageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetManageMasterUserPassword"></a>

```go
func ResetManageMasterUserPassword()
```

##### `ResetMasterUserAuthenticationType` <a name="ResetMasterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserAuthenticationType"></a>

```go
func ResetMasterUserAuthenticationType()
```

##### `ResetMasterUsername` <a name="ResetMasterUsername" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUsername"></a>

```go
func ResetMasterUsername()
```

##### `ResetMasterUserPassword` <a name="ResetMasterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserPassword"></a>

```go
func ResetMasterUserPassword()
```

##### `ResetMasterUserSecret` <a name="ResetMasterUserSecret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserSecret"></a>

```go
func ResetMasterUserSecret()
```

##### `ResetMaxAllocatedStorage` <a name="ResetMaxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMaxAllocatedStorage"></a>

```go
func ResetMaxAllocatedStorage()
```

##### `ResetMonitoringInterval` <a name="ResetMonitoringInterval" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMonitoringInterval"></a>

```go
func ResetMonitoringInterval()
```

##### `ResetMonitoringRoleArn` <a name="ResetMonitoringRoleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMonitoringRoleArn"></a>

```go
func ResetMonitoringRoleArn()
```

##### `ResetMultiAz` <a name="ResetMultiAz" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMultiAz"></a>

```go
func ResetMultiAz()
```

##### `ResetNcharCharacterSetName` <a name="ResetNcharCharacterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetNcharCharacterSetName"></a>

```go
func ResetNcharCharacterSetName()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetNetworkType"></a>

```go
func ResetNetworkType()
```

##### `ResetOptionGroupName` <a name="ResetOptionGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetOptionGroupName"></a>

```go
func ResetOptionGroupName()
```

##### `ResetPerformanceInsightsKmsKeyId` <a name="ResetPerformanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPerformanceInsightsKmsKeyId"></a>

```go
func ResetPerformanceInsightsKmsKeyId()
```

##### `ResetPerformanceInsightsRetentionPeriod` <a name="ResetPerformanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPerformanceInsightsRetentionPeriod"></a>

```go
func ResetPerformanceInsightsRetentionPeriod()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPreferredBackupWindow` <a name="ResetPreferredBackupWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPreferredBackupWindow"></a>

```go
func ResetPreferredBackupWindow()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPreferredMaintenanceWindow"></a>

```go
func ResetPreferredMaintenanceWindow()
```

##### `ResetProcessorFeatures` <a name="ResetProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetProcessorFeatures"></a>

```go
func ResetProcessorFeatures()
```

##### `ResetPromotionTier` <a name="ResetPromotionTier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPromotionTier"></a>

```go
func ResetPromotionTier()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPubliclyAccessible"></a>

```go
func ResetPubliclyAccessible()
```

##### `ResetReplicaMode` <a name="ResetReplicaMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetReplicaMode"></a>

```go
func ResetReplicaMode()
```

##### `ResetRestoreTime` <a name="ResetRestoreTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetRestoreTime"></a>

```go
func ResetRestoreTime()
```

##### `ResetSourceDbClusterIdentifier` <a name="ResetSourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbClusterIdentifier"></a>

```go
func ResetSourceDbClusterIdentifier()
```

##### `ResetSourceDbInstanceAutomatedBackupsArn` <a name="ResetSourceDbInstanceAutomatedBackupsArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbInstanceAutomatedBackupsArn"></a>

```go
func ResetSourceDbInstanceAutomatedBackupsArn()
```

##### `ResetSourceDbInstanceIdentifier` <a name="ResetSourceDbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbInstanceIdentifier"></a>

```go
func ResetSourceDbInstanceIdentifier()
```

##### `ResetSourceDbiResourceId` <a name="ResetSourceDbiResourceId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbiResourceId"></a>

```go
func ResetSourceDbiResourceId()
```

##### `ResetSourceRegion` <a name="ResetSourceRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceRegion"></a>

```go
func ResetSourceRegion()
```

##### `ResetStorageEncrypted` <a name="ResetStorageEncrypted" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageEncrypted"></a>

```go
func ResetStorageEncrypted()
```

##### `ResetStorageThroughput` <a name="ResetStorageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageThroughput"></a>

```go
func ResetStorageThroughput()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageType"></a>

```go
func ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTdeCredentialArn` <a name="ResetTdeCredentialArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTdeCredentialArn"></a>

```go
func ResetTdeCredentialArn()
```

##### `ResetTdeCredentialPassword` <a name="ResetTdeCredentialPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTdeCredentialPassword"></a>

```go
func ResetTdeCredentialPassword()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTimezone"></a>

```go
func ResetTimezone()
```

##### `ResetUseDefaultProcessorFeatures` <a name="ResetUseDefaultProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetUseDefaultProcessorFeatures"></a>

```go
func ResetUseDefaultProcessorFeatures()
```

##### `ResetUseLatestRestorableTime` <a name="ResetUseLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetUseLatestRestorableTime"></a>

```go
func ResetUseLatestRestorableTime()
```

##### `ResetVpcSecurityGroups` <a name="ResetVpcSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetVpcSecurityGroups"></a>

```go
func ResetVpcSecurityGroups()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.RdsDbInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.RdsDbInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.RdsDbInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.RdsDbInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RdsDbInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RdsDbInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RdsDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.additionalStorageVolumes">AdditionalStorageVolumes</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList">RdsDbInstanceAdditionalStorageVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.associatedRoles">AssociatedRoles</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList">RdsDbInstanceAssociatedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticRestartTime">AutomaticRestartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateDetails">CertificateDetails</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference">RdsDbInstanceCertificateDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceArn">DbInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceStatus">DbInstanceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbiResourceId">DbiResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference">RdsDbInstanceEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.instanceCreateTime">InstanceCreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.isStorageConfigUpgradeAvailable">IsStorageConfigUpgradeAvailable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.latestRestorableTime">LatestRestorableTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.listenerEndpoint">ListenerEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference">RdsDbInstanceListenerEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserSecret">MasterUserSecret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference">RdsDbInstanceMasterUserSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.percentProgress">PercentProgress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.processorFeatures">ProcessorFeatures</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList">RdsDbInstanceProcessorFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.readReplicaDbClusterIdentifiers">ReadReplicaDbClusterIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.readReplicaDbInstanceIdentifiers">ReadReplicaDbInstanceIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.resumeFullAutomationModeTime">ResumeFullAutomationModeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.secondaryAvailabilityZone">SecondaryAvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.statusInfos">StatusInfos</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList">RdsDbInstanceStatusInfosList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageOperationPercentProgress">StorageOperationPercentProgress</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageOperationStatus">StorageOperationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList">RdsDbInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.additionalStorageVolumesInput">AdditionalStorageVolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allocatedStorageInput">AllocatedStorageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allowMajorVersionUpgradeInput">AllowMajorVersionUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.associatedRolesInput">AssociatedRolesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationKmsKeyIdInput">AutomaticBackupReplicationKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRegionInput">AutomaticBackupReplicationRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRetentionPeriodInput">AutomaticBackupReplicationRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupRetentionPeriodInput">BackupRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupTargetInput">BackupTargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.caCertificateIdentifierInput">CaCertificateIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateRotationRestartInput">CertificateRotationRestartInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.characterSetNameInput">CharacterSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.copyTagsToSnapshotInput">CopyTagsToSnapshotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.customIamInstanceProfileInput">CustomIamInstanceProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.databaseInsightsModeInput">DatabaseInsightsModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterIdentifierInput">DbClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterSnapshotIdentifierInput">DbClusterSnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceClassInput">DbInstanceClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceIdentifierInput">DbInstanceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbNameInput">DbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbParameterGroupNameInput">DbParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSecurityGroupsInput">DbSecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSnapshotIdentifierInput">DbSnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSubnetGroupNameInput">DbSubnetGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dedicatedLogVolumeInput">DedicatedLogVolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deleteAutomatedBackupsInput">DeleteAutomatedBackupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainAuthSecretArnInput">DomainAuthSecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainDnsIpsInput">DomainDnsIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainFqdnInput">DomainFqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainIamRoleNameInput">DomainIamRoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainOuInput">DomainOuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableCloudwatchLogsExportsInput">EnableCloudwatchLogsExportsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableIamDatabaseAuthenticationInput">EnableIamDatabaseAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enablePerformanceInsightsInput">EnablePerformanceInsightsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineLifecycleSupportInput">EngineLifecycleSupportInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.licenseModelInput">LicenseModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.manageMasterUserPasswordInput">ManageMasterUserPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserAuthenticationTypeInput">MasterUserAuthenticationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUsernameInput">MasterUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserPasswordInput">MasterUserPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserSecretInput">MasterUserSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.maxAllocatedStorageInput">MaxAllocatedStorageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringIntervalInput">MonitoringIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringRoleArnInput">MonitoringRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.multiAzInput">MultiAzInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.ncharCharacterSetNameInput">NcharCharacterSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.networkTypeInput">NetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.optionGroupNameInput">OptionGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsKmsKeyIdInput">PerformanceInsightsKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsRetentionPeriodInput">PerformanceInsightsRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredBackupWindowInput">PreferredBackupWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.processorFeaturesInput">ProcessorFeaturesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.promotionTierInput">PromotionTierInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.replicaModeInput">ReplicaModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.restoreTimeInput">RestoreTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbClusterIdentifierInput">SourceDbClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceAutomatedBackupsArnInput">SourceDbInstanceAutomatedBackupsArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceIdentifierInput">SourceDbInstanceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbiResourceIdInput">SourceDbiResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceRegionInput">SourceRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageEncryptedInput">StorageEncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageThroughputInput">StorageThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageTypeInput">StorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialArnInput">TdeCredentialArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialPasswordInput">TdeCredentialPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useDefaultProcessorFeaturesInput">UseDefaultProcessorFeaturesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useLatestRestorableTimeInput">UseLatestRestorableTimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.vpcSecurityGroupsInput">VpcSecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allocatedStorage">AllocatedStorage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationKmsKeyId">AutomaticBackupReplicationKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRegion">AutomaticBackupReplicationRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRetentionPeriod">AutomaticBackupReplicationRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupTarget">BackupTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.caCertificateIdentifier">CaCertificateIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateRotationRestart">CertificateRotationRestart</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.characterSetName">CharacterSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.customIamInstanceProfile">CustomIamInstanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.databaseInsightsMode">DatabaseInsightsMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterSnapshotIdentifier">DbClusterSnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceClass">DbInstanceClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceIdentifier">DbInstanceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbParameterGroupName">DbParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSecurityGroups">DbSecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSnapshotIdentifier">DbSnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dedicatedLogVolume">DedicatedLogVolume</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deleteAutomatedBackups">DeleteAutomatedBackups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainAuthSecretArn">DomainAuthSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainDnsIps">DomainDnsIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainFqdn">DomainFqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainIamRoleName">DomainIamRoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainOu">DomainOu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableCloudwatchLogsExports">EnableCloudwatchLogsExports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableIamDatabaseAuthentication">EnableIamDatabaseAuthentication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enablePerformanceInsights">EnablePerformanceInsights</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineLifecycleSupport">EngineLifecycleSupport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.manageMasterUserPassword">ManageMasterUserPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserAuthenticationType">MasterUserAuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUsername">MasterUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserPassword">MasterUserPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.maxAllocatedStorage">MaxAllocatedStorage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringInterval">MonitoringInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringRoleArn">MonitoringRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.multiAz">MultiAz</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.ncharCharacterSetName">NcharCharacterSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.optionGroupName">OptionGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsKmsKeyId">PerformanceInsightsKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsRetentionPeriod">PerformanceInsightsRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.promotionTier">PromotionTier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.replicaMode">ReplicaMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.restoreTime">RestoreTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbClusterIdentifier">SourceDbClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceAutomatedBackupsArn">SourceDbInstanceAutomatedBackupsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceIdentifier">SourceDbInstanceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbiResourceId">SourceDbiResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceRegion">SourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageEncrypted">StorageEncrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageThroughput">StorageThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialArn">TdeCredentialArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialPassword">TdeCredentialPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useDefaultProcessorFeatures">UseDefaultProcessorFeatures</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.vpcSecurityGroups">VpcSecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalStorageVolumes`<sup>Required</sup> <a name="AdditionalStorageVolumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.additionalStorageVolumes"></a>

```go
func AdditionalStorageVolumes() RdsDbInstanceAdditionalStorageVolumesList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList">RdsDbInstanceAdditionalStorageVolumesList</a>

---

##### `AssociatedRoles`<sup>Required</sup> <a name="AssociatedRoles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.associatedRoles"></a>

```go
func AssociatedRoles() RdsDbInstanceAssociatedRolesList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList">RdsDbInstanceAssociatedRolesList</a>

---

##### `AutomaticRestartTime`<sup>Required</sup> <a name="AutomaticRestartTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticRestartTime"></a>

```go
func AutomaticRestartTime() *string
```

- *Type:* *string

---

##### `CertificateDetails`<sup>Required</sup> <a name="CertificateDetails" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateDetails"></a>

```go
func CertificateDetails() RdsDbInstanceCertificateDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference">RdsDbInstanceCertificateDetailsOutputReference</a>

---

##### `DbInstanceArn`<sup>Required</sup> <a name="DbInstanceArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceArn"></a>

```go
func DbInstanceArn() *string
```

- *Type:* *string

---

##### `DbInstanceStatus`<sup>Required</sup> <a name="DbInstanceStatus" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceStatus"></a>

```go
func DbInstanceStatus() *string
```

- *Type:* *string

---

##### `DbiResourceId`<sup>Required</sup> <a name="DbiResourceId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbiResourceId"></a>

```go
func DbiResourceId() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.endpoint"></a>

```go
func Endpoint() RdsDbInstanceEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference">RdsDbInstanceEndpointOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceCreateTime`<sup>Required</sup> <a name="InstanceCreateTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.instanceCreateTime"></a>

```go
func InstanceCreateTime() *string
```

- *Type:* *string

---

##### `IsStorageConfigUpgradeAvailable`<sup>Required</sup> <a name="IsStorageConfigUpgradeAvailable" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.isStorageConfigUpgradeAvailable"></a>

```go
func IsStorageConfigUpgradeAvailable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LatestRestorableTime`<sup>Required</sup> <a name="LatestRestorableTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.latestRestorableTime"></a>

```go
func LatestRestorableTime() *string
```

- *Type:* *string

---

##### `ListenerEndpoint`<sup>Required</sup> <a name="ListenerEndpoint" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.listenerEndpoint"></a>

```go
func ListenerEndpoint() RdsDbInstanceListenerEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference">RdsDbInstanceListenerEndpointOutputReference</a>

---

##### `MasterUserSecret`<sup>Required</sup> <a name="MasterUserSecret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserSecret"></a>

```go
func MasterUserSecret() RdsDbInstanceMasterUserSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference">RdsDbInstanceMasterUserSecretOutputReference</a>

---

##### `PercentProgress`<sup>Required</sup> <a name="PercentProgress" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.percentProgress"></a>

```go
func PercentProgress() *string
```

- *Type:* *string

---

##### `ProcessorFeatures`<sup>Required</sup> <a name="ProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.processorFeatures"></a>

```go
func ProcessorFeatures() RdsDbInstanceProcessorFeaturesList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList">RdsDbInstanceProcessorFeaturesList</a>

---

##### `ReadReplicaDbClusterIdentifiers`<sup>Required</sup> <a name="ReadReplicaDbClusterIdentifiers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.readReplicaDbClusterIdentifiers"></a>

```go
func ReadReplicaDbClusterIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `ReadReplicaDbInstanceIdentifiers`<sup>Required</sup> <a name="ReadReplicaDbInstanceIdentifiers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.readReplicaDbInstanceIdentifiers"></a>

```go
func ReadReplicaDbInstanceIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `ResumeFullAutomationModeTime`<sup>Required</sup> <a name="ResumeFullAutomationModeTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.resumeFullAutomationModeTime"></a>

```go
func ResumeFullAutomationModeTime() *string
```

- *Type:* *string

---

##### `SecondaryAvailabilityZone`<sup>Required</sup> <a name="SecondaryAvailabilityZone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.secondaryAvailabilityZone"></a>

```go
func SecondaryAvailabilityZone() *string
```

- *Type:* *string

---

##### `StatusInfos`<sup>Required</sup> <a name="StatusInfos" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.statusInfos"></a>

```go
func StatusInfos() RdsDbInstanceStatusInfosList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList">RdsDbInstanceStatusInfosList</a>

---

##### `StorageOperationPercentProgress`<sup>Required</sup> <a name="StorageOperationPercentProgress" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageOperationPercentProgress"></a>

```go
func StorageOperationPercentProgress() *f64
```

- *Type:* *f64

---

##### `StorageOperationStatus`<sup>Required</sup> <a name="StorageOperationStatus" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageOperationStatus"></a>

```go
func StorageOperationStatus() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tags"></a>

```go
func Tags() RdsDbInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList">RdsDbInstanceTagsList</a>

---

##### `AdditionalStorageVolumesInput`<sup>Optional</sup> <a name="AdditionalStorageVolumesInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.additionalStorageVolumesInput"></a>

```go
func AdditionalStorageVolumesInput() interface{}
```

- *Type:* interface{}

---

##### `AllocatedStorageInput`<sup>Optional</sup> <a name="AllocatedStorageInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allocatedStorageInput"></a>

```go
func AllocatedStorageInput() *string
```

- *Type:* *string

---

##### `AllowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="AllowMajorVersionUpgradeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allowMajorVersionUpgradeInput"></a>

```go
func AllowMajorVersionUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.applyImmediatelyInput"></a>

```go
func ApplyImmediatelyInput() interface{}
```

- *Type:* interface{}

---

##### `AssociatedRolesInput`<sup>Optional</sup> <a name="AssociatedRolesInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.associatedRolesInput"></a>

```go
func AssociatedRolesInput() interface{}
```

- *Type:* interface{}

---

##### `AutomaticBackupReplicationKmsKeyIdInput`<sup>Optional</sup> <a name="AutomaticBackupReplicationKmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationKmsKeyIdInput"></a>

```go
func AutomaticBackupReplicationKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `AutomaticBackupReplicationRegionInput`<sup>Optional</sup> <a name="AutomaticBackupReplicationRegionInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRegionInput"></a>

```go
func AutomaticBackupReplicationRegionInput() *string
```

- *Type:* *string

---

##### `AutomaticBackupReplicationRetentionPeriodInput`<sup>Optional</sup> <a name="AutomaticBackupReplicationRetentionPeriodInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRetentionPeriodInput"></a>

```go
func AutomaticBackupReplicationRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.autoMinorVersionUpgradeInput"></a>

```go
func AutoMinorVersionUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `BackupRetentionPeriodInput`<sup>Optional</sup> <a name="BackupRetentionPeriodInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupRetentionPeriodInput"></a>

```go
func BackupRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `BackupTargetInput`<sup>Optional</sup> <a name="BackupTargetInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupTargetInput"></a>

```go
func BackupTargetInput() *string
```

- *Type:* *string

---

##### `CaCertificateIdentifierInput`<sup>Optional</sup> <a name="CaCertificateIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.caCertificateIdentifierInput"></a>

```go
func CaCertificateIdentifierInput() *string
```

- *Type:* *string

---

##### `CertificateRotationRestartInput`<sup>Optional</sup> <a name="CertificateRotationRestartInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateRotationRestartInput"></a>

```go
func CertificateRotationRestartInput() interface{}
```

- *Type:* interface{}

---

##### `CharacterSetNameInput`<sup>Optional</sup> <a name="CharacterSetNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.characterSetNameInput"></a>

```go
func CharacterSetNameInput() *string
```

- *Type:* *string

---

##### `CopyTagsToSnapshotInput`<sup>Optional</sup> <a name="CopyTagsToSnapshotInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.copyTagsToSnapshotInput"></a>

```go
func CopyTagsToSnapshotInput() interface{}
```

- *Type:* interface{}

---

##### `CustomIamInstanceProfileInput`<sup>Optional</sup> <a name="CustomIamInstanceProfileInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.customIamInstanceProfileInput"></a>

```go
func CustomIamInstanceProfileInput() *string
```

- *Type:* *string

---

##### `DatabaseInsightsModeInput`<sup>Optional</sup> <a name="DatabaseInsightsModeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.databaseInsightsModeInput"></a>

```go
func DatabaseInsightsModeInput() *string
```

- *Type:* *string

---

##### `DbClusterIdentifierInput`<sup>Optional</sup> <a name="DbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterIdentifierInput"></a>

```go
func DbClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `DbClusterSnapshotIdentifierInput`<sup>Optional</sup> <a name="DbClusterSnapshotIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterSnapshotIdentifierInput"></a>

```go
func DbClusterSnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `DbInstanceClassInput`<sup>Optional</sup> <a name="DbInstanceClassInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceClassInput"></a>

```go
func DbInstanceClassInput() *string
```

- *Type:* *string

---

##### `DbInstanceIdentifierInput`<sup>Optional</sup> <a name="DbInstanceIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceIdentifierInput"></a>

```go
func DbInstanceIdentifierInput() *string
```

- *Type:* *string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbNameInput"></a>

```go
func DbNameInput() *string
```

- *Type:* *string

---

##### `DbParameterGroupNameInput`<sup>Optional</sup> <a name="DbParameterGroupNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbParameterGroupNameInput"></a>

```go
func DbParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `DbSecurityGroupsInput`<sup>Optional</sup> <a name="DbSecurityGroupsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSecurityGroupsInput"></a>

```go
func DbSecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DbSnapshotIdentifierInput`<sup>Optional</sup> <a name="DbSnapshotIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSnapshotIdentifierInput"></a>

```go
func DbSnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `DbSubnetGroupNameInput`<sup>Optional</sup> <a name="DbSubnetGroupNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSubnetGroupNameInput"></a>

```go
func DbSubnetGroupNameInput() *string
```

- *Type:* *string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSystemIdInput"></a>

```go
func DbSystemIdInput() *string
```

- *Type:* *string

---

##### `DedicatedLogVolumeInput`<sup>Optional</sup> <a name="DedicatedLogVolumeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dedicatedLogVolumeInput"></a>

```go
func DedicatedLogVolumeInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteAutomatedBackupsInput`<sup>Optional</sup> <a name="DeleteAutomatedBackupsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deleteAutomatedBackupsInput"></a>

```go
func DeleteAutomatedBackupsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DomainAuthSecretArnInput`<sup>Optional</sup> <a name="DomainAuthSecretArnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainAuthSecretArnInput"></a>

```go
func DomainAuthSecretArnInput() *string
```

- *Type:* *string

---

##### `DomainDnsIpsInput`<sup>Optional</sup> <a name="DomainDnsIpsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainDnsIpsInput"></a>

```go
func DomainDnsIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DomainFqdnInput`<sup>Optional</sup> <a name="DomainFqdnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainFqdnInput"></a>

```go
func DomainFqdnInput() *string
```

- *Type:* *string

---

##### `DomainIamRoleNameInput`<sup>Optional</sup> <a name="DomainIamRoleNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainIamRoleNameInput"></a>

```go
func DomainIamRoleNameInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `DomainOuInput`<sup>Optional</sup> <a name="DomainOuInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainOuInput"></a>

```go
func DomainOuInput() *string
```

- *Type:* *string

---

##### `EnableCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="EnableCloudwatchLogsExportsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableCloudwatchLogsExportsInput"></a>

```go
func EnableCloudwatchLogsExportsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableIamDatabaseAuthenticationInput`<sup>Optional</sup> <a name="EnableIamDatabaseAuthenticationInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableIamDatabaseAuthenticationInput"></a>

```go
func EnableIamDatabaseAuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePerformanceInsightsInput`<sup>Optional</sup> <a name="EnablePerformanceInsightsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enablePerformanceInsightsInput"></a>

```go
func EnablePerformanceInsightsInput() interface{}
```

- *Type:* interface{}

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `EngineLifecycleSupportInput`<sup>Optional</sup> <a name="EngineLifecycleSupportInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineLifecycleSupportInput"></a>

```go
func EngineLifecycleSupportInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.licenseModelInput"></a>

```go
func LicenseModelInput() *string
```

- *Type:* *string

---

##### `ManageMasterUserPasswordInput`<sup>Optional</sup> <a name="ManageMasterUserPasswordInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.manageMasterUserPasswordInput"></a>

```go
func ManageMasterUserPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `MasterUserAuthenticationTypeInput`<sup>Optional</sup> <a name="MasterUserAuthenticationTypeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserAuthenticationTypeInput"></a>

```go
func MasterUserAuthenticationTypeInput() *string
```

- *Type:* *string

---

##### `MasterUsernameInput`<sup>Optional</sup> <a name="MasterUsernameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUsernameInput"></a>

```go
func MasterUsernameInput() *string
```

- *Type:* *string

---

##### `MasterUserPasswordInput`<sup>Optional</sup> <a name="MasterUserPasswordInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserPasswordInput"></a>

```go
func MasterUserPasswordInput() *string
```

- *Type:* *string

---

##### `MasterUserSecretInput`<sup>Optional</sup> <a name="MasterUserSecretInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserSecretInput"></a>

```go
func MasterUserSecretInput() interface{}
```

- *Type:* interface{}

---

##### `MaxAllocatedStorageInput`<sup>Optional</sup> <a name="MaxAllocatedStorageInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.maxAllocatedStorageInput"></a>

```go
func MaxAllocatedStorageInput() *f64
```

- *Type:* *f64

---

##### `MonitoringIntervalInput`<sup>Optional</sup> <a name="MonitoringIntervalInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringIntervalInput"></a>

```go
func MonitoringIntervalInput() *f64
```

- *Type:* *f64

---

##### `MonitoringRoleArnInput`<sup>Optional</sup> <a name="MonitoringRoleArnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringRoleArnInput"></a>

```go
func MonitoringRoleArnInput() *string
```

- *Type:* *string

---

##### `MultiAzInput`<sup>Optional</sup> <a name="MultiAzInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.multiAzInput"></a>

```go
func MultiAzInput() interface{}
```

- *Type:* interface{}

---

##### `NcharCharacterSetNameInput`<sup>Optional</sup> <a name="NcharCharacterSetNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.ncharCharacterSetNameInput"></a>

```go
func NcharCharacterSetNameInput() *string
```

- *Type:* *string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.networkTypeInput"></a>

```go
func NetworkTypeInput() *string
```

- *Type:* *string

---

##### `OptionGroupNameInput`<sup>Optional</sup> <a name="OptionGroupNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.optionGroupNameInput"></a>

```go
func OptionGroupNameInput() *string
```

- *Type:* *string

---

##### `PerformanceInsightsKmsKeyIdInput`<sup>Optional</sup> <a name="PerformanceInsightsKmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsKmsKeyIdInput"></a>

```go
func PerformanceInsightsKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `PerformanceInsightsRetentionPeriodInput`<sup>Optional</sup> <a name="PerformanceInsightsRetentionPeriodInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsRetentionPeriodInput"></a>

```go
func PerformanceInsightsRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `PreferredBackupWindowInput`<sup>Optional</sup> <a name="PreferredBackupWindowInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredBackupWindowInput"></a>

```go
func PreferredBackupWindowInput() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredMaintenanceWindowInput"></a>

```go
func PreferredMaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `ProcessorFeaturesInput`<sup>Optional</sup> <a name="ProcessorFeaturesInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.processorFeaturesInput"></a>

```go
func ProcessorFeaturesInput() interface{}
```

- *Type:* interface{}

---

##### `PromotionTierInput`<sup>Optional</sup> <a name="PromotionTierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.promotionTierInput"></a>

```go
func PromotionTierInput() *f64
```

- *Type:* *f64

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.publiclyAccessibleInput"></a>

```go
func PubliclyAccessibleInput() interface{}
```

- *Type:* interface{}

---

##### `ReplicaModeInput`<sup>Optional</sup> <a name="ReplicaModeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.replicaModeInput"></a>

```go
func ReplicaModeInput() *string
```

- *Type:* *string

---

##### `RestoreTimeInput`<sup>Optional</sup> <a name="RestoreTimeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.restoreTimeInput"></a>

```go
func RestoreTimeInput() *string
```

- *Type:* *string

---

##### `SourceDbClusterIdentifierInput`<sup>Optional</sup> <a name="SourceDbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbClusterIdentifierInput"></a>

```go
func SourceDbClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `SourceDbInstanceAutomatedBackupsArnInput`<sup>Optional</sup> <a name="SourceDbInstanceAutomatedBackupsArnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceAutomatedBackupsArnInput"></a>

```go
func SourceDbInstanceAutomatedBackupsArnInput() *string
```

- *Type:* *string

---

##### `SourceDbInstanceIdentifierInput`<sup>Optional</sup> <a name="SourceDbInstanceIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceIdentifierInput"></a>

```go
func SourceDbInstanceIdentifierInput() *string
```

- *Type:* *string

---

##### `SourceDbiResourceIdInput`<sup>Optional</sup> <a name="SourceDbiResourceIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbiResourceIdInput"></a>

```go
func SourceDbiResourceIdInput() *string
```

- *Type:* *string

---

##### `SourceRegionInput`<sup>Optional</sup> <a name="SourceRegionInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceRegionInput"></a>

```go
func SourceRegionInput() *string
```

- *Type:* *string

---

##### `StorageEncryptedInput`<sup>Optional</sup> <a name="StorageEncryptedInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageEncryptedInput"></a>

```go
func StorageEncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `StorageThroughputInput`<sup>Optional</sup> <a name="StorageThroughputInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageThroughputInput"></a>

```go
func StorageThroughputInput() *f64
```

- *Type:* *f64

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageTypeInput"></a>

```go
func StorageTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TdeCredentialArnInput`<sup>Optional</sup> <a name="TdeCredentialArnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialArnInput"></a>

```go
func TdeCredentialArnInput() *string
```

- *Type:* *string

---

##### `TdeCredentialPasswordInput`<sup>Optional</sup> <a name="TdeCredentialPasswordInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialPasswordInput"></a>

```go
func TdeCredentialPasswordInput() *string
```

- *Type:* *string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `UseDefaultProcessorFeaturesInput`<sup>Optional</sup> <a name="UseDefaultProcessorFeaturesInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useDefaultProcessorFeaturesInput"></a>

```go
func UseDefaultProcessorFeaturesInput() interface{}
```

- *Type:* interface{}

---

##### `UseLatestRestorableTimeInput`<sup>Optional</sup> <a name="UseLatestRestorableTimeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useLatestRestorableTimeInput"></a>

```go
func UseLatestRestorableTimeInput() interface{}
```

- *Type:* interface{}

---

##### `VpcSecurityGroupsInput`<sup>Optional</sup> <a name="VpcSecurityGroupsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.vpcSecurityGroupsInput"></a>

```go
func VpcSecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allocatedStorage"></a>

```go
func AllocatedStorage() *string
```

- *Type:* *string

---

##### `AllowMajorVersionUpgrade`<sup>Required</sup> <a name="AllowMajorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allowMajorVersionUpgrade"></a>

```go
func AllowMajorVersionUpgrade() interface{}
```

- *Type:* interface{}

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.applyImmediately"></a>

```go
func ApplyImmediately() interface{}
```

- *Type:* interface{}

---

##### `AutomaticBackupReplicationKmsKeyId`<sup>Required</sup> <a name="AutomaticBackupReplicationKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationKmsKeyId"></a>

```go
func AutomaticBackupReplicationKmsKeyId() *string
```

- *Type:* *string

---

##### `AutomaticBackupReplicationRegion`<sup>Required</sup> <a name="AutomaticBackupReplicationRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRegion"></a>

```go
func AutomaticBackupReplicationRegion() *string
```

- *Type:* *string

---

##### `AutomaticBackupReplicationRetentionPeriod`<sup>Required</sup> <a name="AutomaticBackupReplicationRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRetentionPeriod"></a>

```go
func AutomaticBackupReplicationRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.autoMinorVersionUpgrade"></a>

```go
func AutoMinorVersionUpgrade() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `BackupRetentionPeriod`<sup>Required</sup> <a name="BackupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupRetentionPeriod"></a>

```go
func BackupRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `BackupTarget`<sup>Required</sup> <a name="BackupTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupTarget"></a>

```go
func BackupTarget() *string
```

- *Type:* *string

---

##### `CaCertificateIdentifier`<sup>Required</sup> <a name="CaCertificateIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.caCertificateIdentifier"></a>

```go
func CaCertificateIdentifier() *string
```

- *Type:* *string

---

##### `CertificateRotationRestart`<sup>Required</sup> <a name="CertificateRotationRestart" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateRotationRestart"></a>

```go
func CertificateRotationRestart() interface{}
```

- *Type:* interface{}

---

##### `CharacterSetName`<sup>Required</sup> <a name="CharacterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.characterSetName"></a>

```go
func CharacterSetName() *string
```

- *Type:* *string

---

##### `CopyTagsToSnapshot`<sup>Required</sup> <a name="CopyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.copyTagsToSnapshot"></a>

```go
func CopyTagsToSnapshot() interface{}
```

- *Type:* interface{}

---

##### `CustomIamInstanceProfile`<sup>Required</sup> <a name="CustomIamInstanceProfile" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.customIamInstanceProfile"></a>

```go
func CustomIamInstanceProfile() *string
```

- *Type:* *string

---

##### `DatabaseInsightsMode`<sup>Required</sup> <a name="DatabaseInsightsMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.databaseInsightsMode"></a>

```go
func DatabaseInsightsMode() *string
```

- *Type:* *string

---

##### `DbClusterIdentifier`<sup>Required</sup> <a name="DbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterIdentifier"></a>

```go
func DbClusterIdentifier() *string
```

- *Type:* *string

---

##### `DbClusterSnapshotIdentifier`<sup>Required</sup> <a name="DbClusterSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterSnapshotIdentifier"></a>

```go
func DbClusterSnapshotIdentifier() *string
```

- *Type:* *string

---

##### `DbInstanceClass`<sup>Required</sup> <a name="DbInstanceClass" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceClass"></a>

```go
func DbInstanceClass() *string
```

- *Type:* *string

---

##### `DbInstanceIdentifier`<sup>Required</sup> <a name="DbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceIdentifier"></a>

```go
func DbInstanceIdentifier() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `DbParameterGroupName`<sup>Required</sup> <a name="DbParameterGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbParameterGroupName"></a>

```go
func DbParameterGroupName() *string
```

- *Type:* *string

---

##### `DbSecurityGroups`<sup>Required</sup> <a name="DbSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSecurityGroups"></a>

```go
func DbSecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `DbSnapshotIdentifier`<sup>Required</sup> <a name="DbSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSnapshotIdentifier"></a>

```go
func DbSnapshotIdentifier() *string
```

- *Type:* *string

---

##### `DbSubnetGroupName`<sup>Required</sup> <a name="DbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSubnetGroupName"></a>

```go
func DbSubnetGroupName() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `DedicatedLogVolume`<sup>Required</sup> <a name="DedicatedLogVolume" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dedicatedLogVolume"></a>

```go
func DedicatedLogVolume() interface{}
```

- *Type:* interface{}

---

##### `DeleteAutomatedBackups`<sup>Required</sup> <a name="DeleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deleteAutomatedBackups"></a>

```go
func DeleteAutomatedBackups() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `DomainAuthSecretArn`<sup>Required</sup> <a name="DomainAuthSecretArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainAuthSecretArn"></a>

```go
func DomainAuthSecretArn() *string
```

- *Type:* *string

---

##### `DomainDnsIps`<sup>Required</sup> <a name="DomainDnsIps" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainDnsIps"></a>

```go
func DomainDnsIps() *[]*string
```

- *Type:* *[]*string

---

##### `DomainFqdn`<sup>Required</sup> <a name="DomainFqdn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainFqdn"></a>

```go
func DomainFqdn() *string
```

- *Type:* *string

---

##### `DomainIamRoleName`<sup>Required</sup> <a name="DomainIamRoleName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainIamRoleName"></a>

```go
func DomainIamRoleName() *string
```

- *Type:* *string

---

##### `DomainOu`<sup>Required</sup> <a name="DomainOu" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainOu"></a>

```go
func DomainOu() *string
```

- *Type:* *string

---

##### `EnableCloudwatchLogsExports`<sup>Required</sup> <a name="EnableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableCloudwatchLogsExports"></a>

```go
func EnableCloudwatchLogsExports() *[]*string
```

- *Type:* *[]*string

---

##### `EnableIamDatabaseAuthentication`<sup>Required</sup> <a name="EnableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableIamDatabaseAuthentication"></a>

```go
func EnableIamDatabaseAuthentication() interface{}
```

- *Type:* interface{}

---

##### `EnablePerformanceInsights`<sup>Required</sup> <a name="EnablePerformanceInsights" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enablePerformanceInsights"></a>

```go
func EnablePerformanceInsights() interface{}
```

- *Type:* interface{}

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineLifecycleSupport`<sup>Required</sup> <a name="EngineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineLifecycleSupport"></a>

```go
func EngineLifecycleSupport() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `ManageMasterUserPassword`<sup>Required</sup> <a name="ManageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.manageMasterUserPassword"></a>

```go
func ManageMasterUserPassword() interface{}
```

- *Type:* interface{}

---

##### `MasterUserAuthenticationType`<sup>Required</sup> <a name="MasterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserAuthenticationType"></a>

```go
func MasterUserAuthenticationType() *string
```

- *Type:* *string

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUsername"></a>

```go
func MasterUsername() *string
```

- *Type:* *string

---

##### `MasterUserPassword`<sup>Required</sup> <a name="MasterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserPassword"></a>

```go
func MasterUserPassword() *string
```

- *Type:* *string

---

##### `MaxAllocatedStorage`<sup>Required</sup> <a name="MaxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.maxAllocatedStorage"></a>

```go
func MaxAllocatedStorage() *f64
```

- *Type:* *f64

---

##### `MonitoringInterval`<sup>Required</sup> <a name="MonitoringInterval" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringInterval"></a>

```go
func MonitoringInterval() *f64
```

- *Type:* *f64

---

##### `MonitoringRoleArn`<sup>Required</sup> <a name="MonitoringRoleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringRoleArn"></a>

```go
func MonitoringRoleArn() *string
```

- *Type:* *string

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.multiAz"></a>

```go
func MultiAz() interface{}
```

- *Type:* interface{}

---

##### `NcharCharacterSetName`<sup>Required</sup> <a name="NcharCharacterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.ncharCharacterSetName"></a>

```go
func NcharCharacterSetName() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `OptionGroupName`<sup>Required</sup> <a name="OptionGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.optionGroupName"></a>

```go
func OptionGroupName() *string
```

- *Type:* *string

---

##### `PerformanceInsightsKmsKeyId`<sup>Required</sup> <a name="PerformanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsKmsKeyId"></a>

```go
func PerformanceInsightsKmsKeyId() *string
```

- *Type:* *string

---

##### `PerformanceInsightsRetentionPeriod`<sup>Required</sup> <a name="PerformanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsRetentionPeriod"></a>

```go
func PerformanceInsightsRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredBackupWindow"></a>

```go
func PreferredBackupWindow() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `PromotionTier`<sup>Required</sup> <a name="PromotionTier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.promotionTier"></a>

```go
func PromotionTier() *f64
```

- *Type:* *f64

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.publiclyAccessible"></a>

```go
func PubliclyAccessible() interface{}
```

- *Type:* interface{}

---

##### `ReplicaMode`<sup>Required</sup> <a name="ReplicaMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.replicaMode"></a>

```go
func ReplicaMode() *string
```

- *Type:* *string

---

##### `RestoreTime`<sup>Required</sup> <a name="RestoreTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.restoreTime"></a>

```go
func RestoreTime() *string
```

- *Type:* *string

---

##### `SourceDbClusterIdentifier`<sup>Required</sup> <a name="SourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbClusterIdentifier"></a>

```go
func SourceDbClusterIdentifier() *string
```

- *Type:* *string

---

##### `SourceDbInstanceAutomatedBackupsArn`<sup>Required</sup> <a name="SourceDbInstanceAutomatedBackupsArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceAutomatedBackupsArn"></a>

```go
func SourceDbInstanceAutomatedBackupsArn() *string
```

- *Type:* *string

---

##### `SourceDbInstanceIdentifier`<sup>Required</sup> <a name="SourceDbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceIdentifier"></a>

```go
func SourceDbInstanceIdentifier() *string
```

- *Type:* *string

---

##### `SourceDbiResourceId`<sup>Required</sup> <a name="SourceDbiResourceId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbiResourceId"></a>

```go
func SourceDbiResourceId() *string
```

- *Type:* *string

---

##### `SourceRegion`<sup>Required</sup> <a name="SourceRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceRegion"></a>

```go
func SourceRegion() *string
```

- *Type:* *string

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageEncrypted"></a>

```go
func StorageEncrypted() interface{}
```

- *Type:* interface{}

---

##### `StorageThroughput`<sup>Required</sup> <a name="StorageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageThroughput"></a>

```go
func StorageThroughput() *f64
```

- *Type:* *f64

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `TdeCredentialArn`<sup>Required</sup> <a name="TdeCredentialArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialArn"></a>

```go
func TdeCredentialArn() *string
```

- *Type:* *string

---

##### `TdeCredentialPassword`<sup>Required</sup> <a name="TdeCredentialPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialPassword"></a>

```go
func TdeCredentialPassword() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `UseDefaultProcessorFeatures`<sup>Required</sup> <a name="UseDefaultProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useDefaultProcessorFeatures"></a>

```go
func UseDefaultProcessorFeatures() interface{}
```

- *Type:* interface{}

---

##### `UseLatestRestorableTime`<sup>Required</sup> <a name="UseLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useLatestRestorableTime"></a>

```go
func UseLatestRestorableTime() interface{}
```

- *Type:* interface{}

---

##### `VpcSecurityGroups`<sup>Required</sup> <a name="VpcSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.vpcSecurityGroups"></a>

```go
func VpcSecurityGroups() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbInstanceAdditionalStorageVolumes <a name="RdsDbInstanceAdditionalStorageVolumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

&rdsdbinstance.RdsDbInstanceAdditionalStorageVolumes {
	AllocatedStorage: *string,
	Iops: *f64,
	MaxAllocatedStorage: *f64,
	StorageOperationPercentProgress: *f64,
	StorageOperationStatus: *string,
	StorageThroughput: *f64,
	StorageType: *string,
	VolumeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.allocatedStorage">AllocatedStorage</a></code> | <code>*string</code> | The amount of storage allocated for the additional storage volume, in gibibytes (GiB). |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.iops">Iops</a></code> | <code>*f64</code> | The number of I/O operations per second (IOPS) provisioned for the additional storage volume. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.maxAllocatedStorage">MaxAllocatedStorage</a></code> | <code>*f64</code> | The upper limit in gibibytes (GiB) to which RDS can automatically scale the storage of the additional storage volume. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageOperationPercentProgress">StorageOperationPercentProgress</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_operation_percent_progress RdsDbInstance#storage_operation_percent_progress}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageOperationStatus">StorageOperationStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_operation_status RdsDbInstance#storage_operation_status}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageThroughput">StorageThroughput</a></code> | <code>*f64</code> | The storage throughput value for the additional storage volume, in mebibytes per second (MiBps). |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageType">StorageType</a></code> | <code>*string</code> | The storage type for the additional storage volume.  Valid Values: ``GP3 \| IO2``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.volumeName">VolumeName</a></code> | <code>*string</code> | The name of the additional storage volume.  Valid Values: ``RDSDBDATA2 \| RDSDBDATA3 \| RDSDBDATA4``. |

---

##### `AllocatedStorage`<sup>Optional</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.allocatedStorage"></a>

```go
AllocatedStorage *string
```

- *Type:* *string

The amount of storage allocated for the additional storage volume, in gibibytes (GiB).

The minimum is 20 GiB. The maximum is 65,536 GiB (64 TiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#allocated_storage RdsDbInstance#allocated_storage}

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

The number of I/O operations per second (IOPS) provisioned for the additional storage volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#iops RdsDbInstance#iops}

---

##### `MaxAllocatedStorage`<sup>Optional</sup> <a name="MaxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.maxAllocatedStorage"></a>

```go
MaxAllocatedStorage *f64
```

- *Type:* *f64

The upper limit in gibibytes (GiB) to which RDS can automatically scale the storage of the additional storage volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#max_allocated_storage RdsDbInstance#max_allocated_storage}

---

##### `StorageOperationPercentProgress`<sup>Optional</sup> <a name="StorageOperationPercentProgress" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageOperationPercentProgress"></a>

```go
StorageOperationPercentProgress *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_operation_percent_progress RdsDbInstance#storage_operation_percent_progress}.

---

##### `StorageOperationStatus`<sup>Optional</sup> <a name="StorageOperationStatus" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageOperationStatus"></a>

```go
StorageOperationStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_operation_status RdsDbInstance#storage_operation_status}.

---

##### `StorageThroughput`<sup>Optional</sup> <a name="StorageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageThroughput"></a>

```go
StorageThroughput *f64
```

- *Type:* *f64

The storage throughput value for the additional storage volume, in mebibytes per second (MiBps).

This setting applies only to the General Purpose SSD (`gp3`) storage type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_throughput RdsDbInstance#storage_throughput}

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageType"></a>

```go
StorageType *string
```

- *Type:* *string

The storage type for the additional storage volume.  Valid Values: ``GP3 | IO2``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_type RdsDbInstance#storage_type}

---

##### `VolumeName`<sup>Optional</sup> <a name="VolumeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.volumeName"></a>

```go
VolumeName *string
```

- *Type:* *string

The name of the additional storage volume.  Valid Values: ``RDSDBDATA2 | RDSDBDATA3 | RDSDBDATA4``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#volume_name RdsDbInstance#volume_name}

---

### RdsDbInstanceAssociatedRoles <a name="RdsDbInstanceAssociatedRoles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

&rdsdbinstance.RdsDbInstanceAssociatedRoles {
	FeatureName: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.property.featureName">FeatureName</a></code> | <code>*string</code> | The name of the feature associated with the AWS Identity and Access Management (IAM) role. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance. |

---

##### `FeatureName`<sup>Optional</sup> <a name="FeatureName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.property.featureName"></a>

```go
FeatureName *string
```

- *Type:* *string

The name of the feature associated with the AWS Identity and Access Management (IAM) role.

IAM roles that are associated with a DB instance grant permission for the DB instance to access other AWS services on your behalf. For the list of supported feature names, see the `SupportedFeatureNames` description in [DBEngineVersion](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html) in the *Amazon RDS API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#feature_name RdsDbInstance#feature_name}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#role_arn RdsDbInstance#role_arn}

---

### RdsDbInstanceCertificateDetails <a name="RdsDbInstanceCertificateDetails" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

&rdsdbinstance.RdsDbInstanceCertificateDetails {

}
```


### RdsDbInstanceConfig <a name="RdsDbInstanceConfig" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

&rdsdbinstance.RdsDbInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AdditionalStorageVolumes: interface{},
	AllocatedStorage: *string,
	AllowMajorVersionUpgrade: interface{},
	ApplyImmediately: interface{},
	AssociatedRoles: interface{},
	AutomaticBackupReplicationKmsKeyId: *string,
	AutomaticBackupReplicationRegion: *string,
	AutomaticBackupReplicationRetentionPeriod: *f64,
	AutoMinorVersionUpgrade: interface{},
	AvailabilityZone: *string,
	BackupRetentionPeriod: *f64,
	BackupTarget: *string,
	CaCertificateIdentifier: *string,
	CertificateRotationRestart: interface{},
	CharacterSetName: *string,
	CopyTagsToSnapshot: interface{},
	CustomIamInstanceProfile: *string,
	DatabaseInsightsMode: *string,
	DbClusterIdentifier: *string,
	DbClusterSnapshotIdentifier: *string,
	DbInstanceClass: *string,
	DbInstanceIdentifier: *string,
	DbName: *string,
	DbParameterGroupName: *string,
	DbSecurityGroups: *[]*string,
	DbSnapshotIdentifier: *string,
	DbSubnetGroupName: *string,
	DbSystemId: *string,
	DedicatedLogVolume: interface{},
	DeleteAutomatedBackups: interface{},
	DeletionProtection: interface{},
	Domain: *string,
	DomainAuthSecretArn: *string,
	DomainDnsIps: *[]*string,
	DomainFqdn: *string,
	DomainIamRoleName: *string,
	DomainOu: *string,
	EnableCloudwatchLogsExports: *[]*string,
	EnableIamDatabaseAuthentication: interface{},
	EnablePerformanceInsights: interface{},
	Engine: *string,
	EngineLifecycleSupport: *string,
	EngineVersion: *string,
	Iops: *f64,
	KmsKeyId: *string,
	LicenseModel: *string,
	ManageMasterUserPassword: interface{},
	MasterUserAuthenticationType: *string,
	MasterUsername: *string,
	MasterUserPassword: *string,
	MasterUserSecret: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret,
	MaxAllocatedStorage: *f64,
	MonitoringInterval: *f64,
	MonitoringRoleArn: *string,
	MultiAz: interface{},
	NcharCharacterSetName: *string,
	NetworkType: *string,
	OptionGroupName: *string,
	PerformanceInsightsKmsKeyId: *string,
	PerformanceInsightsRetentionPeriod: *f64,
	Port: *string,
	PreferredBackupWindow: *string,
	PreferredMaintenanceWindow: *string,
	ProcessorFeatures: interface{},
	PromotionTier: *f64,
	PubliclyAccessible: interface{},
	ReplicaMode: *string,
	RestoreTime: *string,
	SourceDbClusterIdentifier: *string,
	SourceDbInstanceAutomatedBackupsArn: *string,
	SourceDbInstanceIdentifier: *string,
	SourceDbiResourceId: *string,
	SourceRegion: *string,
	StorageEncrypted: interface{},
	StorageThroughput: *f64,
	StorageType: *string,
	Tags: interface{},
	TdeCredentialArn: *string,
	TdeCredentialPassword: *string,
	Timezone: *string,
	UseDefaultProcessorFeatures: interface{},
	UseLatestRestorableTime: interface{},
	VpcSecurityGroups: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.additionalStorageVolumes">AdditionalStorageVolumes</a></code> | <code>interface{}</code> | The additional storage volumes associated with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.allocatedStorage">AllocatedStorage</a></code> | <code>*string</code> | The amount of storage in gibibytes (GiB) to be initially allocated for the database instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>interface{}</code> | A value that indicates whether major version upgrades are allowed. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | Specifies whether changes to the DB instance and any pending modifications are applied immediately, regardless of the ``PreferredMaintenanceWindow`` setting. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.associatedRoles">AssociatedRoles</a></code> | <code>interface{}</code> | The IAMlong (IAM) roles associated with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationKmsKeyId">AutomaticBackupReplicationKmsKeyId</a></code> | <code>*string</code> | The AWS KMS key identifier for encryption of the replicated automated backups. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationRegion">AutomaticBackupReplicationRegion</a></code> | <code>*string</code> | The AWS-Region associated with the automated backup. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationRetentionPeriod">AutomaticBackupReplicationRetentionPeriod</a></code> | <code>*f64</code> | The retention period for automated backups in a different AWS Region. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>interface{}</code> | A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | The Availability Zone (AZ) where the database will be created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>*f64</code> | The number of days for which automated backups are retained. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.backupTarget">BackupTarget</a></code> | <code>*string</code> | The location for storing automated backups and manual snapshots. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.caCertificateIdentifier">CaCertificateIdentifier</a></code> | <code>*string</code> | The identifier of the CA certificate for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.certificateRotationRestart">CertificateRotationRestart</a></code> | <code>interface{}</code> | Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.characterSetName">CharacterSetName</a></code> | <code>*string</code> | For supported engines, indicates that the DB instance should be associated with the specified character set. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>interface{}</code> | Specifies whether to copy tags from the DB instance to snapshots of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.customIamInstanceProfile">CustomIamInstanceProfile</a></code> | <code>*string</code> | The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.databaseInsightsMode">DatabaseInsightsMode</a></code> | <code>*string</code> | The mode of Database Insights to enable for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>*string</code> | The identifier of the DB cluster that this DB instance will belong to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbClusterSnapshotIdentifier">DbClusterSnapshotIdentifier</a></code> | <code>*string</code> | The identifier for the Multi-AZ DB cluster snapshot to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbInstanceClass">DbInstanceClass</a></code> | <code>*string</code> | The compute and memory capacity of the DB instance, for example ``db.m5.large``. Not all DB instance classes are available in all AWS-Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide*. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbInstanceIdentifier">DbInstanceIdentifier</a></code> | <code>*string</code> | A name for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbName">DbName</a></code> | <code>*string</code> | The meaning of this parameter differs according to the database engine you use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbParameterGroupName">DbParameterGroupName</a></code> | <code>*string</code> | The name of an existing DB parameter group or a reference to an [AWS::RDS::DBParameterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.  To list all of the available DB parameter group names, use the following command:   ``aws rds describe-db-parameter-groups --query "DBParameterGroups[].DBParameterGroupName" --output text``    If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.   If you don't specify a value for ``DBParameterGroupName`` property, the default DB parameter group for the specified engine and engine version is used. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSecurityGroups">DbSecurityGroups</a></code> | <code>*[]*string</code> | A list of the DB security groups to assign to the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSnapshotIdentifier">DbSnapshotIdentifier</a></code> | <code>*string</code> | The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>*string</code> | A DB subnet group to associate with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dedicatedLogVolume">DedicatedLogVolume</a></code> | <code>interface{}</code> | Indicates whether the DB instance has a dedicated log volume (DLV) enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.deleteAutomatedBackups">DeleteAutomatedBackups</a></code> | <code>interface{}</code> | A value that indicates whether to remove automated backups immediately after the DB instance is deleted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Specifies whether the DB instance has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domain">Domain</a></code> | <code>*string</code> | The Active Directory directory ID to create the DB instance in. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainAuthSecretArn">DomainAuthSecretArn</a></code> | <code>*string</code> | The ARN for the Secrets Manager secret with the credentials for the user joining the domain.  Example: ``arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainDnsIps">DomainDnsIps</a></code> | <code>*[]*string</code> | The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainFqdn">DomainFqdn</a></code> | <code>*string</code> | The fully qualified domain name (FQDN) of an Active Directory domain. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainIamRoleName">DomainIamRoleName</a></code> | <code>*string</code> | The name of the IAM role to use when making API calls to the Directory Service. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainOu">DomainOu</a></code> | <code>*string</code> | The Active Directory organizational unit for your DB instance to join. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enableCloudwatchLogsExports">EnableCloudwatchLogsExports</a></code> | <code>*[]*string</code> | The list of log types that need to be enabled for exporting to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enableIamDatabaseAuthentication">EnableIamDatabaseAuthentication</a></code> | <code>interface{}</code> | A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enablePerformanceInsights">EnablePerformanceInsights</a></code> | <code>interface{}</code> | Specifies whether to enable Performance Insights for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engine">Engine</a></code> | <code>*string</code> | The name of the database engine to use for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engineLifecycleSupport">EngineLifecycleSupport</a></code> | <code>*string</code> | The lifecycle type for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | The version number of the database engine to use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.iops">Iops</a></code> | <code>*f64</code> | The number of I/O operations per second (IOPS) that the database provisions. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The ARN of the AWS KMS key that's used to encrypt the DB instance, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | License model information for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.manageMasterUserPassword">ManageMasterUserPassword</a></code> | <code>interface{}</code> | Specifies whether to manage the master user password with AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserAuthenticationType">MasterUserAuthenticationType</a></code> | <code>*string</code> | Specifies the authentication type for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUsername">MasterUsername</a></code> | <code>*string</code> | The master user name for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserPassword">MasterUserPassword</a></code> | <code>*string</code> | The password for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserSecret">MasterUserSecret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a></code> | The secret managed by RDS in AWS Secrets Manager for the master user password. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.maxAllocatedStorage">MaxAllocatedStorage</a></code> | <code>*f64</code> | The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.monitoringInterval">MonitoringInterval</a></code> | <code>*f64</code> | The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.monitoringRoleArn">MonitoringRoleArn</a></code> | <code>*string</code> | The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.multiAz">MultiAz</a></code> | <code>interface{}</code> | Specifies whether the DB instance is a Multi-AZ deployment. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.ncharCharacterSetName">NcharCharacterSetName</a></code> | <code>*string</code> | The name of the NCHAR character set for the Oracle DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.networkType">NetworkType</a></code> | <code>*string</code> | The network type of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.optionGroupName">OptionGroupName</a></code> | <code>*string</code> | Indicates that the DB instance should be associated with the specified option group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.performanceInsightsKmsKeyId">PerformanceInsightsKmsKeyId</a></code> | <code>*string</code> | The AWS KMS key identifier for encryption of Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.performanceInsightsRetentionPeriod">PerformanceInsightsRetentionPeriod</a></code> | <code>*f64</code> | The number of days to retain Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.port">Port</a></code> | <code>*string</code> | The port number on which the database accepts connections. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>*string</code> | The daily time range during which automated backups are created if automated backups are enabled, using the ``BackupRetentionPeriod`` parameter. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.processorFeatures">ProcessorFeatures</a></code> | <code>interface{}</code> | The number of CPU cores and the number of threads per core for the DB instance class of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.promotionTier">PromotionTier</a></code> | <code>*f64</code> | The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | Indicates whether the DB instance is an internet-facing instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.replicaMode">ReplicaMode</a></code> | <code>*string</code> | The open mode of an Oracle read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.restoreTime">RestoreTime</a></code> | <code>*string</code> | The date and time to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbClusterIdentifier">SourceDbClusterIdentifier</a></code> | <code>*string</code> | The identifier of the Multi-AZ DB cluster that will act as the source for the read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbInstanceAutomatedBackupsArn">SourceDbInstanceAutomatedBackupsArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, ``arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbInstanceIdentifier">SourceDbInstanceIdentifier</a></code> | <code>*string</code> | If you want to create a read replica DB instance, specify the ID of the source DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbiResourceId">SourceDbiResourceId</a></code> | <code>*string</code> | The resource ID of the source DB instance from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceRegion">SourceRegion</a></code> | <code>*string</code> | The ID of the region that contains the source DB instance for the read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageEncrypted">StorageEncrypted</a></code> | <code>interface{}</code> | A value that indicates whether the DB instance is encrypted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageThroughput">StorageThroughput</a></code> | <code>*f64</code> | Specifies the storage throughput value, in mebibyte per second (MiBps), for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageType">StorageType</a></code> | <code>*string</code> | The storage type to associate with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags to assign to the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tdeCredentialArn">TdeCredentialArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tde_credential_arn RdsDbInstance#tde_credential_arn}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tdeCredentialPassword">TdeCredentialPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tde_credential_password RdsDbInstance#tde_credential_password}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.timezone">Timezone</a></code> | <code>*string</code> | The time zone of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.useDefaultProcessorFeatures">UseDefaultProcessorFeatures</a></code> | <code>interface{}</code> | Specifies whether the DB instance class of the DB instance uses its default processor features. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>interface{}</code> | Specifies whether the DB instance is restored from the latest backup time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.vpcSecurityGroups">VpcSecurityGroups</a></code> | <code>*[]*string</code> | A list of the VPC security group IDs to assign to the DB instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalStorageVolumes`<sup>Optional</sup> <a name="AdditionalStorageVolumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.additionalStorageVolumes"></a>

```go
AdditionalStorageVolumes interface{}
```

- *Type:* interface{}

The additional storage volumes associated with the DB instance.

RDS supports additional storage volumes for RDS for Oracle and RDS for SQL Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#additional_storage_volumes RdsDbInstance#additional_storage_volumes}

---

##### `AllocatedStorage`<sup>Optional</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.allocatedStorage"></a>

```go
AllocatedStorage *string
```

- *Type:* *string

The amount of storage in gibibytes (GiB) to be initially allocated for the database instance.

If any value is set in the `Iops` parameter, `AllocatedStorage` must be at least 100 GiB, which corresponds to the minimum Iops value of 1,000. If you increase the `Iops` value (in 1,000 IOPS increments), then you must also increase the `AllocatedStorage` value (in 100-GiB increments).
*Amazon Aurora*
Not applicable. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume.
*Db2*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp3): Must be an integer from 20 to 64000.
* Provisioned IOPS storage (io1): Must be an integer from 100 to 64000.

*MySQL*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
* Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
* Magnetic storage (standard): Must be an integer from 5 to 3072.

*MariaDB*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
* Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
* Magnetic storage (standard): Must be an integer from 5 to 3072.

*PostgreSQL*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
* Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
* Magnetic storage (standard): Must be an integer from 5 to 3072.

*Oracle*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
* Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
* Magnetic storage (standard): Must be an integer from 10 to 3072.

*SQL Server*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp2):
* Enterprise and Standard editions: Must be an integer from 20 to 16384.
* Web and Express editions: Must be an integer from 20 to 16384.
* Provisioned IOPS storage (io1):
* Enterprise and Standard editions: Must be an integer from 20 to 16384.
* Web and Express editions: Must be an integer from 20 to 16384.
* Magnetic storage (standard):
* Enterprise and Standard editions: Must be an integer from 20 to 1024.
* Web and Express editions: Must be an integer from 20 to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#allocated_storage RdsDbInstance#allocated_storage}

---

##### `AllowMajorVersionUpgrade`<sup>Optional</sup> <a name="AllowMajorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.allowMajorVersionUpgrade"></a>

```go
AllowMajorVersionUpgrade interface{}
```

- *Type:* interface{}

A value that indicates whether major version upgrades are allowed.

Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
Constraints: Major version upgrades must be allowed when specifying a value for the `EngineVersion` parameter that is a different major version than the DB instance's current version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#allow_major_version_upgrade RdsDbInstance#allow_major_version_upgrade}

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.applyImmediately"></a>

```go
ApplyImmediately interface{}
```

- *Type:* interface{}

Specifies whether changes to the DB instance and any pending modifications are applied immediately, regardless of the ``PreferredMaintenanceWindow`` setting.

If set to `false`, changes are applied during the next maintenance window. Until RDS applies the changes, the DB instance remains in a drift state. As a result, the configuration doesn't fully reflect the requested modifications and temporarily diverges from the intended state.
In addition to the settings described in [Modifying a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html), this property also determines whether the DB instance reboots when a static parameter is modified in the associated DB parameter group.
Default: `true`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#apply_immediately RdsDbInstance#apply_immediately}

---

##### `AssociatedRoles`<sup>Optional</sup> <a name="AssociatedRoles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.associatedRoles"></a>

```go
AssociatedRoles interface{}
```

- *Type:* interface{}

The IAMlong (IAM) roles associated with the DB instance.

*Amazon Aurora*
Not applicable. The associated roles are managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#associated_roles RdsDbInstance#associated_roles}

---

##### `AutomaticBackupReplicationKmsKeyId`<sup>Optional</sup> <a name="AutomaticBackupReplicationKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationKmsKeyId"></a>

```go
AutomaticBackupReplicationKmsKeyId *string
```

- *Type:* *string

The AWS KMS key identifier for encryption of the replicated automated backups.

The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination AWS-Region, for example, `arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#automatic_backup_replication_kms_key_id RdsDbInstance#automatic_backup_replication_kms_key_id}

---

##### `AutomaticBackupReplicationRegion`<sup>Optional</sup> <a name="AutomaticBackupReplicationRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationRegion"></a>

```go
AutomaticBackupReplicationRegion *string
```

- *Type:* *string

The AWS-Region associated with the automated backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#automatic_backup_replication_region RdsDbInstance#automatic_backup_replication_region}

---

##### `AutomaticBackupReplicationRetentionPeriod`<sup>Optional</sup> <a name="AutomaticBackupReplicationRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationRetentionPeriod"></a>

```go
AutomaticBackupReplicationRetentionPeriod *f64
```

- *Type:* *f64

The retention period for automated backups in a different AWS Region.

Use this parameter to set a unique retention period that only applies to cross-Region automated backups. To enable automated backups in a different Region, specify a positive value for the `AutomaticBackupReplicationRegion` parameter.
If not specified, this parameter defaults to the value of the `BackupRetentionPeriod` parameter. The maximum allowed value is 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#automatic_backup_replication_retention_period RdsDbInstance#automatic_backup_replication_retention_period}

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.autoMinorVersionUpgrade"></a>

```go
AutoMinorVersionUpgrade interface{}
```

- *Type:* interface{}

A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window.

By default, minor engine upgrades are applied automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#auto_minor_version_upgrade RdsDbInstance#auto_minor_version_upgrade}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

The Availability Zone (AZ) where the database will be created.

For information on AWS-Regions and Availability Zones, see [Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html).
For Amazon Aurora, each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one.
Default: A random, system-chosen Availability Zone in the endpoint's AWS-Region.
Constraints:

* The `AvailabilityZone` parameter can't be specified if the DB instance is a Multi-AZ deployment.
* The specified Availability Zone must be in the same AWS-Region as the current endpoint.

Example: `us-east-1d`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#availability_zone RdsDbInstance#availability_zone}

---

##### `BackupRetentionPeriod`<sup>Optional</sup> <a name="BackupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.backupRetentionPeriod"></a>

```go
BackupRetentionPeriod *f64
```

- *Type:* *f64

The number of days for which automated backups are retained.

Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.
*Amazon Aurora*
Not applicable. The retention period for automated backups is managed by the DB cluster.
Default: 1
Constraints:

* Must be a value from 0 to 35
* Can't be set to 0 if the DB instance is a source to read replicas

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#backup_retention_period RdsDbInstance#backup_retention_period}

---

##### `BackupTarget`<sup>Optional</sup> <a name="BackupTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.backupTarget"></a>

```go
BackupTarget *string
```

- *Type:* *string

The location for storing automated backups and manual snapshots.

Valid Values:

* `local` (Dedicated Local Zone)
* `outposts` (AWS Outposts)
* `region` (AWS-Region)

Default: `region`
For more information, see [Working with Amazon RDS on Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#backup_target RdsDbInstance#backup_target}

---

##### `CaCertificateIdentifier`<sup>Optional</sup> <a name="CaCertificateIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.caCertificateIdentifier"></a>

```go
CaCertificateIdentifier *string
```

- *Type:* *string

The identifier of the CA certificate for this DB instance.

For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#ca_certificate_identifier RdsDbInstance#ca_certificate_identifier}

---

##### `CertificateRotationRestart`<sup>Optional</sup> <a name="CertificateRotationRestart" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.certificateRotationRestart"></a>

```go
CertificateRotationRestart interface{}
```

- *Type:* interface{}

Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate.

By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.
Set this parameter only if you are *not* using SSL/TLS to connect to the DB instance.
If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:

* For more information about rotating your SSL/TLS certificate for RDS DB engines, see [Rotating Your SSL/TLS Certificate.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon RDS User Guide.*
* For more information about rotating your SSL/TLS certificate for Aurora DB engines, see [Rotating Your SSL/TLS Certificate](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon Aurora User Guide*.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#certificate_rotation_restart RdsDbInstance#certificate_rotation_restart}

---

##### `CharacterSetName`<sup>Optional</sup> <a name="CharacterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.characterSetName"></a>

```go
CharacterSetName *string
```

- *Type:* *string

For supported engines, indicates that the DB instance should be associated with the specified character set.

*Amazon Aurora*
Not applicable. The character set is managed by the DB cluster. For more information, see [AWS::RDS::DBCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#character_set_name RdsDbInstance#character_set_name}

---

##### `CopyTagsToSnapshot`<sup>Optional</sup> <a name="CopyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.copyTagsToSnapshot"></a>

```go
CopyTagsToSnapshot interface{}
```

- *Type:* interface{}

Specifies whether to copy tags from the DB instance to snapshots of the DB instance.

By default, tags are not copied.
This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#copy_tags_to_snapshot RdsDbInstance#copy_tags_to_snapshot}

---

##### `CustomIamInstanceProfile`<sup>Optional</sup> <a name="CustomIamInstanceProfile" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.customIamInstanceProfile"></a>

```go
CustomIamInstanceProfile *string
```

- *Type:* *string

The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.

This setting is required for RDS Custom.
Constraints:

* The profile must exist in your account.
* The profile must have an IAM role that Amazon EC2 has permissions to assume.
* The instance profile name and the associated IAM role name must start with the prefix `AWSRDSCustom`.

For the list of permissions required for the IAM role, see [Configure IAM and your VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#custom_iam_instance_profile RdsDbInstance#custom_iam_instance_profile}

---

##### `DatabaseInsightsMode`<sup>Optional</sup> <a name="DatabaseInsightsMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.databaseInsightsMode"></a>

```go
DatabaseInsightsMode *string
```

- *Type:* *string

The mode of Database Insights to enable for the DB instance.

Aurora DB instances inherit this value from the DB cluster, so you can't change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#database_insights_mode RdsDbInstance#database_insights_mode}

---

##### `DbClusterIdentifier`<sup>Optional</sup> <a name="DbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbClusterIdentifier"></a>

```go
DbClusterIdentifier *string
```

- *Type:* *string

The identifier of the DB cluster that this DB instance will belong to.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_cluster_identifier RdsDbInstance#db_cluster_identifier}

---

##### `DbClusterSnapshotIdentifier`<sup>Optional</sup> <a name="DbClusterSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbClusterSnapshotIdentifier"></a>

```go
DbClusterSnapshotIdentifier *string
```

- *Type:* *string

The identifier for the Multi-AZ DB cluster snapshot to restore from.

For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide*.
Constraints:

* Must match the identifier of an existing Multi-AZ DB cluster snapshot.
* Can't be specified when `DBSnapshotIdentifier` is specified.
* Must be specified when `DBSnapshotIdentifier` isn't specified.
* If you are restoring from a shared manual Multi-AZ DB cluster snapshot, the `DBClusterSnapshotIdentifier` must be the ARN of the shared snapshot.
* Can't be the identifier of an Aurora DB cluster snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_cluster_snapshot_identifier RdsDbInstance#db_cluster_snapshot_identifier}

---

##### `DbInstanceClass`<sup>Optional</sup> <a name="DbInstanceClass" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbInstanceClass"></a>

```go
DbInstanceClass *string
```

- *Type:* *string

The compute and memory capacity of the DB instance, for example ``db.m5.large``. Not all DB instance classes are available in all AWS-Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_instance_class RdsDbInstance#db_instance_class}

---

##### `DbInstanceIdentifier`<sup>Optional</sup> <a name="DbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbInstanceIdentifier"></a>

```go
DbInstanceIdentifier *string
```

- *Type:* *string

A name for the DB instance.

If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon RDS User Guide*.
If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_instance_identifier RdsDbInstance#db_instance_identifier}

---

##### `DbName`<sup>Optional</sup> <a name="DbName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbName"></a>

```go
DbName *string
```

- *Type:* *string

The meaning of this parameter differs according to the database engine you use.

If you specify the `DBSnapshotIdentifier` property, this property only applies to RDS for Oracle.
*Amazon Aurora*
Not applicable. The database name is managed by the DB cluster.
*Db2*
The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.
Constraints:

* Must contain 1 to 64 letters or numbers.
* Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
* Can't be a word reserved by the specified database engine.

*MySQL*
The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.
Constraints:

* Must contain 1 to 64 letters or numbers.
* Can't be a word reserved by the specified database engine

*MariaDB*
The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.
Constraints:

* Must contain 1 to 64 letters or numbers.
* Can't be a word reserved by the specified database engine

*PostgreSQL*
The name of the database to create when the DB instance is created. If this parameter is not specified, the default `postgres` database is created in the DB instance.
Constraints:

* Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
* Must contain 1 to 63 characters.
* Can't be a word reserved by the specified database engine

*Oracle*
The Oracle System ID (SID) of the created DB instance. If you specify `null`, the default value `ORCL` is used. You can't specify the string NULL, or any other reserved word, for `DBName`.
Default: `ORCL`
Constraints:

* Can't be longer than 8 characters

*SQL Server*
Not applicable. Must be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_name RdsDbInstance#db_name}

---

##### `DbParameterGroupName`<sup>Optional</sup> <a name="DbParameterGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbParameterGroupName"></a>

```go
DbParameterGroupName *string
```

- *Type:* *string

The name of an existing DB parameter group or a reference to an [AWS::RDS::DBParameterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.  To list all of the available DB parameter group names, use the following command:   ``aws rds describe-db-parameter-groups --query "DBParameterGroups[].DBParameterGroupName" --output text``    If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.   If you don't specify a value for ``DBParameterGroupName`` property, the default DB parameter group for the specified engine and engine version is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_parameter_group_name RdsDbInstance#db_parameter_group_name}

---

##### `DbSecurityGroups`<sup>Optional</sup> <a name="DbSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSecurityGroups"></a>

```go
DbSecurityGroups *[]*string
```

- *Type:* *[]*string

A list of the DB security groups to assign to the DB instance.

The list can include both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup resources created in the template.
If you set DBSecurityGroups, you must not set VPCSecurityGroups, and vice versa. Also, note that the DBSecurityGroups property exists only for backwards compatibility with older regions and is no longer recommended for providing security information to an RDS DB instance. Instead, use VPCSecurityGroups.
If you specify this property, AWS CloudFormation sends only the following properties (if specified) to Amazon RDS during create operations:

* `AllocatedStorage`
* `AutoMinorVersionUpgrade`
* `AvailabilityZone`
* `BackupRetentionPeriod`
* `CharacterSetName`
* `DBInstanceClass`
* `DBName`
* `DBParameterGroupName`
* `DBSecurityGroups`
* `DBSubnetGroupName`
* `Engine`
* `EngineVersion`
* `Iops`
* `LicenseModel`
* `MasterUsername`
* `MasterUserPassword`
* `MultiAZ`
* `OptionGroupName`
* `PreferredBackupWindow`
* `PreferredMaintenanceWindow`

All other properties are ignored. Specify a virtual private cloud (VPC) security group if you want to submit other properties, such as `StorageType`, `StorageEncrypted`, or `KmsKeyId`. If you're already using the `DBSecurityGroups` property, you can't use these other properties by updating your DB instance to use a VPC security group. You must recreate the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_security_groups RdsDbInstance#db_security_groups}

---

##### `DbSnapshotIdentifier`<sup>Optional</sup> <a name="DbSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSnapshotIdentifier"></a>

```go
DbSnapshotIdentifier *string
```

- *Type:* *string

The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance.

If you're restoring from a shared manual DB snapshot, you must specify the ARN of the snapshot.
By specifying this property, you can create a DB instance from the specified DB snapshot. If the `DBSnapshotIdentifier` property is an empty string or the `AWS::RDS::DBInstance` declaration has no `DBSnapshotIdentifier` property, AWS CloudFormation creates a new database. If the property contains a value (other than an empty string), AWS CloudFormation creates a database from the specified snapshot. If a snapshot with the specified name doesn't exist, AWS CloudFormation can't create the database and it rolls back the stack.
Some DB instance properties aren't valid when you restore from a snapshot, such as the `MasterUsername` and `MasterUserPassword` properties, and the point-in-time recovery properties `RestoreTime` and `UseLatestRestorableTime`. For information about the properties that you can specify, see the [RestoreDBInstanceFromDBSnapshot](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceFromDBSnapshot.html) action in the *Amazon RDS API Reference*.
When you specify the same `DBSnapshotIdentifier` property value for an update, the DB instance is not restored from the DB snapshot again, and the data in the database is not changed. If you specify a different `DBSnapshotIdentifier` value, a new DB instance is restored from the specified snapshot, and the original DB instance is deleted.
If you specify the `DBSnapshotIdentifier` property to restore a DB instance (as opposed to specifying it for DB instance updates), then don't specify the following properties:

* `CharacterSetName`
* `DBClusterIdentifier`
* `DBName`
* `KmsKeyId`
* `MasterUsername`
* `MasterUserPassword`
* `PromotionTier`
* `SourceDBInstanceIdentifier`
* `SourceRegion`
* `StorageEncrypted` (for an unencrypted snapshot)
* `Timezone`

*Amazon Aurora*
Not applicable. Snapshot restore is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_snapshot_identifier RdsDbInstance#db_snapshot_identifier}

---

##### `DbSubnetGroupName`<sup>Optional</sup> <a name="DbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSubnetGroupName"></a>

```go
DbSubnetGroupName *string
```

- *Type:* *string

A DB subnet group to associate with the DB instance.

If you update this value, the new subnet group must be a subnet group in a new VPC.
If you don't specify a DB subnet group, RDS uses the default DB subnet group if one exists. If a default DB subnet group does not exist, and you don't specify a `DBSubnetGroupName`, the DB instance fails to launch.
For more information about using Amazon RDS in a VPC, see [Amazon VPC and Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide*.
This setting doesn't apply to Amazon Aurora DB instances. The DB subnet group is managed by the DB cluster. If specified, the setting must match the DB cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_subnet_group_name RdsDbInstance#db_subnet_group_name}

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSystemId"></a>

```go
DbSystemId *string
```

- *Type:* *string

The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files.

In this context, the term "Oracle database instance" refers exclusively to the system global area (SGA) and Oracle background processes. If you don't specify a SID, the value defaults to `RDSCDB`. The Oracle SID is also the name of your CDB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_system_id RdsDbInstance#db_system_id}

---

##### `DedicatedLogVolume`<sup>Optional</sup> <a name="DedicatedLogVolume" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dedicatedLogVolume"></a>

```go
DedicatedLogVolume interface{}
```

- *Type:* interface{}

Indicates whether the DB instance has a dedicated log volume (DLV) enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#dedicated_log_volume RdsDbInstance#dedicated_log_volume}

---

##### `DeleteAutomatedBackups`<sup>Optional</sup> <a name="DeleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.deleteAutomatedBackups"></a>

```go
DeleteAutomatedBackups interface{}
```

- *Type:* interface{}

A value that indicates whether to remove automated backups immediately after the DB instance is deleted.

This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.
*Amazon Aurora*
Not applicable. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the DB cluster are not deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#delete_automated_backups RdsDbInstance#delete_automated_backups}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Specifies whether the DB instance has deletion protection enabled.

The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see [Deleting a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html).
This setting doesn't apply to Amazon Aurora DB instances. You can enable or disable deletion protection for the DB cluster. For more information, see `CreateDBCluster`. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#deletion_protection RdsDbInstance#deletion_protection}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The Active Directory directory ID to create the DB instance in.

Currently, only Db2, MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.
For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain RdsDbInstance#domain}

---

##### `DomainAuthSecretArn`<sup>Optional</sup> <a name="DomainAuthSecretArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainAuthSecretArn"></a>

```go
DomainAuthSecretArn *string
```

- *Type:* *string

The ARN for the Secrets Manager secret with the credentials for the user joining the domain.  Example: ``arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_auth_secret_arn RdsDbInstance#domain_auth_secret_arn}

---

##### `DomainDnsIps`<sup>Optional</sup> <a name="DomainDnsIps" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainDnsIps"></a>

```go
DomainDnsIps *[]*string
```

- *Type:* *[]*string

The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.

Constraints:

* Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.

Example: `123.124.125.126,234.235.236.237`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_dns_ips RdsDbInstance#domain_dns_ips}

---

##### `DomainFqdn`<sup>Optional</sup> <a name="DomainFqdn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainFqdn"></a>

```go
DomainFqdn *string
```

- *Type:* *string

The fully qualified domain name (FQDN) of an Active Directory domain.

Constraints:

* Can't be longer than 64 characters.

Example: `mymanagedADtest.mymanagedAD.mydomain`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_fqdn RdsDbInstance#domain_fqdn}

---

##### `DomainIamRoleName`<sup>Optional</sup> <a name="DomainIamRoleName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainIamRoleName"></a>

```go
DomainIamRoleName *string
```

- *Type:* *string

The name of the IAM role to use when making API calls to the Directory Service.

This setting doesn't apply to the following DB instances:

* Amazon Aurora (The domain is managed by the DB cluster.)
* RDS Custom

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_iam_role_name RdsDbInstance#domain_iam_role_name}

---

##### `DomainOu`<sup>Optional</sup> <a name="DomainOu" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainOu"></a>

```go
DomainOu *string
```

- *Type:* *string

The Active Directory organizational unit for your DB instance to join.

Constraints:

* Must be in the distinguished name format.
* Can't be longer than 64 characters.

Example: `OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_ou RdsDbInstance#domain_ou}

---

##### `EnableCloudwatchLogsExports`<sup>Optional</sup> <a name="EnableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enableCloudwatchLogsExports"></a>

```go
EnableCloudwatchLogsExports *[]*string
```

- *Type:* *[]*string

The list of log types that need to be enabled for exporting to CloudWatch Logs.

The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Relational Database Service User Guide*.
*Amazon Aurora*
Not applicable. CloudWatch Logs exports are managed by the DB cluster.
*Db2*
Valid values: `diag.log`, `notify.log`
*MariaDB*
Valid values: `audit`, `error`, `general`, `slowquery`
*Microsoft SQL Server*
Valid values: `agent`, `error`
*MySQL*
Valid values: `audit`, `error`, `general`, `slowquery`
*Oracle*
Valid values: `alert`, `audit`, `listener`, `trace`, `oemagent`
*PostgreSQL*
Valid values: `postgresql`, `upgrade`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#enable_cloudwatch_logs_exports RdsDbInstance#enable_cloudwatch_logs_exports}

---

##### `EnableIamDatabaseAuthentication`<sup>Optional</sup> <a name="EnableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enableIamDatabaseAuthentication"></a>

```go
EnableIamDatabaseAuthentication interface{}
```

- *Type:* interface{}

A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts.

By default, mapping is disabled.
This property is supported for RDS for MariaDB, RDS for MySQL, and RDS for PostgreSQL. For more information, see [IAM Database Authentication for MariaDB, MySQL, and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide.*
*Amazon Aurora*
Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#enable_iam_database_authentication RdsDbInstance#enable_iam_database_authentication}

---

##### `EnablePerformanceInsights`<sup>Optional</sup> <a name="EnablePerformanceInsights" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enablePerformanceInsights"></a>

```go
EnablePerformanceInsights interface{}
```

- *Type:* interface{}

Specifies whether to enable Performance Insights for the DB instance.

For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#enable_performance_insights RdsDbInstance#enable_performance_insights}

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

The name of the database engine to use for this DB instance.

Not every database engine is available in every AWS Region.
This property is required when creating a DB instance.
You can convert an Oracle database from the non-CDB architecture to the container database (CDB) architecture by updating the `Engine` value in your templates from `oracle-ee` to `oracle-ee-cdb` or from `oracle-se2` to `oracle-se2-cdb`. Converting to the CDB architecture requires an interruption.
Valid Values:

* `aurora-mysql` (for Aurora MySQL DB instances)
* `aurora-postgresql` (for Aurora PostgreSQL DB instances)
* `custom-oracle-ee` (for RDS Custom for Oracle DB instances)
* `custom-oracle-ee-cdb` (for RDS Custom for Oracle DB instances)
* `custom-sqlserver-ee` (for RDS Custom for SQL Server DB instances)
* `custom-sqlserver-se` (for RDS Custom for SQL Server DB instances)
* `custom-sqlserver-web` (for RDS Custom for SQL Server DB instances)
* `db2-ae`
* `db2-se`
* `mariadb`
* `mysql`
* `oracle-ee`
* `oracle-ee-cdb`
* `oracle-se2`
* `oracle-se2-cdb`
* `postgres`
* `sqlserver-ee`
* `sqlserver-se`
* `sqlserver-ex`
* `sqlserver-web`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#engine RdsDbInstance#engine}

---

##### `EngineLifecycleSupport`<sup>Optional</sup> <a name="EngineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engineLifecycleSupport"></a>

```go
EngineLifecycleSupport *string
```

- *Type:* *string

The lifecycle type for this DB instance.

By default, this value is set to `open-source-rds-extended-support`, which enrolls your DB instance into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, creating the DB instance will fail if the DB major version is past its end of standard support date.
This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the engine lifecycle support is managed by the DB cluster.
You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*.
Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
Default: `open-source-rds-extended-support`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#engine_lifecycle_support RdsDbInstance#engine_lifecycle_support}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

The version number of the database engine to use.

For a list of valid engine versions, use the `DescribeDBEngineVersions` action.
The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every AWS Region.
*Amazon Aurora*
Not applicable. The version number of the database engine to be used by the DB instance is managed by the DB cluster.
*Db2*
See [Amazon RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Db2.html#Db2.Concepts.VersionMgmt) in the *Amazon RDS User Guide.*
*MariaDB*
See [MariaDB on Amazon RDS Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MariaDB.html#MariaDB.Concepts.VersionMgmt) in the *Amazon RDS User Guide.*
*Microsoft SQL Server*
See [Microsoft SQL Server Versions on Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.VersionSupport) in the *Amazon RDS User Guide.*
*MySQL*
See [MySQL on Amazon RDS Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt) in the *Amazon RDS User Guide.*
*Oracle*
See [Oracle Database Engine Release Notes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.PatchComposition.html) in the *Amazon RDS User Guide.*
*PostgreSQL*
See [Supported PostgreSQL Database Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts.General.DBVersions) in the *Amazon RDS User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#engine_version RdsDbInstance#engine_version}

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

The number of I/O operations per second (IOPS) that the database provisions.

The value must be equal to or greater than 1000.
If you specify this property, you must follow the range of allowed ratios of your requested IOPS rate to the amount of storage that you allocate (IOPS to allocated storage). For example, you can provision an Oracle database instance with 1000 IOPS and 200 GiB of storage (a ratio of 5:1), or specify 2000 IOPS with 200 GiB of storage (a ratio of 10:1). For more information, see [Amazon RDS Provisioned IOPS Storage to Improve Performance](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
If you specify `io1` for the `StorageType` property, then you must also specify the `Iops` property.
Constraints:

* For RDS for Db2, MariaDB, MySQL, Oracle, and PostgreSQL - Must be a multiple between .5 and 50 of the storage amount for the DB instance.
* For RDS for SQL Server - Must be a multiple between 1 and 50 of the storage amount for the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#iops RdsDbInstance#iops}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The ARN of the AWS KMS key that's used to encrypt the DB instance, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``.

If you enable the StorageEncrypted property but don't specify this property, AWS CloudFormation uses the default KMS key. If you specify this property, you must set the StorageEncrypted property to true.
If you specify the `SourceDBInstanceIdentifier` or `SourceDbiResourceId` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified `KmsKeyId` property is used. However, if the source DB instance is in a different AWS Region, you must specify a KMS key ID.
If you specify the `SourceDBInstanceAutomatedBackupsArn` property, don't specify this property. The value is inherited from the source DB instance automated backup, and if the automated backup is encrypted, the specified `KmsKeyId` property is used.
If you create an encrypted read replica in a different AWS Region, then you must specify a KMS key for the destination AWS Region. KMS encryption keys are specific to the region that they're created in, and you can't use encryption keys from one region in another region.
If you specify the `DBSnapshotIdentifier` property, don't specify this property. The `StorageEncrypted` property value is inherited from the snapshot. If the DB instance is encrypted, the specified `KmsKeyId` property is also inherited from the snapshot.
If you specify `DBSecurityGroups`, AWS CloudFormation ignores this property. To specify both a security group and this property, you must use a VPC security group. For more information about Amazon RDS and VPC, see [Using Amazon RDS with Amazon VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide*.
*Amazon Aurora*
Not applicable. The KMS key identifier is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#kms_key_id RdsDbInstance#kms_key_id}

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.licenseModel"></a>

```go
LicenseModel *string
```

- *Type:* *string

License model information for this DB instance.

Valid Values:

* Aurora MySQL - `general-public-license`
* Aurora PostgreSQL - `postgresql-license`
* RDS for Db2 - `bring-your-own-license`. For more information about RDS for Db2 licensing, see [](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-licensing.html) in the *Amazon RDS User Guide.*
* RDS for MariaDB - `general-public-license`
* RDS for Microsoft SQL Server - `license-included` or `bring-your-own-media`
* RDS for MySQL - `general-public-license`
* RDS for Oracle - `bring-your-own-license` or `license-included`
* RDS for PostgreSQL - `postgresql-license`

If you've specified `DBSecurityGroups` and then you update the license model, AWS CloudFormation replaces the underlying DB instance. This will incur some interruptions to database availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#license_model RdsDbInstance#license_model}

---

##### `ManageMasterUserPassword`<sup>Optional</sup> <a name="ManageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.manageMasterUserPassword"></a>

```go
ManageMasterUserPassword interface{}
```

- *Type:* interface{}

Specifies whether to manage the master user password with AWS Secrets Manager.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
Constraints:

* Can't manage the master user password with AWS Secrets Manager if `MasterUserPassword` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#manage_master_user_password RdsDbInstance#manage_master_user_password}

---

##### `MasterUserAuthenticationType`<sup>Optional</sup> <a name="MasterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserAuthenticationType"></a>

```go
MasterUserAuthenticationType *string
```

- *Type:* *string

Specifies the authentication type for the master user.

With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB instance.
You can specify one of the following values:

* `password` - Use standard database authentication with a password.
* `iam-db-auth` - Use IAM database authentication for the master user.

This option is only valid for RDS for MySQL, RDS for MariaDB, RDS for PostgreSQL, Aurora MySQL, and Aurora PostgreSQL engines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#master_user_authentication_type RdsDbInstance#master_user_authentication_type}

---

##### `MasterUsername`<sup>Optional</sup> <a name="MasterUsername" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUsername"></a>

```go
MasterUsername *string
```

- *Type:* *string

The master user name for the DB instance.

If you specify the `SourceDBInstanceIdentifier` or `DBSnapshotIdentifier` property, don't specify this property. The value is inherited from the source DB instance or snapshot.
When migrating a self-managed Db2 database, we recommend that you use the same master username as your self-managed Db2 instance name.
*Amazon Aurora*
Not applicable. The name for the master user is managed by the DB cluster.
*RDS for Db2*
Constraints:

* Must be 1 to 16 letters or numbers.
* First character must be a letter.
* Can't be a reserved word for the chosen database engine.

*RDS for MariaDB*
Constraints:

* Must be 1 to 16 letters or numbers.
* Can't be a reserved word for the chosen database engine.

*RDS for Microsoft SQL Server*
Constraints:

* Must be 1 to 128 letters or numbers.
* First character must be a letter.
* Can't be a reserved word for the chosen database engine.

*RDS for MySQL*
Constraints:

* Must be 1 to 16 letters or numbers.
* First character must be a letter.
* Can't be a reserved word for the chosen database engine.

*RDS for Oracle*
Constraints:

* Must be 1 to 30 letters or numbers.
* First character must be a letter.
* Can't be a reserved word for the chosen database engine.

*RDS for PostgreSQL*
Constraints:

* Must be 1 to 63 letters or numbers.
* First character must be a letter.
* Can't be a reserved word for the chosen database engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#master_username RdsDbInstance#master_username}

---

##### `MasterUserPassword`<sup>Optional</sup> <a name="MasterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserPassword"></a>

```go
MasterUserPassword *string
```

- *Type:* *string

The password for the master user.

The password can include any printable ASCII character except "/", """, or "@".
*Amazon Aurora*
Not applicable. The password for the master user is managed by the DB cluster.
*RDS for Db2*
Must contain from 8 to 255 characters.
*RDS for MariaDB*
Constraints: Must contain from 8 to 41 characters.
*RDS for Microsoft SQL Server*
Constraints: Must contain from 8 to 128 characters.
*RDS for MySQL*
Constraints: Must contain from 8 to 41 characters.
*RDS for Oracle*
Constraints: Must contain from 8 to 30 characters.
*RDS for PostgreSQL*
Constraints: Must contain from 8 to 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#master_user_password RdsDbInstance#master_user_password}

---

##### `MasterUserSecret`<sup>Optional</sup> <a name="MasterUserSecret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserSecret"></a>

```go
MasterUserSecret RdsDbInstanceMasterUserSecret
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a>

The secret managed by RDS in AWS Secrets Manager for the master user password.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#master_user_secret RdsDbInstance#master_user_secret}

---

##### `MaxAllocatedStorage`<sup>Optional</sup> <a name="MaxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.maxAllocatedStorage"></a>

```go
MaxAllocatedStorage *f64
```

- *Type:* *f64

The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.

For more information about this setting, including limitations that apply to it, see [Managing capacity automatically with Amazon RDS storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling) in the *Amazon RDS User Guide*.
This setting doesn't apply to the following DB instances:

* Amazon Aurora (Storage is managed by the DB cluster.)
* RDS Custom

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#max_allocated_storage RdsDbInstance#max_allocated_storage}

---

##### `MonitoringInterval`<sup>Optional</sup> <a name="MonitoringInterval" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.monitoringInterval"></a>

```go
MonitoringInterval *f64
```

- *Type:* *f64

The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.

To disable collection of Enhanced Monitoring metrics, specify `0`.
If `MonitoringRoleArn` is specified, then you must set `MonitoringInterval` to a value other than `0`.
This setting doesn't apply to RDS Custom DB instances.
Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#monitoring_interval RdsDbInstance#monitoring_interval}

---

##### `MonitoringRoleArn`<sup>Optional</sup> <a name="MonitoringRoleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.monitoringRoleArn"></a>

```go
MonitoringRoleArn *string
```

- *Type:* *string

The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs.

For example, `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [Setting Up and Enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide*.
If `MonitoringInterval` is set to a value other than `0`, then you must supply a `MonitoringRoleArn` value.
This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#monitoring_role_arn RdsDbInstance#monitoring_role_arn}

---

##### `MultiAz`<sup>Optional</sup> <a name="MultiAz" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.multiAz"></a>

```go
MultiAz interface{}
```

- *Type:* interface{}

Specifies whether the DB instance is a Multi-AZ deployment.

You can't set the `AvailabilityZone` parameter if the DB instance is a Multi-AZ deployment.
This setting doesn't apply to Amazon Aurora because the DB instance Availability Zones (AZs) are managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#multi_az RdsDbInstance#multi_az}

---

##### `NcharCharacterSetName`<sup>Optional</sup> <a name="NcharCharacterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.ncharCharacterSetName"></a>

```go
NcharCharacterSetName *string
```

- *Type:* *string

The name of the NCHAR character set for the Oracle DB instance.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#nchar_character_set_name RdsDbInstance#nchar_character_set_name}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.networkType"></a>

```go
NetworkType *string
```

- *Type:* *string

The network type of the DB instance.

Valid values:

* `IPV4`
* `DUAL`

The network type is determined by the `DBSubnetGroup` specified for the DB instance. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and IPv6 protocols (`DUAL`).
For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#network_type RdsDbInstance#network_type}

---

##### `OptionGroupName`<sup>Optional</sup> <a name="OptionGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.optionGroupName"></a>

```go
OptionGroupName *string
```

- *Type:* *string

Indicates that the DB instance should be associated with the specified option group.

Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance once it is associated with a DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#option_group_name RdsDbInstance#option_group_name}

---

##### `PerformanceInsightsKmsKeyId`<sup>Optional</sup> <a name="PerformanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.performanceInsightsKmsKeyId"></a>

```go
PerformanceInsightsKmsKeyId *string
```

- *Type:* *string

The AWS KMS key identifier for encryption of Performance Insights data.

The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
If you do not specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS account. Your AWS account has a different default KMS key for each AWS Region.
*Update behavior:* Once Performance Insights is enabled with a KMS key, you cannot change to a different physical KMS key without replacing the DB instance. However, the following updates do not require replacement:

* Enabling or disabling Performance Insights using the `EnablePerformanceInsights` property
* Changing between different identifier formats (key ARN, key ID, alias ARN, alias name) of the same physical KMS key
* Removing the `PerformanceInsightsKMSKeyId` property from your template

*Drift behavior:* If you specify `PerformanceInsightsKMSKeyId` while `EnablePerformanceInsights` is set to `false`, CloudFormation will report drift. This occurs because the RDS API does not allow setting a KMS key when Performance Insights is disabled. CloudFormation ignores the `PerformanceInsightsKMSKeyId` value during instance creation to avoid API errors, resulting in a mismatch between your template and the actual instance configuration.
To avoid drift, omit both `EnablePerformanceInsights` and `PerformanceInsightsKMSKeyId` during initial instance creation, then set both properties together when you're ready to enable Performance Insights.
For information about enabling Performance Insights, see [EnablePerformanceInsights](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-enableperformanceinsights).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#performance_insights_kms_key_id RdsDbInstance#performance_insights_kms_key_id}

---

##### `PerformanceInsightsRetentionPeriod`<sup>Optional</sup> <a name="PerformanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.performanceInsightsRetentionPeriod"></a>

```go
PerformanceInsightsRetentionPeriod *f64
```

- *Type:* *f64

The number of days to retain Performance Insights data.

When creating a DB instance without enabling Performance Insights, you can't specify the parameter `PerformanceInsightsRetentionPeriod`.
This setting doesn't apply to RDS Custom DB instances.
Valid Values:

* `7`
* *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
* `731`

Default: `7` days
If you specify a retention period that isn't valid, such as `94`, Amazon RDS returns an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#performance_insights_retention_period RdsDbInstance#performance_insights_retention_period}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.port"></a>

```go
Port *string
```

- *Type:* *string

The port number on which the database accepts connections.

This setting doesn't apply to Aurora DB instances. The port number is managed by the cluster.
Valid Values: `1150-65535`
Default:

* RDS for Db2 - `50000`
* RDS for MariaDB - `3306`
* RDS for Microsoft SQL Server - `1433`
* RDS for MySQL - `3306`
* RDS for Oracle - `1521`
* RDS for PostgreSQL - `5432`

Constraints:

* For RDS for Microsoft SQL Server, the value can't be `1234`, `1434`, `3260`, `3343`, `3389`, `47001`, or `49152-49156`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#port RdsDbInstance#port}

---

##### `PreferredBackupWindow`<sup>Optional</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.preferredBackupWindow"></a>

```go
PreferredBackupWindow *string
```

- *Type:* *string

The daily time range during which automated backups are created if automated backups are enabled, using the ``BackupRetentionPeriod`` parameter.

For more information, see [Backup Window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow) in the *Amazon RDS User Guide.*
Constraints:

* Must be in the format `hh24:mi-hh24:mi`.
* Must be in Universal Coordinated Time (UTC).
* Must not conflict with the preferred maintenance window.
* Must be at least 30 minutes.

*Amazon Aurora*
Not applicable. The daily time range for creating automated backups is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#preferred_backup_window RdsDbInstance#preferred_backup_window}

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.preferredMaintenanceWindow"></a>

```go
PreferredMaintenanceWindow *string
```

- *Type:* *string

The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

Format: `ddd:hh24:mi-ddd:hh24:mi`
The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [Maintaining a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow) in the *Amazon RDS User Guide.*
This property applies when AWS CloudFormation initially creates the DB instance. If you use AWS CloudFormation to update the DB instance, those updates are applied immediately.
Constraints: Minimum 30-minute window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#preferred_maintenance_window RdsDbInstance#preferred_maintenance_window}

---

##### `ProcessorFeatures`<sup>Optional</sup> <a name="ProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.processorFeatures"></a>

```go
ProcessorFeatures interface{}
```

- *Type:* interface{}

The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.

This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#processor_features RdsDbInstance#processor_features}

---

##### `PromotionTier`<sup>Optional</sup> <a name="PromotionTier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.promotionTier"></a>

```go
PromotionTier *f64
```

- *Type:* *f64

The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance.

For more information, see [Fault Tolerance for an Aurora DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Aurora.Managing.FaultTolerance) in the *Amazon Aurora User Guide*.
This setting doesn't apply to RDS Custom DB instances.
Default: `1`
Valid Values: `0 - 15`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#promotion_tier RdsDbInstance#promotion_tier}

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.publiclyAccessible"></a>

```go
PubliclyAccessible interface{}
```

- *Type:* interface{}

Indicates whether the DB instance is an internet-facing instance.

If you specify true, AWS CloudFormation creates an instance with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, AWS CloudFormation creates an internal instance with a DNS name that resolves to a private IP address.
The default behavior value depends on your VPC setup and the database subnet group. For more information, see the `PubliclyAccessible` parameter in the [CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) in the *Amazon RDS API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#publicly_accessible RdsDbInstance#publicly_accessible}

---

##### `ReplicaMode`<sup>Optional</sup> <a name="ReplicaMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.replicaMode"></a>

```go
ReplicaMode *string
```

- *Type:* *string

The open mode of an Oracle read replica.

For more information, see [Working with Oracle Read Replicas for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) in the *Amazon RDS User Guide*.
This setting is only supported in RDS for Oracle.
Default: `open-read-only`
Valid Values: `open-read-only` or `mounted`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#replica_mode RdsDbInstance#replica_mode}

---

##### `RestoreTime`<sup>Optional</sup> <a name="RestoreTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.restoreTime"></a>

```go
RestoreTime *string
```

- *Type:* *string

The date and time to restore from.

This parameter applies to point-in-time recovery. For more information, see [Restoring a DB instance to a specified time](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html) in the in the *Amazon RDS User Guide*.
Constraints:

* Must be a time in Universal Coordinated Time (UTC) format.
* Must be before the latest restorable time for the DB instance.
* Can't be specified if the `UseLatestRestorableTime` parameter is enabled.

Example: `2009-09-07T23:45:00Z`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#restore_time RdsDbInstance#restore_time}

---

##### `SourceDbClusterIdentifier`<sup>Optional</sup> <a name="SourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbClusterIdentifier"></a>

```go
SourceDbClusterIdentifier *string
```

- *Type:* *string

The identifier of the Multi-AZ DB cluster that will act as the source for the read replica.

Each DB cluster can have up to 15 read replicas.
Constraints:

* Must be the identifier of an existing Multi-AZ DB cluster.
* Can't be specified if the `SourceDBInstanceIdentifier` parameter is also specified.
* The specified DB cluster must have automatic backups enabled, that is, its backup retention period must be greater than 0.
* The source DB cluster must be in the same AWS-Region as the read replica. Cross-Region replication isn't supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_db_cluster_identifier RdsDbInstance#source_db_cluster_identifier}

---

##### `SourceDbInstanceAutomatedBackupsArn`<sup>Optional</sup> <a name="SourceDbInstanceAutomatedBackupsArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbInstanceAutomatedBackupsArn"></a>

```go
SourceDbInstanceAutomatedBackupsArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, ``arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE``.

This setting doesn't apply to RDS Custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_db_instance_automated_backups_arn RdsDbInstance#source_db_instance_automated_backups_arn}

---

##### `SourceDbInstanceIdentifier`<sup>Optional</sup> <a name="SourceDbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbInstanceIdentifier"></a>

```go
SourceDbInstanceIdentifier *string
```

- *Type:* *string

If you want to create a read replica DB instance, specify the ID of the source DB instance.

Each DB instance can have a limited number of read replicas. For more information, see [Working with Read Replicas](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/USER_ReadRepl.html) in the *Amazon RDS User Guide*.
For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon RDS User Guide*.
The `SourceDBInstanceIdentifier` property determines whether a DB instance is a read replica. If you remove the `SourceDBInstanceIdentifier` property from your template and then update your stack, AWS CloudFormation promotes the read replica to a standalone DB instance.
If you specify the `UseLatestRestorableTime` or `RestoreTime` properties in conjunction with the `SourceDBInstanceIdentifier` property, RDS restores the DB instance to the requested point in time, thereby creating a new DB instance.

* If you specify a source DB instance that uses VPC security groups, we recommend that you specify the `VPCSecurityGroups` property. If you don't specify the property, the read replica inherits the value of the `VPCSecurityGroups` property from the source DB when you create the replica. However, if you update the stack, AWS CloudFormation reverts the replica's `VPCSecurityGroups` property to the default value because it's not defined in the stack's template. This change might cause unexpected issues.
* Read replicas don't support deletion policies. AWS CloudFormation ignores any deletion policy that's associated with a read replica.
* If you specify `SourceDBInstanceIdentifier`, don't specify the `DBSnapshotIdentifier` property. You can't create a read replica from a snapshot.
* Don't set the `BackupRetentionPeriod`, `DBName`, `MasterUsername`, `MasterUserPassword`, and `PreferredBackupWindow` properties. The database attributes are inherited from the source DB instance, and backups are disabled for read replicas.
* If the source DB instance is in a different region than the read replica, specify the source region in `SourceRegion`, and specify an ARN for a valid DB instance in `SourceDBInstanceIdentifier`. For more information, see [Constructing a Amazon RDS Amazon Resource Name (ARN)](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html#USER_Tagging.ARN) in the *Amazon RDS User Guide*.
* For DB instances in Amazon Aurora clusters, don't specify this property. Amazon RDS automatically assigns writer and reader DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_db_instance_identifier RdsDbInstance#source_db_instance_identifier}

---

##### `SourceDbiResourceId`<sup>Optional</sup> <a name="SourceDbiResourceId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbiResourceId"></a>

```go
SourceDbiResourceId *string
```

- *Type:* *string

The resource ID of the source DB instance from which to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_dbi_resource_id RdsDbInstance#source_dbi_resource_id}

---

##### `SourceRegion`<sup>Optional</sup> <a name="SourceRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceRegion"></a>

```go
SourceRegion *string
```

- *Type:* *string

The ID of the region that contains the source DB instance for the read replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_region RdsDbInstance#source_region}

---

##### `StorageEncrypted`<sup>Optional</sup> <a name="StorageEncrypted" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageEncrypted"></a>

```go
StorageEncrypted interface{}
```

- *Type:* interface{}

A value that indicates whether the DB instance is encrypted.

By default, it isn't encrypted.
If you specify the `KmsKeyId` property, then you must enable encryption.
If you specify the `SourceDBInstanceIdentifier` or `SourceDbiResourceId` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified `KmsKeyId` property is used.
If you specify the `SourceDBInstanceAutomatedBackupsArn` property, don't specify this property. The value is inherited from the source DB instance automated backup.
If you specify `DBSnapshotIdentifier` property, don't specify this property. The value is inherited from the snapshot.
*Amazon Aurora*
Not applicable. The encryption for DB instances is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_encrypted RdsDbInstance#storage_encrypted}

---

##### `StorageThroughput`<sup>Optional</sup> <a name="StorageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageThroughput"></a>

```go
StorageThroughput *f64
```

- *Type:* *f64

Specifies the storage throughput value, in mebibyte per second (MiBps), for the DB instance.

This setting applies only to the `gp3` storage type.
This setting doesn't apply to RDS Custom or Amazon Aurora.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_throughput RdsDbInstance#storage_throughput}

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageType"></a>

```go
StorageType *string
```

- *Type:* *string

The storage type to associate with the DB instance.

If you specify `io1`, `io2`, or `gp3`, you must also include a value for the `Iops` parameter.
This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster.
Valid Values: `gp2 | gp3 | io1 | io2 | standard`
Default: `io1`, if the `Iops` parameter is specified. Otherwise, `gp3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_type RdsDbInstance#storage_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags to assign to the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tags RdsDbInstance#tags}

---

##### `TdeCredentialArn`<sup>Optional</sup> <a name="TdeCredentialArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tdeCredentialArn"></a>

```go
TdeCredentialArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tde_credential_arn RdsDbInstance#tde_credential_arn}.

---

##### `TdeCredentialPassword`<sup>Optional</sup> <a name="TdeCredentialPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tdeCredentialPassword"></a>

```go
TdeCredentialPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tde_credential_password RdsDbInstance#tde_credential_password}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

The time zone of the DB instance.

The time zone parameter is currently supported only by [RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-time-zone) and [RDS for SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#timezone RdsDbInstance#timezone}

---

##### `UseDefaultProcessorFeatures`<sup>Optional</sup> <a name="UseDefaultProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.useDefaultProcessorFeatures"></a>

```go
UseDefaultProcessorFeatures interface{}
```

- *Type:* interface{}

Specifies whether the DB instance class of the DB instance uses its default processor features.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#use_default_processor_features RdsDbInstance#use_default_processor_features}

---

##### `UseLatestRestorableTime`<sup>Optional</sup> <a name="UseLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.useLatestRestorableTime"></a>

```go
UseLatestRestorableTime interface{}
```

- *Type:* interface{}

Specifies whether the DB instance is restored from the latest backup time.

By default, the DB instance isn't restored from the latest backup time. This parameter applies to point-in-time recovery. For more information, see [Restoring a DB instance to a specified time](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html) in the in the *Amazon RDS User Guide*.
Constraints:

* Can't be specified if the `RestoreTime` parameter is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#use_latest_restorable_time RdsDbInstance#use_latest_restorable_time}

---

##### `VpcSecurityGroups`<sup>Optional</sup> <a name="VpcSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.vpcSecurityGroups"></a>

```go
VpcSecurityGroups *[]*string
```

- *Type:* *[]*string

A list of the VPC security group IDs to assign to the DB instance.

The list can include both the physical IDs of existing VPC security groups and references to [AWS::EC2::SecurityGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html) resources created in the template.
If you plan to update the resource, don't specify VPC security groups in a shared VPC.
If you set `VPCSecurityGroups`, you must not set [DBSecurityGroups](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups), and vice versa.
You can migrate a DB instance in your stack from an RDS DB security group to a VPC security group, but keep the following in mind:

* You can't revert to using an RDS security group after you establish a VPC security group membership.
* When you migrate your DB instance to VPC security groups, if your stack update rolls back because the DB instance update fails or because an update fails in another AWS CloudFormation resource, the rollback fails because it can't revert to an RDS security group.
* To use the properties that are available when you use a VPC security group, you must recreate the DB instance. If you don't, AWS CloudFormation submits only the property values that are listed in the [DBSecurityGroups](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups) property.

To avoid this situation, migrate your DB instance to using VPC security groups only when that is the only change in your stack template.
*Amazon Aurora*
Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. If specified, the setting must match the DB cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#vpc_security_groups RdsDbInstance#vpc_security_groups}

---

### RdsDbInstanceEndpoint <a name="RdsDbInstanceEndpoint" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

&rdsdbinstance.RdsDbInstanceEndpoint {

}
```


### RdsDbInstanceListenerEndpoint <a name="RdsDbInstanceListenerEndpoint" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

&rdsdbinstance.RdsDbInstanceListenerEndpoint {

}
```


### RdsDbInstanceMasterUserSecret <a name="RdsDbInstanceMasterUserSecret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

&rdsdbinstance.RdsDbInstanceMasterUserSecret {
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The AWS KMS key identifier that is used to encrypt the secret. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The AWS KMS key identifier that is used to encrypt the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#kms_key_id RdsDbInstance#kms_key_id}

---

### RdsDbInstanceProcessorFeatures <a name="RdsDbInstanceProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

&rdsdbinstance.RdsDbInstanceProcessorFeatures {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.property.name">Name</a></code> | <code>*string</code> | The name of the processor feature. Valid names are ``coreCount`` and ``threadsPerCore``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.property.value">Value</a></code> | <code>*string</code> | The value of a processor feature. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the processor feature. Valid names are ``coreCount`` and ``threadsPerCore``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#name RdsDbInstance#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of a processor feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#value RdsDbInstance#value}

---

### RdsDbInstanceStatusInfos <a name="RdsDbInstanceStatusInfos" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfos.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

&rdsdbinstance.RdsDbInstanceStatusInfos {

}
```


### RdsDbInstanceTags <a name="RdsDbInstanceTags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

&rdsdbinstance.RdsDbInstanceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.property.key">Key</a></code> | <code>*string</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.property.value">Value</a></code> | <code>*string</code> | A value is the optional value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#key RdsDbInstance#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#value RdsDbInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbInstanceAdditionalStorageVolumesList <a name="RdsDbInstanceAdditionalStorageVolumesList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.NewRdsDbInstanceAdditionalStorageVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RdsDbInstanceAdditionalStorageVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.get"></a>

```go
func Get(index *f64) RdsDbInstanceAdditionalStorageVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbInstanceAdditionalStorageVolumesOutputReference <a name="RdsDbInstanceAdditionalStorageVolumesOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.NewRdsDbInstanceAdditionalStorageVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RdsDbInstanceAdditionalStorageVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetAllocatedStorage">ResetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetMaxAllocatedStorage">ResetMaxAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageOperationPercentProgress">ResetStorageOperationPercentProgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageOperationStatus">ResetStorageOperationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageThroughput">ResetStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetVolumeName">ResetVolumeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllocatedStorage` <a name="ResetAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetAllocatedStorage"></a>

```go
func ResetAllocatedStorage()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetMaxAllocatedStorage` <a name="ResetMaxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetMaxAllocatedStorage"></a>

```go
func ResetMaxAllocatedStorage()
```

##### `ResetStorageOperationPercentProgress` <a name="ResetStorageOperationPercentProgress" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageOperationPercentProgress"></a>

```go
func ResetStorageOperationPercentProgress()
```

##### `ResetStorageOperationStatus` <a name="ResetStorageOperationStatus" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageOperationStatus"></a>

```go
func ResetStorageOperationStatus()
```

##### `ResetStorageThroughput` <a name="ResetStorageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageThroughput"></a>

```go
func ResetStorageThroughput()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageType"></a>

```go
func ResetStorageType()
```

##### `ResetVolumeName` <a name="ResetVolumeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetVolumeName"></a>

```go
func ResetVolumeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.allocatedStorageInput">AllocatedStorageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.maxAllocatedStorageInput">MaxAllocatedStorageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationPercentProgressInput">StorageOperationPercentProgressInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationStatusInput">StorageOperationStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageThroughputInput">StorageThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageTypeInput">StorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.volumeNameInput">VolumeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.allocatedStorage">AllocatedStorage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.maxAllocatedStorage">MaxAllocatedStorage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationPercentProgress">StorageOperationPercentProgress</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationStatus">StorageOperationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageThroughput">StorageThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.volumeName">VolumeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocatedStorageInput`<sup>Optional</sup> <a name="AllocatedStorageInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.allocatedStorageInput"></a>

```go
func AllocatedStorageInput() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `MaxAllocatedStorageInput`<sup>Optional</sup> <a name="MaxAllocatedStorageInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.maxAllocatedStorageInput"></a>

```go
func MaxAllocatedStorageInput() *f64
```

- *Type:* *f64

---

##### `StorageOperationPercentProgressInput`<sup>Optional</sup> <a name="StorageOperationPercentProgressInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationPercentProgressInput"></a>

```go
func StorageOperationPercentProgressInput() *f64
```

- *Type:* *f64

---

##### `StorageOperationStatusInput`<sup>Optional</sup> <a name="StorageOperationStatusInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationStatusInput"></a>

```go
func StorageOperationStatusInput() *string
```

- *Type:* *string

---

##### `StorageThroughputInput`<sup>Optional</sup> <a name="StorageThroughputInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageThroughputInput"></a>

```go
func StorageThroughputInput() *f64
```

- *Type:* *f64

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageTypeInput"></a>

```go
func StorageTypeInput() *string
```

- *Type:* *string

---

##### `VolumeNameInput`<sup>Optional</sup> <a name="VolumeNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.volumeNameInput"></a>

```go
func VolumeNameInput() *string
```

- *Type:* *string

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.allocatedStorage"></a>

```go
func AllocatedStorage() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `MaxAllocatedStorage`<sup>Required</sup> <a name="MaxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.maxAllocatedStorage"></a>

```go
func MaxAllocatedStorage() *f64
```

- *Type:* *f64

---

##### `StorageOperationPercentProgress`<sup>Required</sup> <a name="StorageOperationPercentProgress" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationPercentProgress"></a>

```go
func StorageOperationPercentProgress() *f64
```

- *Type:* *f64

---

##### `StorageOperationStatus`<sup>Required</sup> <a name="StorageOperationStatus" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationStatus"></a>

```go
func StorageOperationStatus() *string
```

- *Type:* *string

---

##### `StorageThroughput`<sup>Required</sup> <a name="StorageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageThroughput"></a>

```go
func StorageThroughput() *f64
```

- *Type:* *f64

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.volumeName"></a>

```go
func VolumeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbInstanceAssociatedRolesList <a name="RdsDbInstanceAssociatedRolesList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.NewRdsDbInstanceAssociatedRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RdsDbInstanceAssociatedRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.get"></a>

```go
func Get(index *f64) RdsDbInstanceAssociatedRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbInstanceAssociatedRolesOutputReference <a name="RdsDbInstanceAssociatedRolesOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.NewRdsDbInstanceAssociatedRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RdsDbInstanceAssociatedRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resetFeatureName">ResetFeatureName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFeatureName` <a name="ResetFeatureName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resetFeatureName"></a>

```go
func ResetFeatureName()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.featureNameInput">FeatureNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.featureName">FeatureName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FeatureNameInput`<sup>Optional</sup> <a name="FeatureNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.featureNameInput"></a>

```go
func FeatureNameInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.featureName"></a>

```go
func FeatureName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbInstanceCertificateDetailsOutputReference <a name="RdsDbInstanceCertificateDetailsOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.NewRdsDbInstanceCertificateDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RdsDbInstanceCertificateDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.caIdentifier">CaIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.validTill">ValidTill</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetails">RdsDbInstanceCertificateDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaIdentifier`<sup>Required</sup> <a name="CaIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.caIdentifier"></a>

```go
func CaIdentifier() *string
```

- *Type:* *string

---

##### `ValidTill`<sup>Required</sup> <a name="ValidTill" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.validTill"></a>

```go
func ValidTill() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() RdsDbInstanceCertificateDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetails">RdsDbInstanceCertificateDetails</a>

---


### RdsDbInstanceEndpointOutputReference <a name="RdsDbInstanceEndpointOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.NewRdsDbInstanceEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RdsDbInstanceEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpoint">RdsDbInstanceEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() RdsDbInstanceEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpoint">RdsDbInstanceEndpoint</a>

---


### RdsDbInstanceListenerEndpointOutputReference <a name="RdsDbInstanceListenerEndpointOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.NewRdsDbInstanceListenerEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RdsDbInstanceListenerEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpoint">RdsDbInstanceListenerEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() RdsDbInstanceListenerEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpoint">RdsDbInstanceListenerEndpoint</a>

---


### RdsDbInstanceMasterUserSecretOutputReference <a name="RdsDbInstanceMasterUserSecretOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.NewRdsDbInstanceMasterUserSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RdsDbInstanceMasterUserSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbInstanceProcessorFeaturesList <a name="RdsDbInstanceProcessorFeaturesList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.NewRdsDbInstanceProcessorFeaturesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RdsDbInstanceProcessorFeaturesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.get"></a>

```go
func Get(index *f64) RdsDbInstanceProcessorFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbInstanceProcessorFeaturesOutputReference <a name="RdsDbInstanceProcessorFeaturesOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.NewRdsDbInstanceProcessorFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RdsDbInstanceProcessorFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbInstanceStatusInfosList <a name="RdsDbInstanceStatusInfosList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.NewRdsDbInstanceStatusInfosList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RdsDbInstanceStatusInfosList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.get"></a>

```go
func Get(index *f64) RdsDbInstanceStatusInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### RdsDbInstanceStatusInfosOutputReference <a name="RdsDbInstanceStatusInfosOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.NewRdsDbInstanceStatusInfosOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RdsDbInstanceStatusInfosOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.normal">Normal</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.statusType">StatusType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfos">RdsDbInstanceStatusInfos</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Normal`<sup>Required</sup> <a name="Normal" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.normal"></a>

```go
func Normal() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusType`<sup>Required</sup> <a name="StatusType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.statusType"></a>

```go
func StatusType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.internalValue"></a>

```go
func InternalValue() RdsDbInstanceStatusInfos
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfos">RdsDbInstanceStatusInfos</a>

---


### RdsDbInstanceTagsList <a name="RdsDbInstanceTagsList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.NewRdsDbInstanceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RdsDbInstanceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.get"></a>

```go
func Get(index *f64) RdsDbInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbInstanceTagsOutputReference <a name="RdsDbInstanceTagsOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbinstance"

rdsdbinstance.NewRdsDbInstanceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RdsDbInstanceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



