# `schedulerSchedule` Submodule <a name="`schedulerSchedule` Submodule" id="@cdktn/provider-awscc.schedulerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SchedulerSchedule <a name="SchedulerSchedule" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule awscc_scheduler_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerSchedule(scope Construct, id *string, config SchedulerScheduleConfig) SchedulerSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig">SchedulerScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig">SchedulerScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putFlexibleTimeWindow">PutFlexibleTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetScheduleExpressionTimezone">ResetScheduleExpressionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFlexibleTimeWindow` <a name="PutFlexibleTimeWindow" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putFlexibleTimeWindow"></a>

```go
func PutFlexibleTimeWindow(value SchedulerScheduleFlexibleTimeWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putFlexibleTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget"></a>

```go
func PutTarget(value SchedulerScheduleTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetEndDate"></a>

```go
func ResetEndDate()
```

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetGroupName"></a>

```go
func ResetGroupName()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetName"></a>

```go
func ResetName()
```

##### `ResetScheduleExpressionTimezone` <a name="ResetScheduleExpressionTimezone" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetScheduleExpressionTimezone"></a>

```go
func ResetScheduleExpressionTimezone()
```

##### `ResetStartDate` <a name="ResetStartDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetStartDate"></a>

```go
func ResetStartDate()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SchedulerSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.SchedulerSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.SchedulerSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.SchedulerSchedule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.SchedulerSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SchedulerSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SchedulerSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SchedulerSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SchedulerSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindow">FlexibleTimeWindow</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference">SchedulerScheduleFlexibleTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.target">Target</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference">SchedulerScheduleTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.endDateInput">EndDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindowInput">FlexibleTimeWindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.groupNameInput">GroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezoneInput">ScheduleExpressionTimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.startDateInput">StartDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.targetInput">TargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `FlexibleTimeWindow`<sup>Required</sup> <a name="FlexibleTimeWindow" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindow"></a>

```go
func FlexibleTimeWindow() SchedulerScheduleFlexibleTimeWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference">SchedulerScheduleFlexibleTimeWindowOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.target"></a>

```go
func Target() SchedulerScheduleTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference">SchedulerScheduleTargetOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.endDateInput"></a>

```go
func EndDateInput() *string
```

- *Type:* *string

---

##### `FlexibleTimeWindowInput`<sup>Optional</sup> <a name="FlexibleTimeWindowInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindowInput"></a>

```go
func FlexibleTimeWindowInput() interface{}
```

- *Type:* interface{}

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.groupNameInput"></a>

```go
func GroupNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionInput"></a>

```go
func ScheduleExpressionInput() *string
```

- *Type:* *string

---

##### `ScheduleExpressionTimezoneInput`<sup>Optional</sup> <a name="ScheduleExpressionTimezoneInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezoneInput"></a>

```go
func ScheduleExpressionTimezoneInput() *string
```

- *Type:* *string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.startDateInput"></a>

```go
func StartDateInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.targetInput"></a>

```go
func TargetInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `ScheduleExpressionTimezone`<sup>Required</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezone"></a>

```go
func ScheduleExpressionTimezone() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SchedulerScheduleConfig <a name="SchedulerScheduleConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

&schedulerschedule.SchedulerScheduleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FlexibleTimeWindow: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow,
	ScheduleExpression: *string,
	Target: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.schedulerSchedule.SchedulerScheduleTarget,
	Description: *string,
	EndDate: *string,
	GroupName: *string,
	KmsKeyArn: *string,
	Name: *string,
	ScheduleExpressionTimezone: *string,
	StartDate: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.flexibleTimeWindow">FlexibleTimeWindow</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a></code> | Flexible time window allows configuration of a window within which a schedule can be invoked. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | The scheduling expression. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.target">Target</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a></code> | The schedule target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.description">Description</a></code> | <code>*string</code> | The description of the schedule. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.endDate">EndDate</a></code> | <code>*string</code> | The date, in UTC, before which the schedule can invoke its target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.groupName">GroupName</a></code> | <code>*string</code> | The name of the schedule group to associate with this schedule. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | The ARN for a KMS Key that will be used to encrypt customer data. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>*string</code> | The timezone in which the scheduling expression is evaluated. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.startDate">StartDate</a></code> | <code>*string</code> | The date, in UTC, after which the schedule can begin invoking its target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.state">State</a></code> | <code>*string</code> | Specifies whether the schedule is enabled or disabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FlexibleTimeWindow`<sup>Required</sup> <a name="FlexibleTimeWindow" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.flexibleTimeWindow"></a>

```go
FlexibleTimeWindow SchedulerScheduleFlexibleTimeWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

Flexible time window allows configuration of a window within which a schedule can be invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#flexible_time_window SchedulerSchedule#flexible_time_window}

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpression"></a>

```go
ScheduleExpression *string
```

- *Type:* *string

The scheduling expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#schedule_expression SchedulerSchedule#schedule_expression}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.target"></a>

```go
Target SchedulerScheduleTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

The schedule target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#target SchedulerSchedule#target}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#description SchedulerSchedule#description}

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.endDate"></a>

```go
EndDate *string
```

- *Type:* *string

The date, in UTC, before which the schedule can invoke its target.

Depending on the schedule's recurrence expression, invocations might stop on, or before, the EndDate you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#end_date SchedulerSchedule#end_date}

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.groupName"></a>

```go
GroupName *string
```

- *Type:* *string

The name of the schedule group to associate with this schedule.

If you omit this, the default schedule group is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#group_name SchedulerSchedule#group_name}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

The ARN for a KMS Key that will be used to encrypt customer data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#kms_key_arn SchedulerSchedule#kms_key_arn}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}.

---

##### `ScheduleExpressionTimezone`<sup>Optional</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpressionTimezone"></a>

```go
ScheduleExpressionTimezone *string
```

- *Type:* *string

The timezone in which the scheduling expression is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#schedule_expression_timezone SchedulerSchedule#schedule_expression_timezone}

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.startDate"></a>

```go
StartDate *string
```

- *Type:* *string

The date, in UTC, after which the schedule can begin invoking its target.

Depending on the schedule's recurrence expression, invocations might occur on, or after, the StartDate you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#start_date SchedulerSchedule#start_date}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Specifies whether the schedule is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#state SchedulerSchedule#state}

---

### SchedulerScheduleFlexibleTimeWindow <a name="SchedulerScheduleFlexibleTimeWindow" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

&schedulerschedule.SchedulerScheduleFlexibleTimeWindow {
	Mode: *string,
	MaximumWindowInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.mode">Mode</a></code> | <code>*string</code> | Determines whether the schedule is executed within a flexible time window. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.maximumWindowInMinutes">MaximumWindowInMinutes</a></code> | <code>*f64</code> | The maximum time window during which a schedule can be invoked. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Determines whether the schedule is executed within a flexible time window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#mode SchedulerSchedule#mode}

---

##### `MaximumWindowInMinutes`<sup>Optional</sup> <a name="MaximumWindowInMinutes" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.maximumWindowInMinutes"></a>

```go
MaximumWindowInMinutes *f64
```

- *Type:* *f64

The maximum time window during which a schedule can be invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#maximum_window_in_minutes SchedulerSchedule#maximum_window_in_minutes}

---

### SchedulerScheduleTarget <a name="SchedulerScheduleTarget" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

&schedulerschedule.SchedulerScheduleTarget {
	Arn: *string,
	RoleArn: *string,
	DeadLetterConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig,
	EcsParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters,
	EventBridgeParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters,
	Input: *string,
	KinesisParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters,
	RetryPolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy,
	SageMakerPipelineParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters,
	SqsParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.arn">Arn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the IAM role to be used for this target when the schedule is triggered. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.deadLetterConfig">DeadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a></code> | A DeadLetterConfig object that contains information about a dead-letter queue configuration. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.ecsParameters">EcsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a></code> | The custom parameters to be used when the target is an Amazon ECS task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.eventBridgeParameters">EventBridgeParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a></code> | EventBridge PutEvent predefined target type. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.input">Input</a></code> | <code>*string</code> | The text, or well-formed JSON, passed to the target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.kinesisParameters">KinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a></code> | The custom parameter you can use to control the shard to which EventBridge Scheduler sends the event. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a></code> | A RetryPolicy object that includes information about the retry policy settings. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.sageMakerPipelineParameters">SageMakerPipelineParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a></code> | These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on AWS EventBridge Scheduler schedules. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.sqsParameters">SqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a></code> | Contains the message group ID to use when the target is a FIFO queue. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#arn SchedulerSchedule#arn}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the IAM role to be used for this target when the schedule is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#role_arn SchedulerSchedule#role_arn}

---

##### `DeadLetterConfig`<sup>Optional</sup> <a name="DeadLetterConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.deadLetterConfig"></a>

```go
DeadLetterConfig SchedulerScheduleTargetDeadLetterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

A DeadLetterConfig object that contains information about a dead-letter queue configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#dead_letter_config SchedulerSchedule#dead_letter_config}

---

##### `EcsParameters`<sup>Optional</sup> <a name="EcsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.ecsParameters"></a>

```go
EcsParameters SchedulerScheduleTargetEcsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

The custom parameters to be used when the target is an Amazon ECS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#ecs_parameters SchedulerSchedule#ecs_parameters}

---

##### `EventBridgeParameters`<sup>Optional</sup> <a name="EventBridgeParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.eventBridgeParameters"></a>

```go
EventBridgeParameters SchedulerScheduleTargetEventBridgeParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a>

EventBridge PutEvent predefined target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#event_bridge_parameters SchedulerSchedule#event_bridge_parameters}

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.input"></a>

```go
Input *string
```

- *Type:* *string

The text, or well-formed JSON, passed to the target.

If you are configuring a templated Lambda, AWS Step Functions, or Amazon EventBridge target, the input must be a well-formed JSON. For all other target types, a JSON is not required. If you do not specify anything for this field, EventBridge Scheduler delivers a default notification to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#input SchedulerSchedule#input}

---

##### `KinesisParameters`<sup>Optional</sup> <a name="KinesisParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.kinesisParameters"></a>

```go
KinesisParameters SchedulerScheduleTargetKinesisParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

The custom parameter you can use to control the shard to which EventBridge Scheduler sends the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#kinesis_parameters SchedulerSchedule#kinesis_parameters}

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.retryPolicy"></a>

```go
RetryPolicy SchedulerScheduleTargetRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

A RetryPolicy object that includes information about the retry policy settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#retry_policy SchedulerSchedule#retry_policy}

---

##### `SageMakerPipelineParameters`<sup>Optional</sup> <a name="SageMakerPipelineParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.sageMakerPipelineParameters"></a>

```go
SageMakerPipelineParameters SchedulerScheduleTargetSageMakerPipelineParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a>

These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on AWS EventBridge Scheduler schedules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#sage_maker_pipeline_parameters SchedulerSchedule#sage_maker_pipeline_parameters}

---

##### `SqsParameters`<sup>Optional</sup> <a name="SqsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.sqsParameters"></a>

```go
SqsParameters SchedulerScheduleTargetSqsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

Contains the message group ID to use when the target is a FIFO queue.

If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#sqs_parameters SchedulerSchedule#sqs_parameters}

---

### SchedulerScheduleTargetDeadLetterConfig <a name="SchedulerScheduleTargetDeadLetterConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

&schedulerschedule.SchedulerScheduleTargetDeadLetterConfig {
	Arn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig.property.arn">Arn</a></code> | <code>*string</code> | The ARN of the SQS queue specified as the target for the dead-letter queue. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

The ARN of the SQS queue specified as the target for the dead-letter queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#arn SchedulerSchedule#arn}

---

### SchedulerScheduleTargetEcsParameters <a name="SchedulerScheduleTargetEcsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

&schedulerschedule.SchedulerScheduleTargetEcsParameters {
	CapacityProviderStrategy: interface{},
	EnableEcsManagedTags: interface{},
	EnableExecuteCommand: interface{},
	Group: *string,
	LaunchType: *string,
	NetworkConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration,
	PlacementConstraints: interface{},
	PlacementStrategy: interface{},
	PlatformVersion: *string,
	PropagateTags: *string,
	ReferenceId: *string,
	Tags: interface{},
	TaskCount: *f64,
	TaskDefinitionArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.capacityProviderStrategy">CapacityProviderStrategy</a></code> | <code>interface{}</code> | The capacity provider strategy to use for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableEcsManagedTags">EnableEcsManagedTags</a></code> | <code>interface{}</code> | Specifies whether to enable Amazon ECS managed tags for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableExecuteCommand">EnableExecuteCommand</a></code> | <code>interface{}</code> | Whether or not to enable the execute command functionality for the containers in this task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.group">Group</a></code> | <code>*string</code> | Specifies an ECS task group for the task. The maximum length is 255 characters. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.launchType">LaunchType</a></code> | <code>*string</code> | Specifies the launch type on which your task is running. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a></code> | This structure specifies the network configuration for an ECS task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementConstraints">PlacementConstraints</a></code> | <code>interface{}</code> | An array of placement constraint objects to use for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementStrategy">PlacementStrategy</a></code> | <code>interface{}</code> | The placement strategy objects to use for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.platformVersion">PlatformVersion</a></code> | <code>*string</code> | Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.propagateTags">PropagateTags</a></code> | <code>*string</code> | Specifies whether to propagate the tags from the task definition to the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.referenceId">ReferenceId</a></code> | <code>*string</code> | The reference ID to use for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.tags">Tags</a></code> | <code>interface{}</code> | The metadata that you apply to the task to help you categorize and organize them. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskCount">TaskCount</a></code> | <code>*f64</code> | The number of tasks to create based on TaskDefinition. The default is 1. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskDefinitionArn">TaskDefinitionArn</a></code> | <code>*string</code> | The ARN of the task definition to use if the event target is an Amazon ECS task. |

---

##### `CapacityProviderStrategy`<sup>Optional</sup> <a name="CapacityProviderStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.capacityProviderStrategy"></a>

```go
CapacityProviderStrategy interface{}
```

- *Type:* interface{}

The capacity provider strategy to use for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#capacity_provider_strategy SchedulerSchedule#capacity_provider_strategy}

---

##### `EnableEcsManagedTags`<sup>Optional</sup> <a name="EnableEcsManagedTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableEcsManagedTags"></a>

```go
EnableEcsManagedTags interface{}
```

- *Type:* interface{}

Specifies whether to enable Amazon ECS managed tags for the task.

For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#enable_ecs_managed_tags SchedulerSchedule#enable_ecs_managed_tags}

---

##### `EnableExecuteCommand`<sup>Optional</sup> <a name="EnableExecuteCommand" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableExecuteCommand"></a>

```go
EnableExecuteCommand interface{}
```

- *Type:* interface{}

Whether or not to enable the execute command functionality for the containers in this task.

If true, this enables execute command functionality on all containers in the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#enable_execute_command SchedulerSchedule#enable_execute_command}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.group"></a>

```go
Group *string
```

- *Type:* *string

Specifies an ECS task group for the task. The maximum length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#group SchedulerSchedule#group}

---

##### `LaunchType`<sup>Optional</sup> <a name="LaunchType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.launchType"></a>

```go
LaunchType *string
```

- *Type:* *string

Specifies the launch type on which your task is running.

The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The FARGATE value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see AWS Fargate on Amazon ECS in the Amazon Elastic Container Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#launch_type SchedulerSchedule#launch_type}

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.networkConfiguration"></a>

```go
NetworkConfiguration SchedulerScheduleTargetEcsParametersNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

This structure specifies the network configuration for an ECS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#network_configuration SchedulerSchedule#network_configuration}

---

##### `PlacementConstraints`<sup>Optional</sup> <a name="PlacementConstraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementConstraints"></a>

```go
PlacementConstraints interface{}
```

- *Type:* interface{}

An array of placement constraint objects to use for the task.

You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#placement_constraints SchedulerSchedule#placement_constraints}

---

##### `PlacementStrategy`<sup>Optional</sup> <a name="PlacementStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementStrategy"></a>

```go
PlacementStrategy interface{}
```

- *Type:* interface{}

The placement strategy objects to use for the task.

You can specify a maximum of five strategy rules per task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#placement_strategy SchedulerSchedule#placement_strategy}

---

##### `PlatformVersion`<sup>Optional</sup> <a name="PlatformVersion" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.platformVersion"></a>

```go
PlatformVersion *string
```

- *Type:* *string

Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#platform_version SchedulerSchedule#platform_version}

---

##### `PropagateTags`<sup>Optional</sup> <a name="PropagateTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.propagateTags"></a>

```go
PropagateTags *string
```

- *Type:* *string

Specifies whether to propagate the tags from the task definition to the task.

If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#propagate_tags SchedulerSchedule#propagate_tags}

---

##### `ReferenceId`<sup>Optional</sup> <a name="ReferenceId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.referenceId"></a>

```go
ReferenceId *string
```

- *Type:* *string

The reference ID to use for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#reference_id SchedulerSchedule#reference_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The metadata that you apply to the task to help you categorize and organize them.

Each tag consists of a key and an optional value, both of which you define. To learn more, see RunTask in the Amazon ECS API Reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#tags SchedulerSchedule#tags}

---

##### `TaskCount`<sup>Optional</sup> <a name="TaskCount" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskCount"></a>

```go
TaskCount *f64
```

- *Type:* *f64

The number of tasks to create based on TaskDefinition. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#task_count SchedulerSchedule#task_count}

---

##### `TaskDefinitionArn`<sup>Optional</sup> <a name="TaskDefinitionArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskDefinitionArn"></a>

```go
TaskDefinitionArn *string
```

- *Type:* *string

The ARN of the task definition to use if the event target is an Amazon ECS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#task_definition_arn SchedulerSchedule#task_definition_arn}

---

### SchedulerScheduleTargetEcsParametersCapacityProviderStrategy <a name="SchedulerScheduleTargetEcsParametersCapacityProviderStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

&schedulerschedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy {
	Base: *f64,
	CapacityProvider: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.base">Base</a></code> | <code>*f64</code> | The base value designates how many tasks, at a minimum, to run on the specified capacity provider. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.capacityProvider">CapacityProvider</a></code> | <code>*string</code> | The short name of the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.weight">Weight</a></code> | <code>*f64</code> | The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. |

---

##### `Base`<sup>Optional</sup> <a name="Base" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.base"></a>

```go
Base *f64
```

- *Type:* *f64

The base value designates how many tasks, at a minimum, to run on the specified capacity provider.

Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#base SchedulerSchedule#base}

---

##### `CapacityProvider`<sup>Optional</sup> <a name="CapacityProvider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.capacityProvider"></a>

```go
CapacityProvider *string
```

- *Type:* *string

The short name of the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#capacity_provider SchedulerSchedule#capacity_provider}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider.

The weight value is taken into consideration after the base value, if defined, is satisfied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#weight SchedulerSchedule#weight}

---

### SchedulerScheduleTargetEcsParametersNetworkConfiguration <a name="SchedulerScheduleTargetEcsParametersNetworkConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

&schedulerschedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration {
	AwsvpcConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.property.awsvpcConfiguration">AwsvpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a></code> | This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. |

---

##### `AwsvpcConfiguration`<sup>Optional</sup> <a name="AwsvpcConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.property.awsvpcConfiguration"></a>

```go
AwsvpcConfiguration SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a>

This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used.

This structure is relevant only for ECS tasks that use the awsvpc network mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#awsvpc_configuration SchedulerSchedule#awsvpc_configuration}

---

### SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration <a name="SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

&schedulerschedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration {
	AssignPublicIp: *string,
	SecurityGroups: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.assignPublicIp">AssignPublicIp</a></code> | <code>*string</code> | Specifies whether the task's elastic network interface receives a public IP address. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Specifies the security groups associated with the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Specifies the subnets associated with the task. |

---

##### `AssignPublicIp`<sup>Optional</sup> <a name="AssignPublicIp" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.assignPublicIp"></a>

```go
AssignPublicIp *string
```

- *Type:* *string

Specifies whether the task's elastic network interface receives a public IP address.

You can specify ENABLED only when LaunchType in EcsParameters is set to FARGATE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#assign_public_ip SchedulerSchedule#assign_public_ip}

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Specifies the security groups associated with the task.

These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#security_groups SchedulerSchedule#security_groups}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Specifies the subnets associated with the task.

These subnets must all be in the same VPC. You can specify as many as 16 subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#subnets SchedulerSchedule#subnets}

---

### SchedulerScheduleTargetEcsParametersPlacementConstraints <a name="SchedulerScheduleTargetEcsParametersPlacementConstraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

&schedulerschedule.SchedulerScheduleTargetEcsParametersPlacementConstraints {
	Expression: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.expression">Expression</a></code> | <code>*string</code> | A cluster query language expression to apply to the constraint. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.type">Type</a></code> | <code>*string</code> | The type of constraint. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

A cluster query language expression to apply to the constraint.

You cannot specify an expression if the constraint type is distinctInstance. To learn more, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#expression SchedulerSchedule#expression}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of constraint.

Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#type SchedulerSchedule#type}

---

### SchedulerScheduleTargetEcsParametersPlacementStrategy <a name="SchedulerScheduleTargetEcsParametersPlacementStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

&schedulerschedule.SchedulerScheduleTargetEcsParametersPlacementStrategy {
	Field: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.field">Field</a></code> | <code>*string</code> | The field to apply the placement strategy against. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.type">Type</a></code> | <code>*string</code> | The type of placement strategy. |

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.field"></a>

```go
Field *string
```

- *Type:* *string

The field to apply the placement strategy against.

For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#field SchedulerSchedule#field}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of placement strategy.

The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#type SchedulerSchedule#type}

---

### SchedulerScheduleTargetEventBridgeParameters <a name="SchedulerScheduleTargetEventBridgeParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

&schedulerschedule.SchedulerScheduleTargetEventBridgeParameters {
	DetailType: *string,
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.property.detailType">DetailType</a></code> | <code>*string</code> | Free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.property.source">Source</a></code> | <code>*string</code> | The source of the event. |

---

##### `DetailType`<sup>Optional</sup> <a name="DetailType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.property.detailType"></a>

```go
DetailType *string
```

- *Type:* *string

Free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#detail_type SchedulerSchedule#detail_type}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.property.source"></a>

```go
Source *string
```

- *Type:* *string

The source of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#source SchedulerSchedule#source}

---

### SchedulerScheduleTargetKinesisParameters <a name="SchedulerScheduleTargetKinesisParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

&schedulerschedule.SchedulerScheduleTargetKinesisParameters {
	PartitionKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters.property.partitionKey">PartitionKey</a></code> | <code>*string</code> | The custom parameter used as the Kinesis partition key. |

---

##### `PartitionKey`<sup>Optional</sup> <a name="PartitionKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters.property.partitionKey"></a>

```go
PartitionKey *string
```

- *Type:* *string

The custom parameter used as the Kinesis partition key.

For more information, see Amazon Kinesis Streams Key Concepts in the Amazon Kinesis Streams Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#partition_key SchedulerSchedule#partition_key}

---

### SchedulerScheduleTargetRetryPolicy <a name="SchedulerScheduleTargetRetryPolicy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

&schedulerschedule.SchedulerScheduleTargetRetryPolicy {
	MaximumEventAgeInSeconds: *f64,
	MaximumRetryAttempts: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumEventAgeInSeconds">MaximumEventAgeInSeconds</a></code> | <code>*f64</code> | The maximum amount of time, in seconds, to continue to make retry attempts. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumRetryAttempts">MaximumRetryAttempts</a></code> | <code>*f64</code> | The maximum number of retry attempts to make before the request fails. |

---

##### `MaximumEventAgeInSeconds`<sup>Optional</sup> <a name="MaximumEventAgeInSeconds" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumEventAgeInSeconds"></a>

```go
MaximumEventAgeInSeconds *f64
```

- *Type:* *f64

The maximum amount of time, in seconds, to continue to make retry attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#maximum_event_age_in_seconds SchedulerSchedule#maximum_event_age_in_seconds}

---

##### `MaximumRetryAttempts`<sup>Optional</sup> <a name="MaximumRetryAttempts" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumRetryAttempts"></a>

```go
MaximumRetryAttempts *f64
```

- *Type:* *f64

The maximum number of retry attempts to make before the request fails.

Retry attempts with exponential backoff continue until either the maximum number of attempts is made or until the duration of the MaximumEventAgeInSeconds is reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#maximum_retry_attempts SchedulerSchedule#maximum_retry_attempts}

---

### SchedulerScheduleTargetSageMakerPipelineParameters <a name="SchedulerScheduleTargetSageMakerPipelineParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

&schedulerschedule.SchedulerScheduleTargetSageMakerPipelineParameters {
	PipelineParameterList: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters.property.pipelineParameterList">PipelineParameterList</a></code> | <code>interface{}</code> | List of Parameter names and values for SageMaker Model Building Pipeline execution. |

---

##### `PipelineParameterList`<sup>Optional</sup> <a name="PipelineParameterList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters.property.pipelineParameterList"></a>

```go
PipelineParameterList interface{}
```

- *Type:* interface{}

List of Parameter names and values for SageMaker Model Building Pipeline execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#pipeline_parameter_list SchedulerSchedule#pipeline_parameter_list}

---

### SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct <a name="SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

&schedulerschedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.property.name">Name</a></code> | <code>*string</code> | Name of parameter to start execution of a SageMaker Model Building Pipeline. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.property.value">Value</a></code> | <code>*string</code> | Value of parameter to start execution of a SageMaker Model Building Pipeline. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of parameter to start execution of a SageMaker Model Building Pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of parameter to start execution of a SageMaker Model Building Pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#value SchedulerSchedule#value}

---

### SchedulerScheduleTargetSqsParameters <a name="SchedulerScheduleTargetSqsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

&schedulerschedule.SchedulerScheduleTargetSqsParameters {
	MessageGroupId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters.property.messageGroupId">MessageGroupId</a></code> | <code>*string</code> | The FIFO message group ID to use as the target. |

---

##### `MessageGroupId`<sup>Optional</sup> <a name="MessageGroupId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters.property.messageGroupId"></a>

```go
MessageGroupId *string
```

- *Type:* *string

The FIFO message group ID to use as the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#message_group_id SchedulerSchedule#message_group_id}

---

## Classes <a name="Classes" id="Classes"></a>

### SchedulerScheduleFlexibleTimeWindowOutputReference <a name="SchedulerScheduleFlexibleTimeWindowOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleFlexibleTimeWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SchedulerScheduleFlexibleTimeWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resetMaximumWindowInMinutes">ResetMaximumWindowInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumWindowInMinutes` <a name="ResetMaximumWindowInMinutes" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resetMaximumWindowInMinutes"></a>

```go
func ResetMaximumWindowInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutesInput">MaximumWindowInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutes">MaximumWindowInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumWindowInMinutesInput`<sup>Optional</sup> <a name="MaximumWindowInMinutesInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutesInput"></a>

```go
func MaximumWindowInMinutesInput() *f64
```

- *Type:* *f64

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `MaximumWindowInMinutes`<sup>Required</sup> <a name="MaximumWindowInMinutes" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutes"></a>

```go
func MaximumWindowInMinutes() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetDeadLetterConfigOutputReference <a name="SchedulerScheduleTargetDeadLetterConfigOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetDeadLetterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SchedulerScheduleTargetDeadLetterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resetArn"></a>

```go
func ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList <a name="SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetEcsParametersCapacityProviderStrategyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get"></a>

```go
func Get(index *f64) SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference <a name="SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetBase">ResetBase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetCapacityProvider">ResetCapacityProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBase` <a name="ResetBase" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetBase"></a>

```go
func ResetBase()
```

##### `ResetCapacityProvider` <a name="ResetCapacityProvider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetCapacityProvider"></a>

```go
func ResetCapacityProvider()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.baseInput">BaseInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProviderInput">CapacityProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.base">Base</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider">CapacityProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseInput`<sup>Optional</sup> <a name="BaseInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.baseInput"></a>

```go
func BaseInput() *f64
```

- *Type:* *f64

---

##### `CapacityProviderInput`<sup>Optional</sup> <a name="CapacityProviderInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```go
func CapacityProviderInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.base"></a>

```go
func Base() *f64
```

- *Type:* *f64

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```go
func CapacityProvider() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference <a name="SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetAssignPublicIp">ResetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssignPublicIp` <a name="ResetAssignPublicIp" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetAssignPublicIp"></a>

```go
func ResetAssignPublicIp()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetSubnets"></a>

```go
func ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIpInput">AssignPublicIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssignPublicIpInput`<sup>Optional</sup> <a name="AssignPublicIpInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIpInput"></a>

```go
func AssignPublicIpInput() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIp"></a>

```go
func AssignPublicIp() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference <a name="SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.putAwsvpcConfiguration">PutAwsvpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resetAwsvpcConfiguration">ResetAwsvpcConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsvpcConfiguration` <a name="PutAwsvpcConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.putAwsvpcConfiguration"></a>

```go
func PutAwsvpcConfiguration(value SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.putAwsvpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a>

---

##### `ResetAwsvpcConfiguration` <a name="ResetAwsvpcConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resetAwsvpcConfiguration"></a>

```go
func ResetAwsvpcConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfiguration">AwsvpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfigurationInput">AwsvpcConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsvpcConfiguration`<sup>Required</sup> <a name="AwsvpcConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfiguration"></a>

```go
func AwsvpcConfiguration() SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference</a>

---

##### `AwsvpcConfigurationInput`<sup>Optional</sup> <a name="AwsvpcConfigurationInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfigurationInput"></a>

```go
func AwsvpcConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetEcsParametersOutputReference <a name="SchedulerScheduleTargetEcsParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetEcsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SchedulerScheduleTargetEcsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putCapacityProviderStrategy">PutCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementConstraints">PutPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementStrategy">PutPlacementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetCapacityProviderStrategy">ResetCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableEcsManagedTags">ResetEnableEcsManagedTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableExecuteCommand">ResetEnableExecuteCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetLaunchType">ResetLaunchType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementConstraints">ResetPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementStrategy">ResetPlacementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlatformVersion">ResetPlatformVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPropagateTags">ResetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetReferenceId">ResetReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskCount">ResetTaskCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskDefinitionArn">ResetTaskDefinitionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityProviderStrategy` <a name="PutCapacityProviderStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putCapacityProviderStrategy"></a>

```go
func PutCapacityProviderStrategy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putNetworkConfiguration"></a>

```go
func PutNetworkConfiguration(value SchedulerScheduleTargetEcsParametersNetworkConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

---

##### `PutPlacementConstraints` <a name="PutPlacementConstraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementConstraints"></a>

```go
func PutPlacementConstraints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementConstraints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPlacementStrategy` <a name="PutPlacementStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementStrategy"></a>

```go
func PutPlacementStrategy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementStrategy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCapacityProviderStrategy` <a name="ResetCapacityProviderStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetCapacityProviderStrategy"></a>

```go
func ResetCapacityProviderStrategy()
```

##### `ResetEnableEcsManagedTags` <a name="ResetEnableEcsManagedTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableEcsManagedTags"></a>

```go
func ResetEnableEcsManagedTags()
```

##### `ResetEnableExecuteCommand` <a name="ResetEnableExecuteCommand" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableExecuteCommand"></a>

```go
func ResetEnableExecuteCommand()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetGroup"></a>

```go
func ResetGroup()
```

##### `ResetLaunchType` <a name="ResetLaunchType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetLaunchType"></a>

```go
func ResetLaunchType()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetNetworkConfiguration"></a>

```go
func ResetNetworkConfiguration()
```

##### `ResetPlacementConstraints` <a name="ResetPlacementConstraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementConstraints"></a>

```go
func ResetPlacementConstraints()
```

##### `ResetPlacementStrategy` <a name="ResetPlacementStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementStrategy"></a>

```go
func ResetPlacementStrategy()
```

##### `ResetPlatformVersion` <a name="ResetPlatformVersion" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlatformVersion"></a>

```go
func ResetPlatformVersion()
```

##### `ResetPropagateTags` <a name="ResetPropagateTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPropagateTags"></a>

```go
func ResetPropagateTags()
```

##### `ResetReferenceId` <a name="ResetReferenceId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetReferenceId"></a>

```go
func ResetReferenceId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTaskCount` <a name="ResetTaskCount" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskCount"></a>

```go
func ResetTaskCount()
```

##### `ResetTaskDefinitionArn` <a name="ResetTaskDefinitionArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskDefinitionArn"></a>

```go
func ResetTaskDefinitionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategy">CapacityProviderStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList">SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraints">PlacementConstraints</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList">SchedulerScheduleTargetEcsParametersPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategy">PlacementStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList">SchedulerScheduleTargetEcsParametersPlacementStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategyInput">CapacityProviderStrategyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTagsInput">EnableEcsManagedTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommandInput">EnableExecuteCommandInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.groupInput">GroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchTypeInput">LaunchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraintsInput">PlacementConstraintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategyInput">PlacementStrategyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersionInput">PlatformVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTagsInput">PropagateTagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceIdInput">ReferenceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCountInput">TaskCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArnInput">TaskDefinitionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTags">EnableEcsManagedTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommand">EnableExecuteCommand</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.group">Group</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchType">LaunchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersion">PlatformVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTags">PropagateTags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceId">ReferenceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tags">Tags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCount">TaskCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArn">TaskDefinitionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityProviderStrategy`<sup>Required</sup> <a name="CapacityProviderStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategy"></a>

```go
func CapacityProviderStrategy() SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList">SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfiguration"></a>

```go
func NetworkConfiguration() SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference</a>

---

##### `PlacementConstraints`<sup>Required</sup> <a name="PlacementConstraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraints"></a>

```go
func PlacementConstraints() SchedulerScheduleTargetEcsParametersPlacementConstraintsList
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList">SchedulerScheduleTargetEcsParametersPlacementConstraintsList</a>

---

##### `PlacementStrategy`<sup>Required</sup> <a name="PlacementStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategy"></a>

```go
func PlacementStrategy() SchedulerScheduleTargetEcsParametersPlacementStrategyList
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList">SchedulerScheduleTargetEcsParametersPlacementStrategyList</a>

---

##### `CapacityProviderStrategyInput`<sup>Optional</sup> <a name="CapacityProviderStrategyInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategyInput"></a>

```go
func CapacityProviderStrategyInput() interface{}
```

- *Type:* interface{}

---

##### `EnableEcsManagedTagsInput`<sup>Optional</sup> <a name="EnableEcsManagedTagsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTagsInput"></a>

```go
func EnableEcsManagedTagsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableExecuteCommandInput`<sup>Optional</sup> <a name="EnableExecuteCommandInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommandInput"></a>

```go
func EnableExecuteCommandInput() interface{}
```

- *Type:* interface{}

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.groupInput"></a>

```go
func GroupInput() *string
```

- *Type:* *string

---

##### `LaunchTypeInput`<sup>Optional</sup> <a name="LaunchTypeInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchTypeInput"></a>

```go
func LaunchTypeInput() *string
```

- *Type:* *string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfigurationInput"></a>

```go
func NetworkConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `PlacementConstraintsInput`<sup>Optional</sup> <a name="PlacementConstraintsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraintsInput"></a>

```go
func PlacementConstraintsInput() interface{}
```

- *Type:* interface{}

---

##### `PlacementStrategyInput`<sup>Optional</sup> <a name="PlacementStrategyInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategyInput"></a>

```go
func PlacementStrategyInput() interface{}
```

- *Type:* interface{}

---

##### `PlatformVersionInput`<sup>Optional</sup> <a name="PlatformVersionInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersionInput"></a>

```go
func PlatformVersionInput() *string
```

- *Type:* *string

---

##### `PropagateTagsInput`<sup>Optional</sup> <a name="PropagateTagsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTagsInput"></a>

```go
func PropagateTagsInput() *string
```

- *Type:* *string

---

##### `ReferenceIdInput`<sup>Optional</sup> <a name="ReferenceIdInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceIdInput"></a>

```go
func ReferenceIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TaskCountInput`<sup>Optional</sup> <a name="TaskCountInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCountInput"></a>

```go
func TaskCountInput() *f64
```

- *Type:* *f64

---

##### `TaskDefinitionArnInput`<sup>Optional</sup> <a name="TaskDefinitionArnInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArnInput"></a>

```go
func TaskDefinitionArnInput() *string
```

- *Type:* *string

---

##### `EnableEcsManagedTags`<sup>Required</sup> <a name="EnableEcsManagedTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTags"></a>

```go
func EnableEcsManagedTags() interface{}
```

- *Type:* interface{}

---

##### `EnableExecuteCommand`<sup>Required</sup> <a name="EnableExecuteCommand" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommand"></a>

```go
func EnableExecuteCommand() interface{}
```

- *Type:* interface{}

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.group"></a>

```go
func Group() *string
```

- *Type:* *string

---

##### `LaunchType`<sup>Required</sup> <a name="LaunchType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchType"></a>

```go
func LaunchType() *string
```

- *Type:* *string

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersion"></a>

```go
func PlatformVersion() *string
```

- *Type:* *string

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTags"></a>

```go
func PropagateTags() *string
```

- *Type:* *string

---

##### `ReferenceId`<sup>Required</sup> <a name="ReferenceId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceId"></a>

```go
func ReferenceId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tags"></a>

```go
func Tags() interface{}
```

- *Type:* interface{}

---

##### `TaskCount`<sup>Required</sup> <a name="TaskCount" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCount"></a>

```go
func TaskCount() *f64
```

- *Type:* *f64

---

##### `TaskDefinitionArn`<sup>Required</sup> <a name="TaskDefinitionArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArn"></a>

```go
func TaskDefinitionArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetEcsParametersPlacementConstraintsList <a name="SchedulerScheduleTargetEcsParametersPlacementConstraintsList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetEcsParametersPlacementConstraintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SchedulerScheduleTargetEcsParametersPlacementConstraintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.get"></a>

```go
func Get(index *f64) SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference <a name="SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetEcsParametersPlacementStrategyList <a name="SchedulerScheduleTargetEcsParametersPlacementStrategyList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetEcsParametersPlacementStrategyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SchedulerScheduleTargetEcsParametersPlacementStrategyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.get"></a>

```go
func Get(index *f64) SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference <a name="SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetField">ResetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetField` <a name="ResetField" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetField"></a>

```go
func ResetField()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetEventBridgeParametersOutputReference <a name="SchedulerScheduleTargetEventBridgeParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetEventBridgeParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SchedulerScheduleTargetEventBridgeParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resetDetailType">ResetDetailType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDetailType` <a name="ResetDetailType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resetDetailType"></a>

```go
func ResetDetailType()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailTypeInput">DetailTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailType">DetailType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DetailTypeInput`<sup>Optional</sup> <a name="DetailTypeInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailTypeInput"></a>

```go
func DetailTypeInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `DetailType`<sup>Required</sup> <a name="DetailType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailType"></a>

```go
func DetailType() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetKinesisParametersOutputReference <a name="SchedulerScheduleTargetKinesisParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetKinesisParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SchedulerScheduleTargetKinesisParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resetPartitionKey">ResetPartitionKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPartitionKey` <a name="ResetPartitionKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resetPartitionKey"></a>

```go
func ResetPartitionKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKeyInput">PartitionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKey">PartitionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PartitionKeyInput`<sup>Optional</sup> <a name="PartitionKeyInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKeyInput"></a>

```go
func PartitionKeyInput() *string
```

- *Type:* *string

---

##### `PartitionKey`<sup>Required</sup> <a name="PartitionKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKey"></a>

```go
func PartitionKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetOutputReference <a name="SchedulerScheduleTargetOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SchedulerScheduleTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putDeadLetterConfig">PutDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters">PutEcsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEventBridgeParameters">PutEventBridgeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putKinesisParameters">PutKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSageMakerPipelineParameters">PutSageMakerPipelineParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSqsParameters">PutSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetDeadLetterConfig">ResetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEcsParameters">ResetEcsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEventBridgeParameters">ResetEventBridgeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetKinesisParameters">ResetKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSageMakerPipelineParameters">ResetSageMakerPipelineParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSqsParameters">ResetSqsParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeadLetterConfig` <a name="PutDeadLetterConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putDeadLetterConfig"></a>

```go
func PutDeadLetterConfig(value SchedulerScheduleTargetDeadLetterConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putDeadLetterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

---

##### `PutEcsParameters` <a name="PutEcsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters"></a>

```go
func PutEcsParameters(value SchedulerScheduleTargetEcsParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

---

##### `PutEventBridgeParameters` <a name="PutEventBridgeParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEventBridgeParameters"></a>

```go
func PutEventBridgeParameters(value SchedulerScheduleTargetEventBridgeParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEventBridgeParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a>

---

##### `PutKinesisParameters` <a name="PutKinesisParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putKinesisParameters"></a>

```go
func PutKinesisParameters(value SchedulerScheduleTargetKinesisParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putKinesisParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putRetryPolicy"></a>

```go
func PutRetryPolicy(value SchedulerScheduleTargetRetryPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

---

##### `PutSageMakerPipelineParameters` <a name="PutSageMakerPipelineParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSageMakerPipelineParameters"></a>

```go
func PutSageMakerPipelineParameters(value SchedulerScheduleTargetSageMakerPipelineParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSageMakerPipelineParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a>

---

##### `PutSqsParameters` <a name="PutSqsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSqsParameters"></a>

```go
func PutSqsParameters(value SchedulerScheduleTargetSqsParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSqsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

---

##### `ResetDeadLetterConfig` <a name="ResetDeadLetterConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetDeadLetterConfig"></a>

```go
func ResetDeadLetterConfig()
```

##### `ResetEcsParameters` <a name="ResetEcsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEcsParameters"></a>

```go
func ResetEcsParameters()
```

##### `ResetEventBridgeParameters` <a name="ResetEventBridgeParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEventBridgeParameters"></a>

```go
func ResetEventBridgeParameters()
```

##### `ResetInput` <a name="ResetInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetInput"></a>

```go
func ResetInput()
```

##### `ResetKinesisParameters` <a name="ResetKinesisParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetKinesisParameters"></a>

```go
func ResetKinesisParameters()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetRetryPolicy"></a>

```go
func ResetRetryPolicy()
```

##### `ResetSageMakerPipelineParameters` <a name="ResetSageMakerPipelineParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSageMakerPipelineParameters"></a>

```go
func ResetSageMakerPipelineParameters()
```

##### `ResetSqsParameters` <a name="ResetSqsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSqsParameters"></a>

```go
func ResetSqsParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfig">DeadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference">SchedulerScheduleTargetDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParameters">EcsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference">SchedulerScheduleTargetEcsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventBridgeParameters">EventBridgeParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference">SchedulerScheduleTargetEventBridgeParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParameters">KinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference">SchedulerScheduleTargetKinesisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference">SchedulerScheduleTargetRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sageMakerPipelineParameters">SageMakerPipelineParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference">SchedulerScheduleTargetSageMakerPipelineParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParameters">SqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference">SchedulerScheduleTargetSqsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfigInput">DeadLetterConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParametersInput">EcsParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventBridgeParametersInput">EventBridgeParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParametersInput">KinesisParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicyInput">RetryPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sageMakerPipelineParametersInput">SageMakerPipelineParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParametersInput">SqsParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeadLetterConfig`<sup>Required</sup> <a name="DeadLetterConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfig"></a>

```go
func DeadLetterConfig() SchedulerScheduleTargetDeadLetterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference">SchedulerScheduleTargetDeadLetterConfigOutputReference</a>

---

##### `EcsParameters`<sup>Required</sup> <a name="EcsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParameters"></a>

```go
func EcsParameters() SchedulerScheduleTargetEcsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference">SchedulerScheduleTargetEcsParametersOutputReference</a>

---

##### `EventBridgeParameters`<sup>Required</sup> <a name="EventBridgeParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventBridgeParameters"></a>

```go
func EventBridgeParameters() SchedulerScheduleTargetEventBridgeParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference">SchedulerScheduleTargetEventBridgeParametersOutputReference</a>

---

##### `KinesisParameters`<sup>Required</sup> <a name="KinesisParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParameters"></a>

```go
func KinesisParameters() SchedulerScheduleTargetKinesisParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference">SchedulerScheduleTargetKinesisParametersOutputReference</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicy"></a>

```go
func RetryPolicy() SchedulerScheduleTargetRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference">SchedulerScheduleTargetRetryPolicyOutputReference</a>

---

##### `SageMakerPipelineParameters`<sup>Required</sup> <a name="SageMakerPipelineParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sageMakerPipelineParameters"></a>

```go
func SageMakerPipelineParameters() SchedulerScheduleTargetSageMakerPipelineParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference">SchedulerScheduleTargetSageMakerPipelineParametersOutputReference</a>

---

##### `SqsParameters`<sup>Required</sup> <a name="SqsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParameters"></a>

```go
func SqsParameters() SchedulerScheduleTargetSqsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference">SchedulerScheduleTargetSqsParametersOutputReference</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `DeadLetterConfigInput`<sup>Optional</sup> <a name="DeadLetterConfigInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfigInput"></a>

```go
func DeadLetterConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EcsParametersInput`<sup>Optional</sup> <a name="EcsParametersInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParametersInput"></a>

```go
func EcsParametersInput() interface{}
```

- *Type:* interface{}

---

##### `EventBridgeParametersInput`<sup>Optional</sup> <a name="EventBridgeParametersInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventBridgeParametersInput"></a>

```go
func EventBridgeParametersInput() interface{}
```

- *Type:* interface{}

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `KinesisParametersInput`<sup>Optional</sup> <a name="KinesisParametersInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParametersInput"></a>

```go
func KinesisParametersInput() interface{}
```

- *Type:* interface{}

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicyInput"></a>

```go
func RetryPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SageMakerPipelineParametersInput`<sup>Optional</sup> <a name="SageMakerPipelineParametersInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sageMakerPipelineParametersInput"></a>

```go
func SageMakerPipelineParametersInput() interface{}
```

- *Type:* interface{}

---

##### `SqsParametersInput`<sup>Optional</sup> <a name="SqsParametersInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParametersInput"></a>

```go
func SqsParametersInput() interface{}
```

- *Type:* interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetRetryPolicyOutputReference <a name="SchedulerScheduleTargetRetryPolicyOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetRetryPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SchedulerScheduleTargetRetryPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds">ResetMaximumEventAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumRetryAttempts">ResetMaximumRetryAttempts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumEventAgeInSeconds` <a name="ResetMaximumEventAgeInSeconds" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds"></a>

```go
func ResetMaximumEventAgeInSeconds()
```

##### `ResetMaximumRetryAttempts` <a name="ResetMaximumRetryAttempts" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumRetryAttempts"></a>

```go
func ResetMaximumRetryAttempts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput">MaximumEventAgeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput">MaximumRetryAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds">MaximumEventAgeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttempts">MaximumRetryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumEventAgeInSecondsInput`<sup>Optional</sup> <a name="MaximumEventAgeInSecondsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput"></a>

```go
func MaximumEventAgeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaximumRetryAttemptsInput`<sup>Optional</sup> <a name="MaximumRetryAttemptsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput"></a>

```go
func MaximumRetryAttemptsInput() *f64
```

- *Type:* *f64

---

##### `MaximumEventAgeInSeconds`<sup>Required</sup> <a name="MaximumEventAgeInSeconds" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds"></a>

```go
func MaximumEventAgeInSeconds() *f64
```

- *Type:* *f64

---

##### `MaximumRetryAttempts`<sup>Required</sup> <a name="MaximumRetryAttempts" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttempts"></a>

```go
func MaximumRetryAttempts() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetSageMakerPipelineParametersOutputReference <a name="SchedulerScheduleTargetSageMakerPipelineParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetSageMakerPipelineParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SchedulerScheduleTargetSageMakerPipelineParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.putPipelineParameterList">PutPipelineParameterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resetPipelineParameterList">ResetPipelineParameterList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPipelineParameterList` <a name="PutPipelineParameterList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.putPipelineParameterList"></a>

```go
func PutPipelineParameterList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.putPipelineParameterList.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPipelineParameterList` <a name="ResetPipelineParameterList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resetPipelineParameterList"></a>

```go
func ResetPipelineParameterList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterList">PipelineParameterList</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterListInput">PipelineParameterListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PipelineParameterList`<sup>Required</sup> <a name="PipelineParameterList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterList"></a>

```go
func PipelineParameterList() SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList</a>

---

##### `PipelineParameterListInput`<sup>Optional</sup> <a name="PipelineParameterListInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterListInput"></a>

```go
func PipelineParameterListInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList <a name="SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.get"></a>

```go
func Get(index *f64) SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference <a name="SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SchedulerScheduleTargetSqsParametersOutputReference <a name="SchedulerScheduleTargetSqsParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/schedulerschedule"

schedulerschedule.NewSchedulerScheduleTargetSqsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SchedulerScheduleTargetSqsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resetMessageGroupId">ResetMessageGroupId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessageGroupId` <a name="ResetMessageGroupId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resetMessageGroupId"></a>

```go
func ResetMessageGroupId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupIdInput">MessageGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupId">MessageGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageGroupIdInput`<sup>Optional</sup> <a name="MessageGroupIdInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupIdInput"></a>

```go
func MessageGroupIdInput() *string
```

- *Type:* *string

---

##### `MessageGroupId`<sup>Required</sup> <a name="MessageGroupId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupId"></a>

```go
func MessageGroupId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



