# `odbCloudAutonomousVmCluster` Submodule <a name="`odbCloudAutonomousVmCluster` Submodule" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbCloudAutonomousVmCluster <a name="OdbCloudAutonomousVmCluster" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster awscc_odb_cloud_autonomous_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudautonomousvmcluster"

odbcloudautonomousvmcluster.NewOdbCloudAutonomousVmCluster(scope Construct, id *string, config OdbCloudAutonomousVmClusterConfig) OdbCloudAutonomousVmCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig">OdbCloudAutonomousVmClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig">OdbCloudAutonomousVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putIamRoles">PutIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetAutonomousDataStorageSizeInTBs">ResetAutonomousDataStorageSizeInTBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetCloudExadataInfrastructureId">ResetCloudExadataInfrastructureId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetCpuCoreCountPerNode">ResetCpuCoreCountPerNode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDbServers">ResetDbServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetIamRoles">ResetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetIsMtlsEnabledVmCluster">ResetIsMtlsEnabledVmCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetMemoryPerOracleComputeUnitInGBs">ResetMemoryPerOracleComputeUnitInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetOdbNetworkId">ResetOdbNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetScanListenerPortNonTls">ResetScanListenerPortNonTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetScanListenerPortTls">ResetScanListenerPortTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTimeZone">ResetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTotalContainerDatabases">ResetTotalContainerDatabases</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIamRoles` <a name="PutIamRoles" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putIamRoles"></a>

```go
func PutIamRoles(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putIamRoles.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putMaintenanceWindow"></a>

```go
func PutMaintenanceWindow(value OdbCloudAutonomousVmClusterMaintenanceWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutonomousDataStorageSizeInTBs` <a name="ResetAutonomousDataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetAutonomousDataStorageSizeInTBs"></a>

```go
func ResetAutonomousDataStorageSizeInTBs()
```

##### `ResetCloudExadataInfrastructureId` <a name="ResetCloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetCloudExadataInfrastructureId"></a>

```go
func ResetCloudExadataInfrastructureId()
```

##### `ResetCpuCoreCountPerNode` <a name="ResetCpuCoreCountPerNode" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetCpuCoreCountPerNode"></a>

```go
func ResetCpuCoreCountPerNode()
```

##### `ResetDbServers` <a name="ResetDbServers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDbServers"></a>

```go
func ResetDbServers()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetIamRoles` <a name="ResetIamRoles" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetIamRoles"></a>

```go
func ResetIamRoles()
```

##### `ResetIsMtlsEnabledVmCluster` <a name="ResetIsMtlsEnabledVmCluster" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetIsMtlsEnabledVmCluster"></a>

```go
func ResetIsMtlsEnabledVmCluster()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetLicenseModel"></a>

```go
func ResetLicenseModel()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetMemoryPerOracleComputeUnitInGBs` <a name="ResetMemoryPerOracleComputeUnitInGBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetMemoryPerOracleComputeUnitInGBs"></a>

```go
func ResetMemoryPerOracleComputeUnitInGBs()
```

##### `ResetOdbNetworkId` <a name="ResetOdbNetworkId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetOdbNetworkId"></a>

```go
func ResetOdbNetworkId()
```

##### `ResetScanListenerPortNonTls` <a name="ResetScanListenerPortNonTls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetScanListenerPortNonTls"></a>

```go
func ResetScanListenerPortNonTls()
```

##### `ResetScanListenerPortTls` <a name="ResetScanListenerPortTls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetScanListenerPortTls"></a>

```go
func ResetScanListenerPortTls()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTimeZone"></a>

```go
func ResetTimeZone()
```

##### `ResetTotalContainerDatabases` <a name="ResetTotalContainerDatabases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTotalContainerDatabases"></a>

```go
func ResetTotalContainerDatabases()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OdbCloudAutonomousVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudautonomousvmcluster"

odbcloudautonomousvmcluster.OdbCloudAutonomousVmCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudautonomousvmcluster"

odbcloudautonomousvmcluster.OdbCloudAutonomousVmCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudautonomousvmcluster"

odbcloudautonomousvmcluster.OdbCloudAutonomousVmCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudautonomousvmcluster"

odbcloudautonomousvmcluster.OdbCloudAutonomousVmCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OdbCloudAutonomousVmCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OdbCloudAutonomousVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OdbCloudAutonomousVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OdbCloudAutonomousVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStoragePercentage">AutonomousDataStoragePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTBs">AvailableAutonomousDataStorageSizeInTBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableContainerDatabases">AvailableContainerDatabases</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableCpus">AvailableCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterArn">CloudAutonomousVmClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterId">CloudAutonomousVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.computeModel">ComputeModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuPercentage">CpuPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dataStorageSizeInGBs">DataStorageSizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dataStorageSizeInTBs">DataStorageSizeInTBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbNodeStorageSizeInGBs">DbNodeStorageSizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.exadataStorageInTBsLowestScaledValue">ExadataStorageInTBsLowestScaledValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.iamRoles">IamRoles</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList">OdbCloudAutonomousVmClusterIamRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference">OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maxAcdsLowestScaledValue">MaxAcdsLowestScaledValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memorySizeInGBs">MemorySizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases">NonProvisionableAutonomousContainerDatabases</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionableAutonomousContainerDatabases">ProvisionableAutonomousContainerDatabases</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionedAutonomousContainerDatabases">ProvisionedAutonomousContainerDatabases</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionedCpus">ProvisionedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.reservedCpus">ReservedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList">OdbCloudAutonomousVmClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTBsInput">AutonomousDataStorageSizeInTBsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureIdInput">CloudExadataInfrastructureIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCountPerNodeInput">CpuCoreCountPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbServersInput">DbServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.iamRolesInput">IamRolesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.isMtlsEnabledVmClusterInput">IsMtlsEnabledVmClusterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.licenseModelInput">LicenseModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGBsInput">MemoryPerOracleComputeUnitInGBsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNetworkIdInput">OdbNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortNonTlsInput">ScanListenerPortNonTlsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortTlsInput">ScanListenerPortTlsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.totalContainerDatabasesInput">TotalContainerDatabasesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTBs">AutonomousDataStorageSizeInTBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCountPerNode">CpuCoreCountPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbServers">DbServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.isMtlsEnabledVmCluster">IsMtlsEnabledVmCluster</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGBs">MemoryPerOracleComputeUnitInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNetworkId">OdbNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortNonTls">ScanListenerPortNonTls</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortTls">ScanListenerPortTls</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.totalContainerDatabases">TotalContainerDatabases</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutonomousDataStoragePercentage`<sup>Required</sup> <a name="AutonomousDataStoragePercentage" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStoragePercentage"></a>

```go
func AutonomousDataStoragePercentage() *f64
```

- *Type:* *f64

---

##### `AvailableAutonomousDataStorageSizeInTBs`<sup>Required</sup> <a name="AvailableAutonomousDataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTBs"></a>

```go
func AvailableAutonomousDataStorageSizeInTBs() *f64
```

- *Type:* *f64

---

##### `AvailableContainerDatabases`<sup>Required</sup> <a name="AvailableContainerDatabases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableContainerDatabases"></a>

```go
func AvailableContainerDatabases() *f64
```

- *Type:* *f64

---

##### `AvailableCpus`<sup>Required</sup> <a name="AvailableCpus" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableCpus"></a>

```go
func AvailableCpus() *f64
```

- *Type:* *f64

---

##### `CloudAutonomousVmClusterArn`<sup>Required</sup> <a name="CloudAutonomousVmClusterArn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterArn"></a>

```go
func CloudAutonomousVmClusterArn() *string
```

- *Type:* *string

---

##### `CloudAutonomousVmClusterId`<sup>Required</sup> <a name="CloudAutonomousVmClusterId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterId"></a>

```go
func CloudAutonomousVmClusterId() *string
```

- *Type:* *string

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.computeModel"></a>

```go
func ComputeModel() *string
```

- *Type:* *string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `CpuPercentage`<sup>Required</sup> <a name="CpuPercentage" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuPercentage"></a>

```go
func CpuPercentage() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInGBs`<sup>Required</sup> <a name="DataStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dataStorageSizeInGBs"></a>

```go
func DataStorageSizeInGBs() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInTBs`<sup>Required</sup> <a name="DataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dataStorageSizeInTBs"></a>

```go
func DataStorageSizeInTBs() *f64
```

- *Type:* *f64

---

##### `DbNodeStorageSizeInGBs`<sup>Required</sup> <a name="DbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbNodeStorageSizeInGBs"></a>

```go
func DbNodeStorageSizeInGBs() *f64
```

- *Type:* *f64

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `ExadataStorageInTBsLowestScaledValue`<sup>Required</sup> <a name="ExadataStorageInTBsLowestScaledValue" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.exadataStorageInTBsLowestScaledValue"></a>

```go
func ExadataStorageInTBsLowestScaledValue() *f64
```

- *Type:* *f64

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.iamRoles"></a>

```go
func IamRoles() OdbCloudAutonomousVmClusterIamRolesList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList">OdbCloudAutonomousVmClusterIamRolesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference">OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference</a>

---

##### `MaxAcdsLowestScaledValue`<sup>Required</sup> <a name="MaxAcdsLowestScaledValue" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maxAcdsLowestScaledValue"></a>

```go
func MaxAcdsLowestScaledValue() *f64
```

- *Type:* *f64

---

##### `MemorySizeInGBs`<sup>Required</sup> <a name="MemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memorySizeInGBs"></a>

```go
func MemorySizeInGBs() *f64
```

- *Type:* *f64

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `NonProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="NonProvisionableAutonomousContainerDatabases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases"></a>

```go
func NonProvisionableAutonomousContainerDatabases() *f64
```

- *Type:* *f64

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ociResourceAnchorName"></a>

```go
func OciResourceAnchorName() *string
```

- *Type:* *string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `ProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="ProvisionableAutonomousContainerDatabases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionableAutonomousContainerDatabases"></a>

```go
func ProvisionableAutonomousContainerDatabases() *f64
```

- *Type:* *f64

---

##### `ProvisionedAutonomousContainerDatabases`<sup>Required</sup> <a name="ProvisionedAutonomousContainerDatabases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionedAutonomousContainerDatabases"></a>

```go
func ProvisionedAutonomousContainerDatabases() *f64
```

- *Type:* *f64

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionedCpus"></a>

```go
func ProvisionedCpus() *f64
```

- *Type:* *f64

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.reclaimableCpus"></a>

```go
func ReclaimableCpus() *f64
```

- *Type:* *f64

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.reservedCpus"></a>

```go
func ReservedCpus() *f64
```

- *Type:* *f64

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tags"></a>

```go
func Tags() OdbCloudAutonomousVmClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList">OdbCloudAutonomousVmClusterTagsList</a>

---

##### `AutonomousDataStorageSizeInTBsInput`<sup>Optional</sup> <a name="AutonomousDataStorageSizeInTBsInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTBsInput"></a>

```go
func AutonomousDataStorageSizeInTBsInput() *f64
```

- *Type:* *f64

---

##### `CloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="CloudExadataInfrastructureIdInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureIdInput"></a>

```go
func CloudExadataInfrastructureIdInput() *string
```

- *Type:* *string

---

##### `CpuCoreCountPerNodeInput`<sup>Optional</sup> <a name="CpuCoreCountPerNodeInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCountPerNodeInput"></a>

```go
func CpuCoreCountPerNodeInput() *f64
```

- *Type:* *f64

---

##### `DbServersInput`<sup>Optional</sup> <a name="DbServersInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbServersInput"></a>

```go
func DbServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IamRolesInput`<sup>Optional</sup> <a name="IamRolesInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.iamRolesInput"></a>

```go
func IamRolesInput() interface{}
```

- *Type:* interface{}

---

##### `IsMtlsEnabledVmClusterInput`<sup>Optional</sup> <a name="IsMtlsEnabledVmClusterInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.isMtlsEnabledVmClusterInput"></a>

```go
func IsMtlsEnabledVmClusterInput() interface{}
```

- *Type:* interface{}

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.licenseModelInput"></a>

```go
func LicenseModelInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() interface{}
```

- *Type:* interface{}

---

##### `MemoryPerOracleComputeUnitInGBsInput`<sup>Optional</sup> <a name="MemoryPerOracleComputeUnitInGBsInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGBsInput"></a>

```go
func MemoryPerOracleComputeUnitInGBsInput() *f64
```

- *Type:* *f64

---

##### `OdbNetworkIdInput`<sup>Optional</sup> <a name="OdbNetworkIdInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNetworkIdInput"></a>

```go
func OdbNetworkIdInput() *string
```

- *Type:* *string

---

##### `ScanListenerPortNonTlsInput`<sup>Optional</sup> <a name="ScanListenerPortNonTlsInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortNonTlsInput"></a>

```go
func ScanListenerPortNonTlsInput() *f64
```

- *Type:* *f64

---

##### `ScanListenerPortTlsInput`<sup>Optional</sup> <a name="ScanListenerPortTlsInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortTlsInput"></a>

```go
func ScanListenerPortTlsInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `TotalContainerDatabasesInput`<sup>Optional</sup> <a name="TotalContainerDatabasesInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.totalContainerDatabasesInput"></a>

```go
func TotalContainerDatabasesInput() *f64
```

- *Type:* *f64

---

##### `AutonomousDataStorageSizeInTBs`<sup>Required</sup> <a name="AutonomousDataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTBs"></a>

```go
func AutonomousDataStorageSizeInTBs() *f64
```

- *Type:* *f64

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureId"></a>

```go
func CloudExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `CpuCoreCountPerNode`<sup>Required</sup> <a name="CpuCoreCountPerNode" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCountPerNode"></a>

```go
func CpuCoreCountPerNode() *f64
```

- *Type:* *f64

---

##### `DbServers`<sup>Required</sup> <a name="DbServers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbServers"></a>

```go
func DbServers() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `IsMtlsEnabledVmCluster`<sup>Required</sup> <a name="IsMtlsEnabledVmCluster" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.isMtlsEnabledVmCluster"></a>

```go
func IsMtlsEnabledVmCluster() interface{}
```

- *Type:* interface{}

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `MemoryPerOracleComputeUnitInGBs`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitInGBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGBs"></a>

```go
func MemoryPerOracleComputeUnitInGBs() *f64
```

- *Type:* *f64

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNetworkId"></a>

```go
func OdbNetworkId() *string
```

- *Type:* *string

---

##### `ScanListenerPortNonTls`<sup>Required</sup> <a name="ScanListenerPortNonTls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortNonTls"></a>

```go
func ScanListenerPortNonTls() *f64
```

- *Type:* *f64

---

##### `ScanListenerPortTls`<sup>Required</sup> <a name="ScanListenerPortTls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortTls"></a>

```go
func ScanListenerPortTls() *f64
```

- *Type:* *f64

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `TotalContainerDatabases`<sup>Required</sup> <a name="TotalContainerDatabases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.totalContainerDatabases"></a>

```go
func TotalContainerDatabases() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OdbCloudAutonomousVmClusterConfig <a name="OdbCloudAutonomousVmClusterConfig" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudautonomousvmcluster"

&odbcloudautonomousvmcluster.OdbCloudAutonomousVmClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AutonomousDataStorageSizeInTBs: *f64,
	CloudExadataInfrastructureId: *string,
	CpuCoreCountPerNode: *f64,
	DbServers: *[]*string,
	Description: *string,
	DisplayName: *string,
	IamRoles: interface{},
	IsMtlsEnabledVmCluster: interface{},
	LicenseModel: *string,
	MaintenanceWindow: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow,
	MemoryPerOracleComputeUnitInGBs: *f64,
	OdbNetworkId: *string,
	ScanListenerPortNonTls: *f64,
	ScanListenerPortTls: *f64,
	Tags: interface{},
	TimeZone: *string,
	TotalContainerDatabases: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.autonomousDataStorageSizeInTBs">AutonomousDataStorageSizeInTBs</a></code> | <code>*f64</code> | The data storage size allocated for Autonomous Databases in the Autonomous VM cluster, in TB. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>*string</code> | The unique identifier of the Cloud Exadata Infrastructure containing this Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.cpuCoreCountPerNode">CpuCoreCountPerNode</a></code> | <code>*f64</code> | The number of CPU cores enabled per node in the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.dbServers">DbServers</a></code> | <code>*[]*string</code> | The list of database servers associated with the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.description">Description</a></code> | <code>*string</code> | The user-provided description of the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.iamRoles">IamRoles</a></code> | <code>interface{}</code> | The AWS Identity and Access Management (IAM) service roles associated with the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.isMtlsEnabledVmCluster">IsMtlsEnabledVmCluster</a></code> | <code>interface{}</code> | Indicates whether mutual TLS (mTLS) authentication is enabled for the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | The Oracle license model that applies to the Autonomous VM cluster. Valid values are LICENSE_INCLUDED or BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a></code> | The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.memoryPerOracleComputeUnitInGBs">MemoryPerOracleComputeUnitInGBs</a></code> | <code>*f64</code> | The amount of memory allocated per Oracle Compute Unit, in GB. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.odbNetworkId">OdbNetworkId</a></code> | <code>*string</code> | The unique identifier of the ODB network associated with this Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.scanListenerPortNonTls">ScanListenerPortNonTls</a></code> | <code>*f64</code> | The SCAN listener port for non-TLS (TCP) protocol. The default is 1521. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.scanListenerPortTls">ScanListenerPortTls</a></code> | <code>*f64</code> | The SCAN listener port for TLS (TCP) protocol. The default is 2484. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | The time zone of the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.totalContainerDatabases">TotalContainerDatabases</a></code> | <code>*f64</code> | The total number of Autonomous Container Databases that can be created with the allocated local storage. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutonomousDataStorageSizeInTBs`<sup>Optional</sup> <a name="AutonomousDataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.autonomousDataStorageSizeInTBs"></a>

```go
AutonomousDataStorageSizeInTBs *f64
```

- *Type:* *f64

The data storage size allocated for Autonomous Databases in the Autonomous VM cluster, in TB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#autonomous_data_storage_size_in_t_bs OdbCloudAutonomousVmCluster#autonomous_data_storage_size_in_t_bs}

---

##### `CloudExadataInfrastructureId`<sup>Optional</sup> <a name="CloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.cloudExadataInfrastructureId"></a>

```go
CloudExadataInfrastructureId *string
```

- *Type:* *string

The unique identifier of the Cloud Exadata Infrastructure containing this Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#cloud_exadata_infrastructure_id OdbCloudAutonomousVmCluster#cloud_exadata_infrastructure_id}

---

##### `CpuCoreCountPerNode`<sup>Optional</sup> <a name="CpuCoreCountPerNode" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.cpuCoreCountPerNode"></a>

```go
CpuCoreCountPerNode *f64
```

- *Type:* *f64

The number of CPU cores enabled per node in the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#cpu_core_count_per_node OdbCloudAutonomousVmCluster#cpu_core_count_per_node}

---

##### `DbServers`<sup>Optional</sup> <a name="DbServers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.dbServers"></a>

```go
DbServers *[]*string
```

- *Type:* *[]*string

The list of database servers associated with the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#db_servers OdbCloudAutonomousVmCluster#db_servers}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The user-provided description of the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#description OdbCloudAutonomousVmCluster#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#display_name OdbCloudAutonomousVmCluster#display_name}

---

##### `IamRoles`<sup>Optional</sup> <a name="IamRoles" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.iamRoles"></a>

```go
IamRoles interface{}
```

- *Type:* interface{}

The AWS Identity and Access Management (IAM) service roles associated with the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#iam_roles OdbCloudAutonomousVmCluster#iam_roles}

---

##### `IsMtlsEnabledVmCluster`<sup>Optional</sup> <a name="IsMtlsEnabledVmCluster" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.isMtlsEnabledVmCluster"></a>

```go
IsMtlsEnabledVmCluster interface{}
```

- *Type:* interface{}

Indicates whether mutual TLS (mTLS) authentication is enabled for the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#is_mtls_enabled_vm_cluster OdbCloudAutonomousVmCluster#is_mtls_enabled_vm_cluster}

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.licenseModel"></a>

```go
LicenseModel *string
```

- *Type:* *string

The Oracle license model that applies to the Autonomous VM cluster. Valid values are LICENSE_INCLUDED or BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#license_model OdbCloudAutonomousVmCluster#license_model}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.maintenanceWindow"></a>

```go
MaintenanceWindow OdbCloudAutonomousVmClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>

The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#maintenance_window OdbCloudAutonomousVmCluster#maintenance_window}

---

##### `MemoryPerOracleComputeUnitInGBs`<sup>Optional</sup> <a name="MemoryPerOracleComputeUnitInGBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.memoryPerOracleComputeUnitInGBs"></a>

```go
MemoryPerOracleComputeUnitInGBs *f64
```

- *Type:* *f64

The amount of memory allocated per Oracle Compute Unit, in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#memory_per_oracle_compute_unit_in_g_bs OdbCloudAutonomousVmCluster#memory_per_oracle_compute_unit_in_g_bs}

---

##### `OdbNetworkId`<sup>Optional</sup> <a name="OdbNetworkId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.odbNetworkId"></a>

```go
OdbNetworkId *string
```

- *Type:* *string

The unique identifier of the ODB network associated with this Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#odb_network_id OdbCloudAutonomousVmCluster#odb_network_id}

---

##### `ScanListenerPortNonTls`<sup>Optional</sup> <a name="ScanListenerPortNonTls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.scanListenerPortNonTls"></a>

```go
ScanListenerPortNonTls *f64
```

- *Type:* *f64

The SCAN listener port for non-TLS (TCP) protocol. The default is 1521.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#scan_listener_port_non_tls OdbCloudAutonomousVmCluster#scan_listener_port_non_tls}

---

##### `ScanListenerPortTls`<sup>Optional</sup> <a name="ScanListenerPortTls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.scanListenerPortTls"></a>

```go
ScanListenerPortTls *f64
```

- *Type:* *f64

The SCAN listener port for TLS (TCP) protocol. The default is 2484.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#scan_listener_port_tls OdbCloudAutonomousVmCluster#scan_listener_port_tls}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#tags OdbCloudAutonomousVmCluster#tags}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

The time zone of the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#time_zone OdbCloudAutonomousVmCluster#time_zone}

---

##### `TotalContainerDatabases`<sup>Optional</sup> <a name="TotalContainerDatabases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.totalContainerDatabases"></a>

```go
TotalContainerDatabases *f64
```

- *Type:* *f64

The total number of Autonomous Container Databases that can be created with the allocated local storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#total_container_databases OdbCloudAutonomousVmCluster#total_container_databases}

---

### OdbCloudAutonomousVmClusterIamRoles <a name="OdbCloudAutonomousVmClusterIamRoles" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudautonomousvmcluster"

&odbcloudautonomousvmcluster.OdbCloudAutonomousVmClusterIamRoles {
	AwsIntegration: *string,
	IamRoleArn: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.awsIntegration">AwsIntegration</a></code> | <code>*string</code> | The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.status">Status</a></code> | <code>*string</code> | The current status of the AWS Identity and Access Management (IAM) service role. |

---

##### `AwsIntegration`<sup>Optional</sup> <a name="AwsIntegration" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.awsIntegration"></a>

```go
AwsIntegration *string
```

- *Type:* *string

The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#aws_integration OdbCloudAutonomousVmCluster#aws_integration}

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#iam_role_arn OdbCloudAutonomousVmCluster#iam_role_arn}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.status"></a>

```go
Status *string
```

- *Type:* *string

The current status of the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#status OdbCloudAutonomousVmCluster#status}

---

### OdbCloudAutonomousVmClusterMaintenanceWindow <a name="OdbCloudAutonomousVmClusterMaintenanceWindow" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudautonomousvmcluster"

&odbcloudautonomousvmcluster.OdbCloudAutonomousVmClusterMaintenanceWindow {
	DaysOfWeek: *[]*string,
	HoursOfDay: *[]*f64,
	LeadTimeInWeeks: *f64,
	Months: *[]*string,
	Preference: *string,
	WeeksOfMonth: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | The days of the week when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.hoursOfDay">HoursOfDay</a></code> | <code>*[]*f64</code> | The hours of the day when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>*f64</code> | The lead time in weeks before the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.months">Months</a></code> | <code>*[]*string</code> | The months when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.preference">Preference</a></code> | <code>*string</code> | The preference for the maintenance window scheduling. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*f64</code> | The weeks of the month when maintenance can be performed. |

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.daysOfWeek"></a>

```go
DaysOfWeek *[]*string
```

- *Type:* *[]*string

The days of the week when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#days_of_week OdbCloudAutonomousVmCluster#days_of_week}

---

##### `HoursOfDay`<sup>Optional</sup> <a name="HoursOfDay" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.hoursOfDay"></a>

```go
HoursOfDay *[]*f64
```

- *Type:* *[]*f64

The hours of the day when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#hours_of_day OdbCloudAutonomousVmCluster#hours_of_day}

---

##### `LeadTimeInWeeks`<sup>Optional</sup> <a name="LeadTimeInWeeks" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.leadTimeInWeeks"></a>

```go
LeadTimeInWeeks *f64
```

- *Type:* *f64

The lead time in weeks before the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#lead_time_in_weeks OdbCloudAutonomousVmCluster#lead_time_in_weeks}

---

##### `Months`<sup>Optional</sup> <a name="Months" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.months"></a>

```go
Months *[]*string
```

- *Type:* *[]*string

The months when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#months OdbCloudAutonomousVmCluster#months}

---

##### `Preference`<sup>Optional</sup> <a name="Preference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.preference"></a>

```go
Preference *string
```

- *Type:* *string

The preference for the maintenance window scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#preference OdbCloudAutonomousVmCluster#preference}

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.weeksOfMonth"></a>

```go
WeeksOfMonth *[]*f64
```

- *Type:* *[]*f64

The weeks of the month when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#weeks_of_month OdbCloudAutonomousVmCluster#weeks_of_month}

---

### OdbCloudAutonomousVmClusterTags <a name="OdbCloudAutonomousVmClusterTags" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudautonomousvmcluster"

&odbcloudautonomousvmcluster.OdbCloudAutonomousVmClusterTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_autonomous_vm_cluster#value OdbCloudAutonomousVmCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbCloudAutonomousVmClusterIamRolesList <a name="OdbCloudAutonomousVmClusterIamRolesList" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudautonomousvmcluster"

odbcloudautonomousvmcluster.NewOdbCloudAutonomousVmClusterIamRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbCloudAutonomousVmClusterIamRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.get"></a>

```go
func Get(index *f64) OdbCloudAutonomousVmClusterIamRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbCloudAutonomousVmClusterIamRolesOutputReference <a name="OdbCloudAutonomousVmClusterIamRolesOutputReference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudautonomousvmcluster"

odbcloudautonomousvmcluster.NewOdbCloudAutonomousVmClusterIamRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbCloudAutonomousVmClusterIamRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetAwsIntegration">ResetAwsIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsIntegration` <a name="ResetAwsIntegration" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetAwsIntegration"></a>

```go
func ResetAwsIntegration()
```

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetIamRoleArn"></a>

```go
func ResetIamRoleArn()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.awsIntegrationInput">AwsIntegrationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.awsIntegration">AwsIntegration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsIntegrationInput`<sup>Optional</sup> <a name="AwsIntegrationInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.awsIntegrationInput"></a>

```go
func AwsIntegrationInput() *string
```

- *Type:* *string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `AwsIntegration`<sup>Required</sup> <a name="AwsIntegration" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.awsIntegration"></a>

```go
func AwsIntegration() *string
```

- *Type:* *string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference <a name="OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudautonomousvmcluster"

odbcloudautonomousvmcluster.NewOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetHoursOfDay">ResetHoursOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetLeadTimeInWeeks">ResetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetMonths">ResetMonths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetPreference">ResetPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```go
func ResetDaysOfWeek()
```

##### `ResetHoursOfDay` <a name="ResetHoursOfDay" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```go
func ResetHoursOfDay()
```

##### `ResetLeadTimeInWeeks` <a name="ResetLeadTimeInWeeks" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```go
func ResetLeadTimeInWeeks()
```

##### `ResetMonths` <a name="ResetMonths" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetMonths"></a>

```go
func ResetMonths()
```

##### `ResetPreference` <a name="ResetPreference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetPreference"></a>

```go
func ResetPreference()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```go
func ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDayInput">HoursOfDayInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">LeadTimeInWeeksInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.monthsInput">MonthsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preferenceInput">PreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.months">Months</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() *[]*string
```

- *Type:* *[]*string

---

##### `HoursOfDayInput`<sup>Optional</sup> <a name="HoursOfDayInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```go
func HoursOfDayInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `LeadTimeInWeeksInput`<sup>Optional</sup> <a name="LeadTimeInWeeksInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```go
func LeadTimeInWeeksInput() *f64
```

- *Type:* *f64

---

##### `MonthsInput`<sup>Optional</sup> <a name="MonthsInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.monthsInput"></a>

```go
func MonthsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreferenceInput`<sup>Optional</sup> <a name="PreferenceInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preferenceInput"></a>

```go
func PreferenceInput() *string
```

- *Type:* *string

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```go
func WeeksOfMonthInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```go
func HoursOfDay() *[]*f64
```

- *Type:* *[]*f64

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```go
func LeadTimeInWeeks() *f64
```

- *Type:* *f64

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.months"></a>

```go
func Months() *[]*string
```

- *Type:* *[]*string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preference"></a>

```go
func Preference() *string
```

- *Type:* *string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```go
func WeeksOfMonth() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbCloudAutonomousVmClusterTagsList <a name="OdbCloudAutonomousVmClusterTagsList" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudautonomousvmcluster"

odbcloudautonomousvmcluster.NewOdbCloudAutonomousVmClusterTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbCloudAutonomousVmClusterTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.get"></a>

```go
func Get(index *f64) OdbCloudAutonomousVmClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbCloudAutonomousVmClusterTagsOutputReference <a name="OdbCloudAutonomousVmClusterTagsOutputReference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudautonomousvmcluster"

odbcloudautonomousvmcluster.NewOdbCloudAutonomousVmClusterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbCloudAutonomousVmClusterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



