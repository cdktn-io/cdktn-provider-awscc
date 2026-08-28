# `elasticacheCacheCluster` Submodule <a name="`elasticacheCacheCluster` Submodule" id="@cdktn/provider-awscc.elasticacheCacheCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheCacheCluster <a name="ElasticacheCacheCluster" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster awscc_elasticache_cache_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

elasticachecachecluster.NewElasticacheCacheCluster(scope Construct, id *string, config ElasticacheCacheClusterConfig) ElasticacheCacheCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig">ElasticacheCacheClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig">ElasticacheCacheClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.putLogDeliveryConfigurations">PutLogDeliveryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetAzMode">ResetAzMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetCacheParameterGroupName">ResetCacheParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetCacheSecurityGroupNames">ResetCacheSecurityGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetCacheSubnetGroupName">ResetCacheSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetIpDiscovery">ResetIpDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetLogDeliveryConfigurations">ResetLogDeliveryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetNotificationTopicArn">ResetNotificationTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetPreferredAvailabilityZone">ResetPreferredAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetPreferredAvailabilityZones">ResetPreferredAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetSnapshotArns">ResetSnapshotArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetSnapshotName">ResetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetSnapshotRetentionLimit">ResetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetSnapshotWindow">ResetSnapshotWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetTransitEncryptionEnabled">ResetTransitEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogDeliveryConfigurations` <a name="PutLogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.putLogDeliveryConfigurations"></a>

```go
func PutLogDeliveryConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.putLogDeliveryConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetAutoMinorVersionUpgrade"></a>

```go
func ResetAutoMinorVersionUpgrade()
```

##### `ResetAzMode` <a name="ResetAzMode" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetAzMode"></a>

```go
func ResetAzMode()
```

##### `ResetCacheParameterGroupName` <a name="ResetCacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetCacheParameterGroupName"></a>

```go
func ResetCacheParameterGroupName()
```

##### `ResetCacheSecurityGroupNames` <a name="ResetCacheSecurityGroupNames" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetCacheSecurityGroupNames"></a>

```go
func ResetCacheSecurityGroupNames()
```

##### `ResetCacheSubnetGroupName` <a name="ResetCacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetCacheSubnetGroupName"></a>

```go
func ResetCacheSubnetGroupName()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetIpDiscovery` <a name="ResetIpDiscovery" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetIpDiscovery"></a>

```go
func ResetIpDiscovery()
```

##### `ResetLogDeliveryConfigurations` <a name="ResetLogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetLogDeliveryConfigurations"></a>

```go
func ResetLogDeliveryConfigurations()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetNetworkType"></a>

```go
func ResetNetworkType()
```

##### `ResetNotificationTopicArn` <a name="ResetNotificationTopicArn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetNotificationTopicArn"></a>

```go
func ResetNotificationTopicArn()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPreferredAvailabilityZone` <a name="ResetPreferredAvailabilityZone" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetPreferredAvailabilityZone"></a>

```go
func ResetPreferredAvailabilityZone()
```

##### `ResetPreferredAvailabilityZones` <a name="ResetPreferredAvailabilityZones" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetPreferredAvailabilityZones"></a>

```go
func ResetPreferredAvailabilityZones()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetPreferredMaintenanceWindow"></a>

```go
func ResetPreferredMaintenanceWindow()
```

##### `ResetSnapshotArns` <a name="ResetSnapshotArns" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetSnapshotArns"></a>

```go
func ResetSnapshotArns()
```

##### `ResetSnapshotName` <a name="ResetSnapshotName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetSnapshotName"></a>

```go
func ResetSnapshotName()
```

##### `ResetSnapshotRetentionLimit` <a name="ResetSnapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetSnapshotRetentionLimit"></a>

```go
func ResetSnapshotRetentionLimit()
```

##### `ResetSnapshotWindow` <a name="ResetSnapshotWindow" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetSnapshotWindow"></a>

```go
func ResetSnapshotWindow()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTransitEncryptionEnabled` <a name="ResetTransitEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetTransitEncryptionEnabled"></a>

```go
func ResetTransitEncryptionEnabled()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetVpcSecurityGroupIds"></a>

```go
func ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticacheCacheCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

elasticachecachecluster.ElasticacheCacheCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

elasticachecachecluster.ElasticacheCacheCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

elasticachecachecluster.ElasticacheCacheCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

elasticachecachecluster.ElasticacheCacheCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ElasticacheCacheCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ElasticacheCacheCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ElasticacheCacheCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheCacheCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.configurationEndpoint">ConfigurationEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference">ElasticacheCacheClusterConfigurationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.logDeliveryConfigurations">LogDeliveryConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList">ElasticacheCacheClusterLogDeliveryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.redisEndpoint">RedisEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference">ElasticacheCacheClusterRedisEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList">ElasticacheCacheClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.azModeInput">AzModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheNodeTypeInput">CacheNodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheParameterGroupNameInput">CacheParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheSecurityGroupNamesInput">CacheSecurityGroupNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheSubnetGroupNameInput">CacheSubnetGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.ipDiscoveryInput">IpDiscoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.logDeliveryConfigurationsInput">LogDeliveryConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.networkTypeInput">NetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.notificationTopicArnInput">NotificationTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.numCacheNodesInput">NumCacheNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredAvailabilityZoneInput">PreferredAvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredAvailabilityZonesInput">PreferredAvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotArnsInput">SnapshotArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotRetentionLimitInput">SnapshotRetentionLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotWindowInput">SnapshotWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.transitEncryptionEnabledInput">TransitEncryptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.azMode">AzMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheNodeType">CacheNodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheParameterGroupName">CacheParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheSecurityGroupNames">CacheSecurityGroupNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheSubnetGroupName">CacheSubnetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.ipDiscovery">IpDiscovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.numCacheNodes">NumCacheNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredAvailabilityZone">PreferredAvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredAvailabilityZones">PreferredAvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotArns">SnapshotArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotWindow">SnapshotWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.transitEncryptionEnabled">TransitEncryptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigurationEndpoint`<sup>Required</sup> <a name="ConfigurationEndpoint" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.configurationEndpoint"></a>

```go
func ConfigurationEndpoint() ElasticacheCacheClusterConfigurationEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference">ElasticacheCacheClusterConfigurationEndpointOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogDeliveryConfigurations`<sup>Required</sup> <a name="LogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.logDeliveryConfigurations"></a>

```go
func LogDeliveryConfigurations() ElasticacheCacheClusterLogDeliveryConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList">ElasticacheCacheClusterLogDeliveryConfigurationsList</a>

---

##### `RedisEndpoint`<sup>Required</sup> <a name="RedisEndpoint" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.redisEndpoint"></a>

```go
func RedisEndpoint() ElasticacheCacheClusterRedisEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference">ElasticacheCacheClusterRedisEndpointOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.tags"></a>

```go
func Tags() ElasticacheCacheClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList">ElasticacheCacheClusterTagsList</a>

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.autoMinorVersionUpgradeInput"></a>

```go
func AutoMinorVersionUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `AzModeInput`<sup>Optional</sup> <a name="AzModeInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.azModeInput"></a>

```go
func AzModeInput() *string
```

- *Type:* *string

---

##### `CacheNodeTypeInput`<sup>Optional</sup> <a name="CacheNodeTypeInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheNodeTypeInput"></a>

```go
func CacheNodeTypeInput() *string
```

- *Type:* *string

---

##### `CacheParameterGroupNameInput`<sup>Optional</sup> <a name="CacheParameterGroupNameInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheParameterGroupNameInput"></a>

```go
func CacheParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `CacheSecurityGroupNamesInput`<sup>Optional</sup> <a name="CacheSecurityGroupNamesInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheSecurityGroupNamesInput"></a>

```go
func CacheSecurityGroupNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CacheSubnetGroupNameInput`<sup>Optional</sup> <a name="CacheSubnetGroupNameInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheSubnetGroupNameInput"></a>

```go
func CacheSubnetGroupNameInput() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `IpDiscoveryInput`<sup>Optional</sup> <a name="IpDiscoveryInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.ipDiscoveryInput"></a>

```go
func IpDiscoveryInput() *string
```

- *Type:* *string

---

##### `LogDeliveryConfigurationsInput`<sup>Optional</sup> <a name="LogDeliveryConfigurationsInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.logDeliveryConfigurationsInput"></a>

```go
func LogDeliveryConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.networkTypeInput"></a>

```go
func NetworkTypeInput() *string
```

- *Type:* *string

---

##### `NotificationTopicArnInput`<sup>Optional</sup> <a name="NotificationTopicArnInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.notificationTopicArnInput"></a>

```go
func NotificationTopicArnInput() *string
```

- *Type:* *string

---

##### `NumCacheNodesInput`<sup>Optional</sup> <a name="NumCacheNodesInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.numCacheNodesInput"></a>

```go
func NumCacheNodesInput() *f64
```

- *Type:* *f64

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PreferredAvailabilityZoneInput`<sup>Optional</sup> <a name="PreferredAvailabilityZoneInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredAvailabilityZoneInput"></a>

```go
func PreferredAvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `PreferredAvailabilityZonesInput`<sup>Optional</sup> <a name="PreferredAvailabilityZonesInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredAvailabilityZonesInput"></a>

```go
func PreferredAvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredMaintenanceWindowInput"></a>

```go
func PreferredMaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `SnapshotArnsInput`<sup>Optional</sup> <a name="SnapshotArnsInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotArnsInput"></a>

```go
func SnapshotArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotNameInput"></a>

```go
func SnapshotNameInput() *string
```

- *Type:* *string

---

##### `SnapshotRetentionLimitInput`<sup>Optional</sup> <a name="SnapshotRetentionLimitInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotRetentionLimitInput"></a>

```go
func SnapshotRetentionLimitInput() *f64
```

- *Type:* *f64

---

##### `SnapshotWindowInput`<sup>Optional</sup> <a name="SnapshotWindowInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotWindowInput"></a>

```go
func SnapshotWindowInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TransitEncryptionEnabledInput`<sup>Optional</sup> <a name="TransitEncryptionEnabledInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.transitEncryptionEnabledInput"></a>

```go
func TransitEncryptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.autoMinorVersionUpgrade"></a>

```go
func AutoMinorVersionUpgrade() interface{}
```

- *Type:* interface{}

---

##### `AzMode`<sup>Required</sup> <a name="AzMode" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.azMode"></a>

```go
func AzMode() *string
```

- *Type:* *string

---

##### `CacheNodeType`<sup>Required</sup> <a name="CacheNodeType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheNodeType"></a>

```go
func CacheNodeType() *string
```

- *Type:* *string

---

##### `CacheParameterGroupName`<sup>Required</sup> <a name="CacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheParameterGroupName"></a>

```go
func CacheParameterGroupName() *string
```

- *Type:* *string

---

##### `CacheSecurityGroupNames`<sup>Required</sup> <a name="CacheSecurityGroupNames" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheSecurityGroupNames"></a>

```go
func CacheSecurityGroupNames() *[]*string
```

- *Type:* *[]*string

---

##### `CacheSubnetGroupName`<sup>Required</sup> <a name="CacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheSubnetGroupName"></a>

```go
func CacheSubnetGroupName() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `IpDiscovery`<sup>Required</sup> <a name="IpDiscovery" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.ipDiscovery"></a>

```go
func IpDiscovery() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `NotificationTopicArn`<sup>Required</sup> <a name="NotificationTopicArn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.notificationTopicArn"></a>

```go
func NotificationTopicArn() *string
```

- *Type:* *string

---

##### `NumCacheNodes`<sup>Required</sup> <a name="NumCacheNodes" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.numCacheNodes"></a>

```go
func NumCacheNodes() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PreferredAvailabilityZone`<sup>Required</sup> <a name="PreferredAvailabilityZone" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredAvailabilityZone"></a>

```go
func PreferredAvailabilityZone() *string
```

- *Type:* *string

---

##### `PreferredAvailabilityZones`<sup>Required</sup> <a name="PreferredAvailabilityZones" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredAvailabilityZones"></a>

```go
func PreferredAvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `SnapshotArns`<sup>Required</sup> <a name="SnapshotArns" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotArns"></a>

```go
func SnapshotArns() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotName"></a>

```go
func SnapshotName() *string
```

- *Type:* *string

---

##### `SnapshotRetentionLimit`<sup>Required</sup> <a name="SnapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotRetentionLimit"></a>

```go
func SnapshotRetentionLimit() *f64
```

- *Type:* *f64

---

##### `SnapshotWindow`<sup>Required</sup> <a name="SnapshotWindow" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotWindow"></a>

```go
func SnapshotWindow() *string
```

- *Type:* *string

---

##### `TransitEncryptionEnabled`<sup>Required</sup> <a name="TransitEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.transitEncryptionEnabled"></a>

```go
func TransitEncryptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheCacheClusterConfig <a name="ElasticacheCacheClusterConfig" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

&elasticachecachecluster.ElasticacheCacheClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CacheNodeType: *string,
	Engine: *string,
	NumCacheNodes: *f64,
	AutoMinorVersionUpgrade: interface{},
	AzMode: *string,
	CacheParameterGroupName: *string,
	CacheSecurityGroupNames: *[]*string,
	CacheSubnetGroupName: *string,
	ClusterName: *string,
	EngineVersion: *string,
	IpDiscovery: *string,
	LogDeliveryConfigurations: interface{},
	NetworkType: *string,
	NotificationTopicArn: *string,
	Port: *f64,
	PreferredAvailabilityZone: *string,
	PreferredAvailabilityZones: *[]*string,
	PreferredMaintenanceWindow: *string,
	SnapshotArns: *[]*string,
	SnapshotName: *string,
	SnapshotRetentionLimit: *f64,
	SnapshotWindow: *string,
	Tags: interface{},
	TransitEncryptionEnabled: interface{},
	VpcSecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.cacheNodeType">CacheNodeType</a></code> | <code>*string</code> | The compute and memory capacity of the nodes in the node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.engine">Engine</a></code> | <code>*string</code> | The name of the cache engine to be used for this cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.numCacheNodes">NumCacheNodes</a></code> | <code>*f64</code> | The number of cache nodes that the cache cluster should have. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>interface{}</code> | If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next minor version upgrade campaign. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.azMode">AzMode</a></code> | <code>*string</code> | Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.cacheParameterGroupName">CacheParameterGroupName</a></code> | <code>*string</code> | The name of the parameter group to associate with this cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.cacheSecurityGroupNames">CacheSecurityGroupNames</a></code> | <code>*[]*string</code> | A list of security group names to associate with this cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.cacheSubnetGroupName">CacheSubnetGroupName</a></code> | <code>*string</code> | The name of the subnet group to be used for the cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | A name for the cache cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | The version number of the cache engine to be used for this cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.ipDiscovery">IpDiscovery</a></code> | <code>*string</code> | The Ip Discovery parameter for cachecluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.logDeliveryConfigurations">LogDeliveryConfigurations</a></code> | <code>interface{}</code> | Specifies the destination, format and type of the logs. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.networkType">NetworkType</a></code> | <code>*string</code> | The network type parameter for cachecluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.port">Port</a></code> | <code>*f64</code> | The port number on which each of the cache nodes accepts connections. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.preferredAvailabilityZone">PreferredAvailabilityZone</a></code> | <code>*string</code> | The EC2 Availability Zone in which the cluster is created. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.preferredAvailabilityZones">PreferredAvailabilityZones</a></code> | <code>*[]*string</code> | A list of the Availability Zones in which cache nodes are created. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | Specifies the weekly time range during which maintenance on the cluster is performed. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.snapshotArns">SnapshotArns</a></code> | <code>*[]*string</code> | A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Redis RDB snapshot file stored in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | The name of a Redis snapshot from which to restore data into the new node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>*f64</code> | The number of days for which ElastiCache retains automatic snapshots before deleting them. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.snapshotWindow">SnapshotWindow</a></code> | <code>*string</code> | The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of tags to be added to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.transitEncryptionEnabled">TransitEncryptionEnabled</a></code> | <code>interface{}</code> | A flag that enables in-transit encryption when set to true. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | One or more VPC security groups associated with the cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CacheNodeType`<sup>Required</sup> <a name="CacheNodeType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.cacheNodeType"></a>

```go
CacheNodeType *string
```

- *Type:* *string

The compute and memory capacity of the nodes in the node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#cache_node_type ElasticacheCacheCluster#cache_node_type}

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

The name of the cache engine to be used for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#engine ElasticacheCacheCluster#engine}

---

##### `NumCacheNodes`<sup>Required</sup> <a name="NumCacheNodes" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.numCacheNodes"></a>

```go
NumCacheNodes *f64
```

- *Type:* *f64

The number of cache nodes that the cache cluster should have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#num_cache_nodes ElasticacheCacheCluster#num_cache_nodes}

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.autoMinorVersionUpgrade"></a>

```go
AutoMinorVersionUpgrade interface{}
```

- *Type:* interface{}

If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next minor version upgrade campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#auto_minor_version_upgrade ElasticacheCacheCluster#auto_minor_version_upgrade}

---

##### `AzMode`<sup>Optional</sup> <a name="AzMode" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.azMode"></a>

```go
AzMode *string
```

- *Type:* *string

Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#az_mode ElasticacheCacheCluster#az_mode}

---

##### `CacheParameterGroupName`<sup>Optional</sup> <a name="CacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.cacheParameterGroupName"></a>

```go
CacheParameterGroupName *string
```

- *Type:* *string

The name of the parameter group to associate with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#cache_parameter_group_name ElasticacheCacheCluster#cache_parameter_group_name}

---

##### `CacheSecurityGroupNames`<sup>Optional</sup> <a name="CacheSecurityGroupNames" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.cacheSecurityGroupNames"></a>

```go
CacheSecurityGroupNames *[]*string
```

- *Type:* *[]*string

A list of security group names to associate with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#cache_security_group_names ElasticacheCacheCluster#cache_security_group_names}

---

##### `CacheSubnetGroupName`<sup>Optional</sup> <a name="CacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.cacheSubnetGroupName"></a>

```go
CacheSubnetGroupName *string
```

- *Type:* *string

The name of the subnet group to be used for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#cache_subnet_group_name ElasticacheCacheCluster#cache_subnet_group_name}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

A name for the cache cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#cluster_name ElasticacheCacheCluster#cluster_name}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

The version number of the cache engine to be used for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#engine_version ElasticacheCacheCluster#engine_version}

---

##### `IpDiscovery`<sup>Optional</sup> <a name="IpDiscovery" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.ipDiscovery"></a>

```go
IpDiscovery *string
```

- *Type:* *string

The Ip Discovery parameter for cachecluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#ip_discovery ElasticacheCacheCluster#ip_discovery}

---

##### `LogDeliveryConfigurations`<sup>Optional</sup> <a name="LogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.logDeliveryConfigurations"></a>

```go
LogDeliveryConfigurations interface{}
```

- *Type:* interface{}

Specifies the destination, format and type of the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#log_delivery_configurations ElasticacheCacheCluster#log_delivery_configurations}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.networkType"></a>

```go
NetworkType *string
```

- *Type:* *string

The network type parameter for cachecluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#network_type ElasticacheCacheCluster#network_type}

---

##### `NotificationTopicArn`<sup>Optional</sup> <a name="NotificationTopicArn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.notificationTopicArn"></a>

```go
NotificationTopicArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#notification_topic_arn ElasticacheCacheCluster#notification_topic_arn}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port number on which each of the cache nodes accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#port ElasticacheCacheCluster#port}

---

##### `PreferredAvailabilityZone`<sup>Optional</sup> <a name="PreferredAvailabilityZone" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.preferredAvailabilityZone"></a>

```go
PreferredAvailabilityZone *string
```

- *Type:* *string

The EC2 Availability Zone in which the cluster is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#preferred_availability_zone ElasticacheCacheCluster#preferred_availability_zone}

---

##### `PreferredAvailabilityZones`<sup>Optional</sup> <a name="PreferredAvailabilityZones" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.preferredAvailabilityZones"></a>

```go
PreferredAvailabilityZones *[]*string
```

- *Type:* *[]*string

A list of the Availability Zones in which cache nodes are created.

The order of the zones in the list is not important.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#preferred_availability_zones ElasticacheCacheCluster#preferred_availability_zones}

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.preferredMaintenanceWindow"></a>

```go
PreferredMaintenanceWindow *string
```

- *Type:* *string

Specifies the weekly time range during which maintenance on the cluster is performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#preferred_maintenance_window ElasticacheCacheCluster#preferred_maintenance_window}

---

##### `SnapshotArns`<sup>Optional</sup> <a name="SnapshotArns" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.snapshotArns"></a>

```go
SnapshotArns *[]*string
```

- *Type:* *[]*string

A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Redis RDB snapshot file stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#snapshot_arns ElasticacheCacheCluster#snapshot_arns}

---

##### `SnapshotName`<sup>Optional</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.snapshotName"></a>

```go
SnapshotName *string
```

- *Type:* *string

The name of a Redis snapshot from which to restore data into the new node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#snapshot_name ElasticacheCacheCluster#snapshot_name}

---

##### `SnapshotRetentionLimit`<sup>Optional</sup> <a name="SnapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.snapshotRetentionLimit"></a>

```go
SnapshotRetentionLimit *f64
```

- *Type:* *f64

The number of days for which ElastiCache retains automatic snapshots before deleting them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#snapshot_retention_limit ElasticacheCacheCluster#snapshot_retention_limit}

---

##### `SnapshotWindow`<sup>Optional</sup> <a name="SnapshotWindow" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.snapshotWindow"></a>

```go
SnapshotWindow *string
```

- *Type:* *string

The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#snapshot_window ElasticacheCacheCluster#snapshot_window}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of tags to be added to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#tags ElasticacheCacheCluster#tags}

---

##### `TransitEncryptionEnabled`<sup>Optional</sup> <a name="TransitEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.transitEncryptionEnabled"></a>

```go
TransitEncryptionEnabled interface{}
```

- *Type:* interface{}

A flag that enables in-transit encryption when set to true.

You cannot modify the value of TransitEncryptionEnabled after the cluster is created

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#transit_encryption_enabled ElasticacheCacheCluster#transit_encryption_enabled}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *[]*string
```

- *Type:* *[]*string

One or more VPC security groups associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#vpc_security_group_ids ElasticacheCacheCluster#vpc_security_group_ids}

---

### ElasticacheCacheClusterConfigurationEndpoint <a name="ElasticacheCacheClusterConfigurationEndpoint" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

&elasticachecachecluster.ElasticacheCacheClusterConfigurationEndpoint {

}
```


### ElasticacheCacheClusterLogDeliveryConfigurations <a name="ElasticacheCacheClusterLogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

&elasticachecachecluster.ElasticacheCacheClusterLogDeliveryConfigurations {
	DestinationDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails,
	DestinationType: *string,
	LogFormat: *string,
	LogType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.property.destinationDetails">DestinationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails</a></code> | Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.property.destinationType">DestinationType</a></code> | <code>*string</code> | Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.property.logFormat">LogFormat</a></code> | <code>*string</code> | Valid values are either json or text. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.property.logType">LogType</a></code> | <code>*string</code> | Valid value is either slow-log, which refers to slow-log or engine-log. |

---

##### `DestinationDetails`<sup>Optional</sup> <a name="DestinationDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.property.destinationDetails"></a>

```go
DestinationDetails ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails</a>

Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#destination_details ElasticacheCacheCluster#destination_details}

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#destination_type ElasticacheCacheCluster#destination_type}

---

##### `LogFormat`<sup>Optional</sup> <a name="LogFormat" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.property.logFormat"></a>

```go
LogFormat *string
```

- *Type:* *string

Valid values are either json or text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#log_format ElasticacheCacheCluster#log_format}

---

##### `LogType`<sup>Optional</sup> <a name="LogType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.property.logType"></a>

```go
LogType *string
```

- *Type:* *string

Valid value is either slow-log, which refers to slow-log or engine-log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#log_type ElasticacheCacheCluster#log_type}

---

### ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails <a name="ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

&elasticachecachecluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails {
	CloudwatchLogsDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails,
	KinesisFirehoseDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails.property.cloudwatchLogsDetails">CloudwatchLogsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a></code> | The configuration details of the CloudWatch Logs destination. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails.property.kinesisFirehoseDetails">KinesisFirehoseDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a></code> | The configuration details of the Kinesis Data Firehose destination. |

---

##### `CloudwatchLogsDetails`<sup>Optional</sup> <a name="CloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails.property.cloudwatchLogsDetails"></a>

```go
CloudwatchLogsDetails ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

The configuration details of the CloudWatch Logs destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#cloudwatch_logs_details ElasticacheCacheCluster#cloudwatch_logs_details}

---

##### `KinesisFirehoseDetails`<sup>Optional</sup> <a name="KinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails.property.kinesisFirehoseDetails"></a>

```go
KinesisFirehoseDetails ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

The configuration details of the Kinesis Data Firehose destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#kinesis_firehose_details ElasticacheCacheCluster#kinesis_firehose_details}

---

### ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails <a name="ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

&elasticachecachecluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails {
	LogGroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.property.logGroup">LogGroup</a></code> | <code>*string</code> | The name of the CloudWatch Logs log group. |

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.property.logGroup"></a>

```go
LogGroup *string
```

- *Type:* *string

The name of the CloudWatch Logs log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#log_group ElasticacheCacheCluster#log_group}

---

### ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails <a name="ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

&elasticachecachecluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails {
	DeliveryStream: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | The name of the Kinesis Data Firehose delivery stream. |

---

##### `DeliveryStream`<sup>Optional</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.property.deliveryStream"></a>

```go
DeliveryStream *string
```

- *Type:* *string

The name of the Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#delivery_stream ElasticacheCacheCluster#delivery_stream}

---

### ElasticacheCacheClusterRedisEndpoint <a name="ElasticacheCacheClusterRedisEndpoint" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

&elasticachecachecluster.ElasticacheCacheClusterRedisEndpoint {

}
```


### ElasticacheCacheClusterTags <a name="ElasticacheCacheClusterTags" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

&elasticachecachecluster.ElasticacheCacheClusterTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#key ElasticacheCacheCluster#key}. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#value ElasticacheCacheCluster#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#key ElasticacheCacheCluster#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_cache_cluster#value ElasticacheCacheCluster#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheCacheClusterConfigurationEndpointOutputReference <a name="ElasticacheCacheClusterConfigurationEndpointOutputReference" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

elasticachecachecluster.NewElasticacheCacheClusterConfigurationEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticacheCacheClusterConfigurationEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpoint">ElasticacheCacheClusterConfigurationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() ElasticacheCacheClusterConfigurationEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpoint">ElasticacheCacheClusterConfigurationEndpoint</a>

---


### ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference <a name="ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

elasticachecachecluster.NewElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resetLogGroup"></a>

```go
func ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroupInput"></a>

```go
func LogGroupInput() *string
```

- *Type:* *string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference <a name="ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

elasticachecachecluster.NewElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resetDeliveryStream">ResetDeliveryStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStream` <a name="ResetDeliveryStream" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resetDeliveryStream"></a>

```go
func ResetDeliveryStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStreamInput">DeliveryStreamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeliveryStreamInput`<sup>Optional</sup> <a name="DeliveryStreamInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStreamInput"></a>

```go
func DeliveryStreamInput() *string
```

- *Type:* *string

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream"></a>

```go
func DeliveryStream() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference <a name="ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

elasticachecachecluster.NewElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails">PutCloudwatchLogsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails">PutKinesisFirehoseDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.resetCloudwatchLogsDetails">ResetCloudwatchLogsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.resetKinesisFirehoseDetails">ResetKinesisFirehoseDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogsDetails` <a name="PutCloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails"></a>

```go
func PutCloudwatchLogsDetails(value ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

---

##### `PutKinesisFirehoseDetails` <a name="PutKinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails"></a>

```go
func PutKinesisFirehoseDetails(value ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

---

##### `ResetCloudwatchLogsDetails` <a name="ResetCloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.resetCloudwatchLogsDetails"></a>

```go
func ResetCloudwatchLogsDetails()
```

##### `ResetKinesisFirehoseDetails` <a name="ResetKinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.resetKinesisFirehoseDetails"></a>

```go
func ResetKinesisFirehoseDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails">CloudwatchLogsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails">KinesisFirehoseDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetailsInput">CloudwatchLogsDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetailsInput">KinesisFirehoseDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogsDetails`<sup>Required</sup> <a name="CloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails"></a>

```go
func CloudwatchLogsDetails() ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a>

---

##### `KinesisFirehoseDetails`<sup>Required</sup> <a name="KinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails"></a>

```go
func KinesisFirehoseDetails() ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a>

---

##### `CloudwatchLogsDetailsInput`<sup>Optional</sup> <a name="CloudwatchLogsDetailsInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetailsInput"></a>

```go
func CloudwatchLogsDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `KinesisFirehoseDetailsInput`<sup>Optional</sup> <a name="KinesisFirehoseDetailsInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetailsInput"></a>

```go
func KinesisFirehoseDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheCacheClusterLogDeliveryConfigurationsList <a name="ElasticacheCacheClusterLogDeliveryConfigurationsList" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

elasticachecachecluster.NewElasticacheCacheClusterLogDeliveryConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElasticacheCacheClusterLogDeliveryConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.get"></a>

```go
func Get(index *f64) ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference <a name="ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

elasticachecachecluster.NewElasticacheCacheClusterLogDeliveryConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.putDestinationDetails">PutDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resetDestinationDetails">ResetDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resetDestinationType">ResetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resetLogFormat">ResetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resetLogType">ResetLogType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationDetails` <a name="PutDestinationDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.putDestinationDetails"></a>

```go
func PutDestinationDetails(value ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.putDestinationDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails</a>

---

##### `ResetDestinationDetails` <a name="ResetDestinationDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resetDestinationDetails"></a>

```go
func ResetDestinationDetails()
```

##### `ResetDestinationType` <a name="ResetDestinationType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resetDestinationType"></a>

```go
func ResetDestinationType()
```

##### `ResetLogFormat` <a name="ResetLogFormat" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resetLogFormat"></a>

```go
func ResetLogFormat()
```

##### `ResetLogType` <a name="ResetLogType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resetLogType"></a>

```go
func ResetLogType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationDetails">DestinationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationDetailsInput">DestinationDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logFormatInput">LogFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logFormat">LogFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationDetails`<sup>Required</sup> <a name="DestinationDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationDetails"></a>

```go
func DestinationDetails() ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference</a>

---

##### `DestinationDetailsInput`<sup>Optional</sup> <a name="DestinationDetailsInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationDetailsInput"></a>

```go
func DestinationDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `LogFormatInput`<sup>Optional</sup> <a name="LogFormatInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logFormatInput"></a>

```go
func LogFormatInput() *string
```

- *Type:* *string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logTypeInput"></a>

```go
func LogTypeInput() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logFormat"></a>

```go
func LogFormat() *string
```

- *Type:* *string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheCacheClusterRedisEndpointOutputReference <a name="ElasticacheCacheClusterRedisEndpointOutputReference" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

elasticachecachecluster.NewElasticacheCacheClusterRedisEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticacheCacheClusterRedisEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpoint">ElasticacheCacheClusterRedisEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() ElasticacheCacheClusterRedisEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpoint">ElasticacheCacheClusterRedisEndpoint</a>

---


### ElasticacheCacheClusterTagsList <a name="ElasticacheCacheClusterTagsList" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

elasticachecachecluster.NewElasticacheCacheClusterTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElasticacheCacheClusterTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.get"></a>

```go
func Get(index *f64) ElasticacheCacheClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheCacheClusterTagsOutputReference <a name="ElasticacheCacheClusterTagsOutputReference" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticachecachecluster"

elasticachecachecluster.NewElasticacheCacheClusterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElasticacheCacheClusterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



