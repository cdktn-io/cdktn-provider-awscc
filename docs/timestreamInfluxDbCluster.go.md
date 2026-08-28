# `timestreamInfluxDbCluster` Submodule <a name="`timestreamInfluxDbCluster` Submodule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreamInfluxDbCluster <a name="TimestreamInfluxDbCluster" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster awscc_timestream_influx_db_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/timestreaminfluxdbcluster"

timestreaminfluxdbcluster.NewTimestreamInfluxDbCluster(scope Construct, id *string, config TimestreamInfluxDbClusterConfig) TimestreamInfluxDbCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig">TimestreamInfluxDbClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig">TimestreamInfluxDbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putLogDeliveryConfiguration">PutLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putMaintenanceSchedule">PutMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetAllocatedStorage">ResetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbInstanceType">ResetDbInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbParameterGroupIdentifier">ResetDbParameterGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbStorageType">ResetDbStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetFailoverMode">ResetFailoverMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetLogDeliveryConfiguration">ResetLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetMaintenanceSchedule">ResetMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetVpcSubnetIds">ResetVpcSubnetIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogDeliveryConfiguration` <a name="PutLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putLogDeliveryConfiguration"></a>

```go
func PutLogDeliveryConfiguration(value TimestreamInfluxDbClusterLogDeliveryConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putLogDeliveryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a>

---

##### `PutMaintenanceSchedule` <a name="PutMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putMaintenanceSchedule"></a>

```go
func PutMaintenanceSchedule(value TimestreamInfluxDbClusterMaintenanceSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putMaintenanceSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllocatedStorage` <a name="ResetAllocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetAllocatedStorage"></a>

```go
func ResetAllocatedStorage()
```

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetDbInstanceType` <a name="ResetDbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbInstanceType"></a>

```go
func ResetDbInstanceType()
```

##### `ResetDbParameterGroupIdentifier` <a name="ResetDbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbParameterGroupIdentifier"></a>

```go
func ResetDbParameterGroupIdentifier()
```

##### `ResetDbStorageType` <a name="ResetDbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDbStorageType"></a>

```go
func ResetDbStorageType()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetDeploymentType"></a>

```go
func ResetDeploymentType()
```

##### `ResetFailoverMode` <a name="ResetFailoverMode" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetFailoverMode"></a>

```go
func ResetFailoverMode()
```

##### `ResetLogDeliveryConfiguration` <a name="ResetLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetLogDeliveryConfiguration"></a>

```go
func ResetLogDeliveryConfiguration()
```

##### `ResetMaintenanceSchedule` <a name="ResetMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetMaintenanceSchedule"></a>

```go
func ResetMaintenanceSchedule()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetName"></a>

```go
func ResetName()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetNetworkType"></a>

```go
func ResetNetworkType()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetPubliclyAccessible"></a>

```go
func ResetPubliclyAccessible()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetVpcSecurityGroupIds"></a>

```go
func ResetVpcSecurityGroupIds()
```

##### `ResetVpcSubnetIds` <a name="ResetVpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.resetVpcSubnetIds"></a>

```go
func ResetVpcSubnetIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TimestreamInfluxDbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/timestreaminfluxdbcluster"

timestreaminfluxdbcluster.TimestreamInfluxDbCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/timestreaminfluxdbcluster"

timestreaminfluxdbcluster.TimestreamInfluxDbCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/timestreaminfluxdbcluster"

timestreaminfluxdbcluster.TimestreamInfluxDbCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/timestreaminfluxdbcluster"

timestreaminfluxdbcluster.TimestreamInfluxDbCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TimestreamInfluxDbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TimestreamInfluxDbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TimestreamInfluxDbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TimestreamInfluxDbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.engineType">EngineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.influxAuthParametersSecretArn">InfluxAuthParametersSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.influxDbClusterId">InfluxDbClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference">TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference">TimestreamInfluxDbClusterMaintenanceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.nextMaintenanceTime">NextMaintenanceTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.readerEndpoint">ReaderEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList">TimestreamInfluxDbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.allocatedStorageInput">AllocatedStorageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbInstanceTypeInput">DbInstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbParameterGroupIdentifierInput">DbParameterGroupIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbStorageTypeInput">DbStorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.failoverModeInput">FailoverModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.logDeliveryConfigurationInput">LogDeliveryConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.maintenanceScheduleInput">MaintenanceScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.networkTypeInput">NetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSubnetIdsInput">VpcSubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.allocatedStorage">AllocatedStorage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbInstanceType">DbInstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbParameterGroupIdentifier">DbParameterGroupIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbStorageType">DbStorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.failoverMode">FailoverMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.engineType"></a>

```go
func EngineType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InfluxAuthParametersSecretArn`<sup>Required</sup> <a name="InfluxAuthParametersSecretArn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.influxAuthParametersSecretArn"></a>

```go
func InfluxAuthParametersSecretArn() *string
```

- *Type:* *string

---

##### `InfluxDbClusterId`<sup>Required</sup> <a name="InfluxDbClusterId" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.influxDbClusterId"></a>

```go
func InfluxDbClusterId() *string
```

- *Type:* *string

---

##### `LogDeliveryConfiguration`<sup>Required</sup> <a name="LogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.logDeliveryConfiguration"></a>

```go
func LogDeliveryConfiguration() TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference">TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference</a>

---

##### `MaintenanceSchedule`<sup>Required</sup> <a name="MaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.maintenanceSchedule"></a>

```go
func MaintenanceSchedule() TimestreamInfluxDbClusterMaintenanceScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference">TimestreamInfluxDbClusterMaintenanceScheduleOutputReference</a>

---

##### `NextMaintenanceTime`<sup>Required</sup> <a name="NextMaintenanceTime" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.nextMaintenanceTime"></a>

```go
func NextMaintenanceTime() *string
```

- *Type:* *string

---

##### `ReaderEndpoint`<sup>Required</sup> <a name="ReaderEndpoint" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.readerEndpoint"></a>

```go
func ReaderEndpoint() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tags"></a>

```go
func Tags() TimestreamInfluxDbClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList">TimestreamInfluxDbClusterTagsList</a>

---

##### `AllocatedStorageInput`<sup>Optional</sup> <a name="AllocatedStorageInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.allocatedStorageInput"></a>

```go
func AllocatedStorageInput() *f64
```

- *Type:* *f64

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `DbInstanceTypeInput`<sup>Optional</sup> <a name="DbInstanceTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbInstanceTypeInput"></a>

```go
func DbInstanceTypeInput() *string
```

- *Type:* *string

---

##### `DbParameterGroupIdentifierInput`<sup>Optional</sup> <a name="DbParameterGroupIdentifierInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbParameterGroupIdentifierInput"></a>

```go
func DbParameterGroupIdentifierInput() *string
```

- *Type:* *string

---

##### `DbStorageTypeInput`<sup>Optional</sup> <a name="DbStorageTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbStorageTypeInput"></a>

```go
func DbStorageTypeInput() *string
```

- *Type:* *string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.deploymentTypeInput"></a>

```go
func DeploymentTypeInput() *string
```

- *Type:* *string

---

##### `FailoverModeInput`<sup>Optional</sup> <a name="FailoverModeInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.failoverModeInput"></a>

```go
func FailoverModeInput() *string
```

- *Type:* *string

---

##### `LogDeliveryConfigurationInput`<sup>Optional</sup> <a name="LogDeliveryConfigurationInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.logDeliveryConfigurationInput"></a>

```go
func LogDeliveryConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `MaintenanceScheduleInput`<sup>Optional</sup> <a name="MaintenanceScheduleInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.maintenanceScheduleInput"></a>

```go
func MaintenanceScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.networkTypeInput"></a>

```go
func NetworkTypeInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.publiclyAccessibleInput"></a>

```go
func PubliclyAccessibleInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcSubnetIdsInput`<sup>Optional</sup> <a name="VpcSubnetIdsInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSubnetIdsInput"></a>

```go
func VpcSubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.allocatedStorage"></a>

```go
func AllocatedStorage() *f64
```

- *Type:* *f64

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `DbInstanceType`<sup>Required</sup> <a name="DbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbInstanceType"></a>

```go
func DbInstanceType() *string
```

- *Type:* *string

---

##### `DbParameterGroupIdentifier`<sup>Required</sup> <a name="DbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbParameterGroupIdentifier"></a>

```go
func DbParameterGroupIdentifier() *string
```

- *Type:* *string

---

##### `DbStorageType`<sup>Required</sup> <a name="DbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.dbStorageType"></a>

```go
func DbStorageType() *string
```

- *Type:* *string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `FailoverMode`<sup>Required</sup> <a name="FailoverMode" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.failoverMode"></a>

```go
func FailoverMode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.publiclyAccessible"></a>

```go
func PubliclyAccessible() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcSubnetIds`<sup>Required</sup> <a name="VpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.vpcSubnetIds"></a>

```go
func VpcSubnetIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreamInfluxDbClusterConfig <a name="TimestreamInfluxDbClusterConfig" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/timestreaminfluxdbcluster"

&timestreaminfluxdbcluster.TimestreamInfluxDbClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AllocatedStorage: *f64,
	Bucket: *string,
	DbInstanceType: *string,
	DbParameterGroupIdentifier: *string,
	DbStorageType: *string,
	DeploymentType: *string,
	FailoverMode: *string,
	LogDeliveryConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration,
	MaintenanceSchedule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule,
	Name: *string,
	NetworkType: *string,
	Organization: *string,
	Password: *string,
	Port: *f64,
	PubliclyAccessible: interface{},
	Tags: interface{},
	Username: *string,
	VpcSecurityGroupIds: *[]*string,
	VpcSubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.allocatedStorage">AllocatedStorage</a></code> | <code>*f64</code> | The allocated storage for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.bucket">Bucket</a></code> | <code>*string</code> | The bucket for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbInstanceType">DbInstanceType</a></code> | <code>*string</code> | The compute instance of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbParameterGroupIdentifier">DbParameterGroupIdentifier</a></code> | <code>*string</code> | The name of an existing InfluxDB parameter group. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbStorageType">DbStorageType</a></code> | <code>*string</code> | The storage type of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | Deployment type of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.failoverMode">FailoverMode</a></code> | <code>*string</code> | Failover mode of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a></code> | Configuration for sending logs to customer account from the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a></code> | The maintenance schedule for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.name">Name</a></code> | <code>*string</code> | The unique name that is associated with the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.networkType">NetworkType</a></code> | <code>*string</code> | Network type of the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.organization">Organization</a></code> | <code>*string</code> | The organization for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.password">Password</a></code> | <code>*string</code> | The password for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.port">Port</a></code> | <code>*f64</code> | The port number on which InfluxDB accepts connections. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | Attach a public IP to the customer ENI. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An arbitrary set of tags (key-value pairs) for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.username">Username</a></code> | <code>*string</code> | The username for the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | A list of Amazon EC2 VPC security groups to associate with this InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>*[]*string</code> | A list of EC2 subnet IDs for this InfluxDB cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllocatedStorage`<sup>Optional</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.allocatedStorage"></a>

```go
AllocatedStorage *f64
```

- *Type:* *f64

The allocated storage for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#allocated_storage TimestreamInfluxDbCluster#allocated_storage}

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The bucket for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#bucket TimestreamInfluxDbCluster#bucket}

---

##### `DbInstanceType`<sup>Optional</sup> <a name="DbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbInstanceType"></a>

```go
DbInstanceType *string
```

- *Type:* *string

The compute instance of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#db_instance_type TimestreamInfluxDbCluster#db_instance_type}

---

##### `DbParameterGroupIdentifier`<sup>Optional</sup> <a name="DbParameterGroupIdentifier" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbParameterGroupIdentifier"></a>

```go
DbParameterGroupIdentifier *string
```

- *Type:* *string

The name of an existing InfluxDB parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#db_parameter_group_identifier TimestreamInfluxDbCluster#db_parameter_group_identifier}

---

##### `DbStorageType`<sup>Optional</sup> <a name="DbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.dbStorageType"></a>

```go
DbStorageType *string
```

- *Type:* *string

The storage type of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#db_storage_type TimestreamInfluxDbCluster#db_storage_type}

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.deploymentType"></a>

```go
DeploymentType *string
```

- *Type:* *string

Deployment type of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#deployment_type TimestreamInfluxDbCluster#deployment_type}

---

##### `FailoverMode`<sup>Optional</sup> <a name="FailoverMode" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.failoverMode"></a>

```go
FailoverMode *string
```

- *Type:* *string

Failover mode of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#failover_mode TimestreamInfluxDbCluster#failover_mode}

---

##### `LogDeliveryConfiguration`<sup>Optional</sup> <a name="LogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.logDeliveryConfiguration"></a>

```go
LogDeliveryConfiguration TimestreamInfluxDbClusterLogDeliveryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration">TimestreamInfluxDbClusterLogDeliveryConfiguration</a>

Configuration for sending logs to customer account from the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#log_delivery_configuration TimestreamInfluxDbCluster#log_delivery_configuration}

---

##### `MaintenanceSchedule`<sup>Optional</sup> <a name="MaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.maintenanceSchedule"></a>

```go
MaintenanceSchedule TimestreamInfluxDbClusterMaintenanceSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule">TimestreamInfluxDbClusterMaintenanceSchedule</a>

The maintenance schedule for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#maintenance_schedule TimestreamInfluxDbCluster#maintenance_schedule}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The unique name that is associated with the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#name TimestreamInfluxDbCluster#name}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.networkType"></a>

```go
NetworkType *string
```

- *Type:* *string

Network type of the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#network_type TimestreamInfluxDbCluster#network_type}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The organization for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#organization TimestreamInfluxDbCluster#organization}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#password TimestreamInfluxDbCluster#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port number on which InfluxDB accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#port TimestreamInfluxDbCluster#port}

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.publiclyAccessible"></a>

```go
PubliclyAccessible interface{}
```

- *Type:* interface{}

Attach a public IP to the customer ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#publicly_accessible TimestreamInfluxDbCluster#publicly_accessible}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An arbitrary set of tags (key-value pairs) for this DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#tags TimestreamInfluxDbCluster#tags}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username for the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#username TimestreamInfluxDbCluster#username}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *[]*string
```

- *Type:* *[]*string

A list of Amazon EC2 VPC security groups to associate with this InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#vpc_security_group_ids TimestreamInfluxDbCluster#vpc_security_group_ids}

---

##### `VpcSubnetIds`<sup>Optional</sup> <a name="VpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterConfig.property.vpcSubnetIds"></a>

```go
VpcSubnetIds *[]*string
```

- *Type:* *[]*string

A list of EC2 subnet IDs for this InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#vpc_subnet_ids TimestreamInfluxDbCluster#vpc_subnet_ids}

---

### TimestreamInfluxDbClusterLogDeliveryConfiguration <a name="TimestreamInfluxDbClusterLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/timestreaminfluxdbcluster"

&timestreaminfluxdbcluster.TimestreamInfluxDbClusterLogDeliveryConfiguration {
	S3Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a></code> | S3 configuration for sending logs to customer account from the InfluxDB cluster. |

---

##### `S3Configuration`<sup>Optional</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfiguration.property.s3Configuration"></a>

```go
S3Configuration TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a>

S3 configuration for sending logs to customer account from the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#s3_configuration TimestreamInfluxDbCluster#s3_configuration}

---

### TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration <a name="TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/timestreaminfluxdbcluster"

&timestreaminfluxdbcluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration {
	BucketName: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.property.bucketName">BucketName</a></code> | <code>*string</code> | The bucket name for logs to be sent from the InfluxDB cluster. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether logging to customer specified bucket is enabled. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The bucket name for logs to be sent from the InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#bucket_name TimestreamInfluxDbCluster#bucket_name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether logging to customer specified bucket is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#enabled TimestreamInfluxDbCluster#enabled}

---

### TimestreamInfluxDbClusterMaintenanceSchedule <a name="TimestreamInfluxDbClusterMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/timestreaminfluxdbcluster"

&timestreaminfluxdbcluster.TimestreamInfluxDbClusterMaintenanceSchedule {
	PreferredMaintenanceWindow: *string,
	Timezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.property.timezone">Timezone</a></code> | <code>*string</code> | The IANA timezone identifier for the maintenance schedule. |

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.property.preferredMaintenanceWindow"></a>

```go
PreferredMaintenanceWindow *string
```

- *Type:* *string

The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#preferred_maintenance_window TimestreamInfluxDbCluster#preferred_maintenance_window}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceSchedule.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

The IANA timezone identifier for the maintenance schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#timezone TimestreamInfluxDbCluster#timezone}

---

### TimestreamInfluxDbClusterTags <a name="TimestreamInfluxDbClusterTags" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/timestreaminfluxdbcluster"

&timestreaminfluxdbcluster.TimestreamInfluxDbClusterTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#key TimestreamInfluxDbCluster#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_cluster#value TimestreamInfluxDbCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference <a name="TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/timestreaminfluxdbcluster"

timestreaminfluxdbcluster.NewTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration">PutS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resetS3Configuration">ResetS3Configuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Configuration` <a name="PutS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration"></a>

```go
func PutS3Configuration(value TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a>

---

##### `ResetS3Configuration` <a name="ResetS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resetS3Configuration"></a>

```go
func ResetS3Configuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput">S3ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```go
func S3Configuration() TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference</a>

---

##### `S3ConfigurationInput`<sup>Optional</sup> <a name="S3ConfigurationInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput"></a>

```go
func S3ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference <a name="TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/timestreaminfluxdbcluster"

timestreaminfluxdbcluster.NewTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TimestreamInfluxDbClusterMaintenanceScheduleOutputReference <a name="TimestreamInfluxDbClusterMaintenanceScheduleOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/timestreaminfluxdbcluster"

timestreaminfluxdbcluster.NewTimestreamInfluxDbClusterMaintenanceScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TimestreamInfluxDbClusterMaintenanceScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resetPreferredMaintenanceWindow"></a>

```go
func ResetPreferredMaintenanceWindow()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resetTimezone"></a>

```go
func ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput"></a>

```go
func PreferredMaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TimestreamInfluxDbClusterTagsList <a name="TimestreamInfluxDbClusterTagsList" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/timestreaminfluxdbcluster"

timestreaminfluxdbcluster.NewTimestreamInfluxDbClusterTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TimestreamInfluxDbClusterTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.get"></a>

```go
func Get(index *f64) TimestreamInfluxDbClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TimestreamInfluxDbClusterTagsOutputReference <a name="TimestreamInfluxDbClusterTagsOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/timestreaminfluxdbcluster"

timestreaminfluxdbcluster.NewTimestreamInfluxDbClusterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TimestreamInfluxDbClusterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.timestreamInfluxDbCluster.TimestreamInfluxDbClusterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



