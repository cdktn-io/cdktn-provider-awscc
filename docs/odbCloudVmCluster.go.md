# `odbCloudVmCluster` Submodule <a name="`odbCloudVmCluster` Submodule" id="@cdktn/provider-awscc.odbCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbCloudVmCluster <a name="OdbCloudVmCluster" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster awscc_odb_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

odbcloudvmcluster.NewOdbCloudVmCluster(scope Construct, id *string, config OdbCloudVmClusterConfig) OdbCloudVmCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig">OdbCloudVmClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig">OdbCloudVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDataCollectionOptions">PutDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDbNodes">PutDbNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putIamRoles">PutIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCloudExadataInfrastructureId">ResetCloudExadataInfrastructureId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCpuCoreCount">ResetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataCollectionOptions">ResetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataStorageSizeInTBs">ResetDataStorageSizeInTBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodes">ResetDbNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodeStorageSizeInGBs">ResetDbNodeStorageSizeInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbServers">ResetDbServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetGiVersion">ResetGiVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIamRoles">ResetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsLocalBackupEnabled">ResetIsLocalBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsSparseDiskgroupEnabled">ResetIsSparseDiskgroupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetMemorySizeInGBs">ResetMemorySizeInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOdbNetworkId">ResetOdbNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetScanListenerPortTcp">ResetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSshPublicKeys">ResetSshPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSystemVersion">ResetSystemVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataCollectionOptions` <a name="PutDataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDataCollectionOptions"></a>

```go
func PutDataCollectionOptions(value OdbCloudVmClusterDataCollectionOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

---

##### `PutDbNodes` <a name="PutDbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDbNodes"></a>

```go
func PutDbNodes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDbNodes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIamRoles` <a name="PutIamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putIamRoles"></a>

```go
func PutIamRoles(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putIamRoles.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCloudExadataInfrastructureId` <a name="ResetCloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCloudExadataInfrastructureId"></a>

```go
func ResetCloudExadataInfrastructureId()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetCpuCoreCount` <a name="ResetCpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCpuCoreCount"></a>

```go
func ResetCpuCoreCount()
```

##### `ResetDataCollectionOptions` <a name="ResetDataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataCollectionOptions"></a>

```go
func ResetDataCollectionOptions()
```

##### `ResetDataStorageSizeInTBs` <a name="ResetDataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataStorageSizeInTBs"></a>

```go
func ResetDataStorageSizeInTBs()
```

##### `ResetDbNodes` <a name="ResetDbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodes"></a>

```go
func ResetDbNodes()
```

##### `ResetDbNodeStorageSizeInGBs` <a name="ResetDbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodeStorageSizeInGBs"></a>

```go
func ResetDbNodeStorageSizeInGBs()
```

##### `ResetDbServers` <a name="ResetDbServers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbServers"></a>

```go
func ResetDbServers()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetGiVersion` <a name="ResetGiVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetGiVersion"></a>

```go
func ResetGiVersion()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetIamRoles` <a name="ResetIamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIamRoles"></a>

```go
func ResetIamRoles()
```

##### `ResetIsLocalBackupEnabled` <a name="ResetIsLocalBackupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsLocalBackupEnabled"></a>

```go
func ResetIsLocalBackupEnabled()
```

##### `ResetIsSparseDiskgroupEnabled` <a name="ResetIsSparseDiskgroupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsSparseDiskgroupEnabled"></a>

```go
func ResetIsSparseDiskgroupEnabled()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetLicenseModel"></a>

```go
func ResetLicenseModel()
```

##### `ResetMemorySizeInGBs` <a name="ResetMemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetMemorySizeInGBs"></a>

```go
func ResetMemorySizeInGBs()
```

##### `ResetOdbNetworkId` <a name="ResetOdbNetworkId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOdbNetworkId"></a>

```go
func ResetOdbNetworkId()
```

##### `ResetScanListenerPortTcp` <a name="ResetScanListenerPortTcp" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetScanListenerPortTcp"></a>

```go
func ResetScanListenerPortTcp()
```

##### `ResetSshPublicKeys` <a name="ResetSshPublicKeys" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSshPublicKeys"></a>

```go
func ResetSshPublicKeys()
```

##### `ResetSystemVersion` <a name="ResetSystemVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSystemVersion"></a>

```go
func ResetSystemVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTimeZone"></a>

```go
func ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OdbCloudVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

odbcloudvmcluster.OdbCloudVmCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

odbcloudvmcluster.OdbCloudVmCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

odbcloudvmcluster.OdbCloudVmCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

odbcloudvmcluster.OdbCloudVmCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OdbCloudVmCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OdbCloudVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OdbCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OdbCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterArn">CloudVmClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterId">CloudVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.computeModel">ComputeModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference">OdbCloudVmClusterDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodes">DbNodes</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList">OdbCloudVmClusterDbNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.diskRedundancy">DiskRedundancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRoles">IamRoles</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList">OdbCloudVmClusterIamRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanDnsName">ScanDnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanIpIds">ScanIpIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.storageSizeInGBs">StorageSizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList">OdbCloudVmClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.vipIds">VipIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureIdInput">CloudExadataInfrastructureIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptionsInput">DataCollectionOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBsInput">DataStorageSizeInTBsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodesInput">DbNodesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBsInput">DbNodeStorageSizeInGBsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServersInput">DbServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersionInput">GiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRolesInput">IamRolesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabledInput">IsLocalBackupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabledInput">IsSparseDiskgroupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModelInput">LicenseModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBsInput">MemorySizeInGBsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkIdInput">OdbNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcpInput">ScanListenerPortTcpInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersionInput">SystemVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBs">DataStorageSizeInTBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBs">DbNodeStorageSizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServers">DbServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersion">GiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabled">IsLocalBackupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabled">IsSparseDiskgroupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBs">MemorySizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkId">OdbNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersion">SystemVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudVmClusterArn`<sup>Required</sup> <a name="CloudVmClusterArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterArn"></a>

```go
func CloudVmClusterArn() *string
```

- *Type:* *string

---

##### `CloudVmClusterId`<sup>Required</sup> <a name="CloudVmClusterId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterId"></a>

```go
func CloudVmClusterId() *string
```

- *Type:* *string

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.computeModel"></a>

```go
func ComputeModel() *string
```

- *Type:* *string

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptions"></a>

```go
func DataCollectionOptions() OdbCloudVmClusterDataCollectionOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference">OdbCloudVmClusterDataCollectionOptionsOutputReference</a>

---

##### `DbNodes`<sup>Required</sup> <a name="DbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodes"></a>

```go
func DbNodes() OdbCloudVmClusterDbNodesList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList">OdbCloudVmClusterDbNodesList</a>

---

##### `DiskRedundancy`<sup>Required</sup> <a name="DiskRedundancy" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.diskRedundancy"></a>

```go
func DiskRedundancy() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRoles"></a>

```go
func IamRoles() OdbCloudVmClusterIamRolesList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList">OdbCloudVmClusterIamRolesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.listenerPort"></a>

```go
func ListenerPort() *f64
```

- *Type:* *f64

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociResourceAnchorName"></a>

```go
func OciResourceAnchorName() *string
```

- *Type:* *string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `ScanDnsName`<sup>Required</sup> <a name="ScanDnsName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanDnsName"></a>

```go
func ScanDnsName() *string
```

- *Type:* *string

---

##### `ScanIpIds`<sup>Required</sup> <a name="ScanIpIds" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanIpIds"></a>

```go
func ScanIpIds() *[]*string
```

- *Type:* *[]*string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `StorageSizeInGBs`<sup>Required</sup> <a name="StorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.storageSizeInGBs"></a>

```go
func StorageSizeInGBs() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tags"></a>

```go
func Tags() OdbCloudVmClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList">OdbCloudVmClusterTagsList</a>

---

##### `VipIds`<sup>Required</sup> <a name="VipIds" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.vipIds"></a>

```go
func VipIds() *[]*string
```

- *Type:* *[]*string

---

##### `CloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="CloudExadataInfrastructureIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureIdInput"></a>

```go
func CloudExadataInfrastructureIdInput() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCountInput"></a>

```go
func CpuCoreCountInput() *f64
```

- *Type:* *f64

---

##### `DataCollectionOptionsInput`<sup>Optional</sup> <a name="DataCollectionOptionsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptionsInput"></a>

```go
func DataCollectionOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `DataStorageSizeInTBsInput`<sup>Optional</sup> <a name="DataStorageSizeInTBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBsInput"></a>

```go
func DataStorageSizeInTBsInput() *f64
```

- *Type:* *f64

---

##### `DbNodesInput`<sup>Optional</sup> <a name="DbNodesInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodesInput"></a>

```go
func DbNodesInput() interface{}
```

- *Type:* interface{}

---

##### `DbNodeStorageSizeInGBsInput`<sup>Optional</sup> <a name="DbNodeStorageSizeInGBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBsInput"></a>

```go
func DbNodeStorageSizeInGBsInput() *f64
```

- *Type:* *f64

---

##### `DbServersInput`<sup>Optional</sup> <a name="DbServersInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServersInput"></a>

```go
func DbServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GiVersionInput`<sup>Optional</sup> <a name="GiVersionInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersionInput"></a>

```go
func GiVersionInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IamRolesInput`<sup>Optional</sup> <a name="IamRolesInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRolesInput"></a>

```go
func IamRolesInput() interface{}
```

- *Type:* interface{}

---

##### `IsLocalBackupEnabledInput`<sup>Optional</sup> <a name="IsLocalBackupEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabledInput"></a>

```go
func IsLocalBackupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsSparseDiskgroupEnabledInput`<sup>Optional</sup> <a name="IsSparseDiskgroupEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabledInput"></a>

```go
func IsSparseDiskgroupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModelInput"></a>

```go
func LicenseModelInput() *string
```

- *Type:* *string

---

##### `MemorySizeInGBsInput`<sup>Optional</sup> <a name="MemorySizeInGBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBsInput"></a>

```go
func MemorySizeInGBsInput() *f64
```

- *Type:* *f64

---

##### `OdbNetworkIdInput`<sup>Optional</sup> <a name="OdbNetworkIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkIdInput"></a>

```go
func OdbNetworkIdInput() *string
```

- *Type:* *string

---

##### `ScanListenerPortTcpInput`<sup>Optional</sup> <a name="ScanListenerPortTcpInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcpInput"></a>

```go
func ScanListenerPortTcpInput() *f64
```

- *Type:* *f64

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeysInput"></a>

```go
func SshPublicKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `SystemVersionInput`<sup>Optional</sup> <a name="SystemVersionInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersionInput"></a>

```go
func SystemVersionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureId"></a>

```go
func CloudExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInTBs`<sup>Required</sup> <a name="DataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBs"></a>

```go
func DataStorageSizeInTBs() *f64
```

- *Type:* *f64

---

##### `DbNodeStorageSizeInGBs`<sup>Required</sup> <a name="DbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBs"></a>

```go
func DbNodeStorageSizeInGBs() *f64
```

- *Type:* *f64

---

##### `DbServers`<sup>Required</sup> <a name="DbServers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServers"></a>

```go
func DbServers() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `GiVersion`<sup>Required</sup> <a name="GiVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersion"></a>

```go
func GiVersion() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `IsLocalBackupEnabled`<sup>Required</sup> <a name="IsLocalBackupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabled"></a>

```go
func IsLocalBackupEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsSparseDiskgroupEnabled`<sup>Required</sup> <a name="IsSparseDiskgroupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabled"></a>

```go
func IsSparseDiskgroupEnabled() interface{}
```

- *Type:* interface{}

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `MemorySizeInGBs`<sup>Required</sup> <a name="MemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBs"></a>

```go
func MemorySizeInGBs() *f64
```

- *Type:* *f64

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkId"></a>

```go
func OdbNetworkId() *string
```

- *Type:* *string

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcp"></a>

```go
func ScanListenerPortTcp() *f64
```

- *Type:* *f64

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeys"></a>

```go
func SshPublicKeys() *[]*string
```

- *Type:* *[]*string

---

##### `SystemVersion`<sup>Required</sup> <a name="SystemVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersion"></a>

```go
func SystemVersion() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OdbCloudVmClusterConfig <a name="OdbCloudVmClusterConfig" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

&odbcloudvmcluster.OdbCloudVmClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CloudExadataInfrastructureId: *string,
	ClusterName: *string,
	CpuCoreCount: *f64,
	DataCollectionOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions,
	DataStorageSizeInTBs: *f64,
	DbNodes: interface{},
	DbNodeStorageSizeInGBs: *f64,
	DbServers: *[]*string,
	DisplayName: *string,
	GiVersion: *string,
	Hostname: *string,
	IamRoles: interface{},
	IsLocalBackupEnabled: interface{},
	IsSparseDiskgroupEnabled: interface{},
	LicenseModel: *string,
	MemorySizeInGBs: *f64,
	OdbNetworkId: *string,
	ScanListenerPortTcp: *f64,
	SshPublicKeys: *[]*string,
	SystemVersion: *string,
	Tags: interface{},
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>*string</code> | The unique identifier of the Exadata infrastructure that this VM cluster belongs to. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | The name of the Grid Infrastructure (GI) cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | The number of CPU cores enabled on the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a></code> | The set of diagnostic collection options enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataStorageSizeInTBs">DataStorageSizeInTBs</a></code> | <code>*f64</code> | The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodes">DbNodes</a></code> | <code>interface{}</code> | The DB nodes that are implicitly created and managed as part of this VM Cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodeStorageSizeInGBs">DbNodeStorageSizeInGBs</a></code> | <code>*f64</code> | The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbServers">DbServers</a></code> | <code>*[]*string</code> | The list of database servers for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The user-friendly name for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.giVersion">GiVersion</a></code> | <code>*string</code> | The software version of the Oracle Grid Infrastructure (GI) for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.hostname">Hostname</a></code> | <code>*string</code> | The host name for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.iamRoles">IamRoles</a></code> | <code>interface{}</code> | The AWS Identity and Access Management (IAM) service roles associated with the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isLocalBackupEnabled">IsLocalBackupEnabled</a></code> | <code>interface{}</code> | Indicates whether database backups to local Exadata storage is enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isSparseDiskgroupEnabled">IsSparseDiskgroupEnabled</a></code> | <code>interface{}</code> | Indicates whether the VM cluster is configured with a sparse disk group. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | The Oracle license model applied to the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.memorySizeInGBs">MemorySizeInGBs</a></code> | <code>*f64</code> | The amount of memory, in gigabytes (GB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.odbNetworkId">OdbNetworkId</a></code> | <code>*string</code> | The unique identifier of the ODB network for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>*f64</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | The public key portion of one or more key pairs used for SSH access to the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.systemVersion">SystemVersion</a></code> | <code>*string</code> | The operating system version of the image chosen for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags to assign to the Vm Cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | The time zone of the VM cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudExadataInfrastructureId`<sup>Optional</sup> <a name="CloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cloudExadataInfrastructureId"></a>

```go
CloudExadataInfrastructureId *string
```

- *Type:* *string

The unique identifier of the Exadata infrastructure that this VM cluster belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#cloud_exadata_infrastructure_id OdbCloudVmCluster#cloud_exadata_infrastructure_id}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

The name of the Grid Infrastructure (GI) cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#cluster_name OdbCloudVmCluster#cluster_name}

---

##### `CpuCoreCount`<sup>Optional</sup> <a name="CpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cpuCoreCount"></a>

```go
CpuCoreCount *f64
```

- *Type:* *f64

The number of CPU cores enabled on the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#cpu_core_count OdbCloudVmCluster#cpu_core_count}

---

##### `DataCollectionOptions`<sup>Optional</sup> <a name="DataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataCollectionOptions"></a>

```go
DataCollectionOptions OdbCloudVmClusterDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

The set of diagnostic collection options enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#data_collection_options OdbCloudVmCluster#data_collection_options}

---

##### `DataStorageSizeInTBs`<sup>Optional</sup> <a name="DataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataStorageSizeInTBs"></a>

```go
DataStorageSizeInTBs *f64
```

- *Type:* *f64

The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#data_storage_size_in_t_bs OdbCloudVmCluster#data_storage_size_in_t_bs}

---

##### `DbNodes`<sup>Optional</sup> <a name="DbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodes"></a>

```go
DbNodes interface{}
```

- *Type:* interface{}

The DB nodes that are implicitly created and managed as part of this VM Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_nodes OdbCloudVmCluster#db_nodes}

---

##### `DbNodeStorageSizeInGBs`<sup>Optional</sup> <a name="DbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodeStorageSizeInGBs"></a>

```go
DbNodeStorageSizeInGBs *f64
```

- *Type:* *f64

The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_node_storage_size_in_g_bs OdbCloudVmCluster#db_node_storage_size_in_g_bs}

---

##### `DbServers`<sup>Optional</sup> <a name="DbServers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbServers"></a>

```go
DbServers *[]*string
```

- *Type:* *[]*string

The list of database servers for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_servers OdbCloudVmCluster#db_servers}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The user-friendly name for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#display_name OdbCloudVmCluster#display_name}

---

##### `GiVersion`<sup>Optional</sup> <a name="GiVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.giVersion"></a>

```go
GiVersion *string
```

- *Type:* *string

The software version of the Oracle Grid Infrastructure (GI) for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#gi_version OdbCloudVmCluster#gi_version}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

The host name for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#hostname OdbCloudVmCluster#hostname}

---

##### `IamRoles`<sup>Optional</sup> <a name="IamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.iamRoles"></a>

```go
IamRoles interface{}
```

- *Type:* interface{}

The AWS Identity and Access Management (IAM) service roles associated with the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#iam_roles OdbCloudVmCluster#iam_roles}

---

##### `IsLocalBackupEnabled`<sup>Optional</sup> <a name="IsLocalBackupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isLocalBackupEnabled"></a>

```go
IsLocalBackupEnabled interface{}
```

- *Type:* interface{}

Indicates whether database backups to local Exadata storage is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#is_local_backup_enabled OdbCloudVmCluster#is_local_backup_enabled}

---

##### `IsSparseDiskgroupEnabled`<sup>Optional</sup> <a name="IsSparseDiskgroupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isSparseDiskgroupEnabled"></a>

```go
IsSparseDiskgroupEnabled interface{}
```

- *Type:* interface{}

Indicates whether the VM cluster is configured with a sparse disk group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#is_sparse_diskgroup_enabled OdbCloudVmCluster#is_sparse_diskgroup_enabled}

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.licenseModel"></a>

```go
LicenseModel *string
```

- *Type:* *string

The Oracle license model applied to the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#license_model OdbCloudVmCluster#license_model}

---

##### `MemorySizeInGBs`<sup>Optional</sup> <a name="MemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.memorySizeInGBs"></a>

```go
MemorySizeInGBs *f64
```

- *Type:* *f64

The amount of memory, in gigabytes (GB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#memory_size_in_g_bs OdbCloudVmCluster#memory_size_in_g_bs}

---

##### `OdbNetworkId`<sup>Optional</sup> <a name="OdbNetworkId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.odbNetworkId"></a>

```go
OdbNetworkId *string
```

- *Type:* *string

The unique identifier of the ODB network for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#odb_network_id OdbCloudVmCluster#odb_network_id}

---

##### `ScanListenerPortTcp`<sup>Optional</sup> <a name="ScanListenerPortTcp" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.scanListenerPortTcp"></a>

```go
ScanListenerPortTcp *f64
```

- *Type:* *f64

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#scan_listener_port_tcp OdbCloudVmCluster#scan_listener_port_tcp}

---

##### `SshPublicKeys`<sup>Optional</sup> <a name="SshPublicKeys" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.sshPublicKeys"></a>

```go
SshPublicKeys *[]*string
```

- *Type:* *[]*string

The public key portion of one or more key pairs used for SSH access to the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#ssh_public_keys OdbCloudVmCluster#ssh_public_keys}

---

##### `SystemVersion`<sup>Optional</sup> <a name="SystemVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.systemVersion"></a>

```go
SystemVersion *string
```

- *Type:* *string

The operating system version of the image chosen for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#system_version OdbCloudVmCluster#system_version}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags to assign to the Vm Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

The time zone of the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#time_zone OdbCloudVmCluster#time_zone}

---

### OdbCloudVmClusterDataCollectionOptions <a name="OdbCloudVmClusterDataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

&odbcloudvmcluster.OdbCloudVmClusterDataCollectionOptions {
	IsDiagnosticsEventsEnabled: interface{},
	IsHealthMonitoringEnabled: interface{},
	IsIncidentLogsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | Indicates whether diagnostic collection is enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>interface{}</code> | Indicates whether health monitoring is enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>interface{}</code> | Indicates whether incident logs are enabled for the cloud VM cluster. |

---

##### `IsDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```go
IsDiagnosticsEventsEnabled interface{}
```

- *Type:* interface{}

Indicates whether diagnostic collection is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#is_diagnostics_events_enabled OdbCloudVmCluster#is_diagnostics_events_enabled}

---

##### `IsHealthMonitoringEnabled`<sup>Optional</sup> <a name="IsHealthMonitoringEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```go
IsHealthMonitoringEnabled interface{}
```

- *Type:* interface{}

Indicates whether health monitoring is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#is_health_monitoring_enabled OdbCloudVmCluster#is_health_monitoring_enabled}

---

##### `IsIncidentLogsEnabled`<sup>Optional</sup> <a name="IsIncidentLogsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```go
IsIncidentLogsEnabled interface{}
```

- *Type:* interface{}

Indicates whether incident logs are enabled for the cloud VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#is_incident_logs_enabled OdbCloudVmCluster#is_incident_logs_enabled}

---

### OdbCloudVmClusterDbNodes <a name="OdbCloudVmClusterDbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

&odbcloudvmcluster.OdbCloudVmClusterDbNodes {
	BackupIpId: *string,
	BackupVnic2Id: *string,
	CpuCoreCount: *f64,
	DbNodeArn: *string,
	DbNodeId: *string,
	DbNodeStorageSizeInGBs: *f64,
	DbServerId: *string,
	DbSystemId: *string,
	HostIpId: *string,
	Hostname: *string,
	MemorySizeInGBs: *f64,
	Ocid: *string,
	Status: *string,
	Tags: interface{},
	Vnic2Id: *string,
	VnicId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupIpId">BackupIpId</a></code> | <code>*string</code> | The Oracle Cloud ID (OCID) of the backup IP address that's associated with the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupVnic2Id">BackupVnic2Id</a></code> | <code>*string</code> | The OCID of the second backup virtual network interface card (VNIC) for the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | The number of CPU cores enabled on the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeArn">DbNodeArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeId">DbNodeId</a></code> | <code>*string</code> | The unique identifier of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeStorageSizeInGBs">DbNodeStorageSizeInGBs</a></code> | <code>*f64</code> | The amount of local node storage, in gigabytes (GB), that's allocated on the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbServerId">DbServerId</a></code> | <code>*string</code> | The unique identifier of the database server that's associated with the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | The OCID of the DB system. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostIpId">HostIpId</a></code> | <code>*string</code> | The OCID of the host IP address that's associated with the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostname">Hostname</a></code> | <code>*string</code> | The host name for the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.memorySizeInGBs">MemorySizeInGBs</a></code> | <code>*f64</code> | The amount of memory, in gigabytes (GB), that allocated on the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.ocid">Ocid</a></code> | <code>*string</code> | The OCID of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.status">Status</a></code> | <code>*string</code> | The current status of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnic2Id">Vnic2Id</a></code> | <code>*string</code> | The OCID of the second VNIC. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnicId">VnicId</a></code> | <code>*string</code> | The OCID of the VNIC. |

---

##### `BackupIpId`<sup>Optional</sup> <a name="BackupIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupIpId"></a>

```go
BackupIpId *string
```

- *Type:* *string

The Oracle Cloud ID (OCID) of the backup IP address that's associated with the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#backup_ip_id OdbCloudVmCluster#backup_ip_id}

---

##### `BackupVnic2Id`<sup>Optional</sup> <a name="BackupVnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupVnic2Id"></a>

```go
BackupVnic2Id *string
```

- *Type:* *string

The OCID of the second backup virtual network interface card (VNIC) for the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#backup_vnic_2_id OdbCloudVmCluster#backup_vnic_2_id}

---

##### `CpuCoreCount`<sup>Optional</sup> <a name="CpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.cpuCoreCount"></a>

```go
CpuCoreCount *f64
```

- *Type:* *f64

The number of CPU cores enabled on the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#cpu_core_count OdbCloudVmCluster#cpu_core_count}

---

##### `DbNodeArn`<sup>Optional</sup> <a name="DbNodeArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeArn"></a>

```go
DbNodeArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_node_arn OdbCloudVmCluster#db_node_arn}

---

##### `DbNodeId`<sup>Optional</sup> <a name="DbNodeId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeId"></a>

```go
DbNodeId *string
```

- *Type:* *string

The unique identifier of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_node_id OdbCloudVmCluster#db_node_id}

---

##### `DbNodeStorageSizeInGBs`<sup>Optional</sup> <a name="DbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeStorageSizeInGBs"></a>

```go
DbNodeStorageSizeInGBs *f64
```

- *Type:* *f64

The amount of local node storage, in gigabytes (GB), that's allocated on the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_node_storage_size_in_g_bs OdbCloudVmCluster#db_node_storage_size_in_g_bs}

---

##### `DbServerId`<sup>Optional</sup> <a name="DbServerId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbServerId"></a>

```go
DbServerId *string
```

- *Type:* *string

The unique identifier of the database server that's associated with the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_server_id OdbCloudVmCluster#db_server_id}

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbSystemId"></a>

```go
DbSystemId *string
```

- *Type:* *string

The OCID of the DB system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_system_id OdbCloudVmCluster#db_system_id}

---

##### `HostIpId`<sup>Optional</sup> <a name="HostIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostIpId"></a>

```go
HostIpId *string
```

- *Type:* *string

The OCID of the host IP address that's associated with the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#host_ip_id OdbCloudVmCluster#host_ip_id}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

The host name for the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#hostname OdbCloudVmCluster#hostname}

---

##### `MemorySizeInGBs`<sup>Optional</sup> <a name="MemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.memorySizeInGBs"></a>

```go
MemorySizeInGBs *f64
```

- *Type:* *f64

The amount of memory, in gigabytes (GB), that allocated on the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#memory_size_in_g_bs OdbCloudVmCluster#memory_size_in_g_bs}

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.ocid"></a>

```go
Ocid *string
```

- *Type:* *string

The OCID of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#ocid OdbCloudVmCluster#ocid}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.status"></a>

```go
Status *string
```

- *Type:* *string

The current status of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#status OdbCloudVmCluster#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}.

---

##### `Vnic2Id`<sup>Optional</sup> <a name="Vnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnic2Id"></a>

```go
Vnic2Id *string
```

- *Type:* *string

The OCID of the second VNIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#vnic_2_id OdbCloudVmCluster#vnic_2_id}

---

##### `VnicId`<sup>Optional</sup> <a name="VnicId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnicId"></a>

```go
VnicId *string
```

- *Type:* *string

The OCID of the VNIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#vnic_id OdbCloudVmCluster#vnic_id}

---

### OdbCloudVmClusterDbNodesTags <a name="OdbCloudVmClusterDbNodesTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

&odbcloudvmcluster.OdbCloudVmClusterDbNodesTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#value OdbCloudVmCluster#value}

---

### OdbCloudVmClusterIamRoles <a name="OdbCloudVmClusterIamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

&odbcloudvmcluster.OdbCloudVmClusterIamRoles {
	AwsIntegration: *string,
	IamRoleArn: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.awsIntegration">AwsIntegration</a></code> | <code>*string</code> | The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.status">Status</a></code> | <code>*string</code> | The current status of the AWS Identity and Access Management (IAM) service role. |

---

##### `AwsIntegration`<sup>Optional</sup> <a name="AwsIntegration" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.awsIntegration"></a>

```go
AwsIntegration *string
```

- *Type:* *string

The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#aws_integration OdbCloudVmCluster#aws_integration}

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#iam_role_arn OdbCloudVmCluster#iam_role_arn}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.status"></a>

```go
Status *string
```

- *Type:* *string

The current status of the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#status OdbCloudVmCluster#status}

---

### OdbCloudVmClusterTags <a name="OdbCloudVmClusterTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

&odbcloudvmcluster.OdbCloudVmClusterTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#value OdbCloudVmCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbCloudVmClusterDataCollectionOptionsOutputReference <a name="OdbCloudVmClusterDataCollectionOptionsOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

odbcloudvmcluster.NewOdbCloudVmClusterDataCollectionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OdbCloudVmClusterDataCollectionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">ResetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">ResetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">ResetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDiagnosticsEventsEnabled` <a name="ResetIsDiagnosticsEventsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```go
func ResetIsDiagnosticsEventsEnabled()
```

##### `ResetIsHealthMonitoringEnabled` <a name="ResetIsHealthMonitoringEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```go
func ResetIsHealthMonitoringEnabled()
```

##### `ResetIsIncidentLogsEnabled` <a name="ResetIsIncidentLogsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```go
func ResetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">IsDiagnosticsEventsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">IsHealthMonitoringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">IsIncidentLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```go
func IsDiagnosticsEventsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="IsHealthMonitoringEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```go
func IsHealthMonitoringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsIncidentLogsEnabledInput`<sup>Optional</sup> <a name="IsIncidentLogsEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```go
func IsIncidentLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```go
func IsDiagnosticsEventsEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsHealthMonitoringEnabled`<sup>Required</sup> <a name="IsHealthMonitoringEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```go
func IsHealthMonitoringEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```go
func IsIncidentLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbCloudVmClusterDbNodesList <a name="OdbCloudVmClusterDbNodesList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

odbcloudvmcluster.NewOdbCloudVmClusterDbNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbCloudVmClusterDbNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.get"></a>

```go
func Get(index *f64) OdbCloudVmClusterDbNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbCloudVmClusterDbNodesOutputReference <a name="OdbCloudVmClusterDbNodesOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

odbcloudvmcluster.NewOdbCloudVmClusterDbNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbCloudVmClusterDbNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupIpId">ResetBackupIpId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupVnic2Id">ResetBackupVnic2Id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetCpuCoreCount">ResetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeArn">ResetDbNodeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeId">ResetDbNodeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeStorageSizeInGBs">ResetDbNodeStorageSizeInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbServerId">ResetDbServerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbSystemId">ResetDbSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostIpId">ResetHostIpId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetMemorySizeInGBs">ResetMemorySizeInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetOcid">ResetOcid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnic2Id">ResetVnic2Id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnicId">ResetVnicId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBackupIpId` <a name="ResetBackupIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupIpId"></a>

```go
func ResetBackupIpId()
```

##### `ResetBackupVnic2Id` <a name="ResetBackupVnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupVnic2Id"></a>

```go
func ResetBackupVnic2Id()
```

##### `ResetCpuCoreCount` <a name="ResetCpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetCpuCoreCount"></a>

```go
func ResetCpuCoreCount()
```

##### `ResetDbNodeArn` <a name="ResetDbNodeArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeArn"></a>

```go
func ResetDbNodeArn()
```

##### `ResetDbNodeId` <a name="ResetDbNodeId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeId"></a>

```go
func ResetDbNodeId()
```

##### `ResetDbNodeStorageSizeInGBs` <a name="ResetDbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeStorageSizeInGBs"></a>

```go
func ResetDbNodeStorageSizeInGBs()
```

##### `ResetDbServerId` <a name="ResetDbServerId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbServerId"></a>

```go
func ResetDbServerId()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbSystemId"></a>

```go
func ResetDbSystemId()
```

##### `ResetHostIpId` <a name="ResetHostIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostIpId"></a>

```go
func ResetHostIpId()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetMemorySizeInGBs` <a name="ResetMemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetMemorySizeInGBs"></a>

```go
func ResetMemorySizeInGBs()
```

##### `ResetOcid` <a name="ResetOcid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetOcid"></a>

```go
func ResetOcid()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVnic2Id` <a name="ResetVnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnic2Id"></a>

```go
func ResetVnic2Id()
```

##### `ResetVnicId` <a name="ResetVnicId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnicId"></a>

```go
func ResetVnicId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList">OdbCloudVmClusterDbNodesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpIdInput">BackupIpIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2IdInput">BackupVnic2IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArnInput">DbNodeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeIdInput">DbNodeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBsInput">DbNodeStorageSizeInGBsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerIdInput">DbServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpIdInput">HostIpIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBsInput">MemorySizeInGBsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocidInput">OcidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2IdInput">Vnic2IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicIdInput">VnicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpId">BackupIpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2Id">BackupVnic2Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArn">DbNodeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeId">DbNodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBs">DbNodeStorageSizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerId">DbServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpId">HostIpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBs">MemorySizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2Id">Vnic2Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicId">VnicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tags"></a>

```go
func Tags() OdbCloudVmClusterDbNodesTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList">OdbCloudVmClusterDbNodesTagsList</a>

---

##### `BackupIpIdInput`<sup>Optional</sup> <a name="BackupIpIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpIdInput"></a>

```go
func BackupIpIdInput() *string
```

- *Type:* *string

---

##### `BackupVnic2IdInput`<sup>Optional</sup> <a name="BackupVnic2IdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2IdInput"></a>

```go
func BackupVnic2IdInput() *string
```

- *Type:* *string

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCountInput"></a>

```go
func CpuCoreCountInput() *f64
```

- *Type:* *f64

---

##### `DbNodeArnInput`<sup>Optional</sup> <a name="DbNodeArnInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArnInput"></a>

```go
func DbNodeArnInput() *string
```

- *Type:* *string

---

##### `DbNodeIdInput`<sup>Optional</sup> <a name="DbNodeIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeIdInput"></a>

```go
func DbNodeIdInput() *string
```

- *Type:* *string

---

##### `DbNodeStorageSizeInGBsInput`<sup>Optional</sup> <a name="DbNodeStorageSizeInGBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBsInput"></a>

```go
func DbNodeStorageSizeInGBsInput() *f64
```

- *Type:* *f64

---

##### `DbServerIdInput`<sup>Optional</sup> <a name="DbServerIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerIdInput"></a>

```go
func DbServerIdInput() *string
```

- *Type:* *string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemIdInput"></a>

```go
func DbSystemIdInput() *string
```

- *Type:* *string

---

##### `HostIpIdInput`<sup>Optional</sup> <a name="HostIpIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpIdInput"></a>

```go
func HostIpIdInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `MemorySizeInGBsInput`<sup>Optional</sup> <a name="MemorySizeInGBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBsInput"></a>

```go
func MemorySizeInGBsInput() *f64
```

- *Type:* *f64

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocidInput"></a>

```go
func OcidInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Vnic2IdInput`<sup>Optional</sup> <a name="Vnic2IdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2IdInput"></a>

```go
func Vnic2IdInput() *string
```

- *Type:* *string

---

##### `VnicIdInput`<sup>Optional</sup> <a name="VnicIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicIdInput"></a>

```go
func VnicIdInput() *string
```

- *Type:* *string

---

##### `BackupIpId`<sup>Required</sup> <a name="BackupIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpId"></a>

```go
func BackupIpId() *string
```

- *Type:* *string

---

##### `BackupVnic2Id`<sup>Required</sup> <a name="BackupVnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2Id"></a>

```go
func BackupVnic2Id() *string
```

- *Type:* *string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `DbNodeArn`<sup>Required</sup> <a name="DbNodeArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArn"></a>

```go
func DbNodeArn() *string
```

- *Type:* *string

---

##### `DbNodeId`<sup>Required</sup> <a name="DbNodeId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeId"></a>

```go
func DbNodeId() *string
```

- *Type:* *string

---

##### `DbNodeStorageSizeInGBs`<sup>Required</sup> <a name="DbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBs"></a>

```go
func DbNodeStorageSizeInGBs() *f64
```

- *Type:* *f64

---

##### `DbServerId`<sup>Required</sup> <a name="DbServerId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerId"></a>

```go
func DbServerId() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `HostIpId`<sup>Required</sup> <a name="HostIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpId"></a>

```go
func HostIpId() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `MemorySizeInGBs`<sup>Required</sup> <a name="MemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBs"></a>

```go
func MemorySizeInGBs() *f64
```

- *Type:* *f64

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Vnic2Id`<sup>Required</sup> <a name="Vnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2Id"></a>

```go
func Vnic2Id() *string
```

- *Type:* *string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicId"></a>

```go
func VnicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbCloudVmClusterDbNodesTagsList <a name="OdbCloudVmClusterDbNodesTagsList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

odbcloudvmcluster.NewOdbCloudVmClusterDbNodesTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbCloudVmClusterDbNodesTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.get"></a>

```go
func Get(index *f64) OdbCloudVmClusterDbNodesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbCloudVmClusterDbNodesTagsOutputReference <a name="OdbCloudVmClusterDbNodesTagsOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

odbcloudvmcluster.NewOdbCloudVmClusterDbNodesTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbCloudVmClusterDbNodesTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbCloudVmClusterIamRolesList <a name="OdbCloudVmClusterIamRolesList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

odbcloudvmcluster.NewOdbCloudVmClusterIamRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbCloudVmClusterIamRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.get"></a>

```go
func Get(index *f64) OdbCloudVmClusterIamRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbCloudVmClusterIamRolesOutputReference <a name="OdbCloudVmClusterIamRolesOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

odbcloudvmcluster.NewOdbCloudVmClusterIamRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbCloudVmClusterIamRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetAwsIntegration">ResetAwsIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsIntegration` <a name="ResetAwsIntegration" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetAwsIntegration"></a>

```go
func ResetAwsIntegration()
```

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetIamRoleArn"></a>

```go
func ResetIamRoleArn()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegrationInput">AwsIntegrationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegration">AwsIntegration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsIntegrationInput`<sup>Optional</sup> <a name="AwsIntegrationInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegrationInput"></a>

```go
func AwsIntegrationInput() *string
```

- *Type:* *string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `AwsIntegration`<sup>Required</sup> <a name="AwsIntegration" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegration"></a>

```go
func AwsIntegration() *string
```

- *Type:* *string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbCloudVmClusterTagsList <a name="OdbCloudVmClusterTagsList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

odbcloudvmcluster.NewOdbCloudVmClusterTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbCloudVmClusterTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.get"></a>

```go
func Get(index *f64) OdbCloudVmClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbCloudVmClusterTagsOutputReference <a name="OdbCloudVmClusterTagsOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudvmcluster"

odbcloudvmcluster.NewOdbCloudVmClusterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbCloudVmClusterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



