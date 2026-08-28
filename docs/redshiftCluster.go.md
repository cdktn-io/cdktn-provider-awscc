# `redshiftCluster` Submodule <a name="`redshiftCluster` Submodule" id="@cdktn/provider-awscc.redshiftCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftCluster <a name="RedshiftCluster" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster awscc_redshift_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftcluster"

redshiftcluster.NewRedshiftCluster(scope Construct, id *string, config RedshiftClusterConfig) RedshiftCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig">RedshiftClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig">RedshiftClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putEndpoint">PutEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties">PutLoggingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAllowVersionUpgrade">ResetAllowVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAquaConfigurationStatus">ResetAquaConfigurationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAutomatedSnapshotRetentionPeriod">ResetAutomatedSnapshotRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocation">ResetAvailabilityZoneRelocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocationStatus">ResetAvailabilityZoneRelocationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClassic">ResetClassic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterIdentifier">ResetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterParameterGroupName">ResetClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSecurityGroups">ResetClusterSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSubnetGroupName">ResetClusterSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterVersion">ResetClusterVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenance">ResetDeferMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceDuration">ResetDeferMaintenanceDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceEndTime">ResetDeferMaintenanceEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceStartTime">ResetDeferMaintenanceStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDestinationRegion">ResetDestinationRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetElasticIp">ResetElasticIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEnhancedVpcRouting">ResetEnhancedVpcRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmClientCertificateIdentifier">ResetHsmClientCertificateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmConfigurationIdentifier">ResetHsmConfigurationIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetIamRoles">ResetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetLoggingProperties">ResetLoggingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName">ResetMaintenanceTrackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManageMasterPassword">ResetManageMasterPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod">ResetManualSnapshotRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterPasswordSecretKmsKeyId">ResetMasterPasswordSecretKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterUserPassword">ResetMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMultiAz">ResetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNamespaceResourcePolicy">ResetNamespaceResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNumberOfNodes">ResetNumberOfNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOwnerAccount">ResetOwnerAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetResourceAction">ResetResourceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRevisionTarget">ResetRevisionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRotateEncryptionKey">ResetRotateEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier">ResetSnapshotClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyGrantName">ResetSnapshotCopyGrantName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyManual">ResetSnapshotCopyManual</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyRetentionPeriod">ResetSnapshotCopyRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotIdentifier">ResetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpoint` <a name="PutEndpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putEndpoint"></a>

```go
func PutEndpoint(value RedshiftClusterEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

---

##### `PutLoggingProperties` <a name="PutLoggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties"></a>

```go
func PutLoggingProperties(value RedshiftClusterLoggingProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowVersionUpgrade` <a name="ResetAllowVersionUpgrade" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAllowVersionUpgrade"></a>

```go
func ResetAllowVersionUpgrade()
```

##### `ResetAquaConfigurationStatus` <a name="ResetAquaConfigurationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAquaConfigurationStatus"></a>

```go
func ResetAquaConfigurationStatus()
```

##### `ResetAutomatedSnapshotRetentionPeriod` <a name="ResetAutomatedSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAutomatedSnapshotRetentionPeriod"></a>

```go
func ResetAutomatedSnapshotRetentionPeriod()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetAvailabilityZoneRelocation` <a name="ResetAvailabilityZoneRelocation" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocation"></a>

```go
func ResetAvailabilityZoneRelocation()
```

##### `ResetAvailabilityZoneRelocationStatus` <a name="ResetAvailabilityZoneRelocationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocationStatus"></a>

```go
func ResetAvailabilityZoneRelocationStatus()
```

##### `ResetClassic` <a name="ResetClassic" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClassic"></a>

```go
func ResetClassic()
```

##### `ResetClusterIdentifier` <a name="ResetClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterIdentifier"></a>

```go
func ResetClusterIdentifier()
```

##### `ResetClusterParameterGroupName` <a name="ResetClusterParameterGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterParameterGroupName"></a>

```go
func ResetClusterParameterGroupName()
```

##### `ResetClusterSecurityGroups` <a name="ResetClusterSecurityGroups" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSecurityGroups"></a>

```go
func ResetClusterSecurityGroups()
```

##### `ResetClusterSubnetGroupName` <a name="ResetClusterSubnetGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSubnetGroupName"></a>

```go
func ResetClusterSubnetGroupName()
```

##### `ResetClusterVersion` <a name="ResetClusterVersion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterVersion"></a>

```go
func ResetClusterVersion()
```

##### `ResetDeferMaintenance` <a name="ResetDeferMaintenance" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenance"></a>

```go
func ResetDeferMaintenance()
```

##### `ResetDeferMaintenanceDuration` <a name="ResetDeferMaintenanceDuration" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceDuration"></a>

```go
func ResetDeferMaintenanceDuration()
```

##### `ResetDeferMaintenanceEndTime` <a name="ResetDeferMaintenanceEndTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceEndTime"></a>

```go
func ResetDeferMaintenanceEndTime()
```

##### `ResetDeferMaintenanceStartTime` <a name="ResetDeferMaintenanceStartTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceStartTime"></a>

```go
func ResetDeferMaintenanceStartTime()
```

##### `ResetDestinationRegion` <a name="ResetDestinationRegion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDestinationRegion"></a>

```go
func ResetDestinationRegion()
```

##### `ResetElasticIp` <a name="ResetElasticIp" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetElasticIp"></a>

```go
func ResetElasticIp()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetEnhancedVpcRouting` <a name="ResetEnhancedVpcRouting" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEnhancedVpcRouting"></a>

```go
func ResetEnhancedVpcRouting()
```

##### `ResetHsmClientCertificateIdentifier` <a name="ResetHsmClientCertificateIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmClientCertificateIdentifier"></a>

```go
func ResetHsmClientCertificateIdentifier()
```

##### `ResetHsmConfigurationIdentifier` <a name="ResetHsmConfigurationIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmConfigurationIdentifier"></a>

```go
func ResetHsmConfigurationIdentifier()
```

##### `ResetIamRoles` <a name="ResetIamRoles" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetIamRoles"></a>

```go
func ResetIamRoles()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetLoggingProperties` <a name="ResetLoggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetLoggingProperties"></a>

```go
func ResetLoggingProperties()
```

##### `ResetMaintenanceTrackName` <a name="ResetMaintenanceTrackName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName"></a>

```go
func ResetMaintenanceTrackName()
```

##### `ResetManageMasterPassword` <a name="ResetManageMasterPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManageMasterPassword"></a>

```go
func ResetManageMasterPassword()
```

##### `ResetManualSnapshotRetentionPeriod` <a name="ResetManualSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod"></a>

```go
func ResetManualSnapshotRetentionPeriod()
```

##### `ResetMasterPasswordSecretKmsKeyId` <a name="ResetMasterPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterPasswordSecretKmsKeyId"></a>

```go
func ResetMasterPasswordSecretKmsKeyId()
```

##### `ResetMasterUserPassword` <a name="ResetMasterUserPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterUserPassword"></a>

```go
func ResetMasterUserPassword()
```

##### `ResetMultiAz` <a name="ResetMultiAz" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMultiAz"></a>

```go
func ResetMultiAz()
```

##### `ResetNamespaceResourcePolicy` <a name="ResetNamespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNamespaceResourcePolicy"></a>

```go
func ResetNamespaceResourcePolicy()
```

##### `ResetNumberOfNodes` <a name="ResetNumberOfNodes" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNumberOfNodes"></a>

```go
func ResetNumberOfNodes()
```

##### `ResetOwnerAccount` <a name="ResetOwnerAccount" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOwnerAccount"></a>

```go
func ResetOwnerAccount()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPreferredMaintenanceWindow"></a>

```go
func ResetPreferredMaintenanceWindow()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPubliclyAccessible"></a>

```go
func ResetPubliclyAccessible()
```

##### `ResetResourceAction` <a name="ResetResourceAction" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetResourceAction"></a>

```go
func ResetResourceAction()
```

##### `ResetRevisionTarget` <a name="ResetRevisionTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRevisionTarget"></a>

```go
func ResetRevisionTarget()
```

##### `ResetRotateEncryptionKey` <a name="ResetRotateEncryptionKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRotateEncryptionKey"></a>

```go
func ResetRotateEncryptionKey()
```

##### `ResetSnapshotClusterIdentifier` <a name="ResetSnapshotClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier"></a>

```go
func ResetSnapshotClusterIdentifier()
```

##### `ResetSnapshotCopyGrantName` <a name="ResetSnapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyGrantName"></a>

```go
func ResetSnapshotCopyGrantName()
```

##### `ResetSnapshotCopyManual` <a name="ResetSnapshotCopyManual" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyManual"></a>

```go
func ResetSnapshotCopyManual()
```

##### `ResetSnapshotCopyRetentionPeriod` <a name="ResetSnapshotCopyRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyRetentionPeriod"></a>

```go
func ResetSnapshotCopyRetentionPeriod()
```

##### `ResetSnapshotIdentifier` <a name="ResetSnapshotIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotIdentifier"></a>

```go
func ResetSnapshotIdentifier()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetVpcSecurityGroupIds"></a>

```go
func ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftcluster"

redshiftcluster.RedshiftCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftcluster"

redshiftcluster.RedshiftCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftcluster"

redshiftcluster.RedshiftCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftcluster"

redshiftcluster.RedshiftCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RedshiftCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RedshiftCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RedshiftCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterNamespaceArn">ClusterNamespaceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceIdentifier">DeferMaintenanceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference">RedshiftClusterEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingProperties">LoggingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference">RedshiftClusterLoggingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretArn">MasterPasswordSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList">RedshiftClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgradeInput">AllowVersionUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatusInput">AquaConfigurationStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriodInput">AutomatedSnapshotRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationInput">AvailabilityZoneRelocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatusInput">AvailabilityZoneRelocationStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classicInput">ClassicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupNameInput">ClusterParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroupsInput">ClusterSecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupNameInput">ClusterSubnetGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterTypeInput">ClusterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersionInput">ClusterVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbNameInput">DbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDurationInput">DeferMaintenanceDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTimeInput">DeferMaintenanceEndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceInput">DeferMaintenanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTimeInput">DeferMaintenanceStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegionInput">DestinationRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIpInput">ElasticIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpointInput">EndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRoutingInput">EnhancedVpcRoutingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifierInput">HsmClientCertificateIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifierInput">HsmConfigurationIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRolesInput">IamRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingPropertiesInput">LoggingPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput">MaintenanceTrackNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPasswordInput">ManageMasterPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriodInput">ManualSnapshotRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyIdInput">MasterPasswordSecretKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsernameInput">MasterUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPasswordInput">MasterUserPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAzInput">MultiAzInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicyInput">NamespaceResourcePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeTypeInput">NodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodesInput">NumberOfNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccountInput">OwnerAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceActionInput">ResourceActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTargetInput">RevisionTargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKeyInput">RotateEncryptionKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput">SnapshotClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantNameInput">SnapshotCopyGrantNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManualInput">SnapshotCopyManualInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriodInput">SnapshotCopyRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifierInput">SnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgrade">AllowVersionUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatus">AquaConfigurationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriod">AutomatedSnapshotRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocation">AvailabilityZoneRelocation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatus">AvailabilityZoneRelocationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classic">Classic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupName">ClusterParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroups">ClusterSecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupName">ClusterSubnetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterType">ClusterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersion">ClusterVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenance">DeferMaintenance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDuration">DeferMaintenanceDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTime">DeferMaintenanceEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTime">DeferMaintenanceStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegion">DestinationRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIp">ElasticIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRouting">EnhancedVpcRouting</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifier">HsmClientCertificateIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifier">HsmConfigurationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRoles">IamRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackName">MaintenanceTrackName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPassword">ManageMasterPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriod">ManualSnapshotRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyId">MasterPasswordSecretKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsername">MasterUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPassword">MasterUserPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAz">MultiAz</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicy">NamespaceResourcePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccount">OwnerAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceAction">ResourceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTarget">RevisionTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKey">RotateEncryptionKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifier">SnapshotClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantName">SnapshotCopyGrantName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManual">SnapshotCopyManual</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriod">SnapshotCopyRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterNamespaceArn`<sup>Required</sup> <a name="ClusterNamespaceArn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterNamespaceArn"></a>

```go
func ClusterNamespaceArn() *string
```

- *Type:* *string

---

##### `DeferMaintenanceIdentifier`<sup>Required</sup> <a name="DeferMaintenanceIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceIdentifier"></a>

```go
func DeferMaintenanceIdentifier() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpoint"></a>

```go
func Endpoint() RedshiftClusterEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference">RedshiftClusterEndpointOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoggingProperties`<sup>Required</sup> <a name="LoggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingProperties"></a>

```go
func LoggingProperties() RedshiftClusterLoggingPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference">RedshiftClusterLoggingPropertiesOutputReference</a>

---

##### `MasterPasswordSecretArn`<sup>Required</sup> <a name="MasterPasswordSecretArn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretArn"></a>

```go
func MasterPasswordSecretArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tags"></a>

```go
func Tags() RedshiftClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList">RedshiftClusterTagsList</a>

---

##### `AllowVersionUpgradeInput`<sup>Optional</sup> <a name="AllowVersionUpgradeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgradeInput"></a>

```go
func AllowVersionUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `AquaConfigurationStatusInput`<sup>Optional</sup> <a name="AquaConfigurationStatusInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatusInput"></a>

```go
func AquaConfigurationStatusInput() *string
```

- *Type:* *string

---

##### `AutomatedSnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="AutomatedSnapshotRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriodInput"></a>

```go
func AutomatedSnapshotRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `AvailabilityZoneRelocationInput`<sup>Optional</sup> <a name="AvailabilityZoneRelocationInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationInput"></a>

```go
func AvailabilityZoneRelocationInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZoneRelocationStatusInput`<sup>Optional</sup> <a name="AvailabilityZoneRelocationStatusInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatusInput"></a>

```go
func AvailabilityZoneRelocationStatusInput() *string
```

- *Type:* *string

---

##### `ClassicInput`<sup>Optional</sup> <a name="ClassicInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classicInput"></a>

```go
func ClassicInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifierInput"></a>

```go
func ClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `ClusterParameterGroupNameInput`<sup>Optional</sup> <a name="ClusterParameterGroupNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupNameInput"></a>

```go
func ClusterParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `ClusterSecurityGroupsInput`<sup>Optional</sup> <a name="ClusterSecurityGroupsInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroupsInput"></a>

```go
func ClusterSecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterSubnetGroupNameInput`<sup>Optional</sup> <a name="ClusterSubnetGroupNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupNameInput"></a>

```go
func ClusterSubnetGroupNameInput() *string
```

- *Type:* *string

---

##### `ClusterTypeInput`<sup>Optional</sup> <a name="ClusterTypeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterTypeInput"></a>

```go
func ClusterTypeInput() *string
```

- *Type:* *string

---

##### `ClusterVersionInput`<sup>Optional</sup> <a name="ClusterVersionInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersionInput"></a>

```go
func ClusterVersionInput() *string
```

- *Type:* *string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbNameInput"></a>

```go
func DbNameInput() *string
```

- *Type:* *string

---

##### `DeferMaintenanceDurationInput`<sup>Optional</sup> <a name="DeferMaintenanceDurationInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDurationInput"></a>

```go
func DeferMaintenanceDurationInput() *f64
```

- *Type:* *f64

---

##### `DeferMaintenanceEndTimeInput`<sup>Optional</sup> <a name="DeferMaintenanceEndTimeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTimeInput"></a>

```go
func DeferMaintenanceEndTimeInput() *string
```

- *Type:* *string

---

##### `DeferMaintenanceInput`<sup>Optional</sup> <a name="DeferMaintenanceInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceInput"></a>

```go
func DeferMaintenanceInput() interface{}
```

- *Type:* interface{}

---

##### `DeferMaintenanceStartTimeInput`<sup>Optional</sup> <a name="DeferMaintenanceStartTimeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTimeInput"></a>

```go
func DeferMaintenanceStartTimeInput() *string
```

- *Type:* *string

---

##### `DestinationRegionInput`<sup>Optional</sup> <a name="DestinationRegionInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegionInput"></a>

```go
func DestinationRegionInput() *string
```

- *Type:* *string

---

##### `ElasticIpInput`<sup>Optional</sup> <a name="ElasticIpInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIpInput"></a>

```go
func ElasticIpInput() *string
```

- *Type:* *string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpointInput"></a>

```go
func EndpointInput() interface{}
```

- *Type:* interface{}

---

##### `EnhancedVpcRoutingInput`<sup>Optional</sup> <a name="EnhancedVpcRoutingInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRoutingInput"></a>

```go
func EnhancedVpcRoutingInput() interface{}
```

- *Type:* interface{}

---

##### `HsmClientCertificateIdentifierInput`<sup>Optional</sup> <a name="HsmClientCertificateIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifierInput"></a>

```go
func HsmClientCertificateIdentifierInput() *string
```

- *Type:* *string

---

##### `HsmConfigurationIdentifierInput`<sup>Optional</sup> <a name="HsmConfigurationIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifierInput"></a>

```go
func HsmConfigurationIdentifierInput() *string
```

- *Type:* *string

---

##### `IamRolesInput`<sup>Optional</sup> <a name="IamRolesInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRolesInput"></a>

```go
func IamRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `LoggingPropertiesInput`<sup>Optional</sup> <a name="LoggingPropertiesInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingPropertiesInput"></a>

```go
func LoggingPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `MaintenanceTrackNameInput`<sup>Optional</sup> <a name="MaintenanceTrackNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput"></a>

```go
func MaintenanceTrackNameInput() *string
```

- *Type:* *string

---

##### `ManageMasterPasswordInput`<sup>Optional</sup> <a name="ManageMasterPasswordInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPasswordInput"></a>

```go
func ManageMasterPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `ManualSnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="ManualSnapshotRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriodInput"></a>

```go
func ManualSnapshotRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `MasterPasswordSecretKmsKeyIdInput`<sup>Optional</sup> <a name="MasterPasswordSecretKmsKeyIdInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyIdInput"></a>

```go
func MasterPasswordSecretKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `MasterUsernameInput`<sup>Optional</sup> <a name="MasterUsernameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsernameInput"></a>

```go
func MasterUsernameInput() *string
```

- *Type:* *string

---

##### `MasterUserPasswordInput`<sup>Optional</sup> <a name="MasterUserPasswordInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPasswordInput"></a>

```go
func MasterUserPasswordInput() *string
```

- *Type:* *string

---

##### `MultiAzInput`<sup>Optional</sup> <a name="MultiAzInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAzInput"></a>

```go
func MultiAzInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceResourcePolicyInput`<sup>Optional</sup> <a name="NamespaceResourcePolicyInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicyInput"></a>

```go
func NamespaceResourcePolicyInput() *string
```

- *Type:* *string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeTypeInput"></a>

```go
func NodeTypeInput() *string
```

- *Type:* *string

---

##### `NumberOfNodesInput`<sup>Optional</sup> <a name="NumberOfNodesInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodesInput"></a>

```go
func NumberOfNodesInput() *f64
```

- *Type:* *f64

---

##### `OwnerAccountInput`<sup>Optional</sup> <a name="OwnerAccountInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccountInput"></a>

```go
func OwnerAccountInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindowInput"></a>

```go
func PreferredMaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessibleInput"></a>

```go
func PubliclyAccessibleInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceActionInput`<sup>Optional</sup> <a name="ResourceActionInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceActionInput"></a>

```go
func ResourceActionInput() *string
```

- *Type:* *string

---

##### `RevisionTargetInput`<sup>Optional</sup> <a name="RevisionTargetInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTargetInput"></a>

```go
func RevisionTargetInput() *string
```

- *Type:* *string

---

##### `RotateEncryptionKeyInput`<sup>Optional</sup> <a name="RotateEncryptionKeyInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKeyInput"></a>

```go
func RotateEncryptionKeyInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotClusterIdentifierInput`<sup>Optional</sup> <a name="SnapshotClusterIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput"></a>

```go
func SnapshotClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `SnapshotCopyGrantNameInput`<sup>Optional</sup> <a name="SnapshotCopyGrantNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantNameInput"></a>

```go
func SnapshotCopyGrantNameInput() *string
```

- *Type:* *string

---

##### `SnapshotCopyManualInput`<sup>Optional</sup> <a name="SnapshotCopyManualInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManualInput"></a>

```go
func SnapshotCopyManualInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotCopyRetentionPeriodInput`<sup>Optional</sup> <a name="SnapshotCopyRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriodInput"></a>

```go
func SnapshotCopyRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `SnapshotIdentifierInput`<sup>Optional</sup> <a name="SnapshotIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifierInput"></a>

```go
func SnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowVersionUpgrade`<sup>Required</sup> <a name="AllowVersionUpgrade" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgrade"></a>

```go
func AllowVersionUpgrade() interface{}
```

- *Type:* interface{}

---

##### `AquaConfigurationStatus`<sup>Required</sup> <a name="AquaConfigurationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatus"></a>

```go
func AquaConfigurationStatus() *string
```

- *Type:* *string

---

##### `AutomatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="AutomatedSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriod"></a>

```go
func AutomatedSnapshotRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `AvailabilityZoneRelocation`<sup>Required</sup> <a name="AvailabilityZoneRelocation" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocation"></a>

```go
func AvailabilityZoneRelocation() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZoneRelocationStatus`<sup>Required</sup> <a name="AvailabilityZoneRelocationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatus"></a>

```go
func AvailabilityZoneRelocationStatus() *string
```

- *Type:* *string

---

##### `Classic`<sup>Required</sup> <a name="Classic" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classic"></a>

```go
func Classic() interface{}
```

- *Type:* interface{}

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifier"></a>

```go
func ClusterIdentifier() *string
```

- *Type:* *string

---

##### `ClusterParameterGroupName`<sup>Required</sup> <a name="ClusterParameterGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupName"></a>

```go
func ClusterParameterGroupName() *string
```

- *Type:* *string

---

##### `ClusterSecurityGroups`<sup>Required</sup> <a name="ClusterSecurityGroups" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroups"></a>

```go
func ClusterSecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterSubnetGroupName`<sup>Required</sup> <a name="ClusterSubnetGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupName"></a>

```go
func ClusterSubnetGroupName() *string
```

- *Type:* *string

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterType"></a>

```go
func ClusterType() *string
```

- *Type:* *string

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersion"></a>

```go
func ClusterVersion() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `DeferMaintenance`<sup>Required</sup> <a name="DeferMaintenance" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenance"></a>

```go
func DeferMaintenance() interface{}
```

- *Type:* interface{}

---

##### `DeferMaintenanceDuration`<sup>Required</sup> <a name="DeferMaintenanceDuration" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDuration"></a>

```go
func DeferMaintenanceDuration() *f64
```

- *Type:* *f64

---

##### `DeferMaintenanceEndTime`<sup>Required</sup> <a name="DeferMaintenanceEndTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTime"></a>

```go
func DeferMaintenanceEndTime() *string
```

- *Type:* *string

---

##### `DeferMaintenanceStartTime`<sup>Required</sup> <a name="DeferMaintenanceStartTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTime"></a>

```go
func DeferMaintenanceStartTime() *string
```

- *Type:* *string

---

##### `DestinationRegion`<sup>Required</sup> <a name="DestinationRegion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegion"></a>

```go
func DestinationRegion() *string
```

- *Type:* *string

---

##### `ElasticIp`<sup>Required</sup> <a name="ElasticIp" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIp"></a>

```go
func ElasticIp() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `EnhancedVpcRouting`<sup>Required</sup> <a name="EnhancedVpcRouting" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRouting"></a>

```go
func EnhancedVpcRouting() interface{}
```

- *Type:* interface{}

---

##### `HsmClientCertificateIdentifier`<sup>Required</sup> <a name="HsmClientCertificateIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifier"></a>

```go
func HsmClientCertificateIdentifier() *string
```

- *Type:* *string

---

##### `HsmConfigurationIdentifier`<sup>Required</sup> <a name="HsmConfigurationIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifier"></a>

```go
func HsmConfigurationIdentifier() *string
```

- *Type:* *string

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRoles"></a>

```go
func IamRoles() *[]*string
```

- *Type:* *[]*string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `MaintenanceTrackName`<sup>Required</sup> <a name="MaintenanceTrackName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackName"></a>

```go
func MaintenanceTrackName() *string
```

- *Type:* *string

---

##### `ManageMasterPassword`<sup>Required</sup> <a name="ManageMasterPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPassword"></a>

```go
func ManageMasterPassword() interface{}
```

- *Type:* interface{}

---

##### `ManualSnapshotRetentionPeriod`<sup>Required</sup> <a name="ManualSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriod"></a>

```go
func ManualSnapshotRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `MasterPasswordSecretKmsKeyId`<sup>Required</sup> <a name="MasterPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyId"></a>

```go
func MasterPasswordSecretKmsKeyId() *string
```

- *Type:* *string

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsername"></a>

```go
func MasterUsername() *string
```

- *Type:* *string

---

##### `MasterUserPassword`<sup>Required</sup> <a name="MasterUserPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPassword"></a>

```go
func MasterUserPassword() *string
```

- *Type:* *string

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAz"></a>

```go
func MultiAz() interface{}
```

- *Type:* interface{}

---

##### `NamespaceResourcePolicy`<sup>Required</sup> <a name="NamespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicy"></a>

```go
func NamespaceResourcePolicy() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodes"></a>

```go
func NumberOfNodes() *f64
```

- *Type:* *f64

---

##### `OwnerAccount`<sup>Required</sup> <a name="OwnerAccount" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccount"></a>

```go
func OwnerAccount() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessible"></a>

```go
func PubliclyAccessible() interface{}
```

- *Type:* interface{}

---

##### `ResourceAction`<sup>Required</sup> <a name="ResourceAction" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceAction"></a>

```go
func ResourceAction() *string
```

- *Type:* *string

---

##### `RevisionTarget`<sup>Required</sup> <a name="RevisionTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTarget"></a>

```go
func RevisionTarget() *string
```

- *Type:* *string

---

##### `RotateEncryptionKey`<sup>Required</sup> <a name="RotateEncryptionKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKey"></a>

```go
func RotateEncryptionKey() interface{}
```

- *Type:* interface{}

---

##### `SnapshotClusterIdentifier`<sup>Required</sup> <a name="SnapshotClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifier"></a>

```go
func SnapshotClusterIdentifier() *string
```

- *Type:* *string

---

##### `SnapshotCopyGrantName`<sup>Required</sup> <a name="SnapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantName"></a>

```go
func SnapshotCopyGrantName() *string
```

- *Type:* *string

---

##### `SnapshotCopyManual`<sup>Required</sup> <a name="SnapshotCopyManual" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManual"></a>

```go
func SnapshotCopyManual() interface{}
```

- *Type:* interface{}

---

##### `SnapshotCopyRetentionPeriod`<sup>Required</sup> <a name="SnapshotCopyRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriod"></a>

```go
func SnapshotCopyRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `SnapshotIdentifier`<sup>Required</sup> <a name="SnapshotIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifier"></a>

```go
func SnapshotIdentifier() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftClusterConfig <a name="RedshiftClusterConfig" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftcluster"

&redshiftcluster.RedshiftClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterType: *string,
	DbName: *string,
	MasterUsername: *string,
	NodeType: *string,
	AllowVersionUpgrade: interface{},
	AquaConfigurationStatus: *string,
	AutomatedSnapshotRetentionPeriod: *f64,
	AvailabilityZone: *string,
	AvailabilityZoneRelocation: interface{},
	AvailabilityZoneRelocationStatus: *string,
	Classic: interface{},
	ClusterIdentifier: *string,
	ClusterParameterGroupName: *string,
	ClusterSecurityGroups: *[]*string,
	ClusterSubnetGroupName: *string,
	ClusterVersion: *string,
	DeferMaintenance: interface{},
	DeferMaintenanceDuration: *f64,
	DeferMaintenanceEndTime: *string,
	DeferMaintenanceStartTime: *string,
	DestinationRegion: *string,
	ElasticIp: *string,
	Encrypted: interface{},
	Endpoint: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.redshiftCluster.RedshiftClusterEndpoint,
	EnhancedVpcRouting: interface{},
	HsmClientCertificateIdentifier: *string,
	HsmConfigurationIdentifier: *string,
	IamRoles: *[]*string,
	KmsKeyId: *string,
	LoggingProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.redshiftCluster.RedshiftClusterLoggingProperties,
	MaintenanceTrackName: *string,
	ManageMasterPassword: interface{},
	ManualSnapshotRetentionPeriod: *f64,
	MasterPasswordSecretKmsKeyId: *string,
	MasterUserPassword: *string,
	MultiAz: interface{},
	NamespaceResourcePolicy: *string,
	NumberOfNodes: *f64,
	OwnerAccount: *string,
	Port: *f64,
	PreferredMaintenanceWindow: *string,
	PubliclyAccessible: interface{},
	ResourceAction: *string,
	RevisionTarget: *string,
	RotateEncryptionKey: interface{},
	SnapshotClusterIdentifier: *string,
	SnapshotCopyGrantName: *string,
	SnapshotCopyManual: interface{},
	SnapshotCopyRetentionPeriod: *f64,
	SnapshotIdentifier: *string,
	Tags: interface{},
	VpcSecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterType">ClusterType</a></code> | <code>*string</code> | The type of the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dbName">DbName</a></code> | <code>*string</code> | The name of the first database to be created when the cluster is created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUsername">MasterUsername</a></code> | <code>*string</code> | The user name associated with the master user account for the cluster that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.nodeType">NodeType</a></code> | <code>*string</code> | The node type to be provisioned for the cluster.Valid Values: ds2.xlarge \| ds2.8xlarge \| dc1.large \| dc1.8xlarge \| dc2.large \| dc2.8xlarge \| ra3.large \| ra3.4xlarge \| ra3.16xlarge \| rg.large \| rg.xlarge \| rg.4xlarge \| rg.12xlarge. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade">AllowVersionUpgrade</a></code> | <code>interface{}</code> | Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus">AquaConfigurationStatus</a></code> | <code>*string</code> | The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod">AutomatedSnapshotRetentionPeriod</a></code> | <code>*f64</code> | The number of days that automated snapshots are retained. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocation">AvailabilityZoneRelocation</a></code> | <code>interface{}</code> | The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationStatus">AvailabilityZoneRelocationStatus</a></code> | <code>*string</code> | The availability zone relocation status of the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.classic">Classic</a></code> | <code>interface{}</code> | A boolean value indicating whether the resize operation is using the classic resize process. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | A unique identifier for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName">ClusterParameterGroupName</a></code> | <code>*string</code> | The name of the parameter group to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSecurityGroups">ClusterSecurityGroups</a></code> | <code>*[]*string</code> | A list of security groups to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName">ClusterSubnetGroupName</a></code> | <code>*string</code> | The name of a cluster subnet group to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterVersion">ClusterVersion</a></code> | <code>*string</code> | The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenance">DeferMaintenance</a></code> | <code>interface{}</code> | A boolean indicating whether to enable the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceDuration">DeferMaintenanceDuration</a></code> | <code>*f64</code> | An integer indicating the duration of the maintenance window in days. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceEndTime">DeferMaintenanceEndTime</a></code> | <code>*string</code> | A timestamp indicating end time for the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceStartTime">DeferMaintenanceStartTime</a></code> | <code>*string</code> | A timestamp indicating the start time for the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.destinationRegion">DestinationRegion</a></code> | <code>*string</code> | The destination AWS Region that you want to copy snapshots to. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.elasticIp">ElasticIp</a></code> | <code>*string</code> | The Elastic IP (EIP) address for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | If true, the data in the cluster is encrypted at rest. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#endpoint RedshiftCluster#endpoint}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting">EnhancedVpcRouting</a></code> | <code>interface{}</code> | An option that specifies whether to create the cluster with enhanced VPC routing enabled. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmClientCertificateIdentifier">HsmClientCertificateIdentifier</a></code> | <code>*string</code> | Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmConfigurationIdentifier">HsmConfigurationIdentifier</a></code> | <code>*string</code> | Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.iamRoles">IamRoles</a></code> | <code>*[]*string</code> | A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.loggingProperties">LoggingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#logging_properties RedshiftCluster#logging_properties}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName">MaintenanceTrackName</a></code> | <code>*string</code> | The name for the maintenance track that you want to assign for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manageMasterPassword">ManageMasterPassword</a></code> | <code>interface{}</code> | A boolean indicating if the redshift cluster's admin user credentials is managed by Redshift or not. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod">ManualSnapshotRetentionPeriod</a></code> | <code>*f64</code> | The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterPasswordSecretKmsKeyId">MasterPasswordSecretKmsKeyId</a></code> | <code>*string</code> | The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin user credentials secret. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUserPassword">MasterUserPassword</a></code> | <code>*string</code> | The password associated with the master user account for the cluster that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.multiAz">MultiAz</a></code> | <code>interface{}</code> | A boolean indicating if the redshift cluster is multi-az or not. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.namespaceResourcePolicy">NamespaceResourcePolicy</a></code> | <code>*string</code> | The namespace resource policy document that will be attached to a Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | The number of compute nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.ownerAccount">OwnerAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.port">Port</a></code> | <code>*f64</code> | The port number on which the cluster accepts incoming connections. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | The weekly time range (in UTC) during which automated cluster maintenance can occur. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | If true, the cluster can be accessed from a public network. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.resourceAction">ResourceAction</a></code> | <code>*string</code> | The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster, failover-primary-compute APIs. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.revisionTarget">RevisionTarget</a></code> | <code>*string</code> | The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.rotateEncryptionKey">RotateEncryptionKey</a></code> | <code>interface{}</code> | A boolean indicating if we want to rotate Encryption Keys. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier">SnapshotClusterIdentifier</a></code> | <code>*string</code> | The name of the cluster the source snapshot was created from. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyGrantName">SnapshotCopyGrantName</a></code> | <code>*string</code> | The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyManual">SnapshotCopyManual</a></code> | <code>interface{}</code> | Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyRetentionPeriod">SnapshotCopyRetentionPeriod</a></code> | <code>*f64</code> | The number of days to retain automated snapshots in the destination region after they are copied from the source region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>*string</code> | The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The list of tags for the cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterType"></a>

```go
ClusterType *string
```

- *Type:* *string

The type of the cluster.

When cluster type is specified as single-node, the NumberOfNodes parameter is not required and if multi-node, the NumberOfNodes parameter is required

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#cluster_type RedshiftCluster#cluster_type}

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dbName"></a>

```go
DbName *string
```

- *Type:* *string

The name of the first database to be created when the cluster is created.

To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#db_name RedshiftCluster#db_name}

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUsername"></a>

```go
MasterUsername *string
```

- *Type:* *string

The user name associated with the master user account for the cluster that is being created.

The user name can't be PUBLIC and first character must be a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#master_username RedshiftCluster#master_username}

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.nodeType"></a>

```go
NodeType *string
```

- *Type:* *string

The node type to be provisioned for the cluster.Valid Values: ds2.xlarge | ds2.8xlarge | dc1.large | dc1.8xlarge | dc2.large | dc2.8xlarge | ra3.large | ra3.4xlarge | ra3.16xlarge | rg.large | rg.xlarge | rg.4xlarge | rg.12xlarge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#node_type RedshiftCluster#node_type}

---

##### `AllowVersionUpgrade`<sup>Optional</sup> <a name="AllowVersionUpgrade" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade"></a>

```go
AllowVersionUpgrade interface{}
```

- *Type:* interface{}

Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster.

Default value is True

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}

---

##### `AquaConfigurationStatus`<sup>Optional</sup> <a name="AquaConfigurationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus"></a>

```go
AquaConfigurationStatus *string
```

- *Type:* *string

The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored.

Possible values include the following.

enabled - Use AQUA if it is available for the current Region and Amazon Redshift node type.
disabled - Don't use AQUA.
auto - Amazon Redshift determines whether to use AQUA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}

---

##### `AutomatedSnapshotRetentionPeriod`<sup>Optional</sup> <a name="AutomatedSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod"></a>

```go
AutomatedSnapshotRetentionPeriod *f64
```

- *Type:* *f64

The number of days that automated snapshots are retained.

If the value is 0, automated snapshots are disabled. Default value is 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster.

Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#availability_zone RedshiftCluster#availability_zone}

---

##### `AvailabilityZoneRelocation`<sup>Optional</sup> <a name="AvailabilityZoneRelocation" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocation"></a>

```go
AvailabilityZoneRelocation interface{}
```

- *Type:* interface{}

The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#availability_zone_relocation RedshiftCluster#availability_zone_relocation}

---

##### `AvailabilityZoneRelocationStatus`<sup>Optional</sup> <a name="AvailabilityZoneRelocationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationStatus"></a>

```go
AvailabilityZoneRelocationStatus *string
```

- *Type:* *string

The availability zone relocation status of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#availability_zone_relocation_status RedshiftCluster#availability_zone_relocation_status}

---

##### `Classic`<sup>Optional</sup> <a name="Classic" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.classic"></a>

```go
Classic interface{}
```

- *Type:* interface{}

A boolean value indicating whether the resize operation is using the classic resize process.

If you don't provide this parameter or set the value to false , the resize type is elastic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#classic RedshiftCluster#classic}

---

##### `ClusterIdentifier`<sup>Optional</sup> <a name="ClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterIdentifier"></a>

```go
ClusterIdentifier *string
```

- *Type:* *string

A unique identifier for the cluster.

You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}

---

##### `ClusterParameterGroupName`<sup>Optional</sup> <a name="ClusterParameterGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName"></a>

```go
ClusterParameterGroupName *string
```

- *Type:* *string

The name of the parameter group to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}

---

##### `ClusterSecurityGroups`<sup>Optional</sup> <a name="ClusterSecurityGroups" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSecurityGroups"></a>

```go
ClusterSecurityGroups *[]*string
```

- *Type:* *[]*string

A list of security groups to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#cluster_security_groups RedshiftCluster#cluster_security_groups}

---

##### `ClusterSubnetGroupName`<sup>Optional</sup> <a name="ClusterSubnetGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName"></a>

```go
ClusterSubnetGroupName *string
```

- *Type:* *string

The name of a cluster subnet group to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}

---

##### `ClusterVersion`<sup>Optional</sup> <a name="ClusterVersion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterVersion"></a>

```go
ClusterVersion *string
```

- *Type:* *string

The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#cluster_version RedshiftCluster#cluster_version}

---

##### `DeferMaintenance`<sup>Optional</sup> <a name="DeferMaintenance" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenance"></a>

```go
DeferMaintenance interface{}
```

- *Type:* interface{}

A boolean indicating whether to enable the deferred maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#defer_maintenance RedshiftCluster#defer_maintenance}

---

##### `DeferMaintenanceDuration`<sup>Optional</sup> <a name="DeferMaintenanceDuration" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceDuration"></a>

```go
DeferMaintenanceDuration *f64
```

- *Type:* *f64

An integer indicating the duration of the maintenance window in days.

If you specify a duration, you can't specify an end time. The duration must be 60 days or less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#defer_maintenance_duration RedshiftCluster#defer_maintenance_duration}

---

##### `DeferMaintenanceEndTime`<sup>Optional</sup> <a name="DeferMaintenanceEndTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceEndTime"></a>

```go
DeferMaintenanceEndTime *string
```

- *Type:* *string

A timestamp indicating end time for the deferred maintenance window.

If you specify an end time, you can't specify a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#defer_maintenance_end_time RedshiftCluster#defer_maintenance_end_time}

---

##### `DeferMaintenanceStartTime`<sup>Optional</sup> <a name="DeferMaintenanceStartTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceStartTime"></a>

```go
DeferMaintenanceStartTime *string
```

- *Type:* *string

A timestamp indicating the start time for the deferred maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#defer_maintenance_start_time RedshiftCluster#defer_maintenance_start_time}

---

##### `DestinationRegion`<sup>Optional</sup> <a name="DestinationRegion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.destinationRegion"></a>

```go
DestinationRegion *string
```

- *Type:* *string

The destination AWS Region that you want to copy snapshots to.

Constraints: Must be the name of a valid AWS Region. For more information, see Regions and Endpoints in the Amazon Web Services [https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region] General Reference

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#destination_region RedshiftCluster#destination_region}

---

##### `ElasticIp`<sup>Optional</sup> <a name="ElasticIp" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.elasticIp"></a>

```go
ElasticIp *string
```

- *Type:* *string

The Elastic IP (EIP) address for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

If true, the data in the cluster is encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#encrypted RedshiftCluster#encrypted}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.endpoint"></a>

```go
Endpoint RedshiftClusterEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#endpoint RedshiftCluster#endpoint}.

---

##### `EnhancedVpcRouting`<sup>Optional</sup> <a name="EnhancedVpcRouting" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting"></a>

```go
EnhancedVpcRouting interface{}
```

- *Type:* interface{}

An option that specifies whether to create the cluster with enhanced VPC routing enabled.

To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see Enhanced VPC Routing in the Amazon Redshift Cluster Management Guide.

If this option is true , enhanced VPC routing is enabled.

Default: false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}

---

##### `HsmClientCertificateIdentifier`<sup>Optional</sup> <a name="HsmClientCertificateIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmClientCertificateIdentifier"></a>

```go
HsmClientCertificateIdentifier *string
```

- *Type:* *string

Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#hsm_client_certificate_identifier RedshiftCluster#hsm_client_certificate_identifier}

---

##### `HsmConfigurationIdentifier`<sup>Optional</sup> <a name="HsmConfigurationIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmConfigurationIdentifier"></a>

```go
HsmConfigurationIdentifier *string
```

- *Type:* *string

Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#hsm_configuration_identifier RedshiftCluster#hsm_configuration_identifier}

---

##### `IamRoles`<sup>Optional</sup> <a name="IamRoles" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.iamRoles"></a>

```go
IamRoles *[]*string
```

- *Type:* *[]*string

A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services.

You must supply the IAM roles in their Amazon Resource Name (ARN) format. You can supply up to 50 IAM roles in a single request

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#iam_roles RedshiftCluster#iam_roles}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}

---

##### `LoggingProperties`<sup>Optional</sup> <a name="LoggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.loggingProperties"></a>

```go
LoggingProperties RedshiftClusterLoggingProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#logging_properties RedshiftCluster#logging_properties}.

---

##### `MaintenanceTrackName`<sup>Optional</sup> <a name="MaintenanceTrackName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName"></a>

```go
MaintenanceTrackName *string
```

- *Type:* *string

The name for the maintenance track that you want to assign for the cluster.

This name change is asynchronous. The new track name stays in the PendingModifiedValues for the cluster until the next maintenance window. When the maintenance track changes, the cluster is switched to the latest cluster release available for the maintenance track. At this point, the maintenance track name is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}

---

##### `ManageMasterPassword`<sup>Optional</sup> <a name="ManageMasterPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manageMasterPassword"></a>

```go
ManageMasterPassword interface{}
```

- *Type:* interface{}

A boolean indicating if the redshift cluster's admin user credentials is managed by Redshift or not.

You can't use MasterUserPassword if ManageMasterPassword is true. If ManageMasterPassword is false or not set, Amazon Redshift uses MasterUserPassword for the admin user account's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#manage_master_password RedshiftCluster#manage_master_password}

---

##### `ManualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="ManualSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod"></a>

```go
ManualSnapshotRetentionPeriod *f64
```

- *Type:* *f64

The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region.

If the value is -1, the manual snapshot is retained indefinitely.

The value must be either -1 or an integer between 1 and 3,653.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}

---

##### `MasterPasswordSecretKmsKeyId`<sup>Optional</sup> <a name="MasterPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterPasswordSecretKmsKeyId"></a>

```go
MasterPasswordSecretKmsKeyId *string
```

- *Type:* *string

The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin user credentials secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#master_password_secret_kms_key_id RedshiftCluster#master_password_secret_kms_key_id}

---

##### `MasterUserPassword`<sup>Optional</sup> <a name="MasterUserPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUserPassword"></a>

```go
MasterUserPassword *string
```

- *Type:* *string

The password associated with the master user account for the cluster that is being created.

You can't use MasterUserPassword if ManageMasterPassword is true. Password must be between 8 and 64 characters in length, should have at least one uppercase letter.Must contain at least one lowercase letter.Must contain one number.Can be any printable ASCII character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#master_user_password RedshiftCluster#master_user_password}

---

##### `MultiAz`<sup>Optional</sup> <a name="MultiAz" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.multiAz"></a>

```go
MultiAz interface{}
```

- *Type:* interface{}

A boolean indicating if the redshift cluster is multi-az or not.

If you don't provide this parameter or set the value to false, the redshift cluster will be single-az.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#multi_az RedshiftCluster#multi_az}

---

##### `NamespaceResourcePolicy`<sup>Optional</sup> <a name="NamespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.namespaceResourcePolicy"></a>

```go
NamespaceResourcePolicy *string
```

- *Type:* *string

The namespace resource policy document that will be attached to a Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#namespace_resource_policy RedshiftCluster#namespace_resource_policy}

---

##### `NumberOfNodes`<sup>Optional</sup> <a name="NumberOfNodes" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes"></a>

```go
NumberOfNodes *f64
```

- *Type:* *f64

The number of compute nodes in the cluster.

This parameter is required when the ClusterType parameter is specified as multi-node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}

---

##### `OwnerAccount`<sup>Optional</sup> <a name="OwnerAccount" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.ownerAccount"></a>

```go
OwnerAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port number on which the cluster accepts incoming connections.

The cluster is accessible only via the JDBC and ODBC connection strings

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#port RedshiftCluster#port}

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow"></a>

```go
PreferredMaintenanceWindow *string
```

- *Type:* *string

The weekly time range (in UTC) during which automated cluster maintenance can occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible"></a>

```go
PubliclyAccessible interface{}
```

- *Type:* interface{}

If true, the cluster can be accessed from a public network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}

---

##### `ResourceAction`<sup>Optional</sup> <a name="ResourceAction" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.resourceAction"></a>

```go
ResourceAction *string
```

- *Type:* *string

The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster, failover-primary-compute APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#resource_action RedshiftCluster#resource_action}

---

##### `RevisionTarget`<sup>Optional</sup> <a name="RevisionTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.revisionTarget"></a>

```go
RevisionTarget *string
```

- *Type:* *string

The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#revision_target RedshiftCluster#revision_target}

---

##### `RotateEncryptionKey`<sup>Optional</sup> <a name="RotateEncryptionKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.rotateEncryptionKey"></a>

```go
RotateEncryptionKey interface{}
```

- *Type:* interface{}

A boolean indicating if we want to rotate Encryption Keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#rotate_encryption_key RedshiftCluster#rotate_encryption_key}

---

##### `SnapshotClusterIdentifier`<sup>Optional</sup> <a name="SnapshotClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier"></a>

```go
SnapshotClusterIdentifier *string
```

- *Type:* *string

The name of the cluster the source snapshot was created from.

This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}

---

##### `SnapshotCopyGrantName`<sup>Optional</sup> <a name="SnapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyGrantName"></a>

```go
SnapshotCopyGrantName *string
```

- *Type:* *string

The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#snapshot_copy_grant_name RedshiftCluster#snapshot_copy_grant_name}

---

##### `SnapshotCopyManual`<sup>Optional</sup> <a name="SnapshotCopyManual" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyManual"></a>

```go
SnapshotCopyManual interface{}
```

- *Type:* interface{}

Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#snapshot_copy_manual RedshiftCluster#snapshot_copy_manual}

---

##### `SnapshotCopyRetentionPeriod`<sup>Optional</sup> <a name="SnapshotCopyRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyRetentionPeriod"></a>

```go
SnapshotCopyRetentionPeriod *f64
```

- *Type:* *f64

The number of days to retain automated snapshots in the destination region after they are copied from the source region.

Default is 7.

Constraints: Must be at least 1 and no more than 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#snapshot_copy_retention_period RedshiftCluster#snapshot_copy_retention_period}

---

##### `SnapshotIdentifier`<sup>Optional</sup> <a name="SnapshotIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier"></a>

```go
SnapshotIdentifier *string
```

- *Type:* *string

The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The list of tags for the cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#tags RedshiftCluster#tags}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *[]*string
```

- *Type:* *[]*string

A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}

---

### RedshiftClusterEndpoint <a name="RedshiftClusterEndpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftcluster"

&redshiftcluster.RedshiftClusterEndpoint {

}
```


### RedshiftClusterLoggingProperties <a name="RedshiftClusterLoggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftcluster"

&redshiftcluster.RedshiftClusterLoggingProperties {
	BucketName: *string,
	LogDestinationType: *string,
	LogExports: *[]*string,
	S3KeyPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#bucket_name RedshiftCluster#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logDestinationType">LogDestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logExports">LogExports</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#log_exports RedshiftCluster#log_exports}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#bucket_name RedshiftCluster#bucket_name}.

---

##### `LogDestinationType`<sup>Optional</sup> <a name="LogDestinationType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logDestinationType"></a>

```go
LogDestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}.

---

##### `LogExports`<sup>Optional</sup> <a name="LogExports" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logExports"></a>

```go
LogExports *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#log_exports RedshiftCluster#log_exports}.

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.s3KeyPrefix"></a>

```go
S3KeyPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}.

---

### RedshiftClusterTags <a name="RedshiftClusterTags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftcluster"

&redshiftcluster.RedshiftClusterTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#key RedshiftCluster#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster#value RedshiftCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftClusterEndpointOutputReference <a name="RedshiftClusterEndpointOutputReference" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftcluster"

redshiftcluster.NewRedshiftClusterEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedshiftClusterEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftClusterLoggingPropertiesOutputReference <a name="RedshiftClusterLoggingPropertiesOutputReference" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftcluster"

redshiftcluster.NewRedshiftClusterLoggingPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedshiftClusterLoggingPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogDestinationType">ResetLogDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogExports">ResetLogExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetS3KeyPrefix">ResetS3KeyPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetLogDestinationType` <a name="ResetLogDestinationType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogDestinationType"></a>

```go
func ResetLogDestinationType()
```

##### `ResetLogExports` <a name="ResetLogExports" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogExports"></a>

```go
func ResetLogExports()
```

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetS3KeyPrefix"></a>

```go
func ResetS3KeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationTypeInput">LogDestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExportsInput">LogExportsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationType">LogDestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExports">LogExports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `LogDestinationTypeInput`<sup>Optional</sup> <a name="LogDestinationTypeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationTypeInput"></a>

```go
func LogDestinationTypeInput() *string
```

- *Type:* *string

---

##### `LogExportsInput`<sup>Optional</sup> <a name="LogExportsInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExportsInput"></a>

```go
func LogExportsInput() *[]*string
```

- *Type:* *[]*string

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefixInput"></a>

```go
func S3KeyPrefixInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `LogDestinationType`<sup>Required</sup> <a name="LogDestinationType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationType"></a>

```go
func LogDestinationType() *string
```

- *Type:* *string

---

##### `LogExports`<sup>Required</sup> <a name="LogExports" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExports"></a>

```go
func LogExports() *[]*string
```

- *Type:* *[]*string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefix"></a>

```go
func S3KeyPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftClusterTagsList <a name="RedshiftClusterTagsList" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftcluster"

redshiftcluster.NewRedshiftClusterTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftClusterTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.get"></a>

```go
func Get(index *f64) RedshiftClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftClusterTagsOutputReference <a name="RedshiftClusterTagsOutputReference" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftcluster"

redshiftcluster.NewRedshiftClusterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftClusterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



