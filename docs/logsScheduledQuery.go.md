# `logsScheduledQuery` Submodule <a name="`logsScheduledQuery` Submodule" id="@cdktn/provider-awscc.logsScheduledQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsScheduledQuery <a name="LogsScheduledQuery" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query awscc_logs_scheduled_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsscheduledquery"

logsscheduledquery.NewLogsScheduledQuery(scope Construct, id *string, config LogsScheduledQueryConfig) LogsScheduledQuery
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig">LogsScheduledQueryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig">LogsScheduledQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putDestinationConfiguration">PutDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetDestinationConfiguration">ResetDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetLogGroupIdentifiers">ResetLogGroupIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetScheduleEndTime">ResetScheduleEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetScheduleStartTime">ResetScheduleStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationConfiguration` <a name="PutDestinationConfiguration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putDestinationConfiguration"></a>

```go
func PutDestinationConfiguration(value LogsScheduledQueryDestinationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putDestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDestinationConfiguration` <a name="ResetDestinationConfiguration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetDestinationConfiguration"></a>

```go
func ResetDestinationConfiguration()
```

##### `ResetLogGroupIdentifiers` <a name="ResetLogGroupIdentifiers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetLogGroupIdentifiers"></a>

```go
func ResetLogGroupIdentifiers()
```

##### `ResetScheduleEndTime` <a name="ResetScheduleEndTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetScheduleEndTime"></a>

```go
func ResetScheduleEndTime()
```

##### `ResetScheduleStartTime` <a name="ResetScheduleStartTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetScheduleStartTime"></a>

```go
func ResetScheduleStartTime()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetStartTimeOffset"></a>

```go
func ResetStartTimeOffset()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetState"></a>

```go
func ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetTimezone"></a>

```go
func ResetTimezone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LogsScheduledQuery resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsscheduledquery"

logsscheduledquery.LogsScheduledQuery_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsscheduledquery"

logsscheduledquery.LogsScheduledQuery_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsscheduledquery"

logsscheduledquery.LogsScheduledQuery_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsscheduledquery"

logsscheduledquery.LogsScheduledQuery_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LogsScheduledQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LogsScheduledQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LogsScheduledQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LogsScheduledQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.destinationConfiguration">DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference">LogsScheduledQueryDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastExecutionStatus">LastExecutionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastTriggeredTime">LastTriggeredTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduledQueryArn">ScheduledQueryArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList">LogsScheduledQueryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.destinationConfigurationInput">DestinationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.logGroupIdentifiersInput">LogGroupIdentifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryLanguageInput">QueryLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryStringInput">QueryStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleEndTimeInput">ScheduleEndTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleStartTimeInput">ScheduleStartTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.logGroupIdentifiers">LogGroupIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryLanguage">QueryLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryString">QueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleEndTime">ScheduleEndTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleStartTime">ScheduleStartTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.startTimeOffset">StartTimeOffset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `DestinationConfiguration`<sup>Required</sup> <a name="DestinationConfiguration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.destinationConfiguration"></a>

```go
func DestinationConfiguration() LogsScheduledQueryDestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference">LogsScheduledQueryDestinationConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastExecutionStatus`<sup>Required</sup> <a name="LastExecutionStatus" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastExecutionStatus"></a>

```go
func LastExecutionStatus() *string
```

- *Type:* *string

---

##### `LastTriggeredTime`<sup>Required</sup> <a name="LastTriggeredTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastTriggeredTime"></a>

```go
func LastTriggeredTime() *f64
```

- *Type:* *f64

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *f64
```

- *Type:* *f64

---

##### `ScheduledQueryArn`<sup>Required</sup> <a name="ScheduledQueryArn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduledQueryArn"></a>

```go
func ScheduledQueryArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tags"></a>

```go
func Tags() LogsScheduledQueryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList">LogsScheduledQueryTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationConfigurationInput`<sup>Optional</sup> <a name="DestinationConfigurationInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.destinationConfigurationInput"></a>

```go
func DestinationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `LogGroupIdentifiersInput`<sup>Optional</sup> <a name="LogGroupIdentifiersInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.logGroupIdentifiersInput"></a>

```go
func LogGroupIdentifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryLanguageInput`<sup>Optional</sup> <a name="QueryLanguageInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryLanguageInput"></a>

```go
func QueryLanguageInput() *string
```

- *Type:* *string

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryStringInput"></a>

```go
func QueryStringInput() *string
```

- *Type:* *string

---

##### `ScheduleEndTimeInput`<sup>Optional</sup> <a name="ScheduleEndTimeInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleEndTimeInput"></a>

```go
func ScheduleEndTimeInput() *f64
```

- *Type:* *f64

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleExpressionInput"></a>

```go
func ScheduleExpressionInput() *string
```

- *Type:* *string

---

##### `ScheduleStartTimeInput`<sup>Optional</sup> <a name="ScheduleStartTimeInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleStartTimeInput"></a>

```go
func ScheduleStartTimeInput() *f64
```

- *Type:* *f64

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.startTimeOffsetInput"></a>

```go
func StartTimeOffsetInput() *f64
```

- *Type:* *f64

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `LogGroupIdentifiers`<sup>Required</sup> <a name="LogGroupIdentifiers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.logGroupIdentifiers"></a>

```go
func LogGroupIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `QueryLanguage`<sup>Required</sup> <a name="QueryLanguage" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryLanguage"></a>

```go
func QueryLanguage() *string
```

- *Type:* *string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryString"></a>

```go
func QueryString() *string
```

- *Type:* *string

---

##### `ScheduleEndTime`<sup>Required</sup> <a name="ScheduleEndTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleEndTime"></a>

```go
func ScheduleEndTime() *f64
```

- *Type:* *f64

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `ScheduleStartTime`<sup>Required</sup> <a name="ScheduleStartTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleStartTime"></a>

```go
func ScheduleStartTime() *f64
```

- *Type:* *f64

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.startTimeOffset"></a>

```go
func StartTimeOffset() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsScheduledQueryConfig <a name="LogsScheduledQueryConfig" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsscheduledquery"

&logsscheduledquery.LogsScheduledQueryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ExecutionRoleArn: *string,
	Name: *string,
	QueryLanguage: *string,
	QueryString: *string,
	ScheduleExpression: *string,
	Description: *string,
	DestinationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration,
	LogGroupIdentifiers: *[]*string,
	ScheduleEndTime: *f64,
	ScheduleStartTime: *f64,
	StartTimeOffset: *f64,
	State: *string,
	Tags: interface{},
	Timezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#execution_role_arn LogsScheduledQuery#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#name LogsScheduledQuery#name}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.queryLanguage">QueryLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#query_language LogsScheduledQuery#query_language}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.queryString">QueryString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#query_string LogsScheduledQuery#query_string}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_expression LogsScheduledQuery#schedule_expression}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#description LogsScheduledQuery#description}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.destinationConfiguration">DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#destination_configuration LogsScheduledQuery#destination_configuration}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.logGroupIdentifiers">LogGroupIdentifiers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#log_group_identifiers LogsScheduledQuery#log_group_identifiers}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleEndTime">ScheduleEndTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_end_time LogsScheduledQuery#schedule_end_time}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleStartTime">ScheduleStartTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_start_time LogsScheduledQuery#schedule_start_time}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.startTimeOffset">StartTimeOffset</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#start_time_offset LogsScheduledQuery#start_time_offset}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#state LogsScheduledQuery#state}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#tags LogsScheduledQuery#tags}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.timezone">Timezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#timezone LogsScheduledQuery#timezone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#execution_role_arn LogsScheduledQuery#execution_role_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#name LogsScheduledQuery#name}.

---

##### `QueryLanguage`<sup>Required</sup> <a name="QueryLanguage" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.queryLanguage"></a>

```go
QueryLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#query_language LogsScheduledQuery#query_language}.

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.queryString"></a>

```go
QueryString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#query_string LogsScheduledQuery#query_string}.

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleExpression"></a>

```go
ScheduleExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_expression LogsScheduledQuery#schedule_expression}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#description LogsScheduledQuery#description}.

---

##### `DestinationConfiguration`<sup>Optional</sup> <a name="DestinationConfiguration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.destinationConfiguration"></a>

```go
DestinationConfiguration LogsScheduledQueryDestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#destination_configuration LogsScheduledQuery#destination_configuration}.

---

##### `LogGroupIdentifiers`<sup>Optional</sup> <a name="LogGroupIdentifiers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.logGroupIdentifiers"></a>

```go
LogGroupIdentifiers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#log_group_identifiers LogsScheduledQuery#log_group_identifiers}.

---

##### `ScheduleEndTime`<sup>Optional</sup> <a name="ScheduleEndTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleEndTime"></a>

```go
ScheduleEndTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_end_time LogsScheduledQuery#schedule_end_time}.

---

##### `ScheduleStartTime`<sup>Optional</sup> <a name="ScheduleStartTime" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleStartTime"></a>

```go
ScheduleStartTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_start_time LogsScheduledQuery#schedule_start_time}.

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.startTimeOffset"></a>

```go
StartTimeOffset *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#start_time_offset LogsScheduledQuery#start_time_offset}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#state LogsScheduledQuery#state}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#tags LogsScheduledQuery#tags}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#timezone LogsScheduledQuery#timezone}.

---

### LogsScheduledQueryDestinationConfiguration <a name="LogsScheduledQueryDestinationConfiguration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsscheduledquery"

&logsscheduledquery.LogsScheduledQueryDestinationConfiguration {
	S3Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration">LogsScheduledQueryDestinationConfigurationS3Configuration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#s3_configuration LogsScheduledQuery#s3_configuration}. |

---

##### `S3Configuration`<sup>Optional</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration.property.s3Configuration"></a>

```go
S3Configuration LogsScheduledQueryDestinationConfigurationS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration">LogsScheduledQueryDestinationConfigurationS3Configuration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#s3_configuration LogsScheduledQuery#s3_configuration}.

---

### LogsScheduledQueryDestinationConfigurationS3Configuration <a name="LogsScheduledQueryDestinationConfigurationS3Configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsscheduledquery"

&logsscheduledquery.LogsScheduledQueryDestinationConfigurationS3Configuration {
	DestinationIdentifier: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration.property.destinationIdentifier">DestinationIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#destination_identifier LogsScheduledQuery#destination_identifier}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#role_arn LogsScheduledQuery#role_arn}. |

---

##### `DestinationIdentifier`<sup>Optional</sup> <a name="DestinationIdentifier" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration.property.destinationIdentifier"></a>

```go
DestinationIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#destination_identifier LogsScheduledQuery#destination_identifier}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#role_arn LogsScheduledQuery#role_arn}.

---

### LogsScheduledQueryTags <a name="LogsScheduledQueryTags" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsscheduledquery"

&logsscheduledquery.LogsScheduledQueryTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#key LogsScheduledQuery#key}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#value LogsScheduledQuery#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#key LogsScheduledQuery#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#value LogsScheduledQuery#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogsScheduledQueryDestinationConfigurationOutputReference <a name="LogsScheduledQueryDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsscheduledquery"

logsscheduledquery.NewLogsScheduledQueryDestinationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogsScheduledQueryDestinationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.putS3Configuration">PutS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.resetS3Configuration">ResetS3Configuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Configuration` <a name="PutS3Configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.putS3Configuration"></a>

```go
func PutS3Configuration(value LogsScheduledQueryDestinationConfigurationS3Configuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration">LogsScheduledQueryDestinationConfigurationS3Configuration</a>

---

##### `ResetS3Configuration` <a name="ResetS3Configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.resetS3Configuration"></a>

```go
func ResetS3Configuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference">LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.s3ConfigurationInput">S3ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.s3Configuration"></a>

```go
func S3Configuration() LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference">LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference</a>

---

##### `S3ConfigurationInput`<sup>Optional</sup> <a name="S3ConfigurationInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.s3ConfigurationInput"></a>

```go
func S3ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference <a name="LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsscheduledquery"

logsscheduledquery.NewLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resetDestinationIdentifier">ResetDestinationIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationIdentifier` <a name="ResetDestinationIdentifier" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resetDestinationIdentifier"></a>

```go
func ResetDestinationIdentifier()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.destinationIdentifierInput">DestinationIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.destinationIdentifier">DestinationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationIdentifierInput`<sup>Optional</sup> <a name="DestinationIdentifierInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.destinationIdentifierInput"></a>

```go
func DestinationIdentifierInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `DestinationIdentifier`<sup>Required</sup> <a name="DestinationIdentifier" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.destinationIdentifier"></a>

```go
func DestinationIdentifier() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogsScheduledQueryTagsList <a name="LogsScheduledQueryTagsList" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsscheduledquery"

logsscheduledquery.NewLogsScheduledQueryTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LogsScheduledQueryTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.get"></a>

```go
func Get(index *f64) LogsScheduledQueryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogsScheduledQueryTagsOutputReference <a name="LogsScheduledQueryTagsOutputReference" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/logsscheduledquery"

logsscheduledquery.NewLogsScheduledQueryTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LogsScheduledQueryTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



