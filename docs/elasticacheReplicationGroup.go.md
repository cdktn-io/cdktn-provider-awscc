# `elasticacheReplicationGroup` Submodule <a name="`elasticacheReplicationGroup` Submodule" id="@cdktn/provider-awscc.elasticacheReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheReplicationGroup <a name="ElasticacheReplicationGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group awscc_elasticache_replication_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroup(scope Construct, id *string, config ElasticacheReplicationGroupConfig) ElasticacheReplicationGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig">ElasticacheReplicationGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig">ElasticacheReplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfigurations">PutLogDeliveryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putNodeGroupConfiguration">PutNodeGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAtRestEncryptionEnabled">ResetAtRestEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAuthToken">ResetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutomaticFailoverEnabled">ResetAutomaticFailoverEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheNodeType">ResetCacheNodeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheParameterGroupName">ResetCacheParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheSecurityGroupNames">ResetCacheSecurityGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheSubnetGroupName">ResetCacheSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetClusterMode">ResetClusterMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDataTieringEnabled">ResetDataTieringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDurability">ResetDurability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetGlobalReplicationGroupId">ResetGlobalReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetIpDiscovery">ResetIpDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetLogDeliveryConfigurations">ResetLogDeliveryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMultiAzEnabled">ResetMultiAzEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNodeGroupConfiguration">ResetNodeGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNotificationTopicArn">ResetNotificationTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumCacheClusters">ResetNumCacheClusters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumNodeGroups">ResetNumNodeGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredCacheClusterAZs">ResetPreferredCacheClusterAZs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPrimaryClusterId">ResetPrimaryClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicasPerNodeGroup">ResetReplicasPerNodeGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicationGroupId">ResetReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotArns">ResetSnapshotArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotName">ResetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotRetentionLimit">ResetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshottingClusterId">ResetSnapshottingClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotWindow">ResetSnapshotWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionEnabled">ResetTransitEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionMode">ResetTransitEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetUserGroupIds">ResetUserGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogDeliveryConfigurations` <a name="PutLogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfigurations"></a>

```go
func PutLogDeliveryConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNodeGroupConfiguration` <a name="PutNodeGroupConfiguration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putNodeGroupConfiguration"></a>

```go
func PutNodeGroupConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putNodeGroupConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAtRestEncryptionEnabled` <a name="ResetAtRestEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAtRestEncryptionEnabled"></a>

```go
func ResetAtRestEncryptionEnabled()
```

##### `ResetAuthToken` <a name="ResetAuthToken" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAuthToken"></a>

```go
func ResetAuthToken()
```

##### `ResetAutomaticFailoverEnabled` <a name="ResetAutomaticFailoverEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutomaticFailoverEnabled"></a>

```go
func ResetAutomaticFailoverEnabled()
```

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutoMinorVersionUpgrade"></a>

```go
func ResetAutoMinorVersionUpgrade()
```

##### `ResetCacheNodeType` <a name="ResetCacheNodeType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheNodeType"></a>

```go
func ResetCacheNodeType()
```

##### `ResetCacheParameterGroupName` <a name="ResetCacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheParameterGroupName"></a>

```go
func ResetCacheParameterGroupName()
```

##### `ResetCacheSecurityGroupNames` <a name="ResetCacheSecurityGroupNames" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheSecurityGroupNames"></a>

```go
func ResetCacheSecurityGroupNames()
```

##### `ResetCacheSubnetGroupName` <a name="ResetCacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheSubnetGroupName"></a>

```go
func ResetCacheSubnetGroupName()
```

##### `ResetClusterMode` <a name="ResetClusterMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetClusterMode"></a>

```go
func ResetClusterMode()
```

##### `ResetDataTieringEnabled` <a name="ResetDataTieringEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDataTieringEnabled"></a>

```go
func ResetDataTieringEnabled()
```

##### `ResetDurability` <a name="ResetDurability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDurability"></a>

```go
func ResetDurability()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngine"></a>

```go
func ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetGlobalReplicationGroupId` <a name="ResetGlobalReplicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetGlobalReplicationGroupId"></a>

```go
func ResetGlobalReplicationGroupId()
```

##### `ResetIpDiscovery` <a name="ResetIpDiscovery" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetIpDiscovery"></a>

```go
func ResetIpDiscovery()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetLogDeliveryConfigurations` <a name="ResetLogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetLogDeliveryConfigurations"></a>

```go
func ResetLogDeliveryConfigurations()
```

##### `ResetMultiAzEnabled` <a name="ResetMultiAzEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMultiAzEnabled"></a>

```go
func ResetMultiAzEnabled()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNetworkType"></a>

```go
func ResetNetworkType()
```

##### `ResetNodeGroupConfiguration` <a name="ResetNodeGroupConfiguration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNodeGroupConfiguration"></a>

```go
func ResetNodeGroupConfiguration()
```

##### `ResetNotificationTopicArn` <a name="ResetNotificationTopicArn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNotificationTopicArn"></a>

```go
func ResetNotificationTopicArn()
```

##### `ResetNumCacheClusters` <a name="ResetNumCacheClusters" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumCacheClusters"></a>

```go
func ResetNumCacheClusters()
```

##### `ResetNumNodeGroups` <a name="ResetNumNodeGroups" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumNodeGroups"></a>

```go
func ResetNumNodeGroups()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPreferredCacheClusterAZs` <a name="ResetPreferredCacheClusterAZs" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredCacheClusterAZs"></a>

```go
func ResetPreferredCacheClusterAZs()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredMaintenanceWindow"></a>

```go
func ResetPreferredMaintenanceWindow()
```

##### `ResetPrimaryClusterId` <a name="ResetPrimaryClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPrimaryClusterId"></a>

```go
func ResetPrimaryClusterId()
```

##### `ResetReplicasPerNodeGroup` <a name="ResetReplicasPerNodeGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicasPerNodeGroup"></a>

```go
func ResetReplicasPerNodeGroup()
```

##### `ResetReplicationGroupId` <a name="ResetReplicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicationGroupId"></a>

```go
func ResetReplicationGroupId()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSnapshotArns` <a name="ResetSnapshotArns" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotArns"></a>

```go
func ResetSnapshotArns()
```

##### `ResetSnapshotName` <a name="ResetSnapshotName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotName"></a>

```go
func ResetSnapshotName()
```

##### `ResetSnapshotRetentionLimit` <a name="ResetSnapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotRetentionLimit"></a>

```go
func ResetSnapshotRetentionLimit()
```

##### `ResetSnapshottingClusterId` <a name="ResetSnapshottingClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshottingClusterId"></a>

```go
func ResetSnapshottingClusterId()
```

##### `ResetSnapshotWindow` <a name="ResetSnapshotWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotWindow"></a>

```go
func ResetSnapshotWindow()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTransitEncryptionEnabled` <a name="ResetTransitEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionEnabled"></a>

```go
func ResetTransitEncryptionEnabled()
```

##### `ResetTransitEncryptionMode` <a name="ResetTransitEncryptionMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionMode"></a>

```go
func ResetTransitEncryptionMode()
```

##### `ResetUserGroupIds` <a name="ResetUserGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetUserGroupIds"></a>

```go
func ResetUserGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticacheReplicationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.ElasticacheReplicationGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.ElasticacheReplicationGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.ElasticacheReplicationGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.ElasticacheReplicationGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ElasticacheReplicationGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ElasticacheReplicationGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ElasticacheReplicationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheReplicationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.configurationEndPoint">ConfigurationEndPoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference">ElasticacheReplicationGroupConfigurationEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.effectiveDurability">EffectiveDurability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurations">LogDeliveryConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList">ElasticacheReplicationGroupLogDeliveryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeGroupConfiguration">NodeGroupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList">ElasticacheReplicationGroupNodeGroupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryEndPoint">PrimaryEndPoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference">ElasticacheReplicationGroupPrimaryEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readEndPoint">ReadEndPoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference">ElasticacheReplicationGroupReadEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readerEndPoint">ReaderEndPoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference">ElasticacheReplicationGroupReaderEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList">ElasticacheReplicationGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabledInput">AtRestEncryptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authTokenInput">AuthTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabledInput">AutomaticFailoverEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheNodeTypeInput">CacheNodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheParameterGroupNameInput">CacheParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSecurityGroupNamesInput">CacheSecurityGroupNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSubnetGroupNameInput">CacheSubnetGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterModeInput">ClusterModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabledInput">DataTieringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.durabilityInput">DurabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupIdInput">GlobalReplicationGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.ipDiscoveryInput">IpDiscoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurationsInput">LogDeliveryConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabledInput">MultiAzEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.networkTypeInput">NetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeGroupConfigurationInput">NodeGroupConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArnInput">NotificationTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClustersInput">NumCacheClustersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroupsInput">NumNodeGroupsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAZsInput">PreferredCacheClusterAZsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryClusterIdInput">PrimaryClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroupInput">ReplicasPerNodeGroupInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescriptionInput">ReplicationGroupDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupIdInput">ReplicationGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArnsInput">SnapshotArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimitInput">SnapshotRetentionLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshottingClusterIdInput">SnapshottingClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindowInput">SnapshotWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabledInput">TransitEncryptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionModeInput">TransitEncryptionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIdsInput">UserGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabled">AtRestEncryptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authToken">AuthToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheNodeType">CacheNodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheParameterGroupName">CacheParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSecurityGroupNames">CacheSecurityGroupNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSubnetGroupName">CacheSubnetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterMode">ClusterMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabled">DataTieringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.durability">Durability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupId">GlobalReplicationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.ipDiscovery">IpDiscovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabled">MultiAzEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClusters">NumCacheClusters</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroups">NumNodeGroups</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAZs">PreferredCacheClusterAZs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryClusterId">PrimaryClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroup">ReplicasPerNodeGroup</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescription">ReplicationGroupDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupId">ReplicationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArns">SnapshotArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshottingClusterId">SnapshottingClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindow">SnapshotWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabled">TransitEncryptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionMode">TransitEncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIds">UserGroupIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigurationEndPoint`<sup>Required</sup> <a name="ConfigurationEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.configurationEndPoint"></a>

```go
func ConfigurationEndPoint() ElasticacheReplicationGroupConfigurationEndPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference">ElasticacheReplicationGroupConfigurationEndPointOutputReference</a>

---

##### `EffectiveDurability`<sup>Required</sup> <a name="EffectiveDurability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.effectiveDurability"></a>

```go
func EffectiveDurability() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogDeliveryConfigurations`<sup>Required</sup> <a name="LogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurations"></a>

```go
func LogDeliveryConfigurations() ElasticacheReplicationGroupLogDeliveryConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList">ElasticacheReplicationGroupLogDeliveryConfigurationsList</a>

---

##### `NodeGroupConfiguration`<sup>Required</sup> <a name="NodeGroupConfiguration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeGroupConfiguration"></a>

```go
func NodeGroupConfiguration() ElasticacheReplicationGroupNodeGroupConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList">ElasticacheReplicationGroupNodeGroupConfigurationList</a>

---

##### `PrimaryEndPoint`<sup>Required</sup> <a name="PrimaryEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryEndPoint"></a>

```go
func PrimaryEndPoint() ElasticacheReplicationGroupPrimaryEndPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference">ElasticacheReplicationGroupPrimaryEndPointOutputReference</a>

---

##### `ReadEndPoint`<sup>Required</sup> <a name="ReadEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readEndPoint"></a>

```go
func ReadEndPoint() ElasticacheReplicationGroupReadEndPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference">ElasticacheReplicationGroupReadEndPointOutputReference</a>

---

##### `ReaderEndPoint`<sup>Required</sup> <a name="ReaderEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readerEndPoint"></a>

```go
func ReaderEndPoint() ElasticacheReplicationGroupReaderEndPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference">ElasticacheReplicationGroupReaderEndPointOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tags"></a>

```go
func Tags() ElasticacheReplicationGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList">ElasticacheReplicationGroupTagsList</a>

---

##### `AtRestEncryptionEnabledInput`<sup>Optional</sup> <a name="AtRestEncryptionEnabledInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabledInput"></a>

```go
func AtRestEncryptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AuthTokenInput`<sup>Optional</sup> <a name="AuthTokenInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authTokenInput"></a>

```go
func AuthTokenInput() *string
```

- *Type:* *string

---

##### `AutomaticFailoverEnabledInput`<sup>Optional</sup> <a name="AutomaticFailoverEnabledInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabledInput"></a>

```go
func AutomaticFailoverEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgradeInput"></a>

```go
func AutoMinorVersionUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `CacheNodeTypeInput`<sup>Optional</sup> <a name="CacheNodeTypeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheNodeTypeInput"></a>

```go
func CacheNodeTypeInput() *string
```

- *Type:* *string

---

##### `CacheParameterGroupNameInput`<sup>Optional</sup> <a name="CacheParameterGroupNameInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheParameterGroupNameInput"></a>

```go
func CacheParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `CacheSecurityGroupNamesInput`<sup>Optional</sup> <a name="CacheSecurityGroupNamesInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSecurityGroupNamesInput"></a>

```go
func CacheSecurityGroupNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CacheSubnetGroupNameInput`<sup>Optional</sup> <a name="CacheSubnetGroupNameInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSubnetGroupNameInput"></a>

```go
func CacheSubnetGroupNameInput() *string
```

- *Type:* *string

---

##### `ClusterModeInput`<sup>Optional</sup> <a name="ClusterModeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterModeInput"></a>

```go
func ClusterModeInput() *string
```

- *Type:* *string

---

##### `DataTieringEnabledInput`<sup>Optional</sup> <a name="DataTieringEnabledInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabledInput"></a>

```go
func DataTieringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DurabilityInput`<sup>Optional</sup> <a name="DurabilityInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.durabilityInput"></a>

```go
func DurabilityInput() *string
```

- *Type:* *string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `GlobalReplicationGroupIdInput`<sup>Optional</sup> <a name="GlobalReplicationGroupIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupIdInput"></a>

```go
func GlobalReplicationGroupIdInput() *string
```

- *Type:* *string

---

##### `IpDiscoveryInput`<sup>Optional</sup> <a name="IpDiscoveryInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.ipDiscoveryInput"></a>

```go
func IpDiscoveryInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `LogDeliveryConfigurationsInput`<sup>Optional</sup> <a name="LogDeliveryConfigurationsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurationsInput"></a>

```go
func LogDeliveryConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `MultiAzEnabledInput`<sup>Optional</sup> <a name="MultiAzEnabledInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabledInput"></a>

```go
func MultiAzEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.networkTypeInput"></a>

```go
func NetworkTypeInput() *string
```

- *Type:* *string

---

##### `NodeGroupConfigurationInput`<sup>Optional</sup> <a name="NodeGroupConfigurationInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeGroupConfigurationInput"></a>

```go
func NodeGroupConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationTopicArnInput`<sup>Optional</sup> <a name="NotificationTopicArnInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArnInput"></a>

```go
func NotificationTopicArnInput() *string
```

- *Type:* *string

---

##### `NumCacheClustersInput`<sup>Optional</sup> <a name="NumCacheClustersInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClustersInput"></a>

```go
func NumCacheClustersInput() *f64
```

- *Type:* *f64

---

##### `NumNodeGroupsInput`<sup>Optional</sup> <a name="NumNodeGroupsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroupsInput"></a>

```go
func NumNodeGroupsInput() *f64
```

- *Type:* *f64

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PreferredCacheClusterAZsInput`<sup>Optional</sup> <a name="PreferredCacheClusterAZsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAZsInput"></a>

```go
func PreferredCacheClusterAZsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredMaintenanceWindowInput"></a>

```go
func PreferredMaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `PrimaryClusterIdInput`<sup>Optional</sup> <a name="PrimaryClusterIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryClusterIdInput"></a>

```go
func PrimaryClusterIdInput() *string
```

- *Type:* *string

---

##### `ReplicasPerNodeGroupInput`<sup>Optional</sup> <a name="ReplicasPerNodeGroupInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroupInput"></a>

```go
func ReplicasPerNodeGroupInput() *f64
```

- *Type:* *f64

---

##### `ReplicationGroupDescriptionInput`<sup>Optional</sup> <a name="ReplicationGroupDescriptionInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescriptionInput"></a>

```go
func ReplicationGroupDescriptionInput() *string
```

- *Type:* *string

---

##### `ReplicationGroupIdInput`<sup>Optional</sup> <a name="ReplicationGroupIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupIdInput"></a>

```go
func ReplicationGroupIdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotArnsInput`<sup>Optional</sup> <a name="SnapshotArnsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArnsInput"></a>

```go
func SnapshotArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotNameInput"></a>

```go
func SnapshotNameInput() *string
```

- *Type:* *string

---

##### `SnapshotRetentionLimitInput`<sup>Optional</sup> <a name="SnapshotRetentionLimitInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimitInput"></a>

```go
func SnapshotRetentionLimitInput() *f64
```

- *Type:* *f64

---

##### `SnapshottingClusterIdInput`<sup>Optional</sup> <a name="SnapshottingClusterIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshottingClusterIdInput"></a>

```go
func SnapshottingClusterIdInput() *string
```

- *Type:* *string

---

##### `SnapshotWindowInput`<sup>Optional</sup> <a name="SnapshotWindowInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindowInput"></a>

```go
func SnapshotWindowInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TransitEncryptionEnabledInput`<sup>Optional</sup> <a name="TransitEncryptionEnabledInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabledInput"></a>

```go
func TransitEncryptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TransitEncryptionModeInput`<sup>Optional</sup> <a name="TransitEncryptionModeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionModeInput"></a>

```go
func TransitEncryptionModeInput() *string
```

- *Type:* *string

---

##### `UserGroupIdsInput`<sup>Optional</sup> <a name="UserGroupIdsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIdsInput"></a>

```go
func UserGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AtRestEncryptionEnabled`<sup>Required</sup> <a name="AtRestEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabled"></a>

```go
func AtRestEncryptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `AuthToken`<sup>Required</sup> <a name="AuthToken" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authToken"></a>

```go
func AuthToken() *string
```

- *Type:* *string

---

##### `AutomaticFailoverEnabled`<sup>Required</sup> <a name="AutomaticFailoverEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabled"></a>

```go
func AutomaticFailoverEnabled() interface{}
```

- *Type:* interface{}

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgrade"></a>

```go
func AutoMinorVersionUpgrade() interface{}
```

- *Type:* interface{}

---

##### `CacheNodeType`<sup>Required</sup> <a name="CacheNodeType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheNodeType"></a>

```go
func CacheNodeType() *string
```

- *Type:* *string

---

##### `CacheParameterGroupName`<sup>Required</sup> <a name="CacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheParameterGroupName"></a>

```go
func CacheParameterGroupName() *string
```

- *Type:* *string

---

##### `CacheSecurityGroupNames`<sup>Required</sup> <a name="CacheSecurityGroupNames" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSecurityGroupNames"></a>

```go
func CacheSecurityGroupNames() *[]*string
```

- *Type:* *[]*string

---

##### `CacheSubnetGroupName`<sup>Required</sup> <a name="CacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSubnetGroupName"></a>

```go
func CacheSubnetGroupName() *string
```

- *Type:* *string

---

##### `ClusterMode`<sup>Required</sup> <a name="ClusterMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterMode"></a>

```go
func ClusterMode() *string
```

- *Type:* *string

---

##### `DataTieringEnabled`<sup>Required</sup> <a name="DataTieringEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabled"></a>

```go
func DataTieringEnabled() interface{}
```

- *Type:* interface{}

---

##### `Durability`<sup>Required</sup> <a name="Durability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.durability"></a>

```go
func Durability() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `GlobalReplicationGroupId`<sup>Required</sup> <a name="GlobalReplicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupId"></a>

```go
func GlobalReplicationGroupId() *string
```

- *Type:* *string

---

##### `IpDiscovery`<sup>Required</sup> <a name="IpDiscovery" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.ipDiscovery"></a>

```go
func IpDiscovery() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `MultiAzEnabled`<sup>Required</sup> <a name="MultiAzEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabled"></a>

```go
func MultiAzEnabled() interface{}
```

- *Type:* interface{}

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `NotificationTopicArn`<sup>Required</sup> <a name="NotificationTopicArn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArn"></a>

```go
func NotificationTopicArn() *string
```

- *Type:* *string

---

##### `NumCacheClusters`<sup>Required</sup> <a name="NumCacheClusters" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClusters"></a>

```go
func NumCacheClusters() *f64
```

- *Type:* *f64

---

##### `NumNodeGroups`<sup>Required</sup> <a name="NumNodeGroups" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroups"></a>

```go
func NumNodeGroups() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PreferredCacheClusterAZs`<sup>Required</sup> <a name="PreferredCacheClusterAZs" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAZs"></a>

```go
func PreferredCacheClusterAZs() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `PrimaryClusterId`<sup>Required</sup> <a name="PrimaryClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryClusterId"></a>

```go
func PrimaryClusterId() *string
```

- *Type:* *string

---

##### `ReplicasPerNodeGroup`<sup>Required</sup> <a name="ReplicasPerNodeGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroup"></a>

```go
func ReplicasPerNodeGroup() *f64
```

- *Type:* *f64

---

##### `ReplicationGroupDescription`<sup>Required</sup> <a name="ReplicationGroupDescription" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescription"></a>

```go
func ReplicationGroupDescription() *string
```

- *Type:* *string

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupId"></a>

```go
func ReplicationGroupId() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotArns`<sup>Required</sup> <a name="SnapshotArns" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArns"></a>

```go
func SnapshotArns() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotName"></a>

```go
func SnapshotName() *string
```

- *Type:* *string

---

##### `SnapshotRetentionLimit`<sup>Required</sup> <a name="SnapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimit"></a>

```go
func SnapshotRetentionLimit() *f64
```

- *Type:* *f64

---

##### `SnapshottingClusterId`<sup>Required</sup> <a name="SnapshottingClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshottingClusterId"></a>

```go
func SnapshottingClusterId() *string
```

- *Type:* *string

---

##### `SnapshotWindow`<sup>Required</sup> <a name="SnapshotWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindow"></a>

```go
func SnapshotWindow() *string
```

- *Type:* *string

---

##### `TransitEncryptionEnabled`<sup>Required</sup> <a name="TransitEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabled"></a>

```go
func TransitEncryptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `TransitEncryptionMode`<sup>Required</sup> <a name="TransitEncryptionMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionMode"></a>

```go
func TransitEncryptionMode() *string
```

- *Type:* *string

---

##### `UserGroupIds`<sup>Required</sup> <a name="UserGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIds"></a>

```go
func UserGroupIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheReplicationGroupConfig <a name="ElasticacheReplicationGroupConfig" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

&elasticachereplicationgroup.ElasticacheReplicationGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ReplicationGroupDescription: *string,
	AtRestEncryptionEnabled: interface{},
	AuthToken: *string,
	AutomaticFailoverEnabled: interface{},
	AutoMinorVersionUpgrade: interface{},
	CacheNodeType: *string,
	CacheParameterGroupName: *string,
	CacheSecurityGroupNames: *[]*string,
	CacheSubnetGroupName: *string,
	ClusterMode: *string,
	DataTieringEnabled: interface{},
	Durability: *string,
	Engine: *string,
	EngineVersion: *string,
	GlobalReplicationGroupId: *string,
	IpDiscovery: *string,
	KmsKeyId: *string,
	LogDeliveryConfigurations: interface{},
	MultiAzEnabled: interface{},
	NetworkType: *string,
	NodeGroupConfiguration: interface{},
	NotificationTopicArn: *string,
	NumCacheClusters: *f64,
	NumNodeGroups: *f64,
	Port: *f64,
	PreferredCacheClusterAZs: *[]*string,
	PreferredMaintenanceWindow: *string,
	PrimaryClusterId: *string,
	ReplicasPerNodeGroup: *f64,
	ReplicationGroupId: *string,
	SecurityGroupIds: *[]*string,
	SnapshotArns: *[]*string,
	SnapshotName: *string,
	SnapshotRetentionLimit: *f64,
	SnapshottingClusterId: *string,
	SnapshotWindow: *string,
	Tags: interface{},
	TransitEncryptionEnabled: interface{},
	TransitEncryptionMode: *string,
	UserGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupDescription">ReplicationGroupDescription</a></code> | <code>*string</code> | A user-created description for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.atRestEncryptionEnabled">AtRestEncryptionEnabled</a></code> | <code>interface{}</code> | A flag that enables encryption at rest when set to true.AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.authToken">AuthToken</a></code> | <code>*string</code> | Reserved parameter. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>interface{}</code> | Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>interface{}</code> | This parameter is currently disabled. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheNodeType">CacheNodeType</a></code> | <code>*string</code> | The compute and memory capacity of the nodes in the node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheParameterGroupName">CacheParameterGroupName</a></code> | <code>*string</code> | The name of the parameter group to associate with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheSecurityGroupNames">CacheSecurityGroupNames</a></code> | <code>*[]*string</code> | A list of cache security group names to associate with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheSubnetGroupName">CacheSubnetGroupName</a></code> | <code>*string</code> | The name of the cache subnet group to be used for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.clusterMode">ClusterMode</a></code> | <code>*string</code> | Enabled or Disabled. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dataTieringEnabled">DataTieringEnabled</a></code> | <code>interface{}</code> | Enables data tiering. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.durability">Durability</a></code> | <code>*string</code> | The durability setting for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engine">Engine</a></code> | <code>*string</code> | The name of the cache engine to be used for the clusters in this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | The version number of the cache engine to be used for the clusters in this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.globalReplicationGroupId">GlobalReplicationGroupId</a></code> | <code>*string</code> | The name of the Global datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.ipDiscovery">IpDiscovery</a></code> | <code>*string</code> | The network type you choose when creating a replication group, either ipv4 \| ipv6. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The ID of the KMS key used to encrypt the disk on the cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.logDeliveryConfigurations">LogDeliveryConfigurations</a></code> | <code>interface{}</code> | Specifies the destination, format and type of the logs. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.multiAzEnabled">MultiAzEnabled</a></code> | <code>interface{}</code> | A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.networkType">NetworkType</a></code> | <code>*string</code> | Must be either ipv4 \| ipv6 \| dual_stack. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.nodeGroupConfiguration">NodeGroupConfiguration</a></code> | <code>interface{}</code> | NodeGroupConfiguration is a property of the AWS::ElastiCache::ReplicationGroup resource that configures an Amazon ElastiCache (ElastiCache) Redis cluster node group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numCacheClusters">NumCacheClusters</a></code> | <code>*f64</code> | The number of clusters this replication group initially has.This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numNodeGroups">NumNodeGroups</a></code> | <code>*f64</code> | An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.port">Port</a></code> | <code>*f64</code> | The port number on which each member of the replication group accepts connections. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredCacheClusterAZs">PreferredCacheClusterAZs</a></code> | <code>*[]*string</code> | A list of EC2 Availability Zones in which the replication group's clusters are created. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | Specifies the weekly time range during which maintenance on the cluster is performed. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.primaryClusterId">PrimaryClusterId</a></code> | <code>*string</code> | The identifier of the cluster that serves as the primary for this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicasPerNodeGroup">ReplicasPerNodeGroup</a></code> | <code>*f64</code> | An optional parameter that specifies the number of replica nodes in each node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupId">ReplicationGroupId</a></code> | <code>*string</code> | The replication group identifier. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | One or more Amazon VPC security groups associated with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotArns">SnapshotArns</a></code> | <code>*[]*string</code> | A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | The name of a snapshot from which to restore data into the new replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>*f64</code> | The number of days for which ElastiCache retains automatic snapshots before deleting them. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshottingClusterId">SnapshottingClusterId</a></code> | <code>*string</code> | The cluster ID that is used as the daily snapshot source for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotWindow">SnapshotWindow</a></code> | <code>*string</code> | The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of cost allocation tags to be added to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionEnabled">TransitEncryptionEnabled</a></code> | <code>interface{}</code> | A flag that enables in-transit encryption when set to true. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionMode">TransitEncryptionMode</a></code> | <code>*string</code> | A setting that allows you to migrate your clients to use in-transit encryption, with no downtime. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.userGroupIds">UserGroupIds</a></code> | <code>*[]*string</code> | The ID of user group to associate with the replication group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ReplicationGroupDescription`<sup>Required</sup> <a name="ReplicationGroupDescription" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupDescription"></a>

```go
ReplicationGroupDescription *string
```

- *Type:* *string

A user-created description for the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#replication_group_description ElasticacheReplicationGroup#replication_group_description}

---

##### `AtRestEncryptionEnabled`<sup>Optional</sup> <a name="AtRestEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.atRestEncryptionEnabled"></a>

```go
AtRestEncryptionEnabled interface{}
```

- *Type:* interface{}

A flag that enables encryption at rest when set to true.AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}

---

##### `AuthToken`<sup>Optional</sup> <a name="AuthToken" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.authToken"></a>

```go
AuthToken *string
```

- *Type:* *string

Reserved parameter.

The password used to access a password protected server.AuthToken can be specified only on replication groups where TransitEncryptionEnabled is true. For more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#auth_token ElasticacheReplicationGroup#auth_token}

---

##### `AutomaticFailoverEnabled`<sup>Optional</sup> <a name="AutomaticFailoverEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.automaticFailoverEnabled"></a>

```go
AutomaticFailoverEnabled interface{}
```

- *Type:* interface{}

Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.

AutomaticFailoverEnabled must be enabled for Redis (cluster mode enabled) replication groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.autoMinorVersionUpgrade"></a>

```go
AutoMinorVersionUpgrade interface{}
```

- *Type:* interface{}

This parameter is currently disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}

---

##### `CacheNodeType`<sup>Optional</sup> <a name="CacheNodeType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheNodeType"></a>

```go
CacheNodeType *string
```

- *Type:* *string

The compute and memory capacity of the nodes in the node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#cache_node_type ElasticacheReplicationGroup#cache_node_type}

---

##### `CacheParameterGroupName`<sup>Optional</sup> <a name="CacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheParameterGroupName"></a>

```go
CacheParameterGroupName *string
```

- *Type:* *string

The name of the parameter group to associate with this replication group.

If this argument is omitted, the default cache parameter group for the specified engine is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#cache_parameter_group_name ElasticacheReplicationGroup#cache_parameter_group_name}

---

##### `CacheSecurityGroupNames`<sup>Optional</sup> <a name="CacheSecurityGroupNames" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheSecurityGroupNames"></a>

```go
CacheSecurityGroupNames *[]*string
```

- *Type:* *[]*string

A list of cache security group names to associate with this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#cache_security_group_names ElasticacheReplicationGroup#cache_security_group_names}

---

##### `CacheSubnetGroupName`<sup>Optional</sup> <a name="CacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheSubnetGroupName"></a>

```go
CacheSubnetGroupName *string
```

- *Type:* *string

The name of the cache subnet group to be used for the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#cache_subnet_group_name ElasticacheReplicationGroup#cache_subnet_group_name}

---

##### `ClusterMode`<sup>Optional</sup> <a name="ClusterMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.clusterMode"></a>

```go
ClusterMode *string
```

- *Type:* *string

Enabled or Disabled.

To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled. For more information, see Modify cluster mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#cluster_mode ElasticacheReplicationGroup#cluster_mode}

---

##### `DataTieringEnabled`<sup>Optional</sup> <a name="DataTieringEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dataTieringEnabled"></a>

```go
DataTieringEnabled interface{}
```

- *Type:* interface{}

Enables data tiering.

Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#data_tiering_enabled ElasticacheReplicationGroup#data_tiering_enabled}

---

##### `Durability`<sup>Optional</sup> <a name="Durability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.durability"></a>

```go
Durability *string
```

- *Type:* *string

The durability setting for the replication group.

Valid values: default, async, sync, disabled. Enabling durability on an existing non-durable cluster or disabling durability on an existing durable cluster is not currently supported and will result in an error; specify the desired durability at create time. The resolved state is returned in EffectiveDurability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#durability ElasticacheReplicationGroup#durability}

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

The name of the cache engine to be used for the clusters in this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#engine ElasticacheReplicationGroup#engine}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

The version number of the cache engine to be used for the clusters in this replication group.

To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#engine_version ElasticacheReplicationGroup#engine_version}

---

##### `GlobalReplicationGroupId`<sup>Optional</sup> <a name="GlobalReplicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.globalReplicationGroupId"></a>

```go
GlobalReplicationGroupId *string
```

- *Type:* *string

The name of the Global datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}

---

##### `IpDiscovery`<sup>Optional</sup> <a name="IpDiscovery" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.ipDiscovery"></a>

```go
IpDiscovery *string
```

- *Type:* *string

The network type you choose when creating a replication group, either ipv4 | ipv6.

IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#ip_discovery ElasticacheReplicationGroup#ip_discovery}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The ID of the KMS key used to encrypt the disk on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#kms_key_id ElasticacheReplicationGroup#kms_key_id}

---

##### `LogDeliveryConfigurations`<sup>Optional</sup> <a name="LogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.logDeliveryConfigurations"></a>

```go
LogDeliveryConfigurations interface{}
```

- *Type:* interface{}

Specifies the destination, format and type of the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#log_delivery_configurations ElasticacheReplicationGroup#log_delivery_configurations}

---

##### `MultiAzEnabled`<sup>Optional</sup> <a name="MultiAzEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.multiAzEnabled"></a>

```go
MultiAzEnabled interface{}
```

- *Type:* interface{}

A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.networkType"></a>

```go
NetworkType *string
```

- *Type:* *string

Must be either ipv4 | ipv6 | dual_stack.

IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#network_type ElasticacheReplicationGroup#network_type}

---

##### `NodeGroupConfiguration`<sup>Optional</sup> <a name="NodeGroupConfiguration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.nodeGroupConfiguration"></a>

```go
NodeGroupConfiguration interface{}
```

- *Type:* interface{}

NodeGroupConfiguration is a property of the AWS::ElastiCache::ReplicationGroup resource that configures an Amazon ElastiCache (ElastiCache) Redis cluster node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#node_group_configuration ElasticacheReplicationGroup#node_group_configuration}

---

##### `NotificationTopicArn`<sup>Optional</sup> <a name="NotificationTopicArn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.notificationTopicArn"></a>

```go
NotificationTopicArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}

---

##### `NumCacheClusters`<sup>Optional</sup> <a name="NumCacheClusters" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numCacheClusters"></a>

```go
NumCacheClusters *f64
```

- *Type:* *f64

The number of clusters this replication group initially has.This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#num_cache_clusters ElasticacheReplicationGroup#num_cache_clusters}

---

##### `NumNodeGroups`<sup>Optional</sup> <a name="NumNodeGroups" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numNodeGroups"></a>

```go
NumNodeGroups *f64
```

- *Type:* *f64

An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group.

For Redis (cluster mode disabled) either omit this parameter or set it to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port number on which each member of the replication group accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#port ElasticacheReplicationGroup#port}

---

##### `PreferredCacheClusterAZs`<sup>Optional</sup> <a name="PreferredCacheClusterAZs" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredCacheClusterAZs"></a>

```go
PreferredCacheClusterAZs *[]*string
```

- *Type:* *[]*string

A list of EC2 Availability Zones in which the replication group's clusters are created.

The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list. This parameter is not used if there is more than one node group (shard). You should use NodeGroupConfiguration instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#preferred_cache_cluster_a_zs ElasticacheReplicationGroup#preferred_cache_cluster_a_zs}

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredMaintenanceWindow"></a>

```go
PreferredMaintenanceWindow *string
```

- *Type:* *string

Specifies the weekly time range during which maintenance on the cluster is performed.

It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#preferred_maintenance_window ElasticacheReplicationGroup#preferred_maintenance_window}

---

##### `PrimaryClusterId`<sup>Optional</sup> <a name="PrimaryClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.primaryClusterId"></a>

```go
PrimaryClusterId *string
```

- *Type:* *string

The identifier of the cluster that serves as the primary for this replication group.

This cluster must already exist and have a status of available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#primary_cluster_id ElasticacheReplicationGroup#primary_cluster_id}

---

##### `ReplicasPerNodeGroup`<sup>Optional</sup> <a name="ReplicasPerNodeGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicasPerNodeGroup"></a>

```go
ReplicasPerNodeGroup *f64
```

- *Type:* *f64

An optional parameter that specifies the number of replica nodes in each node group (shard).

Valid values are 0 to 5.

**Note:** Using ReplicasPerNodeGroup with NodeGroupConfiguration results in resource replacement. For online scaling, use ReplicasPerNodeGroup alone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}

---

##### `ReplicationGroupId`<sup>Optional</sup> <a name="ReplicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupId"></a>

```go
ReplicationGroupId *string
```

- *Type:* *string

The replication group identifier. This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#replication_group_id ElasticacheReplicationGroup#replication_group_id}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

One or more Amazon VPC security groups associated with this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#security_group_ids ElasticacheReplicationGroup#security_group_ids}

---

##### `SnapshotArns`<sup>Optional</sup> <a name="SnapshotArns" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotArns"></a>

```go
SnapshotArns *[]*string
```

- *Type:* *[]*string

A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}

---

##### `SnapshotName`<sup>Optional</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotName"></a>

```go
SnapshotName *string
```

- *Type:* *string

The name of a snapshot from which to restore data into the new replication group.

The snapshot status changes to restoring while the new replication group is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#snapshot_name ElasticacheReplicationGroup#snapshot_name}

---

##### `SnapshotRetentionLimit`<sup>Optional</sup> <a name="SnapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotRetentionLimit"></a>

```go
SnapshotRetentionLimit *f64
```

- *Type:* *f64

The number of days for which ElastiCache retains automatic snapshots before deleting them.

For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}

---

##### `SnapshottingClusterId`<sup>Optional</sup> <a name="SnapshottingClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshottingClusterId"></a>

```go
SnapshottingClusterId *string
```

- *Type:* *string

The cluster ID that is used as the daily snapshot source for the replication group.

This parameter cannot be set for Redis (cluster mode enabled) replication groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#snapshotting_cluster_id ElasticacheReplicationGroup#snapshotting_cluster_id}

---

##### `SnapshotWindow`<sup>Optional</sup> <a name="SnapshotWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotWindow"></a>

```go
SnapshotWindow *string
```

- *Type:* *string

The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#snapshot_window ElasticacheReplicationGroup#snapshot_window}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of cost allocation tags to be added to this resource.

Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#tags ElasticacheReplicationGroup#tags}

---

##### `TransitEncryptionEnabled`<sup>Optional</sup> <a name="TransitEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionEnabled"></a>

```go
TransitEncryptionEnabled interface{}
```

- *Type:* interface{}

A flag that enables in-transit encryption when set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}

---

##### `TransitEncryptionMode`<sup>Optional</sup> <a name="TransitEncryptionMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionMode"></a>

```go
TransitEncryptionMode *string
```

- *Type:* *string

A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.

When setting TransitEncryptionEnabled to true, you can set your TransitEncryptionMode to preferred in the same request, to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Redis OSS clients to use encrypted connections you can modify the value to required to allow encrypted connections only. Setting TransitEncryptionMode to required is a two-step process that requires you to first set the TransitEncryptionMode to preferred, after that you can set TransitEncryptionMode to required. This process will not trigger the replacement of the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#transit_encryption_mode ElasticacheReplicationGroup#transit_encryption_mode}

---

##### `UserGroupIds`<sup>Optional</sup> <a name="UserGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.userGroupIds"></a>

```go
UserGroupIds *[]*string
```

- *Type:* *[]*string

The ID of user group to associate with the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#user_group_ids ElasticacheReplicationGroup#user_group_ids}

---

### ElasticacheReplicationGroupConfigurationEndPoint <a name="ElasticacheReplicationGroupConfigurationEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

&elasticachereplicationgroup.ElasticacheReplicationGroupConfigurationEndPoint {

}
```


### ElasticacheReplicationGroupLogDeliveryConfigurations <a name="ElasticacheReplicationGroupLogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

&elasticachereplicationgroup.ElasticacheReplicationGroupLogDeliveryConfigurations {
	DestinationDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails,
	DestinationType: *string,
	LogFormat: *string,
	LogType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.destinationDetails">DestinationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a></code> | Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.destinationType">DestinationType</a></code> | <code>*string</code> | Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type. Valid values are either cloudwatch-logs or kinesis-firehose. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.logFormat">LogFormat</a></code> | <code>*string</code> | Valid values are either json or text. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.logType">LogType</a></code> | <code>*string</code> | Valid value is either slow-log, which refers to slow-log or engine-log. |

---

##### `DestinationDetails`<sup>Optional</sup> <a name="DestinationDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.destinationDetails"></a>

```go
DestinationDetails ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a>

Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#destination_details ElasticacheReplicationGroup#destination_details}

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type. Valid values are either cloudwatch-logs or kinesis-firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#destination_type ElasticacheReplicationGroup#destination_type}

---

##### `LogFormat`<sup>Optional</sup> <a name="LogFormat" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.logFormat"></a>

```go
LogFormat *string
```

- *Type:* *string

Valid values are either json or text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#log_format ElasticacheReplicationGroup#log_format}

---

##### `LogType`<sup>Optional</sup> <a name="LogType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.logType"></a>

```go
LogType *string
```

- *Type:* *string

Valid value is either slow-log, which refers to slow-log or engine-log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#log_type ElasticacheReplicationGroup#log_type}

---

### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

&elasticachereplicationgroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails {
	CloudwatchLogsDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails,
	KinesisFirehoseDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.property.cloudwatchLogsDetails">CloudwatchLogsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a></code> | The configuration details of the CloudWatch Logs destination. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.property.kinesisFirehoseDetails">KinesisFirehoseDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a></code> | The configuration details of the Kinesis Data Firehose destination. |

---

##### `CloudwatchLogsDetails`<sup>Optional</sup> <a name="CloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.property.cloudwatchLogsDetails"></a>

```go
CloudwatchLogsDetails ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

The configuration details of the CloudWatch Logs destination.

Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#cloudwatch_logs_details ElasticacheReplicationGroup#cloudwatch_logs_details}

---

##### `KinesisFirehoseDetails`<sup>Optional</sup> <a name="KinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.property.kinesisFirehoseDetails"></a>

```go
KinesisFirehoseDetails ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

The configuration details of the Kinesis Data Firehose destination.

Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#kinesis_firehose_details ElasticacheReplicationGroup#kinesis_firehose_details}

---

### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

&elasticachereplicationgroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails {
	LogGroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.property.logGroup">LogGroup</a></code> | <code>*string</code> | The name of the CloudWatch Logs log group. |

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.property.logGroup"></a>

```go
LogGroup *string
```

- *Type:* *string

The name of the CloudWatch Logs log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#log_group ElasticacheReplicationGroup#log_group}

---

### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

&elasticachereplicationgroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails {
	DeliveryStream: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | The name of the Kinesis Data Firehose delivery stream. |

---

##### `DeliveryStream`<sup>Optional</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.property.deliveryStream"></a>

```go
DeliveryStream *string
```

- *Type:* *string

The name of the Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#delivery_stream ElasticacheReplicationGroup#delivery_stream}

---

### ElasticacheReplicationGroupNodeGroupConfiguration <a name="ElasticacheReplicationGroupNodeGroupConfiguration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

&elasticachereplicationgroup.ElasticacheReplicationGroupNodeGroupConfiguration {
	NodeGroupId: *string,
	PrimaryAvailabilityZone: *string,
	ReplicaAvailabilityZones: *[]*string,
	ReplicaCount: *f64,
	Slots: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.nodeGroupId">NodeGroupId</a></code> | <code>*string</code> | Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.primaryAvailabilityZone">PrimaryAvailabilityZone</a></code> | <code>*string</code> | The Availability Zone where the primary node of this node group (shard) is launched. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.replicaAvailabilityZones">ReplicaAvailabilityZones</a></code> | <code>*[]*string</code> | A list of Availability Zones to be used for the read replicas. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | The number of read replica nodes in this node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.slots">Slots</a></code> | <code>*string</code> | A string of comma-separated values where the first set of values are the slot numbers (zero based), and the second set of values are the keyspaces for each slot. |

---

##### `NodeGroupId`<sup>Optional</sup> <a name="NodeGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.nodeGroupId"></a>

```go
NodeGroupId *string
```

- *Type:* *string

Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#node_group_id ElasticacheReplicationGroup#node_group_id}

---

##### `PrimaryAvailabilityZone`<sup>Optional</sup> <a name="PrimaryAvailabilityZone" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.primaryAvailabilityZone"></a>

```go
PrimaryAvailabilityZone *string
```

- *Type:* *string

The Availability Zone where the primary node of this node group (shard) is launched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#primary_availability_zone ElasticacheReplicationGroup#primary_availability_zone}

---

##### `ReplicaAvailabilityZones`<sup>Optional</sup> <a name="ReplicaAvailabilityZones" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.replicaAvailabilityZones"></a>

```go
ReplicaAvailabilityZones *[]*string
```

- *Type:* *[]*string

A list of Availability Zones to be used for the read replicas.

The number of Availability Zones in this list must match the value of ReplicaCount or ReplicasPerNodeGroup if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#replica_availability_zones ElasticacheReplicationGroup#replica_availability_zones}

---

##### `ReplicaCount`<sup>Optional</sup> <a name="ReplicaCount" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.replicaCount"></a>

```go
ReplicaCount *f64
```

- *Type:* *f64

The number of read replica nodes in this node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#replica_count ElasticacheReplicationGroup#replica_count}

---

##### `Slots`<sup>Optional</sup> <a name="Slots" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.slots"></a>

```go
Slots *string
```

- *Type:* *string

A string of comma-separated values where the first set of values are the slot numbers (zero based), and the second set of values are the keyspaces for each slot.

The following example specifies three slots (numbered 0, 1, and 2): 0,1,2,0-4999,5000-9999,10000-16,383.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#slots ElasticacheReplicationGroup#slots}

---

### ElasticacheReplicationGroupPrimaryEndPoint <a name="ElasticacheReplicationGroupPrimaryEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

&elasticachereplicationgroup.ElasticacheReplicationGroupPrimaryEndPoint {

}
```


### ElasticacheReplicationGroupReadEndPoint <a name="ElasticacheReplicationGroupReadEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

&elasticachereplicationgroup.ElasticacheReplicationGroupReadEndPoint {

}
```


### ElasticacheReplicationGroupReaderEndPoint <a name="ElasticacheReplicationGroupReaderEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

&elasticachereplicationgroup.ElasticacheReplicationGroupReaderEndPoint {

}
```


### ElasticacheReplicationGroupTags <a name="ElasticacheReplicationGroupTags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

&elasticachereplicationgroup.ElasticacheReplicationGroupTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#key ElasticacheReplicationGroup#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticache_replication_group#value ElasticacheReplicationGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheReplicationGroupConfigurationEndPointOutputReference <a name="ElasticacheReplicationGroupConfigurationEndPointOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroupConfigurationEndPointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticacheReplicationGroupConfigurationEndPointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint">ElasticacheReplicationGroupConfigurationEndPoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.internalValue"></a>

```go
func InternalValue() ElasticacheReplicationGroupConfigurationEndPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint">ElasticacheReplicationGroupConfigurationEndPoint</a>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resetLogGroup"></a>

```go
func ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroupInput"></a>

```go
func LogGroupInput() *string
```

- *Type:* *string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resetDeliveryStream">ResetDeliveryStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStream` <a name="ResetDeliveryStream" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resetDeliveryStream"></a>

```go
func ResetDeliveryStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStreamInput">DeliveryStreamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeliveryStreamInput`<sup>Optional</sup> <a name="DeliveryStreamInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStreamInput"></a>

```go
func DeliveryStreamInput() *string
```

- *Type:* *string

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream"></a>

```go
func DeliveryStream() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails">PutCloudwatchLogsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails">PutKinesisFirehoseDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resetCloudwatchLogsDetails">ResetCloudwatchLogsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resetKinesisFirehoseDetails">ResetKinesisFirehoseDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogsDetails` <a name="PutCloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails"></a>

```go
func PutCloudwatchLogsDetails(value ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

---

##### `PutKinesisFirehoseDetails` <a name="PutKinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails"></a>

```go
func PutKinesisFirehoseDetails(value ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

---

##### `ResetCloudwatchLogsDetails` <a name="ResetCloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resetCloudwatchLogsDetails"></a>

```go
func ResetCloudwatchLogsDetails()
```

##### `ResetKinesisFirehoseDetails` <a name="ResetKinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resetKinesisFirehoseDetails"></a>

```go
func ResetKinesisFirehoseDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails">CloudwatchLogsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails">KinesisFirehoseDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetailsInput">CloudwatchLogsDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetailsInput">KinesisFirehoseDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogsDetails`<sup>Required</sup> <a name="CloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails"></a>

```go
func CloudwatchLogsDetails() ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a>

---

##### `KinesisFirehoseDetails`<sup>Required</sup> <a name="KinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails"></a>

```go
func KinesisFirehoseDetails() ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a>

---

##### `CloudwatchLogsDetailsInput`<sup>Optional</sup> <a name="CloudwatchLogsDetailsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetailsInput"></a>

```go
func CloudwatchLogsDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `KinesisFirehoseDetailsInput`<sup>Optional</sup> <a name="KinesisFirehoseDetailsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetailsInput"></a>

```go
func KinesisFirehoseDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsList <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroupLogDeliveryConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElasticacheReplicationGroupLogDeliveryConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.get"></a>

```go
func Get(index *f64) ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.putDestinationDetails">PutDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetDestinationDetails">ResetDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetDestinationType">ResetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetLogFormat">ResetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetLogType">ResetLogType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationDetails` <a name="PutDestinationDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.putDestinationDetails"></a>

```go
func PutDestinationDetails(value ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.putDestinationDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a>

---

##### `ResetDestinationDetails` <a name="ResetDestinationDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetDestinationDetails"></a>

```go
func ResetDestinationDetails()
```

##### `ResetDestinationType` <a name="ResetDestinationType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetDestinationType"></a>

```go
func ResetDestinationType()
```

##### `ResetLogFormat` <a name="ResetLogFormat" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetLogFormat"></a>

```go
func ResetLogFormat()
```

##### `ResetLogType` <a name="ResetLogType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetLogType"></a>

```go
func ResetLogType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetails">DestinationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetailsInput">DestinationDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormatInput">LogFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormat">LogFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationDetails`<sup>Required</sup> <a name="DestinationDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetails"></a>

```go
func DestinationDetails() ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference</a>

---

##### `DestinationDetailsInput`<sup>Optional</sup> <a name="DestinationDetailsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetailsInput"></a>

```go
func DestinationDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `LogFormatInput`<sup>Optional</sup> <a name="LogFormatInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormatInput"></a>

```go
func LogFormatInput() *string
```

- *Type:* *string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logTypeInput"></a>

```go
func LogTypeInput() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormat"></a>

```go
func LogFormat() *string
```

- *Type:* *string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheReplicationGroupNodeGroupConfigurationList <a name="ElasticacheReplicationGroupNodeGroupConfigurationList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroupNodeGroupConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElasticacheReplicationGroupNodeGroupConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.get"></a>

```go
func Get(index *f64) ElasticacheReplicationGroupNodeGroupConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheReplicationGroupNodeGroupConfigurationOutputReference <a name="ElasticacheReplicationGroupNodeGroupConfigurationOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroupNodeGroupConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElasticacheReplicationGroupNodeGroupConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetNodeGroupId">ResetNodeGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetPrimaryAvailabilityZone">ResetPrimaryAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetReplicaAvailabilityZones">ResetReplicaAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetReplicaCount">ResetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetSlots">ResetSlots</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNodeGroupId` <a name="ResetNodeGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetNodeGroupId"></a>

```go
func ResetNodeGroupId()
```

##### `ResetPrimaryAvailabilityZone` <a name="ResetPrimaryAvailabilityZone" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetPrimaryAvailabilityZone"></a>

```go
func ResetPrimaryAvailabilityZone()
```

##### `ResetReplicaAvailabilityZones` <a name="ResetReplicaAvailabilityZones" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetReplicaAvailabilityZones"></a>

```go
func ResetReplicaAvailabilityZones()
```

##### `ResetReplicaCount` <a name="ResetReplicaCount" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetReplicaCount"></a>

```go
func ResetReplicaCount()
```

##### `ResetSlots` <a name="ResetSlots" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetSlots"></a>

```go
func ResetSlots()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupIdInput">NodeGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZoneInput">PrimaryAvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZonesInput">ReplicaAvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCountInput">ReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slotsInput">SlotsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupId">NodeGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZone">PrimaryAvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZones">ReplicaAvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slots">Slots</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeGroupIdInput`<sup>Optional</sup> <a name="NodeGroupIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupIdInput"></a>

```go
func NodeGroupIdInput() *string
```

- *Type:* *string

---

##### `PrimaryAvailabilityZoneInput`<sup>Optional</sup> <a name="PrimaryAvailabilityZoneInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZoneInput"></a>

```go
func PrimaryAvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `ReplicaAvailabilityZonesInput`<sup>Optional</sup> <a name="ReplicaAvailabilityZonesInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZonesInput"></a>

```go
func ReplicaAvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReplicaCountInput`<sup>Optional</sup> <a name="ReplicaCountInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCountInput"></a>

```go
func ReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `SlotsInput`<sup>Optional</sup> <a name="SlotsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slotsInput"></a>

```go
func SlotsInput() *string
```

- *Type:* *string

---

##### `NodeGroupId`<sup>Required</sup> <a name="NodeGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupId"></a>

```go
func NodeGroupId() *string
```

- *Type:* *string

---

##### `PrimaryAvailabilityZone`<sup>Required</sup> <a name="PrimaryAvailabilityZone" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZone"></a>

```go
func PrimaryAvailabilityZone() *string
```

- *Type:* *string

---

##### `ReplicaAvailabilityZones`<sup>Required</sup> <a name="ReplicaAvailabilityZones" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZones"></a>

```go
func ReplicaAvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCount"></a>

```go
func ReplicaCount() *f64
```

- *Type:* *f64

---

##### `Slots`<sup>Required</sup> <a name="Slots" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slots"></a>

```go
func Slots() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheReplicationGroupPrimaryEndPointOutputReference <a name="ElasticacheReplicationGroupPrimaryEndPointOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroupPrimaryEndPointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticacheReplicationGroupPrimaryEndPointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint">ElasticacheReplicationGroupPrimaryEndPoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.internalValue"></a>

```go
func InternalValue() ElasticacheReplicationGroupPrimaryEndPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint">ElasticacheReplicationGroupPrimaryEndPoint</a>

---


### ElasticacheReplicationGroupReadEndPointOutputReference <a name="ElasticacheReplicationGroupReadEndPointOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroupReadEndPointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticacheReplicationGroupReadEndPointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.addresses">Addresses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.addressesList">AddressesList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.ports">Ports</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.portsList">PortsList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint">ElasticacheReplicationGroupReadEndPoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.addresses"></a>

```go
func Addresses() *string
```

- *Type:* *string

---

##### `AddressesList`<sup>Required</sup> <a name="AddressesList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.addressesList"></a>

```go
func AddressesList() *[]*string
```

- *Type:* *[]*string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.ports"></a>

```go
func Ports() *string
```

- *Type:* *string

---

##### `PortsList`<sup>Required</sup> <a name="PortsList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.portsList"></a>

```go
func PortsList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.internalValue"></a>

```go
func InternalValue() ElasticacheReplicationGroupReadEndPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint">ElasticacheReplicationGroupReadEndPoint</a>

---


### ElasticacheReplicationGroupReaderEndPointOutputReference <a name="ElasticacheReplicationGroupReaderEndPointOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroupReaderEndPointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticacheReplicationGroupReaderEndPointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint">ElasticacheReplicationGroupReaderEndPoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.internalValue"></a>

```go
func InternalValue() ElasticacheReplicationGroupReaderEndPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint">ElasticacheReplicationGroupReaderEndPoint</a>

---


### ElasticacheReplicationGroupTagsList <a name="ElasticacheReplicationGroupTagsList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElasticacheReplicationGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.get"></a>

```go
func Get(index *f64) ElasticacheReplicationGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheReplicationGroupTagsOutputReference <a name="ElasticacheReplicationGroupTagsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElasticacheReplicationGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



