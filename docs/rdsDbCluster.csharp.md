# `rdsDbCluster` Submodule <a name="`rdsDbCluster` Submodule" id="@cdktn/provider-awscc.rdsDbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbCluster <a name="RdsDbCluster" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster awscc_rds_db_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbCluster(Construct Scope, string Id, RdsDbClusterConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig">RdsDbClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig">RdsDbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putAssociatedRoles">PutAssociatedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putMasterUserSecret">PutMasterUserSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putScalingConfiguration">PutScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putServerlessV2ScalingConfiguration">PutServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAllocatedStorage">ResetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAssociatedRoles">ResetAssociatedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAvailabilityZones">ResetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetBacktrackWindow">ResetBacktrackWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetBackupRetentionPeriod">ResetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetClusterScalabilityType">ResetClusterScalabilityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetCopyTagsToSnapshot">ResetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDatabaseInsightsMode">ResetDatabaseInsightsMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterIdentifier">ResetDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterInstanceClass">ResetDbClusterInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterParameterGroupName">ResetDbClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbInstanceParameterGroupName">ResetDbInstanceParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbSubnetGroupName">ResetDbSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbSystemId">ResetDbSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDeleteAutomatedBackups">ResetDeleteAutomatedBackups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDomainIamRoleName">ResetDomainIamRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableCloudwatchLogsExports">ResetEnableCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableGlobalWriteForwarding">ResetEnableGlobalWriteForwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableHttpEndpoint">ResetEnableHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableIamDatabaseAuthentication">ResetEnableIamDatabaseAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableLocalWriteForwarding">ResetEnableLocalWriteForwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineLifecycleSupport">ResetEngineLifecycleSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineMode">ResetEngineMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetGlobalClusterIdentifier">ResetGlobalClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetManageMasterUserPassword">ResetManageMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserAuthenticationType">ResetMasterUserAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUsername">ResetMasterUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserPassword">ResetMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserSecret">ResetMasterUserSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMonitoringInterval">ResetMonitoringInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMonitoringRoleArn">ResetMonitoringRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsEnabled">ResetPerformanceInsightsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsKmsKeyId">ResetPerformanceInsightsKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsRetentionPeriod">ResetPerformanceInsightsRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPreferredBackupWindow">ResetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetReplicationSourceIdentifier">ResetReplicationSourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetRestoreToTime">ResetRestoreToTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetRestoreType">ResetRestoreType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetScalingConfiguration">ResetScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetServerlessV2ScalingConfiguration">ResetServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSnapshotIdentifier">ResetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceDbClusterIdentifier">ResetSourceDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceDbClusterResourceId">ResetSourceDbClusterResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceRegion">ResetSourceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetStorageEncrypted">ResetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetUseLatestRestorableTime">ResetUseLatestRestorableTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssociatedRoles` <a name="PutAssociatedRoles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putAssociatedRoles"></a>

```csharp
private void PutAssociatedRoles(IResolvable|RdsDbClusterAssociatedRoles[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putAssociatedRoles.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>[]

---

##### `PutMasterUserSecret` <a name="PutMasterUserSecret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putMasterUserSecret"></a>

```csharp
private void PutMasterUserSecret(RdsDbClusterMasterUserSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putMasterUserSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a>

---

##### `PutScalingConfiguration` <a name="PutScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putScalingConfiguration"></a>

```csharp
private void PutScalingConfiguration(RdsDbClusterScalingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a>

---

##### `PutServerlessV2ScalingConfiguration` <a name="PutServerlessV2ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putServerlessV2ScalingConfiguration"></a>

```csharp
private void PutServerlessV2ScalingConfiguration(RdsDbClusterServerlessV2ScalingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putServerlessV2ScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putTags"></a>

```csharp
private void PutTags(IResolvable|RdsDbClusterTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>[]

---

##### `ResetAllocatedStorage` <a name="ResetAllocatedStorage" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAllocatedStorage"></a>

```csharp
private void ResetAllocatedStorage()
```

##### `ResetAssociatedRoles` <a name="ResetAssociatedRoles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAssociatedRoles"></a>

```csharp
private void ResetAssociatedRoles()
```

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAutoMinorVersionUpgrade"></a>

```csharp
private void ResetAutoMinorVersionUpgrade()
```

##### `ResetAvailabilityZones` <a name="ResetAvailabilityZones" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAvailabilityZones"></a>

```csharp
private void ResetAvailabilityZones()
```

##### `ResetBacktrackWindow` <a name="ResetBacktrackWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetBacktrackWindow"></a>

```csharp
private void ResetBacktrackWindow()
```

##### `ResetBackupRetentionPeriod` <a name="ResetBackupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetBackupRetentionPeriod"></a>

```csharp
private void ResetBackupRetentionPeriod()
```

##### `ResetClusterScalabilityType` <a name="ResetClusterScalabilityType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetClusterScalabilityType"></a>

```csharp
private void ResetClusterScalabilityType()
```

##### `ResetCopyTagsToSnapshot` <a name="ResetCopyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetCopyTagsToSnapshot"></a>

```csharp
private void ResetCopyTagsToSnapshot()
```

##### `ResetDatabaseInsightsMode` <a name="ResetDatabaseInsightsMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDatabaseInsightsMode"></a>

```csharp
private void ResetDatabaseInsightsMode()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetDbClusterIdentifier` <a name="ResetDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterIdentifier"></a>

```csharp
private void ResetDbClusterIdentifier()
```

##### `ResetDbClusterInstanceClass` <a name="ResetDbClusterInstanceClass" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterInstanceClass"></a>

```csharp
private void ResetDbClusterInstanceClass()
```

##### `ResetDbClusterParameterGroupName` <a name="ResetDbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterParameterGroupName"></a>

```csharp
private void ResetDbClusterParameterGroupName()
```

##### `ResetDbInstanceParameterGroupName` <a name="ResetDbInstanceParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbInstanceParameterGroupName"></a>

```csharp
private void ResetDbInstanceParameterGroupName()
```

##### `ResetDbSubnetGroupName` <a name="ResetDbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbSubnetGroupName"></a>

```csharp
private void ResetDbSubnetGroupName()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbSystemId"></a>

```csharp
private void ResetDbSystemId()
```

##### `ResetDeleteAutomatedBackups` <a name="ResetDeleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDeleteAutomatedBackups"></a>

```csharp
private void ResetDeleteAutomatedBackups()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetDomainIamRoleName` <a name="ResetDomainIamRoleName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDomainIamRoleName"></a>

```csharp
private void ResetDomainIamRoleName()
```

##### `ResetEnableCloudwatchLogsExports` <a name="ResetEnableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableCloudwatchLogsExports"></a>

```csharp
private void ResetEnableCloudwatchLogsExports()
```

##### `ResetEnableGlobalWriteForwarding` <a name="ResetEnableGlobalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableGlobalWriteForwarding"></a>

```csharp
private void ResetEnableGlobalWriteForwarding()
```

##### `ResetEnableHttpEndpoint` <a name="ResetEnableHttpEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableHttpEndpoint"></a>

```csharp
private void ResetEnableHttpEndpoint()
```

##### `ResetEnableIamDatabaseAuthentication` <a name="ResetEnableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableIamDatabaseAuthentication"></a>

```csharp
private void ResetEnableIamDatabaseAuthentication()
```

##### `ResetEnableLocalWriteForwarding` <a name="ResetEnableLocalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableLocalWriteForwarding"></a>

```csharp
private void ResetEnableLocalWriteForwarding()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngine"></a>

```csharp
private void ResetEngine()
```

##### `ResetEngineLifecycleSupport` <a name="ResetEngineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineLifecycleSupport"></a>

```csharp
private void ResetEngineLifecycleSupport()
```

##### `ResetEngineMode` <a name="ResetEngineMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineMode"></a>

```csharp
private void ResetEngineMode()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetGlobalClusterIdentifier` <a name="ResetGlobalClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetGlobalClusterIdentifier"></a>

```csharp
private void ResetGlobalClusterIdentifier()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetManageMasterUserPassword` <a name="ResetManageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetManageMasterUserPassword"></a>

```csharp
private void ResetManageMasterUserPassword()
```

##### `ResetMasterUserAuthenticationType` <a name="ResetMasterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserAuthenticationType"></a>

```csharp
private void ResetMasterUserAuthenticationType()
```

##### `ResetMasterUsername` <a name="ResetMasterUsername" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUsername"></a>

```csharp
private void ResetMasterUsername()
```

##### `ResetMasterUserPassword` <a name="ResetMasterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserPassword"></a>

```csharp
private void ResetMasterUserPassword()
```

##### `ResetMasterUserSecret` <a name="ResetMasterUserSecret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserSecret"></a>

```csharp
private void ResetMasterUserSecret()
```

##### `ResetMonitoringInterval` <a name="ResetMonitoringInterval" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMonitoringInterval"></a>

```csharp
private void ResetMonitoringInterval()
```

##### `ResetMonitoringRoleArn` <a name="ResetMonitoringRoleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMonitoringRoleArn"></a>

```csharp
private void ResetMonitoringRoleArn()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetPerformanceInsightsEnabled` <a name="ResetPerformanceInsightsEnabled" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsEnabled"></a>

```csharp
private void ResetPerformanceInsightsEnabled()
```

##### `ResetPerformanceInsightsKmsKeyId` <a name="ResetPerformanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsKmsKeyId"></a>

```csharp
private void ResetPerformanceInsightsKmsKeyId()
```

##### `ResetPerformanceInsightsRetentionPeriod` <a name="ResetPerformanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsRetentionPeriod"></a>

```csharp
private void ResetPerformanceInsightsRetentionPeriod()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPreferredBackupWindow` <a name="ResetPreferredBackupWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPreferredBackupWindow"></a>

```csharp
private void ResetPreferredBackupWindow()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPreferredMaintenanceWindow"></a>

```csharp
private void ResetPreferredMaintenanceWindow()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPubliclyAccessible"></a>

```csharp
private void ResetPubliclyAccessible()
```

##### `ResetReplicationSourceIdentifier` <a name="ResetReplicationSourceIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetReplicationSourceIdentifier"></a>

```csharp
private void ResetReplicationSourceIdentifier()
```

##### `ResetRestoreToTime` <a name="ResetRestoreToTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetRestoreToTime"></a>

```csharp
private void ResetRestoreToTime()
```

##### `ResetRestoreType` <a name="ResetRestoreType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetRestoreType"></a>

```csharp
private void ResetRestoreType()
```

##### `ResetScalingConfiguration` <a name="ResetScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetScalingConfiguration"></a>

```csharp
private void ResetScalingConfiguration()
```

##### `ResetServerlessV2ScalingConfiguration` <a name="ResetServerlessV2ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetServerlessV2ScalingConfiguration"></a>

```csharp
private void ResetServerlessV2ScalingConfiguration()
```

##### `ResetSnapshotIdentifier` <a name="ResetSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSnapshotIdentifier"></a>

```csharp
private void ResetSnapshotIdentifier()
```

##### `ResetSourceDbClusterIdentifier` <a name="ResetSourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceDbClusterIdentifier"></a>

```csharp
private void ResetSourceDbClusterIdentifier()
```

##### `ResetSourceDbClusterResourceId` <a name="ResetSourceDbClusterResourceId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceDbClusterResourceId"></a>

```csharp
private void ResetSourceDbClusterResourceId()
```

##### `ResetSourceRegion` <a name="ResetSourceRegion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceRegion"></a>

```csharp
private void ResetSourceRegion()
```

##### `ResetStorageEncrypted` <a name="ResetStorageEncrypted" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetStorageEncrypted"></a>

```csharp
private void ResetStorageEncrypted()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetStorageType"></a>

```csharp
private void ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUseLatestRestorableTime` <a name="ResetUseLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetUseLatestRestorableTime"></a>

```csharp
private void ResetUseLatestRestorableTime()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDbCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDbCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDbCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDbCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RdsDbCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsDbCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsDbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.associatedRoles">AssociatedRoles</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList">RdsDbClusterAssociatedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterArn">DbClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterResourceId">DbClusterResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference">RdsDbClusterEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserSecret">MasterUserSecret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference">RdsDbClusterMasterUserSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.readEndpoint">ReadEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference">RdsDbClusterReadEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.scalingConfiguration">ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference">RdsDbClusterScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.serverlessV2ScalingConfiguration">ServerlessV2ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference">RdsDbClusterServerlessV2ScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncryptionType">StorageEncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageThroughput">StorageThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList">RdsDbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.allocatedStorageInput">AllocatedStorageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.associatedRolesInput">AssociatedRolesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backtrackWindowInput">BacktrackWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backupRetentionPeriodInput">BackupRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.clusterScalabilityTypeInput">ClusterScalabilityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.copyTagsToSnapshotInput">CopyTagsToSnapshotInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseInsightsModeInput">DatabaseInsightsModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterIdentifierInput">DbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterInstanceClassInput">DbClusterInstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterParameterGroupNameInput">DbClusterParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbInstanceParameterGroupNameInput">DbInstanceParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSubnetGroupNameInput">DbSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deleteAutomatedBackupsInput">DeleteAutomatedBackupsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainIamRoleNameInput">DomainIamRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableCloudwatchLogsExportsInput">EnableCloudwatchLogsExportsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableGlobalWriteForwardingInput">EnableGlobalWriteForwardingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableHttpEndpointInput">EnableHttpEndpointInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableIamDatabaseAuthenticationInput">EnableIamDatabaseAuthenticationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableLocalWriteForwardingInput">EnableLocalWriteForwardingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineLifecycleSupportInput">EngineLifecycleSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineModeInput">EngineModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.globalClusterIdentifierInput">GlobalClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.manageMasterUserPasswordInput">ManageMasterUserPasswordInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserAuthenticationTypeInput">MasterUserAuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUsernameInput">MasterUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserPasswordInput">MasterUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserSecretInput">MasterUserSecretInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringIntervalInput">MonitoringIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringRoleArnInput">MonitoringRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsEnabledInput">PerformanceInsightsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsKmsKeyIdInput">PerformanceInsightsKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsRetentionPeriodInput">PerformanceInsightsRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredBackupWindowInput">PreferredBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.replicationSourceIdentifierInput">ReplicationSourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreToTimeInput">RestoreToTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreTypeInput">RestoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.scalingConfigurationInput">ScalingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.serverlessV2ScalingConfigurationInput">ServerlessV2ScalingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.snapshotIdentifierInput">SnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterIdentifierInput">SourceDbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterResourceIdInput">SourceDbClusterResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceRegionInput">SourceRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncryptedInput">StorageEncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.useLatestRestorableTimeInput">UseLatestRestorableTimeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backtrackWindow">BacktrackWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.clusterScalabilityType">ClusterScalabilityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseInsightsMode">DatabaseInsightsMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterInstanceClass">DbClusterInstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterParameterGroupName">DbClusterParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbInstanceParameterGroupName">DbInstanceParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deleteAutomatedBackups">DeleteAutomatedBackups</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainIamRoleName">DomainIamRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableCloudwatchLogsExports">EnableCloudwatchLogsExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableGlobalWriteForwarding">EnableGlobalWriteForwarding</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableHttpEndpoint">EnableHttpEndpoint</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableIamDatabaseAuthentication">EnableIamDatabaseAuthentication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableLocalWriteForwarding">EnableLocalWriteForwarding</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineLifecycleSupport">EngineLifecycleSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineMode">EngineMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.manageMasterUserPassword">ManageMasterUserPassword</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserAuthenticationType">MasterUserAuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUsername">MasterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserPassword">MasterUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringInterval">MonitoringInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringRoleArn">MonitoringRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsEnabled">PerformanceInsightsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsKmsKeyId">PerformanceInsightsKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsRetentionPeriod">PerformanceInsightsRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.replicationSourceIdentifier">ReplicationSourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreToTime">RestoreToTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreType">RestoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterIdentifier">SourceDbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterResourceId">SourceDbClusterResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceRegion">SourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncrypted">StorageEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociatedRoles`<sup>Required</sup> <a name="AssociatedRoles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.associatedRoles"></a>

```csharp
public RdsDbClusterAssociatedRolesList AssociatedRoles { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList">RdsDbClusterAssociatedRolesList</a>

---

##### `DbClusterArn`<sup>Required</sup> <a name="DbClusterArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterArn"></a>

```csharp
public string DbClusterArn { get; }
```

- *Type:* string

---

##### `DbClusterResourceId`<sup>Required</sup> <a name="DbClusterResourceId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterResourceId"></a>

```csharp
public string DbClusterResourceId { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.endpoint"></a>

```csharp
public RdsDbClusterEndpointOutputReference Endpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference">RdsDbClusterEndpointOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MasterUserSecret`<sup>Required</sup> <a name="MasterUserSecret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserSecret"></a>

```csharp
public RdsDbClusterMasterUserSecretOutputReference MasterUserSecret { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference">RdsDbClusterMasterUserSecretOutputReference</a>

---

##### `ReadEndpoint`<sup>Required</sup> <a name="ReadEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.readEndpoint"></a>

```csharp
public RdsDbClusterReadEndpointOutputReference ReadEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference">RdsDbClusterReadEndpointOutputReference</a>

---

##### `ScalingConfiguration`<sup>Required</sup> <a name="ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.scalingConfiguration"></a>

```csharp
public RdsDbClusterScalingConfigurationOutputReference ScalingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference">RdsDbClusterScalingConfigurationOutputReference</a>

---

##### `ServerlessV2ScalingConfiguration`<sup>Required</sup> <a name="ServerlessV2ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.serverlessV2ScalingConfiguration"></a>

```csharp
public RdsDbClusterServerlessV2ScalingConfigurationOutputReference ServerlessV2ScalingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference">RdsDbClusterServerlessV2ScalingConfigurationOutputReference</a>

---

##### `StorageEncryptionType`<sup>Required</sup> <a name="StorageEncryptionType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncryptionType"></a>

```csharp
public string StorageEncryptionType { get; }
```

- *Type:* string

---

##### `StorageThroughput`<sup>Required</sup> <a name="StorageThroughput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageThroughput"></a>

```csharp
public double StorageThroughput { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tags"></a>

```csharp
public RdsDbClusterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList">RdsDbClusterTagsList</a>

---

##### `AllocatedStorageInput`<sup>Optional</sup> <a name="AllocatedStorageInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.allocatedStorageInput"></a>

```csharp
public double AllocatedStorageInput { get; }
```

- *Type:* double

---

##### `AssociatedRolesInput`<sup>Optional</sup> <a name="AssociatedRolesInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.associatedRolesInput"></a>

```csharp
public IResolvable|RdsDbClusterAssociatedRoles[] AssociatedRolesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>[]

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.autoMinorVersionUpgradeInput"></a>

```csharp
public bool|IResolvable AutoMinorVersionUpgradeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.availabilityZonesInput"></a>

```csharp
public string[] AvailabilityZonesInput { get; }
```

- *Type:* string[]

---

##### `BacktrackWindowInput`<sup>Optional</sup> <a name="BacktrackWindowInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backtrackWindowInput"></a>

```csharp
public double BacktrackWindowInput { get; }
```

- *Type:* double

---

##### `BackupRetentionPeriodInput`<sup>Optional</sup> <a name="BackupRetentionPeriodInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backupRetentionPeriodInput"></a>

```csharp
public double BackupRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `ClusterScalabilityTypeInput`<sup>Optional</sup> <a name="ClusterScalabilityTypeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.clusterScalabilityTypeInput"></a>

```csharp
public string ClusterScalabilityTypeInput { get; }
```

- *Type:* string

---

##### `CopyTagsToSnapshotInput`<sup>Optional</sup> <a name="CopyTagsToSnapshotInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.copyTagsToSnapshotInput"></a>

```csharp
public bool|IResolvable CopyTagsToSnapshotInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatabaseInsightsModeInput`<sup>Optional</sup> <a name="DatabaseInsightsModeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseInsightsModeInput"></a>

```csharp
public string DatabaseInsightsModeInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DbClusterIdentifierInput`<sup>Optional</sup> <a name="DbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterIdentifierInput"></a>

```csharp
public string DbClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `DbClusterInstanceClassInput`<sup>Optional</sup> <a name="DbClusterInstanceClassInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterInstanceClassInput"></a>

```csharp
public string DbClusterInstanceClassInput { get; }
```

- *Type:* string

---

##### `DbClusterParameterGroupNameInput`<sup>Optional</sup> <a name="DbClusterParameterGroupNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterParameterGroupNameInput"></a>

```csharp
public string DbClusterParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `DbInstanceParameterGroupNameInput`<sup>Optional</sup> <a name="DbInstanceParameterGroupNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbInstanceParameterGroupNameInput"></a>

```csharp
public string DbInstanceParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `DbSubnetGroupNameInput`<sup>Optional</sup> <a name="DbSubnetGroupNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSubnetGroupNameInput"></a>

```csharp
public string DbSubnetGroupNameInput { get; }
```

- *Type:* string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSystemIdInput"></a>

```csharp
public string DbSystemIdInput { get; }
```

- *Type:* string

---

##### `DeleteAutomatedBackupsInput`<sup>Optional</sup> <a name="DeleteAutomatedBackupsInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deleteAutomatedBackupsInput"></a>

```csharp
public bool|IResolvable DeleteAutomatedBackupsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deletionProtectionInput"></a>

```csharp
public bool|IResolvable DeletionProtectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DomainIamRoleNameInput`<sup>Optional</sup> <a name="DomainIamRoleNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainIamRoleNameInput"></a>

```csharp
public string DomainIamRoleNameInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `EnableCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="EnableCloudwatchLogsExportsInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableCloudwatchLogsExportsInput"></a>

```csharp
public string[] EnableCloudwatchLogsExportsInput { get; }
```

- *Type:* string[]

---

##### `EnableGlobalWriteForwardingInput`<sup>Optional</sup> <a name="EnableGlobalWriteForwardingInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableGlobalWriteForwardingInput"></a>

```csharp
public bool|IResolvable EnableGlobalWriteForwardingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableHttpEndpointInput`<sup>Optional</sup> <a name="EnableHttpEndpointInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableHttpEndpointInput"></a>

```csharp
public bool|IResolvable EnableHttpEndpointInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableIamDatabaseAuthenticationInput`<sup>Optional</sup> <a name="EnableIamDatabaseAuthenticationInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableIamDatabaseAuthenticationInput"></a>

```csharp
public bool|IResolvable EnableIamDatabaseAuthenticationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableLocalWriteForwardingInput`<sup>Optional</sup> <a name="EnableLocalWriteForwardingInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableLocalWriteForwardingInput"></a>

```csharp
public bool|IResolvable EnableLocalWriteForwardingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `EngineLifecycleSupportInput`<sup>Optional</sup> <a name="EngineLifecycleSupportInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineLifecycleSupportInput"></a>

```csharp
public string EngineLifecycleSupportInput { get; }
```

- *Type:* string

---

##### `EngineModeInput`<sup>Optional</sup> <a name="EngineModeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineModeInput"></a>

```csharp
public string EngineModeInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `GlobalClusterIdentifierInput`<sup>Optional</sup> <a name="GlobalClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.globalClusterIdentifierInput"></a>

```csharp
public string GlobalClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ManageMasterUserPasswordInput`<sup>Optional</sup> <a name="ManageMasterUserPasswordInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.manageMasterUserPasswordInput"></a>

```csharp
public bool|IResolvable ManageMasterUserPasswordInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MasterUserAuthenticationTypeInput`<sup>Optional</sup> <a name="MasterUserAuthenticationTypeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserAuthenticationTypeInput"></a>

```csharp
public string MasterUserAuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `MasterUsernameInput`<sup>Optional</sup> <a name="MasterUsernameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUsernameInput"></a>

```csharp
public string MasterUsernameInput { get; }
```

- *Type:* string

---

##### `MasterUserPasswordInput`<sup>Optional</sup> <a name="MasterUserPasswordInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserPasswordInput"></a>

```csharp
public string MasterUserPasswordInput { get; }
```

- *Type:* string

---

##### `MasterUserSecretInput`<sup>Optional</sup> <a name="MasterUserSecretInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserSecretInput"></a>

```csharp
public IResolvable|RdsDbClusterMasterUserSecret MasterUserSecretInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a>

---

##### `MonitoringIntervalInput`<sup>Optional</sup> <a name="MonitoringIntervalInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringIntervalInput"></a>

```csharp
public double MonitoringIntervalInput { get; }
```

- *Type:* double

---

##### `MonitoringRoleArnInput`<sup>Optional</sup> <a name="MonitoringRoleArnInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringRoleArnInput"></a>

```csharp
public string MonitoringRoleArnInput { get; }
```

- *Type:* string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `PerformanceInsightsEnabledInput`<sup>Optional</sup> <a name="PerformanceInsightsEnabledInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsEnabledInput"></a>

```csharp
public bool|IResolvable PerformanceInsightsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PerformanceInsightsKmsKeyIdInput`<sup>Optional</sup> <a name="PerformanceInsightsKmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsKmsKeyIdInput"></a>

```csharp
public string PerformanceInsightsKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `PerformanceInsightsRetentionPeriodInput`<sup>Optional</sup> <a name="PerformanceInsightsRetentionPeriodInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsRetentionPeriodInput"></a>

```csharp
public double PerformanceInsightsRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PreferredBackupWindowInput`<sup>Optional</sup> <a name="PreferredBackupWindowInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredBackupWindowInput"></a>

```csharp
public string PreferredBackupWindowInput { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredMaintenanceWindowInput"></a>

```csharp
public string PreferredMaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.publiclyAccessibleInput"></a>

```csharp
public bool|IResolvable PubliclyAccessibleInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReplicationSourceIdentifierInput`<sup>Optional</sup> <a name="ReplicationSourceIdentifierInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.replicationSourceIdentifierInput"></a>

```csharp
public string ReplicationSourceIdentifierInput { get; }
```

- *Type:* string

---

##### `RestoreToTimeInput`<sup>Optional</sup> <a name="RestoreToTimeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreToTimeInput"></a>

```csharp
public string RestoreToTimeInput { get; }
```

- *Type:* string

---

##### `RestoreTypeInput`<sup>Optional</sup> <a name="RestoreTypeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreTypeInput"></a>

```csharp
public string RestoreTypeInput { get; }
```

- *Type:* string

---

##### `ScalingConfigurationInput`<sup>Optional</sup> <a name="ScalingConfigurationInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.scalingConfigurationInput"></a>

```csharp
public IResolvable|RdsDbClusterScalingConfiguration ScalingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a>

---

##### `ServerlessV2ScalingConfigurationInput`<sup>Optional</sup> <a name="ServerlessV2ScalingConfigurationInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.serverlessV2ScalingConfigurationInput"></a>

```csharp
public IResolvable|RdsDbClusterServerlessV2ScalingConfiguration ServerlessV2ScalingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a>

---

##### `SnapshotIdentifierInput`<sup>Optional</sup> <a name="SnapshotIdentifierInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.snapshotIdentifierInput"></a>

```csharp
public string SnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `SourceDbClusterIdentifierInput`<sup>Optional</sup> <a name="SourceDbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterIdentifierInput"></a>

```csharp
public string SourceDbClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `SourceDbClusterResourceIdInput`<sup>Optional</sup> <a name="SourceDbClusterResourceIdInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterResourceIdInput"></a>

```csharp
public string SourceDbClusterResourceIdInput { get; }
```

- *Type:* string

---

##### `SourceRegionInput`<sup>Optional</sup> <a name="SourceRegionInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceRegionInput"></a>

```csharp
public string SourceRegionInput { get; }
```

- *Type:* string

---

##### `StorageEncryptedInput`<sup>Optional</sup> <a name="StorageEncryptedInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncryptedInput"></a>

```csharp
public bool|IResolvable StorageEncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tagsInput"></a>

```csharp
public IResolvable|RdsDbClusterTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>[]

---

##### `UseLatestRestorableTimeInput`<sup>Optional</sup> <a name="UseLatestRestorableTimeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.useLatestRestorableTimeInput"></a>

```csharp
public bool|IResolvable UseLatestRestorableTimeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; }
```

- *Type:* double

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.autoMinorVersionUpgrade"></a>

```csharp
public bool|IResolvable AutoMinorVersionUpgrade { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `BacktrackWindow`<sup>Required</sup> <a name="BacktrackWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backtrackWindow"></a>

```csharp
public double BacktrackWindow { get; }
```

- *Type:* double

---

##### `BackupRetentionPeriod`<sup>Required</sup> <a name="BackupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backupRetentionPeriod"></a>

```csharp
public double BackupRetentionPeriod { get; }
```

- *Type:* double

---

##### `ClusterScalabilityType`<sup>Required</sup> <a name="ClusterScalabilityType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.clusterScalabilityType"></a>

```csharp
public string ClusterScalabilityType { get; }
```

- *Type:* string

---

##### `CopyTagsToSnapshot`<sup>Required</sup> <a name="CopyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.copyTagsToSnapshot"></a>

```csharp
public bool|IResolvable CopyTagsToSnapshot { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatabaseInsightsMode`<sup>Required</sup> <a name="DatabaseInsightsMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseInsightsMode"></a>

```csharp
public string DatabaseInsightsMode { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DbClusterIdentifier`<sup>Required</sup> <a name="DbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterIdentifier"></a>

```csharp
public string DbClusterIdentifier { get; }
```

- *Type:* string

---

##### `DbClusterInstanceClass`<sup>Required</sup> <a name="DbClusterInstanceClass" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterInstanceClass"></a>

```csharp
public string DbClusterInstanceClass { get; }
```

- *Type:* string

---

##### `DbClusterParameterGroupName`<sup>Required</sup> <a name="DbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterParameterGroupName"></a>

```csharp
public string DbClusterParameterGroupName { get; }
```

- *Type:* string

---

##### `DbInstanceParameterGroupName`<sup>Required</sup> <a name="DbInstanceParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbInstanceParameterGroupName"></a>

```csharp
public string DbInstanceParameterGroupName { get; }
```

- *Type:* string

---

##### `DbSubnetGroupName`<sup>Required</sup> <a name="DbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSubnetGroupName"></a>

```csharp
public string DbSubnetGroupName { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `DeleteAutomatedBackups`<sup>Required</sup> <a name="DeleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deleteAutomatedBackups"></a>

```csharp
public bool|IResolvable DeleteAutomatedBackups { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `DomainIamRoleName`<sup>Required</sup> <a name="DomainIamRoleName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainIamRoleName"></a>

```csharp
public string DomainIamRoleName { get; }
```

- *Type:* string

---

##### `EnableCloudwatchLogsExports`<sup>Required</sup> <a name="EnableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableCloudwatchLogsExports"></a>

```csharp
public string[] EnableCloudwatchLogsExports { get; }
```

- *Type:* string[]

---

##### `EnableGlobalWriteForwarding`<sup>Required</sup> <a name="EnableGlobalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableGlobalWriteForwarding"></a>

```csharp
public bool|IResolvable EnableGlobalWriteForwarding { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableHttpEndpoint`<sup>Required</sup> <a name="EnableHttpEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableHttpEndpoint"></a>

```csharp
public bool|IResolvable EnableHttpEndpoint { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableIamDatabaseAuthentication`<sup>Required</sup> <a name="EnableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableIamDatabaseAuthentication"></a>

```csharp
public bool|IResolvable EnableIamDatabaseAuthentication { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableLocalWriteForwarding`<sup>Required</sup> <a name="EnableLocalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableLocalWriteForwarding"></a>

```csharp
public bool|IResolvable EnableLocalWriteForwarding { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineLifecycleSupport`<sup>Required</sup> <a name="EngineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineLifecycleSupport"></a>

```csharp
public string EngineLifecycleSupport { get; }
```

- *Type:* string

---

##### `EngineMode`<sup>Required</sup> <a name="EngineMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineMode"></a>

```csharp
public string EngineMode { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `GlobalClusterIdentifier`<sup>Required</sup> <a name="GlobalClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.globalClusterIdentifier"></a>

```csharp
public string GlobalClusterIdentifier { get; }
```

- *Type:* string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `ManageMasterUserPassword`<sup>Required</sup> <a name="ManageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.manageMasterUserPassword"></a>

```csharp
public bool|IResolvable ManageMasterUserPassword { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MasterUserAuthenticationType`<sup>Required</sup> <a name="MasterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserAuthenticationType"></a>

```csharp
public string MasterUserAuthenticationType { get; }
```

- *Type:* string

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUsername"></a>

```csharp
public string MasterUsername { get; }
```

- *Type:* string

---

##### `MasterUserPassword`<sup>Required</sup> <a name="MasterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserPassword"></a>

```csharp
public string MasterUserPassword { get; }
```

- *Type:* string

---

##### `MonitoringInterval`<sup>Required</sup> <a name="MonitoringInterval" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringInterval"></a>

```csharp
public double MonitoringInterval { get; }
```

- *Type:* double

---

##### `MonitoringRoleArn`<sup>Required</sup> <a name="MonitoringRoleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringRoleArn"></a>

```csharp
public string MonitoringRoleArn { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `PerformanceInsightsEnabled`<sup>Required</sup> <a name="PerformanceInsightsEnabled" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsEnabled"></a>

```csharp
public bool|IResolvable PerformanceInsightsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PerformanceInsightsKmsKeyId`<sup>Required</sup> <a name="PerformanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsKmsKeyId"></a>

```csharp
public string PerformanceInsightsKmsKeyId { get; }
```

- *Type:* string

---

##### `PerformanceInsightsRetentionPeriod`<sup>Required</sup> <a name="PerformanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsRetentionPeriod"></a>

```csharp
public double PerformanceInsightsRetentionPeriod { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredBackupWindow"></a>

```csharp
public string PreferredBackupWindow { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.publiclyAccessible"></a>

```csharp
public bool|IResolvable PubliclyAccessible { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReplicationSourceIdentifier`<sup>Required</sup> <a name="ReplicationSourceIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.replicationSourceIdentifier"></a>

```csharp
public string ReplicationSourceIdentifier { get; }
```

- *Type:* string

---

##### `RestoreToTime`<sup>Required</sup> <a name="RestoreToTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreToTime"></a>

```csharp
public string RestoreToTime { get; }
```

- *Type:* string

---

##### `RestoreType`<sup>Required</sup> <a name="RestoreType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreType"></a>

```csharp
public string RestoreType { get; }
```

- *Type:* string

---

##### `SnapshotIdentifier`<sup>Required</sup> <a name="SnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.snapshotIdentifier"></a>

```csharp
public string SnapshotIdentifier { get; }
```

- *Type:* string

---

##### `SourceDbClusterIdentifier`<sup>Required</sup> <a name="SourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterIdentifier"></a>

```csharp
public string SourceDbClusterIdentifier { get; }
```

- *Type:* string

---

##### `SourceDbClusterResourceId`<sup>Required</sup> <a name="SourceDbClusterResourceId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterResourceId"></a>

```csharp
public string SourceDbClusterResourceId { get; }
```

- *Type:* string

---

##### `SourceRegion`<sup>Required</sup> <a name="SourceRegion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceRegion"></a>

```csharp
public string SourceRegion { get; }
```

- *Type:* string

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncrypted"></a>

```csharp
public bool|IResolvable StorageEncrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `UseLatestRestorableTime`<sup>Required</sup> <a name="UseLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.useLatestRestorableTime"></a>

```csharp
public bool|IResolvable UseLatestRestorableTime { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbClusterAssociatedRoles <a name="RdsDbClusterAssociatedRoles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterAssociatedRoles {
    string FeatureName = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.property.featureName">FeatureName</a></code> | <code>string</code> | The name of the feature associated with the AWS Identity and Access Management (IAM) role. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster. |

---

##### `FeatureName`<sup>Optional</sup> <a name="FeatureName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.property.featureName"></a>

```csharp
public string FeatureName { get; set; }
```

- *Type:* string

The name of the feature associated with the AWS Identity and Access Management (IAM) role.

IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf. For the list of supported feature names, see the `SupportedFeatureNames` description in [DBEngineVersion](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html) in the *Amazon RDS API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#feature_name RdsDbCluster#feature_name}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#role_arn RdsDbCluster#role_arn}

---

### RdsDbClusterConfig <a name="RdsDbClusterConfig" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double AllocatedStorage = null,
    IResolvable|RdsDbClusterAssociatedRoles[] AssociatedRoles = null,
    bool|IResolvable AutoMinorVersionUpgrade = null,
    string[] AvailabilityZones = null,
    double BacktrackWindow = null,
    double BackupRetentionPeriod = null,
    string ClusterScalabilityType = null,
    bool|IResolvable CopyTagsToSnapshot = null,
    string DatabaseInsightsMode = null,
    string DatabaseName = null,
    string DbClusterIdentifier = null,
    string DbClusterInstanceClass = null,
    string DbClusterParameterGroupName = null,
    string DbInstanceParameterGroupName = null,
    string DbSubnetGroupName = null,
    string DbSystemId = null,
    bool|IResolvable DeleteAutomatedBackups = null,
    bool|IResolvable DeletionProtection = null,
    string Domain = null,
    string DomainIamRoleName = null,
    string[] EnableCloudwatchLogsExports = null,
    bool|IResolvable EnableGlobalWriteForwarding = null,
    bool|IResolvable EnableHttpEndpoint = null,
    bool|IResolvable EnableIamDatabaseAuthentication = null,
    bool|IResolvable EnableLocalWriteForwarding = null,
    string Engine = null,
    string EngineLifecycleSupport = null,
    string EngineMode = null,
    string EngineVersion = null,
    string GlobalClusterIdentifier = null,
    double Iops = null,
    string KmsKeyId = null,
    bool|IResolvable ManageMasterUserPassword = null,
    string MasterUserAuthenticationType = null,
    string MasterUsername = null,
    string MasterUserPassword = null,
    RdsDbClusterMasterUserSecret MasterUserSecret = null,
    double MonitoringInterval = null,
    string MonitoringRoleArn = null,
    string NetworkType = null,
    bool|IResolvable PerformanceInsightsEnabled = null,
    string PerformanceInsightsKmsKeyId = null,
    double PerformanceInsightsRetentionPeriod = null,
    double Port = null,
    string PreferredBackupWindow = null,
    string PreferredMaintenanceWindow = null,
    bool|IResolvable PubliclyAccessible = null,
    string ReplicationSourceIdentifier = null,
    string RestoreToTime = null,
    string RestoreType = null,
    RdsDbClusterScalingConfiguration ScalingConfiguration = null,
    RdsDbClusterServerlessV2ScalingConfiguration ServerlessV2ScalingConfiguration = null,
    string SnapshotIdentifier = null,
    string SourceDbClusterIdentifier = null,
    string SourceDbClusterResourceId = null,
    string SourceRegion = null,
    bool|IResolvable StorageEncrypted = null,
    string StorageType = null,
    IResolvable|RdsDbClusterTags[] Tags = null,
    bool|IResolvable UseLatestRestorableTime = null,
    string[] VpcSecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.associatedRoles">AssociatedRoles</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>[]</code> | Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | A list of Availability Zones (AZs) where instances in the DB cluster can be created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.backtrackWindow">BacktrackWindow</a></code> | <code>double</code> | The target backtrack window, in seconds. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>double</code> | The number of days for which automated backups are retained. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.clusterScalabilityType">ClusterScalabilityType</a></code> | <code>string</code> | Specifies the scalability mode of the Aurora DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.databaseInsightsMode">DatabaseInsightsMode</a></code> | <code>string</code> | The mode of Database Insights to enable for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | The name of your database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>string</code> | The DB cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterInstanceClass">DbClusterInstanceClass</a></code> | <code>string</code> | The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example ``db.m6gd.xlarge``. Not all DB instance classes are available in all AWS-Regions, or for all database engines.  For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.  This setting is required to create a Multi-AZ DB cluster.  Valid for Cluster Type: Multi-AZ DB clusters only. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterParameterGroupName">DbClusterParameterGroupName</a></code> | <code>string</code> | The name of the DB cluster parameter group to associate with this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbInstanceParameterGroupName">DbInstanceParameterGroupName</a></code> | <code>string</code> | The name of the DB parameter group to apply to all instances of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>string</code> | A DB subnet group that you want to associate with this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | Reserved for future use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.deleteAutomatedBackups">DeleteAutomatedBackups</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to remove automated backups immediately after the DB cluster is deleted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A value that indicates whether the DB cluster has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.domain">Domain</a></code> | <code>string</code> | Indicates the directory ID of the Active Directory to create the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.domainIamRoleName">DomainIamRoleName</a></code> | <code>string</code> | Specifies the name of the IAM role to use when making API calls to the Directory Service. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableCloudwatchLogsExports">EnableCloudwatchLogsExports</a></code> | <code>string[]</code> | The list of log types that need to be enabled for exporting to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableGlobalWriteForwarding">EnableGlobalWriteForwarding</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database). |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableHttpEndpoint">EnableHttpEndpoint</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to enable the HTTP endpoint for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableIamDatabaseAuthentication">EnableIamDatabaseAuthentication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableLocalWriteForwarding">EnableLocalWriteForwarding</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engine">Engine</a></code> | <code>string</code> | The name of the database engine to be used for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineLifecycleSupport">EngineLifecycleSupport</a></code> | <code>string</code> | The lifecycle type for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineMode">EngineMode</a></code> | <code>string</code> | The DB engine mode of the DB cluster, either ``provisioned`` or ``serverless``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | The version number of the database engine to use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>string</code> | If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.iops">Iops</a></code> | <code>double</code> | The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.manageMasterUserPassword">ManageMasterUserPassword</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to manage the master user password with AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserAuthenticationType">MasterUserAuthenticationType</a></code> | <code>string</code> | Specifies the authentication type for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUsername">MasterUsername</a></code> | <code>string</code> | The name of the master user for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserPassword">MasterUserPassword</a></code> | <code>string</code> | The master password for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserSecret">MasterUserSecret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a></code> | The secret managed by RDS in AWS Secrets Manager for the master user password. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.monitoringInterval">MonitoringInterval</a></code> | <code>double</code> | The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.monitoringRoleArn">MonitoringRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.networkType">NetworkType</a></code> | <code>string</code> | The network type of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsEnabled">PerformanceInsightsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to turn on Performance Insights for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsKmsKeyId">PerformanceInsightsKmsKeyId</a></code> | <code>string</code> | The AWS KMS key identifier for encryption of Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsRetentionPeriod">PerformanceInsightsRetentionPeriod</a></code> | <code>double</code> | The number of days to retain Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.port">Port</a></code> | <code>double</code> | The port number on which the DB instances in the DB cluster accept connections. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>string</code> | The daily time range during which automated backups are created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the DB cluster is publicly accessible. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.replicationSourceIdentifier">ReplicationSourceIdentifier</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.restoreToTime">RestoreToTime</a></code> | <code>string</code> | The date and time to restore the DB cluster to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.restoreType">RestoreType</a></code> | <code>string</code> | The type of restore to be performed. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.scalingConfiguration">ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a></code> | The scaling configuration of an Aurora Serverless v1 DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.serverlessV2ScalingConfiguration">ServerlessV2ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a></code> | The scaling configuration of an Aurora Serverless V2 DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>string</code> | The identifier for the DB snapshot or DB cluster snapshot to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceDbClusterIdentifier">SourceDbClusterIdentifier</a></code> | <code>string</code> | When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceDbClusterResourceId">SourceDbClusterResourceId</a></code> | <code>string</code> | The resource ID of the source DB cluster from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceRegion">SourceRegion</a></code> | <code>string</code> | The AWS Region which contains the source DB cluster when replicating a DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.storageEncrypted">StorageEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the DB cluster is encrypted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.storageType">StorageType</a></code> | <code>string</code> | The storage type to associate with the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>[]</code> | Tags to assign to the DB cluster.  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A value that indicates whether to restore the DB cluster to the latest restorable backup time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | A list of EC2 VPC security groups to associate with this DB cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllocatedStorage`<sup>Optional</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; set; }
```

- *Type:* double

The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.

Valid for Cluster Type: Multi-AZ DB clusters only
This setting is required to create a Multi-AZ DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#allocated_storage RdsDbCluster#allocated_storage}

---

##### `AssociatedRoles`<sup>Optional</sup> <a name="AssociatedRoles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.associatedRoles"></a>

```csharp
public IResolvable|RdsDbClusterAssociatedRoles[] AssociatedRoles { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>[]

Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster.

IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon Web Services on your behalf.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#associated_roles RdsDbCluster#associated_roles}

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.autoMinorVersionUpgrade"></a>

```csharp
public bool|IResolvable AutoMinorVersionUpgrade { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window.

By default, minor engine upgrades are applied automatically.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB cluster.
For more information about automatic minor version upgrades, see [Automatically upgrading the minor engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#auto_minor_version_upgrade RdsDbCluster#auto_minor_version_upgrade}

---

##### `AvailabilityZones`<sup>Optional</sup> <a name="AvailabilityZones" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; set; }
```

- *Type:* string[]

A list of Availability Zones (AZs) where instances in the DB cluster can be created.

For information on AWS Regions and Availability Zones, see [Choosing the Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#availability_zones RdsDbCluster#availability_zones}

---

##### `BacktrackWindow`<sup>Optional</sup> <a name="BacktrackWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.backtrackWindow"></a>

```csharp
public double BacktrackWindow { get; set; }
```

- *Type:* double

The target backtrack window, in seconds.

To disable backtracking, set this value to `0`.
Valid for Cluster Type: Aurora MySQL DB clusters only
Default: `0`
Constraints:

* If specified, this value must be set to a number from 0 to 259,200 (72 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#backtrack_window RdsDbCluster#backtrack_window}

---

##### `BackupRetentionPeriod`<sup>Optional</sup> <a name="BackupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.backupRetentionPeriod"></a>

```csharp
public double BackupRetentionPeriod { get; set; }
```

- *Type:* double

The number of days for which automated backups are retained.

Default: 1
Constraints:

* Must be a value from 1 to 35

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#backup_retention_period RdsDbCluster#backup_retention_period}

---

##### `ClusterScalabilityType`<sup>Optional</sup> <a name="ClusterScalabilityType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.clusterScalabilityType"></a>

```csharp
public string ClusterScalabilityType { get; set; }
```

- *Type:* string

Specifies the scalability mode of the Aurora DB cluster.

When set to `limitless`, the cluster operates as an Aurora Limitless Database, allowing you to create a DB shard group for horizontal scaling (sharding) capabilities. When set to `standard` (the default), the cluster uses normal DB instance creation.
*Important:* Automated backup retention isn't supported with Aurora Limitless Database clusters. If you set this property to `limitless`, you cannot set `DeleteAutomatedBackups` to `false`. To create a backup, use manual snapshots instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#cluster_scalability_type RdsDbCluster#cluster_scalability_type}

---

##### `CopyTagsToSnapshot`<sup>Optional</sup> <a name="CopyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.copyTagsToSnapshot"></a>

```csharp
public bool|IResolvable CopyTagsToSnapshot { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.

The default is not to copy them.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#copy_tags_to_snapshot RdsDbCluster#copy_tags_to_snapshot}

---

##### `DatabaseInsightsMode`<sup>Optional</sup> <a name="DatabaseInsightsMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.databaseInsightsMode"></a>

```csharp
public string DatabaseInsightsMode { get; set; }
```

- *Type:* string

The mode of Database Insights to enable for the DB cluster.

If you set this value to `advanced`, you must also set the `PerformanceInsightsEnabled` parameter to `true` and the `PerformanceInsightsRetentionPeriod` parameter to 465.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#database_insights_mode RdsDbCluster#database_insights_mode}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The name of your database.

If you don't provide a name, then Amazon RDS won't create a database in this DB cluster. For naming constraints, see [Naming Constraints](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#database_name RdsDbCluster#database_name}

---

##### `DbClusterIdentifier`<sup>Optional</sup> <a name="DbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterIdentifier"></a>

```csharp
public string DbClusterIdentifier { get; set; }
```

- *Type:* string

The DB cluster identifier.

This parameter is stored as a lowercase string.
Constraints:

* Must contain from 1 to 63 letters, numbers, or hyphens.
* First character must be a letter.
* Can't end with a hyphen or contain two consecutive hyphens.

Example: `my-cluster1`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#db_cluster_identifier RdsDbCluster#db_cluster_identifier}

---

##### `DbClusterInstanceClass`<sup>Optional</sup> <a name="DbClusterInstanceClass" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterInstanceClass"></a>

```csharp
public string DbClusterInstanceClass { get; set; }
```

- *Type:* string

The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example ``db.m6gd.xlarge``. Not all DB instance classes are available in all AWS-Regions, or for all database engines.  For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.  This setting is required to create a Multi-AZ DB cluster.  Valid for Cluster Type: Multi-AZ DB clusters only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#db_cluster_instance_class RdsDbCluster#db_cluster_instance_class}

---

##### `DbClusterParameterGroupName`<sup>Optional</sup> <a name="DbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterParameterGroupName"></a>

```csharp
public string DbClusterParameterGroupName { get; set; }
```

- *Type:* string

The name of the DB cluster parameter group to associate with this DB cluster.

If you apply a parameter group to an existing DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.
If you apply a change to parameter group associated with a stopped DB cluster, then the update stack waits until the DB cluster is started.
To list all of the available DB cluster parameter group names, use the following command:
`aws rds describe-db-cluster-parameter-groups --query "DBClusterParameterGroups[].DBClusterParameterGroupName" --output text`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#db_cluster_parameter_group_name RdsDbCluster#db_cluster_parameter_group_name}

---

##### `DbInstanceParameterGroupName`<sup>Optional</sup> <a name="DbInstanceParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbInstanceParameterGroupName"></a>

```csharp
public string DbInstanceParameterGroupName { get; set; }
```

- *Type:* string

The name of the DB parameter group to apply to all instances of the DB cluster.

When you apply a parameter group using the `DBInstanceParameterGroupName` parameter, the DB cluster isn't rebooted automatically. Also, parameter changes are applied immediately rather than during the next maintenance window.
Valid for Cluster Type: Aurora DB clusters only
Default: The existing name setting
Constraints:

* The DB parameter group must be in the same DB parameter group family as this DB cluster.
* The `DBInstanceParameterGroupName` parameter is valid in combination with the `AllowMajorVersionUpgrade` parameter for a major version upgrade only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#db_instance_parameter_group_name RdsDbCluster#db_instance_parameter_group_name}

---

##### `DbSubnetGroupName`<sup>Optional</sup> <a name="DbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbSubnetGroupName"></a>

```csharp
public string DbSubnetGroupName { get; set; }
```

- *Type:* string

A DB subnet group that you want to associate with this DB cluster.

If you are restoring a DB cluster to a point in time with `RestoreType` set to `copy-on-write`, and don't specify a DB subnet group name, then the DB cluster is restored with a default DB subnet group.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#db_subnet_group_name RdsDbCluster#db_subnet_group_name}

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; set; }
```

- *Type:* string

Reserved for future use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#db_system_id RdsDbCluster#db_system_id}

---

##### `DeleteAutomatedBackups`<sup>Optional</sup> <a name="DeleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.deleteAutomatedBackups"></a>

```csharp
public bool|IResolvable DeleteAutomatedBackups { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to remove automated backups immediately after the DB cluster is deleted.

This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB cluster is deleted, unless the AWS Backup policy specifies a point-in-time restore rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#delete_automated_backups RdsDbCluster#delete_automated_backups}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A value that indicates whether the DB cluster has deletion protection enabled.

The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#deletion_protection RdsDbCluster#deletion_protection}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Indicates the directory ID of the Active Directory to create the DB cluster.

For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster.
For more information, see [Kerberos authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#domain RdsDbCluster#domain}

---

##### `DomainIamRoleName`<sup>Optional</sup> <a name="DomainIamRoleName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.domainIamRoleName"></a>

```csharp
public string DomainIamRoleName { get; set; }
```

- *Type:* string

Specifies the name of the IAM role to use when making API calls to the Directory Service.

Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#domain_iam_role_name RdsDbCluster#domain_iam_role_name}

---

##### `EnableCloudwatchLogsExports`<sup>Optional</sup> <a name="EnableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableCloudwatchLogsExports"></a>

```csharp
public string[] EnableCloudwatchLogsExports { get; set; }
```

- *Type:* string[]

The list of log types that need to be enabled for exporting to CloudWatch Logs.

The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Aurora User Guide*.
*Aurora MySQL*
Valid values: `audit`, `error`, `general`, `slowquery`
*Aurora PostgreSQL*
Valid values: `postgresql`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#enable_cloudwatch_logs_exports RdsDbCluster#enable_cloudwatch_logs_exports}

---

##### `EnableGlobalWriteForwarding`<sup>Optional</sup> <a name="EnableGlobalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableGlobalWriteForwarding"></a>

```csharp
public bool|IResolvable EnableGlobalWriteForwarding { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database).

By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database.
You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster, and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by a global cluster API operation, but it does nothing until then.
Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#enable_global_write_forwarding RdsDbCluster#enable_global_write_forwarding}

---

##### `EnableHttpEndpoint`<sup>Optional</sup> <a name="EnableHttpEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableHttpEndpoint"></a>

```csharp
public bool|IResolvable EnableHttpEndpoint { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to enable the HTTP endpoint for the DB cluster.

By default, the HTTP endpoint isn't enabled.
When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the DB cluster. You can also query your database from inside the RDS console with the RDS query editor.
For more information, see [Using RDS Data API](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) in the *Amazon Aurora User Guide*.
Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#enable_http_endpoint RdsDbCluster#enable_http_endpoint}

---

##### `EnableIamDatabaseAuthentication`<sup>Optional</sup> <a name="EnableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableIamDatabaseAuthentication"></a>

```csharp
public bool|IResolvable EnableIamDatabaseAuthentication { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts.

By default, mapping is disabled.
For more information, see [IAM Database Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon Aurora User Guide.*
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#enable_iam_database_authentication RdsDbCluster#enable_iam_database_authentication}

---

##### `EnableLocalWriteForwarding`<sup>Optional</sup> <a name="EnableLocalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableLocalWriteForwarding"></a>

```csharp
public bool|IResolvable EnableLocalWriteForwarding { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster.

By default, write operations aren't allowed on reader DB instances.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#enable_local_write_forwarding RdsDbCluster#enable_local_write_forwarding}

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

The name of the database engine to be used for this DB cluster.

Valid Values:

* `aurora-mysql`
* `aurora-postgresql`
* `mysql`
* `postgres`

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#engine RdsDbCluster#engine}

---

##### `EngineLifecycleSupport`<sup>Optional</sup> <a name="EngineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineLifecycleSupport"></a>

```csharp
public string EngineLifecycleSupport { get; set; }
```

- *Type:* string

The lifecycle type for this DB cluster.

By default, this value is set to `open-source-rds-extended-support`, which enrolls your DB cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, creating the DB cluster will fail if the DB major version is past its end of standard support date.
You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections:

* Amazon Aurora - [Amazon RDS Extended Support with Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html) in the *Amazon Aurora User Guide*
* Amazon RDS - [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*

Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
Default: `open-source-rds-extended-support`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#engine_lifecycle_support RdsDbCluster#engine_lifecycle_support}

---

##### `EngineMode`<sup>Optional</sup> <a name="EngineMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineMode"></a>

```csharp
public string EngineMode { get; set; }
```

- *Type:* string

The DB engine mode of the DB cluster, either ``provisioned`` or ``serverless``.

The `serverless` engine mode only applies for Aurora Serverless v1 DB clusters. Aurora Serverless v2 DB clusters use the `provisioned` engine mode.
For information about limitations and requirements for Serverless DB clusters, see the following sections in the *Amazon Aurora User Guide*:

* [Limitations of Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations)
* [Requirements for Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.requirements.html)

Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#engine_mode RdsDbCluster#engine_mode}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

The version number of the database engine to use.

Don't use this property if your DB cluster is a member of a global database cluster. Instead, specify the `EngineVersion` property on the [AWS::RDS::GlobalCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html) resource. Major version upgrades aren't supported for individual members of a global cluster. Use `ModifyGlobalCluster` to upgrade all members of the global cluster.
To list all of the available engine versions for Aurora MySQL version 2 (5.7-compatible) and version 3 (8.0-compatible), use the following command:
`aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"`
You can supply either `5.7` or `8.0` to use the default engine version for Aurora MySQL version 2 or version 3, respectively.
To list all of the available engine versions for Aurora PostgreSQL, use the following command:
`aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"`
To list all of the available engine versions for RDS for MySQL, use the following command:
`aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion"`
To list all of the available engine versions for RDS for PostgreSQL, use the following command:
`aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion"`
*Aurora MySQL*
For information, see [Database engine updates for Amazon Aurora MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html) in the *Amazon Aurora User Guide*.
*Aurora PostgreSQL*
For information, see [Amazon Aurora PostgreSQL releases and engine versions](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.20180305.html) in the *Amazon Aurora User Guide*.
*MySQL*
For information, see [Amazon RDS for MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt) in the *Amazon RDS User Guide*.
*PostgreSQL*
For information, see [Amazon RDS for PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts) in the *Amazon RDS User Guide*.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#engine_version RdsDbCluster#engine_version}

---

##### `GlobalClusterIdentifier`<sup>Optional</sup> <a name="GlobalClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.globalClusterIdentifier"></a>

```csharp
public string GlobalClusterIdentifier { get; set; }
```

- *Type:* string

If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster.

To define the primary database cluster of the global cluster, use the [AWS::RDS::GlobalCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html) resource.
If you aren't configuring a global database cluster, don't specify this property.
To remove the DB cluster from a global database cluster, specify an empty value for the `GlobalClusterIdentifier` property.
For information about Aurora global databases, see [Working with Amazon Aurora Global Databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#global_cluster_identifier RdsDbCluster#global_cluster_identifier}

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.

For information about valid IOPS values, see [Provisioned IOPS storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
This setting is required to create a Multi-AZ DB cluster.
Valid for Cluster Type: Multi-AZ DB clusters only
Constraints:

* Must be a multiple between .5 and 50 of the storage amount for the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#iops RdsDbCluster#iops}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``.

If you enable the `StorageEncrypted` property but don't specify this property, the default KMS key is used. If you specify this property, you must set the `StorageEncrypted` property to `true`.
If you specify the `SnapshotIdentifier` property, the `StorageEncrypted` property value is inherited from the snapshot, and if the DB cluster is encrypted, the specified `KmsKeyId` property is used.
If you create a read replica of an encrypted DB cluster in another AWS Region, make sure to set `KmsKeyId` to a KMS key identifier that is valid in the destination AWS Region. This KMS key is used to encrypt the read replica in that AWS Region.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#kms_key_id RdsDbCluster#kms_key_id}

---

##### `ManageMasterUserPassword`<sup>Optional</sup> <a name="ManageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.manageMasterUserPassword"></a>

```csharp
public bool|IResolvable ManageMasterUserPassword { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to manage the master user password with AWS Secrets Manager.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Constraints:

* Can't manage the master user password with AWS Secrets Manager if `MasterUserPassword` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#manage_master_user_password RdsDbCluster#manage_master_user_password}

---

##### `MasterUserAuthenticationType`<sup>Optional</sup> <a name="MasterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserAuthenticationType"></a>

```csharp
public string MasterUserAuthenticationType { get; set; }
```

- *Type:* string

Specifies the authentication type for the master user.

With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB cluster.
You can specify one of the following values:

* `password` - Use standard database authentication with a password.
* `iam-db-auth` - Use IAM database authentication for the master user.

Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
This option is only valid for RDS for MySQL, RDS for MariaDB, RDS for PostgreSQL, Aurora MySQL, and Aurora PostgreSQL engines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#master_user_authentication_type RdsDbCluster#master_user_authentication_type}

---

##### `MasterUsername`<sup>Optional</sup> <a name="MasterUsername" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUsername"></a>

```csharp
public string MasterUsername { get; set; }
```

- *Type:* string

The name of the master user for the DB cluster.

If you specify the `SourceDBClusterIdentifier`, `SnapshotIdentifier`, or `GlobalClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#master_username RdsDbCluster#master_username}

---

##### `MasterUserPassword`<sup>Optional</sup> <a name="MasterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserPassword"></a>

```csharp
public string MasterUserPassword { get; set; }
```

- *Type:* string

The master password for the DB instance.

If you specify the `SourceDBClusterIdentifier`, `SnapshotIdentifier`, or `GlobalClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#master_user_password RdsDbCluster#master_user_password}

---

##### `MasterUserSecret`<sup>Optional</sup> <a name="MasterUserSecret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserSecret"></a>

```csharp
public RdsDbClusterMasterUserSecret MasterUserSecret { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a>

The secret managed by RDS in AWS Secrets Manager for the master user password.

When you restore a DB cluster from a snapshot, Amazon RDS generates a new secret instead of reusing the secret specified in the `SecretArn` property. This ensures that the restored DB cluster is securely managed with a dedicated secret. To maintain consistent integration with your application, you might need to update resource configurations to reference the newly created secret.
For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#master_user_secret RdsDbCluster#master_user_secret}

---

##### `MonitoringInterval`<sup>Optional</sup> <a name="MonitoringInterval" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.monitoringInterval"></a>

```csharp
public double MonitoringInterval { get; set; }
```

- *Type:* double

The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster.

To turn off collecting Enhanced Monitoring metrics, specify `0`.
If `MonitoringRoleArn` is specified, also set `MonitoringInterval` to a value other than `0`.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#monitoring_interval RdsDbCluster#monitoring_interval}

---

##### `MonitoringRoleArn`<sup>Optional</sup> <a name="MonitoringRoleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.monitoringRoleArn"></a>

```csharp
public string MonitoringRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.

An example is `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [Setting up and enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide*.
If `MonitoringInterval` is set to a value other than `0`, supply a `MonitoringRoleArn` value.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#monitoring_role_arn RdsDbCluster#monitoring_role_arn}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

The network type of the DB cluster.

Valid values:

* `IPV4`
* `DUAL`

The network type is determined by the `DBSubnetGroup` specified for the DB cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and IPv6 protocols (`DUAL`).
For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon Aurora User Guide.*
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#network_type RdsDbCluster#network_type}

---

##### `PerformanceInsightsEnabled`<sup>Optional</sup> <a name="PerformanceInsightsEnabled" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsEnabled"></a>

```csharp
public bool|IResolvable PerformanceInsightsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to turn on Performance Insights for the DB cluster.

For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#performance_insights_enabled RdsDbCluster#performance_insights_enabled}

---

##### `PerformanceInsightsKmsKeyId`<sup>Optional</sup> <a name="PerformanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsKmsKeyId"></a>

```csharp
public string PerformanceInsightsKmsKeyId { get; set; }
```

- *Type:* string

The AWS KMS key identifier for encryption of Performance Insights data.

The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
If you don't specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS-account. Your AWS-account has a different default KMS key for each AWS-Region.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#performance_insights_kms_key_id RdsDbCluster#performance_insights_kms_key_id}

---

##### `PerformanceInsightsRetentionPeriod`<sup>Optional</sup> <a name="PerformanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsRetentionPeriod"></a>

```csharp
public double PerformanceInsightsRetentionPeriod { get; set; }
```

- *Type:* double

The number of days to retain Performance Insights data.

When creating a DB cluster without enabling Performance Insights, you can't specify the parameter `PerformanceInsightsRetentionPeriod`.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Valid Values:

* `7`
* *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
* `731`

Default: `7` days
If you specify a retention period that isn't valid, such as `94`, Amazon RDS issues an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#performance_insights_retention_period RdsDbCluster#performance_insights_retention_period}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number on which the DB instances in the DB cluster accept connections.

Default:

* RDS for MySQL and Aurora MySQL - `3306`
* RDS for PostgreSQL and Aurora PostgreSQL - `5432`

The `No interruption` on update behavior only applies to DB clusters. If you are updating a DB instance, see [Port](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-port) for the AWS::RDS::DBInstance resource.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#port RdsDbCluster#port}

---

##### `PreferredBackupWindow`<sup>Optional</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.preferredBackupWindow"></a>

```csharp
public string PreferredBackupWindow { get; set; }
```

- *Type:* string

The daily time range during which automated backups are created.

For more information, see [Backup Window](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow) in the *Amazon Aurora User Guide.*
Constraints:

* Must be in the format `hh24:mi-hh24:mi`.
* Must be in Universal Coordinated Time (UTC).
* Must not conflict with the preferred maintenance window.
* Must be at least 30 minutes.

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#preferred_backup_window RdsDbCluster#preferred_backup_window}

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; set; }
```

- *Type:* string

The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

Format: `ddd:hh24:mi-ddd:hh24:mi`
The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [Maintaining an Amazon Aurora DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora) in the *Amazon Aurora User Guide.*
Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
Constraints: Minimum 30-minute window.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#preferred_maintenance_window RdsDbCluster#preferred_maintenance_window}

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.publiclyAccessible"></a>

```csharp
public bool|IResolvable PubliclyAccessible { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the DB cluster is publicly accessible.

Valid for Cluster Type: Multi-AZ DB clusters only
When the DB cluster is publicly accessible and you connect from outside of the DB cluster's virtual private cloud (VPC), its domain name system (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB cluster, the endpoint resolves to the private IP address. Access to the DB cluster is controlled by its security group settings.
When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.
The default behavior when `PubliclyAccessible` is not specified depends on whether a `DBSubnetGroup` is specified.
If `DBSubnetGroup` isn't specified, `PubliclyAccessible` defaults to `true`.
If `DBSubnetGroup` is specified, `PubliclyAccessible` defaults to `false` unless the value of `DBSubnetGroup` is `default`, in which case `PubliclyAccessible` defaults to `true`.
If `PubliclyAccessible` is true and the VPC that the `DBSubnetGroup` is in doesn't have an internet gateway attached to it, Amazon RDS returns an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#publicly_accessible RdsDbCluster#publicly_accessible}

---

##### `ReplicationSourceIdentifier`<sup>Optional</sup> <a name="ReplicationSourceIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.replicationSourceIdentifier"></a>

```csharp
public string ReplicationSourceIdentifier { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica.

Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#replication_source_identifier RdsDbCluster#replication_source_identifier}

---

##### `RestoreToTime`<sup>Optional</sup> <a name="RestoreToTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.restoreToTime"></a>

```csharp
public string RestoreToTime { get; set; }
```

- *Type:* string

The date and time to restore the DB cluster to.

Valid Values: Value must be a time in Universal Coordinated Time (UTC) format
Constraints:

* Must be before the latest restorable time for the DB instance
* Must be specified if `UseLatestRestorableTime` parameter isn't provided
* Can't be specified if the `UseLatestRestorableTime` parameter is enabled
* Can't be specified if the `RestoreType` parameter is `copy-on-write`

This property must be used with `SourceDBClusterIdentifier` property. The resulting cluster will have the identifier that matches the value of the `DBclusterIdentifier` property.
Example: `2015-03-07T23:45:00Z`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#restore_to_time RdsDbCluster#restore_to_time}

---

##### `RestoreType`<sup>Optional</sup> <a name="RestoreType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.restoreType"></a>

```csharp
public string RestoreType { get; set; }
```

- *Type:* string

The type of restore to be performed.

You can specify one of the following values:

* `full-copy` - The new DB cluster is restored as a full copy of the source DB cluster.
* `copy-on-write` - The new DB cluster is restored as a clone of the source DB cluster.

If you don't specify a `RestoreType` value, then the new DB cluster is restored as a full copy of the source DB cluster.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#restore_type RdsDbCluster#restore_type}

---

##### `ScalingConfiguration`<sup>Optional</sup> <a name="ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.scalingConfiguration"></a>

```csharp
public RdsDbClusterScalingConfiguration ScalingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a>

The scaling configuration of an Aurora Serverless v1 DB cluster.

This property is only supported for Aurora Serverless v1. For Aurora Serverless v2, Use the `ServerlessV2ScalingConfiguration` property.
Valid for: Aurora Serverless v1 DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#scaling_configuration RdsDbCluster#scaling_configuration}

---

##### `ServerlessV2ScalingConfiguration`<sup>Optional</sup> <a name="ServerlessV2ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.serverlessV2ScalingConfiguration"></a>

```csharp
public RdsDbClusterServerlessV2ScalingConfiguration ServerlessV2ScalingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a>

The scaling configuration of an Aurora Serverless V2 DB cluster.

This property is only supported for Aurora Serverless v2. For Aurora Serverless v1, Use the `ScalingConfiguration` property.
Valid for: Aurora Serverless v2 DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#serverless_v2_scaling_configuration RdsDbCluster#serverless_v2_scaling_configuration}

---

##### `SnapshotIdentifier`<sup>Optional</sup> <a name="SnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.snapshotIdentifier"></a>

```csharp
public string SnapshotIdentifier { get; set; }
```

- *Type:* string

The identifier for the DB snapshot or DB cluster snapshot to restore from.

You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.
After you restore a DB cluster with a `SnapshotIdentifier` property, you must specify the same `SnapshotIdentifier` property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed. However, if you don't specify the `SnapshotIdentifier` property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB cluster is restored from the specified `SnapshotIdentifier` property, and the original DB cluster is deleted.
If you specify the `SnapshotIdentifier` property to restore a DB cluster (as opposed to specifying it for DB cluster updates), then don't specify the following properties:

* `GlobalClusterIdentifier`
* `MasterUsername`
* `MasterUserPassword`
* `ReplicationSourceIdentifier`
* `RestoreType`
* `SourceDBClusterIdentifier`
* `SourceRegion`
* `StorageEncrypted` (for an encrypted snapshot)
* `UseLatestRestorableTime`

Constraints:

* Must match the identifier of an existing Snapshot.

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#snapshot_identifier RdsDbCluster#snapshot_identifier}

---

##### `SourceDbClusterIdentifier`<sup>Optional</sup> <a name="SourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceDbClusterIdentifier"></a>

```csharp
public string SourceDbClusterIdentifier { get; set; }
```

- *Type:* string

When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore.

Constraints:

* Must match the identifier of an existing DBCluster.
* Cannot be specified if `SourceDbClusterResourceId` is specified. You must specify either `SourceDBClusterIdentifier` or `SourceDbClusterResourceId`, but not both.

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#source_db_cluster_identifier RdsDbCluster#source_db_cluster_identifier}

---

##### `SourceDbClusterResourceId`<sup>Optional</sup> <a name="SourceDbClusterResourceId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceDbClusterResourceId"></a>

```csharp
public string SourceDbClusterResourceId { get; set; }
```

- *Type:* string

The resource ID of the source DB cluster from which to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#source_db_cluster_resource_id RdsDbCluster#source_db_cluster_resource_id}

---

##### `SourceRegion`<sup>Optional</sup> <a name="SourceRegion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceRegion"></a>

```csharp
public string SourceRegion { get; set; }
```

- *Type:* string

The AWS Region which contains the source DB cluster when replicating a DB cluster.

For example, `us-east-1`.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#source_region RdsDbCluster#source_region}

---

##### `StorageEncrypted`<sup>Optional</sup> <a name="StorageEncrypted" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.storageEncrypted"></a>

```csharp
public bool|IResolvable StorageEncrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the DB cluster is encrypted.

If you specify the `KmsKeyId` property, then you must enable encryption.
If you specify the `SourceDBClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the specified `KmsKeyId` property is used.
If you specify the `SnapshotIdentifier` and the specified snapshot is encrypted, don't specify this property. The value is inherited from the snapshot, and the specified `KmsKeyId` property is used.
If you specify the `SnapshotIdentifier` and the specified snapshot isn't encrypted, you can use this property to specify that the restored DB cluster is encrypted. Specify the `KmsKeyId` property for the KMS key to use for encryption. If you don't want the restored DB cluster to be encrypted, then don't set this property or set it to `false`.
If you specify both the `StorageEncrypted` and `SnapshotIdentifier` properties without specifying the `KmsKeyId` property, then the restored DB cluster inherits the encryption settings from the DB snapshot that provide.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#storage_encrypted RdsDbCluster#storage_encrypted}

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

The storage type to associate with the DB cluster.

For information on storage types for Aurora DB clusters, see [Storage configurations for Amazon Aurora DB clusters](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html#aurora-storage-type). For information on storage types for Multi-AZ DB clusters, see [Settings for creating Multi-AZ DB clusters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/create-multi-az-db-cluster.html#create-multi-az-db-cluster-settings).
This setting is required to create a Multi-AZ DB cluster.
When specified for a Multi-AZ DB cluster, a value for the `Iops` parameter is required.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Valid Values:

* Aurora DB clusters - `aurora | aurora-iopt1`
* Multi-AZ DB clusters - `io1 | io2 | gp3`

Default:

* Aurora DB clusters - `aurora`
* Multi-AZ DB clusters - `io1`

When you create an Aurora DB cluster with the storage type set to `aurora-iopt1`, the storage type is returned in the response. The storage type isn't returned when you set it to `aurora`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#storage_type RdsDbCluster#storage_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.tags"></a>

```csharp
public IResolvable|RdsDbClusterTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>[]

Tags to assign to the DB cluster.  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#tags RdsDbCluster#tags}

---

##### `UseLatestRestorableTime`<sup>Optional</sup> <a name="UseLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.useLatestRestorableTime"></a>

```csharp
public bool|IResolvable UseLatestRestorableTime { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A value that indicates whether to restore the DB cluster to the latest restorable backup time.

By default, the DB cluster is not restored to the latest restorable backup time.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#use_latest_restorable_time RdsDbCluster#use_latest_restorable_time}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

A list of EC2 VPC security groups to associate with this DB cluster.

If you plan to update the resource, don't specify VPC security groups in a shared VPC.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#vpc_security_group_ids RdsDbCluster#vpc_security_group_ids}

---

### RdsDbClusterEndpoint <a name="RdsDbClusterEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterEndpoint {

};
```


### RdsDbClusterMasterUserSecret <a name="RdsDbClusterMasterUserSecret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterMasterUserSecret {
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The AWS KMS key identifier that is used to encrypt the secret. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The AWS KMS key identifier that is used to encrypt the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#kms_key_id RdsDbCluster#kms_key_id}

---

### RdsDbClusterReadEndpoint <a name="RdsDbClusterReadEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterReadEndpoint {

};
```


### RdsDbClusterScalingConfiguration <a name="RdsDbClusterScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterScalingConfiguration {
    bool|IResolvable AutoPause = null,
    double MaxCapacity = null,
    double MinCapacity = null,
    double SecondsBeforeTimeout = null,
    double SecondsUntilAutoPause = null,
    string TimeoutAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.autoPause">AutoPause</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to allow or disallow automatic pause for an Aurora DB cluster in ``serverless`` DB engine mode. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | The maximum capacity for an Aurora DB cluster in ``serverless`` DB engine mode. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.minCapacity">MinCapacity</a></code> | <code>double</code> | The minimum capacity for an Aurora DB cluster in ``serverless`` DB engine mode. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.secondsBeforeTimeout">SecondsBeforeTimeout</a></code> | <code>double</code> | The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.secondsUntilAutoPause">SecondsUntilAutoPause</a></code> | <code>double</code> | The time, in seconds, before an Aurora DB cluster in ``serverless`` mode is paused. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.timeoutAction">TimeoutAction</a></code> | <code>string</code> | The action to take when the timeout is reached, either ``ForceApplyCapacityChange`` or ``RollbackCapacityChange``. |

---

##### `AutoPause`<sup>Optional</sup> <a name="AutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.autoPause"></a>

```csharp
public bool|IResolvable AutoPause { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to allow or disallow automatic pause for an Aurora DB cluster in ``serverless`` DB engine mode.

A DB cluster can be paused only when it's idle (it has no connections).
If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot. In this case, the DB cluster is restored when there is a request to connect to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#auto_pause RdsDbCluster#auto_pause}

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

The maximum capacity for an Aurora DB cluster in ``serverless`` DB engine mode.

For Aurora MySQL, valid capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, and `256`.
For Aurora PostgreSQL, valid capacity values are `2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`.
The maximum capacity must be greater than or equal to the minimum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#max_capacity RdsDbCluster#max_capacity}

---

##### `MinCapacity`<sup>Optional</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.minCapacity"></a>

```csharp
public double MinCapacity { get; set; }
```

- *Type:* double

The minimum capacity for an Aurora DB cluster in ``serverless`` DB engine mode.

For Aurora MySQL, valid capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, and `256`.
For Aurora PostgreSQL, valid capacity values are `2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`.
The minimum capacity must be less than or equal to the maximum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#min_capacity RdsDbCluster#min_capacity}

---

##### `SecondsBeforeTimeout`<sup>Optional</sup> <a name="SecondsBeforeTimeout" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.secondsBeforeTimeout"></a>

```csharp
public double SecondsBeforeTimeout { get; set; }
```

- *Type:* double

The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action.

The default is 300.
Specify a value between 60 and 600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#seconds_before_timeout RdsDbCluster#seconds_before_timeout}

---

##### `SecondsUntilAutoPause`<sup>Optional</sup> <a name="SecondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.secondsUntilAutoPause"></a>

```csharp
public double SecondsUntilAutoPause { get; set; }
```

- *Type:* double

The time, in seconds, before an Aurora DB cluster in ``serverless`` mode is paused.

Specify a value between 300 and 86,400 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#seconds_until_auto_pause RdsDbCluster#seconds_until_auto_pause}

---

##### `TimeoutAction`<sup>Optional</sup> <a name="TimeoutAction" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.timeoutAction"></a>

```csharp
public string TimeoutAction { get; set; }
```

- *Type:* string

The action to take when the timeout is reached, either ``ForceApplyCapacityChange`` or ``RollbackCapacityChange``.

`ForceApplyCapacityChange` sets the capacity to the specified value as soon as possible.
`RollbackCapacityChange`, the default, ignores the capacity change if a scaling point isn't found in the timeout period.
If you specify `ForceApplyCapacityChange`, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped.
For more information, see [Autoscaling for Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling) in the *Amazon Aurora User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#timeout_action RdsDbCluster#timeout_action}

---

### RdsDbClusterServerlessV2ScalingConfiguration <a name="RdsDbClusterServerlessV2ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterServerlessV2ScalingConfiguration {
    double MaxCapacity = null,
    double MinCapacity = null,
    double SecondsUntilAutoPause = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.minCapacity">MinCapacity</a></code> | <code>double</code> | The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.secondsUntilAutoPause">SecondsUntilAutoPause</a></code> | <code>double</code> | Specifies the number of seconds an Aurora Serverless v2 DB instance must be idle before Aurora attempts to automatically pause it. |

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.

You can specify ACU values in half-step increments, such as 40, 40.5, 41, and so on. The largest value that you can use is 128.
The maximum capacity must be higher than 0.5 ACUs. For more information, see [Choosing the maximum Aurora Serverless v2 capacity setting for a cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.setting-capacity.html#aurora-serverless-v2.max_capacity_considerations) in the *Amazon Aurora User Guide*.
Aurora automatically sets certain parameters for Aurora Serverless V2 DB instances to values that depend on the maximum ACU value in the capacity range. When you update the maximum capacity value, the `ParameterApplyStatus` value for the DB instance changes to `pending-reboot`. You can update the parameter values by rebooting the DB instance after changing the capacity range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#max_capacity RdsDbCluster#max_capacity}

---

##### `MinCapacity`<sup>Optional</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.minCapacity"></a>

```csharp
public double MinCapacity { get; set; }
```

- *Type:* double

The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.

You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on. For Aurora versions that support the Aurora Serverless v2 auto-pause feature, the smallest value that you can use is 0. For versions that don't support Aurora Serverless v2 auto-pause, the smallest value that you can use is 0.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#min_capacity RdsDbCluster#min_capacity}

---

##### `SecondsUntilAutoPause`<sup>Optional</sup> <a name="SecondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.secondsUntilAutoPause"></a>

```csharp
public double SecondsUntilAutoPause { get; set; }
```

- *Type:* double

Specifies the number of seconds an Aurora Serverless v2 DB instance must be idle before Aurora attempts to automatically pause it.

Specify a value between 300 seconds (five minutes) and 86,400 seconds (one day). The default is 300 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#seconds_until_auto_pause RdsDbCluster#seconds_until_auto_pause}

---

### RdsDbClusterTags <a name="RdsDbClusterTags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.property.key">Key</a></code> | <code>string</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.property.value">Value</a></code> | <code>string</code> | A value is the optional value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#key RdsDbCluster#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#value RdsDbCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbClusterAssociatedRolesList <a name="RdsDbClusterAssociatedRolesList" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterAssociatedRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.get"></a>

```csharp
private RdsDbClusterAssociatedRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.internalValue"></a>

```csharp
public IResolvable|RdsDbClusterAssociatedRoles[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>[]

---


### RdsDbClusterAssociatedRolesOutputReference <a name="RdsDbClusterAssociatedRolesOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterAssociatedRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resetFeatureName">ResetFeatureName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFeatureName` <a name="ResetFeatureName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resetFeatureName"></a>

```csharp
private void ResetFeatureName()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.featureNameInput">FeatureNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.featureName">FeatureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FeatureNameInput`<sup>Optional</sup> <a name="FeatureNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.featureNameInput"></a>

```csharp
public string FeatureNameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.featureName"></a>

```csharp
public string FeatureName { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RdsDbClusterAssociatedRoles InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>

---


### RdsDbClusterEndpointOutputReference <a name="RdsDbClusterEndpointOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpoint">RdsDbClusterEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.internalValue"></a>

```csharp
public RdsDbClusterEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpoint">RdsDbClusterEndpoint</a>

---


### RdsDbClusterMasterUserSecretOutputReference <a name="RdsDbClusterMasterUserSecretOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterMasterUserSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RdsDbClusterMasterUserSecret InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a>

---


### RdsDbClusterReadEndpointOutputReference <a name="RdsDbClusterReadEndpointOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterReadEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpoint">RdsDbClusterReadEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.internalValue"></a>

```csharp
public RdsDbClusterReadEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpoint">RdsDbClusterReadEndpoint</a>

---


### RdsDbClusterScalingConfigurationOutputReference <a name="RdsDbClusterScalingConfigurationOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterScalingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetAutoPause">ResetAutoPause</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetMinCapacity">ResetMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetSecondsBeforeTimeout">ResetSecondsBeforeTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetSecondsUntilAutoPause">ResetSecondsUntilAutoPause</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetTimeoutAction">ResetTimeoutAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoPause` <a name="ResetAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetAutoPause"></a>

```csharp
private void ResetAutoPause()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetMaxCapacity"></a>

```csharp
private void ResetMaxCapacity()
```

##### `ResetMinCapacity` <a name="ResetMinCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetMinCapacity"></a>

```csharp
private void ResetMinCapacity()
```

##### `ResetSecondsBeforeTimeout` <a name="ResetSecondsBeforeTimeout" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetSecondsBeforeTimeout"></a>

```csharp
private void ResetSecondsBeforeTimeout()
```

##### `ResetSecondsUntilAutoPause` <a name="ResetSecondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetSecondsUntilAutoPause"></a>

```csharp
private void ResetSecondsUntilAutoPause()
```

##### `ResetTimeoutAction` <a name="ResetTimeoutAction" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetTimeoutAction"></a>

```csharp
private void ResetTimeoutAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.autoPauseInput">AutoPauseInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsBeforeTimeoutInput">SecondsBeforeTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput">SecondsUntilAutoPauseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.timeoutActionInput">TimeoutActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.autoPause">AutoPause</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.minCapacity">MinCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsBeforeTimeout">SecondsBeforeTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsUntilAutoPause">SecondsUntilAutoPause</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.timeoutAction">TimeoutAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoPauseInput`<sup>Optional</sup> <a name="AutoPauseInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.autoPauseInput"></a>

```csharp
public bool|IResolvable AutoPauseInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.minCapacityInput"></a>

```csharp
public double MinCapacityInput { get; }
```

- *Type:* double

---

##### `SecondsBeforeTimeoutInput`<sup>Optional</sup> <a name="SecondsBeforeTimeoutInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsBeforeTimeoutInput"></a>

```csharp
public double SecondsBeforeTimeoutInput { get; }
```

- *Type:* double

---

##### `SecondsUntilAutoPauseInput`<sup>Optional</sup> <a name="SecondsUntilAutoPauseInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput"></a>

```csharp
public double SecondsUntilAutoPauseInput { get; }
```

- *Type:* double

---

##### `TimeoutActionInput`<sup>Optional</sup> <a name="TimeoutActionInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.timeoutActionInput"></a>

```csharp
public string TimeoutActionInput { get; }
```

- *Type:* string

---

##### `AutoPause`<sup>Required</sup> <a name="AutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.autoPause"></a>

```csharp
public bool|IResolvable AutoPause { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.minCapacity"></a>

```csharp
public double MinCapacity { get; }
```

- *Type:* double

---

##### `SecondsBeforeTimeout`<sup>Required</sup> <a name="SecondsBeforeTimeout" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsBeforeTimeout"></a>

```csharp
public double SecondsBeforeTimeout { get; }
```

- *Type:* double

---

##### `SecondsUntilAutoPause`<sup>Required</sup> <a name="SecondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsUntilAutoPause"></a>

```csharp
public double SecondsUntilAutoPause { get; }
```

- *Type:* double

---

##### `TimeoutAction`<sup>Required</sup> <a name="TimeoutAction" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.timeoutAction"></a>

```csharp
public string TimeoutAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RdsDbClusterScalingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a>

---


### RdsDbClusterServerlessV2ScalingConfigurationOutputReference <a name="RdsDbClusterServerlessV2ScalingConfigurationOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterServerlessV2ScalingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetMinCapacity">ResetMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetSecondsUntilAutoPause">ResetSecondsUntilAutoPause</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetMaxCapacity"></a>

```csharp
private void ResetMaxCapacity()
```

##### `ResetMinCapacity` <a name="ResetMinCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetMinCapacity"></a>

```csharp
private void ResetMinCapacity()
```

##### `ResetSecondsUntilAutoPause` <a name="ResetSecondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetSecondsUntilAutoPause"></a>

```csharp
private void ResetSecondsUntilAutoPause()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput">SecondsUntilAutoPauseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity">MinCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.secondsUntilAutoPause">SecondsUntilAutoPause</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput"></a>

```csharp
public double MinCapacityInput { get; }
```

- *Type:* double

---

##### `SecondsUntilAutoPauseInput`<sup>Optional</sup> <a name="SecondsUntilAutoPauseInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput"></a>

```csharp
public double SecondsUntilAutoPauseInput { get; }
```

- *Type:* double

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity"></a>

```csharp
public double MinCapacity { get; }
```

- *Type:* double

---

##### `SecondsUntilAutoPause`<sup>Required</sup> <a name="SecondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.secondsUntilAutoPause"></a>

```csharp
public double SecondsUntilAutoPause { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RdsDbClusterServerlessV2ScalingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a>

---


### RdsDbClusterTagsList <a name="RdsDbClusterTagsList" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.get"></a>

```csharp
private RdsDbClusterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.internalValue"></a>

```csharp
public IResolvable|RdsDbClusterTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>[]

---


### RdsDbClusterTagsOutputReference <a name="RdsDbClusterTagsOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RdsDbClusterTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>

---



