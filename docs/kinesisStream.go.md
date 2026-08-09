# `kinesisStream` Submodule <a name="`kinesisStream` Submodule" id="@cdktn/provider-awscc.kinesisStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisStream <a name="KinesisStream" id="@cdktn/provider-awscc.kinesisStream.KinesisStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesis_stream awscc_kinesis_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesisstream"

kinesisstream.NewKinesisStream(scope Construct, id *string, config KinesisStreamConfig) KinesisStream
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig">KinesisStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig">KinesisStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.putStreamEncryption">PutStreamEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.putStreamModeDetails">PutStreamModeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetDesiredShardLevelMetrics">ResetDesiredShardLevelMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetMaxRecordSizeInKiB">ResetMaxRecordSizeInKiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetRetentionPeriodHours">ResetRetentionPeriodHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetShardCount">ResetShardCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetStreamEncryption">ResetStreamEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetStreamModeDetails">ResetStreamModeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.resetWarmThroughputMiBps">ResetWarmThroughputMiBps</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStreamEncryption` <a name="PutStreamEncryption" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.putStreamEncryption"></a>

```go
func PutStreamEncryption(value KinesisStreamStreamEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.putStreamEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption">KinesisStreamStreamEncryption</a>

---

##### `PutStreamModeDetails` <a name="PutStreamModeDetails" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.putStreamModeDetails"></a>

```go
func PutStreamModeDetails(value KinesisStreamStreamModeDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.putStreamModeDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDesiredShardLevelMetrics` <a name="ResetDesiredShardLevelMetrics" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetDesiredShardLevelMetrics"></a>

```go
func ResetDesiredShardLevelMetrics()
```

##### `ResetMaxRecordSizeInKiB` <a name="ResetMaxRecordSizeInKiB" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetMaxRecordSizeInKiB"></a>

```go
func ResetMaxRecordSizeInKiB()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetName"></a>

```go
func ResetName()
```

##### `ResetRetentionPeriodHours` <a name="ResetRetentionPeriodHours" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetRetentionPeriodHours"></a>

```go
func ResetRetentionPeriodHours()
```

##### `ResetShardCount` <a name="ResetShardCount" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetShardCount"></a>

```go
func ResetShardCount()
```

##### `ResetStreamEncryption` <a name="ResetStreamEncryption" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetStreamEncryption"></a>

```go
func ResetStreamEncryption()
```

##### `ResetStreamModeDetails` <a name="ResetStreamModeDetails" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetStreamModeDetails"></a>

```go
func ResetStreamModeDetails()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetTags"></a>

```go
func ResetTags()
```

##### `ResetWarmThroughputMiBps` <a name="ResetWarmThroughputMiBps" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.resetWarmThroughputMiBps"></a>

```go
func ResetWarmThroughputMiBps()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KinesisStream resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesisstream"

kinesisstream.KinesisStream_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesisstream"

kinesisstream.KinesisStream_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesisstream"

kinesisstream.KinesisStream_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesisstream"

kinesisstream.KinesisStream_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a KinesisStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KinesisStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KinesisStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesis_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the KinesisStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.streamEncryption">StreamEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference">KinesisStreamStreamEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.streamModeDetails">StreamModeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference">KinesisStreamStreamModeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList">KinesisStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.warmThroughputObject">WarmThroughputObject</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference">KinesisStreamWarmThroughputObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.desiredShardLevelMetricsInput">DesiredShardLevelMetricsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.maxRecordSizeInKiBInput">MaxRecordSizeInKiBInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.retentionPeriodHoursInput">RetentionPeriodHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.shardCountInput">ShardCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.streamEncryptionInput">StreamEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.streamModeDetailsInput">StreamModeDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.warmThroughputMiBpsInput">WarmThroughputMiBpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.desiredShardLevelMetrics">DesiredShardLevelMetrics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.maxRecordSizeInKiB">MaxRecordSizeInKiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.retentionPeriodHours">RetentionPeriodHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.shardCount">ShardCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.warmThroughputMiBps">WarmThroughputMiBps</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StreamEncryption`<sup>Required</sup> <a name="StreamEncryption" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.streamEncryption"></a>

```go
func StreamEncryption() KinesisStreamStreamEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference">KinesisStreamStreamEncryptionOutputReference</a>

---

##### `StreamModeDetails`<sup>Required</sup> <a name="StreamModeDetails" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.streamModeDetails"></a>

```go
func StreamModeDetails() KinesisStreamStreamModeDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference">KinesisStreamStreamModeDetailsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.tags"></a>

```go
func Tags() KinesisStreamTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList">KinesisStreamTagsList</a>

---

##### `WarmThroughputObject`<sup>Required</sup> <a name="WarmThroughputObject" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.warmThroughputObject"></a>

```go
func WarmThroughputObject() KinesisStreamWarmThroughputObjectOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference">KinesisStreamWarmThroughputObjectOutputReference</a>

---

##### `DesiredShardLevelMetricsInput`<sup>Optional</sup> <a name="DesiredShardLevelMetricsInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.desiredShardLevelMetricsInput"></a>

```go
func DesiredShardLevelMetricsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxRecordSizeInKiBInput`<sup>Optional</sup> <a name="MaxRecordSizeInKiBInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.maxRecordSizeInKiBInput"></a>

```go
func MaxRecordSizeInKiBInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RetentionPeriodHoursInput`<sup>Optional</sup> <a name="RetentionPeriodHoursInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.retentionPeriodHoursInput"></a>

```go
func RetentionPeriodHoursInput() *f64
```

- *Type:* *f64

---

##### `ShardCountInput`<sup>Optional</sup> <a name="ShardCountInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.shardCountInput"></a>

```go
func ShardCountInput() *f64
```

- *Type:* *f64

---

##### `StreamEncryptionInput`<sup>Optional</sup> <a name="StreamEncryptionInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.streamEncryptionInput"></a>

```go
func StreamEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `StreamModeDetailsInput`<sup>Optional</sup> <a name="StreamModeDetailsInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.streamModeDetailsInput"></a>

```go
func StreamModeDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `WarmThroughputMiBpsInput`<sup>Optional</sup> <a name="WarmThroughputMiBpsInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.warmThroughputMiBpsInput"></a>

```go
func WarmThroughputMiBpsInput() *f64
```

- *Type:* *f64

---

##### `DesiredShardLevelMetrics`<sup>Required</sup> <a name="DesiredShardLevelMetrics" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.desiredShardLevelMetrics"></a>

```go
func DesiredShardLevelMetrics() *[]*string
```

- *Type:* *[]*string

---

##### `MaxRecordSizeInKiB`<sup>Required</sup> <a name="MaxRecordSizeInKiB" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.maxRecordSizeInKiB"></a>

```go
func MaxRecordSizeInKiB() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RetentionPeriodHours`<sup>Required</sup> <a name="RetentionPeriodHours" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.retentionPeriodHours"></a>

```go
func RetentionPeriodHours() *f64
```

- *Type:* *f64

---

##### `ShardCount`<sup>Required</sup> <a name="ShardCount" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.shardCount"></a>

```go
func ShardCount() *f64
```

- *Type:* *f64

---

##### `WarmThroughputMiBps`<sup>Required</sup> <a name="WarmThroughputMiBps" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.warmThroughputMiBps"></a>

```go
func WarmThroughputMiBps() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStream.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.kinesisStream.KinesisStream.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisStreamConfig <a name="KinesisStreamConfig" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesisstream"

&kinesisstream.KinesisStreamConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DesiredShardLevelMetrics: *[]*string,
	MaxRecordSizeInKiB: *f64,
	Name: *string,
	RetentionPeriodHours: *f64,
	ShardCount: *f64,
	StreamEncryption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kinesisStream.KinesisStreamStreamEncryption,
	StreamModeDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kinesisStream.KinesisStreamStreamModeDetails,
	Tags: interface{},
	WarmThroughputMiBps: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.desiredShardLevelMetrics">DesiredShardLevelMetrics</a></code> | <code>*[]*string</code> | The final list of shard-level metrics. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.maxRecordSizeInKiB">MaxRecordSizeInKiB</a></code> | <code>*f64</code> | Maximum size of a data record in KiB allowed to be put into Kinesis stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Kinesis stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.retentionPeriodHours">RetentionPeriodHours</a></code> | <code>*f64</code> | The number of hours for the data records that are stored in shards to remain accessible. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.shardCount">ShardCount</a></code> | <code>*f64</code> | The number of shards that the stream uses. Required when StreamMode = PROVISIONED is passed. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.streamEncryption">StreamEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption">KinesisStreamStreamEncryption</a></code> | When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.streamModeDetails">StreamModeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a></code> | The mode in which the stream is running. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An arbitrary set of tags (key-value pairs) to associate with the Kinesis stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.warmThroughputMiBps">WarmThroughputMiBps</a></code> | <code>*f64</code> | Target warm throughput in MiB/s for the stream. This property can ONLY be set when StreamMode is ON_DEMAND. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DesiredShardLevelMetrics`<sup>Optional</sup> <a name="DesiredShardLevelMetrics" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.desiredShardLevelMetrics"></a>

```go
DesiredShardLevelMetrics *[]*string
```

- *Type:* *[]*string

The final list of shard-level metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesis_stream#desired_shard_level_metrics KinesisStream#desired_shard_level_metrics}

---

##### `MaxRecordSizeInKiB`<sup>Optional</sup> <a name="MaxRecordSizeInKiB" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.maxRecordSizeInKiB"></a>

```go
MaxRecordSizeInKiB *f64
```

- *Type:* *f64

Maximum size of a data record in KiB allowed to be put into Kinesis stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesis_stream#max_record_size_in_ki_b KinesisStream#max_record_size_in_ki_b}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Kinesis stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesis_stream#name KinesisStream#name}

---

##### `RetentionPeriodHours`<sup>Optional</sup> <a name="RetentionPeriodHours" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.retentionPeriodHours"></a>

```go
RetentionPeriodHours *f64
```

- *Type:* *f64

The number of hours for the data records that are stored in shards to remain accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesis_stream#retention_period_hours KinesisStream#retention_period_hours}

---

##### `ShardCount`<sup>Optional</sup> <a name="ShardCount" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.shardCount"></a>

```go
ShardCount *f64
```

- *Type:* *f64

The number of shards that the stream uses. Required when StreamMode = PROVISIONED is passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesis_stream#shard_count KinesisStream#shard_count}

---

##### `StreamEncryption`<sup>Optional</sup> <a name="StreamEncryption" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.streamEncryption"></a>

```go
StreamEncryption KinesisStreamStreamEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption">KinesisStreamStreamEncryption</a>

When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesis_stream#stream_encryption KinesisStream#stream_encryption}

---

##### `StreamModeDetails`<sup>Optional</sup> <a name="StreamModeDetails" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.streamModeDetails"></a>

```go
StreamModeDetails KinesisStreamStreamModeDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

The mode in which the stream is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesis_stream#stream_mode_details KinesisStream#stream_mode_details}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An arbitrary set of tags (key-value pairs) to associate with the Kinesis stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesis_stream#tags KinesisStream#tags}

---

##### `WarmThroughputMiBps`<sup>Optional</sup> <a name="WarmThroughputMiBps" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamConfig.property.warmThroughputMiBps"></a>

```go
WarmThroughputMiBps *f64
```

- *Type:* *f64

Target warm throughput in MiB/s for the stream. This property can ONLY be set when StreamMode is ON_DEMAND.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesis_stream#warm_throughput_mi_bps KinesisStream#warm_throughput_mi_bps}

---

### KinesisStreamStreamEncryption <a name="KinesisStreamStreamEncryption" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesisstream"

&kinesisstream.KinesisStreamStreamEncryption {
	EncryptionType: *string,
	KeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | The encryption type to use. The only valid value is KMS. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption.property.keyId">KeyId</a></code> | <code>*string</code> | The GUID for the customer-managed AWS KMS key to use for encryption. |

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

The encryption type to use. The only valid value is KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesis_stream#encryption_type KinesisStream#encryption_type}

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryption.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

The GUID for the customer-managed AWS KMS key to use for encryption.

This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias aws/kinesis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesis_stream#key_id KinesisStream#key_id}

---

### KinesisStreamStreamModeDetails <a name="KinesisStreamStreamModeDetails" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesisstream"

&kinesisstream.KinesisStreamStreamModeDetails {
	StreamMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails.property.streamMode">StreamMode</a></code> | <code>*string</code> | The mode of the stream. |

---

##### `StreamMode`<sup>Optional</sup> <a name="StreamMode" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetails.property.streamMode"></a>

```go
StreamMode *string
```

- *Type:* *string

The mode of the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesis_stream#stream_mode KinesisStream#stream_mode}

---

### KinesisStreamTags <a name="KinesisStreamTags" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesisstream"

&kinesisstream.KinesisStreamTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesis_stream#key KinesisStream#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesis_stream#value KinesisStream#value}

---

### KinesisStreamWarmThroughputObject <a name="KinesisStreamWarmThroughputObject" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObject.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesisstream"

&kinesisstream.KinesisStreamWarmThroughputObject {

}
```


## Classes <a name="Classes" id="Classes"></a>

### KinesisStreamStreamEncryptionOutputReference <a name="KinesisStreamStreamEncryptionOutputReference" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesisstream"

kinesisstream.NewKinesisStreamStreamEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisStreamStreamEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.resetKeyId">ResetKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.resetKeyId"></a>

```go
func ResetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisStreamStreamModeDetailsOutputReference <a name="KinesisStreamStreamModeDetailsOutputReference" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesisstream"

kinesisstream.NewKinesisStreamStreamModeDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisStreamStreamModeDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resetStreamMode">ResetStreamMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStreamMode` <a name="ResetStreamMode" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resetStreamMode"></a>

```go
func ResetStreamMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamModeInput">StreamModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamMode">StreamMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StreamModeInput`<sup>Optional</sup> <a name="StreamModeInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamModeInput"></a>

```go
func StreamModeInput() *string
```

- *Type:* *string

---

##### `StreamMode`<sup>Required</sup> <a name="StreamMode" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamMode"></a>

```go
func StreamMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisStreamTagsList <a name="KinesisStreamTagsList" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesisstream"

kinesisstream.NewKinesisStreamTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KinesisStreamTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.get"></a>

```go
func Get(index *f64) KinesisStreamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisStreamTagsOutputReference <a name="KinesisStreamTagsOutputReference" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesisstream"

kinesisstream.NewKinesisStreamTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KinesisStreamTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisStreamWarmThroughputObjectOutputReference <a name="KinesisStreamWarmThroughputObjectOutputReference" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesisstream"

kinesisstream.NewKinesisStreamWarmThroughputObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisStreamWarmThroughputObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.currentMiBps">CurrentMiBps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.targetMiBps">TargetMiBps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObject">KinesisStreamWarmThroughputObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentMiBps`<sup>Required</sup> <a name="CurrentMiBps" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.currentMiBps"></a>

```go
func CurrentMiBps() *f64
```

- *Type:* *f64

---

##### `TargetMiBps`<sup>Required</sup> <a name="TargetMiBps" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.targetMiBps"></a>

```go
func TargetMiBps() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() KinesisStreamWarmThroughputObject
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisStream.KinesisStreamWarmThroughputObject">KinesisStreamWarmThroughputObject</a>

---



