# `mediatailorSourceLocation` Submodule <a name="`mediatailorSourceLocation` Submodule" id="@cdktn/provider-awscc.mediatailorSourceLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorSourceLocation <a name="MediatailorSourceLocation" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location awscc_mediatailor_source_location}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

mediatailorsourcelocation.NewMediatailorSourceLocation(scope Construct, id *string, config MediatailorSourceLocationConfig) MediatailorSourceLocation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig">MediatailorSourceLocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig">MediatailorSourceLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putAccessConfiguration">PutAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putDefaultSegmentDeliveryConfiguration">PutDefaultSegmentDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putHttpConfiguration">PutHttpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putSegmentDeliveryConfigurations">PutSegmentDeliveryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetAccessConfiguration">ResetAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetDefaultSegmentDeliveryConfiguration">ResetDefaultSegmentDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetSegmentDeliveryConfigurations">ResetSegmentDeliveryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessConfiguration` <a name="PutAccessConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putAccessConfiguration"></a>

```go
func PutAccessConfiguration(value MediatailorSourceLocationAccessConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putAccessConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a>

---

##### `PutDefaultSegmentDeliveryConfiguration` <a name="PutDefaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putDefaultSegmentDeliveryConfiguration"></a>

```go
func PutDefaultSegmentDeliveryConfiguration(value MediatailorSourceLocationDefaultSegmentDeliveryConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putDefaultSegmentDeliveryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a>

---

##### `PutHttpConfiguration` <a name="PutHttpConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putHttpConfiguration"></a>

```go
func PutHttpConfiguration(value MediatailorSourceLocationHttpConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putHttpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a>

---

##### `PutSegmentDeliveryConfigurations` <a name="PutSegmentDeliveryConfigurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putSegmentDeliveryConfigurations"></a>

```go
func PutSegmentDeliveryConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putSegmentDeliveryConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessConfiguration` <a name="ResetAccessConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetAccessConfiguration"></a>

```go
func ResetAccessConfiguration()
```

##### `ResetDefaultSegmentDeliveryConfiguration` <a name="ResetDefaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetDefaultSegmentDeliveryConfiguration"></a>

```go
func ResetDefaultSegmentDeliveryConfiguration()
```

##### `ResetSegmentDeliveryConfigurations` <a name="ResetSegmentDeliveryConfigurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetSegmentDeliveryConfigurations"></a>

```go
func ResetSegmentDeliveryConfigurations()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediatailorSourceLocation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

mediatailorsourcelocation.MediatailorSourceLocation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

mediatailorsourcelocation.MediatailorSourceLocation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

mediatailorsourcelocation.MediatailorSourceLocation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

mediatailorsourcelocation.MediatailorSourceLocation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MediatailorSourceLocation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediatailorSourceLocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediatailorSourceLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorSourceLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.accessConfiguration">AccessConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference">MediatailorSourceLocationAccessConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.defaultSegmentDeliveryConfiguration">DefaultSegmentDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference">MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.httpConfiguration">HttpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference">MediatailorSourceLocationHttpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.segmentDeliveryConfigurations">SegmentDeliveryConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList">MediatailorSourceLocationSegmentDeliveryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList">MediatailorSourceLocationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.accessConfigurationInput">AccessConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.defaultSegmentDeliveryConfigurationInput">DefaultSegmentDeliveryConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.httpConfigurationInput">HttpConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.segmentDeliveryConfigurationsInput">SegmentDeliveryConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.sourceLocationNameInput">SourceLocationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.sourceLocationName">SourceLocationName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessConfiguration`<sup>Required</sup> <a name="AccessConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.accessConfiguration"></a>

```go
func AccessConfiguration() MediatailorSourceLocationAccessConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference">MediatailorSourceLocationAccessConfigurationOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DefaultSegmentDeliveryConfiguration`<sup>Required</sup> <a name="DefaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.defaultSegmentDeliveryConfiguration"></a>

```go
func DefaultSegmentDeliveryConfiguration() MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference">MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference</a>

---

##### `HttpConfiguration`<sup>Required</sup> <a name="HttpConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.httpConfiguration"></a>

```go
func HttpConfiguration() MediatailorSourceLocationHttpConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference">MediatailorSourceLocationHttpConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SegmentDeliveryConfigurations`<sup>Required</sup> <a name="SegmentDeliveryConfigurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.segmentDeliveryConfigurations"></a>

```go
func SegmentDeliveryConfigurations() MediatailorSourceLocationSegmentDeliveryConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList">MediatailorSourceLocationSegmentDeliveryConfigurationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tags"></a>

```go
func Tags() MediatailorSourceLocationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList">MediatailorSourceLocationTagsList</a>

---

##### `AccessConfigurationInput`<sup>Optional</sup> <a name="AccessConfigurationInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.accessConfigurationInput"></a>

```go
func AccessConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultSegmentDeliveryConfigurationInput`<sup>Optional</sup> <a name="DefaultSegmentDeliveryConfigurationInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.defaultSegmentDeliveryConfigurationInput"></a>

```go
func DefaultSegmentDeliveryConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `HttpConfigurationInput`<sup>Optional</sup> <a name="HttpConfigurationInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.httpConfigurationInput"></a>

```go
func HttpConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SegmentDeliveryConfigurationsInput`<sup>Optional</sup> <a name="SegmentDeliveryConfigurationsInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.segmentDeliveryConfigurationsInput"></a>

```go
func SegmentDeliveryConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceLocationNameInput`<sup>Optional</sup> <a name="SourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.sourceLocationNameInput"></a>

```go
func SourceLocationNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceLocationName`<sup>Required</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.sourceLocationName"></a>

```go
func SourceLocationName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorSourceLocationAccessConfiguration <a name="MediatailorSourceLocationAccessConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

&mediatailorsourcelocation.MediatailorSourceLocationAccessConfiguration {
	AccessType: *string,
	SecretsManagerAccessTokenConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.property.accessType">AccessType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#access_type MediatailorSourceLocation#access_type}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.property.secretsManagerAccessTokenConfiguration">SecretsManagerAccessTokenConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a></code> | <p>AWS Secrets Manager access token configuration parameters. |

---

##### `AccessType`<sup>Optional</sup> <a name="AccessType" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.property.accessType"></a>

```go
AccessType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#access_type MediatailorSourceLocation#access_type}.

---

##### `SecretsManagerAccessTokenConfiguration`<sup>Optional</sup> <a name="SecretsManagerAccessTokenConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.property.secretsManagerAccessTokenConfiguration"></a>

```go
SecretsManagerAccessTokenConfiguration MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a>

<p>AWS Secrets Manager access token configuration parameters.

For information about Secrets Manager access token authentication, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html">Working with AWS Secrets Manager access token authentication</a>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#secrets_manager_access_token_configuration MediatailorSourceLocation#secrets_manager_access_token_configuration}

---

### MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration <a name="MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

&mediatailorsourcelocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration {
	HeaderName: *string,
	SecretArn: *string,
	SecretStringKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.headerName">HeaderName</a></code> | <code>*string</code> | <p>The name of the HTTP header used to supply the access token in requests to the source location.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.secretArn">SecretArn</a></code> | <code>*string</code> | <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.secretStringKey">SecretStringKey</a></code> | <code>*string</code> | <p>The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>. |

---

##### `HeaderName`<sup>Optional</sup> <a name="HeaderName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

<p>The name of the HTTP header used to supply the access token in requests to the source location.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#header_name MediatailorSourceLocation#header_name}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

<p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#secret_arn MediatailorSourceLocation#secret_arn}

---

##### `SecretStringKey`<sup>Optional</sup> <a name="SecretStringKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.secretStringKey"></a>

```go
SecretStringKey *string
```

- *Type:* *string

<p>The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#secret_string_key MediatailorSourceLocation#secret_string_key}

---

### MediatailorSourceLocationConfig <a name="MediatailorSourceLocationConfig" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

&mediatailorsourcelocation.MediatailorSourceLocationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	HttpConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration,
	SourceLocationName: *string,
	AccessConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration,
	DefaultSegmentDeliveryConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration,
	SegmentDeliveryConfigurations: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.httpConfiguration">HttpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a></code> | <p>The HTTP configuration for the source location.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.sourceLocationName">SourceLocationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#source_location_name MediatailorSourceLocation#source_location_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.accessConfiguration">AccessConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a></code> | <p>Access configuration parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.defaultSegmentDeliveryConfiguration">DefaultSegmentDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a></code> | <p>The optional configuration for a server that serves segments. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.segmentDeliveryConfigurations">SegmentDeliveryConfigurations</a></code> | <code>interface{}</code> | <p>A list of the segment delivery configurations associated with this resource.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags to assign to the source location. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HttpConfiguration`<sup>Required</sup> <a name="HttpConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.httpConfiguration"></a>

```go
HttpConfiguration MediatailorSourceLocationHttpConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a>

<p>The HTTP configuration for the source location.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#http_configuration MediatailorSourceLocation#http_configuration}

---

##### `SourceLocationName`<sup>Required</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.sourceLocationName"></a>

```go
SourceLocationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#source_location_name MediatailorSourceLocation#source_location_name}.

---

##### `AccessConfiguration`<sup>Optional</sup> <a name="AccessConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.accessConfiguration"></a>

```go
AccessConfiguration MediatailorSourceLocationAccessConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a>

<p>Access configuration parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#access_configuration MediatailorSourceLocation#access_configuration}

---

##### `DefaultSegmentDeliveryConfiguration`<sup>Optional</sup> <a name="DefaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.defaultSegmentDeliveryConfiguration"></a>

```go
DefaultSegmentDeliveryConfiguration MediatailorSourceLocationDefaultSegmentDeliveryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a>

<p>The optional configuration for a server that serves segments.

Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#default_segment_delivery_configuration MediatailorSourceLocation#default_segment_delivery_configuration}

---

##### `SegmentDeliveryConfigurations`<sup>Optional</sup> <a name="SegmentDeliveryConfigurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.segmentDeliveryConfigurations"></a>

```go
SegmentDeliveryConfigurations interface{}
```

- *Type:* interface{}

<p>A list of the segment delivery configurations associated with this resource.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#segment_delivery_configurations MediatailorSourceLocation#segment_delivery_configurations}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags to assign to the source location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#tags MediatailorSourceLocation#tags}

---

### MediatailorSourceLocationDefaultSegmentDeliveryConfiguration <a name="MediatailorSourceLocationDefaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

&mediatailorsourcelocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration {
	BaseUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | <p>The hostname of the server that will be used to serve segments. |

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

<p>The hostname of the server that will be used to serve segments.

This string must include the protocol, such as <b>https://</b>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#base_url MediatailorSourceLocation#base_url}

---

### MediatailorSourceLocationHttpConfiguration <a name="MediatailorSourceLocationHttpConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

&mediatailorsourcelocation.MediatailorSourceLocationHttpConfiguration {
	BaseUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | <p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>. |

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

<p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#base_url MediatailorSourceLocation#base_url}

---

### MediatailorSourceLocationSegmentDeliveryConfigurations <a name="MediatailorSourceLocationSegmentDeliveryConfigurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

&mediatailorsourcelocation.MediatailorSourceLocationSegmentDeliveryConfigurations {
	BaseUrl: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | <p>The base URL of the host or path of the segment delivery server that you're using to serve segments. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.property.name">Name</a></code> | <code>*string</code> | <p>A unique identifier used to distinguish between multiple segment delivery configurations in a source location.</p>. |

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

<p>The base URL of the host or path of the segment delivery server that you're using to serve segments.

This is typically a content delivery network (CDN). The URL can be absolute or relative. To use an absolute URL include the protocol, such as <code>https://example.com/some/path</code>. To use a relative URL specify the relative path, such as <code>/some/path*</code>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#base_url MediatailorSourceLocation#base_url}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.property.name"></a>

```go
Name *string
```

- *Type:* *string

<p>A unique identifier used to distinguish between multiple segment delivery configurations in a source location.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#name MediatailorSourceLocation#name}

---

### MediatailorSourceLocationTags <a name="MediatailorSourceLocationTags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

&mediatailorsourcelocation.MediatailorSourceLocationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#key MediatailorSourceLocation#key}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#value MediatailorSourceLocation#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#key MediatailorSourceLocation#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_source_location#value MediatailorSourceLocation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorSourceLocationAccessConfigurationOutputReference <a name="MediatailorSourceLocationAccessConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

mediatailorsourcelocation.NewMediatailorSourceLocationAccessConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorSourceLocationAccessConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.putSecretsManagerAccessTokenConfiguration">PutSecretsManagerAccessTokenConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resetAccessType">ResetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resetSecretsManagerAccessTokenConfiguration">ResetSecretsManagerAccessTokenConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretsManagerAccessTokenConfiguration` <a name="PutSecretsManagerAccessTokenConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.putSecretsManagerAccessTokenConfiguration"></a>

```go
func PutSecretsManagerAccessTokenConfiguration(value MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.putSecretsManagerAccessTokenConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a>

---

##### `ResetAccessType` <a name="ResetAccessType" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resetAccessType"></a>

```go
func ResetAccessType()
```

##### `ResetSecretsManagerAccessTokenConfiguration` <a name="ResetSecretsManagerAccessTokenConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resetSecretsManagerAccessTokenConfiguration"></a>

```go
func ResetSecretsManagerAccessTokenConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfiguration">SecretsManagerAccessTokenConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.accessTypeInput">AccessTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfigurationInput">SecretsManagerAccessTokenConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessTokenConfiguration`<sup>Required</sup> <a name="SecretsManagerAccessTokenConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfiguration"></a>

```go
func SecretsManagerAccessTokenConfiguration() MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference</a>

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.accessTypeInput"></a>

```go
func AccessTypeInput() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessTokenConfigurationInput`<sup>Optional</sup> <a name="SecretsManagerAccessTokenConfigurationInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfigurationInput"></a>

```go
func SecretsManagerAccessTokenConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference <a name="MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

mediatailorsourcelocation.NewMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetHeaderName">ResetHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetSecretStringKey">ResetSecretStringKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderName` <a name="ResetHeaderName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetHeaderName"></a>

```go
func ResetHeaderName()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```

##### `ResetSecretStringKey` <a name="ResetSecretStringKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetSecretStringKey"></a>

```go
func ResetSecretStringKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKeyInput">SecretStringKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKey">SecretStringKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `SecretStringKeyInput`<sup>Optional</sup> <a name="SecretStringKeyInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKeyInput"></a>

```go
func SecretStringKeyInput() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `SecretStringKey`<sup>Required</sup> <a name="SecretStringKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKey"></a>

```go
func SecretStringKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference <a name="MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

mediatailorsourcelocation.NewMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorSourceLocationHttpConfigurationOutputReference <a name="MediatailorSourceLocationHttpConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

mediatailorsourcelocation.NewMediatailorSourceLocationHttpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorSourceLocationHttpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorSourceLocationSegmentDeliveryConfigurationsList <a name="MediatailorSourceLocationSegmentDeliveryConfigurationsList" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

mediatailorsourcelocation.NewMediatailorSourceLocationSegmentDeliveryConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediatailorSourceLocationSegmentDeliveryConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.get"></a>

```go
func Get(index *f64) MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference <a name="MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

mediatailorsourcelocation.NewMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorSourceLocationTagsList <a name="MediatailorSourceLocationTagsList" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

mediatailorsourcelocation.NewMediatailorSourceLocationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediatailorSourceLocationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.get"></a>

```go
func Get(index *f64) MediatailorSourceLocationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorSourceLocationTagsOutputReference <a name="MediatailorSourceLocationTagsOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorsourcelocation"

mediatailorsourcelocation.NewMediatailorSourceLocationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediatailorSourceLocationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



