# `robomakerRobotApplication` Submodule <a name="`robomakerRobotApplication` Submodule" id="@cdktn/provider-awscc.robomakerRobotApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RobomakerRobotApplication <a name="RobomakerRobotApplication" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_robot_application awscc_robomaker_robot_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/robomakerrobotapplication"

robomakerrobotapplication.NewRobomakerRobotApplication(scope Construct, id *string, config RobomakerRobotApplicationConfig) RobomakerRobotApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig">RobomakerRobotApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig">RobomakerRobotApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putRobotSoftwareSuite">PutRobotSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetCurrentRevisionId">ResetCurrentRevisionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetSources">ResetSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRobotSoftwareSuite` <a name="PutRobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putRobotSoftwareSuite"></a>

```go
func PutRobotSoftwareSuite(value RobomakerRobotApplicationRobotSoftwareSuite)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putRobotSoftwareSuite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a>

---

##### `PutSources` <a name="PutSources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putSources"></a>

```go
func PutSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putSources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCurrentRevisionId` <a name="ResetCurrentRevisionId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetCurrentRevisionId"></a>

```go
func ResetCurrentRevisionId()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetName"></a>

```go
func ResetName()
```

##### `ResetSources` <a name="ResetSources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetSources"></a>

```go
func ResetSources()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RobomakerRobotApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/robomakerrobotapplication"

robomakerrobotapplication.RobomakerRobotApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/robomakerrobotapplication"

robomakerrobotapplication.RobomakerRobotApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/robomakerrobotapplication"

robomakerrobotapplication.RobomakerRobotApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/robomakerrobotapplication"

robomakerrobotapplication.RobomakerRobotApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RobomakerRobotApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RobomakerRobotApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RobomakerRobotApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_robot_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RobomakerRobotApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.robotSoftwareSuite">RobotSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference">RobomakerRobotApplicationRobotSoftwareSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList">RobomakerRobotApplicationSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.currentRevisionIdInput">CurrentRevisionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.robotSoftwareSuiteInput">RobotSoftwareSuiteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.sourcesInput">SourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.currentRevisionId">CurrentRevisionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RobotSoftwareSuite`<sup>Required</sup> <a name="RobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.robotSoftwareSuite"></a>

```go
func RobotSoftwareSuite() RobomakerRobotApplicationRobotSoftwareSuiteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference">RobomakerRobotApplicationRobotSoftwareSuiteOutputReference</a>

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.sources"></a>

```go
func Sources() RobomakerRobotApplicationSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList">RobomakerRobotApplicationSourcesList</a>

---

##### `CurrentRevisionIdInput`<sup>Optional</sup> <a name="CurrentRevisionIdInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.currentRevisionIdInput"></a>

```go
func CurrentRevisionIdInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RobotSoftwareSuiteInput`<sup>Optional</sup> <a name="RobotSoftwareSuiteInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.robotSoftwareSuiteInput"></a>

```go
func RobotSoftwareSuiteInput() interface{}
```

- *Type:* interface{}

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.sourcesInput"></a>

```go
func SourcesInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CurrentRevisionId`<sup>Required</sup> <a name="CurrentRevisionId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.currentRevisionId"></a>

```go
func CurrentRevisionId() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RobomakerRobotApplicationConfig <a name="RobomakerRobotApplicationConfig" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/robomakerrobotapplication"

&robomakerrobotapplication.RobomakerRobotApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	RobotSoftwareSuite: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite,
	CurrentRevisionId: *string,
	Environment: *string,
	Name: *string,
	Sources: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.robotSoftwareSuite">RobotSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a></code> | The robot software suite used by the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.currentRevisionId">CurrentRevisionId</a></code> | <code>*string</code> | The revision ID of robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.environment">Environment</a></code> | <code>*string</code> | The URI of the Docker image for the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.sources">Sources</a></code> | <code>interface{}</code> | The sources of the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | A key-value pair to associate with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RobotSoftwareSuite`<sup>Required</sup> <a name="RobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.robotSoftwareSuite"></a>

```go
RobotSoftwareSuite RobomakerRobotApplicationRobotSoftwareSuite
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a>

The robot software suite used by the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_robot_application#robot_software_suite RobomakerRobotApplication#robot_software_suite}

---

##### `CurrentRevisionId`<sup>Optional</sup> <a name="CurrentRevisionId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.currentRevisionId"></a>

```go
CurrentRevisionId *string
```

- *Type:* *string

The revision ID of robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_robot_application#current_revision_id RobomakerRobotApplication#current_revision_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The URI of the Docker image for the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_robot_application#environment RobomakerRobotApplication#environment}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_robot_application#name RobomakerRobotApplication#name}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.sources"></a>

```go
Sources interface{}
```

- *Type:* interface{}

The sources of the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_robot_application#sources RobomakerRobotApplication#sources}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_robot_application#tags RobomakerRobotApplication#tags}

---

### RobomakerRobotApplicationRobotSoftwareSuite <a name="RobomakerRobotApplicationRobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/robomakerrobotapplication"

&robomakerrobotapplication.RobomakerRobotApplicationRobotSoftwareSuite {
	Name: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.property.name">Name</a></code> | <code>*string</code> | The name of robot software suite. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.property.version">Version</a></code> | <code>*string</code> | The version of robot software suite. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_robot_application#name RobomakerRobotApplication#name}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.property.version"></a>

```go
Version *string
```

- *Type:* *string

The version of robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_robot_application#version RobomakerRobotApplication#version}

---

### RobomakerRobotApplicationSources <a name="RobomakerRobotApplicationSources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/robomakerrobotapplication"

&robomakerrobotapplication.RobomakerRobotApplicationSources {
	Architecture: *string,
	S3Bucket: *string,
	S3Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.architecture">Architecture</a></code> | <code>*string</code> | The architecture of robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | The Arn of the S3Bucket that stores the robot application source. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.s3Key">S3Key</a></code> | <code>*string</code> | The s3 key of robot application source. |

---

##### `Architecture`<sup>Optional</sup> <a name="Architecture" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.architecture"></a>

```go
Architecture *string
```

- *Type:* *string

The architecture of robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_robot_application#architecture RobomakerRobotApplication#architecture}

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.s3Bucket"></a>

```go
S3Bucket *string
```

- *Type:* *string

The Arn of the S3Bucket that stores the robot application source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_robot_application#s3_bucket RobomakerRobotApplication#s3_bucket}

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.s3Key"></a>

```go
S3Key *string
```

- *Type:* *string

The s3 key of robot application source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_robot_application#s3_key RobomakerRobotApplication#s3_key}

---

## Classes <a name="Classes" id="Classes"></a>

### RobomakerRobotApplicationRobotSoftwareSuiteOutputReference <a name="RobomakerRobotApplicationRobotSoftwareSuiteOutputReference" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/robomakerrobotapplication"

robomakerrobotapplication.NewRobomakerRobotApplicationRobotSoftwareSuiteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RobomakerRobotApplicationRobotSoftwareSuiteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RobomakerRobotApplicationSourcesList <a name="RobomakerRobotApplicationSourcesList" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/robomakerrobotapplication"

robomakerrobotapplication.NewRobomakerRobotApplicationSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RobomakerRobotApplicationSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.get"></a>

```go
func Get(index *f64) RobomakerRobotApplicationSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RobomakerRobotApplicationSourcesOutputReference <a name="RobomakerRobotApplicationSourcesOutputReference" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/robomakerrobotapplication"

robomakerrobotapplication.NewRobomakerRobotApplicationSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RobomakerRobotApplicationSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetArchitecture">ResetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetS3Key">ResetS3Key</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchitecture` <a name="ResetArchitecture" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetArchitecture"></a>

```go
func ResetArchitecture()
```

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetS3Bucket"></a>

```go
func ResetS3Bucket()
```

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetS3Key"></a>

```go
func ResetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.architectureInput">ArchitectureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3Key">S3Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchitectureInput`<sup>Optional</sup> <a name="ArchitectureInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.architectureInput"></a>

```go
func ArchitectureInput() *string
```

- *Type:* *string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3BucketInput"></a>

```go
func S3BucketInput() *string
```

- *Type:* *string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3KeyInput"></a>

```go
func S3KeyInput() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() *string
```

- *Type:* *string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3Key"></a>

```go
func S3Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



