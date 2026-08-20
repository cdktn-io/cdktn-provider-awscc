# `ssmResourceDataSync` Submodule <a name="`ssmResourceDataSync` Submodule" id="@cdktn/provider-awscc.ssmResourceDataSync"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmResourceDataSync <a name="SsmResourceDataSync" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync awscc_ssm_resource_data_sync}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmresourcedatasync"

ssmresourcedatasync.NewSsmResourceDataSync(scope Construct, id *string, config SsmResourceDataSyncConfig) SsmResourceDataSync
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig">SsmResourceDataSyncConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig">SsmResourceDataSyncConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putS3Destination">PutS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putSyncSource">PutSyncSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketRegion">ResetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetS3Destination">ResetS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncFormat">ResetSyncFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncSource">ResetSyncSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncType">ResetSyncType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutS3Destination` <a name="PutS3Destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putS3Destination"></a>

```go
func PutS3Destination(value SsmResourceDataSyncS3Destination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

---

##### `PutSyncSource` <a name="PutSyncSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putSyncSource"></a>

```go
func PutSyncSource(value SsmResourceDataSyncSyncSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putSyncSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a>

---

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketPrefix"></a>

```go
func ResetBucketPrefix()
```

##### `ResetBucketRegion` <a name="ResetBucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketRegion"></a>

```go
func ResetBucketRegion()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetS3Destination` <a name="ResetS3Destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetS3Destination"></a>

```go
func ResetS3Destination()
```

##### `ResetSyncFormat` <a name="ResetSyncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncFormat"></a>

```go
func ResetSyncFormat()
```

##### `ResetSyncSource` <a name="ResetSyncSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncSource"></a>

```go
func ResetSyncSource()
```

##### `ResetSyncType` <a name="ResetSyncType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncType"></a>

```go
func ResetSyncType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmResourceDataSync resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmresourcedatasync"

ssmresourcedatasync.SsmResourceDataSync_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmresourcedatasync"

ssmresourcedatasync.SsmResourceDataSync_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmresourcedatasync"

ssmresourcedatasync.SsmResourceDataSync_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmresourcedatasync"

ssmresourcedatasync.SsmResourceDataSync_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SsmResourceDataSync resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsmResourceDataSync to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsmResourceDataSync that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SsmResourceDataSync to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference">SsmResourceDataSyncS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncSource">SyncSource</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference">SsmResourceDataSyncSyncSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketRegionInput">BucketRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.s3DestinationInput">S3DestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncFormatInput">SyncFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncNameInput">SyncNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncSourceInput">SyncSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncTypeInput">SyncTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketRegion">BucketRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncFormat">SyncFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncName">SyncName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncType">SyncType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.s3Destination"></a>

```go
func S3Destination() SsmResourceDataSyncS3DestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference">SsmResourceDataSyncS3DestinationOutputReference</a>

---

##### `SyncSource`<sup>Required</sup> <a name="SyncSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncSource"></a>

```go
func SyncSource() SsmResourceDataSyncSyncSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference">SsmResourceDataSyncSyncSourceOutputReference</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketPrefixInput"></a>

```go
func BucketPrefixInput() *string
```

- *Type:* *string

---

##### `BucketRegionInput`<sup>Optional</sup> <a name="BucketRegionInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketRegionInput"></a>

```go
func BucketRegionInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `S3DestinationInput`<sup>Optional</sup> <a name="S3DestinationInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.s3DestinationInput"></a>

```go
func S3DestinationInput() interface{}
```

- *Type:* interface{}

---

##### `SyncFormatInput`<sup>Optional</sup> <a name="SyncFormatInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncFormatInput"></a>

```go
func SyncFormatInput() *string
```

- *Type:* *string

---

##### `SyncNameInput`<sup>Optional</sup> <a name="SyncNameInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncNameInput"></a>

```go
func SyncNameInput() *string
```

- *Type:* *string

---

##### `SyncSourceInput`<sup>Optional</sup> <a name="SyncSourceInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncSourceInput"></a>

```go
func SyncSourceInput() interface{}
```

- *Type:* interface{}

---

##### `SyncTypeInput`<sup>Optional</sup> <a name="SyncTypeInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncTypeInput"></a>

```go
func SyncTypeInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketPrefix"></a>

```go
func BucketPrefix() *string
```

- *Type:* *string

---

##### `BucketRegion`<sup>Required</sup> <a name="BucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketRegion"></a>

```go
func BucketRegion() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `SyncFormat`<sup>Required</sup> <a name="SyncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncFormat"></a>

```go
func SyncFormat() *string
```

- *Type:* *string

---

##### `SyncName`<sup>Required</sup> <a name="SyncName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncName"></a>

```go
func SyncName() *string
```

- *Type:* *string

---

##### `SyncType`<sup>Required</sup> <a name="SyncType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncType"></a>

```go
func SyncType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmResourceDataSyncConfig <a name="SsmResourceDataSyncConfig" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmresourcedatasync"

&ssmresourcedatasync.SsmResourceDataSyncConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	SyncName: *string,
	BucketName: *string,
	BucketPrefix: *string,
	BucketRegion: *string,
	KmsKeyArn: *string,
	S3Destination: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination,
	SyncFormat: *string,
	SyncSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource,
	SyncType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncName">SyncName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_name SsmResourceDataSync#sync_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketRegion">BucketRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#s3_destination SsmResourceDataSync#s3_destination}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncFormat">SyncFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncSource">SyncSource</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_source SsmResourceDataSync#sync_source}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncType">SyncType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_type SsmResourceDataSync#sync_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SyncName`<sup>Required</sup> <a name="SyncName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncName"></a>

```go
SyncName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_name SsmResourceDataSync#sync_name}.

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}.

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketPrefix"></a>

```go
BucketPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}.

---

##### `BucketRegion`<sup>Optional</sup> <a name="BucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketRegion"></a>

```go
BucketRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}.

---

##### `S3Destination`<sup>Optional</sup> <a name="S3Destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.s3Destination"></a>

```go
S3Destination SsmResourceDataSyncS3Destination
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#s3_destination SsmResourceDataSync#s3_destination}.

---

##### `SyncFormat`<sup>Optional</sup> <a name="SyncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncFormat"></a>

```go
SyncFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}.

---

##### `SyncSource`<sup>Optional</sup> <a name="SyncSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncSource"></a>

```go
SyncSource SsmResourceDataSyncSyncSource
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_source SsmResourceDataSync#sync_source}.

---

##### `SyncType`<sup>Optional</sup> <a name="SyncType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncType"></a>

```go
SyncType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_type SsmResourceDataSync#sync_type}.

---

### SsmResourceDataSyncS3Destination <a name="SsmResourceDataSyncS3Destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmresourcedatasync"

&ssmresourcedatasync.SsmResourceDataSyncS3Destination {
	BucketName: *string,
	BucketPrefix: *string,
	BucketRegion: *string,
	KmsKeyArn: *string,
	SyncFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketRegion">BucketRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.syncFormat">SyncFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}.

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketPrefix"></a>

```go
BucketPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}.

---

##### `BucketRegion`<sup>Optional</sup> <a name="BucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketRegion"></a>

```go
BucketRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}.

---

##### `SyncFormat`<sup>Optional</sup> <a name="SyncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.syncFormat"></a>

```go
SyncFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}.

---

### SsmResourceDataSyncSyncSource <a name="SsmResourceDataSyncSyncSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmresourcedatasync"

&ssmresourcedatasync.SsmResourceDataSyncSyncSource {
	AwsOrganizationsSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource,
	IncludeFutureRegions: interface{},
	SourceRegions: *[]*string,
	SourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.awsOrganizationsSource">AwsOrganizationsSource</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#aws_organizations_source SsmResourceDataSync#aws_organizations_source}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.includeFutureRegions">IncludeFutureRegions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#include_future_regions SsmResourceDataSync#include_future_regions}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.sourceRegions">SourceRegions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#source_regions SsmResourceDataSync#source_regions}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.sourceType">SourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#source_type SsmResourceDataSync#source_type}. |

---

##### `AwsOrganizationsSource`<sup>Optional</sup> <a name="AwsOrganizationsSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.awsOrganizationsSource"></a>

```go
AwsOrganizationsSource SsmResourceDataSyncSyncSourceAwsOrganizationsSource
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#aws_organizations_source SsmResourceDataSync#aws_organizations_source}.

---

##### `IncludeFutureRegions`<sup>Optional</sup> <a name="IncludeFutureRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.includeFutureRegions"></a>

```go
IncludeFutureRegions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#include_future_regions SsmResourceDataSync#include_future_regions}.

---

##### `SourceRegions`<sup>Optional</sup> <a name="SourceRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.sourceRegions"></a>

```go
SourceRegions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#source_regions SsmResourceDataSync#source_regions}.

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#source_type SsmResourceDataSync#source_type}.

---

### SsmResourceDataSyncSyncSourceAwsOrganizationsSource <a name="SsmResourceDataSyncSyncSourceAwsOrganizationsSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmresourcedatasync"

&ssmresourcedatasync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource {
	OrganizationalUnits: *[]*string,
	OrganizationSourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.property.organizationalUnits">OrganizationalUnits</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#organizational_units SsmResourceDataSync#organizational_units}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.property.organizationSourceType">OrganizationSourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#organization_source_type SsmResourceDataSync#organization_source_type}. |

---

##### `OrganizationalUnits`<sup>Optional</sup> <a name="OrganizationalUnits" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.property.organizationalUnits"></a>

```go
OrganizationalUnits *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#organizational_units SsmResourceDataSync#organizational_units}.

---

##### `OrganizationSourceType`<sup>Optional</sup> <a name="OrganizationSourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.property.organizationSourceType"></a>

```go
OrganizationSourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_resource_data_sync#organization_source_type SsmResourceDataSync#organization_source_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmResourceDataSyncS3DestinationOutputReference <a name="SsmResourceDataSyncS3DestinationOutputReference" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmresourcedatasync"

ssmresourcedatasync.NewSsmResourceDataSyncS3DestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmResourceDataSyncS3DestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketRegion">ResetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetSyncFormat">ResetSyncFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketPrefix"></a>

```go
func ResetBucketPrefix()
```

##### `ResetBucketRegion` <a name="ResetBucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketRegion"></a>

```go
func ResetBucketRegion()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetSyncFormat` <a name="ResetSyncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetSyncFormat"></a>

```go
func ResetSyncFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketRegionInput">BucketRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormatInput">SyncFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketRegion">BucketRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormat">SyncFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefixInput"></a>

```go
func BucketPrefixInput() *string
```

- *Type:* *string

---

##### `BucketRegionInput`<sup>Optional</sup> <a name="BucketRegionInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketRegionInput"></a>

```go
func BucketRegionInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `SyncFormatInput`<sup>Optional</sup> <a name="SyncFormatInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormatInput"></a>

```go
func SyncFormatInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefix"></a>

```go
func BucketPrefix() *string
```

- *Type:* *string

---

##### `BucketRegion`<sup>Required</sup> <a name="BucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketRegion"></a>

```go
func BucketRegion() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `SyncFormat`<sup>Required</sup> <a name="SyncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormat"></a>

```go
func SyncFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference <a name="SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmresourcedatasync"

ssmresourcedatasync.NewSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resetOrganizationalUnits">ResetOrganizationalUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resetOrganizationSourceType">ResetOrganizationSourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOrganizationalUnits` <a name="ResetOrganizationalUnits" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resetOrganizationalUnits"></a>

```go
func ResetOrganizationalUnits()
```

##### `ResetOrganizationSourceType` <a name="ResetOrganizationSourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resetOrganizationSourceType"></a>

```go
func ResetOrganizationSourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnitsInput">OrganizationalUnitsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceTypeInput">OrganizationSourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnits">OrganizationalUnits</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceType">OrganizationSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OrganizationalUnitsInput`<sup>Optional</sup> <a name="OrganizationalUnitsInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnitsInput"></a>

```go
func OrganizationalUnitsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationSourceTypeInput`<sup>Optional</sup> <a name="OrganizationSourceTypeInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceTypeInput"></a>

```go
func OrganizationSourceTypeInput() *string
```

- *Type:* *string

---

##### `OrganizationalUnits`<sup>Required</sup> <a name="OrganizationalUnits" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnits"></a>

```go
func OrganizationalUnits() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationSourceType`<sup>Required</sup> <a name="OrganizationSourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceType"></a>

```go
func OrganizationSourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmResourceDataSyncSyncSourceOutputReference <a name="SsmResourceDataSyncSyncSourceOutputReference" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmresourcedatasync"

ssmresourcedatasync.NewSsmResourceDataSyncSyncSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmResourceDataSyncSyncSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.putAwsOrganizationsSource">PutAwsOrganizationsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetAwsOrganizationsSource">ResetAwsOrganizationsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetIncludeFutureRegions">ResetIncludeFutureRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetSourceRegions">ResetSourceRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetSourceType">ResetSourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsOrganizationsSource` <a name="PutAwsOrganizationsSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.putAwsOrganizationsSource"></a>

```go
func PutAwsOrganizationsSource(value SsmResourceDataSyncSyncSourceAwsOrganizationsSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.putAwsOrganizationsSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a>

---

##### `ResetAwsOrganizationsSource` <a name="ResetAwsOrganizationsSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetAwsOrganizationsSource"></a>

```go
func ResetAwsOrganizationsSource()
```

##### `ResetIncludeFutureRegions` <a name="ResetIncludeFutureRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetIncludeFutureRegions"></a>

```go
func ResetIncludeFutureRegions()
```

##### `ResetSourceRegions` <a name="ResetSourceRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetSourceRegions"></a>

```go
func ResetSourceRegions()
```

##### `ResetSourceType` <a name="ResetSourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetSourceType"></a>

```go
func ResetSourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSource">AwsOrganizationsSource</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference">SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSourceInput">AwsOrganizationsSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegionsInput">IncludeFutureRegionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceRegionsInput">SourceRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegions">IncludeFutureRegions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceRegions">SourceRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsOrganizationsSource`<sup>Required</sup> <a name="AwsOrganizationsSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSource"></a>

```go
func AwsOrganizationsSource() SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference">SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference</a>

---

##### `AwsOrganizationsSourceInput`<sup>Optional</sup> <a name="AwsOrganizationsSourceInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSourceInput"></a>

```go
func AwsOrganizationsSourceInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeFutureRegionsInput`<sup>Optional</sup> <a name="IncludeFutureRegionsInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegionsInput"></a>

```go
func IncludeFutureRegionsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceRegionsInput`<sup>Optional</sup> <a name="SourceRegionsInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceRegionsInput"></a>

```go
func SourceRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `IncludeFutureRegions`<sup>Required</sup> <a name="IncludeFutureRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegions"></a>

```go
func IncludeFutureRegions() interface{}
```

- *Type:* interface{}

---

##### `SourceRegions`<sup>Required</sup> <a name="SourceRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceRegions"></a>

```go
func SourceRegions() *[]*string
```

- *Type:* *[]*string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



