# `bcmScheduledReport` Submodule <a name="`bcmScheduledReport` Submodule" id="@cdktn/provider-awscc.bcmScheduledReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmScheduledReport <a name="BcmScheduledReport" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report awscc_bcm_scheduled_report}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

bcmscheduledreport.NewBcmScheduledReport(scope Construct, id *string, config BcmScheduledReportConfig) BcmScheduledReport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig">BcmScheduledReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig">BcmScheduledReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig">PutScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putWidgetDateRangeOverride">PutWidgetDateRangeOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetDateRangeOverride">ResetWidgetDateRangeOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetIds">ResetWidgetIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScheduleConfig` <a name="PutScheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig"></a>

```go
func PutScheduleConfig(value BcmScheduledReportScheduleConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWidgetDateRangeOverride` <a name="PutWidgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putWidgetDateRangeOverride"></a>

```go
func PutWidgetDateRangeOverride(value BcmScheduledReportWidgetDateRangeOverride)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putWidgetDateRangeOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetTags"></a>

```go
func ResetTags()
```

##### `ResetWidgetDateRangeOverride` <a name="ResetWidgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetDateRangeOverride"></a>

```go
func ResetWidgetDateRangeOverride()
```

##### `ResetWidgetIds` <a name="ResetWidgetIds" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetIds"></a>

```go
func ResetWidgetIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BcmScheduledReport resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

bcmscheduledreport.BcmScheduledReport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

bcmscheduledreport.BcmScheduledReport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

bcmscheduledreport.BcmScheduledReport_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

bcmscheduledreport.BcmScheduledReport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BcmScheduledReport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BcmScheduledReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BcmScheduledReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BcmScheduledReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.healthStatus">HealthStatus</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference">BcmScheduledReportHealthStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfig">ScheduleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference">BcmScheduledReportScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList">BcmScheduledReportTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverride">WidgetDateRangeOverride</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference">BcmScheduledReportWidgetDateRangeOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArnInput">DashboardArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfigInput">ScheduleConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArnInput">ScheduledReportExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverrideInput">WidgetDateRangeOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIdsInput">WidgetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArn">DashboardArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArn">ScheduledReportExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIds">WidgetIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `HealthStatus`<sup>Required</sup> <a name="HealthStatus" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.healthStatus"></a>

```go
func HealthStatus() BcmScheduledReportHealthStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference">BcmScheduledReportHealthStatusOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ScheduleConfig`<sup>Required</sup> <a name="ScheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfig"></a>

```go
func ScheduleConfig() BcmScheduledReportScheduleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference">BcmScheduledReportScheduleConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tags"></a>

```go
func Tags() BcmScheduledReportTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList">BcmScheduledReportTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `WidgetDateRangeOverride`<sup>Required</sup> <a name="WidgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverride"></a>

```go
func WidgetDateRangeOverride() BcmScheduledReportWidgetDateRangeOverrideOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference">BcmScheduledReportWidgetDateRangeOverrideOutputReference</a>

---

##### `DashboardArnInput`<sup>Optional</sup> <a name="DashboardArnInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArnInput"></a>

```go
func DashboardArnInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScheduleConfigInput`<sup>Optional</sup> <a name="ScheduleConfigInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfigInput"></a>

```go
func ScheduleConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduledReportExecutionRoleArnInput`<sup>Optional</sup> <a name="ScheduledReportExecutionRoleArnInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArnInput"></a>

```go
func ScheduledReportExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `WidgetDateRangeOverrideInput`<sup>Optional</sup> <a name="WidgetDateRangeOverrideInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverrideInput"></a>

```go
func WidgetDateRangeOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `WidgetIdsInput`<sup>Optional</sup> <a name="WidgetIdsInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIdsInput"></a>

```go
func WidgetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DashboardArn`<sup>Required</sup> <a name="DashboardArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArn"></a>

```go
func DashboardArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScheduledReportExecutionRoleArn`<sup>Required</sup> <a name="ScheduledReportExecutionRoleArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArn"></a>

```go
func ScheduledReportExecutionRoleArn() *string
```

- *Type:* *string

---

##### `WidgetIds`<sup>Required</sup> <a name="WidgetIds" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIds"></a>

```go
func WidgetIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BcmScheduledReportConfig <a name="BcmScheduledReportConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

&bcmscheduledreport.BcmScheduledReportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DashboardArn: *string,
	Name: *string,
	ScheduleConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig,
	ScheduledReportExecutionRoleArn: *string,
	Description: *string,
	Tags: interface{},
	WidgetDateRangeOverride: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride,
	WidgetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dashboardArn">DashboardArn</a></code> | <code>*string</code> | The ARN of the dashboard associated with the scheduled report. Managed dashboards cannot be used. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.name">Name</a></code> | <code>*string</code> | The name of the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduleConfig">ScheduleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a></code> | The schedule configuration that defines when and how often the report is generated. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduledReportExecutionRoleArn">ScheduledReportExecutionRoleArn</a></code> | <code>*string</code> | The ARN of the IAM role that the scheduled report uses to execute. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.description">Description</a></code> | <code>*string</code> | A description of the scheduled report's purpose or contents. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags applied to the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetDateRangeOverride">WidgetDateRangeOverride</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a></code> | The date range override applied to widgets in the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetIds">WidgetIds</a></code> | <code>*[]*string</code> | The list of widget identifiers included in the scheduled report. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DashboardArn`<sup>Required</sup> <a name="DashboardArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dashboardArn"></a>

```go
DashboardArn *string
```

- *Type:* *string

The ARN of the dashboard associated with the scheduled report. Managed dashboards cannot be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#dashboard_arn BcmScheduledReport#dashboard_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#name BcmScheduledReport#name}

---

##### `ScheduleConfig`<sup>Required</sup> <a name="ScheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduleConfig"></a>

```go
ScheduleConfig BcmScheduledReportScheduleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

The schedule configuration that defines when and how often the report is generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_config BcmScheduledReport#schedule_config}

---

##### `ScheduledReportExecutionRoleArn`<sup>Required</sup> <a name="ScheduledReportExecutionRoleArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduledReportExecutionRoleArn"></a>

```go
ScheduledReportExecutionRoleArn *string
```

- *Type:* *string

The ARN of the IAM role that the scheduled report uses to execute.

AWS Billing and Cost Management Dashboards assumes this IAM role while executing the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#scheduled_report_execution_role_arn BcmScheduledReport#scheduled_report_execution_role_arn}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the scheduled report's purpose or contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#description BcmScheduledReport#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags applied to the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#tags BcmScheduledReport#tags}

---

##### `WidgetDateRangeOverride`<sup>Optional</sup> <a name="WidgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetDateRangeOverride"></a>

```go
WidgetDateRangeOverride BcmScheduledReportWidgetDateRangeOverride
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

The date range override applied to widgets in the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#widget_date_range_override BcmScheduledReport#widget_date_range_override}

---

##### `WidgetIds`<sup>Optional</sup> <a name="WidgetIds" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetIds"></a>

```go
WidgetIds *[]*string
```

- *Type:* *[]*string

The list of widget identifiers included in the scheduled report.

If not specified, all widgets in the dashboard are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#widget_ids BcmScheduledReport#widget_ids}

---

### BcmScheduledReportHealthStatus <a name="BcmScheduledReportHealthStatus" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

&bcmscheduledreport.BcmScheduledReportHealthStatus {

}
```


### BcmScheduledReportScheduleConfig <a name="BcmScheduledReportScheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

&bcmscheduledreport.BcmScheduledReportScheduleConfig {
	ScheduleExpression: *string,
	ScheduleExpressionTimeZone: *string,
	SchedulePeriod: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | The schedule expression that specifies when to trigger the scheduled report run. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpressionTimeZone">ScheduleExpressionTimeZone</a></code> | <code>*string</code> | The time zone for the schedule expression, for example, UTC. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.schedulePeriod">SchedulePeriod</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a></code> | The time period during which the schedule is active. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.state">State</a></code> | <code>*string</code> | The state of the schedule. |

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpression"></a>

```go
ScheduleExpression *string
```

- *Type:* *string

The schedule expression that specifies when to trigger the scheduled report run.

This value must be a cron expression consisting of six fields separated by white spaces: cron(minutes hours day_of_month month day_of_week year).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_expression BcmScheduledReport#schedule_expression}

---

##### `ScheduleExpressionTimeZone`<sup>Optional</sup> <a name="ScheduleExpressionTimeZone" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpressionTimeZone"></a>

```go
ScheduleExpressionTimeZone *string
```

- *Type:* *string

The time zone for the schedule expression, for example, UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_expression_time_zone BcmScheduledReport#schedule_expression_time_zone}

---

##### `SchedulePeriod`<sup>Optional</sup> <a name="SchedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.schedulePeriod"></a>

```go
SchedulePeriod BcmScheduledReportScheduleConfigSchedulePeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

The time period during which the schedule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_period BcmScheduledReport#schedule_period}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

The state of the schedule.

ENABLED means the scheduled report runs according to its schedule expression. DISABLED means the scheduled report is paused and will not run until re-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#state BcmScheduledReport#state}

---

### BcmScheduledReportScheduleConfigSchedulePeriod <a name="BcmScheduledReportScheduleConfigSchedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

&bcmscheduledreport.BcmScheduledReportScheduleConfigSchedulePeriod {
	EndTime: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.endTime">EndTime</a></code> | <code>*string</code> | The time at which the schedule stops being active. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.startTime">StartTime</a></code> | <code>*string</code> | The time at which the schedule becomes active. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

The time at which the schedule stops being active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#end_time BcmScheduledReport#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

The time at which the schedule becomes active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#start_time BcmScheduledReport#start_time}

---

### BcmScheduledReportTags <a name="BcmScheduledReportTags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

&bcmscheduledreport.BcmScheduledReportTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#key BcmScheduledReport#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#value BcmScheduledReport#value}

---

### BcmScheduledReportWidgetDateRangeOverride <a name="BcmScheduledReportWidgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

&bcmscheduledreport.BcmScheduledReportWidgetDateRangeOverride {
	EndTime: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime,
	StartTime: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.endTime">EndTime</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a></code> | The end of the range. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a></code> | The start of the range. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.endTime"></a>

```go
EndTime BcmScheduledReportWidgetDateRangeOverrideEndTime
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

The end of the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#end_time BcmScheduledReport#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.startTime"></a>

```go
StartTime BcmScheduledReportWidgetDateRangeOverrideStartTime
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

The start of the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#start_time BcmScheduledReport#start_time}

---

### BcmScheduledReportWidgetDateRangeOverrideEndTime <a name="BcmScheduledReportWidgetDateRangeOverrideEndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

&bcmscheduledreport.BcmScheduledReportWidgetDateRangeOverrideEndTime {
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.type">Type</a></code> | <code>*string</code> | Whether Value is an absolute date or a duration relative to now. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.value">Value</a></code> | <code>*string</code> | The date, or an ISO 8601 duration when Type is RELATIVE. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.type"></a>

```go
Type *string
```

- *Type:* *string

Whether Value is an absolute date or a duration relative to now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#type BcmScheduledReport#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.value"></a>

```go
Value *string
```

- *Type:* *string

The date, or an ISO 8601 duration when Type is RELATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#value BcmScheduledReport#value}

---

### BcmScheduledReportWidgetDateRangeOverrideStartTime <a name="BcmScheduledReportWidgetDateRangeOverrideStartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

&bcmscheduledreport.BcmScheduledReportWidgetDateRangeOverrideStartTime {
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.type">Type</a></code> | <code>*string</code> | Whether Value is an absolute date or a duration relative to now. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.value">Value</a></code> | <code>*string</code> | The date, or an ISO 8601 duration when Type is RELATIVE. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.type"></a>

```go
Type *string
```

- *Type:* *string

Whether Value is an absolute date or a duration relative to now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#type BcmScheduledReport#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.value"></a>

```go
Value *string
```

- *Type:* *string

The date, or an ISO 8601 duration when Type is RELATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#value BcmScheduledReport#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BcmScheduledReportHealthStatusOutputReference <a name="BcmScheduledReportHealthStatusOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

bcmscheduledreport.NewBcmScheduledReportHealthStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BcmScheduledReportHealthStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.lastRefreshedAt">LastRefreshedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus">BcmScheduledReportHealthStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastRefreshedAt`<sup>Required</sup> <a name="LastRefreshedAt" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.lastRefreshedAt"></a>

```go
func LastRefreshedAt() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() BcmScheduledReportHealthStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus">BcmScheduledReportHealthStatus</a>

---


### BcmScheduledReportScheduleConfigOutputReference <a name="BcmScheduledReportScheduleConfigOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

bcmscheduledreport.NewBcmScheduledReportScheduleConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BcmScheduledReportScheduleConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.putSchedulePeriod">PutSchedulePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpressionTimeZone">ResetScheduleExpressionTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetSchedulePeriod">ResetSchedulePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchedulePeriod` <a name="PutSchedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.putSchedulePeriod"></a>

```go
func PutSchedulePeriod(value BcmScheduledReportScheduleConfigSchedulePeriod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.putSchedulePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

---

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpression"></a>

```go
func ResetScheduleExpression()
```

##### `ResetScheduleExpressionTimeZone` <a name="ResetScheduleExpressionTimeZone" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpressionTimeZone"></a>

```go
func ResetScheduleExpressionTimeZone()
```

##### `ResetSchedulePeriod` <a name="ResetSchedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetSchedulePeriod"></a>

```go
func ResetSchedulePeriod()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetState"></a>

```go
func ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriod">SchedulePeriod</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference">BcmScheduledReportScheduleConfigSchedulePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZoneInput">ScheduleExpressionTimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriodInput">SchedulePeriodInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZone">ScheduleExpressionTimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchedulePeriod`<sup>Required</sup> <a name="SchedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriod"></a>

```go
func SchedulePeriod() BcmScheduledReportScheduleConfigSchedulePeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference">BcmScheduledReportScheduleConfigSchedulePeriodOutputReference</a>

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionInput"></a>

```go
func ScheduleExpressionInput() *string
```

- *Type:* *string

---

##### `ScheduleExpressionTimeZoneInput`<sup>Optional</sup> <a name="ScheduleExpressionTimeZoneInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZoneInput"></a>

```go
func ScheduleExpressionTimeZoneInput() *string
```

- *Type:* *string

---

##### `SchedulePeriodInput`<sup>Optional</sup> <a name="SchedulePeriodInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriodInput"></a>

```go
func SchedulePeriodInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `ScheduleExpressionTimeZone`<sup>Required</sup> <a name="ScheduleExpressionTimeZone" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZone"></a>

```go
func ScheduleExpressionTimeZone() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmScheduledReportScheduleConfigSchedulePeriodOutputReference <a name="BcmScheduledReportScheduleConfigSchedulePeriodOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

bcmscheduledreport.NewBcmScheduledReportScheduleConfigSchedulePeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BcmScheduledReportScheduleConfigSchedulePeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmScheduledReportTagsList <a name="BcmScheduledReportTagsList" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

bcmscheduledreport.NewBcmScheduledReportTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BcmScheduledReportTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.get"></a>

```go
func Get(index *f64) BcmScheduledReportTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmScheduledReportTagsOutputReference <a name="BcmScheduledReportTagsOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

bcmscheduledreport.NewBcmScheduledReportTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BcmScheduledReportTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference <a name="BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

bcmscheduledreport.NewBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmScheduledReportWidgetDateRangeOverrideOutputReference <a name="BcmScheduledReportWidgetDateRangeOverrideOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

bcmscheduledreport.NewBcmScheduledReportWidgetDateRangeOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BcmScheduledReportWidgetDateRangeOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putEndTime">PutEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndTime` <a name="PutEndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putEndTime"></a>

```go
func PutEndTime(value BcmScheduledReportWidgetDateRangeOverrideEndTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putEndTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

---

##### `PutStartTime` <a name="PutStartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putStartTime"></a>

```go
func PutStartTime(value BcmScheduledReportWidgetDateRangeOverrideStartTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

---

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTime">EndTime</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTime"></a>

```go
func EndTime() BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference</a>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTime"></a>

```go
func StartTime() BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference</a>

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() interface{}
```

- *Type:* interface{}

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference <a name="BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmscheduledreport"

bcmscheduledreport.NewBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



