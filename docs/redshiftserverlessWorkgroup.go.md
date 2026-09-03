# `redshiftserverlessWorkgroup` Submodule <a name="`redshiftserverlessWorkgroup` Submodule" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessWorkgroup <a name="RedshiftserverlessWorkgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup awscc_redshiftserverless_workgroup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.NewRedshiftserverlessWorkgroup(scope Construct, id *string, config RedshiftserverlessWorkgroupConfig) RedshiftserverlessWorkgroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig">RedshiftserverlessWorkgroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig">RedshiftserverlessWorkgroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putConfigParameters">PutConfigParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putPricePerformanceTarget">PutPricePerformanceTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putWorkgroup">PutWorkgroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetBaseCapacity">ResetBaseCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetConfigParameters">ResetConfigParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetEnhancedVpcRouting">ResetEnhancedVpcRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetNamespaceName">ResetNamespaceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPricePerformanceTarget">ResetPricePerformanceTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetRecoveryPointId">ResetRecoveryPointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotArn">ResetSnapshotArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotName">ResetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotOwnerAccount">ResetSnapshotOwnerAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTrackName">ResetTrackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetWorkgroup">ResetWorkgroup</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfigParameters` <a name="PutConfigParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putConfigParameters"></a>

```go
func PutConfigParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putConfigParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPricePerformanceTarget` <a name="PutPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putPricePerformanceTarget"></a>

```go
func PutPricePerformanceTarget(value RedshiftserverlessWorkgroupPricePerformanceTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putPricePerformanceTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWorkgroup` <a name="PutWorkgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putWorkgroup"></a>

```go
func PutWorkgroup(value RedshiftserverlessWorkgroupWorkgroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putWorkgroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a>

---

##### `ResetBaseCapacity` <a name="ResetBaseCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetBaseCapacity"></a>

```go
func ResetBaseCapacity()
```

##### `ResetConfigParameters` <a name="ResetConfigParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetConfigParameters"></a>

```go
func ResetConfigParameters()
```

##### `ResetEnhancedVpcRouting` <a name="ResetEnhancedVpcRouting" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetEnhancedVpcRouting"></a>

```go
func ResetEnhancedVpcRouting()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetMaxCapacity"></a>

```go
func ResetMaxCapacity()
```

##### `ResetNamespaceName` <a name="ResetNamespaceName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetNamespaceName"></a>

```go
func ResetNamespaceName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPricePerformanceTarget` <a name="ResetPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPricePerformanceTarget"></a>

```go
func ResetPricePerformanceTarget()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPubliclyAccessible"></a>

```go
func ResetPubliclyAccessible()
```

##### `ResetRecoveryPointId` <a name="ResetRecoveryPointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetRecoveryPointId"></a>

```go
func ResetRecoveryPointId()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSnapshotArn` <a name="ResetSnapshotArn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotArn"></a>

```go
func ResetSnapshotArn()
```

##### `ResetSnapshotName` <a name="ResetSnapshotName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotName"></a>

```go
func ResetSnapshotName()
```

##### `ResetSnapshotOwnerAccount` <a name="ResetSnapshotOwnerAccount" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotOwnerAccount"></a>

```go
func ResetSnapshotOwnerAccount()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTrackName` <a name="ResetTrackName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTrackName"></a>

```go
func ResetTrackName()
```

##### `ResetWorkgroup` <a name="ResetWorkgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetWorkgroup"></a>

```go
func ResetWorkgroup()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftserverlessWorkgroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.RedshiftserverlessWorkgroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.RedshiftserverlessWorkgroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.RedshiftserverlessWorkgroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.RedshiftserverlessWorkgroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RedshiftserverlessWorkgroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RedshiftserverlessWorkgroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RedshiftserverlessWorkgroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftserverlessWorkgroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.configParameters">ConfigParameters</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList">RedshiftserverlessWorkgroupConfigParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.pricePerformanceTarget">PricePerformanceTarget</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference">RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList">RedshiftserverlessWorkgroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroup">Workgroup</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference">RedshiftserverlessWorkgroupWorkgroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.baseCapacityInput">BaseCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.configParametersInput">ConfigParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.enhancedVpcRoutingInput">EnhancedVpcRoutingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.pricePerformanceTargetInput">PricePerformanceTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.recoveryPointIdInput">RecoveryPointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotArnInput">SnapshotArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotOwnerAccountInput">SnapshotOwnerAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.trackNameInput">TrackNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupInput">WorkgroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupNameInput">WorkgroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.baseCapacity">BaseCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.enhancedVpcRouting">EnhancedVpcRouting</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.recoveryPointId">RecoveryPointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotArn">SnapshotArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotOwnerAccount">SnapshotOwnerAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.trackName">TrackName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupName">WorkgroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigParameters`<sup>Required</sup> <a name="ConfigParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.configParameters"></a>

```go
func ConfigParameters() RedshiftserverlessWorkgroupConfigParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList">RedshiftserverlessWorkgroupConfigParametersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PricePerformanceTarget`<sup>Required</sup> <a name="PricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.pricePerformanceTarget"></a>

```go
func PricePerformanceTarget() RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference">RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tags"></a>

```go
func Tags() RedshiftserverlessWorkgroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList">RedshiftserverlessWorkgroupTagsList</a>

---

##### `Workgroup`<sup>Required</sup> <a name="Workgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroup"></a>

```go
func Workgroup() RedshiftserverlessWorkgroupWorkgroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference">RedshiftserverlessWorkgroupWorkgroupOutputReference</a>

---

##### `BaseCapacityInput`<sup>Optional</sup> <a name="BaseCapacityInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.baseCapacityInput"></a>

```go
func BaseCapacityInput() *f64
```

- *Type:* *f64

---

##### `ConfigParametersInput`<sup>Optional</sup> <a name="ConfigParametersInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.configParametersInput"></a>

```go
func ConfigParametersInput() interface{}
```

- *Type:* interface{}

---

##### `EnhancedVpcRoutingInput`<sup>Optional</sup> <a name="EnhancedVpcRoutingInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.enhancedVpcRoutingInput"></a>

```go
func EnhancedVpcRoutingInput() interface{}
```

- *Type:* interface{}

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.namespaceNameInput"></a>

```go
func NamespaceNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PricePerformanceTargetInput`<sup>Optional</sup> <a name="PricePerformanceTargetInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.pricePerformanceTargetInput"></a>

```go
func PricePerformanceTargetInput() interface{}
```

- *Type:* interface{}

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.publiclyAccessibleInput"></a>

```go
func PubliclyAccessibleInput() interface{}
```

- *Type:* interface{}

---

##### `RecoveryPointIdInput`<sup>Optional</sup> <a name="RecoveryPointIdInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.recoveryPointIdInput"></a>

```go
func RecoveryPointIdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotArnInput`<sup>Optional</sup> <a name="SnapshotArnInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotArnInput"></a>

```go
func SnapshotArnInput() *string
```

- *Type:* *string

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotNameInput"></a>

```go
func SnapshotNameInput() *string
```

- *Type:* *string

---

##### `SnapshotOwnerAccountInput`<sup>Optional</sup> <a name="SnapshotOwnerAccountInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotOwnerAccountInput"></a>

```go
func SnapshotOwnerAccountInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TrackNameInput`<sup>Optional</sup> <a name="TrackNameInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.trackNameInput"></a>

```go
func TrackNameInput() *string
```

- *Type:* *string

---

##### `WorkgroupInput`<sup>Optional</sup> <a name="WorkgroupInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupInput"></a>

```go
func WorkgroupInput() interface{}
```

- *Type:* interface{}

---

##### `WorkgroupNameInput`<sup>Optional</sup> <a name="WorkgroupNameInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupNameInput"></a>

```go
func WorkgroupNameInput() *string
```

- *Type:* *string

---

##### `BaseCapacity`<sup>Required</sup> <a name="BaseCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.baseCapacity"></a>

```go
func BaseCapacity() *f64
```

- *Type:* *f64

---

##### `EnhancedVpcRouting`<sup>Required</sup> <a name="EnhancedVpcRouting" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.enhancedVpcRouting"></a>

```go
func EnhancedVpcRouting() interface{}
```

- *Type:* interface{}

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.publiclyAccessible"></a>

```go
func PubliclyAccessible() interface{}
```

- *Type:* interface{}

---

##### `RecoveryPointId`<sup>Required</sup> <a name="RecoveryPointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.recoveryPointId"></a>

```go
func RecoveryPointId() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotArn`<sup>Required</sup> <a name="SnapshotArn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotArn"></a>

```go
func SnapshotArn() *string
```

- *Type:* *string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotName"></a>

```go
func SnapshotName() *string
```

- *Type:* *string

---

##### `SnapshotOwnerAccount`<sup>Required</sup> <a name="SnapshotOwnerAccount" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotOwnerAccount"></a>

```go
func SnapshotOwnerAccount() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `TrackName`<sup>Required</sup> <a name="TrackName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.trackName"></a>

```go
func TrackName() *string
```

- *Type:* *string

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupName"></a>

```go
func WorkgroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessWorkgroupConfig <a name="RedshiftserverlessWorkgroupConfig" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

&redshiftserverlessworkgroup.RedshiftserverlessWorkgroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	WorkgroupName: *string,
	BaseCapacity: *f64,
	ConfigParameters: interface{},
	EnhancedVpcRouting: interface{},
	MaxCapacity: *f64,
	NamespaceName: *string,
	Port: *f64,
	PricePerformanceTarget: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget,
	PubliclyAccessible: interface{},
	RecoveryPointId: *string,
	SecurityGroupIds: *[]*string,
	SnapshotArn: *string,
	SnapshotName: *string,
	SnapshotOwnerAccount: *string,
	SubnetIds: *[]*string,
	Tags: interface{},
	TrackName: *string,
	Workgroup: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.workgroupName">WorkgroupName</a></code> | <code>*string</code> | The name of the workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.baseCapacity">BaseCapacity</a></code> | <code>*f64</code> | The base compute capacity of the workgroup in Redshift Processing Units (RPUs). |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.configParameters">ConfigParameters</a></code> | <code>interface{}</code> | A list of parameters to set for finer control over a database. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.enhancedVpcRouting">EnhancedVpcRouting</a></code> | <code>interface{}</code> | The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | The max compute capacity of the workgroup in Redshift Processing Units (RPUs). |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | The namespace the workgroup is associated with. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.port">Port</a></code> | <code>*f64</code> | The custom port to use when connecting to a workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.pricePerformanceTarget">PricePerformanceTarget</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a></code> | A property that represents the price performance target settings for the workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | A value that specifies whether the workgroup can be accessible from a public network. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.recoveryPointId">RecoveryPointId</a></code> | <code>*string</code> | The identifier of the recovery point to restore the namespace from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | A list of security group IDs to associate with the workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotArn">SnapshotArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the snapshot to restore the namespace from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | The name of the snapshot to restore the namespace from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotOwnerAccount">SnapshotOwnerAccount</a></code> | <code>*string</code> | The AWS account ID that owns the snapshot. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | A list of subnet IDs the workgroup is associated with. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The map of the key-value pairs used to tag the workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.trackName">TrackName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#track_name RedshiftserverlessWorkgroup#track_name}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.workgroup">Workgroup</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a></code> | Definition for workgroup resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.workgroupName"></a>

```go
WorkgroupName *string
```

- *Type:* *string

The name of the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#workgroup_name RedshiftserverlessWorkgroup#workgroup_name}

---

##### `BaseCapacity`<sup>Optional</sup> <a name="BaseCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.baseCapacity"></a>

```go
BaseCapacity *f64
```

- *Type:* *f64

The base compute capacity of the workgroup in Redshift Processing Units (RPUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#base_capacity RedshiftserverlessWorkgroup#base_capacity}

---

##### `ConfigParameters`<sup>Optional</sup> <a name="ConfigParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.configParameters"></a>

```go
ConfigParameters interface{}
```

- *Type:* interface{}

A list of parameters to set for finer control over a database.

Available options are datestyle, enable_user_activity_logging, query_group, search_path, max_query_execution_time, and require_ssl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#config_parameters RedshiftserverlessWorkgroup#config_parameters}

---

##### `EnhancedVpcRouting`<sup>Optional</sup> <a name="EnhancedVpcRouting" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.enhancedVpcRouting"></a>

```go
EnhancedVpcRouting interface{}
```

- *Type:* interface{}

The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#enhanced_vpc_routing RedshiftserverlessWorkgroup#enhanced_vpc_routing}

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.maxCapacity"></a>

```go
MaxCapacity *f64
```

- *Type:* *f64

The max compute capacity of the workgroup in Redshift Processing Units (RPUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#max_capacity RedshiftserverlessWorkgroup#max_capacity}

---

##### `NamespaceName`<sup>Optional</sup> <a name="NamespaceName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.namespaceName"></a>

```go
NamespaceName *string
```

- *Type:* *string

The namespace the workgroup is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#namespace_name RedshiftserverlessWorkgroup#namespace_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The custom port to use when connecting to a workgroup.

Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#port RedshiftserverlessWorkgroup#port}

---

##### `PricePerformanceTarget`<sup>Optional</sup> <a name="PricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.pricePerformanceTarget"></a>

```go
PricePerformanceTarget RedshiftserverlessWorkgroupPricePerformanceTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a>

A property that represents the price performance target settings for the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#price_performance_target RedshiftserverlessWorkgroup#price_performance_target}

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.publiclyAccessible"></a>

```go
PubliclyAccessible interface{}
```

- *Type:* interface{}

A value that specifies whether the workgroup can be accessible from a public network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#publicly_accessible RedshiftserverlessWorkgroup#publicly_accessible}

---

##### `RecoveryPointId`<sup>Optional</sup> <a name="RecoveryPointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.recoveryPointId"></a>

```go
RecoveryPointId *string
```

- *Type:* *string

The identifier of the recovery point to restore the namespace from.

When this resource is first created, the namespace is restored from this recovery point. On subsequent updates, a restore occurs only when RecoveryPointId changes from its previous value. If the value is unchanged or removed, no restore takes place and existing data is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#recovery_point_id RedshiftserverlessWorkgroup#recovery_point_id}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

A list of security group IDs to associate with the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#security_group_ids RedshiftserverlessWorkgroup#security_group_ids}

---

##### `SnapshotArn`<sup>Optional</sup> <a name="SnapshotArn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotArn"></a>

```go
SnapshotArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the snapshot to restore the namespace from.

Specify either SnapshotArn or SnapshotName, but not both. When this resource is first created, the namespace is restored from this snapshot. On subsequent updates, a restore occurs only when SnapshotArn changes from its previous value. If the value is unchanged or removed, no restore takes place and existing data is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#snapshot_arn RedshiftserverlessWorkgroup#snapshot_arn}

---

##### `SnapshotName`<sup>Optional</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotName"></a>

```go
SnapshotName *string
```

- *Type:* *string

The name of the snapshot to restore the namespace from.

Because snapshot names are unique only within an account, also specify SnapshotOwnerAccount when restoring from a snapshot owned by a different account. Specify either SnapshotName or SnapshotArn, but not both. When this resource is first created, the namespace is restored from this snapshot. On subsequent updates, a restore occurs only when SnapshotName or SnapshotOwnerAccount changes from its previous value. If both values are unchanged or SnapshotName is removed, no restore takes place and existing data is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#snapshot_name RedshiftserverlessWorkgroup#snapshot_name}

---

##### `SnapshotOwnerAccount`<sup>Optional</sup> <a name="SnapshotOwnerAccount" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotOwnerAccount"></a>

```go
SnapshotOwnerAccount *string
```

- *Type:* *string

The AWS account ID that owns the snapshot.

Required when restoring from a snapshot shared by another account. Used in combination with SnapshotName. On updates, changing this value while SnapshotName is set triggers a restore from the newly referenced snapshot. If the value is unchanged, no restore takes place and existing data is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#snapshot_owner_account RedshiftserverlessWorkgroup#snapshot_owner_account}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

A list of subnet IDs the workgroup is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#subnet_ids RedshiftserverlessWorkgroup#subnet_ids}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The map of the key-value pairs used to tag the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#tags RedshiftserverlessWorkgroup#tags}

---

##### `TrackName`<sup>Optional</sup> <a name="TrackName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.trackName"></a>

```go
TrackName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#track_name RedshiftserverlessWorkgroup#track_name}.

---

##### `Workgroup`<sup>Optional</sup> <a name="Workgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.workgroup"></a>

```go
Workgroup RedshiftserverlessWorkgroupWorkgroup
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a>

Definition for workgroup resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#workgroup RedshiftserverlessWorkgroup#workgroup}

---

### RedshiftserverlessWorkgroupConfigParameters <a name="RedshiftserverlessWorkgroupConfigParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

&redshiftserverlessworkgroup.RedshiftserverlessWorkgroupConfigParameters {
	ParameterKey: *string,
	ParameterValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters.property.parameterKey">ParameterKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#parameter_key RedshiftserverlessWorkgroup#parameter_key}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters.property.parameterValue">ParameterValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#parameter_value RedshiftserverlessWorkgroup#parameter_value}. |

---

##### `ParameterKey`<sup>Optional</sup> <a name="ParameterKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters.property.parameterKey"></a>

```go
ParameterKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#parameter_key RedshiftserverlessWorkgroup#parameter_key}.

---

##### `ParameterValue`<sup>Optional</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters.property.parameterValue"></a>

```go
ParameterValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#parameter_value RedshiftserverlessWorkgroup#parameter_value}.

---

### RedshiftserverlessWorkgroupPricePerformanceTarget <a name="RedshiftserverlessWorkgroupPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

&redshiftserverlessworkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget {
	Level: *f64,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.property.level">Level</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#level RedshiftserverlessWorkgroup#level}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#status RedshiftserverlessWorkgroup#status}. |

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.property.level"></a>

```go
Level *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#level RedshiftserverlessWorkgroup#level}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#status RedshiftserverlessWorkgroup#status}.

---

### RedshiftserverlessWorkgroupTags <a name="RedshiftserverlessWorkgroupTags" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

&redshiftserverlessworkgroup.RedshiftserverlessWorkgroupTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#key RedshiftserverlessWorkgroup#key}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#value RedshiftserverlessWorkgroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#key RedshiftserverlessWorkgroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#value RedshiftserverlessWorkgroup#value}.

---

### RedshiftserverlessWorkgroupWorkgroup <a name="RedshiftserverlessWorkgroupWorkgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

&redshiftserverlessworkgroup.RedshiftserverlessWorkgroupWorkgroup {
	Endpoint: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint,
	PricePerformanceTarget: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint">RedshiftserverlessWorkgroupWorkgroupEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#endpoint RedshiftserverlessWorkgroup#endpoint}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup.property.pricePerformanceTarget">PricePerformanceTarget</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#price_performance_target RedshiftserverlessWorkgroup#price_performance_target}. |

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup.property.endpoint"></a>

```go
Endpoint RedshiftserverlessWorkgroupWorkgroupEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint">RedshiftserverlessWorkgroupWorkgroupEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#endpoint RedshiftserverlessWorkgroup#endpoint}.

---

##### `PricePerformanceTarget`<sup>Optional</sup> <a name="PricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup.property.pricePerformanceTarget"></a>

```go
PricePerformanceTarget RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#price_performance_target RedshiftserverlessWorkgroup#price_performance_target}.

---

### RedshiftserverlessWorkgroupWorkgroupConfigParameters <a name="RedshiftserverlessWorkgroupWorkgroupConfigParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

&redshiftserverlessworkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParameters {

}
```


### RedshiftserverlessWorkgroupWorkgroupEndpoint <a name="RedshiftserverlessWorkgroupWorkgroupEndpoint" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

&redshiftserverlessworkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint {
	VpcEndpoints: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint.property.vpcEndpoints">VpcEndpoints</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#vpc_endpoints RedshiftserverlessWorkgroup#vpc_endpoints}. |

---

##### `VpcEndpoints`<sup>Optional</sup> <a name="VpcEndpoints" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint.property.vpcEndpoints"></a>

```go
VpcEndpoints interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#vpc_endpoints RedshiftserverlessWorkgroup#vpc_endpoints}.

---

### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

&redshiftserverlessworkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints {
	NetworkInterfaces: interface{},
	VpcEndpointId: *string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.networkInterfaces">NetworkInterfaces</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#network_interfaces RedshiftserverlessWorkgroup#network_interfaces}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#vpc_endpoint_id RedshiftserverlessWorkgroup#vpc_endpoint_id}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#vpc_id RedshiftserverlessWorkgroup#vpc_id}. |

---

##### `NetworkInterfaces`<sup>Optional</sup> <a name="NetworkInterfaces" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.networkInterfaces"></a>

```go
NetworkInterfaces interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#network_interfaces RedshiftserverlessWorkgroup#network_interfaces}.

---

##### `VpcEndpointId`<sup>Optional</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.vpcEndpointId"></a>

```go
VpcEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#vpc_endpoint_id RedshiftserverlessWorkgroup#vpc_endpoint_id}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#vpc_id RedshiftserverlessWorkgroup#vpc_id}.

---

### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

&redshiftserverlessworkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces {
	AvailabilityZone: *string,
	NetworkInterfaceId: *string,
	PrivateIpAddress: *string,
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#availability_zone RedshiftserverlessWorkgroup#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#network_interface_id RedshiftserverlessWorkgroup#network_interface_id}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#private_ip_address RedshiftserverlessWorkgroup#private_ip_address}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#subnet_id RedshiftserverlessWorkgroup#subnet_id}. |

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#availability_zone RedshiftserverlessWorkgroup#availability_zone}.

---

##### `NetworkInterfaceId`<sup>Optional</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.networkInterfaceId"></a>

```go
NetworkInterfaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#network_interface_id RedshiftserverlessWorkgroup#network_interface_id}.

---

##### `PrivateIpAddress`<sup>Optional</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.privateIpAddress"></a>

```go
PrivateIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#private_ip_address RedshiftserverlessWorkgroup#private_ip_address}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#subnet_id RedshiftserverlessWorkgroup#subnet_id}.

---

### RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget <a name="RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

&redshiftserverlessworkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget {
	Level: *f64,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.property.level">Level</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#level RedshiftserverlessWorkgroup#level}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#status RedshiftserverlessWorkgroup#status}. |

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.property.level"></a>

```go
Level *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#level RedshiftserverlessWorkgroup#level}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/redshiftserverless_workgroup#status RedshiftserverlessWorkgroup#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftserverlessWorkgroupConfigParametersList <a name="RedshiftserverlessWorkgroupConfigParametersList" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.NewRedshiftserverlessWorkgroupConfigParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftserverlessWorkgroupConfigParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.get"></a>

```go
func Get(index *f64) RedshiftserverlessWorkgroupConfigParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftserverlessWorkgroupConfigParametersOutputReference <a name="RedshiftserverlessWorkgroupConfigParametersOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.NewRedshiftserverlessWorkgroupConfigParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftserverlessWorkgroupConfigParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resetParameterKey">ResetParameterKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resetParameterValue">ResetParameterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameterKey` <a name="ResetParameterKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resetParameterKey"></a>

```go
func ResetParameterKey()
```

##### `ResetParameterValue` <a name="ResetParameterValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resetParameterValue"></a>

```go
func ResetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterKeyInput">ParameterKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterValueInput">ParameterValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterKey">ParameterKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterValue">ParameterValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterKeyInput`<sup>Optional</sup> <a name="ParameterKeyInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterKeyInput"></a>

```go
func ParameterKeyInput() *string
```

- *Type:* *string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterValueInput"></a>

```go
func ParameterValueInput() *string
```

- *Type:* *string

---

##### `ParameterKey`<sup>Required</sup> <a name="ParameterKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterKey"></a>

```go
func ParameterKey() *string
```

- *Type:* *string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterValue"></a>

```go
func ParameterValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference <a name="RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.NewRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLevel` <a name="ResetLevel" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resetLevel"></a>

```go
func ResetLevel()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.levelInput">LevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.level">Level</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.levelInput"></a>

```go
func LevelInput() *f64
```

- *Type:* *f64

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.level"></a>

```go
func Level() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftserverlessWorkgroupTagsList <a name="RedshiftserverlessWorkgroupTagsList" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.NewRedshiftserverlessWorkgroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftserverlessWorkgroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.get"></a>

```go
func Get(index *f64) RedshiftserverlessWorkgroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftserverlessWorkgroupTagsOutputReference <a name="RedshiftserverlessWorkgroupTagsOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.NewRedshiftserverlessWorkgroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftserverlessWorkgroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftserverlessWorkgroupWorkgroupConfigParametersList <a name="RedshiftserverlessWorkgroupWorkgroupConfigParametersList" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.NewRedshiftserverlessWorkgroupWorkgroupConfigParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftserverlessWorkgroupWorkgroupConfigParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.get"></a>

```go
func Get(index *f64) RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.NewRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterKey">ParameterKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterValue">ParameterValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParameters">RedshiftserverlessWorkgroupWorkgroupConfigParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterKey`<sup>Required</sup> <a name="ParameterKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterKey"></a>

```go
func ParameterKey() *string
```

- *Type:* *string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterValue"></a>

```go
func ParameterValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() RedshiftserverlessWorkgroupWorkgroupConfigParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParameters">RedshiftserverlessWorkgroupWorkgroupConfigParameters</a>

---


### RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.NewRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.putVpcEndpoints">PutVpcEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resetVpcEndpoints">ResetVpcEndpoints</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcEndpoints` <a name="PutVpcEndpoints" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.putVpcEndpoints"></a>

```go
func PutVpcEndpoints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.putVpcEndpoints.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetVpcEndpoints` <a name="ResetVpcEndpoints" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resetVpcEndpoints"></a>

```go
func ResetVpcEndpoints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.vpcEndpoints">VpcEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.vpcEndpointsInput">VpcEndpointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `VpcEndpoints`<sup>Required</sup> <a name="VpcEndpoints" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.vpcEndpoints"></a>

```go
func VpcEndpoints() RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList</a>

---

##### `VpcEndpointsInput`<sup>Optional</sup> <a name="VpcEndpointsInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.vpcEndpointsInput"></a>

```go
func VpcEndpointsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.NewRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.get"></a>

```go
func Get(index *f64) RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.NewRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.get"></a>

```go
func Get(index *f64) RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.NewRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetNetworkInterfaceId">ResetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetPrivateIpAddress">ResetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetNetworkInterfaceId` <a name="ResetNetworkInterfaceId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetNetworkInterfaceId"></a>

```go
func ResetNetworkInterfaceId()
```

##### `ResetPrivateIpAddress` <a name="ResetPrivateIpAddress" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetPrivateIpAddress"></a>

```go
func ResetPrivateIpAddress()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.privateIpAddressInput">PrivateIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.networkInterfaceIdInput"></a>

```go
func NetworkInterfaceIdInput() *string
```

- *Type:* *string

---

##### `PrivateIpAddressInput`<sup>Optional</sup> <a name="PrivateIpAddressInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.privateIpAddressInput"></a>

```go
func PrivateIpAddressInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.NewRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.putNetworkInterfaces">PutNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetNetworkInterfaces">ResetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetVpcEndpointId">ResetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkInterfaces` <a name="PutNetworkInterfaces" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.putNetworkInterfaces"></a>

```go
func PutNetworkInterfaces(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNetworkInterfaces` <a name="ResetNetworkInterfaces" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetNetworkInterfaces"></a>

```go
func ResetNetworkInterfaces()
```

##### `ResetVpcEndpointId` <a name="ResetVpcEndpointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetVpcEndpointId"></a>

```go
func ResetVpcEndpointId()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetVpcId"></a>

```go
func ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.networkInterfacesInput">NetworkInterfacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcEndpointIdInput">VpcEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.networkInterfaces"></a>

```go
func NetworkInterfaces() RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList</a>

---

##### `NetworkInterfacesInput`<sup>Optional</sup> <a name="NetworkInterfacesInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.networkInterfacesInput"></a>

```go
func NetworkInterfacesInput() interface{}
```

- *Type:* interface{}

---

##### `VpcEndpointIdInput`<sup>Optional</sup> <a name="VpcEndpointIdInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcEndpointIdInput"></a>

```go
func VpcEndpointIdInput() *string
```

- *Type:* *string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftserverlessWorkgroupWorkgroupOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.NewRedshiftserverlessWorkgroupWorkgroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedshiftserverlessWorkgroupWorkgroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putEndpoint">PutEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putPricePerformanceTarget">PutPricePerformanceTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resetPricePerformanceTarget">ResetPricePerformanceTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndpoint` <a name="PutEndpoint" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putEndpoint"></a>

```go
func PutEndpoint(value RedshiftserverlessWorkgroupWorkgroupEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint">RedshiftserverlessWorkgroupWorkgroupEndpoint</a>

---

##### `PutPricePerformanceTarget` <a name="PutPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putPricePerformanceTarget"></a>

```go
func PutPricePerformanceTarget(value RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putPricePerformanceTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a>

---

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetPricePerformanceTarget` <a name="ResetPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resetPricePerformanceTarget"></a>

```go
func ResetPricePerformanceTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.baseCapacity">BaseCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.configParameters">ConfigParameters</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList">RedshiftserverlessWorkgroupWorkgroupConfigParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference">RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.enhancedVpcRouting">EnhancedVpcRouting</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.pricePerformanceTarget">PricePerformanceTarget</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.trackName">TrackName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupArn">WorkgroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupId">WorkgroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupName">WorkgroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.endpointInput">EndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.pricePerformanceTargetInput">PricePerformanceTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseCapacity`<sup>Required</sup> <a name="BaseCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.baseCapacity"></a>

```go
func BaseCapacity() *f64
```

- *Type:* *f64

---

##### `ConfigParameters`<sup>Required</sup> <a name="ConfigParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.configParameters"></a>

```go
func ConfigParameters() RedshiftserverlessWorkgroupWorkgroupConfigParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList">RedshiftserverlessWorkgroupWorkgroupConfigParametersList</a>

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.endpoint"></a>

```go
func Endpoint() RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference">RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference</a>

---

##### `EnhancedVpcRouting`<sup>Required</sup> <a name="EnhancedVpcRouting" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.enhancedVpcRouting"></a>

```go
func EnhancedVpcRouting() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `PricePerformanceTarget`<sup>Required</sup> <a name="PricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.pricePerformanceTarget"></a>

```go
func PricePerformanceTarget() RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference</a>

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.publiclyAccessible"></a>

```go
func PubliclyAccessible() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `TrackName`<sup>Required</sup> <a name="TrackName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.trackName"></a>

```go
func TrackName() *string
```

- *Type:* *string

---

##### `WorkgroupArn`<sup>Required</sup> <a name="WorkgroupArn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupArn"></a>

```go
func WorkgroupArn() *string
```

- *Type:* *string

---

##### `WorkgroupId`<sup>Required</sup> <a name="WorkgroupId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupId"></a>

```go
func WorkgroupId() *string
```

- *Type:* *string

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupName"></a>

```go
func WorkgroupName() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.endpointInput"></a>

```go
func EndpointInput() interface{}
```

- *Type:* interface{}

---

##### `PricePerformanceTargetInput`<sup>Optional</sup> <a name="PricePerformanceTargetInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.pricePerformanceTargetInput"></a>

```go
func PricePerformanceTargetInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessworkgroup"

redshiftserverlessworkgroup.NewRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLevel` <a name="ResetLevel" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resetLevel"></a>

```go
func ResetLevel()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.levelInput">LevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.level">Level</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.levelInput"></a>

```go
func LevelInput() *f64
```

- *Type:* *f64

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.level"></a>

```go
func Level() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



