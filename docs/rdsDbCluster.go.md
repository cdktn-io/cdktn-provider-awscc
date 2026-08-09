# `rdsDbCluster` Submodule <a name="`rdsDbCluster` Submodule" id="@cdktn/provider-awscc.rdsDbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbCluster <a name="RdsDbCluster" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster awscc_rds_db_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

rdsdbcluster.NewRdsDbCluster(scope Construct, id *string, config RdsDbClusterConfig) RdsDbCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig">RdsDbClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssociatedRoles` <a name="PutAssociatedRoles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putAssociatedRoles"></a>

```go
func PutAssociatedRoles(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putAssociatedRoles.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMasterUserSecret` <a name="PutMasterUserSecret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putMasterUserSecret"></a>

```go
func PutMasterUserSecret(value RdsDbClusterMasterUserSecret)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putMasterUserSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a>

---

##### `PutScalingConfiguration` <a name="PutScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putScalingConfiguration"></a>

```go
func PutScalingConfiguration(value RdsDbClusterScalingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a>

---

##### `PutServerlessV2ScalingConfiguration` <a name="PutServerlessV2ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putServerlessV2ScalingConfiguration"></a>

```go
func PutServerlessV2ScalingConfiguration(value RdsDbClusterServerlessV2ScalingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putServerlessV2ScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllocatedStorage` <a name="ResetAllocatedStorage" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAllocatedStorage"></a>

```go
func ResetAllocatedStorage()
```

##### `ResetAssociatedRoles` <a name="ResetAssociatedRoles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAssociatedRoles"></a>

```go
func ResetAssociatedRoles()
```

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAutoMinorVersionUpgrade"></a>

```go
func ResetAutoMinorVersionUpgrade()
```

##### `ResetAvailabilityZones` <a name="ResetAvailabilityZones" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAvailabilityZones"></a>

```go
func ResetAvailabilityZones()
```

##### `ResetBacktrackWindow` <a name="ResetBacktrackWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetBacktrackWindow"></a>

```go
func ResetBacktrackWindow()
```

##### `ResetBackupRetentionPeriod` <a name="ResetBackupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetBackupRetentionPeriod"></a>

```go
func ResetBackupRetentionPeriod()
```

##### `ResetClusterScalabilityType` <a name="ResetClusterScalabilityType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetClusterScalabilityType"></a>

```go
func ResetClusterScalabilityType()
```

##### `ResetCopyTagsToSnapshot` <a name="ResetCopyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetCopyTagsToSnapshot"></a>

```go
func ResetCopyTagsToSnapshot()
```

##### `ResetDatabaseInsightsMode` <a name="ResetDatabaseInsightsMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDatabaseInsightsMode"></a>

```go
func ResetDatabaseInsightsMode()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetDbClusterIdentifier` <a name="ResetDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterIdentifier"></a>

```go
func ResetDbClusterIdentifier()
```

##### `ResetDbClusterInstanceClass` <a name="ResetDbClusterInstanceClass" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterInstanceClass"></a>

```go
func ResetDbClusterInstanceClass()
```

##### `ResetDbClusterParameterGroupName` <a name="ResetDbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterParameterGroupName"></a>

```go
func ResetDbClusterParameterGroupName()
```

##### `ResetDbInstanceParameterGroupName` <a name="ResetDbInstanceParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbInstanceParameterGroupName"></a>

```go
func ResetDbInstanceParameterGroupName()
```

##### `ResetDbSubnetGroupName` <a name="ResetDbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbSubnetGroupName"></a>

```go
func ResetDbSubnetGroupName()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbSystemId"></a>

```go
func ResetDbSystemId()
```

##### `ResetDeleteAutomatedBackups` <a name="ResetDeleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDeleteAutomatedBackups"></a>

```go
func ResetDeleteAutomatedBackups()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetDomainIamRoleName` <a name="ResetDomainIamRoleName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDomainIamRoleName"></a>

```go
func ResetDomainIamRoleName()
```

##### `ResetEnableCloudwatchLogsExports` <a name="ResetEnableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableCloudwatchLogsExports"></a>

```go
func ResetEnableCloudwatchLogsExports()
```

##### `ResetEnableGlobalWriteForwarding` <a name="ResetEnableGlobalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableGlobalWriteForwarding"></a>

```go
func ResetEnableGlobalWriteForwarding()
```

##### `ResetEnableHttpEndpoint` <a name="ResetEnableHttpEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableHttpEndpoint"></a>

```go
func ResetEnableHttpEndpoint()
```

##### `ResetEnableIamDatabaseAuthentication` <a name="ResetEnableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableIamDatabaseAuthentication"></a>

```go
func ResetEnableIamDatabaseAuthentication()
```

##### `ResetEnableLocalWriteForwarding` <a name="ResetEnableLocalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableLocalWriteForwarding"></a>

```go
func ResetEnableLocalWriteForwarding()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngine"></a>

```go
func ResetEngine()
```

##### `ResetEngineLifecycleSupport` <a name="ResetEngineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineLifecycleSupport"></a>

```go
func ResetEngineLifecycleSupport()
```

##### `ResetEngineMode` <a name="ResetEngineMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineMode"></a>

```go
func ResetEngineMode()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetGlobalClusterIdentifier` <a name="ResetGlobalClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetGlobalClusterIdentifier"></a>

```go
func ResetGlobalClusterIdentifier()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetManageMasterUserPassword` <a name="ResetManageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetManageMasterUserPassword"></a>

```go
func ResetManageMasterUserPassword()
```

##### `ResetMasterUserAuthenticationType` <a name="ResetMasterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserAuthenticationType"></a>

```go
func ResetMasterUserAuthenticationType()
```

##### `ResetMasterUsername` <a name="ResetMasterUsername" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUsername"></a>

```go
func ResetMasterUsername()
```

##### `ResetMasterUserPassword` <a name="ResetMasterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserPassword"></a>

```go
func ResetMasterUserPassword()
```

##### `ResetMasterUserSecret` <a name="ResetMasterUserSecret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserSecret"></a>

```go
func ResetMasterUserSecret()
```

##### `ResetMonitoringInterval` <a name="ResetMonitoringInterval" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMonitoringInterval"></a>

```go
func ResetMonitoringInterval()
```

##### `ResetMonitoringRoleArn` <a name="ResetMonitoringRoleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMonitoringRoleArn"></a>

```go
func ResetMonitoringRoleArn()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetNetworkType"></a>

```go
func ResetNetworkType()
```

##### `ResetPerformanceInsightsEnabled` <a name="ResetPerformanceInsightsEnabled" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsEnabled"></a>

```go
func ResetPerformanceInsightsEnabled()
```

##### `ResetPerformanceInsightsKmsKeyId` <a name="ResetPerformanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsKmsKeyId"></a>

```go
func ResetPerformanceInsightsKmsKeyId()
```

##### `ResetPerformanceInsightsRetentionPeriod` <a name="ResetPerformanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsRetentionPeriod"></a>

```go
func ResetPerformanceInsightsRetentionPeriod()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPreferredBackupWindow` <a name="ResetPreferredBackupWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPreferredBackupWindow"></a>

```go
func ResetPreferredBackupWindow()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPreferredMaintenanceWindow"></a>

```go
func ResetPreferredMaintenanceWindow()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPubliclyAccessible"></a>

```go
func ResetPubliclyAccessible()
```

##### `ResetReplicationSourceIdentifier` <a name="ResetReplicationSourceIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetReplicationSourceIdentifier"></a>

```go
func ResetReplicationSourceIdentifier()
```

##### `ResetRestoreToTime` <a name="ResetRestoreToTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetRestoreToTime"></a>

```go
func ResetRestoreToTime()
```

##### `ResetRestoreType` <a name="ResetRestoreType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetRestoreType"></a>

```go
func ResetRestoreType()
```

##### `ResetScalingConfiguration` <a name="ResetScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetScalingConfiguration"></a>

```go
func ResetScalingConfiguration()
```

##### `ResetServerlessV2ScalingConfiguration` <a name="ResetServerlessV2ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetServerlessV2ScalingConfiguration"></a>

```go
func ResetServerlessV2ScalingConfiguration()
```

##### `ResetSnapshotIdentifier` <a name="ResetSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSnapshotIdentifier"></a>

```go
func ResetSnapshotIdentifier()
```

##### `ResetSourceDbClusterIdentifier` <a name="ResetSourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceDbClusterIdentifier"></a>

```go
func ResetSourceDbClusterIdentifier()
```

##### `ResetSourceDbClusterResourceId` <a name="ResetSourceDbClusterResourceId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceDbClusterResourceId"></a>

```go
func ResetSourceDbClusterResourceId()
```

##### `ResetSourceRegion` <a name="ResetSourceRegion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceRegion"></a>

```go
func ResetSourceRegion()
```

##### `ResetStorageEncrypted` <a name="ResetStorageEncrypted" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetStorageEncrypted"></a>

```go
func ResetStorageEncrypted()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetStorageType"></a>

```go
func ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUseLatestRestorableTime` <a name="ResetUseLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetUseLatestRestorableTime"></a>

```go
func ResetUseLatestRestorableTime()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetVpcSecurityGroupIds"></a>

```go
func ResetVpcSecurityGroupIds()
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

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

rdsdbcluster.RdsDbCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

rdsdbcluster.RdsDbCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

rdsdbcluster.RdsDbCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

rdsdbcluster.RdsDbCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RdsDbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RdsDbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RdsDbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.associatedRoles">AssociatedRoles</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList">RdsDbClusterAssociatedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterArn">DbClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterResourceId">DbClusterResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference">RdsDbClusterEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserSecret">MasterUserSecret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference">RdsDbClusterMasterUserSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.readEndpoint">ReadEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference">RdsDbClusterReadEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.scalingConfiguration">ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference">RdsDbClusterScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.serverlessV2ScalingConfiguration">ServerlessV2ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference">RdsDbClusterServerlessV2ScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncryptionType">StorageEncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageThroughput">StorageThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList">RdsDbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.allocatedStorageInput">AllocatedStorageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.associatedRolesInput">AssociatedRolesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backtrackWindowInput">BacktrackWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backupRetentionPeriodInput">BackupRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.clusterScalabilityTypeInput">ClusterScalabilityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.copyTagsToSnapshotInput">CopyTagsToSnapshotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseInsightsModeInput">DatabaseInsightsModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterIdentifierInput">DbClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterInstanceClassInput">DbClusterInstanceClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterParameterGroupNameInput">DbClusterParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbInstanceParameterGroupNameInput">DbInstanceParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSubnetGroupNameInput">DbSubnetGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deleteAutomatedBackupsInput">DeleteAutomatedBackupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainIamRoleNameInput">DomainIamRoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableCloudwatchLogsExportsInput">EnableCloudwatchLogsExportsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableGlobalWriteForwardingInput">EnableGlobalWriteForwardingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableHttpEndpointInput">EnableHttpEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableIamDatabaseAuthenticationInput">EnableIamDatabaseAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableLocalWriteForwardingInput">EnableLocalWriteForwardingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineLifecycleSupportInput">EngineLifecycleSupportInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineModeInput">EngineModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.globalClusterIdentifierInput">GlobalClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.manageMasterUserPasswordInput">ManageMasterUserPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserAuthenticationTypeInput">MasterUserAuthenticationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUsernameInput">MasterUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserPasswordInput">MasterUserPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserSecretInput">MasterUserSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringIntervalInput">MonitoringIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringRoleArnInput">MonitoringRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.networkTypeInput">NetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsEnabledInput">PerformanceInsightsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsKmsKeyIdInput">PerformanceInsightsKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsRetentionPeriodInput">PerformanceInsightsRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredBackupWindowInput">PreferredBackupWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.replicationSourceIdentifierInput">ReplicationSourceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreToTimeInput">RestoreToTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreTypeInput">RestoreTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.scalingConfigurationInput">ScalingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.serverlessV2ScalingConfigurationInput">ServerlessV2ScalingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.snapshotIdentifierInput">SnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterIdentifierInput">SourceDbClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterResourceIdInput">SourceDbClusterResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceRegionInput">SourceRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncryptedInput">StorageEncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageTypeInput">StorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.useLatestRestorableTimeInput">UseLatestRestorableTimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.allocatedStorage">AllocatedStorage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backtrackWindow">BacktrackWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.clusterScalabilityType">ClusterScalabilityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseInsightsMode">DatabaseInsightsMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterInstanceClass">DbClusterInstanceClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterParameterGroupName">DbClusterParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbInstanceParameterGroupName">DbInstanceParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deleteAutomatedBackups">DeleteAutomatedBackups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainIamRoleName">DomainIamRoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableCloudwatchLogsExports">EnableCloudwatchLogsExports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableGlobalWriteForwarding">EnableGlobalWriteForwarding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableHttpEndpoint">EnableHttpEndpoint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableIamDatabaseAuthentication">EnableIamDatabaseAuthentication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableLocalWriteForwarding">EnableLocalWriteForwarding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineLifecycleSupport">EngineLifecycleSupport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineMode">EngineMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.manageMasterUserPassword">ManageMasterUserPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserAuthenticationType">MasterUserAuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUsername">MasterUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserPassword">MasterUserPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringInterval">MonitoringInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringRoleArn">MonitoringRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsEnabled">PerformanceInsightsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsKmsKeyId">PerformanceInsightsKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsRetentionPeriod">PerformanceInsightsRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.replicationSourceIdentifier">ReplicationSourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreToTime">RestoreToTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreType">RestoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterIdentifier">SourceDbClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterResourceId">SourceDbClusterResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceRegion">SourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncrypted">StorageEncrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedRoles`<sup>Required</sup> <a name="AssociatedRoles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.associatedRoles"></a>

```go
func AssociatedRoles() RdsDbClusterAssociatedRolesList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList">RdsDbClusterAssociatedRolesList</a>

---

##### `DbClusterArn`<sup>Required</sup> <a name="DbClusterArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterArn"></a>

```go
func DbClusterArn() *string
```

- *Type:* *string

---

##### `DbClusterResourceId`<sup>Required</sup> <a name="DbClusterResourceId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterResourceId"></a>

```go
func DbClusterResourceId() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.endpoint"></a>

```go
func Endpoint() RdsDbClusterEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference">RdsDbClusterEndpointOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MasterUserSecret`<sup>Required</sup> <a name="MasterUserSecret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserSecret"></a>

```go
func MasterUserSecret() RdsDbClusterMasterUserSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference">RdsDbClusterMasterUserSecretOutputReference</a>

---

##### `ReadEndpoint`<sup>Required</sup> <a name="ReadEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.readEndpoint"></a>

```go
func ReadEndpoint() RdsDbClusterReadEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference">RdsDbClusterReadEndpointOutputReference</a>

---

##### `ScalingConfiguration`<sup>Required</sup> <a name="ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.scalingConfiguration"></a>

```go
func ScalingConfiguration() RdsDbClusterScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference">RdsDbClusterScalingConfigurationOutputReference</a>

---

##### `ServerlessV2ScalingConfiguration`<sup>Required</sup> <a name="ServerlessV2ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.serverlessV2ScalingConfiguration"></a>

```go
func ServerlessV2ScalingConfiguration() RdsDbClusterServerlessV2ScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference">RdsDbClusterServerlessV2ScalingConfigurationOutputReference</a>

---

##### `StorageEncryptionType`<sup>Required</sup> <a name="StorageEncryptionType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncryptionType"></a>

```go
func StorageEncryptionType() *string
```

- *Type:* *string

---

##### `StorageThroughput`<sup>Required</sup> <a name="StorageThroughput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageThroughput"></a>

```go
func StorageThroughput() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tags"></a>

```go
func Tags() RdsDbClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList">RdsDbClusterTagsList</a>

---

##### `AllocatedStorageInput`<sup>Optional</sup> <a name="AllocatedStorageInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.allocatedStorageInput"></a>

```go
func AllocatedStorageInput() *f64
```

- *Type:* *f64

---

##### `AssociatedRolesInput`<sup>Optional</sup> <a name="AssociatedRolesInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.associatedRolesInput"></a>

```go
func AssociatedRolesInput() interface{}
```

- *Type:* interface{}

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.autoMinorVersionUpgradeInput"></a>

```go
func AutoMinorVersionUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.availabilityZonesInput"></a>

```go
func AvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BacktrackWindowInput`<sup>Optional</sup> <a name="BacktrackWindowInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backtrackWindowInput"></a>

```go
func BacktrackWindowInput() *f64
```

- *Type:* *f64

---

##### `BackupRetentionPeriodInput`<sup>Optional</sup> <a name="BackupRetentionPeriodInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backupRetentionPeriodInput"></a>

```go
func BackupRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `ClusterScalabilityTypeInput`<sup>Optional</sup> <a name="ClusterScalabilityTypeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.clusterScalabilityTypeInput"></a>

```go
func ClusterScalabilityTypeInput() *string
```

- *Type:* *string

---

##### `CopyTagsToSnapshotInput`<sup>Optional</sup> <a name="CopyTagsToSnapshotInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.copyTagsToSnapshotInput"></a>

```go
func CopyTagsToSnapshotInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseInsightsModeInput`<sup>Optional</sup> <a name="DatabaseInsightsModeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseInsightsModeInput"></a>

```go
func DatabaseInsightsModeInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DbClusterIdentifierInput`<sup>Optional</sup> <a name="DbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterIdentifierInput"></a>

```go
func DbClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `DbClusterInstanceClassInput`<sup>Optional</sup> <a name="DbClusterInstanceClassInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterInstanceClassInput"></a>

```go
func DbClusterInstanceClassInput() *string
```

- *Type:* *string

---

##### `DbClusterParameterGroupNameInput`<sup>Optional</sup> <a name="DbClusterParameterGroupNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterParameterGroupNameInput"></a>

```go
func DbClusterParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `DbInstanceParameterGroupNameInput`<sup>Optional</sup> <a name="DbInstanceParameterGroupNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbInstanceParameterGroupNameInput"></a>

```go
func DbInstanceParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `DbSubnetGroupNameInput`<sup>Optional</sup> <a name="DbSubnetGroupNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSubnetGroupNameInput"></a>

```go
func DbSubnetGroupNameInput() *string
```

- *Type:* *string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSystemIdInput"></a>

```go
func DbSystemIdInput() *string
```

- *Type:* *string

---

##### `DeleteAutomatedBackupsInput`<sup>Optional</sup> <a name="DeleteAutomatedBackupsInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deleteAutomatedBackupsInput"></a>

```go
func DeleteAutomatedBackupsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DomainIamRoleNameInput`<sup>Optional</sup> <a name="DomainIamRoleNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainIamRoleNameInput"></a>

```go
func DomainIamRoleNameInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `EnableCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="EnableCloudwatchLogsExportsInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableCloudwatchLogsExportsInput"></a>

```go
func EnableCloudwatchLogsExportsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableGlobalWriteForwardingInput`<sup>Optional</sup> <a name="EnableGlobalWriteForwardingInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableGlobalWriteForwardingInput"></a>

```go
func EnableGlobalWriteForwardingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableHttpEndpointInput`<sup>Optional</sup> <a name="EnableHttpEndpointInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableHttpEndpointInput"></a>

```go
func EnableHttpEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `EnableIamDatabaseAuthenticationInput`<sup>Optional</sup> <a name="EnableIamDatabaseAuthenticationInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableIamDatabaseAuthenticationInput"></a>

```go
func EnableIamDatabaseAuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `EnableLocalWriteForwardingInput`<sup>Optional</sup> <a name="EnableLocalWriteForwardingInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableLocalWriteForwardingInput"></a>

```go
func EnableLocalWriteForwardingInput() interface{}
```

- *Type:* interface{}

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `EngineLifecycleSupportInput`<sup>Optional</sup> <a name="EngineLifecycleSupportInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineLifecycleSupportInput"></a>

```go
func EngineLifecycleSupportInput() *string
```

- *Type:* *string

---

##### `EngineModeInput`<sup>Optional</sup> <a name="EngineModeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineModeInput"></a>

```go
func EngineModeInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `GlobalClusterIdentifierInput`<sup>Optional</sup> <a name="GlobalClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.globalClusterIdentifierInput"></a>

```go
func GlobalClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `ManageMasterUserPasswordInput`<sup>Optional</sup> <a name="ManageMasterUserPasswordInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.manageMasterUserPasswordInput"></a>

```go
func ManageMasterUserPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `MasterUserAuthenticationTypeInput`<sup>Optional</sup> <a name="MasterUserAuthenticationTypeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserAuthenticationTypeInput"></a>

```go
func MasterUserAuthenticationTypeInput() *string
```

- *Type:* *string

---

##### `MasterUsernameInput`<sup>Optional</sup> <a name="MasterUsernameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUsernameInput"></a>

```go
func MasterUsernameInput() *string
```

- *Type:* *string

---

##### `MasterUserPasswordInput`<sup>Optional</sup> <a name="MasterUserPasswordInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserPasswordInput"></a>

```go
func MasterUserPasswordInput() *string
```

- *Type:* *string

---

##### `MasterUserSecretInput`<sup>Optional</sup> <a name="MasterUserSecretInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserSecretInput"></a>

```go
func MasterUserSecretInput() interface{}
```

- *Type:* interface{}

---

##### `MonitoringIntervalInput`<sup>Optional</sup> <a name="MonitoringIntervalInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringIntervalInput"></a>

```go
func MonitoringIntervalInput() *f64
```

- *Type:* *f64

---

##### `MonitoringRoleArnInput`<sup>Optional</sup> <a name="MonitoringRoleArnInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringRoleArnInput"></a>

```go
func MonitoringRoleArnInput() *string
```

- *Type:* *string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.networkTypeInput"></a>

```go
func NetworkTypeInput() *string
```

- *Type:* *string

---

##### `PerformanceInsightsEnabledInput`<sup>Optional</sup> <a name="PerformanceInsightsEnabledInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsEnabledInput"></a>

```go
func PerformanceInsightsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PerformanceInsightsKmsKeyIdInput`<sup>Optional</sup> <a name="PerformanceInsightsKmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsKmsKeyIdInput"></a>

```go
func PerformanceInsightsKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `PerformanceInsightsRetentionPeriodInput`<sup>Optional</sup> <a name="PerformanceInsightsRetentionPeriodInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsRetentionPeriodInput"></a>

```go
func PerformanceInsightsRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PreferredBackupWindowInput`<sup>Optional</sup> <a name="PreferredBackupWindowInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredBackupWindowInput"></a>

```go
func PreferredBackupWindowInput() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredMaintenanceWindowInput"></a>

```go
func PreferredMaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.publiclyAccessibleInput"></a>

```go
func PubliclyAccessibleInput() interface{}
```

- *Type:* interface{}

---

##### `ReplicationSourceIdentifierInput`<sup>Optional</sup> <a name="ReplicationSourceIdentifierInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.replicationSourceIdentifierInput"></a>

```go
func ReplicationSourceIdentifierInput() *string
```

- *Type:* *string

---

##### `RestoreToTimeInput`<sup>Optional</sup> <a name="RestoreToTimeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreToTimeInput"></a>

```go
func RestoreToTimeInput() *string
```

- *Type:* *string

---

##### `RestoreTypeInput`<sup>Optional</sup> <a name="RestoreTypeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreTypeInput"></a>

```go
func RestoreTypeInput() *string
```

- *Type:* *string

---

##### `ScalingConfigurationInput`<sup>Optional</sup> <a name="ScalingConfigurationInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.scalingConfigurationInput"></a>

```go
func ScalingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ServerlessV2ScalingConfigurationInput`<sup>Optional</sup> <a name="ServerlessV2ScalingConfigurationInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.serverlessV2ScalingConfigurationInput"></a>

```go
func ServerlessV2ScalingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotIdentifierInput`<sup>Optional</sup> <a name="SnapshotIdentifierInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.snapshotIdentifierInput"></a>

```go
func SnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `SourceDbClusterIdentifierInput`<sup>Optional</sup> <a name="SourceDbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterIdentifierInput"></a>

```go
func SourceDbClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `SourceDbClusterResourceIdInput`<sup>Optional</sup> <a name="SourceDbClusterResourceIdInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterResourceIdInput"></a>

```go
func SourceDbClusterResourceIdInput() *string
```

- *Type:* *string

---

##### `SourceRegionInput`<sup>Optional</sup> <a name="SourceRegionInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceRegionInput"></a>

```go
func SourceRegionInput() *string
```

- *Type:* *string

---

##### `StorageEncryptedInput`<sup>Optional</sup> <a name="StorageEncryptedInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncryptedInput"></a>

```go
func StorageEncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageTypeInput"></a>

```go
func StorageTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `UseLatestRestorableTimeInput`<sup>Optional</sup> <a name="UseLatestRestorableTimeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.useLatestRestorableTimeInput"></a>

```go
func UseLatestRestorableTimeInput() interface{}
```

- *Type:* interface{}

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.allocatedStorage"></a>

```go
func AllocatedStorage() *f64
```

- *Type:* *f64

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.autoMinorVersionUpgrade"></a>

```go
func AutoMinorVersionUpgrade() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `BacktrackWindow`<sup>Required</sup> <a name="BacktrackWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backtrackWindow"></a>

```go
func BacktrackWindow() *f64
```

- *Type:* *f64

---

##### `BackupRetentionPeriod`<sup>Required</sup> <a name="BackupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backupRetentionPeriod"></a>

```go
func BackupRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `ClusterScalabilityType`<sup>Required</sup> <a name="ClusterScalabilityType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.clusterScalabilityType"></a>

```go
func ClusterScalabilityType() *string
```

- *Type:* *string

---

##### `CopyTagsToSnapshot`<sup>Required</sup> <a name="CopyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.copyTagsToSnapshot"></a>

```go
func CopyTagsToSnapshot() interface{}
```

- *Type:* interface{}

---

##### `DatabaseInsightsMode`<sup>Required</sup> <a name="DatabaseInsightsMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseInsightsMode"></a>

```go
func DatabaseInsightsMode() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DbClusterIdentifier`<sup>Required</sup> <a name="DbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterIdentifier"></a>

```go
func DbClusterIdentifier() *string
```

- *Type:* *string

---

##### `DbClusterInstanceClass`<sup>Required</sup> <a name="DbClusterInstanceClass" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterInstanceClass"></a>

```go
func DbClusterInstanceClass() *string
```

- *Type:* *string

---

##### `DbClusterParameterGroupName`<sup>Required</sup> <a name="DbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterParameterGroupName"></a>

```go
func DbClusterParameterGroupName() *string
```

- *Type:* *string

---

##### `DbInstanceParameterGroupName`<sup>Required</sup> <a name="DbInstanceParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbInstanceParameterGroupName"></a>

```go
func DbInstanceParameterGroupName() *string
```

- *Type:* *string

---

##### `DbSubnetGroupName`<sup>Required</sup> <a name="DbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSubnetGroupName"></a>

```go
func DbSubnetGroupName() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `DeleteAutomatedBackups`<sup>Required</sup> <a name="DeleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deleteAutomatedBackups"></a>

```go
func DeleteAutomatedBackups() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `DomainIamRoleName`<sup>Required</sup> <a name="DomainIamRoleName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainIamRoleName"></a>

```go
func DomainIamRoleName() *string
```

- *Type:* *string

---

##### `EnableCloudwatchLogsExports`<sup>Required</sup> <a name="EnableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableCloudwatchLogsExports"></a>

```go
func EnableCloudwatchLogsExports() *[]*string
```

- *Type:* *[]*string

---

##### `EnableGlobalWriteForwarding`<sup>Required</sup> <a name="EnableGlobalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableGlobalWriteForwarding"></a>

```go
func EnableGlobalWriteForwarding() interface{}
```

- *Type:* interface{}

---

##### `EnableHttpEndpoint`<sup>Required</sup> <a name="EnableHttpEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableHttpEndpoint"></a>

```go
func EnableHttpEndpoint() interface{}
```

- *Type:* interface{}

---

##### `EnableIamDatabaseAuthentication`<sup>Required</sup> <a name="EnableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableIamDatabaseAuthentication"></a>

```go
func EnableIamDatabaseAuthentication() interface{}
```

- *Type:* interface{}

---

##### `EnableLocalWriteForwarding`<sup>Required</sup> <a name="EnableLocalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableLocalWriteForwarding"></a>

```go
func EnableLocalWriteForwarding() interface{}
```

- *Type:* interface{}

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineLifecycleSupport`<sup>Required</sup> <a name="EngineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineLifecycleSupport"></a>

```go
func EngineLifecycleSupport() *string
```

- *Type:* *string

---

##### `EngineMode`<sup>Required</sup> <a name="EngineMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineMode"></a>

```go
func EngineMode() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `GlobalClusterIdentifier`<sup>Required</sup> <a name="GlobalClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.globalClusterIdentifier"></a>

```go
func GlobalClusterIdentifier() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `ManageMasterUserPassword`<sup>Required</sup> <a name="ManageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.manageMasterUserPassword"></a>

```go
func ManageMasterUserPassword() interface{}
```

- *Type:* interface{}

---

##### `MasterUserAuthenticationType`<sup>Required</sup> <a name="MasterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserAuthenticationType"></a>

```go
func MasterUserAuthenticationType() *string
```

- *Type:* *string

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUsername"></a>

```go
func MasterUsername() *string
```

- *Type:* *string

---

##### `MasterUserPassword`<sup>Required</sup> <a name="MasterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserPassword"></a>

```go
func MasterUserPassword() *string
```

- *Type:* *string

---

##### `MonitoringInterval`<sup>Required</sup> <a name="MonitoringInterval" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringInterval"></a>

```go
func MonitoringInterval() *f64
```

- *Type:* *f64

---

##### `MonitoringRoleArn`<sup>Required</sup> <a name="MonitoringRoleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringRoleArn"></a>

```go
func MonitoringRoleArn() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `PerformanceInsightsEnabled`<sup>Required</sup> <a name="PerformanceInsightsEnabled" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsEnabled"></a>

```go
func PerformanceInsightsEnabled() interface{}
```

- *Type:* interface{}

---

##### `PerformanceInsightsKmsKeyId`<sup>Required</sup> <a name="PerformanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsKmsKeyId"></a>

```go
func PerformanceInsightsKmsKeyId() *string
```

- *Type:* *string

---

##### `PerformanceInsightsRetentionPeriod`<sup>Required</sup> <a name="PerformanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsRetentionPeriod"></a>

```go
func PerformanceInsightsRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredBackupWindow"></a>

```go
func PreferredBackupWindow() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.publiclyAccessible"></a>

```go
func PubliclyAccessible() interface{}
```

- *Type:* interface{}

---

##### `ReplicationSourceIdentifier`<sup>Required</sup> <a name="ReplicationSourceIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.replicationSourceIdentifier"></a>

```go
func ReplicationSourceIdentifier() *string
```

- *Type:* *string

---

##### `RestoreToTime`<sup>Required</sup> <a name="RestoreToTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreToTime"></a>

```go
func RestoreToTime() *string
```

- *Type:* *string

---

##### `RestoreType`<sup>Required</sup> <a name="RestoreType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreType"></a>

```go
func RestoreType() *string
```

- *Type:* *string

---

##### `SnapshotIdentifier`<sup>Required</sup> <a name="SnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.snapshotIdentifier"></a>

```go
func SnapshotIdentifier() *string
```

- *Type:* *string

---

##### `SourceDbClusterIdentifier`<sup>Required</sup> <a name="SourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterIdentifier"></a>

```go
func SourceDbClusterIdentifier() *string
```

- *Type:* *string

---

##### `SourceDbClusterResourceId`<sup>Required</sup> <a name="SourceDbClusterResourceId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterResourceId"></a>

```go
func SourceDbClusterResourceId() *string
```

- *Type:* *string

---

##### `SourceRegion`<sup>Required</sup> <a name="SourceRegion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceRegion"></a>

```go
func SourceRegion() *string
```

- *Type:* *string

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncrypted"></a>

```go
func StorageEncrypted() interface{}
```

- *Type:* interface{}

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `UseLatestRestorableTime`<sup>Required</sup> <a name="UseLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.useLatestRestorableTime"></a>

```go
func UseLatestRestorableTime() interface{}
```

- *Type:* interface{}

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbClusterAssociatedRoles <a name="RdsDbClusterAssociatedRoles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

&rdsdbcluster.RdsDbClusterAssociatedRoles {
	FeatureName: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.property.featureName">FeatureName</a></code> | <code>*string</code> | The name of the feature associated with the AWS Identity and Access Management (IAM) role. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster. |

---

##### `FeatureName`<sup>Optional</sup> <a name="FeatureName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.property.featureName"></a>

```go
FeatureName *string
```

- *Type:* *string

The name of the feature associated with the AWS Identity and Access Management (IAM) role.

IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf. For the list of supported feature names, see the `SupportedFeatureNames` description in [DBEngineVersion](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html) in the *Amazon RDS API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#feature_name RdsDbCluster#feature_name}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#role_arn RdsDbCluster#role_arn}

---

### RdsDbClusterConfig <a name="RdsDbClusterConfig" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

&rdsdbcluster.RdsDbClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AllocatedStorage: *f64,
	AssociatedRoles: interface{},
	AutoMinorVersionUpgrade: interface{},
	AvailabilityZones: *[]*string,
	BacktrackWindow: *f64,
	BackupRetentionPeriod: *f64,
	ClusterScalabilityType: *string,
	CopyTagsToSnapshot: interface{},
	DatabaseInsightsMode: *string,
	DatabaseName: *string,
	DbClusterIdentifier: *string,
	DbClusterInstanceClass: *string,
	DbClusterParameterGroupName: *string,
	DbInstanceParameterGroupName: *string,
	DbSubnetGroupName: *string,
	DbSystemId: *string,
	DeleteAutomatedBackups: interface{},
	DeletionProtection: interface{},
	Domain: *string,
	DomainIamRoleName: *string,
	EnableCloudwatchLogsExports: *[]*string,
	EnableGlobalWriteForwarding: interface{},
	EnableHttpEndpoint: interface{},
	EnableIamDatabaseAuthentication: interface{},
	EnableLocalWriteForwarding: interface{},
	Engine: *string,
	EngineLifecycleSupport: *string,
	EngineMode: *string,
	EngineVersion: *string,
	GlobalClusterIdentifier: *string,
	Iops: *f64,
	KmsKeyId: *string,
	ManageMasterUserPassword: interface{},
	MasterUserAuthenticationType: *string,
	MasterUsername: *string,
	MasterUserPassword: *string,
	MasterUserSecret: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rdsDbCluster.RdsDbClusterMasterUserSecret,
	MonitoringInterval: *f64,
	MonitoringRoleArn: *string,
	NetworkType: *string,
	PerformanceInsightsEnabled: interface{},
	PerformanceInsightsKmsKeyId: *string,
	PerformanceInsightsRetentionPeriod: *f64,
	Port: *f64,
	PreferredBackupWindow: *string,
	PreferredMaintenanceWindow: *string,
	PubliclyAccessible: interface{},
	ReplicationSourceIdentifier: *string,
	RestoreToTime: *string,
	RestoreType: *string,
	ScalingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rdsDbCluster.RdsDbClusterScalingConfiguration,
	ServerlessV2ScalingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration,
	SnapshotIdentifier: *string,
	SourceDbClusterIdentifier: *string,
	SourceDbClusterResourceId: *string,
	SourceRegion: *string,
	StorageEncrypted: interface{},
	StorageType: *string,
	Tags: interface{},
	UseLatestRestorableTime: interface{},
	VpcSecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.allocatedStorage">AllocatedStorage</a></code> | <code>*f64</code> | The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.associatedRoles">AssociatedRoles</a></code> | <code>interface{}</code> | Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>interface{}</code> | Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | A list of Availability Zones (AZs) where instances in the DB cluster can be created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.backtrackWindow">BacktrackWindow</a></code> | <code>*f64</code> | The target backtrack window, in seconds. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>*f64</code> | The number of days for which automated backups are retained. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.clusterScalabilityType">ClusterScalabilityType</a></code> | <code>*string</code> | Specifies the scalability mode of the Aurora DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>interface{}</code> | A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.databaseInsightsMode">DatabaseInsightsMode</a></code> | <code>*string</code> | The mode of Database Insights to enable for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | The name of your database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>*string</code> | The DB cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterInstanceClass">DbClusterInstanceClass</a></code> | <code>*string</code> | The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example ``db.m6gd.xlarge``. Not all DB instance classes are available in all AWS-Regions, or for all database engines.  For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.  This setting is required to create a Multi-AZ DB cluster.  Valid for Cluster Type: Multi-AZ DB clusters only. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterParameterGroupName">DbClusterParameterGroupName</a></code> | <code>*string</code> | The name of the DB cluster parameter group to associate with this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbInstanceParameterGroupName">DbInstanceParameterGroupName</a></code> | <code>*string</code> | The name of the DB parameter group to apply to all instances of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>*string</code> | A DB subnet group that you want to associate with this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | Reserved for future use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.deleteAutomatedBackups">DeleteAutomatedBackups</a></code> | <code>interface{}</code> | Specifies whether to remove automated backups immediately after the DB cluster is deleted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | A value that indicates whether the DB cluster has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.domain">Domain</a></code> | <code>*string</code> | Indicates the directory ID of the Active Directory to create the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.domainIamRoleName">DomainIamRoleName</a></code> | <code>*string</code> | Specifies the name of the IAM role to use when making API calls to the Directory Service. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableCloudwatchLogsExports">EnableCloudwatchLogsExports</a></code> | <code>*[]*string</code> | The list of log types that need to be enabled for exporting to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableGlobalWriteForwarding">EnableGlobalWriteForwarding</a></code> | <code>interface{}</code> | Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database). |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableHttpEndpoint">EnableHttpEndpoint</a></code> | <code>interface{}</code> | Specifies whether to enable the HTTP endpoint for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableIamDatabaseAuthentication">EnableIamDatabaseAuthentication</a></code> | <code>interface{}</code> | A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableLocalWriteForwarding">EnableLocalWriteForwarding</a></code> | <code>interface{}</code> | Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engine">Engine</a></code> | <code>*string</code> | The name of the database engine to be used for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineLifecycleSupport">EngineLifecycleSupport</a></code> | <code>*string</code> | The life cycle type for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineMode">EngineMode</a></code> | <code>*string</code> | The DB engine mode of the DB cluster, either ``provisioned`` or ``serverless``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | The version number of the database engine to use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>*string</code> | If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.iops">Iops</a></code> | <code>*f64</code> | The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.manageMasterUserPassword">ManageMasterUserPassword</a></code> | <code>interface{}</code> | Specifies whether to manage the master user password with AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserAuthenticationType">MasterUserAuthenticationType</a></code> | <code>*string</code> | Specifies the authentication type for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUsername">MasterUsername</a></code> | <code>*string</code> | The name of the master user for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserPassword">MasterUserPassword</a></code> | <code>*string</code> | The master password for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserSecret">MasterUserSecret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a></code> | The secret managed by RDS in AWS Secrets Manager for the master user password. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.monitoringInterval">MonitoringInterval</a></code> | <code>*f64</code> | The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.monitoringRoleArn">MonitoringRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.networkType">NetworkType</a></code> | <code>*string</code> | The network type of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsEnabled">PerformanceInsightsEnabled</a></code> | <code>interface{}</code> | Specifies whether to turn on Performance Insights for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsKmsKeyId">PerformanceInsightsKmsKeyId</a></code> | <code>*string</code> | The AWS KMS key identifier for encryption of Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsRetentionPeriod">PerformanceInsightsRetentionPeriod</a></code> | <code>*f64</code> | The number of days to retain Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.port">Port</a></code> | <code>*f64</code> | The port number on which the DB instances in the DB cluster accept connections. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>*string</code> | The daily time range during which automated backups are created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | Specifies whether the DB cluster is publicly accessible. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.replicationSourceIdentifier">ReplicationSourceIdentifier</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.restoreToTime">RestoreToTime</a></code> | <code>*string</code> | The date and time to restore the DB cluster to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.restoreType">RestoreType</a></code> | <code>*string</code> | The type of restore to be performed. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.scalingConfiguration">ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a></code> | The scaling configuration of an Aurora Serverless v1 DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.serverlessV2ScalingConfiguration">ServerlessV2ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a></code> | The scaling configuration of an Aurora Serverless V2 DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>*string</code> | The identifier for the DB snapshot or DB cluster snapshot to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceDbClusterIdentifier">SourceDbClusterIdentifier</a></code> | <code>*string</code> | When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceDbClusterResourceId">SourceDbClusterResourceId</a></code> | <code>*string</code> | The resource ID of the source DB cluster from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceRegion">SourceRegion</a></code> | <code>*string</code> | The AWS Region which contains the source DB cluster when replicating a DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.storageEncrypted">StorageEncrypted</a></code> | <code>interface{}</code> | Indicates whether the DB cluster is encrypted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.storageType">StorageType</a></code> | <code>*string</code> | The storage type to associate with the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags to assign to the DB cluster.  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>interface{}</code> | A value that indicates whether to restore the DB cluster to the latest restorable backup time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | A list of EC2 VPC security groups to associate with this DB cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllocatedStorage`<sup>Optional</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.allocatedStorage"></a>

```go
AllocatedStorage *f64
```

- *Type:* *f64

The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.

Valid for Cluster Type: Multi-AZ DB clusters only
This setting is required to create a Multi-AZ DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#allocated_storage RdsDbCluster#allocated_storage}

---

##### `AssociatedRoles`<sup>Optional</sup> <a name="AssociatedRoles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.associatedRoles"></a>

```go
AssociatedRoles interface{}
```

- *Type:* interface{}

Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster.

IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon Web Services on your behalf.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#associated_roles RdsDbCluster#associated_roles}

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.autoMinorVersionUpgrade"></a>

```go
AutoMinorVersionUpgrade interface{}
```

- *Type:* interface{}

Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window.

By default, minor engine upgrades are applied automatically.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB cluster.
For more information about automatic minor version upgrades, see [Automatically upgrading the minor engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#auto_minor_version_upgrade RdsDbCluster#auto_minor_version_upgrade}

---

##### `AvailabilityZones`<sup>Optional</sup> <a name="AvailabilityZones" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.availabilityZones"></a>

```go
AvailabilityZones *[]*string
```

- *Type:* *[]*string

A list of Availability Zones (AZs) where instances in the DB cluster can be created.

For information on AWS Regions and Availability Zones, see [Choosing the Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#availability_zones RdsDbCluster#availability_zones}

---

##### `BacktrackWindow`<sup>Optional</sup> <a name="BacktrackWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.backtrackWindow"></a>

```go
BacktrackWindow *f64
```

- *Type:* *f64

The target backtrack window, in seconds.

To disable backtracking, set this value to `0`.
Valid for Cluster Type: Aurora MySQL DB clusters only
Default: `0`
Constraints:

* If specified, this value must be set to a number from 0 to 259,200 (72 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#backtrack_window RdsDbCluster#backtrack_window}

---

##### `BackupRetentionPeriod`<sup>Optional</sup> <a name="BackupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.backupRetentionPeriod"></a>

```go
BackupRetentionPeriod *f64
```

- *Type:* *f64

The number of days for which automated backups are retained.

Default: 1
Constraints:

* Must be a value from 1 to 35

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#backup_retention_period RdsDbCluster#backup_retention_period}

---

##### `ClusterScalabilityType`<sup>Optional</sup> <a name="ClusterScalabilityType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.clusterScalabilityType"></a>

```go
ClusterScalabilityType *string
```

- *Type:* *string

Specifies the scalability mode of the Aurora DB cluster.

When set to `limitless`, the cluster operates as an Aurora Limitless Database, allowing you to create a DB shard group for horizontal scaling (sharding) capabilities. When set to `standard` (the default), the cluster uses normal DB instance creation.
*Important:* Automated backup retention isn't supported with Aurora Limitless Database clusters. If you set this property to `limitless`, you cannot set `DeleteAutomatedBackups` to `false`. To create a backup, use manual snapshots instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#cluster_scalability_type RdsDbCluster#cluster_scalability_type}

---

##### `CopyTagsToSnapshot`<sup>Optional</sup> <a name="CopyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.copyTagsToSnapshot"></a>

```go
CopyTagsToSnapshot interface{}
```

- *Type:* interface{}

A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.

The default is not to copy them.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#copy_tags_to_snapshot RdsDbCluster#copy_tags_to_snapshot}

---

##### `DatabaseInsightsMode`<sup>Optional</sup> <a name="DatabaseInsightsMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.databaseInsightsMode"></a>

```go
DatabaseInsightsMode *string
```

- *Type:* *string

The mode of Database Insights to enable for the DB cluster.

If you set this value to `advanced`, you must also set the `PerformanceInsightsEnabled` parameter to `true` and the `PerformanceInsightsRetentionPeriod` parameter to 465.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#database_insights_mode RdsDbCluster#database_insights_mode}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

The name of your database.

If you don't provide a name, then Amazon RDS won't create a database in this DB cluster. For naming constraints, see [Naming Constraints](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#database_name RdsDbCluster#database_name}

---

##### `DbClusterIdentifier`<sup>Optional</sup> <a name="DbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterIdentifier"></a>

```go
DbClusterIdentifier *string
```

- *Type:* *string

The DB cluster identifier.

This parameter is stored as a lowercase string.
Constraints:

* Must contain from 1 to 63 letters, numbers, or hyphens.
* First character must be a letter.
* Can't end with a hyphen or contain two consecutive hyphens.

Example: `my-cluster1`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_cluster_identifier RdsDbCluster#db_cluster_identifier}

---

##### `DbClusterInstanceClass`<sup>Optional</sup> <a name="DbClusterInstanceClass" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterInstanceClass"></a>

```go
DbClusterInstanceClass *string
```

- *Type:* *string

The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example ``db.m6gd.xlarge``. Not all DB instance classes are available in all AWS-Regions, or for all database engines.  For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.  This setting is required to create a Multi-AZ DB cluster.  Valid for Cluster Type: Multi-AZ DB clusters only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_cluster_instance_class RdsDbCluster#db_cluster_instance_class}

---

##### `DbClusterParameterGroupName`<sup>Optional</sup> <a name="DbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterParameterGroupName"></a>

```go
DbClusterParameterGroupName *string
```

- *Type:* *string

The name of the DB cluster parameter group to associate with this DB cluster.

If you apply a parameter group to an existing DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.
If you apply a change to parameter group associated with a stopped DB cluster, then the update stack waits until the DB cluster is started.
To list all of the available DB cluster parameter group names, use the following command:
`aws rds describe-db-cluster-parameter-groups --query "DBClusterParameterGroups[].DBClusterParameterGroupName" --output text`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_cluster_parameter_group_name RdsDbCluster#db_cluster_parameter_group_name}

---

##### `DbInstanceParameterGroupName`<sup>Optional</sup> <a name="DbInstanceParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbInstanceParameterGroupName"></a>

```go
DbInstanceParameterGroupName *string
```

- *Type:* *string

The name of the DB parameter group to apply to all instances of the DB cluster.

When you apply a parameter group using the `DBInstanceParameterGroupName` parameter, the DB cluster isn't rebooted automatically. Also, parameter changes are applied immediately rather than during the next maintenance window.
Valid for Cluster Type: Aurora DB clusters only
Default: The existing name setting
Constraints:

* The DB parameter group must be in the same DB parameter group family as this DB cluster.
* The `DBInstanceParameterGroupName` parameter is valid in combination with the `AllowMajorVersionUpgrade` parameter for a major version upgrade only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_instance_parameter_group_name RdsDbCluster#db_instance_parameter_group_name}

---

##### `DbSubnetGroupName`<sup>Optional</sup> <a name="DbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbSubnetGroupName"></a>

```go
DbSubnetGroupName *string
```

- *Type:* *string

A DB subnet group that you want to associate with this DB cluster.

If you are restoring a DB cluster to a point in time with `RestoreType` set to `copy-on-write`, and don't specify a DB subnet group name, then the DB cluster is restored with a default DB subnet group.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_subnet_group_name RdsDbCluster#db_subnet_group_name}

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbSystemId"></a>

```go
DbSystemId *string
```

- *Type:* *string

Reserved for future use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_system_id RdsDbCluster#db_system_id}

---

##### `DeleteAutomatedBackups`<sup>Optional</sup> <a name="DeleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.deleteAutomatedBackups"></a>

```go
DeleteAutomatedBackups interface{}
```

- *Type:* interface{}

Specifies whether to remove automated backups immediately after the DB cluster is deleted.

This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB cluster is deleted, unless the AWS Backup policy specifies a point-in-time restore rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#delete_automated_backups RdsDbCluster#delete_automated_backups}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

A value that indicates whether the DB cluster has deletion protection enabled.

The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#deletion_protection RdsDbCluster#deletion_protection}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Indicates the directory ID of the Active Directory to create the DB cluster.

For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster.
For more information, see [Kerberos authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#domain RdsDbCluster#domain}

---

##### `DomainIamRoleName`<sup>Optional</sup> <a name="DomainIamRoleName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.domainIamRoleName"></a>

```go
DomainIamRoleName *string
```

- *Type:* *string

Specifies the name of the IAM role to use when making API calls to the Directory Service.

Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#domain_iam_role_name RdsDbCluster#domain_iam_role_name}

---

##### `EnableCloudwatchLogsExports`<sup>Optional</sup> <a name="EnableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableCloudwatchLogsExports"></a>

```go
EnableCloudwatchLogsExports *[]*string
```

- *Type:* *[]*string

The list of log types that need to be enabled for exporting to CloudWatch Logs.

The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Aurora User Guide*.
*Aurora MySQL*
Valid values: `audit`, `error`, `general`, `slowquery`
*Aurora PostgreSQL*
Valid values: `postgresql`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_cloudwatch_logs_exports RdsDbCluster#enable_cloudwatch_logs_exports}

---

##### `EnableGlobalWriteForwarding`<sup>Optional</sup> <a name="EnableGlobalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableGlobalWriteForwarding"></a>

```go
EnableGlobalWriteForwarding interface{}
```

- *Type:* interface{}

Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database).

By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database.
You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster, and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by a global cluster API operation, but it does nothing until then.
Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_global_write_forwarding RdsDbCluster#enable_global_write_forwarding}

---

##### `EnableHttpEndpoint`<sup>Optional</sup> <a name="EnableHttpEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableHttpEndpoint"></a>

```go
EnableHttpEndpoint interface{}
```

- *Type:* interface{}

Specifies whether to enable the HTTP endpoint for the DB cluster.

By default, the HTTP endpoint isn't enabled.
When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the DB cluster. You can also query your database from inside the RDS console with the RDS query editor.
For more information, see [Using RDS Data API](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) in the *Amazon Aurora User Guide*.
Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_http_endpoint RdsDbCluster#enable_http_endpoint}

---

##### `EnableIamDatabaseAuthentication`<sup>Optional</sup> <a name="EnableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableIamDatabaseAuthentication"></a>

```go
EnableIamDatabaseAuthentication interface{}
```

- *Type:* interface{}

A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts.

By default, mapping is disabled.
For more information, see [IAM Database Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon Aurora User Guide.*
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_iam_database_authentication RdsDbCluster#enable_iam_database_authentication}

---

##### `EnableLocalWriteForwarding`<sup>Optional</sup> <a name="EnableLocalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableLocalWriteForwarding"></a>

```go
EnableLocalWriteForwarding interface{}
```

- *Type:* interface{}

Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster.

By default, write operations aren't allowed on reader DB instances.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_local_write_forwarding RdsDbCluster#enable_local_write_forwarding}

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

The name of the database engine to be used for this DB cluster.

Valid Values:

* `aurora-mysql`
* `aurora-postgresql`
* `mysql`
* `postgres`

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#engine RdsDbCluster#engine}

---

##### `EngineLifecycleSupport`<sup>Optional</sup> <a name="EngineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineLifecycleSupport"></a>

```go
EngineLifecycleSupport *string
```

- *Type:* *string

The life cycle type for this DB cluster.

By default, this value is set to `open-source-rds-extended-support`, which enrolls your DB cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, creating the DB cluster will fail if the DB major version is past its end of standard support date.
You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections:

* Amazon Aurora - [Amazon RDS Extended Support with Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html) in the *Amazon Aurora User Guide*
* Amazon RDS - [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*

Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
Default: `open-source-rds-extended-support`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#engine_lifecycle_support RdsDbCluster#engine_lifecycle_support}

---

##### `EngineMode`<sup>Optional</sup> <a name="EngineMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineMode"></a>

```go
EngineMode *string
```

- *Type:* *string

The DB engine mode of the DB cluster, either ``provisioned`` or ``serverless``.

The `serverless` engine mode only applies for Aurora Serverless v1 DB clusters. Aurora Serverless v2 DB clusters use the `provisioned` engine mode.
For information about limitations and requirements for Serverless DB clusters, see the following sections in the *Amazon Aurora User Guide*:

* [Limitations of Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations)
* [Requirements for Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.requirements.html)

Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#engine_mode RdsDbCluster#engine_mode}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#engine_version RdsDbCluster#engine_version}

---

##### `GlobalClusterIdentifier`<sup>Optional</sup> <a name="GlobalClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.globalClusterIdentifier"></a>

```go
GlobalClusterIdentifier *string
```

- *Type:* *string

If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster.

To define the primary database cluster of the global cluster, use the [AWS::RDS::GlobalCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html) resource.
If you aren't configuring a global database cluster, don't specify this property.
To remove the DB cluster from a global database cluster, specify an empty value for the `GlobalClusterIdentifier` property.
For information about Aurora global databases, see [Working with Amazon Aurora Global Databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#global_cluster_identifier RdsDbCluster#global_cluster_identifier}

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.

For information about valid IOPS values, see [Provisioned IOPS storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
This setting is required to create a Multi-AZ DB cluster.
Valid for Cluster Type: Multi-AZ DB clusters only
Constraints:

* Must be a multiple between .5 and 50 of the storage amount for the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#iops RdsDbCluster#iops}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``.

If you enable the `StorageEncrypted` property but don't specify this property, the default KMS key is used. If you specify this property, you must set the `StorageEncrypted` property to `true`.
If you specify the `SnapshotIdentifier` property, the `StorageEncrypted` property value is inherited from the snapshot, and if the DB cluster is encrypted, the specified `KmsKeyId` property is used.
If you create a read replica of an encrypted DB cluster in another AWS Region, make sure to set `KmsKeyId` to a KMS key identifier that is valid in the destination AWS Region. This KMS key is used to encrypt the read replica in that AWS Region.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#kms_key_id RdsDbCluster#kms_key_id}

---

##### `ManageMasterUserPassword`<sup>Optional</sup> <a name="ManageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.manageMasterUserPassword"></a>

```go
ManageMasterUserPassword interface{}
```

- *Type:* interface{}

Specifies whether to manage the master user password with AWS Secrets Manager.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Constraints:

* Can't manage the master user password with AWS Secrets Manager if `MasterUserPassword` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#manage_master_user_password RdsDbCluster#manage_master_user_password}

---

##### `MasterUserAuthenticationType`<sup>Optional</sup> <a name="MasterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserAuthenticationType"></a>

```go
MasterUserAuthenticationType *string
```

- *Type:* *string

Specifies the authentication type for the master user.

With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB cluster.
You can specify one of the following values:

* `password` - Use standard database authentication with a password.
* `iam-db-auth` - Use IAM database authentication for the master user.

Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
This option is only valid for RDS for MySQL, RDS for MariaDB, RDS for PostgreSQL, Aurora MySQL, and Aurora PostgreSQL engines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_user_authentication_type RdsDbCluster#master_user_authentication_type}

---

##### `MasterUsername`<sup>Optional</sup> <a name="MasterUsername" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUsername"></a>

```go
MasterUsername *string
```

- *Type:* *string

The name of the master user for the DB cluster.

If you specify the `SourceDBClusterIdentifier`, `SnapshotIdentifier`, or `GlobalClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_username RdsDbCluster#master_username}

---

##### `MasterUserPassword`<sup>Optional</sup> <a name="MasterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserPassword"></a>

```go
MasterUserPassword *string
```

- *Type:* *string

The master password for the DB instance.

If you specify the `SourceDBClusterIdentifier`, `SnapshotIdentifier`, or `GlobalClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_user_password RdsDbCluster#master_user_password}

---

##### `MasterUserSecret`<sup>Optional</sup> <a name="MasterUserSecret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserSecret"></a>

```go
MasterUserSecret RdsDbClusterMasterUserSecret
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a>

The secret managed by RDS in AWS Secrets Manager for the master user password.

When you restore a DB cluster from a snapshot, Amazon RDS generates a new secret instead of reusing the secret specified in the `SecretArn` property. This ensures that the restored DB cluster is securely managed with a dedicated secret. To maintain consistent integration with your application, you might need to update resource configurations to reference the newly created secret.
For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_user_secret RdsDbCluster#master_user_secret}

---

##### `MonitoringInterval`<sup>Optional</sup> <a name="MonitoringInterval" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.monitoringInterval"></a>

```go
MonitoringInterval *f64
```

- *Type:* *f64

The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster.

To turn off collecting Enhanced Monitoring metrics, specify `0`.
If `MonitoringRoleArn` is specified, also set `MonitoringInterval` to a value other than `0`.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#monitoring_interval RdsDbCluster#monitoring_interval}

---

##### `MonitoringRoleArn`<sup>Optional</sup> <a name="MonitoringRoleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.monitoringRoleArn"></a>

```go
MonitoringRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.

An example is `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [Setting up and enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide*.
If `MonitoringInterval` is set to a value other than `0`, supply a `MonitoringRoleArn` value.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#monitoring_role_arn RdsDbCluster#monitoring_role_arn}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.networkType"></a>

```go
NetworkType *string
```

- *Type:* *string

The network type of the DB cluster.

Valid values:

* `IPV4`
* `DUAL`

The network type is determined by the `DBSubnetGroup` specified for the DB cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and IPv6 protocols (`DUAL`).
For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon Aurora User Guide.*
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#network_type RdsDbCluster#network_type}

---

##### `PerformanceInsightsEnabled`<sup>Optional</sup> <a name="PerformanceInsightsEnabled" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsEnabled"></a>

```go
PerformanceInsightsEnabled interface{}
```

- *Type:* interface{}

Specifies whether to turn on Performance Insights for the DB cluster.

For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#performance_insights_enabled RdsDbCluster#performance_insights_enabled}

---

##### `PerformanceInsightsKmsKeyId`<sup>Optional</sup> <a name="PerformanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsKmsKeyId"></a>

```go
PerformanceInsightsKmsKeyId *string
```

- *Type:* *string

The AWS KMS key identifier for encryption of Performance Insights data.

The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
If you don't specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS-account. Your AWS-account has a different default KMS key for each AWS-Region.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#performance_insights_kms_key_id RdsDbCluster#performance_insights_kms_key_id}

---

##### `PerformanceInsightsRetentionPeriod`<sup>Optional</sup> <a name="PerformanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsRetentionPeriod"></a>

```go
PerformanceInsightsRetentionPeriod *f64
```

- *Type:* *f64

The number of days to retain Performance Insights data.

When creating a DB cluster without enabling Performance Insights, you can't specify the parameter `PerformanceInsightsRetentionPeriod`.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Valid Values:

* `7`
* *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
* `731`

Default: `7` days
If you specify a retention period that isn't valid, such as `94`, Amazon RDS issues an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#performance_insights_retention_period RdsDbCluster#performance_insights_retention_period}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port number on which the DB instances in the DB cluster accept connections.

Default:

* RDS for MySQL and Aurora MySQL - `3306`
* RDS for PostgreSQL and Aurora PostgreSQL - `5432`

The `No interruption` on update behavior only applies to DB clusters. If you are updating a DB instance, see [Port](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-port) for the AWS::RDS::DBInstance resource.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#port RdsDbCluster#port}

---

##### `PreferredBackupWindow`<sup>Optional</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.preferredBackupWindow"></a>

```go
PreferredBackupWindow *string
```

- *Type:* *string

The daily time range during which automated backups are created.

For more information, see [Backup Window](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow) in the *Amazon Aurora User Guide.*
Constraints:

* Must be in the format `hh24:mi-hh24:mi`.
* Must be in Universal Coordinated Time (UTC).
* Must not conflict with the preferred maintenance window.
* Must be at least 30 minutes.

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#preferred_backup_window RdsDbCluster#preferred_backup_window}

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.preferredMaintenanceWindow"></a>

```go
PreferredMaintenanceWindow *string
```

- *Type:* *string

The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

Format: `ddd:hh24:mi-ddd:hh24:mi`
The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [Maintaining an Amazon Aurora DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora) in the *Amazon Aurora User Guide.*
Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
Constraints: Minimum 30-minute window.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#preferred_maintenance_window RdsDbCluster#preferred_maintenance_window}

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.publiclyAccessible"></a>

```go
PubliclyAccessible interface{}
```

- *Type:* interface{}

Specifies whether the DB cluster is publicly accessible.

Valid for Cluster Type: Multi-AZ DB clusters only
When the DB cluster is publicly accessible and you connect from outside of the DB cluster's virtual private cloud (VPC), its domain name system (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB cluster, the endpoint resolves to the private IP address. Access to the DB cluster is controlled by its security group settings.
When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.
The default behavior when `PubliclyAccessible` is not specified depends on whether a `DBSubnetGroup` is specified.
If `DBSubnetGroup` isn't specified, `PubliclyAccessible` defaults to `true`.
If `DBSubnetGroup` is specified, `PubliclyAccessible` defaults to `false` unless the value of `DBSubnetGroup` is `default`, in which case `PubliclyAccessible` defaults to `true`.
If `PubliclyAccessible` is true and the VPC that the `DBSubnetGroup` is in doesn't have an internet gateway attached to it, Amazon RDS returns an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#publicly_accessible RdsDbCluster#publicly_accessible}

---

##### `ReplicationSourceIdentifier`<sup>Optional</sup> <a name="ReplicationSourceIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.replicationSourceIdentifier"></a>

```go
ReplicationSourceIdentifier *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica.

Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#replication_source_identifier RdsDbCluster#replication_source_identifier}

---

##### `RestoreToTime`<sup>Optional</sup> <a name="RestoreToTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.restoreToTime"></a>

```go
RestoreToTime *string
```

- *Type:* *string

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#restore_to_time RdsDbCluster#restore_to_time}

---

##### `RestoreType`<sup>Optional</sup> <a name="RestoreType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.restoreType"></a>

```go
RestoreType *string
```

- *Type:* *string

The type of restore to be performed.

You can specify one of the following values:

* `full-copy` - The new DB cluster is restored as a full copy of the source DB cluster.
* `copy-on-write` - The new DB cluster is restored as a clone of the source DB cluster.

If you don't specify a `RestoreType` value, then the new DB cluster is restored as a full copy of the source DB cluster.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#restore_type RdsDbCluster#restore_type}

---

##### `ScalingConfiguration`<sup>Optional</sup> <a name="ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.scalingConfiguration"></a>

```go
ScalingConfiguration RdsDbClusterScalingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a>

The scaling configuration of an Aurora Serverless v1 DB cluster.

This property is only supported for Aurora Serverless v1. For Aurora Serverless v2, Use the `ServerlessV2ScalingConfiguration` property.
Valid for: Aurora Serverless v1 DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#scaling_configuration RdsDbCluster#scaling_configuration}

---

##### `ServerlessV2ScalingConfiguration`<sup>Optional</sup> <a name="ServerlessV2ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.serverlessV2ScalingConfiguration"></a>

```go
ServerlessV2ScalingConfiguration RdsDbClusterServerlessV2ScalingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a>

The scaling configuration of an Aurora Serverless V2 DB cluster.

This property is only supported for Aurora Serverless v2. For Aurora Serverless v1, Use the `ScalingConfiguration` property.
Valid for: Aurora Serverless v2 DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#serverless_v2_scaling_configuration RdsDbCluster#serverless_v2_scaling_configuration}

---

##### `SnapshotIdentifier`<sup>Optional</sup> <a name="SnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.snapshotIdentifier"></a>

```go
SnapshotIdentifier *string
```

- *Type:* *string

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#snapshot_identifier RdsDbCluster#snapshot_identifier}

---

##### `SourceDbClusterIdentifier`<sup>Optional</sup> <a name="SourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceDbClusterIdentifier"></a>

```go
SourceDbClusterIdentifier *string
```

- *Type:* *string

When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore.

Constraints:

* Must match the identifier of an existing DBCluster.
* Cannot be specified if `SourceDbClusterResourceId` is specified. You must specify either `SourceDBClusterIdentifier` or `SourceDbClusterResourceId`, but not both.

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#source_db_cluster_identifier RdsDbCluster#source_db_cluster_identifier}

---

##### `SourceDbClusterResourceId`<sup>Optional</sup> <a name="SourceDbClusterResourceId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceDbClusterResourceId"></a>

```go
SourceDbClusterResourceId *string
```

- *Type:* *string

The resource ID of the source DB cluster from which to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#source_db_cluster_resource_id RdsDbCluster#source_db_cluster_resource_id}

---

##### `SourceRegion`<sup>Optional</sup> <a name="SourceRegion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceRegion"></a>

```go
SourceRegion *string
```

- *Type:* *string

The AWS Region which contains the source DB cluster when replicating a DB cluster.

For example, `us-east-1`.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#source_region RdsDbCluster#source_region}

---

##### `StorageEncrypted`<sup>Optional</sup> <a name="StorageEncrypted" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.storageEncrypted"></a>

```go
StorageEncrypted interface{}
```

- *Type:* interface{}

Indicates whether the DB cluster is encrypted.

If you specify the `KmsKeyId` property, then you must enable encryption.
If you specify the `SourceDBClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the specified `KmsKeyId` property is used.
If you specify the `SnapshotIdentifier` and the specified snapshot is encrypted, don't specify this property. The value is inherited from the snapshot, and the specified `KmsKeyId` property is used.
If you specify the `SnapshotIdentifier` and the specified snapshot isn't encrypted, you can use this property to specify that the restored DB cluster is encrypted. Specify the `KmsKeyId` property for the KMS key to use for encryption. If you don't want the restored DB cluster to be encrypted, then don't set this property or set it to `false`.
If you specify both the `StorageEncrypted` and `SnapshotIdentifier` properties without specifying the `KmsKeyId` property, then the restored DB cluster inherits the encryption settings from the DB snapshot that provide.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#storage_encrypted RdsDbCluster#storage_encrypted}

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.storageType"></a>

```go
StorageType *string
```

- *Type:* *string

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#storage_type RdsDbCluster#storage_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags to assign to the DB cluster.  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#tags RdsDbCluster#tags}

---

##### `UseLatestRestorableTime`<sup>Optional</sup> <a name="UseLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.useLatestRestorableTime"></a>

```go
UseLatestRestorableTime interface{}
```

- *Type:* interface{}

A value that indicates whether to restore the DB cluster to the latest restorable backup time.

By default, the DB cluster is not restored to the latest restorable backup time.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#use_latest_restorable_time RdsDbCluster#use_latest_restorable_time}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *[]*string
```

- *Type:* *[]*string

A list of EC2 VPC security groups to associate with this DB cluster.

If you plan to update the resource, don't specify VPC security groups in a shared VPC.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#vpc_security_group_ids RdsDbCluster#vpc_security_group_ids}

---

### RdsDbClusterEndpoint <a name="RdsDbClusterEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

&rdsdbcluster.RdsDbClusterEndpoint {

}
```


### RdsDbClusterMasterUserSecret <a name="RdsDbClusterMasterUserSecret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

&rdsdbcluster.RdsDbClusterMasterUserSecret {
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The AWS KMS key identifier that is used to encrypt the secret. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The AWS KMS key identifier that is used to encrypt the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#kms_key_id RdsDbCluster#kms_key_id}

---

### RdsDbClusterReadEndpoint <a name="RdsDbClusterReadEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

&rdsdbcluster.RdsDbClusterReadEndpoint {

}
```


### RdsDbClusterScalingConfiguration <a name="RdsDbClusterScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

&rdsdbcluster.RdsDbClusterScalingConfiguration {
	AutoPause: interface{},
	MaxCapacity: *f64,
	MinCapacity: *f64,
	SecondsBeforeTimeout: *f64,
	SecondsUntilAutoPause: *f64,
	TimeoutAction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.autoPause">AutoPause</a></code> | <code>interface{}</code> | Indicates whether to allow or disallow automatic pause for an Aurora DB cluster in ``serverless`` DB engine mode. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | The maximum capacity for an Aurora DB cluster in ``serverless`` DB engine mode. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | The minimum capacity for an Aurora DB cluster in ``serverless`` DB engine mode. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.secondsBeforeTimeout">SecondsBeforeTimeout</a></code> | <code>*f64</code> | The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.secondsUntilAutoPause">SecondsUntilAutoPause</a></code> | <code>*f64</code> | The time, in seconds, before an Aurora DB cluster in ``serverless`` mode is paused. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.timeoutAction">TimeoutAction</a></code> | <code>*string</code> | The action to take when the timeout is reached, either ``ForceApplyCapacityChange`` or ``RollbackCapacityChange``. |

---

##### `AutoPause`<sup>Optional</sup> <a name="AutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.autoPause"></a>

```go
AutoPause interface{}
```

- *Type:* interface{}

Indicates whether to allow or disallow automatic pause for an Aurora DB cluster in ``serverless`` DB engine mode.

A DB cluster can be paused only when it's idle (it has no connections).
If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot. In this case, the DB cluster is restored when there is a request to connect to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#auto_pause RdsDbCluster#auto_pause}

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.maxCapacity"></a>

```go
MaxCapacity *f64
```

- *Type:* *f64

The maximum capacity for an Aurora DB cluster in ``serverless`` DB engine mode.

For Aurora MySQL, valid capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, and `256`.
For Aurora PostgreSQL, valid capacity values are `2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`.
The maximum capacity must be greater than or equal to the minimum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#max_capacity RdsDbCluster#max_capacity}

---

##### `MinCapacity`<sup>Optional</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.minCapacity"></a>

```go
MinCapacity *f64
```

- *Type:* *f64

The minimum capacity for an Aurora DB cluster in ``serverless`` DB engine mode.

For Aurora MySQL, valid capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, and `256`.
For Aurora PostgreSQL, valid capacity values are `2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`.
The minimum capacity must be less than or equal to the maximum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#min_capacity RdsDbCluster#min_capacity}

---

##### `SecondsBeforeTimeout`<sup>Optional</sup> <a name="SecondsBeforeTimeout" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.secondsBeforeTimeout"></a>

```go
SecondsBeforeTimeout *f64
```

- *Type:* *f64

The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action.

The default is 300.
Specify a value between 60 and 600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#seconds_before_timeout RdsDbCluster#seconds_before_timeout}

---

##### `SecondsUntilAutoPause`<sup>Optional</sup> <a name="SecondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.secondsUntilAutoPause"></a>

```go
SecondsUntilAutoPause *f64
```

- *Type:* *f64

The time, in seconds, before an Aurora DB cluster in ``serverless`` mode is paused.

Specify a value between 300 and 86,400 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#seconds_until_auto_pause RdsDbCluster#seconds_until_auto_pause}

---

##### `TimeoutAction`<sup>Optional</sup> <a name="TimeoutAction" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.timeoutAction"></a>

```go
TimeoutAction *string
```

- *Type:* *string

The action to take when the timeout is reached, either ``ForceApplyCapacityChange`` or ``RollbackCapacityChange``.

`ForceApplyCapacityChange` sets the capacity to the specified value as soon as possible.
`RollbackCapacityChange`, the default, ignores the capacity change if a scaling point isn't found in the timeout period.
If you specify `ForceApplyCapacityChange`, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped.
For more information, see [Autoscaling for Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling) in the *Amazon Aurora User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#timeout_action RdsDbCluster#timeout_action}

---

### RdsDbClusterServerlessV2ScalingConfiguration <a name="RdsDbClusterServerlessV2ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

&rdsdbcluster.RdsDbClusterServerlessV2ScalingConfiguration {
	MaxCapacity: *f64,
	MinCapacity: *f64,
	SecondsUntilAutoPause: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.secondsUntilAutoPause">SecondsUntilAutoPause</a></code> | <code>*f64</code> | Specifies the number of seconds an Aurora Serverless v2 DB instance must be idle before Aurora attempts to automatically pause it. |

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.maxCapacity"></a>

```go
MaxCapacity *f64
```

- *Type:* *f64

The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.

You can specify ACU values in half-step increments, such as 40, 40.5, 41, and so on. The largest value that you can use is 128.
The maximum capacity must be higher than 0.5 ACUs. For more information, see [Choosing the maximum Aurora Serverless v2 capacity setting for a cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.setting-capacity.html#aurora-serverless-v2.max_capacity_considerations) in the *Amazon Aurora User Guide*.
Aurora automatically sets certain parameters for Aurora Serverless V2 DB instances to values that depend on the maximum ACU value in the capacity range. When you update the maximum capacity value, the `ParameterApplyStatus` value for the DB instance changes to `pending-reboot`. You can update the parameter values by rebooting the DB instance after changing the capacity range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#max_capacity RdsDbCluster#max_capacity}

---

##### `MinCapacity`<sup>Optional</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.minCapacity"></a>

```go
MinCapacity *f64
```

- *Type:* *f64

The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.

You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on. For Aurora versions that support the Aurora Serverless v2 auto-pause feature, the smallest value that you can use is 0. For versions that don't support Aurora Serverless v2 auto-pause, the smallest value that you can use is 0.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#min_capacity RdsDbCluster#min_capacity}

---

##### `SecondsUntilAutoPause`<sup>Optional</sup> <a name="SecondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.secondsUntilAutoPause"></a>

```go
SecondsUntilAutoPause *f64
```

- *Type:* *f64

Specifies the number of seconds an Aurora Serverless v2 DB instance must be idle before Aurora attempts to automatically pause it.

Specify a value between 300 seconds (five minutes) and 86,400 seconds (one day). The default is 300 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#seconds_until_auto_pause RdsDbCluster#seconds_until_auto_pause}

---

### RdsDbClusterTags <a name="RdsDbClusterTags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

&rdsdbcluster.RdsDbClusterTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.property.key">Key</a></code> | <code>*string</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.property.value">Value</a></code> | <code>*string</code> | A value is the optional value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#key RdsDbCluster#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#value RdsDbCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbClusterAssociatedRolesList <a name="RdsDbClusterAssociatedRolesList" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

rdsdbcluster.NewRdsDbClusterAssociatedRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RdsDbClusterAssociatedRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.get"></a>

```go
func Get(index *f64) RdsDbClusterAssociatedRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbClusterAssociatedRolesOutputReference <a name="RdsDbClusterAssociatedRolesOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

rdsdbcluster.NewRdsDbClusterAssociatedRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RdsDbClusterAssociatedRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFeatureName` <a name="ResetFeatureName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resetFeatureName"></a>

```go
func ResetFeatureName()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.featureNameInput">FeatureNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.featureName">FeatureName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FeatureNameInput`<sup>Optional</sup> <a name="FeatureNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.featureNameInput"></a>

```go
func FeatureNameInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.featureName"></a>

```go
func FeatureName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbClusterEndpointOutputReference <a name="RdsDbClusterEndpointOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

rdsdbcluster.NewRdsDbClusterEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RdsDbClusterEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpoint">RdsDbClusterEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() RdsDbClusterEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpoint">RdsDbClusterEndpoint</a>

---


### RdsDbClusterMasterUserSecretOutputReference <a name="RdsDbClusterMasterUserSecretOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

rdsdbcluster.NewRdsDbClusterMasterUserSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RdsDbClusterMasterUserSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbClusterReadEndpointOutputReference <a name="RdsDbClusterReadEndpointOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

rdsdbcluster.NewRdsDbClusterReadEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RdsDbClusterReadEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpoint">RdsDbClusterReadEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() RdsDbClusterReadEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpoint">RdsDbClusterReadEndpoint</a>

---


### RdsDbClusterScalingConfigurationOutputReference <a name="RdsDbClusterScalingConfigurationOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

rdsdbcluster.NewRdsDbClusterScalingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RdsDbClusterScalingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoPause` <a name="ResetAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetAutoPause"></a>

```go
func ResetAutoPause()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetMaxCapacity"></a>

```go
func ResetMaxCapacity()
```

##### `ResetMinCapacity` <a name="ResetMinCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetMinCapacity"></a>

```go
func ResetMinCapacity()
```

##### `ResetSecondsBeforeTimeout` <a name="ResetSecondsBeforeTimeout" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetSecondsBeforeTimeout"></a>

```go
func ResetSecondsBeforeTimeout()
```

##### `ResetSecondsUntilAutoPause` <a name="ResetSecondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetSecondsUntilAutoPause"></a>

```go
func ResetSecondsUntilAutoPause()
```

##### `ResetTimeoutAction` <a name="ResetTimeoutAction" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetTimeoutAction"></a>

```go
func ResetTimeoutAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.autoPauseInput">AutoPauseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsBeforeTimeoutInput">SecondsBeforeTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput">SecondsUntilAutoPauseInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.timeoutActionInput">TimeoutActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.autoPause">AutoPause</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsBeforeTimeout">SecondsBeforeTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsUntilAutoPause">SecondsUntilAutoPause</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.timeoutAction">TimeoutAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoPauseInput`<sup>Optional</sup> <a name="AutoPauseInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.autoPauseInput"></a>

```go
func AutoPauseInput() interface{}
```

- *Type:* interface{}

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.minCapacityInput"></a>

```go
func MinCapacityInput() *f64
```

- *Type:* *f64

---

##### `SecondsBeforeTimeoutInput`<sup>Optional</sup> <a name="SecondsBeforeTimeoutInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsBeforeTimeoutInput"></a>

```go
func SecondsBeforeTimeoutInput() *f64
```

- *Type:* *f64

---

##### `SecondsUntilAutoPauseInput`<sup>Optional</sup> <a name="SecondsUntilAutoPauseInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput"></a>

```go
func SecondsUntilAutoPauseInput() *f64
```

- *Type:* *f64

---

##### `TimeoutActionInput`<sup>Optional</sup> <a name="TimeoutActionInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.timeoutActionInput"></a>

```go
func TimeoutActionInput() *string
```

- *Type:* *string

---

##### `AutoPause`<sup>Required</sup> <a name="AutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.autoPause"></a>

```go
func AutoPause() interface{}
```

- *Type:* interface{}

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.minCapacity"></a>

```go
func MinCapacity() *f64
```

- *Type:* *f64

---

##### `SecondsBeforeTimeout`<sup>Required</sup> <a name="SecondsBeforeTimeout" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsBeforeTimeout"></a>

```go
func SecondsBeforeTimeout() *f64
```

- *Type:* *f64

---

##### `SecondsUntilAutoPause`<sup>Required</sup> <a name="SecondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsUntilAutoPause"></a>

```go
func SecondsUntilAutoPause() *f64
```

- *Type:* *f64

---

##### `TimeoutAction`<sup>Required</sup> <a name="TimeoutAction" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.timeoutAction"></a>

```go
func TimeoutAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbClusterServerlessV2ScalingConfigurationOutputReference <a name="RdsDbClusterServerlessV2ScalingConfigurationOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

rdsdbcluster.NewRdsDbClusterServerlessV2ScalingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RdsDbClusterServerlessV2ScalingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetMaxCapacity"></a>

```go
func ResetMaxCapacity()
```

##### `ResetMinCapacity` <a name="ResetMinCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetMinCapacity"></a>

```go
func ResetMinCapacity()
```

##### `ResetSecondsUntilAutoPause` <a name="ResetSecondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetSecondsUntilAutoPause"></a>

```go
func ResetSecondsUntilAutoPause()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput">SecondsUntilAutoPauseInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.secondsUntilAutoPause">SecondsUntilAutoPause</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput"></a>

```go
func MinCapacityInput() *f64
```

- *Type:* *f64

---

##### `SecondsUntilAutoPauseInput`<sup>Optional</sup> <a name="SecondsUntilAutoPauseInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput"></a>

```go
func SecondsUntilAutoPauseInput() *f64
```

- *Type:* *f64

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity"></a>

```go
func MinCapacity() *f64
```

- *Type:* *f64

---

##### `SecondsUntilAutoPause`<sup>Required</sup> <a name="SecondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.secondsUntilAutoPause"></a>

```go
func SecondsUntilAutoPause() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbClusterTagsList <a name="RdsDbClusterTagsList" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

rdsdbcluster.NewRdsDbClusterTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RdsDbClusterTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.get"></a>

```go
func Get(index *f64) RdsDbClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbClusterTagsOutputReference <a name="RdsDbClusterTagsOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbcluster"

rdsdbcluster.NewRdsDbClusterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RdsDbClusterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



