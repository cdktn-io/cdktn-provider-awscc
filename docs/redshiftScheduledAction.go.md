# `redshiftScheduledAction` Submodule <a name="`redshiftScheduledAction` Submodule" id="@cdktn/provider-awscc.redshiftScheduledAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftScheduledAction <a name="RedshiftScheduledAction" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action awscc_redshift_scheduled_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftscheduledaction"

redshiftscheduledaction.NewRedshiftScheduledAction(scope Construct, id *string, config RedshiftScheduledActionConfig) RedshiftScheduledAction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig">RedshiftScheduledActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig">RedshiftScheduledActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.putTargetAction">PutTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.resetIamRole">ResetIamRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.resetScheduledActionDescription">ResetScheduledActionDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.resetTargetAction">ResetTargetAction</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTargetAction` <a name="PutTargetAction" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.putTargetAction"></a>

```go
func PutTargetAction(value RedshiftScheduledActionTargetAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.putTargetAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

---

##### `ResetEnable` <a name="ResetEnable" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetIamRole` <a name="ResetIamRole" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.resetIamRole"></a>

```go
func ResetIamRole()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetScheduledActionDescription` <a name="ResetScheduledActionDescription" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.resetScheduledActionDescription"></a>

```go
func ResetScheduledActionDescription()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetTargetAction` <a name="ResetTargetAction" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.resetTargetAction"></a>

```go
func ResetTargetAction()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftScheduledAction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftscheduledaction"

redshiftscheduledaction.RedshiftScheduledAction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftscheduledaction"

redshiftscheduledaction.RedshiftScheduledAction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftscheduledaction"

redshiftscheduledaction.RedshiftScheduledAction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftscheduledaction"

redshiftscheduledaction.RedshiftScheduledAction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RedshiftScheduledAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RedshiftScheduledAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RedshiftScheduledAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftScheduledAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.nextInvocations">NextInvocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.targetAction">TargetAction</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference">RedshiftScheduledActionTargetActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.iamRoleInput">IamRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.scheduledActionDescriptionInput">ScheduledActionDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.scheduledActionNameInput">ScheduledActionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.targetActionInput">TargetActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.iamRole">IamRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.scheduledActionDescription">ScheduledActionDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.scheduledActionName">ScheduledActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NextInvocations`<sup>Required</sup> <a name="NextInvocations" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.nextInvocations"></a>

```go
func NextInvocations() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetAction`<sup>Required</sup> <a name="TargetAction" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.targetAction"></a>

```go
func TargetAction() RedshiftScheduledActionTargetActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference">RedshiftScheduledActionTargetActionOutputReference</a>

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `IamRoleInput`<sup>Optional</sup> <a name="IamRoleInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.iamRoleInput"></a>

```go
func IamRoleInput() *string
```

- *Type:* *string

---

##### `ScheduledActionDescriptionInput`<sup>Optional</sup> <a name="ScheduledActionDescriptionInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.scheduledActionDescriptionInput"></a>

```go
func ScheduledActionDescriptionInput() *string
```

- *Type:* *string

---

##### `ScheduledActionNameInput`<sup>Optional</sup> <a name="ScheduledActionNameInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.scheduledActionNameInput"></a>

```go
func ScheduledActionNameInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TargetActionInput`<sup>Optional</sup> <a name="TargetActionInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.targetActionInput"></a>

```go
func TargetActionInput() interface{}
```

- *Type:* interface{}

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `IamRole`<sup>Required</sup> <a name="IamRole" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.iamRole"></a>

```go
func IamRole() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `ScheduledActionDescription`<sup>Required</sup> <a name="ScheduledActionDescription" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.scheduledActionDescription"></a>

```go
func ScheduledActionDescription() *string
```

- *Type:* *string

---

##### `ScheduledActionName`<sup>Required</sup> <a name="ScheduledActionName" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.scheduledActionName"></a>

```go
func ScheduledActionName() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledAction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftScheduledActionConfig <a name="RedshiftScheduledActionConfig" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftscheduledaction"

&redshiftscheduledaction.RedshiftScheduledActionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ScheduledActionName: *string,
	Enable: interface{},
	EndTime: *string,
	IamRole: *string,
	Schedule: *string,
	ScheduledActionDescription: *string,
	StartTime: *string,
	TargetAction: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.redshiftScheduledAction.RedshiftScheduledActionTargetAction,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.scheduledActionName">ScheduledActionName</a></code> | <code>*string</code> | The name of the scheduled action. The name must be unique within an account. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.enable">Enable</a></code> | <code>interface{}</code> | If true, the schedule is enabled. If false, the scheduled action does not trigger. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.endTime">EndTime</a></code> | <code>*string</code> | The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.iamRole">IamRole</a></code> | <code>*string</code> | The IAM role to assume to run the target action. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.schedule">Schedule</a></code> | <code>*string</code> | The schedule in `at( )` or `cron( )` format. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.scheduledActionDescription">ScheduledActionDescription</a></code> | <code>*string</code> | The description of the scheduled action. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.startTime">StartTime</a></code> | <code>*string</code> | The start time in UTC of the scheduled action. Before this time, the scheduled action does not trigger. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.targetAction">TargetAction</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a></code> | A JSON format string of the Amazon Redshift API operation with input parameters. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ScheduledActionName`<sup>Required</sup> <a name="ScheduledActionName" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.scheduledActionName"></a>

```go
ScheduledActionName *string
```

- *Type:* *string

The name of the scheduled action. The name must be unique within an account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#scheduled_action_name RedshiftScheduledAction#scheduled_action_name}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

If true, the schedule is enabled. If false, the scheduled action does not trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#enable RedshiftScheduledAction#enable}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#end_time RedshiftScheduledAction#end_time}

---

##### `IamRole`<sup>Optional</sup> <a name="IamRole" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.iamRole"></a>

```go
IamRole *string
```

- *Type:* *string

The IAM role to assume to run the target action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#iam_role RedshiftScheduledAction#iam_role}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

The schedule in `at( )` or `cron( )` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#schedule RedshiftScheduledAction#schedule}

---

##### `ScheduledActionDescription`<sup>Optional</sup> <a name="ScheduledActionDescription" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.scheduledActionDescription"></a>

```go
ScheduledActionDescription *string
```

- *Type:* *string

The description of the scheduled action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#scheduled_action_description RedshiftScheduledAction#scheduled_action_description}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

The start time in UTC of the scheduled action. Before this time, the scheduled action does not trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#start_time RedshiftScheduledAction#start_time}

---

##### `TargetAction`<sup>Optional</sup> <a name="TargetAction" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionConfig.property.targetAction"></a>

```go
TargetAction RedshiftScheduledActionTargetAction
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

A JSON format string of the Amazon Redshift API operation with input parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#target_action RedshiftScheduledAction#target_action}

---

### RedshiftScheduledActionTargetAction <a name="RedshiftScheduledActionTargetAction" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftscheduledaction"

&redshiftscheduledaction.RedshiftScheduledActionTargetAction {
	PauseCluster: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster,
	ResizeCluster: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster,
	ResumeCluster: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.pauseCluster">PauseCluster</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a></code> | Describes a pause cluster operation. For example, a scheduled action to run the `PauseCluster` API operation. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resizeCluster">ResizeCluster</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a></code> | Describes a resize cluster operation. For example, a scheduled action to run the `ResizeCluster` API operation. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resumeCluster">ResumeCluster</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a></code> | Describes a resume cluster operation. For example, a scheduled action to run the `ResumeCluster` API operation. |

---

##### `PauseCluster`<sup>Optional</sup> <a name="PauseCluster" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.pauseCluster"></a>

```go
PauseCluster RedshiftScheduledActionTargetActionPauseCluster
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

Describes a pause cluster operation. For example, a scheduled action to run the `PauseCluster` API operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#pause_cluster RedshiftScheduledAction#pause_cluster}

---

##### `ResizeCluster`<sup>Optional</sup> <a name="ResizeCluster" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resizeCluster"></a>

```go
ResizeCluster RedshiftScheduledActionTargetActionResizeCluster
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

Describes a resize cluster operation. For example, a scheduled action to run the `ResizeCluster` API operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#resize_cluster RedshiftScheduledAction#resize_cluster}

---

##### `ResumeCluster`<sup>Optional</sup> <a name="ResumeCluster" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resumeCluster"></a>

```go
ResumeCluster RedshiftScheduledActionTargetActionResumeCluster
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

Describes a resume cluster operation. For example, a scheduled action to run the `ResumeCluster` API operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#resume_cluster RedshiftScheduledAction#resume_cluster}

---

### RedshiftScheduledActionTargetActionPauseCluster <a name="RedshiftScheduledActionTargetActionPauseCluster" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftscheduledaction"

&redshiftscheduledaction.RedshiftScheduledActionTargetActionPauseCluster {
	ClusterIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}. |

---

##### `ClusterIdentifier`<sup>Optional</sup> <a name="ClusterIdentifier" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster.property.clusterIdentifier"></a>

```go
ClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}.

---

### RedshiftScheduledActionTargetActionResizeCluster <a name="RedshiftScheduledActionTargetActionResizeCluster" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftscheduledaction"

&redshiftscheduledaction.RedshiftScheduledActionTargetActionResizeCluster {
	Classic: interface{},
	ClusterIdentifier: *string,
	ClusterType: *string,
	NodeType: *string,
	NumberOfNodes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.classic">Classic</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#classic RedshiftScheduledAction#classic}. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterType">ClusterType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#cluster_type RedshiftScheduledAction#cluster_type}. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.nodeType">NodeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#node_type RedshiftScheduledAction#node_type}. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#number_of_nodes RedshiftScheduledAction#number_of_nodes}. |

---

##### `Classic`<sup>Optional</sup> <a name="Classic" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.classic"></a>

```go
Classic interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#classic RedshiftScheduledAction#classic}.

---

##### `ClusterIdentifier`<sup>Optional</sup> <a name="ClusterIdentifier" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterIdentifier"></a>

```go
ClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}.

---

##### `ClusterType`<sup>Optional</sup> <a name="ClusterType" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterType"></a>

```go
ClusterType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#cluster_type RedshiftScheduledAction#cluster_type}.

---

##### `NodeType`<sup>Optional</sup> <a name="NodeType" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.nodeType"></a>

```go
NodeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#node_type RedshiftScheduledAction#node_type}.

---

##### `NumberOfNodes`<sup>Optional</sup> <a name="NumberOfNodes" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.numberOfNodes"></a>

```go
NumberOfNodes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#number_of_nodes RedshiftScheduledAction#number_of_nodes}.

---

### RedshiftScheduledActionTargetActionResumeCluster <a name="RedshiftScheduledActionTargetActionResumeCluster" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftscheduledaction"

&redshiftscheduledaction.RedshiftScheduledActionTargetActionResumeCluster {
	ClusterIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}. |

---

##### `ClusterIdentifier`<sup>Optional</sup> <a name="ClusterIdentifier" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster.property.clusterIdentifier"></a>

```go
ClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftScheduledActionTargetActionOutputReference <a name="RedshiftScheduledActionTargetActionOutputReference" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftscheduledaction"

redshiftscheduledaction.NewRedshiftScheduledActionTargetActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedshiftScheduledActionTargetActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putPauseCluster">PutPauseCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResizeCluster">PutResizeCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResumeCluster">PutResumeCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetPauseCluster">ResetPauseCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResizeCluster">ResetResizeCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResumeCluster">ResetResumeCluster</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPauseCluster` <a name="PutPauseCluster" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putPauseCluster"></a>

```go
func PutPauseCluster(value RedshiftScheduledActionTargetActionPauseCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putPauseCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

---

##### `PutResizeCluster` <a name="PutResizeCluster" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResizeCluster"></a>

```go
func PutResizeCluster(value RedshiftScheduledActionTargetActionResizeCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResizeCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

---

##### `PutResumeCluster` <a name="PutResumeCluster" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResumeCluster"></a>

```go
func PutResumeCluster(value RedshiftScheduledActionTargetActionResumeCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResumeCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

---

##### `ResetPauseCluster` <a name="ResetPauseCluster" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetPauseCluster"></a>

```go
func ResetPauseCluster()
```

##### `ResetResizeCluster` <a name="ResetResizeCluster" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResizeCluster"></a>

```go
func ResetResizeCluster()
```

##### `ResetResumeCluster` <a name="ResetResumeCluster" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResumeCluster"></a>

```go
func ResetResumeCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseCluster">PauseCluster</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference">RedshiftScheduledActionTargetActionPauseClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeCluster">ResizeCluster</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference">RedshiftScheduledActionTargetActionResizeClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeCluster">ResumeCluster</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference">RedshiftScheduledActionTargetActionResumeClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseClusterInput">PauseClusterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeClusterInput">ResizeClusterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeClusterInput">ResumeClusterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PauseCluster`<sup>Required</sup> <a name="PauseCluster" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseCluster"></a>

```go
func PauseCluster() RedshiftScheduledActionTargetActionPauseClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference">RedshiftScheduledActionTargetActionPauseClusterOutputReference</a>

---

##### `ResizeCluster`<sup>Required</sup> <a name="ResizeCluster" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeCluster"></a>

```go
func ResizeCluster() RedshiftScheduledActionTargetActionResizeClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference">RedshiftScheduledActionTargetActionResizeClusterOutputReference</a>

---

##### `ResumeCluster`<sup>Required</sup> <a name="ResumeCluster" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeCluster"></a>

```go
func ResumeCluster() RedshiftScheduledActionTargetActionResumeClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference">RedshiftScheduledActionTargetActionResumeClusterOutputReference</a>

---

##### `PauseClusterInput`<sup>Optional</sup> <a name="PauseClusterInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseClusterInput"></a>

```go
func PauseClusterInput() interface{}
```

- *Type:* interface{}

---

##### `ResizeClusterInput`<sup>Optional</sup> <a name="ResizeClusterInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeClusterInput"></a>

```go
func ResizeClusterInput() interface{}
```

- *Type:* interface{}

---

##### `ResumeClusterInput`<sup>Optional</sup> <a name="ResumeClusterInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeClusterInput"></a>

```go
func ResumeClusterInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftScheduledActionTargetActionPauseClusterOutputReference <a name="RedshiftScheduledActionTargetActionPauseClusterOutputReference" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftscheduledaction"

redshiftscheduledaction.NewRedshiftScheduledActionTargetActionPauseClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedshiftScheduledActionTargetActionPauseClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.resetClusterIdentifier">ResetClusterIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterIdentifier` <a name="ResetClusterIdentifier" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.resetClusterIdentifier"></a>

```go
func ResetClusterIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifierInput"></a>

```go
func ClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifier"></a>

```go
func ClusterIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftScheduledActionTargetActionResizeClusterOutputReference <a name="RedshiftScheduledActionTargetActionResizeClusterOutputReference" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftscheduledaction"

redshiftscheduledaction.NewRedshiftScheduledActionTargetActionResizeClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedshiftScheduledActionTargetActionResizeClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClassic">ResetClassic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClusterIdentifier">ResetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClusterType">ResetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNodeType">ResetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNumberOfNodes">ResetNumberOfNodes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassic` <a name="ResetClassic" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClassic"></a>

```go
func ResetClassic()
```

##### `ResetClusterIdentifier` <a name="ResetClusterIdentifier" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClusterIdentifier"></a>

```go
func ResetClusterIdentifier()
```

##### `ResetClusterType` <a name="ResetClusterType" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClusterType"></a>

```go
func ResetClusterType()
```

##### `ResetNodeType` <a name="ResetNodeType" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNodeType"></a>

```go
func ResetNodeType()
```

##### `ResetNumberOfNodes` <a name="ResetNumberOfNodes" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNumberOfNodes"></a>

```go
func ResetNumberOfNodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classicInput">ClassicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterTypeInput">ClusterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeTypeInput">NodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodesInput">NumberOfNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classic">Classic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterType">ClusterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassicInput`<sup>Optional</sup> <a name="ClassicInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classicInput"></a>

```go
func ClassicInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifierInput"></a>

```go
func ClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `ClusterTypeInput`<sup>Optional</sup> <a name="ClusterTypeInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterTypeInput"></a>

```go
func ClusterTypeInput() *string
```

- *Type:* *string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeTypeInput"></a>

```go
func NodeTypeInput() *string
```

- *Type:* *string

---

##### `NumberOfNodesInput`<sup>Optional</sup> <a name="NumberOfNodesInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodesInput"></a>

```go
func NumberOfNodesInput() *f64
```

- *Type:* *f64

---

##### `Classic`<sup>Required</sup> <a name="Classic" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classic"></a>

```go
func Classic() interface{}
```

- *Type:* interface{}

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifier"></a>

```go
func ClusterIdentifier() *string
```

- *Type:* *string

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterType"></a>

```go
func ClusterType() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodes"></a>

```go
func NumberOfNodes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftScheduledActionTargetActionResumeClusterOutputReference <a name="RedshiftScheduledActionTargetActionResumeClusterOutputReference" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftscheduledaction"

redshiftscheduledaction.NewRedshiftScheduledActionTargetActionResumeClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedshiftScheduledActionTargetActionResumeClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.resetClusterIdentifier">ResetClusterIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterIdentifier` <a name="ResetClusterIdentifier" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.resetClusterIdentifier"></a>

```go
func ResetClusterIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifierInput"></a>

```go
func ClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifier"></a>

```go
func ClusterIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



