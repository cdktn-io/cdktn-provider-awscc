# `s3ExpressAccessPoint` Submodule <a name="`s3ExpressAccessPoint` Submodule" id="@cdktn/provider-awscc.s3ExpressAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ExpressAccessPoint <a name="S3ExpressAccessPoint" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point awscc_s3express_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressaccesspoint"

s3expressaccesspoint.NewS3ExpressAccessPoint(scope Construct, id *string, config S3ExpressAccessPointConfig) S3ExpressAccessPoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig">S3ExpressAccessPointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig">S3ExpressAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putPublicAccessBlockConfiguration">PutPublicAccessBlockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putVpcConfiguration">PutVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetBucketAccountId">ResetBucketAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetPublicAccessBlockConfiguration">ResetPublicAccessBlockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetVpcConfiguration">ResetVpcConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPublicAccessBlockConfiguration` <a name="PutPublicAccessBlockConfiguration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putPublicAccessBlockConfiguration"></a>

```go
func PutPublicAccessBlockConfiguration(value S3ExpressAccessPointPublicAccessBlockConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putPublicAccessBlockConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration">S3ExpressAccessPointPublicAccessBlockConfiguration</a>

---

##### `PutScope` <a name="PutScope" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putScope"></a>

```go
func PutScope(value S3ExpressAccessPointScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope">S3ExpressAccessPointScope</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVpcConfiguration` <a name="PutVpcConfiguration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putVpcConfiguration"></a>

```go
func PutVpcConfiguration(value S3ExpressAccessPointVpcConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration">S3ExpressAccessPointVpcConfiguration</a>

---

##### `ResetBucketAccountId` <a name="ResetBucketAccountId" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetBucketAccountId"></a>

```go
func ResetBucketAccountId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetName"></a>

```go
func ResetName()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetPublicAccessBlockConfiguration` <a name="ResetPublicAccessBlockConfiguration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetPublicAccessBlockConfiguration"></a>

```go
func ResetPublicAccessBlockConfiguration()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetScope"></a>

```go
func ResetScope()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVpcConfiguration` <a name="ResetVpcConfiguration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetVpcConfiguration"></a>

```go
func ResetVpcConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3ExpressAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressaccesspoint"

s3expressaccesspoint.S3ExpressAccessPoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressaccesspoint"

s3expressaccesspoint.S3ExpressAccessPoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressaccesspoint"

s3expressaccesspoint.S3ExpressAccessPoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressaccesspoint"

s3expressaccesspoint.S3ExpressAccessPoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a S3ExpressAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the S3ExpressAccessPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing S3ExpressAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the S3ExpressAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.networkOrigin">NetworkOrigin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.publicAccessBlockConfiguration">PublicAccessBlockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference">S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference">S3ExpressAccessPointScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList">S3ExpressAccessPointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference">S3ExpressAccessPointVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.bucketAccountIdInput">BucketAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.publicAccessBlockConfigurationInput">PublicAccessBlockConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.scopeInput">ScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.vpcConfigurationInput">VpcConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.bucketAccountId">BucketAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkOrigin`<sup>Required</sup> <a name="NetworkOrigin" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.networkOrigin"></a>

```go
func NetworkOrigin() *string
```

- *Type:* *string

---

##### `PublicAccessBlockConfiguration`<sup>Required</sup> <a name="PublicAccessBlockConfiguration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.publicAccessBlockConfiguration"></a>

```go
func PublicAccessBlockConfiguration() S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference">S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.scope"></a>

```go
func Scope() S3ExpressAccessPointScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference">S3ExpressAccessPointScopeOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.tags"></a>

```go
func Tags() S3ExpressAccessPointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList">S3ExpressAccessPointTagsList</a>

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.vpcConfiguration"></a>

```go
func VpcConfiguration() S3ExpressAccessPointVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference">S3ExpressAccessPointVpcConfigurationOutputReference</a>

---

##### `BucketAccountIdInput`<sup>Optional</sup> <a name="BucketAccountIdInput" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.bucketAccountIdInput"></a>

```go
func BucketAccountIdInput() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `PublicAccessBlockConfigurationInput`<sup>Optional</sup> <a name="PublicAccessBlockConfigurationInput" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.publicAccessBlockConfigurationInput"></a>

```go
func PublicAccessBlockConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.scopeInput"></a>

```go
func ScopeInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcConfigurationInput`<sup>Optional</sup> <a name="VpcConfigurationInput" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.vpcConfigurationInput"></a>

```go
func VpcConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketAccountId`<sup>Required</sup> <a name="BucketAccountId" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.bucketAccountId"></a>

```go
func BucketAccountId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ExpressAccessPointConfig <a name="S3ExpressAccessPointConfig" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressaccesspoint"

&s3expressaccesspoint.S3ExpressAccessPointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	BucketAccountId: *string,
	Name: *string,
	Policy: *string,
	PublicAccessBlockConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration,
	Scope: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope,
	Tags: interface{},
	VpcConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.bucket">Bucket</a></code> | <code>*string</code> | The name of the bucket that you want to associate this Access Point with. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.bucketAccountId">BucketAccountId</a></code> | <code>*string</code> | The AWS account ID associated with the S3 bucket associated with this access point. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.name">Name</a></code> | <code>*string</code> | The name you want to assign to this Access Point. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.policy">Policy</a></code> | <code>*string</code> | The Access Point Policy you want to apply to this access point. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.publicAccessBlockConfiguration">PublicAccessBlockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration">S3ExpressAccessPointPublicAccessBlockConfiguration</a></code> | The PublicAccessBlock configuration that you want to apply to this Access Point. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope">S3ExpressAccessPointScope</a></code> | For directory buckets, you can ?lter access control to speci?c pre?xes, API operations, or a combination of both. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#tags S3ExpressAccessPoint#tags}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration">S3ExpressAccessPointVpcConfiguration</a></code> | If you include this field, Amazon S3 restricts access to this Access Point to requests from the specified Virtual Private Cloud (VPC). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The name of the bucket that you want to associate this Access Point with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#bucket S3ExpressAccessPoint#bucket}

---

##### `BucketAccountId`<sup>Optional</sup> <a name="BucketAccountId" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.bucketAccountId"></a>

```go
BucketAccountId *string
```

- *Type:* *string

The AWS account ID associated with the S3 bucket associated with this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#bucket_account_id S3ExpressAccessPoint#bucket_account_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name you want to assign to this Access Point.

If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the access point name. For directory buckets, the access point name must consist of a base name that you provide and su?x that includes the ZoneID (AWS Availability Zone or Local Zone) of your bucket location, followed by --xa-s3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#name S3ExpressAccessPoint#name}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

The Access Point Policy you want to apply to this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#policy S3ExpressAccessPoint#policy}

---

##### `PublicAccessBlockConfiguration`<sup>Optional</sup> <a name="PublicAccessBlockConfiguration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.publicAccessBlockConfiguration"></a>

```go
PublicAccessBlockConfiguration S3ExpressAccessPointPublicAccessBlockConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration">S3ExpressAccessPointPublicAccessBlockConfiguration</a>

The PublicAccessBlock configuration that you want to apply to this Access Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#public_access_block_configuration S3ExpressAccessPoint#public_access_block_configuration}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.scope"></a>

```go
Scope S3ExpressAccessPointScope
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope">S3ExpressAccessPointScope</a>

For directory buckets, you can ?lter access control to speci?c pre?xes, API operations, or a combination of both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#scope S3ExpressAccessPoint#scope}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#tags S3ExpressAccessPoint#tags}.

---

##### `VpcConfiguration`<sup>Optional</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.vpcConfiguration"></a>

```go
VpcConfiguration S3ExpressAccessPointVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration">S3ExpressAccessPointVpcConfiguration</a>

If you include this field, Amazon S3 restricts access to this Access Point to requests from the specified Virtual Private Cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#vpc_configuration S3ExpressAccessPoint#vpc_configuration}

---

### S3ExpressAccessPointPublicAccessBlockConfiguration <a name="S3ExpressAccessPointPublicAccessBlockConfiguration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressaccesspoint"

&s3expressaccesspoint.S3ExpressAccessPointPublicAccessBlockConfiguration {
	BlockPublicAcls: interface{},
	BlockPublicPolicy: interface{},
	IgnorePublicAcls: interface{},
	RestrictPublicBuckets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>interface{}</code> | Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>interface{}</code> | Specifies whether Amazon S3 should block public bucket policies for buckets in this account. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>interface{}</code> | Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>interface{}</code> | Specifies whether Amazon S3 should restrict public bucket policies for this bucket. |

---

##### `BlockPublicAcls`<sup>Optional</sup> <a name="BlockPublicAcls" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.property.blockPublicAcls"></a>

```go
BlockPublicAcls interface{}
```

- *Type:* interface{}

Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account.

Setting this element to TRUE causes the following behavior:

* PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.
* PUT Object calls fail if the request includes a public ACL.
  . - PUT Bucket calls fail if the request includes a public ACL.
  Enabling this setting doesn't affect existing policies or ACLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#block_public_acls S3ExpressAccessPoint#block_public_acls}

---

##### `BlockPublicPolicy`<sup>Optional</sup> <a name="BlockPublicPolicy" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.property.blockPublicPolicy"></a>

```go
BlockPublicPolicy interface{}
```

- *Type:* interface{}

Specifies whether Amazon S3 should block public bucket policies for buckets in this account.

Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#block_public_policy S3ExpressAccessPoint#block_public_policy}

---

##### `IgnorePublicAcls`<sup>Optional</sup> <a name="IgnorePublicAcls" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.property.ignorePublicAcls"></a>

```go
IgnorePublicAcls interface{}
```

- *Type:* interface{}

Specifies whether Amazon S3 should ignore public ACLs for buckets in this account.

Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#ignore_public_acls S3ExpressAccessPoint#ignore_public_acls}

---

##### `RestrictPublicBuckets`<sup>Optional</sup> <a name="RestrictPublicBuckets" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.property.restrictPublicBuckets"></a>

```go
RestrictPublicBuckets interface{}
```

- *Type:* interface{}

Specifies whether Amazon S3 should restrict public bucket policies for this bucket.

Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.
Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#restrict_public_buckets S3ExpressAccessPoint#restrict_public_buckets}

---

### S3ExpressAccessPointScope <a name="S3ExpressAccessPointScope" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressaccesspoint"

&s3expressaccesspoint.S3ExpressAccessPointScope {
	Permissions: *[]*string,
	Prefixes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope.property.permissions">Permissions</a></code> | <code>*[]*string</code> | You can include one or more API operations as permissions. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope.property.prefixes">Prefixes</a></code> | <code>*[]*string</code> | You can specify any amount of pre?xes, but the total length of characters of all pre?xes must be less than 256 bytes in size. |

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope.property.permissions"></a>

```go
Permissions *[]*string
```

- *Type:* *[]*string

You can include one or more API operations as permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#permissions S3ExpressAccessPoint#permissions}

---

##### `Prefixes`<sup>Optional</sup> <a name="Prefixes" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope.property.prefixes"></a>

```go
Prefixes *[]*string
```

- *Type:* *[]*string

You can specify any amount of pre?xes, but the total length of characters of all pre?xes must be less than 256 bytes in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#prefixes S3ExpressAccessPoint#prefixes}

---

### S3ExpressAccessPointTags <a name="S3ExpressAccessPointTags" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressaccesspoint"

&s3expressaccesspoint.S3ExpressAccessPointTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#key S3ExpressAccessPoint#key}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#value S3ExpressAccessPoint#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#key S3ExpressAccessPoint#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#value S3ExpressAccessPoint#value}.

---

### S3ExpressAccessPointVpcConfiguration <a name="S3ExpressAccessPointVpcConfiguration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressaccesspoint"

&s3expressaccesspoint.S3ExpressAccessPointVpcConfiguration {
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration.property.vpcId">VpcId</a></code> | <code>*string</code> | If this field is specified, this access point will only allow connections from the specified VPC ID. |

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

If this field is specified, this access point will only allow connections from the specified VPC ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3express_access_point#vpc_id S3ExpressAccessPoint#vpc_id}

---

## Classes <a name="Classes" id="Classes"></a>

### S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference <a name="S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressaccesspoint"

s3expressaccesspoint.NewS3ExpressAccessPointPublicAccessBlockConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicAcls">ResetBlockPublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicPolicy">ResetBlockPublicPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resetIgnorePublicAcls">ResetIgnorePublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resetRestrictPublicBuckets">ResetRestrictPublicBuckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlockPublicAcls` <a name="ResetBlockPublicAcls" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicAcls"></a>

```go
func ResetBlockPublicAcls()
```

##### `ResetBlockPublicPolicy` <a name="ResetBlockPublicPolicy" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicPolicy"></a>

```go
func ResetBlockPublicPolicy()
```

##### `ResetIgnorePublicAcls` <a name="ResetIgnorePublicAcls" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resetIgnorePublicAcls"></a>

```go
func ResetIgnorePublicAcls()
```

##### `ResetRestrictPublicBuckets` <a name="ResetRestrictPublicBuckets" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resetRestrictPublicBuckets"></a>

```go
func ResetRestrictPublicBuckets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAclsInput">BlockPublicAclsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicyInput">BlockPublicPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAclsInput">IgnorePublicAclsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBucketsInput">RestrictPublicBucketsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockPublicAclsInput`<sup>Optional</sup> <a name="BlockPublicAclsInput" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAclsInput"></a>

```go
func BlockPublicAclsInput() interface{}
```

- *Type:* interface{}

---

##### `BlockPublicPolicyInput`<sup>Optional</sup> <a name="BlockPublicPolicyInput" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicyInput"></a>

```go
func BlockPublicPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `IgnorePublicAclsInput`<sup>Optional</sup> <a name="IgnorePublicAclsInput" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAclsInput"></a>

```go
func IgnorePublicAclsInput() interface{}
```

- *Type:* interface{}

---

##### `RestrictPublicBucketsInput`<sup>Optional</sup> <a name="RestrictPublicBucketsInput" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBucketsInput"></a>

```go
func RestrictPublicBucketsInput() interface{}
```

- *Type:* interface{}

---

##### `BlockPublicAcls`<sup>Required</sup> <a name="BlockPublicAcls" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls"></a>

```go
func BlockPublicAcls() interface{}
```

- *Type:* interface{}

---

##### `BlockPublicPolicy`<sup>Required</sup> <a name="BlockPublicPolicy" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy"></a>

```go
func BlockPublicPolicy() interface{}
```

- *Type:* interface{}

---

##### `IgnorePublicAcls`<sup>Required</sup> <a name="IgnorePublicAcls" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls"></a>

```go
func IgnorePublicAcls() interface{}
```

- *Type:* interface{}

---

##### `RestrictPublicBuckets`<sup>Required</sup> <a name="RestrictPublicBuckets" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets"></a>

```go
func RestrictPublicBuckets() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressAccessPointScopeOutputReference <a name="S3ExpressAccessPointScopeOutputReference" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressaccesspoint"

s3expressaccesspoint.NewS3ExpressAccessPointScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3ExpressAccessPointScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.resetPrefixes">ResetPrefixes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetPrefixes` <a name="ResetPrefixes" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.resetPrefixes"></a>

```go
func ResetPrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.prefixesInput">PrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.prefixes">Prefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrefixesInput`<sup>Optional</sup> <a name="PrefixesInput" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.prefixesInput"></a>

```go
func PrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.prefixes"></a>

```go
func Prefixes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressAccessPointTagsList <a name="S3ExpressAccessPointTagsList" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressaccesspoint"

s3expressaccesspoint.NewS3ExpressAccessPointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3ExpressAccessPointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.get"></a>

```go
func Get(index *f64) S3ExpressAccessPointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressAccessPointTagsOutputReference <a name="S3ExpressAccessPointTagsOutputReference" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressaccesspoint"

s3expressaccesspoint.NewS3ExpressAccessPointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3ExpressAccessPointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressAccessPointVpcConfigurationOutputReference <a name="S3ExpressAccessPointVpcConfigurationOutputReference" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressaccesspoint"

s3expressaccesspoint.NewS3ExpressAccessPointVpcConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3ExpressAccessPointVpcConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.resetVpcId"></a>

```go
func ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



