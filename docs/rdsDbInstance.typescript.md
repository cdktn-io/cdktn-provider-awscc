# `rdsDbInstance` Submodule <a name="`rdsDbInstance` Submodule" id="@cdktn/provider-awscc.rdsDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbInstance <a name="RdsDbInstance" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance awscc_rds_db_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

new rdsDbInstance.RdsDbInstance(scope: Construct, id: string, config?: RdsDbInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig">RdsDbInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig">RdsDbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAdditionalStorageVolumes">putAdditionalStorageVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAssociatedRoles">putAssociatedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putMasterUserSecret">putMasterUserSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putProcessorFeatures">putProcessorFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAdditionalStorageVolumes">resetAdditionalStorageVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAllocatedStorage">resetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAllowMajorVersionUpgrade">resetAllowMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAssociatedRoles">resetAssociatedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationKmsKeyId">resetAutomaticBackupReplicationKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationRegion">resetAutomaticBackupReplicationRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationRetentionPeriod">resetAutomaticBackupReplicationRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetBackupRetentionPeriod">resetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetBackupTarget">resetBackupTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCaCertificateIdentifier">resetCaCertificateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCertificateRotationRestart">resetCertificateRotationRestart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCharacterSetName">resetCharacterSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCopyTagsToSnapshot">resetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCustomIamInstanceProfile">resetCustomIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDatabaseInsightsMode">resetDatabaseInsightsMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbClusterIdentifier">resetDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbClusterSnapshotIdentifier">resetDbClusterSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbInstanceClass">resetDbInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbInstanceIdentifier">resetDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbParameterGroupName">resetDbParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSecurityGroups">resetDbSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSnapshotIdentifier">resetDbSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSubnetGroupName">resetDbSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSystemId">resetDbSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDedicatedLogVolume">resetDedicatedLogVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDeleteAutomatedBackups">resetDeleteAutomatedBackups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainAuthSecretArn">resetDomainAuthSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainDnsIps">resetDomainDnsIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainFqdn">resetDomainFqdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainIamRoleName">resetDomainIamRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainOu">resetDomainOu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnableCloudwatchLogsExports">resetEnableCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnableIamDatabaseAuthentication">resetEnableIamDatabaseAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnablePerformanceInsights">resetEnablePerformanceInsights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngineLifecycleSupport">resetEngineLifecycleSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetManageMasterUserPassword">resetManageMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserAuthenticationType">resetMasterUserAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUsername">resetMasterUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserPassword">resetMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserSecret">resetMasterUserSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMaxAllocatedStorage">resetMaxAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMonitoringInterval">resetMonitoringInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMonitoringRoleArn">resetMonitoringRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMultiAz">resetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetNcharCharacterSetName">resetNcharCharacterSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetOptionGroupName">resetOptionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPerformanceInsightsKmsKeyId">resetPerformanceInsightsKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPerformanceInsightsRetentionPeriod">resetPerformanceInsightsRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPreferredBackupWindow">resetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetProcessorFeatures">resetProcessorFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPromotionTier">resetPromotionTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetReplicaMode">resetReplicaMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetRestoreTime">resetRestoreTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbClusterIdentifier">resetSourceDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbInstanceAutomatedBackupsArn">resetSourceDbInstanceAutomatedBackupsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbInstanceIdentifier">resetSourceDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbiResourceId">resetSourceDbiResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceRegion">resetSourceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageEncrypted">resetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageThroughput">resetStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTdeCredentialArn">resetTdeCredentialArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTdeCredentialPassword">resetTdeCredentialPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetUseDefaultProcessorFeatures">resetUseDefaultProcessorFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetUseLatestRestorableTime">resetUseLatestRestorableTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetVpcSecurityGroups">resetVpcSecurityGroups</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalStorageVolumes` <a name="putAdditionalStorageVolumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAdditionalStorageVolumes"></a>

```typescript
public putAdditionalStorageVolumes(value: IResolvable | RdsDbInstanceAdditionalStorageVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAdditionalStorageVolumes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>[]

---

##### `putAssociatedRoles` <a name="putAssociatedRoles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAssociatedRoles"></a>

```typescript
public putAssociatedRoles(value: IResolvable | RdsDbInstanceAssociatedRoles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAssociatedRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>[]

---

##### `putMasterUserSecret` <a name="putMasterUserSecret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putMasterUserSecret"></a>

```typescript
public putMasterUserSecret(value: RdsDbInstanceMasterUserSecret): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putMasterUserSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a>

---

##### `putProcessorFeatures` <a name="putProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putProcessorFeatures"></a>

```typescript
public putProcessorFeatures(value: IResolvable | RdsDbInstanceProcessorFeatures[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putProcessorFeatures.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putTags"></a>

```typescript
public putTags(value: IResolvable | RdsDbInstanceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>[]

---

##### `resetAdditionalStorageVolumes` <a name="resetAdditionalStorageVolumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAdditionalStorageVolumes"></a>

```typescript
public resetAdditionalStorageVolumes(): void
```

##### `resetAllocatedStorage` <a name="resetAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAllocatedStorage"></a>

```typescript
public resetAllocatedStorage(): void
```

##### `resetAllowMajorVersionUpgrade` <a name="resetAllowMajorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAllowMajorVersionUpgrade"></a>

```typescript
public resetAllowMajorVersionUpgrade(): void
```

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetApplyImmediately"></a>

```typescript
public resetApplyImmediately(): void
```

##### `resetAssociatedRoles` <a name="resetAssociatedRoles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAssociatedRoles"></a>

```typescript
public resetAssociatedRoles(): void
```

##### `resetAutomaticBackupReplicationKmsKeyId` <a name="resetAutomaticBackupReplicationKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationKmsKeyId"></a>

```typescript
public resetAutomaticBackupReplicationKmsKeyId(): void
```

##### `resetAutomaticBackupReplicationRegion` <a name="resetAutomaticBackupReplicationRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationRegion"></a>

```typescript
public resetAutomaticBackupReplicationRegion(): void
```

##### `resetAutomaticBackupReplicationRetentionPeriod` <a name="resetAutomaticBackupReplicationRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationRetentionPeriod"></a>

```typescript
public resetAutomaticBackupReplicationRetentionPeriod(): void
```

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutoMinorVersionUpgrade"></a>

```typescript
public resetAutoMinorVersionUpgrade(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetBackupRetentionPeriod` <a name="resetBackupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetBackupRetentionPeriod"></a>

```typescript
public resetBackupRetentionPeriod(): void
```

##### `resetBackupTarget` <a name="resetBackupTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetBackupTarget"></a>

```typescript
public resetBackupTarget(): void
```

##### `resetCaCertificateIdentifier` <a name="resetCaCertificateIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCaCertificateIdentifier"></a>

```typescript
public resetCaCertificateIdentifier(): void
```

##### `resetCertificateRotationRestart` <a name="resetCertificateRotationRestart" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCertificateRotationRestart"></a>

```typescript
public resetCertificateRotationRestart(): void
```

##### `resetCharacterSetName` <a name="resetCharacterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCharacterSetName"></a>

```typescript
public resetCharacterSetName(): void
```

##### `resetCopyTagsToSnapshot` <a name="resetCopyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCopyTagsToSnapshot"></a>

```typescript
public resetCopyTagsToSnapshot(): void
```

##### `resetCustomIamInstanceProfile` <a name="resetCustomIamInstanceProfile" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCustomIamInstanceProfile"></a>

```typescript
public resetCustomIamInstanceProfile(): void
```

##### `resetDatabaseInsightsMode` <a name="resetDatabaseInsightsMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDatabaseInsightsMode"></a>

```typescript
public resetDatabaseInsightsMode(): void
```

##### `resetDbClusterIdentifier` <a name="resetDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbClusterIdentifier"></a>

```typescript
public resetDbClusterIdentifier(): void
```

##### `resetDbClusterSnapshotIdentifier` <a name="resetDbClusterSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbClusterSnapshotIdentifier"></a>

```typescript
public resetDbClusterSnapshotIdentifier(): void
```

##### `resetDbInstanceClass` <a name="resetDbInstanceClass" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbInstanceClass"></a>

```typescript
public resetDbInstanceClass(): void
```

##### `resetDbInstanceIdentifier` <a name="resetDbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbInstanceIdentifier"></a>

```typescript
public resetDbInstanceIdentifier(): void
```

##### `resetDbName` <a name="resetDbName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbName"></a>

```typescript
public resetDbName(): void
```

##### `resetDbParameterGroupName` <a name="resetDbParameterGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbParameterGroupName"></a>

```typescript
public resetDbParameterGroupName(): void
```

##### `resetDbSecurityGroups` <a name="resetDbSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSecurityGroups"></a>

```typescript
public resetDbSecurityGroups(): void
```

##### `resetDbSnapshotIdentifier` <a name="resetDbSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSnapshotIdentifier"></a>

```typescript
public resetDbSnapshotIdentifier(): void
```

##### `resetDbSubnetGroupName` <a name="resetDbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSubnetGroupName"></a>

```typescript
public resetDbSubnetGroupName(): void
```

##### `resetDbSystemId` <a name="resetDbSystemId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSystemId"></a>

```typescript
public resetDbSystemId(): void
```

##### `resetDedicatedLogVolume` <a name="resetDedicatedLogVolume" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDedicatedLogVolume"></a>

```typescript
public resetDedicatedLogVolume(): void
```

##### `resetDeleteAutomatedBackups` <a name="resetDeleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDeleteAutomatedBackups"></a>

```typescript
public resetDeleteAutomatedBackups(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetDomainAuthSecretArn` <a name="resetDomainAuthSecretArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainAuthSecretArn"></a>

```typescript
public resetDomainAuthSecretArn(): void
```

##### `resetDomainDnsIps` <a name="resetDomainDnsIps" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainDnsIps"></a>

```typescript
public resetDomainDnsIps(): void
```

##### `resetDomainFqdn` <a name="resetDomainFqdn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainFqdn"></a>

```typescript
public resetDomainFqdn(): void
```

##### `resetDomainIamRoleName` <a name="resetDomainIamRoleName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainIamRoleName"></a>

```typescript
public resetDomainIamRoleName(): void
```

##### `resetDomainOu` <a name="resetDomainOu" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainOu"></a>

```typescript
public resetDomainOu(): void
```

##### `resetEnableCloudwatchLogsExports` <a name="resetEnableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnableCloudwatchLogsExports"></a>

```typescript
public resetEnableCloudwatchLogsExports(): void
```

##### `resetEnableIamDatabaseAuthentication` <a name="resetEnableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnableIamDatabaseAuthentication"></a>

```typescript
public resetEnableIamDatabaseAuthentication(): void
```

##### `resetEnablePerformanceInsights` <a name="resetEnablePerformanceInsights" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnablePerformanceInsights"></a>

```typescript
public resetEnablePerformanceInsights(): void
```

##### `resetEngine` <a name="resetEngine" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetEngineLifecycleSupport` <a name="resetEngineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngineLifecycleSupport"></a>

```typescript
public resetEngineLifecycleSupport(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetLicenseModel"></a>

```typescript
public resetLicenseModel(): void
```

##### `resetManageMasterUserPassword` <a name="resetManageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetManageMasterUserPassword"></a>

```typescript
public resetManageMasterUserPassword(): void
```

##### `resetMasterUserAuthenticationType` <a name="resetMasterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserAuthenticationType"></a>

```typescript
public resetMasterUserAuthenticationType(): void
```

##### `resetMasterUsername` <a name="resetMasterUsername" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUsername"></a>

```typescript
public resetMasterUsername(): void
```

##### `resetMasterUserPassword` <a name="resetMasterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserPassword"></a>

```typescript
public resetMasterUserPassword(): void
```

##### `resetMasterUserSecret` <a name="resetMasterUserSecret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserSecret"></a>

```typescript
public resetMasterUserSecret(): void
```

##### `resetMaxAllocatedStorage` <a name="resetMaxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMaxAllocatedStorage"></a>

```typescript
public resetMaxAllocatedStorage(): void
```

##### `resetMonitoringInterval` <a name="resetMonitoringInterval" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMonitoringInterval"></a>

```typescript
public resetMonitoringInterval(): void
```

##### `resetMonitoringRoleArn` <a name="resetMonitoringRoleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMonitoringRoleArn"></a>

```typescript
public resetMonitoringRoleArn(): void
```

##### `resetMultiAz` <a name="resetMultiAz" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMultiAz"></a>

```typescript
public resetMultiAz(): void
```

##### `resetNcharCharacterSetName` <a name="resetNcharCharacterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetNcharCharacterSetName"></a>

```typescript
public resetNcharCharacterSetName(): void
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetOptionGroupName` <a name="resetOptionGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetOptionGroupName"></a>

```typescript
public resetOptionGroupName(): void
```

##### `resetPerformanceInsightsKmsKeyId` <a name="resetPerformanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPerformanceInsightsKmsKeyId"></a>

```typescript
public resetPerformanceInsightsKmsKeyId(): void
```

##### `resetPerformanceInsightsRetentionPeriod` <a name="resetPerformanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPerformanceInsightsRetentionPeriod"></a>

```typescript
public resetPerformanceInsightsRetentionPeriod(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPreferredBackupWindow` <a name="resetPreferredBackupWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPreferredBackupWindow"></a>

```typescript
public resetPreferredBackupWindow(): void
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPreferredMaintenanceWindow"></a>

```typescript
public resetPreferredMaintenanceWindow(): void
```

##### `resetProcessorFeatures` <a name="resetProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetProcessorFeatures"></a>

```typescript
public resetProcessorFeatures(): void
```

##### `resetPromotionTier` <a name="resetPromotionTier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPromotionTier"></a>

```typescript
public resetPromotionTier(): void
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPubliclyAccessible"></a>

```typescript
public resetPubliclyAccessible(): void
```

##### `resetReplicaMode` <a name="resetReplicaMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetReplicaMode"></a>

```typescript
public resetReplicaMode(): void
```

##### `resetRestoreTime` <a name="resetRestoreTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetRestoreTime"></a>

```typescript
public resetRestoreTime(): void
```

##### `resetSourceDbClusterIdentifier` <a name="resetSourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbClusterIdentifier"></a>

```typescript
public resetSourceDbClusterIdentifier(): void
```

##### `resetSourceDbInstanceAutomatedBackupsArn` <a name="resetSourceDbInstanceAutomatedBackupsArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbInstanceAutomatedBackupsArn"></a>

```typescript
public resetSourceDbInstanceAutomatedBackupsArn(): void
```

##### `resetSourceDbInstanceIdentifier` <a name="resetSourceDbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbInstanceIdentifier"></a>

```typescript
public resetSourceDbInstanceIdentifier(): void
```

##### `resetSourceDbiResourceId` <a name="resetSourceDbiResourceId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbiResourceId"></a>

```typescript
public resetSourceDbiResourceId(): void
```

##### `resetSourceRegion` <a name="resetSourceRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceRegion"></a>

```typescript
public resetSourceRegion(): void
```

##### `resetStorageEncrypted` <a name="resetStorageEncrypted" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageEncrypted"></a>

```typescript
public resetStorageEncrypted(): void
```

##### `resetStorageThroughput` <a name="resetStorageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageThroughput"></a>

```typescript
public resetStorageThroughput(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageType"></a>

```typescript
public resetStorageType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTdeCredentialArn` <a name="resetTdeCredentialArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTdeCredentialArn"></a>

```typescript
public resetTdeCredentialArn(): void
```

##### `resetTdeCredentialPassword` <a name="resetTdeCredentialPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTdeCredentialPassword"></a>

```typescript
public resetTdeCredentialPassword(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

##### `resetUseDefaultProcessorFeatures` <a name="resetUseDefaultProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetUseDefaultProcessorFeatures"></a>

```typescript
public resetUseDefaultProcessorFeatures(): void
```

##### `resetUseLatestRestorableTime` <a name="resetUseLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetUseLatestRestorableTime"></a>

```typescript
public resetUseLatestRestorableTime(): void
```

##### `resetVpcSecurityGroups` <a name="resetVpcSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetVpcSecurityGroups"></a>

```typescript
public resetVpcSecurityGroups(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isConstruct"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

rdsDbInstance.RdsDbInstance.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformElement"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

rdsDbInstance.RdsDbInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformResource"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

rdsDbInstance.RdsDbInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

rdsDbInstance.RdsDbInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RdsDbInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsDbInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.additionalStorageVolumes">additionalStorageVolumes</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList">RdsDbInstanceAdditionalStorageVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.associatedRoles">associatedRoles</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList">RdsDbInstanceAssociatedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticRestartTime">automaticRestartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateDetails">certificateDetails</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference">RdsDbInstanceCertificateDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceArn">dbInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceStatus">dbInstanceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbiResourceId">dbiResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference">RdsDbInstanceEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.instanceCreateTime">instanceCreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.isStorageConfigUpgradeAvailable">isStorageConfigUpgradeAvailable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.latestRestorableTime">latestRestorableTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.listenerEndpoint">listenerEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference">RdsDbInstanceListenerEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserSecret">masterUserSecret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference">RdsDbInstanceMasterUserSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.percentProgress">percentProgress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.processorFeatures">processorFeatures</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList">RdsDbInstanceProcessorFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.readReplicaDbClusterIdentifiers">readReplicaDbClusterIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.readReplicaDbInstanceIdentifiers">readReplicaDbInstanceIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.resumeFullAutomationModeTime">resumeFullAutomationModeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.secondaryAvailabilityZone">secondaryAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.statusInfos">statusInfos</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList">RdsDbInstanceStatusInfosList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageOperationPercentProgress">storageOperationPercentProgress</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageOperationStatus">storageOperationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList">RdsDbInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.additionalStorageVolumesInput">additionalStorageVolumesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allocatedStorageInput">allocatedStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allowMajorVersionUpgradeInput">allowMajorVersionUpgradeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.associatedRolesInput">associatedRolesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationKmsKeyIdInput">automaticBackupReplicationKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRegionInput">automaticBackupReplicationRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRetentionPeriodInput">automaticBackupReplicationRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupRetentionPeriodInput">backupRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupTargetInput">backupTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.caCertificateIdentifierInput">caCertificateIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateRotationRestartInput">certificateRotationRestartInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.characterSetNameInput">characterSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.copyTagsToSnapshotInput">copyTagsToSnapshotInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.customIamInstanceProfileInput">customIamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.databaseInsightsModeInput">databaseInsightsModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterIdentifierInput">dbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterSnapshotIdentifierInput">dbClusterSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceClassInput">dbInstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceIdentifierInput">dbInstanceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbNameInput">dbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbParameterGroupNameInput">dbParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSecurityGroupsInput">dbSecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSnapshotIdentifierInput">dbSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSubnetGroupNameInput">dbSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dedicatedLogVolumeInput">dedicatedLogVolumeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deleteAutomatedBackupsInput">deleteAutomatedBackupsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainAuthSecretArnInput">domainAuthSecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainDnsIpsInput">domainDnsIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainFqdnInput">domainFqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainIamRoleNameInput">domainIamRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainOuInput">domainOuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableCloudwatchLogsExportsInput">enableCloudwatchLogsExportsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableIamDatabaseAuthenticationInput">enableIamDatabaseAuthenticationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enablePerformanceInsightsInput">enablePerformanceInsightsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineLifecycleSupportInput">engineLifecycleSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.licenseModelInput">licenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.manageMasterUserPasswordInput">manageMasterUserPasswordInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserAuthenticationTypeInput">masterUserAuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUsernameInput">masterUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserPasswordInput">masterUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserSecretInput">masterUserSecretInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.maxAllocatedStorageInput">maxAllocatedStorageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringIntervalInput">monitoringIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringRoleArnInput">monitoringRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.multiAzInput">multiAzInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.ncharCharacterSetNameInput">ncharCharacterSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.optionGroupNameInput">optionGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsKmsKeyIdInput">performanceInsightsKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsRetentionPeriodInput">performanceInsightsRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredBackupWindowInput">preferredBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.processorFeaturesInput">processorFeaturesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.promotionTierInput">promotionTierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.replicaModeInput">replicaModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.restoreTimeInput">restoreTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbClusterIdentifierInput">sourceDbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceAutomatedBackupsArnInput">sourceDbInstanceAutomatedBackupsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceIdentifierInput">sourceDbInstanceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbiResourceIdInput">sourceDbiResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceRegionInput">sourceRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageEncryptedInput">storageEncryptedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageThroughputInput">storageThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialArnInput">tdeCredentialArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialPasswordInput">tdeCredentialPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useDefaultProcessorFeaturesInput">useDefaultProcessorFeaturesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useLatestRestorableTimeInput">useLatestRestorableTimeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.vpcSecurityGroupsInput">vpcSecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allocatedStorage">allocatedStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.applyImmediately">applyImmediately</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationKmsKeyId">automaticBackupReplicationKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRegion">automaticBackupReplicationRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRetentionPeriod">automaticBackupReplicationRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupTarget">backupTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.caCertificateIdentifier">caCertificateIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateRotationRestart">certificateRotationRestart</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.characterSetName">characterSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.customIamInstanceProfile">customIamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.databaseInsightsMode">databaseInsightsMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterSnapshotIdentifier">dbClusterSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceClass">dbInstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbParameterGroupName">dbParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSecurityGroups">dbSecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSnapshotIdentifier">dbSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dedicatedLogVolume">dedicatedLogVolume</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deleteAutomatedBackups">deleteAutomatedBackups</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainAuthSecretArn">domainAuthSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainDnsIps">domainDnsIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainFqdn">domainFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainIamRoleName">domainIamRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainOu">domainOu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableCloudwatchLogsExports">enableCloudwatchLogsExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableIamDatabaseAuthentication">enableIamDatabaseAuthentication</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enablePerformanceInsights">enablePerformanceInsights</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineLifecycleSupport">engineLifecycleSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.manageMasterUserPassword">manageMasterUserPassword</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserAuthenticationType">masterUserAuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUsername">masterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserPassword">masterUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.maxAllocatedStorage">maxAllocatedStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringInterval">monitoringInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringRoleArn">monitoringRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.multiAz">multiAz</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.ncharCharacterSetName">ncharCharacterSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.optionGroupName">optionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsKmsKeyId">performanceInsightsKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsRetentionPeriod">performanceInsightsRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.promotionTier">promotionTier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.replicaMode">replicaMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.restoreTime">restoreTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbClusterIdentifier">sourceDbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceAutomatedBackupsArn">sourceDbInstanceAutomatedBackupsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceIdentifier">sourceDbInstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbiResourceId">sourceDbiResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceRegion">sourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageEncrypted">storageEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageThroughput">storageThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialArn">tdeCredentialArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialPassword">tdeCredentialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useDefaultProcessorFeatures">useDefaultProcessorFeatures</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.vpcSecurityGroups">vpcSecurityGroups</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `additionalStorageVolumes`<sup>Required</sup> <a name="additionalStorageVolumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.additionalStorageVolumes"></a>

```typescript
public readonly additionalStorageVolumes: RdsDbInstanceAdditionalStorageVolumesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList">RdsDbInstanceAdditionalStorageVolumesList</a>

---

##### `associatedRoles`<sup>Required</sup> <a name="associatedRoles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.associatedRoles"></a>

```typescript
public readonly associatedRoles: RdsDbInstanceAssociatedRolesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList">RdsDbInstanceAssociatedRolesList</a>

---

##### `automaticRestartTime`<sup>Required</sup> <a name="automaticRestartTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticRestartTime"></a>

```typescript
public readonly automaticRestartTime: string;
```

- *Type:* string

---

##### `certificateDetails`<sup>Required</sup> <a name="certificateDetails" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateDetails"></a>

```typescript
public readonly certificateDetails: RdsDbInstanceCertificateDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference">RdsDbInstanceCertificateDetailsOutputReference</a>

---

##### `dbInstanceArn`<sup>Required</sup> <a name="dbInstanceArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceArn"></a>

```typescript
public readonly dbInstanceArn: string;
```

- *Type:* string

---

##### `dbInstanceStatus`<sup>Required</sup> <a name="dbInstanceStatus" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceStatus"></a>

```typescript
public readonly dbInstanceStatus: string;
```

- *Type:* string

---

##### `dbiResourceId`<sup>Required</sup> <a name="dbiResourceId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbiResourceId"></a>

```typescript
public readonly dbiResourceId: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.endpoint"></a>

```typescript
public readonly endpoint: RdsDbInstanceEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference">RdsDbInstanceEndpointOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceCreateTime`<sup>Required</sup> <a name="instanceCreateTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.instanceCreateTime"></a>

```typescript
public readonly instanceCreateTime: string;
```

- *Type:* string

---

##### `isStorageConfigUpgradeAvailable`<sup>Required</sup> <a name="isStorageConfigUpgradeAvailable" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.isStorageConfigUpgradeAvailable"></a>

```typescript
public readonly isStorageConfigUpgradeAvailable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `latestRestorableTime`<sup>Required</sup> <a name="latestRestorableTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.latestRestorableTime"></a>

```typescript
public readonly latestRestorableTime: string;
```

- *Type:* string

---

##### `listenerEndpoint`<sup>Required</sup> <a name="listenerEndpoint" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.listenerEndpoint"></a>

```typescript
public readonly listenerEndpoint: RdsDbInstanceListenerEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference">RdsDbInstanceListenerEndpointOutputReference</a>

---

##### `masterUserSecret`<sup>Required</sup> <a name="masterUserSecret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserSecret"></a>

```typescript
public readonly masterUserSecret: RdsDbInstanceMasterUserSecretOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference">RdsDbInstanceMasterUserSecretOutputReference</a>

---

##### `percentProgress`<sup>Required</sup> <a name="percentProgress" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.percentProgress"></a>

```typescript
public readonly percentProgress: string;
```

- *Type:* string

---

##### `processorFeatures`<sup>Required</sup> <a name="processorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.processorFeatures"></a>

```typescript
public readonly processorFeatures: RdsDbInstanceProcessorFeaturesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList">RdsDbInstanceProcessorFeaturesList</a>

---

##### `readReplicaDbClusterIdentifiers`<sup>Required</sup> <a name="readReplicaDbClusterIdentifiers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.readReplicaDbClusterIdentifiers"></a>

```typescript
public readonly readReplicaDbClusterIdentifiers: string[];
```

- *Type:* string[]

---

##### `readReplicaDbInstanceIdentifiers`<sup>Required</sup> <a name="readReplicaDbInstanceIdentifiers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.readReplicaDbInstanceIdentifiers"></a>

```typescript
public readonly readReplicaDbInstanceIdentifiers: string[];
```

- *Type:* string[]

---

##### `resumeFullAutomationModeTime`<sup>Required</sup> <a name="resumeFullAutomationModeTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.resumeFullAutomationModeTime"></a>

```typescript
public readonly resumeFullAutomationModeTime: string;
```

- *Type:* string

---

##### `secondaryAvailabilityZone`<sup>Required</sup> <a name="secondaryAvailabilityZone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.secondaryAvailabilityZone"></a>

```typescript
public readonly secondaryAvailabilityZone: string;
```

- *Type:* string

---

##### `statusInfos`<sup>Required</sup> <a name="statusInfos" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.statusInfos"></a>

```typescript
public readonly statusInfos: RdsDbInstanceStatusInfosList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList">RdsDbInstanceStatusInfosList</a>

---

##### `storageOperationPercentProgress`<sup>Required</sup> <a name="storageOperationPercentProgress" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageOperationPercentProgress"></a>

```typescript
public readonly storageOperationPercentProgress: number;
```

- *Type:* number

---

##### `storageOperationStatus`<sup>Required</sup> <a name="storageOperationStatus" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageOperationStatus"></a>

```typescript
public readonly storageOperationStatus: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tags"></a>

```typescript
public readonly tags: RdsDbInstanceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList">RdsDbInstanceTagsList</a>

---

##### `additionalStorageVolumesInput`<sup>Optional</sup> <a name="additionalStorageVolumesInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.additionalStorageVolumesInput"></a>

```typescript
public readonly additionalStorageVolumesInput: IResolvable | RdsDbInstanceAdditionalStorageVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>[]

---

##### `allocatedStorageInput`<sup>Optional</sup> <a name="allocatedStorageInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allocatedStorageInput"></a>

```typescript
public readonly allocatedStorageInput: string;
```

- *Type:* string

---

##### `allowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="allowMajorVersionUpgradeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allowMajorVersionUpgradeInput"></a>

```typescript
public readonly allowMajorVersionUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.applyImmediatelyInput"></a>

```typescript
public readonly applyImmediatelyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `associatedRolesInput`<sup>Optional</sup> <a name="associatedRolesInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.associatedRolesInput"></a>

```typescript
public readonly associatedRolesInput: IResolvable | RdsDbInstanceAssociatedRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>[]

---

##### `automaticBackupReplicationKmsKeyIdInput`<sup>Optional</sup> <a name="automaticBackupReplicationKmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationKmsKeyIdInput"></a>

```typescript
public readonly automaticBackupReplicationKmsKeyIdInput: string;
```

- *Type:* string

---

##### `automaticBackupReplicationRegionInput`<sup>Optional</sup> <a name="automaticBackupReplicationRegionInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRegionInput"></a>

```typescript
public readonly automaticBackupReplicationRegionInput: string;
```

- *Type:* string

---

##### `automaticBackupReplicationRetentionPeriodInput`<sup>Optional</sup> <a name="automaticBackupReplicationRetentionPeriodInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRetentionPeriodInput"></a>

```typescript
public readonly automaticBackupReplicationRetentionPeriodInput: number;
```

- *Type:* number

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.autoMinorVersionUpgradeInput"></a>

```typescript
public readonly autoMinorVersionUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `backupRetentionPeriodInput`<sup>Optional</sup> <a name="backupRetentionPeriodInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupRetentionPeriodInput"></a>

```typescript
public readonly backupRetentionPeriodInput: number;
```

- *Type:* number

---

##### `backupTargetInput`<sup>Optional</sup> <a name="backupTargetInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupTargetInput"></a>

```typescript
public readonly backupTargetInput: string;
```

- *Type:* string

---

##### `caCertificateIdentifierInput`<sup>Optional</sup> <a name="caCertificateIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.caCertificateIdentifierInput"></a>

```typescript
public readonly caCertificateIdentifierInput: string;
```

- *Type:* string

---

##### `certificateRotationRestartInput`<sup>Optional</sup> <a name="certificateRotationRestartInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateRotationRestartInput"></a>

```typescript
public readonly certificateRotationRestartInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `characterSetNameInput`<sup>Optional</sup> <a name="characterSetNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.characterSetNameInput"></a>

```typescript
public readonly characterSetNameInput: string;
```

- *Type:* string

---

##### `copyTagsToSnapshotInput`<sup>Optional</sup> <a name="copyTagsToSnapshotInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.copyTagsToSnapshotInput"></a>

```typescript
public readonly copyTagsToSnapshotInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `customIamInstanceProfileInput`<sup>Optional</sup> <a name="customIamInstanceProfileInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.customIamInstanceProfileInput"></a>

```typescript
public readonly customIamInstanceProfileInput: string;
```

- *Type:* string

---

##### `databaseInsightsModeInput`<sup>Optional</sup> <a name="databaseInsightsModeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.databaseInsightsModeInput"></a>

```typescript
public readonly databaseInsightsModeInput: string;
```

- *Type:* string

---

##### `dbClusterIdentifierInput`<sup>Optional</sup> <a name="dbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterIdentifierInput"></a>

```typescript
public readonly dbClusterIdentifierInput: string;
```

- *Type:* string

---

##### `dbClusterSnapshotIdentifierInput`<sup>Optional</sup> <a name="dbClusterSnapshotIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterSnapshotIdentifierInput"></a>

```typescript
public readonly dbClusterSnapshotIdentifierInput: string;
```

- *Type:* string

---

##### `dbInstanceClassInput`<sup>Optional</sup> <a name="dbInstanceClassInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceClassInput"></a>

```typescript
public readonly dbInstanceClassInput: string;
```

- *Type:* string

---

##### `dbInstanceIdentifierInput`<sup>Optional</sup> <a name="dbInstanceIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceIdentifierInput"></a>

```typescript
public readonly dbInstanceIdentifierInput: string;
```

- *Type:* string

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbNameInput"></a>

```typescript
public readonly dbNameInput: string;
```

- *Type:* string

---

##### `dbParameterGroupNameInput`<sup>Optional</sup> <a name="dbParameterGroupNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbParameterGroupNameInput"></a>

```typescript
public readonly dbParameterGroupNameInput: string;
```

- *Type:* string

---

##### `dbSecurityGroupsInput`<sup>Optional</sup> <a name="dbSecurityGroupsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSecurityGroupsInput"></a>

```typescript
public readonly dbSecurityGroupsInput: string[];
```

- *Type:* string[]

---

##### `dbSnapshotIdentifierInput`<sup>Optional</sup> <a name="dbSnapshotIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSnapshotIdentifierInput"></a>

```typescript
public readonly dbSnapshotIdentifierInput: string;
```

- *Type:* string

---

##### `dbSubnetGroupNameInput`<sup>Optional</sup> <a name="dbSubnetGroupNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSubnetGroupNameInput"></a>

```typescript
public readonly dbSubnetGroupNameInput: string;
```

- *Type:* string

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSystemIdInput"></a>

```typescript
public readonly dbSystemIdInput: string;
```

- *Type:* string

---

##### `dedicatedLogVolumeInput`<sup>Optional</sup> <a name="dedicatedLogVolumeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dedicatedLogVolumeInput"></a>

```typescript
public readonly dedicatedLogVolumeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deleteAutomatedBackupsInput`<sup>Optional</sup> <a name="deleteAutomatedBackupsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deleteAutomatedBackupsInput"></a>

```typescript
public readonly deleteAutomatedBackupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `domainAuthSecretArnInput`<sup>Optional</sup> <a name="domainAuthSecretArnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainAuthSecretArnInput"></a>

```typescript
public readonly domainAuthSecretArnInput: string;
```

- *Type:* string

---

##### `domainDnsIpsInput`<sup>Optional</sup> <a name="domainDnsIpsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainDnsIpsInput"></a>

```typescript
public readonly domainDnsIpsInput: string[];
```

- *Type:* string[]

---

##### `domainFqdnInput`<sup>Optional</sup> <a name="domainFqdnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainFqdnInput"></a>

```typescript
public readonly domainFqdnInput: string;
```

- *Type:* string

---

##### `domainIamRoleNameInput`<sup>Optional</sup> <a name="domainIamRoleNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainIamRoleNameInput"></a>

```typescript
public readonly domainIamRoleNameInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domainOuInput`<sup>Optional</sup> <a name="domainOuInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainOuInput"></a>

```typescript
public readonly domainOuInput: string;
```

- *Type:* string

---

##### `enableCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="enableCloudwatchLogsExportsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableCloudwatchLogsExportsInput"></a>

```typescript
public readonly enableCloudwatchLogsExportsInput: string[];
```

- *Type:* string[]

---

##### `enableIamDatabaseAuthenticationInput`<sup>Optional</sup> <a name="enableIamDatabaseAuthenticationInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableIamDatabaseAuthenticationInput"></a>

```typescript
public readonly enableIamDatabaseAuthenticationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePerformanceInsightsInput`<sup>Optional</sup> <a name="enablePerformanceInsightsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enablePerformanceInsightsInput"></a>

```typescript
public readonly enablePerformanceInsightsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `engineLifecycleSupportInput`<sup>Optional</sup> <a name="engineLifecycleSupportInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineLifecycleSupportInput"></a>

```typescript
public readonly engineLifecycleSupportInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.licenseModelInput"></a>

```typescript
public readonly licenseModelInput: string;
```

- *Type:* string

---

##### `manageMasterUserPasswordInput`<sup>Optional</sup> <a name="manageMasterUserPasswordInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.manageMasterUserPasswordInput"></a>

```typescript
public readonly manageMasterUserPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `masterUserAuthenticationTypeInput`<sup>Optional</sup> <a name="masterUserAuthenticationTypeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserAuthenticationTypeInput"></a>

```typescript
public readonly masterUserAuthenticationTypeInput: string;
```

- *Type:* string

---

##### `masterUsernameInput`<sup>Optional</sup> <a name="masterUsernameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUsernameInput"></a>

```typescript
public readonly masterUsernameInput: string;
```

- *Type:* string

---

##### `masterUserPasswordInput`<sup>Optional</sup> <a name="masterUserPasswordInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserPasswordInput"></a>

```typescript
public readonly masterUserPasswordInput: string;
```

- *Type:* string

---

##### `masterUserSecretInput`<sup>Optional</sup> <a name="masterUserSecretInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserSecretInput"></a>

```typescript
public readonly masterUserSecretInput: IResolvable | RdsDbInstanceMasterUserSecret;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a>

---

##### `maxAllocatedStorageInput`<sup>Optional</sup> <a name="maxAllocatedStorageInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.maxAllocatedStorageInput"></a>

```typescript
public readonly maxAllocatedStorageInput: number;
```

- *Type:* number

---

##### `monitoringIntervalInput`<sup>Optional</sup> <a name="monitoringIntervalInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringIntervalInput"></a>

```typescript
public readonly monitoringIntervalInput: number;
```

- *Type:* number

---

##### `monitoringRoleArnInput`<sup>Optional</sup> <a name="monitoringRoleArnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringRoleArnInput"></a>

```typescript
public readonly monitoringRoleArnInput: string;
```

- *Type:* string

---

##### `multiAzInput`<sup>Optional</sup> <a name="multiAzInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.multiAzInput"></a>

```typescript
public readonly multiAzInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ncharCharacterSetNameInput`<sup>Optional</sup> <a name="ncharCharacterSetNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.ncharCharacterSetNameInput"></a>

```typescript
public readonly ncharCharacterSetNameInput: string;
```

- *Type:* string

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `optionGroupNameInput`<sup>Optional</sup> <a name="optionGroupNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.optionGroupNameInput"></a>

```typescript
public readonly optionGroupNameInput: string;
```

- *Type:* string

---

##### `performanceInsightsKmsKeyIdInput`<sup>Optional</sup> <a name="performanceInsightsKmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsKmsKeyIdInput"></a>

```typescript
public readonly performanceInsightsKmsKeyIdInput: string;
```

- *Type:* string

---

##### `performanceInsightsRetentionPeriodInput`<sup>Optional</sup> <a name="performanceInsightsRetentionPeriodInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsRetentionPeriodInput"></a>

```typescript
public readonly performanceInsightsRetentionPeriodInput: number;
```

- *Type:* number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `preferredBackupWindowInput`<sup>Optional</sup> <a name="preferredBackupWindowInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredBackupWindowInput"></a>

```typescript
public readonly preferredBackupWindowInput: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredMaintenanceWindowInput"></a>

```typescript
public readonly preferredMaintenanceWindowInput: string;
```

- *Type:* string

---

##### `processorFeaturesInput`<sup>Optional</sup> <a name="processorFeaturesInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.processorFeaturesInput"></a>

```typescript
public readonly processorFeaturesInput: IResolvable | RdsDbInstanceProcessorFeatures[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>[]

---

##### `promotionTierInput`<sup>Optional</sup> <a name="promotionTierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.promotionTierInput"></a>

```typescript
public readonly promotionTierInput: number;
```

- *Type:* number

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.publiclyAccessibleInput"></a>

```typescript
public readonly publiclyAccessibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `replicaModeInput`<sup>Optional</sup> <a name="replicaModeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.replicaModeInput"></a>

```typescript
public readonly replicaModeInput: string;
```

- *Type:* string

---

##### `restoreTimeInput`<sup>Optional</sup> <a name="restoreTimeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.restoreTimeInput"></a>

```typescript
public readonly restoreTimeInput: string;
```

- *Type:* string

---

##### `sourceDbClusterIdentifierInput`<sup>Optional</sup> <a name="sourceDbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbClusterIdentifierInput"></a>

```typescript
public readonly sourceDbClusterIdentifierInput: string;
```

- *Type:* string

---

##### `sourceDbInstanceAutomatedBackupsArnInput`<sup>Optional</sup> <a name="sourceDbInstanceAutomatedBackupsArnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceAutomatedBackupsArnInput"></a>

```typescript
public readonly sourceDbInstanceAutomatedBackupsArnInput: string;
```

- *Type:* string

---

##### `sourceDbInstanceIdentifierInput`<sup>Optional</sup> <a name="sourceDbInstanceIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceIdentifierInput"></a>

```typescript
public readonly sourceDbInstanceIdentifierInput: string;
```

- *Type:* string

---

##### `sourceDbiResourceIdInput`<sup>Optional</sup> <a name="sourceDbiResourceIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbiResourceIdInput"></a>

```typescript
public readonly sourceDbiResourceIdInput: string;
```

- *Type:* string

---

##### `sourceRegionInput`<sup>Optional</sup> <a name="sourceRegionInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceRegionInput"></a>

```typescript
public readonly sourceRegionInput: string;
```

- *Type:* string

---

##### `storageEncryptedInput`<sup>Optional</sup> <a name="storageEncryptedInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageEncryptedInput"></a>

```typescript
public readonly storageEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `storageThroughputInput`<sup>Optional</sup> <a name="storageThroughputInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageThroughputInput"></a>

```typescript
public readonly storageThroughputInput: number;
```

- *Type:* number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RdsDbInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>[]

---

##### `tdeCredentialArnInput`<sup>Optional</sup> <a name="tdeCredentialArnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialArnInput"></a>

```typescript
public readonly tdeCredentialArnInput: string;
```

- *Type:* string

---

##### `tdeCredentialPasswordInput`<sup>Optional</sup> <a name="tdeCredentialPasswordInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialPasswordInput"></a>

```typescript
public readonly tdeCredentialPasswordInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `useDefaultProcessorFeaturesInput`<sup>Optional</sup> <a name="useDefaultProcessorFeaturesInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useDefaultProcessorFeaturesInput"></a>

```typescript
public readonly useDefaultProcessorFeaturesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useLatestRestorableTimeInput`<sup>Optional</sup> <a name="useLatestRestorableTimeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useLatestRestorableTimeInput"></a>

```typescript
public readonly useLatestRestorableTimeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vpcSecurityGroupsInput`<sup>Optional</sup> <a name="vpcSecurityGroupsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.vpcSecurityGroupsInput"></a>

```typescript
public readonly vpcSecurityGroupsInput: string[];
```

- *Type:* string[]

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: string;
```

- *Type:* string

---

##### `allowMajorVersionUpgrade`<sup>Required</sup> <a name="allowMajorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allowMajorVersionUpgrade"></a>

```typescript
public readonly allowMajorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `automaticBackupReplicationKmsKeyId`<sup>Required</sup> <a name="automaticBackupReplicationKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationKmsKeyId"></a>

```typescript
public readonly automaticBackupReplicationKmsKeyId: string;
```

- *Type:* string

---

##### `automaticBackupReplicationRegion`<sup>Required</sup> <a name="automaticBackupReplicationRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRegion"></a>

```typescript
public readonly automaticBackupReplicationRegion: string;
```

- *Type:* string

---

##### `automaticBackupReplicationRetentionPeriod`<sup>Required</sup> <a name="automaticBackupReplicationRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRetentionPeriod"></a>

```typescript
public readonly automaticBackupReplicationRetentionPeriod: number;
```

- *Type:* number

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="backupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupRetentionPeriod"></a>

```typescript
public readonly backupRetentionPeriod: number;
```

- *Type:* number

---

##### `backupTarget`<sup>Required</sup> <a name="backupTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupTarget"></a>

```typescript
public readonly backupTarget: string;
```

- *Type:* string

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="caCertificateIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.caCertificateIdentifier"></a>

```typescript
public readonly caCertificateIdentifier: string;
```

- *Type:* string

---

##### `certificateRotationRestart`<sup>Required</sup> <a name="certificateRotationRestart" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateRotationRestart"></a>

```typescript
public readonly certificateRotationRestart: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `characterSetName`<sup>Required</sup> <a name="characterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.characterSetName"></a>

```typescript
public readonly characterSetName: string;
```

- *Type:* string

---

##### `copyTagsToSnapshot`<sup>Required</sup> <a name="copyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.copyTagsToSnapshot"></a>

```typescript
public readonly copyTagsToSnapshot: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `customIamInstanceProfile`<sup>Required</sup> <a name="customIamInstanceProfile" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.customIamInstanceProfile"></a>

```typescript
public readonly customIamInstanceProfile: string;
```

- *Type:* string

---

##### `databaseInsightsMode`<sup>Required</sup> <a name="databaseInsightsMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.databaseInsightsMode"></a>

```typescript
public readonly databaseInsightsMode: string;
```

- *Type:* string

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterIdentifier"></a>

```typescript
public readonly dbClusterIdentifier: string;
```

- *Type:* string

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="dbClusterSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterSnapshotIdentifier"></a>

```typescript
public readonly dbClusterSnapshotIdentifier: string;
```

- *Type:* string

---

##### `dbInstanceClass`<sup>Required</sup> <a name="dbInstanceClass" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceClass"></a>

```typescript
public readonly dbInstanceClass: string;
```

- *Type:* string

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `dbParameterGroupName`<sup>Required</sup> <a name="dbParameterGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbParameterGroupName"></a>

```typescript
public readonly dbParameterGroupName: string;
```

- *Type:* string

---

##### `dbSecurityGroups`<sup>Required</sup> <a name="dbSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSecurityGroups"></a>

```typescript
public readonly dbSecurityGroups: string[];
```

- *Type:* string[]

---

##### `dbSnapshotIdentifier`<sup>Required</sup> <a name="dbSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSnapshotIdentifier"></a>

```typescript
public readonly dbSnapshotIdentifier: string;
```

- *Type:* string

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="dbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSubnetGroupName"></a>

```typescript
public readonly dbSubnetGroupName: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `dedicatedLogVolume`<sup>Required</sup> <a name="dedicatedLogVolume" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dedicatedLogVolume"></a>

```typescript
public readonly dedicatedLogVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deleteAutomatedBackups`<sup>Required</sup> <a name="deleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deleteAutomatedBackups"></a>

```typescript
public readonly deleteAutomatedBackups: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `domainAuthSecretArn`<sup>Required</sup> <a name="domainAuthSecretArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainAuthSecretArn"></a>

```typescript
public readonly domainAuthSecretArn: string;
```

- *Type:* string

---

##### `domainDnsIps`<sup>Required</sup> <a name="domainDnsIps" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainDnsIps"></a>

```typescript
public readonly domainDnsIps: string[];
```

- *Type:* string[]

---

##### `domainFqdn`<sup>Required</sup> <a name="domainFqdn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainFqdn"></a>

```typescript
public readonly domainFqdn: string;
```

- *Type:* string

---

##### `domainIamRoleName`<sup>Required</sup> <a name="domainIamRoleName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainIamRoleName"></a>

```typescript
public readonly domainIamRoleName: string;
```

- *Type:* string

---

##### `domainOu`<sup>Required</sup> <a name="domainOu" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainOu"></a>

```typescript
public readonly domainOu: string;
```

- *Type:* string

---

##### `enableCloudwatchLogsExports`<sup>Required</sup> <a name="enableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableCloudwatchLogsExports"></a>

```typescript
public readonly enableCloudwatchLogsExports: string[];
```

- *Type:* string[]

---

##### `enableIamDatabaseAuthentication`<sup>Required</sup> <a name="enableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableIamDatabaseAuthentication"></a>

```typescript
public readonly enableIamDatabaseAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePerformanceInsights`<sup>Required</sup> <a name="enablePerformanceInsights" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enablePerformanceInsights"></a>

```typescript
public readonly enablePerformanceInsights: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineLifecycleSupport`<sup>Required</sup> <a name="engineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineLifecycleSupport"></a>

```typescript
public readonly engineLifecycleSupport: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `manageMasterUserPassword`<sup>Required</sup> <a name="manageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.manageMasterUserPassword"></a>

```typescript
public readonly manageMasterUserPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `masterUserAuthenticationType`<sup>Required</sup> <a name="masterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserAuthenticationType"></a>

```typescript
public readonly masterUserAuthenticationType: string;
```

- *Type:* string

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUsername"></a>

```typescript
public readonly masterUsername: string;
```

- *Type:* string

---

##### `masterUserPassword`<sup>Required</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserPassword"></a>

```typescript
public readonly masterUserPassword: string;
```

- *Type:* string

---

##### `maxAllocatedStorage`<sup>Required</sup> <a name="maxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.maxAllocatedStorage"></a>

```typescript
public readonly maxAllocatedStorage: number;
```

- *Type:* number

---

##### `monitoringInterval`<sup>Required</sup> <a name="monitoringInterval" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringInterval"></a>

```typescript
public readonly monitoringInterval: number;
```

- *Type:* number

---

##### `monitoringRoleArn`<sup>Required</sup> <a name="monitoringRoleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringRoleArn"></a>

```typescript
public readonly monitoringRoleArn: string;
```

- *Type:* string

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.multiAz"></a>

```typescript
public readonly multiAz: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ncharCharacterSetName`<sup>Required</sup> <a name="ncharCharacterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.ncharCharacterSetName"></a>

```typescript
public readonly ncharCharacterSetName: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `optionGroupName`<sup>Required</sup> <a name="optionGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.optionGroupName"></a>

```typescript
public readonly optionGroupName: string;
```

- *Type:* string

---

##### `performanceInsightsKmsKeyId`<sup>Required</sup> <a name="performanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsKmsKeyId"></a>

```typescript
public readonly performanceInsightsKmsKeyId: string;
```

- *Type:* string

---

##### `performanceInsightsRetentionPeriod`<sup>Required</sup> <a name="performanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsRetentionPeriod"></a>

```typescript
public readonly performanceInsightsRetentionPeriod: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredBackupWindow"></a>

```typescript
public readonly preferredBackupWindow: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `promotionTier`<sup>Required</sup> <a name="promotionTier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.promotionTier"></a>

```typescript
public readonly promotionTier: number;
```

- *Type:* number

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `replicaMode`<sup>Required</sup> <a name="replicaMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.replicaMode"></a>

```typescript
public readonly replicaMode: string;
```

- *Type:* string

---

##### `restoreTime`<sup>Required</sup> <a name="restoreTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.restoreTime"></a>

```typescript
public readonly restoreTime: string;
```

- *Type:* string

---

##### `sourceDbClusterIdentifier`<sup>Required</sup> <a name="sourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbClusterIdentifier"></a>

```typescript
public readonly sourceDbClusterIdentifier: string;
```

- *Type:* string

---

##### `sourceDbInstanceAutomatedBackupsArn`<sup>Required</sup> <a name="sourceDbInstanceAutomatedBackupsArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceAutomatedBackupsArn"></a>

```typescript
public readonly sourceDbInstanceAutomatedBackupsArn: string;
```

- *Type:* string

---

##### `sourceDbInstanceIdentifier`<sup>Required</sup> <a name="sourceDbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceIdentifier"></a>

```typescript
public readonly sourceDbInstanceIdentifier: string;
```

- *Type:* string

---

##### `sourceDbiResourceId`<sup>Required</sup> <a name="sourceDbiResourceId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbiResourceId"></a>

```typescript
public readonly sourceDbiResourceId: string;
```

- *Type:* string

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceRegion"></a>

```typescript
public readonly sourceRegion: string;
```

- *Type:* string

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `storageThroughput`<sup>Required</sup> <a name="storageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageThroughput"></a>

```typescript
public readonly storageThroughput: number;
```

- *Type:* number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `tdeCredentialArn`<sup>Required</sup> <a name="tdeCredentialArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialArn"></a>

```typescript
public readonly tdeCredentialArn: string;
```

- *Type:* string

---

##### `tdeCredentialPassword`<sup>Required</sup> <a name="tdeCredentialPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialPassword"></a>

```typescript
public readonly tdeCredentialPassword: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `useDefaultProcessorFeatures`<sup>Required</sup> <a name="useDefaultProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useDefaultProcessorFeatures"></a>

```typescript
public readonly useDefaultProcessorFeatures: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useLatestRestorableTime`<sup>Required</sup> <a name="useLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useLatestRestorableTime"></a>

```typescript
public readonly useLatestRestorableTime: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="vpcSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.vpcSecurityGroups"></a>

```typescript
public readonly vpcSecurityGroups: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbInstanceAdditionalStorageVolumes <a name="RdsDbInstanceAdditionalStorageVolumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

const rdsDbInstanceAdditionalStorageVolumes: rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.allocatedStorage">allocatedStorage</a></code> | <code>string</code> | The amount of storage allocated for the additional storage volume, in gibibytes (GiB). |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.iops">iops</a></code> | <code>number</code> | The number of I/O operations per second (IOPS) provisioned for the additional storage volume. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.maxAllocatedStorage">maxAllocatedStorage</a></code> | <code>number</code> | The upper limit in gibibytes (GiB) to which RDS can automatically scale the storage of the additional storage volume. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageOperationPercentProgress">storageOperationPercentProgress</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_operation_percent_progress RdsDbInstance#storage_operation_percent_progress}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageOperationStatus">storageOperationStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_operation_status RdsDbInstance#storage_operation_status}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageThroughput">storageThroughput</a></code> | <code>number</code> | The storage throughput value for the additional storage volume, in mebibytes per second (MiBps). |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageType">storageType</a></code> | <code>string</code> | The storage type for the additional storage volume.  Valid Values: ``GP3 \| IO2``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.volumeName">volumeName</a></code> | <code>string</code> | The name of the additional storage volume.  Valid Values: ``RDSDBDATA2 \| RDSDBDATA3 \| RDSDBDATA4``. |

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: string;
```

- *Type:* string

The amount of storage allocated for the additional storage volume, in gibibytes (GiB).

The minimum is 20 GiB. The maximum is 65,536 GiB (64 TiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#allocated_storage RdsDbInstance#allocated_storage}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

The number of I/O operations per second (IOPS) provisioned for the additional storage volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#iops RdsDbInstance#iops}

---

##### `maxAllocatedStorage`<sup>Optional</sup> <a name="maxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.maxAllocatedStorage"></a>

```typescript
public readonly maxAllocatedStorage: number;
```

- *Type:* number

The upper limit in gibibytes (GiB) to which RDS can automatically scale the storage of the additional storage volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#max_allocated_storage RdsDbInstance#max_allocated_storage}

---

##### `storageOperationPercentProgress`<sup>Optional</sup> <a name="storageOperationPercentProgress" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageOperationPercentProgress"></a>

```typescript
public readonly storageOperationPercentProgress: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_operation_percent_progress RdsDbInstance#storage_operation_percent_progress}.

---

##### `storageOperationStatus`<sup>Optional</sup> <a name="storageOperationStatus" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageOperationStatus"></a>

```typescript
public readonly storageOperationStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_operation_status RdsDbInstance#storage_operation_status}.

---

##### `storageThroughput`<sup>Optional</sup> <a name="storageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageThroughput"></a>

```typescript
public readonly storageThroughput: number;
```

- *Type:* number

The storage throughput value for the additional storage volume, in mebibytes per second (MiBps).

This setting applies only to the General Purpose SSD (``gp3``) storage type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_throughput RdsDbInstance#storage_throughput}

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

The storage type for the additional storage volume.  Valid Values: ``GP3 | IO2``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_type RdsDbInstance#storage_type}

---

##### `volumeName`<sup>Optional</sup> <a name="volumeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

The name of the additional storage volume.  Valid Values: ``RDSDBDATA2 | RDSDBDATA3 | RDSDBDATA4``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#volume_name RdsDbInstance#volume_name}

---

### RdsDbInstanceAssociatedRoles <a name="RdsDbInstanceAssociatedRoles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

const rdsDbInstanceAssociatedRoles: rdsDbInstance.RdsDbInstanceAssociatedRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.property.featureName">featureName</a></code> | <code>string</code> | The name of the feature associated with the AWS Identity and Access Management (IAM) role. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance. |

---

##### `featureName`<sup>Optional</sup> <a name="featureName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

The name of the feature associated with the AWS Identity and Access Management (IAM) role.

IAM roles that are associated with a DB instance grant permission for the DB instance to access other AWS services on your behalf. For the list of supported feature names, see the ``SupportedFeatureNames`` description in [DBEngineVersion](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html) in the *Amazon RDS API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#feature_name RdsDbInstance#feature_name}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#role_arn RdsDbInstance#role_arn}

---

### RdsDbInstanceCertificateDetails <a name="RdsDbInstanceCertificateDetails" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetails.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

const rdsDbInstanceCertificateDetails: rdsDbInstance.RdsDbInstanceCertificateDetails = { ... }
```


### RdsDbInstanceConfig <a name="RdsDbInstanceConfig" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

const rdsDbInstanceConfig: rdsDbInstance.RdsDbInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.additionalStorageVolumes">additionalStorageVolumes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>[]</code> | The additional storage volumes associated with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.allocatedStorage">allocatedStorage</a></code> | <code>string</code> | The amount of storage in gibibytes (GiB) to be initially allocated for the database instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that indicates whether major version upgrades are allowed. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.applyImmediately">applyImmediately</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether changes to the DB instance and any pending modifications are applied immediately, regardless of the ``PreferredMaintenanceWindow`` setting. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.associatedRoles">associatedRoles</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>[]</code> | The IAMlong (IAM) roles associated with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationKmsKeyId">automaticBackupReplicationKmsKeyId</a></code> | <code>string</code> | The AWS KMS key identifier for encryption of the replicated automated backups. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationRegion">automaticBackupReplicationRegion</a></code> | <code>string</code> | The AWS-Region associated with the automated backup. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationRetentionPeriod">automaticBackupReplicationRetentionPeriod</a></code> | <code>number</code> | The retention period for automated backups in a different AWS Region. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The Availability Zone (AZ) where the database will be created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>number</code> | The number of days for which automated backups are retained. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.backupTarget">backupTarget</a></code> | <code>string</code> | The location for storing automated backups and manual snapshots. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.caCertificateIdentifier">caCertificateIdentifier</a></code> | <code>string</code> | The identifier of the CA certificate for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.certificateRotationRestart">certificateRotationRestart</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.characterSetName">characterSetName</a></code> | <code>string</code> | For supported engines, indicates that the DB instance should be associated with the specified character set. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to copy tags from the DB instance to snapshots of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.customIamInstanceProfile">customIamInstanceProfile</a></code> | <code>string</code> | The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.databaseInsightsMode">databaseInsightsMode</a></code> | <code>string</code> | The mode of Database Insights to enable for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>string</code> | The identifier of the DB cluster that this DB instance will belong to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbClusterSnapshotIdentifier">dbClusterSnapshotIdentifier</a></code> | <code>string</code> | The identifier for the Multi-AZ DB cluster snapshot to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbInstanceClass">dbInstanceClass</a></code> | <code>string</code> | The compute and memory capacity of the DB instance, for example ``db.m5.large``. Not all DB instance classes are available in all AWS-Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide*. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | A name for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbName">dbName</a></code> | <code>string</code> | The meaning of this parameter differs according to the database engine you use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbParameterGroupName">dbParameterGroupName</a></code> | <code>string</code> | The name of an existing DB parameter group or a reference to an [AWS::RDS::DBParameterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.  To list all of the available DB parameter group names, use the following command:   ``aws rds describe-db-parameter-groups --query "DBParameterGroups[].DBParameterGroupName" --output text``    If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.   If you don't specify a value for ``DBParameterGroupName`` property, the default DB parameter group for the specified engine and engine version is used. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSecurityGroups">dbSecurityGroups</a></code> | <code>string[]</code> | A list of the DB security groups to assign to the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSnapshotIdentifier">dbSnapshotIdentifier</a></code> | <code>string</code> | The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>string</code> | A DB subnet group to associate with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dedicatedLogVolume">dedicatedLogVolume</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the DB instance has a dedicated log volume (DLV) enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.deleteAutomatedBackups">deleteAutomatedBackups</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that indicates whether to remove automated backups immediately after the DB instance is deleted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the DB instance has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domain">domain</a></code> | <code>string</code> | The Active Directory directory ID to create the DB instance in. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainAuthSecretArn">domainAuthSecretArn</a></code> | <code>string</code> | The ARN for the Secrets Manager secret with the credentials for the user joining the domain.  Example: ``arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainDnsIps">domainDnsIps</a></code> | <code>string[]</code> | The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainFqdn">domainFqdn</a></code> | <code>string</code> | The fully qualified domain name (FQDN) of an Active Directory domain. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainIamRoleName">domainIamRoleName</a></code> | <code>string</code> | The name of the IAM role to use when making API calls to the Directory Service. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainOu">domainOu</a></code> | <code>string</code> | The Active Directory organizational unit for your DB instance to join. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enableCloudwatchLogsExports">enableCloudwatchLogsExports</a></code> | <code>string[]</code> | The list of log types that need to be enabled for exporting to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enableIamDatabaseAuthentication">enableIamDatabaseAuthentication</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enablePerformanceInsights">enablePerformanceInsights</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to enable Performance Insights for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engine">engine</a></code> | <code>string</code> | The name of the database engine to use for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engineLifecycleSupport">engineLifecycleSupport</a></code> | <code>string</code> | The lifecycle type for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | The version number of the database engine to use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.iops">iops</a></code> | <code>number</code> | The number of I/O operations per second (IOPS) that the database provisions. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The ARN of the AWS KMS key that's used to encrypt the DB instance, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.licenseModel">licenseModel</a></code> | <code>string</code> | License model information for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.manageMasterUserPassword">manageMasterUserPassword</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to manage the master user password with AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserAuthenticationType">masterUserAuthenticationType</a></code> | <code>string</code> | Specifies the authentication type for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUsername">masterUsername</a></code> | <code>string</code> | The master user name for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserPassword">masterUserPassword</a></code> | <code>string</code> | The password for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserSecret">masterUserSecret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a></code> | The secret managed by RDS in AWS Secrets Manager for the master user password. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.maxAllocatedStorage">maxAllocatedStorage</a></code> | <code>number</code> | The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.monitoringInterval">monitoringInterval</a></code> | <code>number</code> | The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.monitoringRoleArn">monitoringRoleArn</a></code> | <code>string</code> | The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.multiAz">multiAz</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the DB instance is a Multi-AZ deployment. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.ncharCharacterSetName">ncharCharacterSetName</a></code> | <code>string</code> | The name of the NCHAR character set for the Oracle DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.networkType">networkType</a></code> | <code>string</code> | The network type of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.optionGroupName">optionGroupName</a></code> | <code>string</code> | Indicates that the DB instance should be associated with the specified option group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.performanceInsightsKmsKeyId">performanceInsightsKmsKeyId</a></code> | <code>string</code> | The AWS KMS key identifier for encryption of Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.performanceInsightsRetentionPeriod">performanceInsightsRetentionPeriod</a></code> | <code>number</code> | The number of days to retain Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.port">port</a></code> | <code>string</code> | The port number on which the database accepts connections. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>string</code> | The daily time range during which automated backups are created if automated backups are enabled, using the ``BackupRetentionPeriod`` parameter. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.processorFeatures">processorFeatures</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>[]</code> | The number of CPU cores and the number of threads per core for the DB instance class of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.promotionTier">promotionTier</a></code> | <code>number</code> | The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the DB instance is an internet-facing instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.replicaMode">replicaMode</a></code> | <code>string</code> | The open mode of an Oracle read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.restoreTime">restoreTime</a></code> | <code>string</code> | The date and time to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbClusterIdentifier">sourceDbClusterIdentifier</a></code> | <code>string</code> | The identifier of the Multi-AZ DB cluster that will act as the source for the read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbInstanceAutomatedBackupsArn">sourceDbInstanceAutomatedBackupsArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, ``arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbInstanceIdentifier">sourceDbInstanceIdentifier</a></code> | <code>string</code> | If you want to create a read replica DB instance, specify the ID of the source DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbiResourceId">sourceDbiResourceId</a></code> | <code>string</code> | The resource ID of the source DB instance from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceRegion">sourceRegion</a></code> | <code>string</code> | The ID of the region that contains the source DB instance for the read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageEncrypted">storageEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that indicates whether the DB instance is encrypted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageThroughput">storageThroughput</a></code> | <code>number</code> | Specifies the storage throughput value, in mebibyte per second (MiBps), for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageType">storageType</a></code> | <code>string</code> | The storage type to associate with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>[]</code> | Tags to assign to the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tdeCredentialArn">tdeCredentialArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tde_credential_arn RdsDbInstance#tde_credential_arn}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tdeCredentialPassword">tdeCredentialPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tde_credential_password RdsDbInstance#tde_credential_password}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.timezone">timezone</a></code> | <code>string</code> | The time zone of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.useDefaultProcessorFeatures">useDefaultProcessorFeatures</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the DB instance class of the DB instance uses its default processor features. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the DB instance is restored from the latest backup time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.vpcSecurityGroups">vpcSecurityGroups</a></code> | <code>string[]</code> | A list of the VPC security group IDs to assign to the DB instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `additionalStorageVolumes`<sup>Optional</sup> <a name="additionalStorageVolumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.additionalStorageVolumes"></a>

```typescript
public readonly additionalStorageVolumes: IResolvable | RdsDbInstanceAdditionalStorageVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>[]

The additional storage volumes associated with the DB instance.

RDS supports additional storage volumes for RDS for Oracle and RDS for SQL Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#additional_storage_volumes RdsDbInstance#additional_storage_volumes}

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: string;
```

- *Type:* string

The amount of storage in gibibytes (GiB) to be initially allocated for the database instance.

If any value is set in the ``Iops`` parameter, ``AllocatedStorage`` must be at least 100 GiB, which corresponds to the minimum Iops value of 1,000. If you increase the ``Iops`` value (in 1,000 IOPS increments), then you must also increase the ``AllocatedStorage`` value (in 100-GiB increments). 
   *Amazon Aurora* 
 Not applicable. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume.
  *Db2* 
 Constraints to the amount of storage for each storage type are the following:
  +  General Purpose (SSD) storage (gp3): Must be an integer from 20 to 64000.
  +  Provisioned IOPS storage (io1): Must be an integer from 100 to 64000.
  
  *MySQL* 
 Constraints to the amount of storage for each storage type are the following: 
  +  General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
  +  Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
  +  Magnetic storage (standard): Must be an integer from 5 to 3072.
  
  *MariaDB* 
 Constraints to the amount of storage for each storage type are the following: 
  +  General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
  +  Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
  +  Magnetic storage (standard): Must be an integer from 5 to 3072.
  
  *PostgreSQL* 
 Constraints to the amount of storage for each storage type are the following: 
  +  General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
  +  Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
  +  Magnetic storage (standard): Must be an integer from 5 to 3072.
  
  *Oracle* 
 Constraints to the amount of storage for each storage type are the following: 
  +  General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
  +  Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
  +  Magnetic storage (standard): Must be an integer from 10 to 3072.
  
  *SQL Server* 
 Constraints to the amount of storage for each storage type are the following: 
  +  General Purpose (SSD) storage (gp2):
  +  Enterprise and Standard editions: Must be an integer from 20 to 16384.
  +  Web and Express editions: Must be an integer from 20 to 16384.
  
  +  Provisioned IOPS storage (io1):
  +  Enterprise and Standard editions: Must be an integer from 20 to 16384.
  +  Web and Express editions: Must be an integer from 20 to 16384.
  
  +  Magnetic storage (standard):
  +  Enterprise and Standard editions: Must be an integer from 20 to 1024.
  +  Web and Express editions: Must be an integer from 20 to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#allocated_storage RdsDbInstance#allocated_storage}

---

##### `allowMajorVersionUpgrade`<sup>Optional</sup> <a name="allowMajorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.allowMajorVersionUpgrade"></a>

```typescript
public readonly allowMajorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that indicates whether major version upgrades are allowed.

Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
 Constraints: Major version upgrades must be allowed when specifying a value for the ``EngineVersion`` parameter that is a different major version than the DB instance's current version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#allow_major_version_upgrade RdsDbInstance#allow_major_version_upgrade}

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether changes to the DB instance and any pending modifications are applied immediately, regardless of the ``PreferredMaintenanceWindow`` setting.

If set to ``false``, changes are applied during the next maintenance window. Until RDS applies the changes, the DB instance remains in a drift state. As a result, the configuration doesn't fully reflect the requested modifications and temporarily diverges from the intended state.
 In addition to the settings described in [Modifying a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html), this property also determines whether the DB instance reboots when a static parameter is modified in the associated DB parameter group.
 Default: ``true``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#apply_immediately RdsDbInstance#apply_immediately}

---

##### `associatedRoles`<sup>Optional</sup> <a name="associatedRoles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.associatedRoles"></a>

```typescript
public readonly associatedRoles: IResolvable | RdsDbInstanceAssociatedRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>[]

The IAMlong (IAM) roles associated with the DB instance.

*Amazon Aurora* 
 Not applicable. The associated roles are managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#associated_roles RdsDbInstance#associated_roles}

---

##### `automaticBackupReplicationKmsKeyId`<sup>Optional</sup> <a name="automaticBackupReplicationKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationKmsKeyId"></a>

```typescript
public readonly automaticBackupReplicationKmsKeyId: string;
```

- *Type:* string

The AWS KMS key identifier for encryption of the replicated automated backups.

The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination AWS-Region, for example, ``arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#automatic_backup_replication_kms_key_id RdsDbInstance#automatic_backup_replication_kms_key_id}

---

##### `automaticBackupReplicationRegion`<sup>Optional</sup> <a name="automaticBackupReplicationRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationRegion"></a>

```typescript
public readonly automaticBackupReplicationRegion: string;
```

- *Type:* string

The AWS-Region associated with the automated backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#automatic_backup_replication_region RdsDbInstance#automatic_backup_replication_region}

---

##### `automaticBackupReplicationRetentionPeriod`<sup>Optional</sup> <a name="automaticBackupReplicationRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationRetentionPeriod"></a>

```typescript
public readonly automaticBackupReplicationRetentionPeriod: number;
```

- *Type:* number

The retention period for automated backups in a different AWS Region.

Use this parameter to set a unique retention period that only applies to cross-Region automated backups. To enable automated backups in a different Region, specify a positive value for the ``AutomaticBackupReplicationRegion`` parameter. 
 If not specified, this parameter defaults to the value of the ``BackupRetentionPeriod`` parameter. The maximum allowed value is 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#automatic_backup_replication_retention_period RdsDbInstance#automatic_backup_replication_retention_period}

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window.

By default, minor engine upgrades are applied automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#auto_minor_version_upgrade RdsDbInstance#auto_minor_version_upgrade}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

The Availability Zone (AZ) where the database will be created.

For information on AWS-Regions and Availability Zones, see [Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html).
 For Amazon Aurora, each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one.
 Default: A random, system-chosen Availability Zone in the endpoint's AWS-Region.
 Constraints:
  +  The ``AvailabilityZone`` parameter can't be specified if the DB instance is a Multi-AZ deployment.
  +  The specified Availability Zone must be in the same AWS-Region as the current endpoint.
  
 Example: ``us-east-1d``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#availability_zone RdsDbInstance#availability_zone}

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="backupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.backupRetentionPeriod"></a>

```typescript
public readonly backupRetentionPeriod: number;
```

- *Type:* number

The number of days for which automated backups are retained.

Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.
  *Amazon Aurora* 
 Not applicable. The retention period for automated backups is managed by the DB cluster.
 Default: 1
 Constraints:
  +  Must be a value from 0 to 35
  +  Can't be set to 0 if the DB instance is a source to read replicas

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#backup_retention_period RdsDbInstance#backup_retention_period}

---

##### `backupTarget`<sup>Optional</sup> <a name="backupTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.backupTarget"></a>

```typescript
public readonly backupTarget: string;
```

- *Type:* string

The location for storing automated backups and manual snapshots.

Valid Values:
  +  ``local`` (Dedicated Local Zone)
  +  ``outposts`` (AWS Outposts)
  +  ``region`` (AWS-Region)
  
 Default: ``region``
 For more information, see [Working with Amazon RDS on Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#backup_target RdsDbInstance#backup_target}

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="caCertificateIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.caCertificateIdentifier"></a>

```typescript
public readonly caCertificateIdentifier: string;
```

- *Type:* string

The identifier of the CA certificate for this DB instance.

For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#ca_certificate_identifier RdsDbInstance#ca_certificate_identifier}

---

##### `certificateRotationRestart`<sup>Optional</sup> <a name="certificateRotationRestart" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.certificateRotationRestart"></a>

```typescript
public readonly certificateRotationRestart: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate.

By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.
  Set this parameter only if you are *not* using SSL/TLS to connect to the DB instance.
  If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:
  +  For more information about rotating your SSL/TLS certificate for RDS DB engines, see [Rotating Your SSL/TLS Certificate.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon RDS User Guide.*
  +  For more information about rotating your SSL/TLS certificate for Aurora DB engines, see [Rotating Your SSL/TLS Certificate](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon Aurora User Guide*.
  
 This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#certificate_rotation_restart RdsDbInstance#certificate_rotation_restart}

---

##### `characterSetName`<sup>Optional</sup> <a name="characterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.characterSetName"></a>

```typescript
public readonly characterSetName: string;
```

- *Type:* string

For supported engines, indicates that the DB instance should be associated with the specified character set.

*Amazon Aurora* 
 Not applicable. The character set is managed by the DB cluster. For more information, see [AWS::RDS::DBCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#character_set_name RdsDbInstance#character_set_name}

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="copyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.copyTagsToSnapshot"></a>

```typescript
public readonly copyTagsToSnapshot: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to copy tags from the DB instance to snapshots of the DB instance.

By default, tags are not copied.
 This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#copy_tags_to_snapshot RdsDbInstance#copy_tags_to_snapshot}

---

##### `customIamInstanceProfile`<sup>Optional</sup> <a name="customIamInstanceProfile" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.customIamInstanceProfile"></a>

```typescript
public readonly customIamInstanceProfile: string;
```

- *Type:* string

The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.

This setting is required for RDS Custom.
 Constraints:
  +  The profile must exist in your account.
  +  The profile must have an IAM role that Amazon EC2 has permissions to assume.
  +  The instance profile name and the associated IAM role name must start with the prefix ``AWSRDSCustom``.
  
 For the list of permissions required for the IAM role, see [Configure IAM and your VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#custom_iam_instance_profile RdsDbInstance#custom_iam_instance_profile}

---

##### `databaseInsightsMode`<sup>Optional</sup> <a name="databaseInsightsMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.databaseInsightsMode"></a>

```typescript
public readonly databaseInsightsMode: string;
```

- *Type:* string

The mode of Database Insights to enable for the DB instance.

Aurora DB instances inherit this value from the DB cluster, so you can't change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#database_insights_mode RdsDbInstance#database_insights_mode}

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbClusterIdentifier"></a>

```typescript
public readonly dbClusterIdentifier: string;
```

- *Type:* string

The identifier of the DB cluster that this DB instance will belong to.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_cluster_identifier RdsDbInstance#db_cluster_identifier}

---

##### `dbClusterSnapshotIdentifier`<sup>Optional</sup> <a name="dbClusterSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbClusterSnapshotIdentifier"></a>

```typescript
public readonly dbClusterSnapshotIdentifier: string;
```

- *Type:* string

The identifier for the Multi-AZ DB cluster snapshot to restore from.

For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide*.
 Constraints:
  +  Must match the identifier of an existing Multi-AZ DB cluster snapshot.
  +  Can't be specified when ``DBSnapshotIdentifier`` is specified.
  +  Must be specified when ``DBSnapshotIdentifier`` isn't specified.
  +  If you are restoring from a shared manual Multi-AZ DB cluster snapshot, the ``DBClusterSnapshotIdentifier`` must be the ARN of the shared snapshot.
  +  Can't be the identifier of an Aurora DB cluster snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_cluster_snapshot_identifier RdsDbInstance#db_cluster_snapshot_identifier}

---

##### `dbInstanceClass`<sup>Optional</sup> <a name="dbInstanceClass" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbInstanceClass"></a>

```typescript
public readonly dbInstanceClass: string;
```

- *Type:* string

The compute and memory capacity of the DB instance, for example ``db.m5.large``. Not all DB instance classes are available in all AWS-Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_instance_class RdsDbInstance#db_instance_class}

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="dbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

A name for the DB instance.

If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
 For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon RDS User Guide*.
  If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_instance_identifier RdsDbInstance#db_instance_identifier}

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

The meaning of this parameter differs according to the database engine you use.

If you specify the ``DBSnapshotIdentifier`` property, this property only applies to RDS for Oracle.
   *Amazon Aurora* 
 Not applicable. The database name is managed by the DB cluster.
  *Db2* 
 The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.
 Constraints:
  +  Must contain 1 to 64 letters or numbers.
  +  Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
  +  Can't be a word reserved by the specified database engine.
  
  *MySQL* 
 The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.
 Constraints:
  +  Must contain 1 to 64 letters or numbers.
  +  Can't be a word reserved by the specified database engine
  
  *MariaDB* 
 The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.
 Constraints:
  +  Must contain 1 to 64 letters or numbers.
  +  Can't be a word reserved by the specified database engine
  
  *PostgreSQL* 
 The name of the database to create when the DB instance is created. If this parameter is not specified, the default ``postgres`` database is created in the DB instance.
 Constraints:
  +  Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
  +  Must contain 1 to 63 characters.
  +  Can't be a word reserved by the specified database engine
  
  *Oracle* 
 The Oracle System ID (SID) of the created DB instance. If you specify ``null``, the default value ``ORCL`` is used. You can't specify the string NULL, or any other reserved word, for ``DBName``. 
 Default: ``ORCL``
 Constraints:
  +  Can't be longer than 8 characters
  
  *SQL Server* 
 Not applicable. Must be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_name RdsDbInstance#db_name}

---

##### `dbParameterGroupName`<sup>Optional</sup> <a name="dbParameterGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbParameterGroupName"></a>

```typescript
public readonly dbParameterGroupName: string;
```

- *Type:* string

The name of an existing DB parameter group or a reference to an [AWS::RDS::DBParameterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.  To list all of the available DB parameter group names, use the following command:   ``aws rds describe-db-parameter-groups --query "DBParameterGroups[].DBParameterGroupName" --output text``    If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.   If you don't specify a value for ``DBParameterGroupName`` property, the default DB parameter group for the specified engine and engine version is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_parameter_group_name RdsDbInstance#db_parameter_group_name}

---

##### `dbSecurityGroups`<sup>Optional</sup> <a name="dbSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSecurityGroups"></a>

```typescript
public readonly dbSecurityGroups: string[];
```

- *Type:* string[]

A list of the DB security groups to assign to the DB instance.

The list can include both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup resources created in the template.
  If you set DBSecurityGroups, you must not set VPCSecurityGroups, and vice versa. Also, note that the DBSecurityGroups property exists only for backwards compatibility with older regions and is no longer recommended for providing security information to an RDS DB instance. Instead, use VPCSecurityGroups.
  If you specify this property, AWS CloudFormation sends only the following properties (if specified) to Amazon RDS during create operations:
  +   ``AllocatedStorage`` 
  +   ``AutoMinorVersionUpgrade`` 
  +   ``AvailabilityZone`` 
  +   ``BackupRetentionPeriod`` 
  +   ``CharacterSetName`` 
  +   ``DBInstanceClass`` 
  +   ``DBName`` 
  +   ``DBParameterGroupName`` 
  +   ``DBSecurityGroups`` 
  +   ``DBSubnetGroupName`` 
  +   ``Engine`` 
  +   ``EngineVersion`` 
  +   ``Iops`` 
  +   ``LicenseModel`` 
  +   ``MasterUsername`` 
  +   ``MasterUserPassword`` 
  +   ``MultiAZ`` 
  +   ``OptionGroupName`` 
  +   ``PreferredBackupWindow`` 
  +   ``PreferredMaintenanceWindow`` 
  
 All other properties are ignored. Specify a virtual private cloud (VPC) security group if you want to submit other properties, such as ``StorageType``, ``StorageEncrypted``, or ``KmsKeyId``. If you're already using the ``DBSecurityGroups`` property, you can't use these other properties by updating your DB instance to use a VPC security group. You must recreate the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_security_groups RdsDbInstance#db_security_groups}

---

##### `dbSnapshotIdentifier`<sup>Optional</sup> <a name="dbSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSnapshotIdentifier"></a>

```typescript
public readonly dbSnapshotIdentifier: string;
```

- *Type:* string

The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance.

If you're restoring from a shared manual DB snapshot, you must specify the ARN of the snapshot.
 By specifying this property, you can create a DB instance from the specified DB snapshot. If the ``DBSnapshotIdentifier`` property is an empty string or the ``AWS::RDS::DBInstance`` declaration has no ``DBSnapshotIdentifier`` property, AWS CloudFormation creates a new database. If the property contains a value (other than an empty string), AWS CloudFormation creates a database from the specified snapshot. If a snapshot with the specified name doesn't exist, AWS CloudFormation can't create the database and it rolls back the stack.
 Some DB instance properties aren't valid when you restore from a snapshot, such as the ``MasterUsername`` and ``MasterUserPassword`` properties, and the point-in-time recovery properties ``RestoreTime`` and ``UseLatestRestorableTime``. For information about the properties that you can specify, see the [RestoreDBInstanceFromDBSnapshot](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceFromDBSnapshot.html) action in the *Amazon RDS API Reference*.
 When you specify the same ``DBSnapshotIdentifier`` property value for an update, the DB instance is not restored from the DB snapshot again, and the data in the database is not changed. If you specify a different ``DBSnapshotIdentifier`` value, a new DB instance is restored from the specified snapshot, and the original DB instance is deleted.
 If you specify the ``DBSnapshotIdentifier`` property to restore a DB instance (as opposed to specifying it for DB instance updates), then don't specify the following properties:
  +   ``CharacterSetName`` 
  +   ``DBClusterIdentifier`` 
  +   ``DBName`` 
  +   ``KmsKeyId`` 
  +   ``MasterUsername`` 
  +   ``MasterUserPassword`` 
  +   ``PromotionTier`` 
  +   ``SourceDBInstanceIdentifier`` 
  +   ``SourceRegion`` 
  +  ``StorageEncrypted`` (for an unencrypted snapshot)
  +   ``Timezone`` 
  
  *Amazon Aurora* 
 Not applicable. Snapshot restore is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_snapshot_identifier RdsDbInstance#db_snapshot_identifier}

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="dbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSubnetGroupName"></a>

```typescript
public readonly dbSubnetGroupName: string;
```

- *Type:* string

A DB subnet group to associate with the DB instance.

If you update this value, the new subnet group must be a subnet group in a new VPC. 
 If you don't specify a DB subnet group, RDS uses the default DB subnet group if one exists. If a default DB subnet group does not exist, and you don't specify a ``DBSubnetGroupName``, the DB instance fails to launch. 
 For more information about using Amazon RDS in a VPC, see [Amazon VPC and Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide*. 
 This setting doesn't apply to Amazon Aurora DB instances. The DB subnet group is managed by the DB cluster. If specified, the setting must match the DB cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_subnet_group_name RdsDbInstance#db_subnet_group_name}

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files.

In this context, the term "Oracle database instance" refers exclusively to the system global area (SGA) and Oracle background processes. If you don't specify a SID, the value defaults to ``RDSCDB``. The Oracle SID is also the name of your CDB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_system_id RdsDbInstance#db_system_id}

---

##### `dedicatedLogVolume`<sup>Optional</sup> <a name="dedicatedLogVolume" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dedicatedLogVolume"></a>

```typescript
public readonly dedicatedLogVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the DB instance has a dedicated log volume (DLV) enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#dedicated_log_volume RdsDbInstance#dedicated_log_volume}

---

##### `deleteAutomatedBackups`<sup>Optional</sup> <a name="deleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.deleteAutomatedBackups"></a>

```typescript
public readonly deleteAutomatedBackups: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that indicates whether to remove automated backups immediately after the DB instance is deleted.

This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.
  *Amazon Aurora* 
 Not applicable. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the DB cluster are not deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#delete_automated_backups RdsDbInstance#delete_automated_backups}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the DB instance has deletion protection enabled.

The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see [Deleting a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html).
 This setting doesn't apply to Amazon Aurora DB instances. You can enable or disable deletion protection for the DB cluster. For more information, see ``CreateDBCluster``. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#deletion_protection RdsDbInstance#deletion_protection}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The Active Directory directory ID to create the DB instance in.

Currently, only Db2, MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.
 For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain RdsDbInstance#domain}

---

##### `domainAuthSecretArn`<sup>Optional</sup> <a name="domainAuthSecretArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainAuthSecretArn"></a>

```typescript
public readonly domainAuthSecretArn: string;
```

- *Type:* string

The ARN for the Secrets Manager secret with the credentials for the user joining the domain.  Example: ``arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_auth_secret_arn RdsDbInstance#domain_auth_secret_arn}

---

##### `domainDnsIps`<sup>Optional</sup> <a name="domainDnsIps" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainDnsIps"></a>

```typescript
public readonly domainDnsIps: string[];
```

- *Type:* string[]

The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.

Constraints:
  +  Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.
  
 Example: ``123.124.125.126,234.235.236.237``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_dns_ips RdsDbInstance#domain_dns_ips}

---

##### `domainFqdn`<sup>Optional</sup> <a name="domainFqdn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainFqdn"></a>

```typescript
public readonly domainFqdn: string;
```

- *Type:* string

The fully qualified domain name (FQDN) of an Active Directory domain.

Constraints:
  +  Can't be longer than 64 characters.
  
 Example: ``mymanagedADtest.mymanagedAD.mydomain``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_fqdn RdsDbInstance#domain_fqdn}

---

##### `domainIamRoleName`<sup>Optional</sup> <a name="domainIamRoleName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainIamRoleName"></a>

```typescript
public readonly domainIamRoleName: string;
```

- *Type:* string

The name of the IAM role to use when making API calls to the Directory Service.

This setting doesn't apply to the following DB instances:
  +  Amazon Aurora (The domain is managed by the DB cluster.)
  +  RDS Custom

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_iam_role_name RdsDbInstance#domain_iam_role_name}

---

##### `domainOu`<sup>Optional</sup> <a name="domainOu" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainOu"></a>

```typescript
public readonly domainOu: string;
```

- *Type:* string

The Active Directory organizational unit for your DB instance to join.

Constraints:
  +  Must be in the distinguished name format.
  +  Can't be longer than 64 characters.
  
 Example: ``OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_ou RdsDbInstance#domain_ou}

---

##### `enableCloudwatchLogsExports`<sup>Optional</sup> <a name="enableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enableCloudwatchLogsExports"></a>

```typescript
public readonly enableCloudwatchLogsExports: string[];
```

- *Type:* string[]

The list of log types that need to be enabled for exporting to CloudWatch Logs.

The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Relational Database Service User Guide*.
  *Amazon Aurora* 
 Not applicable. CloudWatch Logs exports are managed by the DB cluster. 
  *Db2* 
 Valid values: ``diag.log``, ``notify.log``
  *MariaDB* 
 Valid values: ``audit``, ``error``, ``general``, ``slowquery``
  *Microsoft SQL Server* 
 Valid values: ``agent``, ``error``
  *MySQL* 
 Valid values: ``audit``, ``error``, ``general``, ``slowquery``
  *Oracle* 
 Valid values: ``alert``, ``audit``, ``listener``, ``trace``, ``oemagent``
  *PostgreSQL* 
 Valid values: ``postgresql``, ``upgrade``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#enable_cloudwatch_logs_exports RdsDbInstance#enable_cloudwatch_logs_exports}

---

##### `enableIamDatabaseAuthentication`<sup>Optional</sup> <a name="enableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enableIamDatabaseAuthentication"></a>

```typescript
public readonly enableIamDatabaseAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts.

By default, mapping is disabled.
 This property is supported for RDS for MariaDB, RDS for MySQL, and RDS for PostgreSQL. For more information, see [IAM Database Authentication for MariaDB, MySQL, and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide.*
  *Amazon Aurora* 
 Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#enable_iam_database_authentication RdsDbInstance#enable_iam_database_authentication}

---

##### `enablePerformanceInsights`<sup>Optional</sup> <a name="enablePerformanceInsights" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enablePerformanceInsights"></a>

```typescript
public readonly enablePerformanceInsights: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to enable Performance Insights for the DB instance.

For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
 This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#enable_performance_insights RdsDbInstance#enable_performance_insights}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

The name of the database engine to use for this DB instance.

Not every database engine is available in every AWS Region.
 This property is required when creating a DB instance.
  You can convert an Oracle database from the non-CDB architecture to the container database (CDB) architecture by updating the ``Engine`` value in your templates from ``oracle-ee`` to ``oracle-ee-cdb`` or from ``oracle-se2`` to ``oracle-se2-cdb``. Converting to the CDB architecture requires an interruption.
  Valid Values:
  +  ``aurora-mysql`` (for Aurora MySQL DB instances)
  +  ``aurora-postgresql`` (for Aurora PostgreSQL DB instances)
  +  ``custom-oracle-ee`` (for RDS Custom for Oracle DB instances)
  +  ``custom-oracle-ee-cdb`` (for RDS Custom for Oracle DB instances)
  +  ``custom-sqlserver-ee`` (for RDS Custom for SQL Server DB instances)
  +  ``custom-sqlserver-se`` (for RDS Custom for SQL Server DB instances)
  +  ``custom-sqlserver-web`` (for RDS Custom for SQL Server DB instances)
  +   ``db2-ae`` 
  +   ``db2-se`` 
  +   ``mariadb`` 
  +   ``mysql`` 
  +   ``oracle-ee`` 
  +   ``oracle-ee-cdb`` 
  +   ``oracle-se2`` 
  +   ``oracle-se2-cdb`` 
  +   ``postgres`` 
  +   ``sqlserver-ee`` 
  +   ``sqlserver-se`` 
  +   ``sqlserver-ex`` 
  +   ``sqlserver-web``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#engine RdsDbInstance#engine}

---

##### `engineLifecycleSupport`<sup>Optional</sup> <a name="engineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engineLifecycleSupport"></a>

```typescript
public readonly engineLifecycleSupport: string;
```

- *Type:* string

The lifecycle type for this DB instance.

By default, this value is set to ``open-source-rds-extended-support``, which enrolls your DB instance into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to ``open-source-rds-extended-support-disabled``. In this case, creating the DB instance will fail if the DB major version is past its end of standard support date.
  This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the engine lifecycle support is managed by the DB cluster.
 You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*.
 Valid Values: ``open-source-rds-extended-support | open-source-rds-extended-support-disabled``
 Default: ``open-source-rds-extended-support``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#engine_lifecycle_support RdsDbInstance#engine_lifecycle_support}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

The version number of the database engine to use.

For a list of valid engine versions, use the ``DescribeDBEngineVersions`` action.
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

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

The number of I/O operations per second (IOPS) that the database provisions.

The value must be equal to or greater than 1000. 
 If you specify this property, you must follow the range of allowed ratios of your requested IOPS rate to the amount of storage that you allocate (IOPS to allocated storage). For example, you can provision an Oracle database instance with 1000 IOPS and 200 GiB of storage (a ratio of 5:1), or specify 2000 IOPS with 200 GiB of storage (a ratio of 10:1). For more information, see [Amazon RDS Provisioned IOPS Storage to Improve Performance](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
  If you specify ``io1`` for the ``StorageType`` property, then you must also specify the ``Iops`` property.
  Constraints:
  +  For RDS for Db2, MariaDB, MySQL, Oracle, and PostgreSQL - Must be a multiple between .5 and 50 of the storage amount for the DB instance.
  +  For RDS for SQL Server - Must be a multiple between 1 and 50 of the storage amount for the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#iops RdsDbInstance#iops}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The ARN of the AWS KMS key that's used to encrypt the DB instance, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``.

If you enable the StorageEncrypted property but don't specify this property, AWS CloudFormation uses the default KMS key. If you specify this property, you must set the StorageEncrypted property to true. 
 If you specify the ``SourceDBInstanceIdentifier`` or ``SourceDbiResourceId`` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified ``KmsKeyId`` property is used. However, if the source DB instance is in a different AWS Region, you must specify a KMS key ID.
 If you specify the ``SourceDBInstanceAutomatedBackupsArn`` property, don't specify this property. The value is inherited from the source DB instance automated backup, and if the automated backup is encrypted, the specified ``KmsKeyId`` property is used.
 If you create an encrypted read replica in a different AWS Region, then you must specify a KMS key for the destination AWS Region. KMS encryption keys are specific to the region that they're created in, and you can't use encryption keys from one region in another region.
 If you specify the ``DBSnapshotIdentifier`` property, don't specify this property. The ``StorageEncrypted`` property value is inherited from the snapshot. If the DB instance is encrypted, the specified ``KmsKeyId`` property is also inherited from the snapshot.
 If you specify ``DBSecurityGroups``, AWS CloudFormation ignores this property. To specify both a security group and this property, you must use a VPC security group. For more information about Amazon RDS and VPC, see [Using Amazon RDS with Amazon VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide*.
  *Amazon Aurora* 
 Not applicable. The KMS key identifier is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#kms_key_id RdsDbInstance#kms_key_id}

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

License model information for this DB instance.

Valid Values:
  +  Aurora MySQL - ``general-public-license``
  +  Aurora PostgreSQL - ``postgresql-license``
  +  RDS for Db2 - ``bring-your-own-license``. For more information about RDS for Db2 licensing, see [](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-licensing.html) in the *Amazon RDS User Guide.*
  +  RDS for MariaDB - ``general-public-license``
  +  RDS for Microsoft SQL Server - ``license-included`` or ``bring-your-own-media``
  +  RDS for MySQL - ``general-public-license``
  +  RDS for Oracle - ``bring-your-own-license`` or ``license-included``
  +  RDS for PostgreSQL - ``postgresql-license``
  
  If you've specified ``DBSecurityGroups`` and then you update the license model, AWS CloudFormation replaces the underlying DB instance. This will incur some interruptions to database availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#license_model RdsDbInstance#license_model}

---

##### `manageMasterUserPassword`<sup>Optional</sup> <a name="manageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.manageMasterUserPassword"></a>

```typescript
public readonly manageMasterUserPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to manage the master user password with AWS Secrets Manager.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
 Constraints:
  +  Can't manage the master user password with AWS Secrets Manager if ``MasterUserPassword`` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#manage_master_user_password RdsDbInstance#manage_master_user_password}

---

##### `masterUserAuthenticationType`<sup>Optional</sup> <a name="masterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserAuthenticationType"></a>

```typescript
public readonly masterUserAuthenticationType: string;
```

- *Type:* string

Specifies the authentication type for the master user.

With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB instance.
 You can specify one of the following values:
  +  ``password`` - Use standard database authentication with a password.
  +  ``iam-db-auth`` - Use IAM database authentication for the master user.
  
 This option is only valid for RDS for MySQL, RDS for MariaDB, RDS for PostgreSQL, Aurora MySQL, and Aurora PostgreSQL engines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#master_user_authentication_type RdsDbInstance#master_user_authentication_type}

---

##### `masterUsername`<sup>Optional</sup> <a name="masterUsername" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUsername"></a>

```typescript
public readonly masterUsername: string;
```

- *Type:* string

The master user name for the DB instance.

If you specify the ``SourceDBInstanceIdentifier`` or ``DBSnapshotIdentifier`` property, don't specify this property. The value is inherited from the source DB instance or snapshot.
 When migrating a self-managed Db2 database, we recommend that you use the same master username as your self-managed Db2 instance name.
   *Amazon Aurora* 
 Not applicable. The name for the master user is managed by the DB cluster. 
  *RDS for Db2* 
 Constraints:
  +  Must be 1 to 16 letters or numbers.
  +  First character must be a letter.
  +  Can't be a reserved word for the chosen database engine.
  
  *RDS for MariaDB* 
 Constraints:
  +  Must be 1 to 16 letters or numbers.
  +  Can't be a reserved word for the chosen database engine.
  
  *RDS for Microsoft SQL Server* 
 Constraints:
  +  Must be 1 to 128 letters or numbers.
  +  First character must be a letter.
  +  Can't be a reserved word for the chosen database engine.
  
  *RDS for MySQL* 
 Constraints:
  +  Must be 1 to 16 letters or numbers.
  +  First character must be a letter.
  +  Can't be a reserved word for the chosen database engine.
  
  *RDS for Oracle* 
 Constraints:
  +  Must be 1 to 30 letters or numbers.
  +  First character must be a letter.
  +  Can't be a reserved word for the chosen database engine.
  
  *RDS for PostgreSQL* 
 Constraints:
  +  Must be 1 to 63 letters or numbers.
  +  First character must be a letter.
  +  Can't be a reserved word for the chosen database engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#master_username RdsDbInstance#master_username}

---

##### `masterUserPassword`<sup>Optional</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserPassword"></a>

```typescript
public readonly masterUserPassword: string;
```

- *Type:* string

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

##### `masterUserSecret`<sup>Optional</sup> <a name="masterUserSecret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserSecret"></a>

```typescript
public readonly masterUserSecret: RdsDbInstanceMasterUserSecret;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a>

The secret managed by RDS in AWS Secrets Manager for the master user password.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#master_user_secret RdsDbInstance#master_user_secret}

---

##### `maxAllocatedStorage`<sup>Optional</sup> <a name="maxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.maxAllocatedStorage"></a>

```typescript
public readonly maxAllocatedStorage: number;
```

- *Type:* number

The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.

For more information about this setting, including limitations that apply to it, see [Managing capacity automatically with Amazon RDS storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling) in the *Amazon RDS User Guide*.
 This setting doesn't apply to the following DB instances:
  +  Amazon Aurora (Storage is managed by the DB cluster.)
  +  RDS Custom

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#max_allocated_storage RdsDbInstance#max_allocated_storage}

---

##### `monitoringInterval`<sup>Optional</sup> <a name="monitoringInterval" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.monitoringInterval"></a>

```typescript
public readonly monitoringInterval: number;
```

- *Type:* number

The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.

To disable collection of Enhanced Monitoring metrics, specify ``0``.
 If ``MonitoringRoleArn`` is specified, then you must set ``MonitoringInterval`` to a value other than ``0``.
 This setting doesn't apply to RDS Custom DB instances.
 Valid Values: ``0 | 1 | 5 | 10 | 15 | 30 | 60``
 Default: ``0``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#monitoring_interval RdsDbInstance#monitoring_interval}

---

##### `monitoringRoleArn`<sup>Optional</sup> <a name="monitoringRoleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.monitoringRoleArn"></a>

```typescript
public readonly monitoringRoleArn: string;
```

- *Type:* string

The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs.

For example, ``arn:aws:iam:123456789012:role/emaccess``. For information on creating a monitoring role, see [Setting Up and Enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide*.
 If ``MonitoringInterval`` is set to a value other than ``0``, then you must supply a ``MonitoringRoleArn`` value.
 This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#monitoring_role_arn RdsDbInstance#monitoring_role_arn}

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.multiAz"></a>

```typescript
public readonly multiAz: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the DB instance is a Multi-AZ deployment.

You can't set the ``AvailabilityZone`` parameter if the DB instance is a Multi-AZ deployment.
 This setting doesn't apply to Amazon Aurora because the DB instance Availability Zones (AZs) are managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#multi_az RdsDbInstance#multi_az}

---

##### `ncharCharacterSetName`<sup>Optional</sup> <a name="ncharCharacterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.ncharCharacterSetName"></a>

```typescript
public readonly ncharCharacterSetName: string;
```

- *Type:* string

The name of the NCHAR character set for the Oracle DB instance.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#nchar_character_set_name RdsDbInstance#nchar_character_set_name}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

The network type of the DB instance.

Valid values:
  +   ``IPV4`` 
  +   ``DUAL`` 
  
 The network type is determined by the ``DBSubnetGroup`` specified for the DB instance. A ``DBSubnetGroup`` can support only the IPv4 protocol or the IPv4 and IPv6 protocols (``DUAL``).
 For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#network_type RdsDbInstance#network_type}

---

##### `optionGroupName`<sup>Optional</sup> <a name="optionGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.optionGroupName"></a>

```typescript
public readonly optionGroupName: string;
```

- *Type:* string

Indicates that the DB instance should be associated with the specified option group.

Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance once it is associated with a DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#option_group_name RdsDbInstance#option_group_name}

---

##### `performanceInsightsKmsKeyId`<sup>Optional</sup> <a name="performanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.performanceInsightsKmsKeyId"></a>

```typescript
public readonly performanceInsightsKmsKeyId: string;
```

- *Type:* string

The AWS KMS key identifier for encryption of Performance Insights data.

The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
 If you do not specify a value for ``PerformanceInsightsKMSKeyId``, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS account. Your AWS account has a different default KMS key for each AWS Region.
  *Update behavior:* Once Performance Insights is enabled with a KMS key, you cannot change to a different physical KMS key without replacing the DB instance. However, the following updates do not require replacement:
  +  Enabling or disabling Performance Insights using the ``EnablePerformanceInsights`` property
  +  Changing between different identifier formats (key ARN, key ID, alias ARN, alias name) of the same physical KMS key
  +  Removing the ``PerformanceInsightsKMSKeyId`` property from your template
  
   *Drift behavior:* If you specify ``PerformanceInsightsKMSKeyId`` while ``EnablePerformanceInsights`` is set to ``false``, CloudFormation will report drift. This occurs because the RDS API does not allow setting a KMS key when Performance Insights is disabled. CloudFormation ignores the ``PerformanceInsightsKMSKeyId`` value during instance creation to avoid API errors, resulting in a mismatch between your template and the actual instance configuration.
 To avoid drift, omit both ``EnablePerformanceInsights`` and ``PerformanceInsightsKMSKeyId`` during initial instance creation, then set both properties together when you're ready to enable Performance Insights.
  For information about enabling Performance Insights, see [EnablePerformanceInsights](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-enableperformanceinsights).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#performance_insights_kms_key_id RdsDbInstance#performance_insights_kms_key_id}

---

##### `performanceInsightsRetentionPeriod`<sup>Optional</sup> <a name="performanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.performanceInsightsRetentionPeriod"></a>

```typescript
public readonly performanceInsightsRetentionPeriod: number;
```

- *Type:* number

The number of days to retain Performance Insights data.

When creating a DB instance without enabling Performance Insights, you can't specify the parameter ``PerformanceInsightsRetentionPeriod``.
 This setting doesn't apply to RDS Custom DB instances.
 Valid Values:
  +   ``7`` 
  +  *month* * 31, where *month* is a number of months from 1-23. Examples: ``93`` (3 months * 31), ``341`` (11 months * 31), ``589`` (19 months * 31)
  +   ``731`` 
  
 Default: ``7`` days
 If you specify a retention period that isn't valid, such as ``94``, Amazon RDS returns an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#performance_insights_retention_period RdsDbInstance#performance_insights_retention_period}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

The port number on which the database accepts connections.

This setting doesn't apply to Aurora DB instances. The port number is managed by the cluster.
 Valid Values: ``1150-65535``
 Default:
  +  RDS for Db2 - ``50000``
  +  RDS for MariaDB - ``3306``
  +  RDS for Microsoft SQL Server - ``1433``
  +  RDS for MySQL - ``3306``
  +  RDS for Oracle - ``1521``
  +  RDS for PostgreSQL - ``5432``
  
 Constraints:
  +  For RDS for Microsoft SQL Server, the value can't be ``1234``, ``1434``, ``3260``, ``3343``, ``3389``, ``47001``, or ``49152-49156``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#port RdsDbInstance#port}

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.preferredBackupWindow"></a>

```typescript
public readonly preferredBackupWindow: string;
```

- *Type:* string

The daily time range during which automated backups are created if automated backups are enabled, using the ``BackupRetentionPeriod`` parameter.

For more information, see [Backup Window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow) in the *Amazon RDS User Guide.*
 Constraints:
  +  Must be in the format ``hh24:mi-hh24:mi``.
  +  Must be in Universal Coordinated Time (UTC).
  +  Must not conflict with the preferred maintenance window.
  +  Must be at least 30 minutes.
  
  *Amazon Aurora* 
 Not applicable. The daily time range for creating automated backups is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#preferred_backup_window RdsDbInstance#preferred_backup_window}

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

Format: ``ddd:hh24:mi-ddd:hh24:mi``
 The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [Maintaining a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow) in the *Amazon RDS User Guide.*
  This property applies when AWS CloudFormation initially creates the DB instance. If you use AWS CloudFormation to update the DB instance, those updates are applied immediately.
  Constraints: Minimum 30-minute window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#preferred_maintenance_window RdsDbInstance#preferred_maintenance_window}

---

##### `processorFeatures`<sup>Optional</sup> <a name="processorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.processorFeatures"></a>

```typescript
public readonly processorFeatures: IResolvable | RdsDbInstanceProcessorFeatures[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>[]

The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.

This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#processor_features RdsDbInstance#processor_features}

---

##### `promotionTier`<sup>Optional</sup> <a name="promotionTier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.promotionTier"></a>

```typescript
public readonly promotionTier: number;
```

- *Type:* number

The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance.

For more information, see [Fault Tolerance for an Aurora DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Aurora.Managing.FaultTolerance) in the *Amazon Aurora User Guide*.
 This setting doesn't apply to RDS Custom DB instances.
 Default: ``1``
 Valid Values: ``0 - 15``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#promotion_tier RdsDbInstance#promotion_tier}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the DB instance is an internet-facing instance.

If you specify true, AWS CloudFormation creates an instance with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, AWS CloudFormation creates an internal instance with a DNS name that resolves to a private IP address. 
 The default behavior value depends on your VPC setup and the database subnet group. For more information, see the ``PubliclyAccessible`` parameter in the [CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) in the *Amazon RDS API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#publicly_accessible RdsDbInstance#publicly_accessible}

---

##### `replicaMode`<sup>Optional</sup> <a name="replicaMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.replicaMode"></a>

```typescript
public readonly replicaMode: string;
```

- *Type:* string

The open mode of an Oracle read replica.

For more information, see [Working with Oracle Read Replicas for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) in the *Amazon RDS User Guide*.
 This setting is only supported in RDS for Oracle.
 Default: ``open-read-only``
 Valid Values: ``open-read-only`` or ``mounted``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#replica_mode RdsDbInstance#replica_mode}

---

##### `restoreTime`<sup>Optional</sup> <a name="restoreTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.restoreTime"></a>

```typescript
public readonly restoreTime: string;
```

- *Type:* string

The date and time to restore from.

This parameter applies to point-in-time recovery. For more information, see [Restoring a DB instance to a specified time](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html) in the in the *Amazon RDS User Guide*.
 Constraints:
  +  Must be a time in Universal Coordinated Time (UTC) format.
  +  Must be before the latest restorable time for the DB instance.
  +  Can't be specified if the ``UseLatestRestorableTime`` parameter is enabled.
  
 Example: ``2009-09-07T23:45:00Z``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#restore_time RdsDbInstance#restore_time}

---

##### `sourceDbClusterIdentifier`<sup>Optional</sup> <a name="sourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbClusterIdentifier"></a>

```typescript
public readonly sourceDbClusterIdentifier: string;
```

- *Type:* string

The identifier of the Multi-AZ DB cluster that will act as the source for the read replica.

Each DB cluster can have up to 15 read replicas.
 Constraints:
  +  Must be the identifier of an existing Multi-AZ DB cluster.
  +  Can't be specified if the ``SourceDBInstanceIdentifier`` parameter is also specified.
  +  The specified DB cluster must have automatic backups enabled, that is, its backup retention period must be greater than 0.
  +  The source DB cluster must be in the same AWS-Region as the read replica. Cross-Region replication isn't supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_db_cluster_identifier RdsDbInstance#source_db_cluster_identifier}

---

##### `sourceDbInstanceAutomatedBackupsArn`<sup>Optional</sup> <a name="sourceDbInstanceAutomatedBackupsArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbInstanceAutomatedBackupsArn"></a>

```typescript
public readonly sourceDbInstanceAutomatedBackupsArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, ``arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE``.

This setting doesn't apply to RDS Custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_db_instance_automated_backups_arn RdsDbInstance#source_db_instance_automated_backups_arn}

---

##### `sourceDbInstanceIdentifier`<sup>Optional</sup> <a name="sourceDbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbInstanceIdentifier"></a>

```typescript
public readonly sourceDbInstanceIdentifier: string;
```

- *Type:* string

If you want to create a read replica DB instance, specify the ID of the source DB instance.

Each DB instance can have a limited number of read replicas. For more information, see [Working with Read Replicas](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/USER_ReadRepl.html) in the *Amazon RDS User Guide*.
 For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon RDS User Guide*.
 The ``SourceDBInstanceIdentifier`` property determines whether a DB instance is a read replica. If you remove the ``SourceDBInstanceIdentifier`` property from your template and then update your stack, AWS CloudFormation promotes the read replica to a standalone DB instance.
 If you specify the ``UseLatestRestorableTime`` or ``RestoreTime`` properties in conjunction with the ``SourceDBInstanceIdentifier`` property, RDS restores the DB instance to the requested point in time, thereby creating a new DB instance.
   +  If you specify a source DB instance that uses VPC security groups, we recommend that you specify the ``VPCSecurityGroups`` property. If you don't specify the property, the read replica inherits the value of the ``VPCSecurityGroups`` property from the source DB when you create the replica. However, if you update the stack, AWS CloudFormation reverts the replica's ``VPCSecurityGroups`` property to the default value because it's not defined in the stack's template. This change might cause unexpected issues.
  +  Read replicas don't support deletion policies. AWS CloudFormation ignores any deletion policy that's associated with a read replica.
  +  If you specify ``SourceDBInstanceIdentifier``, don't specify the ``DBSnapshotIdentifier`` property. You can't create a read replica from a snapshot.
  +  Don't set the ``BackupRetentionPeriod``, ``DBName``, ``MasterUsername``, ``MasterUserPassword``, and ``PreferredBackupWindow`` properties. The database attributes are inherited from the source DB instance, and backups are disabled for read replicas.
  +  If the source DB instance is in a different region than the read replica, specify the source region in ``SourceRegion``, and specify an ARN for a valid DB instance in ``SourceDBInstanceIdentifier``. For more information, see [Constructing a Amazon RDS Amazon Resource Name (ARN)](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html#USER_Tagging.ARN) in the *Amazon RDS User Guide*.
  +  For DB instances in Amazon Aurora clusters, don't specify this property. Amazon RDS automatically assigns writer and reader DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_db_instance_identifier RdsDbInstance#source_db_instance_identifier}

---

##### `sourceDbiResourceId`<sup>Optional</sup> <a name="sourceDbiResourceId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbiResourceId"></a>

```typescript
public readonly sourceDbiResourceId: string;
```

- *Type:* string

The resource ID of the source DB instance from which to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_dbi_resource_id RdsDbInstance#source_dbi_resource_id}

---

##### `sourceRegion`<sup>Optional</sup> <a name="sourceRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceRegion"></a>

```typescript
public readonly sourceRegion: string;
```

- *Type:* string

The ID of the region that contains the source DB instance for the read replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_region RdsDbInstance#source_region}

---

##### `storageEncrypted`<sup>Optional</sup> <a name="storageEncrypted" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that indicates whether the DB instance is encrypted.

By default, it isn't encrypted.
 If you specify the ``KmsKeyId`` property, then you must enable encryption.
 If you specify the ``SourceDBInstanceIdentifier`` or ``SourceDbiResourceId`` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified ``KmsKeyId`` property is used.
 If you specify the ``SourceDBInstanceAutomatedBackupsArn`` property, don't specify this property. The value is inherited from the source DB instance automated backup. 
 If you specify ``DBSnapshotIdentifier`` property, don't specify this property. The value is inherited from the snapshot.
  *Amazon Aurora* 
 Not applicable. The encryption for DB instances is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_encrypted RdsDbInstance#storage_encrypted}

---

##### `storageThroughput`<sup>Optional</sup> <a name="storageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageThroughput"></a>

```typescript
public readonly storageThroughput: number;
```

- *Type:* number

Specifies the storage throughput value, in mebibyte per second (MiBps), for the DB instance.

This setting applies only to the ``gp3`` storage type. 
 This setting doesn't apply to RDS Custom or Amazon Aurora.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_throughput RdsDbInstance#storage_throughput}

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

The storage type to associate with the DB instance.

If you specify ``io1``, ``io2``, or ``gp3``, you must also include a value for the ``Iops`` parameter.
 This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster.
 Valid Values: ``gp2 | gp3 | io1 | io2 | standard``
 Default: ``io1``, if the ``Iops`` parameter is specified. Otherwise, ``gp3``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_type RdsDbInstance#storage_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RdsDbInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>[]

Tags to assign to the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tags RdsDbInstance#tags}

---

##### `tdeCredentialArn`<sup>Optional</sup> <a name="tdeCredentialArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tdeCredentialArn"></a>

```typescript
public readonly tdeCredentialArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tde_credential_arn RdsDbInstance#tde_credential_arn}.

---

##### `tdeCredentialPassword`<sup>Optional</sup> <a name="tdeCredentialPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tdeCredentialPassword"></a>

```typescript
public readonly tdeCredentialPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tde_credential_password RdsDbInstance#tde_credential_password}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

The time zone of the DB instance.

The time zone parameter is currently supported only by [RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-time-zone) and [RDS for SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#timezone RdsDbInstance#timezone}

---

##### `useDefaultProcessorFeatures`<sup>Optional</sup> <a name="useDefaultProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.useDefaultProcessorFeatures"></a>

```typescript
public readonly useDefaultProcessorFeatures: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the DB instance class of the DB instance uses its default processor features.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#use_default_processor_features RdsDbInstance#use_default_processor_features}

---

##### `useLatestRestorableTime`<sup>Optional</sup> <a name="useLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.useLatestRestorableTime"></a>

```typescript
public readonly useLatestRestorableTime: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the DB instance is restored from the latest backup time.

By default, the DB instance isn't restored from the latest backup time. This parameter applies to point-in-time recovery. For more information, see [Restoring a DB instance to a specified time](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html) in the in the *Amazon RDS User Guide*.
 Constraints:
  +  Can't be specified if the ``RestoreTime`` parameter is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#use_latest_restorable_time RdsDbInstance#use_latest_restorable_time}

---

##### `vpcSecurityGroups`<sup>Optional</sup> <a name="vpcSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.vpcSecurityGroups"></a>

```typescript
public readonly vpcSecurityGroups: string[];
```

- *Type:* string[]

A list of the VPC security group IDs to assign to the DB instance.

The list can include both the physical IDs of existing VPC security groups and references to [AWS::EC2::SecurityGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html) resources created in the template.
 If you plan to update the resource, don't specify VPC security groups in a shared VPC.
  If you set ``VPCSecurityGroups``, you must not set [DBSecurityGroups](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups), and vice versa.
  You can migrate a DB instance in your stack from an RDS DB security group to a VPC security group, but keep the following in mind:
  +  You can't revert to using an RDS security group after you establish a VPC security group membership.
  +  When you migrate your DB instance to VPC security groups, if your stack update rolls back because the DB instance update fails or because an update fails in another AWS CloudFormation resource, the rollback fails because it can't revert to an RDS security group.
  +  To use the properties that are available when you use a VPC security group, you must recreate the DB instance. If you don't, AWS CloudFormation submits only the property values that are listed in the [DBSecurityGroups](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups) property.
  
  To avoid this situation, migrate your DB instance to using VPC security groups only when that is the only change in your stack template. 
  *Amazon Aurora* 
 Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. If specified, the setting must match the DB cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#vpc_security_groups RdsDbInstance#vpc_security_groups}

---

### RdsDbInstanceEndpoint <a name="RdsDbInstanceEndpoint" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpoint.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

const rdsDbInstanceEndpoint: rdsDbInstance.RdsDbInstanceEndpoint = { ... }
```


### RdsDbInstanceListenerEndpoint <a name="RdsDbInstanceListenerEndpoint" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpoint.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

const rdsDbInstanceListenerEndpoint: rdsDbInstance.RdsDbInstanceListenerEndpoint = { ... }
```


### RdsDbInstanceMasterUserSecret <a name="RdsDbInstanceMasterUserSecret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

const rdsDbInstanceMasterUserSecret: rdsDbInstance.RdsDbInstanceMasterUserSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The AWS KMS key identifier that is used to encrypt the secret. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The AWS KMS key identifier that is used to encrypt the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#kms_key_id RdsDbInstance#kms_key_id}

---

### RdsDbInstanceProcessorFeatures <a name="RdsDbInstanceProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

const rdsDbInstanceProcessorFeatures: rdsDbInstance.RdsDbInstanceProcessorFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.property.name">name</a></code> | <code>string</code> | The name of the processor feature. Valid names are ``coreCount`` and ``threadsPerCore``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.property.value">value</a></code> | <code>string</code> | The value of a processor feature. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the processor feature. Valid names are ``coreCount`` and ``threadsPerCore``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#name RdsDbInstance#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of a processor feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#value RdsDbInstance#value}

---

### RdsDbInstanceStatusInfos <a name="RdsDbInstanceStatusInfos" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfos.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

const rdsDbInstanceStatusInfos: rdsDbInstance.RdsDbInstanceStatusInfos = { ... }
```


### RdsDbInstanceTags <a name="RdsDbInstanceTags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

const rdsDbInstanceTags: rdsDbInstance.RdsDbInstanceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.property.key">key</a></code> | <code>string</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.property.value">value</a></code> | <code>string</code> | A value is the optional value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#key RdsDbInstance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#value RdsDbInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbInstanceAdditionalStorageVolumesList <a name="RdsDbInstanceAdditionalStorageVolumesList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

new rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.get"></a>

```typescript
public get(index: number): RdsDbInstanceAdditionalStorageVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbInstanceAdditionalStorageVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>[]

---


### RdsDbInstanceAdditionalStorageVolumesOutputReference <a name="RdsDbInstanceAdditionalStorageVolumesOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

new rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetAllocatedStorage">resetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetMaxAllocatedStorage">resetMaxAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageOperationPercentProgress">resetStorageOperationPercentProgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageOperationStatus">resetStorageOperationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageThroughput">resetStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetVolumeName">resetVolumeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllocatedStorage` <a name="resetAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetAllocatedStorage"></a>

```typescript
public resetAllocatedStorage(): void
```

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetMaxAllocatedStorage` <a name="resetMaxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetMaxAllocatedStorage"></a>

```typescript
public resetMaxAllocatedStorage(): void
```

##### `resetStorageOperationPercentProgress` <a name="resetStorageOperationPercentProgress" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageOperationPercentProgress"></a>

```typescript
public resetStorageOperationPercentProgress(): void
```

##### `resetStorageOperationStatus` <a name="resetStorageOperationStatus" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageOperationStatus"></a>

```typescript
public resetStorageOperationStatus(): void
```

##### `resetStorageThroughput` <a name="resetStorageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageThroughput"></a>

```typescript
public resetStorageThroughput(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageType"></a>

```typescript
public resetStorageType(): void
```

##### `resetVolumeName` <a name="resetVolumeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetVolumeName"></a>

```typescript
public resetVolumeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.allocatedStorageInput">allocatedStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.maxAllocatedStorageInput">maxAllocatedStorageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationPercentProgressInput">storageOperationPercentProgressInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationStatusInput">storageOperationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageThroughputInput">storageThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.allocatedStorage">allocatedStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.maxAllocatedStorage">maxAllocatedStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationPercentProgress">storageOperationPercentProgress</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationStatus">storageOperationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageThroughput">storageThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocatedStorageInput`<sup>Optional</sup> <a name="allocatedStorageInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.allocatedStorageInput"></a>

```typescript
public readonly allocatedStorageInput: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `maxAllocatedStorageInput`<sup>Optional</sup> <a name="maxAllocatedStorageInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.maxAllocatedStorageInput"></a>

```typescript
public readonly maxAllocatedStorageInput: number;
```

- *Type:* number

---

##### `storageOperationPercentProgressInput`<sup>Optional</sup> <a name="storageOperationPercentProgressInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationPercentProgressInput"></a>

```typescript
public readonly storageOperationPercentProgressInput: number;
```

- *Type:* number

---

##### `storageOperationStatusInput`<sup>Optional</sup> <a name="storageOperationStatusInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationStatusInput"></a>

```typescript
public readonly storageOperationStatusInput: string;
```

- *Type:* string

---

##### `storageThroughputInput`<sup>Optional</sup> <a name="storageThroughputInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageThroughputInput"></a>

```typescript
public readonly storageThroughputInput: number;
```

- *Type:* number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.volumeNameInput"></a>

```typescript
public readonly volumeNameInput: string;
```

- *Type:* string

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `maxAllocatedStorage`<sup>Required</sup> <a name="maxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.maxAllocatedStorage"></a>

```typescript
public readonly maxAllocatedStorage: number;
```

- *Type:* number

---

##### `storageOperationPercentProgress`<sup>Required</sup> <a name="storageOperationPercentProgress" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationPercentProgress"></a>

```typescript
public readonly storageOperationPercentProgress: number;
```

- *Type:* number

---

##### `storageOperationStatus`<sup>Required</sup> <a name="storageOperationStatus" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationStatus"></a>

```typescript
public readonly storageOperationStatus: string;
```

- *Type:* string

---

##### `storageThroughput`<sup>Required</sup> <a name="storageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageThroughput"></a>

```typescript
public readonly storageThroughput: number;
```

- *Type:* number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbInstanceAdditionalStorageVolumes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>

---


### RdsDbInstanceAssociatedRolesList <a name="RdsDbInstanceAssociatedRolesList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

new rdsDbInstance.RdsDbInstanceAssociatedRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.get"></a>

```typescript
public get(index: number): RdsDbInstanceAssociatedRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbInstanceAssociatedRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>[]

---


### RdsDbInstanceAssociatedRolesOutputReference <a name="RdsDbInstanceAssociatedRolesOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

new rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resetFeatureName">resetFeatureName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFeatureName` <a name="resetFeatureName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resetFeatureName"></a>

```typescript
public resetFeatureName(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.featureNameInput">featureNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.featureName">featureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `featureNameInput`<sup>Optional</sup> <a name="featureNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.featureNameInput"></a>

```typescript
public readonly featureNameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbInstanceAssociatedRoles;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>

---


### RdsDbInstanceCertificateDetailsOutputReference <a name="RdsDbInstanceCertificateDetailsOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

new rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.caIdentifier">caIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.validTill">validTill</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetails">RdsDbInstanceCertificateDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caIdentifier`<sup>Required</sup> <a name="caIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.caIdentifier"></a>

```typescript
public readonly caIdentifier: string;
```

- *Type:* string

---

##### `validTill`<sup>Required</sup> <a name="validTill" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.validTill"></a>

```typescript
public readonly validTill: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RdsDbInstanceCertificateDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetails">RdsDbInstanceCertificateDetails</a>

---


### RdsDbInstanceEndpointOutputReference <a name="RdsDbInstanceEndpointOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

new rdsDbInstance.RdsDbInstanceEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpoint">RdsDbInstanceEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RdsDbInstanceEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpoint">RdsDbInstanceEndpoint</a>

---


### RdsDbInstanceListenerEndpointOutputReference <a name="RdsDbInstanceListenerEndpointOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

new rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpoint">RdsDbInstanceListenerEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RdsDbInstanceListenerEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpoint">RdsDbInstanceListenerEndpoint</a>

---


### RdsDbInstanceMasterUserSecretOutputReference <a name="RdsDbInstanceMasterUserSecretOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

new rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbInstanceMasterUserSecret;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a>

---


### RdsDbInstanceProcessorFeaturesList <a name="RdsDbInstanceProcessorFeaturesList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

new rdsDbInstance.RdsDbInstanceProcessorFeaturesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.get"></a>

```typescript
public get(index: number): RdsDbInstanceProcessorFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbInstanceProcessorFeatures[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>[]

---


### RdsDbInstanceProcessorFeaturesOutputReference <a name="RdsDbInstanceProcessorFeaturesOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

new rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbInstanceProcessorFeatures;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>

---


### RdsDbInstanceStatusInfosList <a name="RdsDbInstanceStatusInfosList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

new rdsDbInstance.RdsDbInstanceStatusInfosList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.get"></a>

```typescript
public get(index: number): RdsDbInstanceStatusInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### RdsDbInstanceStatusInfosOutputReference <a name="RdsDbInstanceStatusInfosOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

new rdsDbInstance.RdsDbInstanceStatusInfosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.normal">normal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.statusType">statusType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfos">RdsDbInstanceStatusInfos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `normal`<sup>Required</sup> <a name="normal" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.normal"></a>

```typescript
public readonly normal: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusType`<sup>Required</sup> <a name="statusType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.statusType"></a>

```typescript
public readonly statusType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RdsDbInstanceStatusInfos;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfos">RdsDbInstanceStatusInfos</a>

---


### RdsDbInstanceTagsList <a name="RdsDbInstanceTagsList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

new rdsDbInstance.RdsDbInstanceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.get"></a>

```typescript
public get(index: number): RdsDbInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>[]

---


### RdsDbInstanceTagsOutputReference <a name="RdsDbInstanceTagsOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer"></a>

```typescript
import { rdsDbInstance } from '@cdktn/provider-awscc'

new rdsDbInstance.RdsDbInstanceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbInstanceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>

---



