# `memorydbCluster` Submodule <a name="`memorydbCluster` Submodule" id="@cdktn/provider-awscc.memorydbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemorydbCluster <a name="MemorydbCluster" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster awscc_memorydb_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/memorydbcluster"

memorydbcluster.NewMemorydbCluster(scope Construct, id *string, config MemorydbClusterConfig) MemorydbCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig">MemorydbClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig">MemorydbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putClusterEndpoint">PutClusterEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetClusterEndpoint">ResetClusterEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDataTiering">ResetDataTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetFinalSnapshotName">ResetFinalSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetIpDiscovery">ResetIpDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMultiRegionClusterName">ResetMultiRegionClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumReplicasPerShard">ResetNumReplicasPerShard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumShards">ResetNumShards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetParameterGroupName">ResetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotArns">ResetSnapshotArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotName">ResetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotRetentionLimit">ResetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotWindow">ResetSnapshotWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicStatus">ResetSnsTopicStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSubnetGroupName">ResetSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTlsEnabled">ResetTlsEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClusterEndpoint` <a name="PutClusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putClusterEndpoint"></a>

```go
func PutClusterEndpoint(value MemorydbClusterClusterEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putClusterEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetAutoMinorVersionUpgrade"></a>

```go
func ResetAutoMinorVersionUpgrade()
```

##### `ResetClusterEndpoint` <a name="ResetClusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetClusterEndpoint"></a>

```go
func ResetClusterEndpoint()
```

##### `ResetDataTiering` <a name="ResetDataTiering" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDataTiering"></a>

```go
func ResetDataTiering()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngine"></a>

```go
func ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetFinalSnapshotName` <a name="ResetFinalSnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetFinalSnapshotName"></a>

```go
func ResetFinalSnapshotName()
```

##### `ResetIpDiscovery` <a name="ResetIpDiscovery" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetIpDiscovery"></a>

```go
func ResetIpDiscovery()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetMultiRegionClusterName` <a name="ResetMultiRegionClusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMultiRegionClusterName"></a>

```go
func ResetMultiRegionClusterName()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNetworkType"></a>

```go
func ResetNetworkType()
```

##### `ResetNumReplicasPerShard` <a name="ResetNumReplicasPerShard" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumReplicasPerShard"></a>

```go
func ResetNumReplicasPerShard()
```

##### `ResetNumShards` <a name="ResetNumShards" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumShards"></a>

```go
func ResetNumShards()
```

##### `ResetParameterGroupName` <a name="ResetParameterGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetParameterGroupName"></a>

```go
func ResetParameterGroupName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetPort"></a>

```go
func ResetPort()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSnapshotArns` <a name="ResetSnapshotArns" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotArns"></a>

```go
func ResetSnapshotArns()
```

##### `ResetSnapshotName` <a name="ResetSnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotName"></a>

```go
func ResetSnapshotName()
```

##### `ResetSnapshotRetentionLimit` <a name="ResetSnapshotRetentionLimit" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotRetentionLimit"></a>

```go
func ResetSnapshotRetentionLimit()
```

##### `ResetSnapshotWindow` <a name="ResetSnapshotWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotWindow"></a>

```go
func ResetSnapshotWindow()
```

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicArn"></a>

```go
func ResetSnsTopicArn()
```

##### `ResetSnsTopicStatus` <a name="ResetSnsTopicStatus" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicStatus"></a>

```go
func ResetSnsTopicStatus()
```

##### `ResetSubnetGroupName` <a name="ResetSubnetGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSubnetGroupName"></a>

```go
func ResetSubnetGroupName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTlsEnabled` <a name="ResetTlsEnabled" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTlsEnabled"></a>

```go
func ResetTlsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MemorydbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/memorydbcluster"

memorydbcluster.MemorydbCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/memorydbcluster"

memorydbcluster.MemorydbCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/memorydbcluster"

memorydbcluster.MemorydbCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/memorydbcluster"

memorydbcluster.MemorydbCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MemorydbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MemorydbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MemorydbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MemorydbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpoint">ClusterEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference">MemorydbClusterClusterEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupStatus">ParameterGroupStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList">MemorydbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclNameInput">AclNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpointInput">ClusterEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTieringInput">DataTieringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotNameInput">FinalSnapshotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscoveryInput">IpDiscoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterNameInput">MultiRegionClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkTypeInput">NetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeTypeInput">NodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShardInput">NumReplicasPerShardInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShardsInput">NumShardsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupNameInput">ParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArnsInput">SnapshotArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimitInput">SnapshotRetentionLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindowInput">SnapshotWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatusInput">SnsTopicStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupNameInput">SubnetGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabledInput">TlsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclName">AclName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTiering">DataTiering</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotName">FinalSnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscovery">IpDiscovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterName">MultiRegionClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShard">NumReplicasPerShard</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShards">NumShards</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupName">ParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArns">SnapshotArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindow">SnapshotWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatus">SnsTopicStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupName">SubnetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabled">TlsEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ClusterEndpoint`<sup>Required</sup> <a name="ClusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpoint"></a>

```go
func ClusterEndpoint() MemorydbClusterClusterEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference">MemorydbClusterClusterEndpointOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ParameterGroupStatus`<sup>Required</sup> <a name="ParameterGroupStatus" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupStatus"></a>

```go
func ParameterGroupStatus() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tags"></a>

```go
func Tags() MemorydbClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList">MemorydbClusterTagsList</a>

---

##### `AclNameInput`<sup>Optional</sup> <a name="AclNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclNameInput"></a>

```go
func AclNameInput() *string
```

- *Type:* *string

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgradeInput"></a>

```go
func AutoMinorVersionUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterEndpointInput`<sup>Optional</sup> <a name="ClusterEndpointInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpointInput"></a>

```go
func ClusterEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `DataTieringInput`<sup>Optional</sup> <a name="DataTieringInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTieringInput"></a>

```go
func DataTieringInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `FinalSnapshotNameInput`<sup>Optional</sup> <a name="FinalSnapshotNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotNameInput"></a>

```go
func FinalSnapshotNameInput() *string
```

- *Type:* *string

---

##### `IpDiscoveryInput`<sup>Optional</sup> <a name="IpDiscoveryInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscoveryInput"></a>

```go
func IpDiscoveryInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `MultiRegionClusterNameInput`<sup>Optional</sup> <a name="MultiRegionClusterNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterNameInput"></a>

```go
func MultiRegionClusterNameInput() *string
```

- *Type:* *string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkTypeInput"></a>

```go
func NetworkTypeInput() *string
```

- *Type:* *string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeTypeInput"></a>

```go
func NodeTypeInput() *string
```

- *Type:* *string

---

##### `NumReplicasPerShardInput`<sup>Optional</sup> <a name="NumReplicasPerShardInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShardInput"></a>

```go
func NumReplicasPerShardInput() *f64
```

- *Type:* *f64

---

##### `NumShardsInput`<sup>Optional</sup> <a name="NumShardsInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShardsInput"></a>

```go
func NumShardsInput() *f64
```

- *Type:* *f64

---

##### `ParameterGroupNameInput`<sup>Optional</sup> <a name="ParameterGroupNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupNameInput"></a>

```go
func ParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotArnsInput`<sup>Optional</sup> <a name="SnapshotArnsInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArnsInput"></a>

```go
func SnapshotArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotNameInput"></a>

```go
func SnapshotNameInput() *string
```

- *Type:* *string

---

##### `SnapshotRetentionLimitInput`<sup>Optional</sup> <a name="SnapshotRetentionLimitInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimitInput"></a>

```go
func SnapshotRetentionLimitInput() *f64
```

- *Type:* *f64

---

##### `SnapshotWindowInput`<sup>Optional</sup> <a name="SnapshotWindowInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindowInput"></a>

```go
func SnapshotWindowInput() *string
```

- *Type:* *string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArnInput"></a>

```go
func SnsTopicArnInput() *string
```

- *Type:* *string

---

##### `SnsTopicStatusInput`<sup>Optional</sup> <a name="SnsTopicStatusInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatusInput"></a>

```go
func SnsTopicStatusInput() *string
```

- *Type:* *string

---

##### `SubnetGroupNameInput`<sup>Optional</sup> <a name="SubnetGroupNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupNameInput"></a>

```go
func SubnetGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsEnabledInput`<sup>Optional</sup> <a name="TlsEnabledInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabledInput"></a>

```go
func TlsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AclName`<sup>Required</sup> <a name="AclName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclName"></a>

```go
func AclName() *string
```

- *Type:* *string

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgrade"></a>

```go
func AutoMinorVersionUpgrade() interface{}
```

- *Type:* interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `DataTiering`<sup>Required</sup> <a name="DataTiering" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTiering"></a>

```go
func DataTiering() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `FinalSnapshotName`<sup>Required</sup> <a name="FinalSnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotName"></a>

```go
func FinalSnapshotName() *string
```

- *Type:* *string

---

##### `IpDiscovery`<sup>Required</sup> <a name="IpDiscovery" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscovery"></a>

```go
func IpDiscovery() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() *string
```

- *Type:* *string

---

##### `MultiRegionClusterName`<sup>Required</sup> <a name="MultiRegionClusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterName"></a>

```go
func MultiRegionClusterName() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `NumReplicasPerShard`<sup>Required</sup> <a name="NumReplicasPerShard" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShard"></a>

```go
func NumReplicasPerShard() *f64
```

- *Type:* *f64

---

##### `NumShards`<sup>Required</sup> <a name="NumShards" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShards"></a>

```go
func NumShards() *f64
```

- *Type:* *f64

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupName"></a>

```go
func ParameterGroupName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotArns`<sup>Required</sup> <a name="SnapshotArns" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArns"></a>

```go
func SnapshotArns() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotName"></a>

```go
func SnapshotName() *string
```

- *Type:* *string

---

##### `SnapshotRetentionLimit`<sup>Required</sup> <a name="SnapshotRetentionLimit" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimit"></a>

```go
func SnapshotRetentionLimit() *f64
```

- *Type:* *f64

---

##### `SnapshotWindow`<sup>Required</sup> <a name="SnapshotWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindow"></a>

```go
func SnapshotWindow() *string
```

- *Type:* *string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArn"></a>

```go
func SnsTopicArn() *string
```

- *Type:* *string

---

##### `SnsTopicStatus`<sup>Required</sup> <a name="SnsTopicStatus" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatus"></a>

```go
func SnsTopicStatus() *string
```

- *Type:* *string

---

##### `SubnetGroupName`<sup>Required</sup> <a name="SubnetGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupName"></a>

```go
func SubnetGroupName() *string
```

- *Type:* *string

---

##### `TlsEnabled`<sup>Required</sup> <a name="TlsEnabled" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabled"></a>

```go
func TlsEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MemorydbClusterClusterEndpoint <a name="MemorydbClusterClusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/memorydbcluster"

&memorydbcluster.MemorydbClusterClusterEndpoint {

}
```


### MemorydbClusterConfig <a name="MemorydbClusterConfig" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/memorydbcluster"

&memorydbcluster.MemorydbClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AclName: *string,
	ClusterName: *string,
	NodeType: *string,
	AutoMinorVersionUpgrade: interface{},
	ClusterEndpoint: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.memorydbCluster.MemorydbClusterClusterEndpoint,
	DataTiering: *string,
	Description: *string,
	Engine: *string,
	EngineVersion: *string,
	FinalSnapshotName: *string,
	IpDiscovery: *string,
	KmsKeyId: *string,
	MaintenanceWindow: *string,
	MultiRegionClusterName: *string,
	NetworkType: *string,
	NumReplicasPerShard: *f64,
	NumShards: *f64,
	ParameterGroupName: *string,
	Port: *f64,
	SecurityGroupIds: *[]*string,
	SnapshotArns: *[]*string,
	SnapshotName: *string,
	SnapshotRetentionLimit: *f64,
	SnapshotWindow: *string,
	SnsTopicArn: *string,
	SnsTopicStatus: *string,
	SubnetGroupName: *string,
	Tags: interface{},
	TlsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.aclName">AclName</a></code> | <code>*string</code> | The name of the Access Control List to associate with the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | The name of the cluster. This value must be unique as it also serves as the cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.nodeType">NodeType</a></code> | <code>*string</code> | The compute and memory capacity of the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>interface{}</code> | A flag that enables automatic minor version upgrade when set to true. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterEndpoint">ClusterEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a></code> | The cluster endpoint. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dataTiering">DataTiering</a></code> | <code>*string</code> | Enables data tiering. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engine">Engine</a></code> | <code>*string</code> | The engine type used by the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | The Redis engine version used by the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.finalSnapshotName">FinalSnapshotName</a></code> | <code>*string</code> | The user-supplied name of a final cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.ipDiscovery">IpDiscovery</a></code> | <code>*string</code> | For clusters wth dual stack NetworkType, IpDiscovery controls the Ip protocol (ipv4 or ipv6) returned by the engine commands such as `cluster info` and `cluster nodes` which are used by clients to connect to the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The ID of the KMS key used to encrypt the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>*string</code> | Specifies the weekly time range during which maintenance on the cluster is performed. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.multiRegionClusterName">MultiRegionClusterName</a></code> | <code>*string</code> | The name of the Global Datastore, it is generated by MemoryDB adding a prefix to MultiRegionClusterNameSuffix. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.networkType">NetworkType</a></code> | <code>*string</code> | Must be either ipv4 \| ipv6 \| dual_stack. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numReplicasPerShard">NumReplicasPerShard</a></code> | <code>*f64</code> | The number of replicas to apply to each shard. The limit is 5. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numShards">NumShards</a></code> | <code>*f64</code> | The number of shards the cluster will contain. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.parameterGroupName">ParameterGroupName</a></code> | <code>*string</code> | The name of the parameter group associated with the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.port">Port</a></code> | <code>*f64</code> | The port number on which each member of the cluster accepts connections. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | One or more Amazon VPC security groups associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotArns">SnapshotArns</a></code> | <code>*[]*string</code> | A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | The name of a snapshot from which to restore data into the new cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>*f64</code> | The number of days for which MemoryDB retains automatic snapshots before deleting them. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotWindow">SnapshotWindow</a></code> | <code>*string</code> | The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicStatus">SnsTopicStatus</a></code> | <code>*string</code> | The status of the Amazon SNS notification topic. Notifications are sent only if the status is enabled. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.subnetGroupName">SubnetGroupName</a></code> | <code>*string</code> | The name of the subnet group to be used for the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tlsEnabled">TlsEnabled</a></code> | <code>interface{}</code> | A flag that enables in-transit encryption when set to true. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AclName`<sup>Required</sup> <a name="AclName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.aclName"></a>

```go
AclName *string
```

- *Type:* *string

The name of the Access Control List to associate with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#acl_name MemorydbCluster#acl_name}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

The name of the cluster. This value must be unique as it also serves as the cluster identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#cluster_name MemorydbCluster#cluster_name}

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.nodeType"></a>

```go
NodeType *string
```

- *Type:* *string

The compute and memory capacity of the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#node_type MemorydbCluster#node_type}

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.autoMinorVersionUpgrade"></a>

```go
AutoMinorVersionUpgrade interface{}
```

- *Type:* interface{}

A flag that enables automatic minor version upgrade when set to true.

You cannot modify the value of AutoMinorVersionUpgrade after the cluster is created. To enable AutoMinorVersionUpgrade on a cluster you must set AutoMinorVersionUpgrade to true when you create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#auto_minor_version_upgrade MemorydbCluster#auto_minor_version_upgrade}

---

##### `ClusterEndpoint`<sup>Optional</sup> <a name="ClusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterEndpoint"></a>

```go
ClusterEndpoint MemorydbClusterClusterEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

The cluster endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#cluster_endpoint MemorydbCluster#cluster_endpoint}

---

##### `DataTiering`<sup>Optional</sup> <a name="DataTiering" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dataTiering"></a>

```go
DataTiering *string
```

- *Type:* *string

Enables data tiering.

Data tiering is only supported for clusters using the r6gd node type. This parameter must be set when using r6gd nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#data_tiering MemorydbCluster#data_tiering}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#description MemorydbCluster#description}

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

The engine type used by the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#engine MemorydbCluster#engine}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

The Redis engine version used by the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#engine_version MemorydbCluster#engine_version}

---

##### `FinalSnapshotName`<sup>Optional</sup> <a name="FinalSnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.finalSnapshotName"></a>

```go
FinalSnapshotName *string
```

- *Type:* *string

The user-supplied name of a final cluster snapshot.

This is the unique name that identifies the snapshot. MemoryDB creates the snapshot, and then deletes the cluster immediately afterward.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#final_snapshot_name MemorydbCluster#final_snapshot_name}

---

##### `IpDiscovery`<sup>Optional</sup> <a name="IpDiscovery" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.ipDiscovery"></a>

```go
IpDiscovery *string
```

- *Type:* *string

For clusters wth dual stack NetworkType, IpDiscovery controls the Ip protocol (ipv4 or ipv6) returned by the engine commands such as `cluster info` and `cluster nodes` which are used by clients to connect to the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#ip_discovery MemorydbCluster#ip_discovery}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The ID of the KMS key used to encrypt the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#kms_key_id MemorydbCluster#kms_key_id}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.maintenanceWindow"></a>

```go
MaintenanceWindow *string
```

- *Type:* *string

Specifies the weekly time range during which maintenance on the cluster is performed.

It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#maintenance_window MemorydbCluster#maintenance_window}

---

##### `MultiRegionClusterName`<sup>Optional</sup> <a name="MultiRegionClusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.multiRegionClusterName"></a>

```go
MultiRegionClusterName *string
```

- *Type:* *string

The name of the Global Datastore, it is generated by MemoryDB adding a prefix to MultiRegionClusterNameSuffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#multi_region_cluster_name MemorydbCluster#multi_region_cluster_name}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.networkType"></a>

```go
NetworkType *string
```

- *Type:* *string

Must be either ipv4 | ipv6 | dual_stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#network_type MemorydbCluster#network_type}

---

##### `NumReplicasPerShard`<sup>Optional</sup> <a name="NumReplicasPerShard" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numReplicasPerShard"></a>

```go
NumReplicasPerShard *f64
```

- *Type:* *f64

The number of replicas to apply to each shard. The limit is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#num_replicas_per_shard MemorydbCluster#num_replicas_per_shard}

---

##### `NumShards`<sup>Optional</sup> <a name="NumShards" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numShards"></a>

```go
NumShards *f64
```

- *Type:* *f64

The number of shards the cluster will contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#num_shards MemorydbCluster#num_shards}

---

##### `ParameterGroupName`<sup>Optional</sup> <a name="ParameterGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.parameterGroupName"></a>

```go
ParameterGroupName *string
```

- *Type:* *string

The name of the parameter group associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#parameter_group_name MemorydbCluster#parameter_group_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port number on which each member of the cluster accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#port MemorydbCluster#port}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

One or more Amazon VPC security groups associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#security_group_ids MemorydbCluster#security_group_ids}

---

##### `SnapshotArns`<sup>Optional</sup> <a name="SnapshotArns" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotArns"></a>

```go
SnapshotArns *[]*string
```

- *Type:* *[]*string

A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3.

The snapshot files are used to populate the new cluster. The Amazon S3 object name in the ARN cannot contain any commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#snapshot_arns MemorydbCluster#snapshot_arns}

---

##### `SnapshotName`<sup>Optional</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotName"></a>

```go
SnapshotName *string
```

- *Type:* *string

The name of a snapshot from which to restore data into the new cluster.

The snapshot status changes to restoring while the new cluster is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#snapshot_name MemorydbCluster#snapshot_name}

---

##### `SnapshotRetentionLimit`<sup>Optional</sup> <a name="SnapshotRetentionLimit" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotRetentionLimit"></a>

```go
SnapshotRetentionLimit *f64
```

- *Type:* *f64

The number of days for which MemoryDB retains automatic snapshots before deleting them.

For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#snapshot_retention_limit MemorydbCluster#snapshot_retention_limit}

---

##### `SnapshotWindow`<sup>Optional</sup> <a name="SnapshotWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotWindow"></a>

```go
SnapshotWindow *string
```

- *Type:* *string

The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#snapshot_window MemorydbCluster#snapshot_window}

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicArn"></a>

```go
SnsTopicArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#sns_topic_arn MemorydbCluster#sns_topic_arn}

---

##### `SnsTopicStatus`<sup>Optional</sup> <a name="SnsTopicStatus" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicStatus"></a>

```go
SnsTopicStatus *string
```

- *Type:* *string

The status of the Amazon SNS notification topic. Notifications are sent only if the status is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#sns_topic_status MemorydbCluster#sns_topic_status}

---

##### `SubnetGroupName`<sup>Optional</sup> <a name="SubnetGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.subnetGroupName"></a>

```go
SubnetGroupName *string
```

- *Type:* *string

The name of the subnet group to be used for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#subnet_group_name MemorydbCluster#subnet_group_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#tags MemorydbCluster#tags}

---

##### `TlsEnabled`<sup>Optional</sup> <a name="TlsEnabled" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tlsEnabled"></a>

```go
TlsEnabled interface{}
```

- *Type:* interface{}

A flag that enables in-transit encryption when set to true.

You cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#tls_enabled MemorydbCluster#tls_enabled}

---

### MemorydbClusterTags <a name="MemorydbClusterTags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/memorydbcluster"

&memorydbcluster.MemorydbClusterTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.key">Key</a></code> | <code>*string</code> | The key for the tag. May not be null. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.value">Value</a></code> | <code>*string</code> | The tag's value. May be null. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key for the tag. May not be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#key MemorydbCluster#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag's value. May be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/memorydb_cluster#value MemorydbCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MemorydbClusterClusterEndpointOutputReference <a name="MemorydbClusterClusterEndpointOutputReference" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/memorydbcluster"

memorydbcluster.NewMemorydbClusterClusterEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemorydbClusterClusterEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MemorydbClusterTagsList <a name="MemorydbClusterTagsList" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/memorydbcluster"

memorydbcluster.NewMemorydbClusterTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemorydbClusterTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.get"></a>

```go
func Get(index *f64) MemorydbClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MemorydbClusterTagsOutputReference <a name="MemorydbClusterTagsOutputReference" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/memorydbcluster"

memorydbcluster.NewMemorydbClusterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemorydbClusterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



