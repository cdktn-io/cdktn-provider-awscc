# `athenaCapacityReservation` Submodule <a name="`athenaCapacityReservation` Submodule" id="@cdktn/provider-awscc.athenaCapacityReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaCapacityReservation <a name="AthenaCapacityReservation" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation awscc_athena_capacity_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenacapacityreservation"

athenacapacityreservation.NewAthenaCapacityReservation(scope Construct, id *string, config AthenaCapacityReservationConfig) AthenaCapacityReservation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig">AthenaCapacityReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig">AthenaCapacityReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putCapacityAssignmentConfiguration">PutCapacityAssignmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetCapacityAssignmentConfiguration">ResetCapacityAssignmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapacityAssignmentConfiguration` <a name="PutCapacityAssignmentConfiguration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putCapacityAssignmentConfiguration"></a>

```go
func PutCapacityAssignmentConfiguration(value AthenaCapacityReservationCapacityAssignmentConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putCapacityAssignmentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCapacityAssignmentConfiguration` <a name="ResetCapacityAssignmentConfiguration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetCapacityAssignmentConfiguration"></a>

```go
func ResetCapacityAssignmentConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AthenaCapacityReservation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenacapacityreservation"

athenacapacityreservation.AthenaCapacityReservation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenacapacityreservation"

athenacapacityreservation.AthenaCapacityReservation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenacapacityreservation"

athenacapacityreservation.AthenaCapacityReservation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenacapacityreservation"

athenacapacityreservation.AthenaCapacityReservation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AthenaCapacityReservation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AthenaCapacityReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AthenaCapacityReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AthenaCapacityReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.allocatedDpus">AllocatedDpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.capacityAssignmentConfiguration">CapacityAssignmentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference">AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.lastSuccessfulAllocationTime">LastSuccessfulAllocationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList">AthenaCapacityReservationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.capacityAssignmentConfigurationInput">CapacityAssignmentConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.targetDpusInput">TargetDpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.targetDpus">TargetDpus</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllocatedDpus`<sup>Required</sup> <a name="AllocatedDpus" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.allocatedDpus"></a>

```go
func AllocatedDpus() *f64
```

- *Type:* *f64

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CapacityAssignmentConfiguration`<sup>Required</sup> <a name="CapacityAssignmentConfiguration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.capacityAssignmentConfiguration"></a>

```go
func CapacityAssignmentConfiguration() AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference">AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastSuccessfulAllocationTime`<sup>Required</sup> <a name="LastSuccessfulAllocationTime" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.lastSuccessfulAllocationTime"></a>

```go
func LastSuccessfulAllocationTime() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tags"></a>

```go
func Tags() AthenaCapacityReservationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList">AthenaCapacityReservationTagsList</a>

---

##### `CapacityAssignmentConfigurationInput`<sup>Optional</sup> <a name="CapacityAssignmentConfigurationInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.capacityAssignmentConfigurationInput"></a>

```go
func CapacityAssignmentConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetDpusInput`<sup>Optional</sup> <a name="TargetDpusInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.targetDpusInput"></a>

```go
func TargetDpusInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TargetDpus`<sup>Required</sup> <a name="TargetDpus" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.targetDpus"></a>

```go
func TargetDpus() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaCapacityReservationCapacityAssignmentConfiguration <a name="AthenaCapacityReservationCapacityAssignmentConfiguration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenacapacityreservation"

&athenacapacityreservation.AthenaCapacityReservationCapacityAssignmentConfiguration {
	CapacityAssignments: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration.property.capacityAssignments">CapacityAssignments</a></code> | <code>interface{}</code> | List of capacity assignments. |

---

##### `CapacityAssignments`<sup>Optional</sup> <a name="CapacityAssignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration.property.capacityAssignments"></a>

```go
CapacityAssignments interface{}
```

- *Type:* interface{}

List of capacity assignments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#capacity_assignments AthenaCapacityReservation#capacity_assignments}

---

### AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments <a name="AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenacapacityreservation"

&athenacapacityreservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments {
	WorkgroupNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments.property.workgroupNames">WorkgroupNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#workgroup_names AthenaCapacityReservation#workgroup_names}. |

---

##### `WorkgroupNames`<sup>Optional</sup> <a name="WorkgroupNames" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments.property.workgroupNames"></a>

```go
WorkgroupNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#workgroup_names AthenaCapacityReservation#workgroup_names}.

---

### AthenaCapacityReservationConfig <a name="AthenaCapacityReservationConfig" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenacapacityreservation"

&athenacapacityreservation.AthenaCapacityReservationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	TargetDpus: *f64,
	CapacityAssignmentConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.name">Name</a></code> | <code>*string</code> | The reservation name. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.targetDpus">TargetDpus</a></code> | <code>*f64</code> | The number of DPUs to request to be allocated to the reservation. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.capacityAssignmentConfiguration">CapacityAssignmentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a></code> | Assignment configuration to assign workgroups to a reservation. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The reservation name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#name AthenaCapacityReservation#name}

---

##### `TargetDpus`<sup>Required</sup> <a name="TargetDpus" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.targetDpus"></a>

```go
TargetDpus *f64
```

- *Type:* *f64

The number of DPUs to request to be allocated to the reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#target_dpus AthenaCapacityReservation#target_dpus}

---

##### `CapacityAssignmentConfiguration`<sup>Optional</sup> <a name="CapacityAssignmentConfiguration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.capacityAssignmentConfiguration"></a>

```go
CapacityAssignmentConfiguration AthenaCapacityReservationCapacityAssignmentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a>

Assignment configuration to assign workgroups to a reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#capacity_assignment_configuration AthenaCapacityReservation#capacity_assignment_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#tags AthenaCapacityReservation#tags}

---

### AthenaCapacityReservationTags <a name="AthenaCapacityReservationTags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenacapacityreservation"

&athenacapacityreservation.AthenaCapacityReservationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#key AthenaCapacityReservation#key}. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#value AthenaCapacityReservation#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#key AthenaCapacityReservation#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#value AthenaCapacityReservation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList <a name="AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenacapacityreservation"

athenacapacityreservation.NewAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.get"></a>

```go
func Get(index *f64) AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference <a name="AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenacapacityreservation"

athenacapacityreservation.NewAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resetWorkgroupNames">ResetWorkgroupNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkgroupNames` <a name="ResetWorkgroupNames" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resetWorkgroupNames"></a>

```go
func ResetWorkgroupNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNamesInput">WorkgroupNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNames">WorkgroupNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkgroupNamesInput`<sup>Optional</sup> <a name="WorkgroupNamesInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNamesInput"></a>

```go
func WorkgroupNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WorkgroupNames`<sup>Required</sup> <a name="WorkgroupNames" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNames"></a>

```go
func WorkgroupNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference <a name="AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenacapacityreservation"

athenacapacityreservation.NewAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.putCapacityAssignments">PutCapacityAssignments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resetCapacityAssignments">ResetCapacityAssignments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityAssignments` <a name="PutCapacityAssignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.putCapacityAssignments"></a>

```go
func PutCapacityAssignments(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.putCapacityAssignments.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCapacityAssignments` <a name="ResetCapacityAssignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resetCapacityAssignments"></a>

```go
func ResetCapacityAssignments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignments">CapacityAssignments</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignmentsInput">CapacityAssignmentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityAssignments`<sup>Required</sup> <a name="CapacityAssignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignments"></a>

```go
func CapacityAssignments() AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList</a>

---

##### `CapacityAssignmentsInput`<sup>Optional</sup> <a name="CapacityAssignmentsInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignmentsInput"></a>

```go
func CapacityAssignmentsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaCapacityReservationTagsList <a name="AthenaCapacityReservationTagsList" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenacapacityreservation"

athenacapacityreservation.NewAthenaCapacityReservationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AthenaCapacityReservationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.get"></a>

```go
func Get(index *f64) AthenaCapacityReservationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaCapacityReservationTagsOutputReference <a name="AthenaCapacityReservationTagsOutputReference" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenacapacityreservation"

athenacapacityreservation.NewAthenaCapacityReservationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AthenaCapacityReservationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



