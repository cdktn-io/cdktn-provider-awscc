# `s3ObjectlambdaAccessPoint` Submodule <a name="`s3ObjectlambdaAccessPoint` Submodule" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ObjectlambdaAccessPoint <a name="S3ObjectlambdaAccessPoint" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point awscc_s3objectlambda_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

s3objectlambdaaccesspoint.NewS3ObjectlambdaAccessPoint(scope Construct, id *string, config S3ObjectlambdaAccessPointConfig) S3ObjectlambdaAccessPoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig">S3ObjectlambdaAccessPointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig">S3ObjectlambdaAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.putObjectLambdaConfiguration">PutObjectLambdaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutObjectLambdaConfiguration` <a name="PutObjectLambdaConfiguration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.putObjectLambdaConfiguration"></a>

```go
func PutObjectLambdaConfiguration(value S3ObjectlambdaAccessPointObjectLambdaConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.putObjectLambdaConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3ObjectlambdaAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

s3objectlambdaaccesspoint.S3ObjectlambdaAccessPoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

s3objectlambdaaccesspoint.S3ObjectlambdaAccessPoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

s3objectlambdaaccesspoint.S3ObjectlambdaAccessPoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

s3objectlambdaaccesspoint.S3ObjectlambdaAccessPoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a S3ObjectlambdaAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the S3ObjectlambdaAccessPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing S3ObjectlambdaAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the S3ObjectlambdaAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.alias">Alias</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference">S3ObjectlambdaAccessPointAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.objectLambdaConfiguration">ObjectLambdaConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.policyStatus">PolicyStatus</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference">S3ObjectlambdaAccessPointPolicyStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.publicAccessBlockConfiguration">PublicAccessBlockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference">S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.objectLambdaConfigurationInput">ObjectLambdaConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.alias"></a>

```go
func Alias() S3ObjectlambdaAccessPointAliasOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference">S3ObjectlambdaAccessPointAliasOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ObjectLambdaConfiguration`<sup>Required</sup> <a name="ObjectLambdaConfiguration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.objectLambdaConfiguration"></a>

```go
func ObjectLambdaConfiguration() S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference</a>

---

##### `PolicyStatus`<sup>Required</sup> <a name="PolicyStatus" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.policyStatus"></a>

```go
func PolicyStatus() S3ObjectlambdaAccessPointPolicyStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference">S3ObjectlambdaAccessPointPolicyStatusOutputReference</a>

---

##### `PublicAccessBlockConfiguration`<sup>Required</sup> <a name="PublicAccessBlockConfiguration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.publicAccessBlockConfiguration"></a>

```go
func PublicAccessBlockConfiguration() S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference">S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ObjectLambdaConfigurationInput`<sup>Optional</sup> <a name="ObjectLambdaConfigurationInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.objectLambdaConfigurationInput"></a>

```go
func ObjectLambdaConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectlambdaAccessPointAlias <a name="S3ObjectlambdaAccessPointAlias" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAlias"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAlias.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

&s3objectlambdaaccesspoint.S3ObjectlambdaAccessPointAlias {

}
```


### S3ObjectlambdaAccessPointConfig <a name="S3ObjectlambdaAccessPointConfig" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

&s3objectlambdaaccesspoint.S3ObjectlambdaAccessPointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ObjectLambdaConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.objectLambdaConfiguration">ObjectLambdaConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a></code> | The Object lambda Access Point Configuration that configures transformations to be applied on the objects on specified S3 Actions. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.name">Name</a></code> | <code>*string</code> | The name you want to assign to this Object lambda Access Point. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ObjectLambdaConfiguration`<sup>Required</sup> <a name="ObjectLambdaConfiguration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.objectLambdaConfiguration"></a>

```go
ObjectLambdaConfiguration S3ObjectlambdaAccessPointObjectLambdaConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a>

The Object lambda Access Point Configuration that configures transformations to be applied on the objects on specified S3 Actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#object_lambda_configuration S3ObjectlambdaAccessPoint#object_lambda_configuration}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name you want to assign to this Object lambda Access Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#name S3ObjectlambdaAccessPoint#name}

---

### S3ObjectlambdaAccessPointObjectLambdaConfiguration <a name="S3ObjectlambdaAccessPointObjectLambdaConfiguration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

&s3objectlambdaaccesspoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration {
	SupportingAccessPoint: *string,
	TransformationConfigurations: interface{},
	AllowedFeatures: *[]*string,
	CloudwatchMetricsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.supportingAccessPoint">SupportingAccessPoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#supporting_access_point S3ObjectlambdaAccessPoint#supporting_access_point}. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.transformationConfigurations">TransformationConfigurations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#transformation_configurations S3ObjectlambdaAccessPoint#transformation_configurations}. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.allowedFeatures">AllowedFeatures</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#allowed_features S3ObjectlambdaAccessPoint#allowed_features}. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.cloudwatchMetricsEnabled">CloudwatchMetricsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#cloudwatch_metrics_enabled S3ObjectlambdaAccessPoint#cloudwatch_metrics_enabled}. |

---

##### `SupportingAccessPoint`<sup>Required</sup> <a name="SupportingAccessPoint" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.supportingAccessPoint"></a>

```go
SupportingAccessPoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#supporting_access_point S3ObjectlambdaAccessPoint#supporting_access_point}.

---

##### `TransformationConfigurations`<sup>Required</sup> <a name="TransformationConfigurations" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.transformationConfigurations"></a>

```go
TransformationConfigurations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#transformation_configurations S3ObjectlambdaAccessPoint#transformation_configurations}.

---

##### `AllowedFeatures`<sup>Optional</sup> <a name="AllowedFeatures" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.allowedFeatures"></a>

```go
AllowedFeatures *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#allowed_features S3ObjectlambdaAccessPoint#allowed_features}.

---

##### `CloudwatchMetricsEnabled`<sup>Optional</sup> <a name="CloudwatchMetricsEnabled" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.cloudwatchMetricsEnabled"></a>

```go
CloudwatchMetricsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#cloudwatch_metrics_enabled S3ObjectlambdaAccessPoint#cloudwatch_metrics_enabled}.

---

### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

&s3objectlambdaaccesspoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations {
	Actions: *[]*string,
	ContentTransformation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations.property.actions">Actions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#actions S3ObjectlambdaAccessPoint#actions}. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations.property.contentTransformation">ContentTransformation</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#content_transformation S3ObjectlambdaAccessPoint#content_transformation}. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#actions S3ObjectlambdaAccessPoint#actions}.

---

##### `ContentTransformation`<sup>Required</sup> <a name="ContentTransformation" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations.property.contentTransformation"></a>

```go
ContentTransformation S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#content_transformation S3ObjectlambdaAccessPoint#content_transformation}.

---

### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

&s3objectlambdaaccesspoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation {
	AwsLambda: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation.property.awsLambda">AwsLambda</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#aws_lambda S3ObjectlambdaAccessPoint#aws_lambda}. |

---

##### `AwsLambda`<sup>Optional</sup> <a name="AwsLambda" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation.property.awsLambda"></a>

```go
AwsLambda S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#aws_lambda S3ObjectlambdaAccessPoint#aws_lambda}.

---

### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

&s3objectlambdaaccesspoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda {
	FunctionArn: *string,
	FunctionPayload: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda.property.functionArn">FunctionArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#function_arn S3ObjectlambdaAccessPoint#function_arn}. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda.property.functionPayload">FunctionPayload</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#function_payload S3ObjectlambdaAccessPoint#function_payload}. |

---

##### `FunctionArn`<sup>Optional</sup> <a name="FunctionArn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda.property.functionArn"></a>

```go
FunctionArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#function_arn S3ObjectlambdaAccessPoint#function_arn}.

---

##### `FunctionPayload`<sup>Optional</sup> <a name="FunctionPayload" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda.property.functionPayload"></a>

```go
FunctionPayload *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#function_payload S3ObjectlambdaAccessPoint#function_payload}.

---

### S3ObjectlambdaAccessPointPolicyStatus <a name="S3ObjectlambdaAccessPointPolicyStatus" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

&s3objectlambdaaccesspoint.S3ObjectlambdaAccessPointPolicyStatus {

}
```


### S3ObjectlambdaAccessPointPublicAccessBlockConfiguration <a name="S3ObjectlambdaAccessPointPublicAccessBlockConfiguration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

&s3objectlambdaaccesspoint.S3ObjectlambdaAccessPointPublicAccessBlockConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### S3ObjectlambdaAccessPointAliasOutputReference <a name="S3ObjectlambdaAccessPointAliasOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

s3objectlambdaaccesspoint.NewS3ObjectlambdaAccessPointAliasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3ObjectlambdaAccessPointAliasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAlias">S3ObjectlambdaAccessPointAlias</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.internalValue"></a>

```go
func InternalValue() S3ObjectlambdaAccessPointAlias
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAlias">S3ObjectlambdaAccessPointAlias</a>

---


### S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

s3objectlambdaaccesspoint.NewS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.putTransformationConfigurations">PutTransformationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resetAllowedFeatures">ResetAllowedFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resetCloudwatchMetricsEnabled">ResetCloudwatchMetricsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTransformationConfigurations` <a name="PutTransformationConfigurations" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.putTransformationConfigurations"></a>

```go
func PutTransformationConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.putTransformationConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedFeatures` <a name="ResetAllowedFeatures" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resetAllowedFeatures"></a>

```go
func ResetAllowedFeatures()
```

##### `ResetCloudwatchMetricsEnabled` <a name="ResetCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resetCloudwatchMetricsEnabled"></a>

```go
func ResetCloudwatchMetricsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.transformationConfigurations">TransformationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.allowedFeaturesInput">AllowedFeaturesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.cloudwatchMetricsEnabledInput">CloudwatchMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.supportingAccessPointInput">SupportingAccessPointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.transformationConfigurationsInput">TransformationConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.allowedFeatures">AllowedFeatures</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.cloudwatchMetricsEnabled">CloudwatchMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.supportingAccessPoint">SupportingAccessPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TransformationConfigurations`<sup>Required</sup> <a name="TransformationConfigurations" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.transformationConfigurations"></a>

```go
func TransformationConfigurations() S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList</a>

---

##### `AllowedFeaturesInput`<sup>Optional</sup> <a name="AllowedFeaturesInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.allowedFeaturesInput"></a>

```go
func AllowedFeaturesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="CloudwatchMetricsEnabledInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.cloudwatchMetricsEnabledInput"></a>

```go
func CloudwatchMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SupportingAccessPointInput`<sup>Optional</sup> <a name="SupportingAccessPointInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.supportingAccessPointInput"></a>

```go
func SupportingAccessPointInput() *string
```

- *Type:* *string

---

##### `TransformationConfigurationsInput`<sup>Optional</sup> <a name="TransformationConfigurationsInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.transformationConfigurationsInput"></a>

```go
func TransformationConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedFeatures`<sup>Required</sup> <a name="AllowedFeatures" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.allowedFeatures"></a>

```go
func AllowedFeatures() *[]*string
```

- *Type:* *[]*string

---

##### `CloudwatchMetricsEnabled`<sup>Required</sup> <a name="CloudwatchMetricsEnabled" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.cloudwatchMetricsEnabled"></a>

```go
func CloudwatchMetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `SupportingAccessPoint`<sup>Required</sup> <a name="SupportingAccessPoint" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.supportingAccessPoint"></a>

```go
func SupportingAccessPoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

s3objectlambdaaccesspoint.NewS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resetFunctionArn">ResetFunctionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resetFunctionPayload">ResetFunctionPayload</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionArn` <a name="ResetFunctionArn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resetFunctionArn"></a>

```go
func ResetFunctionArn()
```

##### `ResetFunctionPayload` <a name="ResetFunctionPayload" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resetFunctionPayload"></a>

```go
func ResetFunctionPayload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionArnInput">FunctionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionPayloadInput">FunctionPayloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionArn">FunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionPayload">FunctionPayload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionArnInput`<sup>Optional</sup> <a name="FunctionArnInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionArnInput"></a>

```go
func FunctionArnInput() *string
```

- *Type:* *string

---

##### `FunctionPayloadInput`<sup>Optional</sup> <a name="FunctionPayloadInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionPayloadInput"></a>

```go
func FunctionPayloadInput() *string
```

- *Type:* *string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionArn"></a>

```go
func FunctionArn() *string
```

- *Type:* *string

---

##### `FunctionPayload`<sup>Required</sup> <a name="FunctionPayload" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionPayload"></a>

```go
func FunctionPayload() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

s3objectlambdaaccesspoint.NewS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.putAwsLambda">PutAwsLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resetAwsLambda">ResetAwsLambda</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsLambda` <a name="PutAwsLambda" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.putAwsLambda"></a>

```go
func PutAwsLambda(value S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.putAwsLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a>

---

##### `ResetAwsLambda` <a name="ResetAwsLambda" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resetAwsLambda"></a>

```go
func ResetAwsLambda()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.awsLambda">AwsLambda</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.awsLambdaInput">AwsLambdaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsLambda`<sup>Required</sup> <a name="AwsLambda" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.awsLambda"></a>

```go
func AwsLambda() S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference</a>

---

##### `AwsLambdaInput`<sup>Optional</sup> <a name="AwsLambdaInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.awsLambdaInput"></a>

```go
func AwsLambdaInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

s3objectlambdaaccesspoint.NewS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.get"></a>

```go
func Get(index *f64) S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

s3objectlambdaaccesspoint.NewS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.putContentTransformation">PutContentTransformation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContentTransformation` <a name="PutContentTransformation" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.putContentTransformation"></a>

```go
func PutContentTransformation(value S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.putContentTransformation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.contentTransformation">ContentTransformation</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.contentTransformationInput">ContentTransformationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentTransformation`<sup>Required</sup> <a name="ContentTransformation" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.contentTransformation"></a>

```go
func ContentTransformation() S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContentTransformationInput`<sup>Optional</sup> <a name="ContentTransformationInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.contentTransformationInput"></a>

```go
func ContentTransformationInput() interface{}
```

- *Type:* interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ObjectlambdaAccessPointPolicyStatusOutputReference <a name="S3ObjectlambdaAccessPointPolicyStatusOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

s3objectlambdaaccesspoint.NewS3ObjectlambdaAccessPointPolicyStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3ObjectlambdaAccessPointPolicyStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.isPublic">IsPublic</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatus">S3ObjectlambdaAccessPointPolicyStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.isPublic"></a>

```go
func IsPublic() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() S3ObjectlambdaAccessPointPolicyStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatus">S3ObjectlambdaAccessPointPolicyStatus</a>

---


### S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference <a name="S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3objectlambdaaccesspoint"

s3objectlambdaaccesspoint.NewS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfiguration">S3ObjectlambdaAccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockPublicAcls`<sup>Required</sup> <a name="BlockPublicAcls" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls"></a>

```go
func BlockPublicAcls() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `BlockPublicPolicy`<sup>Required</sup> <a name="BlockPublicPolicy" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy"></a>

```go
func BlockPublicPolicy() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IgnorePublicAcls`<sup>Required</sup> <a name="IgnorePublicAcls" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls"></a>

```go
func IgnorePublicAcls() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RestrictPublicBuckets`<sup>Required</sup> <a name="RestrictPublicBuckets" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets"></a>

```go
func RestrictPublicBuckets() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() S3ObjectlambdaAccessPointPublicAccessBlockConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfiguration">S3ObjectlambdaAccessPointPublicAccessBlockConfiguration</a>

---



