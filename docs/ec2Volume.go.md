# `ec2Volume` Submodule <a name="`ec2Volume` Submodule" id="@cdktn/provider-awscc.ec2Volume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Volume <a name="Ec2Volume" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume awscc_ec2_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2volume"

ec2volume.NewEc2Volume(scope Construct, id *string, config Ec2VolumeConfig) Ec2Volume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig">Ec2VolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig">Ec2VolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetAutoEnableIo">ResetAutoEnableIo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetAvailabilityZoneId">ResetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetMultiAttachEnabled">ResetMultiAttachEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetOutpostArn">ResetOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetSourceVolumeId">ResetSourceVolumeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetVolumeInitializationRate">ResetVolumeInitializationRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoEnableIo` <a name="ResetAutoEnableIo" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetAutoEnableIo"></a>

```go
func ResetAutoEnableIo()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetAvailabilityZoneId` <a name="ResetAvailabilityZoneId" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetAvailabilityZoneId"></a>

```go
func ResetAvailabilityZoneId()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetMultiAttachEnabled` <a name="ResetMultiAttachEnabled" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetMultiAttachEnabled"></a>

```go
func ResetMultiAttachEnabled()
```

##### `ResetOutpostArn` <a name="ResetOutpostArn" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetOutpostArn"></a>

```go
func ResetOutpostArn()
```

##### `ResetSize` <a name="ResetSize" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetSize"></a>

```go
func ResetSize()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetSnapshotId"></a>

```go
func ResetSnapshotId()
```

##### `ResetSourceVolumeId` <a name="ResetSourceVolumeId" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetSourceVolumeId"></a>

```go
func ResetSourceVolumeId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetTags"></a>

```go
func ResetTags()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumeInitializationRate` <a name="ResetVolumeInitializationRate" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetVolumeInitializationRate"></a>

```go
func ResetVolumeInitializationRate()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetVolumeType"></a>

```go
func ResetVolumeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2Volume resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2volume"

ec2volume.Ec2Volume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2volume"

ec2volume.Ec2Volume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2volume"

ec2volume.Ec2Volume_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2volume"

ec2volume.Ec2Volume_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2Volume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2Volume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2Volume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2Volume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList">Ec2VolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.autoEnableIoInput">AutoEnableIoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.availabilityZoneIdInput">AvailabilityZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.multiAttachEnabledInput">MultiAttachEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.outpostArnInput">OutpostArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.sourceVolumeIdInput">SourceVolumeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeInitializationRateInput">VolumeInitializationRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.autoEnableIo">AutoEnableIo</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.multiAttachEnabled">MultiAttachEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.outpostArn">OutpostArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.sourceVolumeId">SourceVolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeInitializationRate">VolumeInitializationRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.tags"></a>

```go
func Tags() Ec2VolumeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList">Ec2VolumeTagsList</a>

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `AutoEnableIoInput`<sup>Optional</sup> <a name="AutoEnableIoInput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.autoEnableIoInput"></a>

```go
func AutoEnableIoInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZoneIdInput`<sup>Optional</sup> <a name="AvailabilityZoneIdInput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.availabilityZoneIdInput"></a>

```go
func AvailabilityZoneIdInput() *string
```

- *Type:* *string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `MultiAttachEnabledInput`<sup>Optional</sup> <a name="MultiAttachEnabledInput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.multiAttachEnabledInput"></a>

```go
func MultiAttachEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OutpostArnInput`<sup>Optional</sup> <a name="OutpostArnInput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.outpostArnInput"></a>

```go
func OutpostArnInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.snapshotIdInput"></a>

```go
func SnapshotIdInput() *string
```

- *Type:* *string

---

##### `SourceVolumeIdInput`<sup>Optional</sup> <a name="SourceVolumeIdInput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.sourceVolumeIdInput"></a>

```go
func SourceVolumeIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `VolumeInitializationRateInput`<sup>Optional</sup> <a name="VolumeInitializationRateInput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeInitializationRateInput"></a>

```go
func VolumeInitializationRateInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `AutoEnableIo`<sup>Required</sup> <a name="AutoEnableIo" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.autoEnableIo"></a>

```go
func AutoEnableIo() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.availabilityZoneId"></a>

```go
func AvailabilityZoneId() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `MultiAttachEnabled`<sup>Required</sup> <a name="MultiAttachEnabled" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.multiAttachEnabled"></a>

```go
func MultiAttachEnabled() interface{}
```

- *Type:* interface{}

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.outpostArn"></a>

```go
func OutpostArn() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `SourceVolumeId`<sup>Required</sup> <a name="SourceVolumeId" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.sourceVolumeId"></a>

```go
func SourceVolumeId() *string
```

- *Type:* *string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeInitializationRate`<sup>Required</sup> <a name="VolumeInitializationRate" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeInitializationRate"></a>

```go
func VolumeInitializationRate() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VolumeConfig <a name="Ec2VolumeConfig" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2volume"

&ec2volume.Ec2VolumeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AutoEnableIo: interface{},
	AvailabilityZone: *string,
	AvailabilityZoneId: *string,
	Encrypted: interface{},
	Iops: *f64,
	KmsKeyId: *string,
	MultiAttachEnabled: interface{},
	OutpostArn: *string,
	Size: *f64,
	SnapshotId: *string,
	SourceVolumeId: *string,
	Tags: interface{},
	Throughput: *f64,
	VolumeInitializationRate: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.autoEnableIo">AutoEnableIo</a></code> | <code>interface{}</code> | Indicates whether the volume is auto-enabled for I/O operations. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | The ID of the Availability Zone in which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | The ID of the Availability Zone in which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Indicates whether the volume should be encrypted. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.iops">Iops</a></code> | <code>*f64</code> | The number of I/O operations per second (IOPS) to provision for the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The identifier of the kms-key-long to use for Amazon EBS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.multiAttachEnabled">MultiAttachEnabled</a></code> | <code>interface{}</code> | Indicates whether Amazon EBS Multi-Attach is enabled. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.outpostArn">OutpostArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Outpost on which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.size">Size</a></code> | <code>*f64</code> | The size of the volume, in GiBs. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | The snapshot from which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.sourceVolumeId">SourceVolumeId</a></code> | <code>*string</code> | The ID of the source EBS volume to copy. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags to apply to the volume during creation. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.throughput">Throughput</a></code> | <code>*f64</code> | The throughput to provision for a volume, with a maximum of 2,000 MiB/s. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.volumeInitializationRate">VolumeInitializationRate</a></code> | <code>*f64</code> | Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.volumeType">VolumeType</a></code> | <code>*string</code> | The volume type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoEnableIo`<sup>Optional</sup> <a name="AutoEnableIo" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.autoEnableIo"></a>

```go
AutoEnableIo interface{}
```

- *Type:* interface{}

Indicates whether the volume is auto-enabled for I/O operations.

By default, EBS disables I/O to the volume from attached EC2 instances when it determines that a volume's data is potentially inconsistent. If the consistency of the volume is not a concern, and you prefer that the volume be made available immediately if it's impaired, you can configure the volume to automatically enable I/O.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#auto_enable_io Ec2Volume#auto_enable_io}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

The ID of the Availability Zone in which to create the volume.

For example, `us-east-1a`.
Either `AvailabilityZone` or `AvailabilityZoneId` must be specified, but not both.
If you are creating a volume copy, omit this parameter. The volume copy is created in the same Availability Zone as the source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#availability_zone Ec2Volume#availability_zone}

---

##### `AvailabilityZoneId`<sup>Optional</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.availabilityZoneId"></a>

```go
AvailabilityZoneId *string
```

- *Type:* *string

The ID of the Availability Zone in which to create the volume.

For example, `use1-az1`.
Either `AvailabilityZone` or `AvailabilityZoneId` must be specified, but not both.
If you are creating a volume copy, omit this parameter. The volume copy is created in the same Availability Zone as the source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#availability_zone_id Ec2Volume#availability_zone_id}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Indicates whether the volume should be encrypted.

The effect of setting the encryption state to `true` depends on the volume origin (new, from a snapshot, or from an existing volume), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see [Encryption by default](https://docs.aws.amazon.com/ebs/latest/userguide/work-with-ebs-encr.html#encryption-by-default) in the *Amazon EBS User Guide*.
If you are creating a volume copy, omit this parameter. The volume is automatically encrypted with the same KMS key as the source volume. You can't copy unencrypted volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#encrypted Ec2Volume#encrypted}

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

The number of I/O operations per second (IOPS) to provision for the volume.

Required for `io1` and `io2` volumes. Optional for `gp3` volumes. Omit for all other volume types.
Valid ranges:

* gp3: `3,000`(*default*)`- 80,000` IOPS
* io1: `100 - 64,000` IOPS
* io2: `100 - 256,000` IOPS

[Instances built on the Nitro System](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html) can support up to 256,000 IOPS. Other instances can support up to 32,000 IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#iops Ec2Volume#iops}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The identifier of the kms-key-long to use for Amazon EBS encryption.

If `KmsKeyId` is specified, the encrypted state must be `true`.
If you omit this property and your account is enabled for encryption by default, or *Encrypted* is set to `true`, then the volume is encrypted using the default key specified for your account. If your account does not have a default key, then the volume is encrypted using the aws-managed-key.
Alternatively, if you want to specify a different key, you can specify one of the following:

* Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.
* Key alias. Specify the alias for the key, prefixed with `alias/`. For example, for a key with the alias `my_cmk`, use `alias/my_cmk`. Or to specify the aws-managed-key, use `alias/aws/ebs`.
* Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.
* Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.

If you are creating a volume copy, omit this parameter. The volume is automatically encrypted with the same KMS key as the source volume. You can't copy unencrypted volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#kms_key_id Ec2Volume#kms_key_id}

---

##### `MultiAttachEnabled`<sup>Optional</sup> <a name="MultiAttachEnabled" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.multiAttachEnabled"></a>

```go
MultiAttachEnabled interface{}
```

- *Type:* interface{}

Indicates whether Amazon EBS Multi-Attach is enabled.

CFNlong does not currently support updating a single-attach volume to be multi-attach enabled, updating a multi-attach enabled volume to be single-attach, or updating the size or number of I/O operations per second (IOPS) of a multi-attach enabled volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#multi_attach_enabled Ec2Volume#multi_attach_enabled}

---

##### `OutpostArn`<sup>Optional</sup> <a name="OutpostArn" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.outpostArn"></a>

```go
OutpostArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Outpost on which to create the volume.

If you intend to use a volume with an instance running on an outpost, then you must create the volume on the same outpost as the instance. You can't use a volume created in an AWS Region with an instance on an AWS outpost, or the other way around.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#outpost_arn Ec2Volume#outpost_arn}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

The size of the volume, in GiBs.

* Required for new empty volumes.
* Optional for volumes created from snapshots and volume copies. In this case, the size defaults to the size of the snapshot or source volume. You can optionally specify a size that is equal to or larger than the size of the source snapshot or volume.

Supported volume sizes:

* gp2: `1 - 16,384` GiB
* gp3: `1 - 65,536` GiB
* io1: `4 - 16,384` GiB
* io2: `4 - 65,536` GiB
* st1 and sc1: `125 - 16,384` GiB
* standard: `1 - 1024` GiB

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#size Ec2Volume#size}

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.snapshotId"></a>

```go
SnapshotId *string
```

- *Type:* *string

The snapshot from which to create the volume.

Only specify to create a volume from a snapshot. To create a new empty volume, omit this parameter and specify a value for `Size` instead. To create a volume copy, omit this parameter and specify `SourceVolumeId` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#snapshot_id Ec2Volume#snapshot_id}

---

##### `SourceVolumeId`<sup>Optional</sup> <a name="SourceVolumeId" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.sourceVolumeId"></a>

```go
SourceVolumeId *string
```

- *Type:* *string

The ID of the source EBS volume to copy.

When specified, the volume is created as an exact copy of the specified volume. Only specify to create a volume copy. To create a new empty volume or to create a volume from a snapshot, omit this parameter,

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#source_volume_id Ec2Volume#source_volume_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags to apply to the volume during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#tags Ec2Volume#tags}

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

The throughput to provision for a volume, with a maximum of 2,000 MiB/s.

This parameter is valid only for `gp3` volumes. The default value is 125.
Valid Range: Minimum value of 125. Maximum value of 2000.
The maximum ratio of throughput to IOPS is 0.25 MiB/s per IOPS. For example, a volume with 3,000 IOPS can have a maximum throughput of 750 MiB/s (3,000 x 0.25).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#throughput Ec2Volume#throughput}

---

##### `VolumeInitializationRate`<sup>Optional</sup> <a name="VolumeInitializationRate" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.volumeInitializationRate"></a>

```go
VolumeInitializationRate *f64
```

- *Type:* *f64

Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume.

This is also known as *volume initialization*. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation.
This parameter is supported only for volumes created from snapshots. Omit this parameter if:

* You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation.
  If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore.
* You want to create a volume that is initialized at the default rate.

For more information, see [Initialize Amazon EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html) in the *Amazon EC2 User Guide*.
Valid range: 100 - 300 MiB/s

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#volume_initialization_rate Ec2Volume#volume_initialization_rate}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

The volume type.

This parameter can be one of the following values:

* General Purpose SSD: `gp2` | `gp3`
* Provisioned IOPS SSD: `io1` | `io2`
* Throughput Optimized HDD: `st1`
* Cold HDD: `sc1`
* Magnetic: `standard`

Throughput Optimized HDD (`st1`) and Cold HDD (`sc1`) volumes can't be used as boot volumes.
For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html) in the *Amazon EBS User Guide*.
Default: `gp2`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#volume_type Ec2Volume#volume_type}

---

### Ec2VolumeTags <a name="Ec2VolumeTags" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2volume"

&ec2volume.Ec2VolumeTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#key Ec2Volume#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#value Ec2Volume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VolumeTagsList <a name="Ec2VolumeTagsList" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2volume"

ec2volume.NewEc2VolumeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2VolumeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.get"></a>

```go
func Get(index *f64) Ec2VolumeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VolumeTagsOutputReference <a name="Ec2VolumeTagsOutputReference" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2volume"

ec2volume.NewEc2VolumeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2VolumeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



