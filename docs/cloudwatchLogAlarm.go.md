# `cloudwatchLogAlarm` Submodule <a name="`cloudwatchLogAlarm` Submodule" id="@cdktn/provider-awscc.cloudwatchLogAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogAlarm <a name="CloudwatchLogAlarm" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm awscc_cloudwatch_log_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

cloudwatchlogalarm.NewCloudwatchLogAlarm(scope Construct, id *string, config CloudwatchLogAlarmConfig) CloudwatchLogAlarm
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig">CloudwatchLogAlarmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig">CloudwatchLogAlarmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration">PutScheduledQueryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putWarmUpConfiguration">PutWarmUpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineCount">ResetActionLogLineCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineRoleArn">ResetActionLogLineRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionsEnabled">ResetActionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmActions">ResetAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmDescription">ResetAlarmDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmName">ResetAlarmName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetInsufficientDataActions">ResetInsufficientDataActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOkActions">ResetOkActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTreatMissingData">ResetTreatMissingData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetWarmUpConfiguration">ResetWarmUpConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScheduledQueryConfiguration` <a name="PutScheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration"></a>

```go
func PutScheduledQueryConfiguration(value CloudwatchLogAlarmScheduledQueryConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWarmUpConfiguration` <a name="PutWarmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putWarmUpConfiguration"></a>

```go
func PutWarmUpConfiguration(value CloudwatchLogAlarmWarmUpConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putWarmUpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a>

---

##### `ResetActionLogLineCount` <a name="ResetActionLogLineCount" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineCount"></a>

```go
func ResetActionLogLineCount()
```

##### `ResetActionLogLineRoleArn` <a name="ResetActionLogLineRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineRoleArn"></a>

```go
func ResetActionLogLineRoleArn()
```

##### `ResetActionsEnabled` <a name="ResetActionsEnabled" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionsEnabled"></a>

```go
func ResetActionsEnabled()
```

##### `ResetAlarmActions` <a name="ResetAlarmActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmActions"></a>

```go
func ResetAlarmActions()
```

##### `ResetAlarmDescription` <a name="ResetAlarmDescription" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmDescription"></a>

```go
func ResetAlarmDescription()
```

##### `ResetAlarmName` <a name="ResetAlarmName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmName"></a>

```go
func ResetAlarmName()
```

##### `ResetInsufficientDataActions` <a name="ResetInsufficientDataActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetInsufficientDataActions"></a>

```go
func ResetInsufficientDataActions()
```

##### `ResetOkActions` <a name="ResetOkActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOkActions"></a>

```go
func ResetOkActions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTreatMissingData` <a name="ResetTreatMissingData" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTreatMissingData"></a>

```go
func ResetTreatMissingData()
```

##### `ResetWarmUpConfiguration` <a name="ResetWarmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetWarmUpConfiguration"></a>

```go
func ResetWarmUpConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchLogAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

cloudwatchlogalarm.CloudwatchLogAlarm_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

cloudwatchlogalarm.CloudwatchLogAlarm_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

cloudwatchlogalarm.CloudwatchLogAlarm_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

cloudwatchlogalarm.CloudwatchLogAlarm_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudwatchLogAlarm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudwatchLogAlarm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudwatchLogAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchLogAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfiguration">ScheduledQueryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList">CloudwatchLogAlarmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.warmUpConfiguration">WarmUpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference">CloudwatchLogAlarmWarmUpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCountInput">ActionLogLineCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArnInput">ActionLogLineRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabledInput">ActionsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActionsInput">AlarmActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescriptionInput">AlarmDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmNameInput">AlarmNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActionsInput">InsufficientDataActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActionsInput">OkActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarmInput">QueryResultsToAlarmInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluateInput">QueryResultsToEvaluateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfigurationInput">ScheduledQueryConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingDataInput">TreatMissingDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.warmUpConfigurationInput">WarmUpConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCount">ActionLogLineCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArn">ActionLogLineRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabled">ActionsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActions">AlarmActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescription">AlarmDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmName">AlarmName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActions">InsufficientDataActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActions">OkActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarm">QueryResultsToAlarm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluate">QueryResultsToEvaluate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingData">TreatMissingData</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ScheduledQueryConfiguration`<sup>Required</sup> <a name="ScheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfiguration"></a>

```go
func ScheduledQueryConfiguration() CloudwatchLogAlarmScheduledQueryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tags"></a>

```go
func Tags() CloudwatchLogAlarmTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList">CloudwatchLogAlarmTagsList</a>

---

##### `WarmUpConfiguration`<sup>Required</sup> <a name="WarmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.warmUpConfiguration"></a>

```go
func WarmUpConfiguration() CloudwatchLogAlarmWarmUpConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference">CloudwatchLogAlarmWarmUpConfigurationOutputReference</a>

---

##### `ActionLogLineCountInput`<sup>Optional</sup> <a name="ActionLogLineCountInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCountInput"></a>

```go
func ActionLogLineCountInput() *f64
```

- *Type:* *f64

---

##### `ActionLogLineRoleArnInput`<sup>Optional</sup> <a name="ActionLogLineRoleArnInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArnInput"></a>

```go
func ActionLogLineRoleArnInput() *string
```

- *Type:* *string

---

##### `ActionsEnabledInput`<sup>Optional</sup> <a name="ActionsEnabledInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabledInput"></a>

```go
func ActionsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AlarmActionsInput`<sup>Optional</sup> <a name="AlarmActionsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActionsInput"></a>

```go
func AlarmActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AlarmDescriptionInput`<sup>Optional</sup> <a name="AlarmDescriptionInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescriptionInput"></a>

```go
func AlarmDescriptionInput() *string
```

- *Type:* *string

---

##### `AlarmNameInput`<sup>Optional</sup> <a name="AlarmNameInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmNameInput"></a>

```go
func AlarmNameInput() *string
```

- *Type:* *string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperatorInput"></a>

```go
func ComparisonOperatorInput() *string
```

- *Type:* *string

---

##### `InsufficientDataActionsInput`<sup>Optional</sup> <a name="InsufficientDataActionsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActionsInput"></a>

```go
func InsufficientDataActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OkActionsInput`<sup>Optional</sup> <a name="OkActionsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActionsInput"></a>

```go
func OkActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryResultsToAlarmInput`<sup>Optional</sup> <a name="QueryResultsToAlarmInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarmInput"></a>

```go
func QueryResultsToAlarmInput() *f64
```

- *Type:* *f64

---

##### `QueryResultsToEvaluateInput`<sup>Optional</sup> <a name="QueryResultsToEvaluateInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluateInput"></a>

```go
func QueryResultsToEvaluateInput() *f64
```

- *Type:* *f64

---

##### `ScheduledQueryConfigurationInput`<sup>Optional</sup> <a name="ScheduledQueryConfigurationInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfigurationInput"></a>

```go
func ScheduledQueryConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `TreatMissingDataInput`<sup>Optional</sup> <a name="TreatMissingDataInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingDataInput"></a>

```go
func TreatMissingDataInput() *string
```

- *Type:* *string

---

##### `WarmUpConfigurationInput`<sup>Optional</sup> <a name="WarmUpConfigurationInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.warmUpConfigurationInput"></a>

```go
func WarmUpConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ActionLogLineCount`<sup>Required</sup> <a name="ActionLogLineCount" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCount"></a>

```go
func ActionLogLineCount() *f64
```

- *Type:* *f64

---

##### `ActionLogLineRoleArn`<sup>Required</sup> <a name="ActionLogLineRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArn"></a>

```go
func ActionLogLineRoleArn() *string
```

- *Type:* *string

---

##### `ActionsEnabled`<sup>Required</sup> <a name="ActionsEnabled" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabled"></a>

```go
func ActionsEnabled() interface{}
```

- *Type:* interface{}

---

##### `AlarmActions`<sup>Required</sup> <a name="AlarmActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActions"></a>

```go
func AlarmActions() *[]*string
```

- *Type:* *[]*string

---

##### `AlarmDescription`<sup>Required</sup> <a name="AlarmDescription" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescription"></a>

```go
func AlarmDescription() *string
```

- *Type:* *string

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmName"></a>

```go
func AlarmName() *string
```

- *Type:* *string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperator"></a>

```go
func ComparisonOperator() *string
```

- *Type:* *string

---

##### `InsufficientDataActions`<sup>Required</sup> <a name="InsufficientDataActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActions"></a>

```go
func InsufficientDataActions() *[]*string
```

- *Type:* *[]*string

---

##### `OkActions`<sup>Required</sup> <a name="OkActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActions"></a>

```go
func OkActions() *[]*string
```

- *Type:* *[]*string

---

##### `QueryResultsToAlarm`<sup>Required</sup> <a name="QueryResultsToAlarm" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarm"></a>

```go
func QueryResultsToAlarm() *f64
```

- *Type:* *f64

---

##### `QueryResultsToEvaluate`<sup>Required</sup> <a name="QueryResultsToEvaluate" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluate"></a>

```go
func QueryResultsToEvaluate() *f64
```

- *Type:* *f64

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `TreatMissingData`<sup>Required</sup> <a name="TreatMissingData" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingData"></a>

```go
func TreatMissingData() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogAlarmConfig <a name="CloudwatchLogAlarmConfig" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

&cloudwatchlogalarm.CloudwatchLogAlarmConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ComparisonOperator: *string,
	QueryResultsToAlarm: *f64,
	QueryResultsToEvaluate: *f64,
	ScheduledQueryConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration,
	Threshold: *f64,
	ActionLogLineCount: *f64,
	ActionLogLineRoleArn: *string,
	ActionsEnabled: interface{},
	AlarmActions: *[]*string,
	AlarmDescription: *string,
	AlarmName: *string,
	InsufficientDataActions: *[]*string,
	OkActions: *[]*string,
	Tags: interface{},
	TreatMissingData: *string,
	WarmUpConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | The arithmetic operation to use when comparing the specified threshold and the query results. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToAlarm">QueryResultsToAlarm</a></code> | <code>*f64</code> | The number of query results that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToEvaluate">QueryResultsToEvaluate</a></code> | <code>*f64</code> | The number of query results over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.scheduledQueryConfiguration">ScheduledQueryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a></code> | The scheduled query configuration for the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.threshold">Threshold</a></code> | <code>*f64</code> | The value to compare against the results of the scheduled query evaluation. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineCount">ActionLogLineCount</a></code> | <code>*f64</code> | The number of log lines to include in alarm notifications. Valid values are 0 to 50. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineRoleArn">ActionLogLineRoleArn</a></code> | <code>*string</code> | The ARN of the IAM role that grants CloudWatch permissions to fetch log lines for alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionsEnabled">ActionsEnabled</a></code> | <code>interface{}</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmActions">AlarmActions</a></code> | <code>*[]*string</code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmDescription">AlarmDescription</a></code> | <code>*string</code> | The description of the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmName">AlarmName</a></code> | <code>*string</code> | The name of the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.insufficientDataActions">InsufficientDataActions</a></code> | <code>*[]*string</code> | The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.okActions">OkActions</a></code> | <code>*[]*string</code> | The actions to execute when this alarm transitions to the OK state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of key-value pairs to associate with the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.treatMissingData">TreatMissingData</a></code> | <code>*string</code> | Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.warmUpConfiguration">WarmUpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a></code> | The warm-up configuration for the alarm. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.comparisonOperator"></a>

```go
ComparisonOperator *string
```

- *Type:* *string

The arithmetic operation to use when comparing the specified threshold and the query results.

Valid values are GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, and LessThanOrEqualToThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#comparison_operator CloudwatchLogAlarm#comparison_operator}

---

##### `QueryResultsToAlarm`<sup>Required</sup> <a name="QueryResultsToAlarm" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToAlarm"></a>

```go
QueryResultsToAlarm *f64
```

- *Type:* *f64

The number of query results that must be breaching to trigger the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#query_results_to_alarm CloudwatchLogAlarm#query_results_to_alarm}

---

##### `QueryResultsToEvaluate`<sup>Required</sup> <a name="QueryResultsToEvaluate" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToEvaluate"></a>

```go
QueryResultsToEvaluate *f64
```

- *Type:* *f64

The number of query results over which data is compared to the specified threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#query_results_to_evaluate CloudwatchLogAlarm#query_results_to_evaluate}

---

##### `ScheduledQueryConfiguration`<sup>Required</sup> <a name="ScheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.scheduledQueryConfiguration"></a>

```go
ScheduledQueryConfiguration CloudwatchLogAlarmScheduledQueryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

The scheduled query configuration for the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#scheduled_query_configuration CloudwatchLogAlarm#scheduled_query_configuration}

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

The value to compare against the results of the scheduled query evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#threshold CloudwatchLogAlarm#threshold}

---

##### `ActionLogLineCount`<sup>Optional</sup> <a name="ActionLogLineCount" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineCount"></a>

```go
ActionLogLineCount *f64
```

- *Type:* *f64

The number of log lines to include in alarm notifications. Valid values are 0 to 50.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#action_log_line_count CloudwatchLogAlarm#action_log_line_count}

---

##### `ActionLogLineRoleArn`<sup>Optional</sup> <a name="ActionLogLineRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineRoleArn"></a>

```go
ActionLogLineRoleArn *string
```

- *Type:* *string

The ARN of the IAM role that grants CloudWatch permissions to fetch log lines for alarm notifications.

Required when ActionLogLineCount is greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#action_log_line_role_arn CloudwatchLogAlarm#action_log_line_role_arn}

---

##### `ActionsEnabled`<sup>Optional</sup> <a name="ActionsEnabled" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionsEnabled"></a>

```go
ActionsEnabled interface{}
```

- *Type:* interface{}

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#actions_enabled CloudwatchLogAlarm#actions_enabled}

---

##### `AlarmActions`<sup>Optional</sup> <a name="AlarmActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmActions"></a>

```go
AlarmActions *[]*string
```

- *Type:* *[]*string

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#alarm_actions CloudwatchLogAlarm#alarm_actions}

---

##### `AlarmDescription`<sup>Optional</sup> <a name="AlarmDescription" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmDescription"></a>

```go
AlarmDescription *string
```

- *Type:* *string

The description of the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#alarm_description CloudwatchLogAlarm#alarm_description}

---

##### `AlarmName`<sup>Optional</sup> <a name="AlarmName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmName"></a>

```go
AlarmName *string
```

- *Type:* *string

The name of the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#alarm_name CloudwatchLogAlarm#alarm_name}

---

##### `InsufficientDataActions`<sup>Optional</sup> <a name="InsufficientDataActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.insufficientDataActions"></a>

```go
InsufficientDataActions *[]*string
```

- *Type:* *[]*string

The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#insufficient_data_actions CloudwatchLogAlarm#insufficient_data_actions}

---

##### `OkActions`<sup>Optional</sup> <a name="OkActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.okActions"></a>

```go
OkActions *[]*string
```

- *Type:* *[]*string

The actions to execute when this alarm transitions to the OK state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#ok_actions CloudwatchLogAlarm#ok_actions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of key-value pairs to associate with the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#tags CloudwatchLogAlarm#tags}

---

##### `TreatMissingData`<sup>Optional</sup> <a name="TreatMissingData" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.treatMissingData"></a>

```go
TreatMissingData *string
```

- *Type:* *string

Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#treat_missing_data CloudwatchLogAlarm#treat_missing_data}

---

##### `WarmUpConfiguration`<sup>Optional</sup> <a name="WarmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.warmUpConfiguration"></a>

```go
WarmUpConfiguration CloudwatchLogAlarmWarmUpConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a>

The warm-up configuration for the alarm.

During the warm-up period, the alarm stays in INSUFFICIENT_DATA and doesn't perform alarm actions. For more information, see Alarm warm-up periods in the Amazon CloudWatch User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#warm_up_configuration CloudwatchLogAlarm#warm_up_configuration}

---

### CloudwatchLogAlarmScheduledQueryConfiguration <a name="CloudwatchLogAlarmScheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

&cloudwatchlogalarm.CloudwatchLogAlarmScheduledQueryConfiguration {
	AggregationExpression: *string,
	QueryString: *string,
	ScheduleConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration,
	ScheduledQueryRoleArn: *string,
	LogGroupIdentifiers: *[]*string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.aggregationExpression">AggregationExpression</a></code> | <code>*string</code> | The aggregation expression for the scheduled query, e.g. count(*) or avg(latency) by host. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.queryString">QueryString</a></code> | <code>*string</code> | The query string to execute against the specified log groups. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduleConfiguration">ScheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a></code> | The schedule configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduledQueryRoleArn">ScheduledQueryRoleArn</a></code> | <code>*string</code> | The ARN of the IAM role that grants permissions to execute the scheduled query. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.logGroupIdentifiers">LogGroupIdentifiers</a></code> | <code>*[]*string</code> | The log groups to query. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.tags">Tags</a></code> | <code>interface{}</code> | A list of key-value pairs to associate with the scheduled query that backs the log alarm. |

---

##### `AggregationExpression`<sup>Required</sup> <a name="AggregationExpression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.aggregationExpression"></a>

```go
AggregationExpression *string
```

- *Type:* *string

The aggregation expression for the scheduled query, e.g. count(*) or avg(latency) by host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#aggregation_expression CloudwatchLogAlarm#aggregation_expression}

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.queryString"></a>

```go
QueryString *string
```

- *Type:* *string

The query string to execute against the specified log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#query_string CloudwatchLogAlarm#query_string}

---

##### `ScheduleConfiguration`<sup>Required</sup> <a name="ScheduleConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduleConfiguration"></a>

```go
ScheduleConfiguration CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

The schedule configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#schedule_configuration CloudwatchLogAlarm#schedule_configuration}

---

##### `ScheduledQueryRoleArn`<sup>Required</sup> <a name="ScheduledQueryRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduledQueryRoleArn"></a>

```go
ScheduledQueryRoleArn *string
```

- *Type:* *string

The ARN of the IAM role that grants permissions to execute the scheduled query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#scheduled_query_role_arn CloudwatchLogAlarm#scheduled_query_role_arn}

---

##### `LogGroupIdentifiers`<sup>Optional</sup> <a name="LogGroupIdentifiers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.logGroupIdentifiers"></a>

```go
LogGroupIdentifiers *[]*string
```

- *Type:* *[]*string

The log groups to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#log_group_identifiers CloudwatchLogAlarm#log_group_identifiers}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of key-value pairs to associate with the scheduled query that backs the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#tags CloudwatchLogAlarm#tags}

---

### CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration <a name="CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

&cloudwatchlogalarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration {
	ScheduleExpression: *string,
	StartTimeOffset: *f64,
	EndTimeOffset: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | The expression that defines when the scheduled query runs, e.g. rate(1 minute). |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.startTimeOffset">StartTimeOffset</a></code> | <code>*f64</code> | The number of seconds into the past to start the query window. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.endTimeOffset">EndTimeOffset</a></code> | <code>*f64</code> | The number of seconds into the past to end the query window. |

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.scheduleExpression"></a>

```go
ScheduleExpression *string
```

- *Type:* *string

The expression that defines when the scheduled query runs, e.g. rate(1 minute).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#schedule_expression CloudwatchLogAlarm#schedule_expression}

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.startTimeOffset"></a>

```go
StartTimeOffset *f64
```

- *Type:* *f64

The number of seconds into the past to start the query window.

Must be a positive value and cannot exceed 2592000 seconds (30 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#start_time_offset CloudwatchLogAlarm#start_time_offset}

---

##### `EndTimeOffset`<sup>Optional</sup> <a name="EndTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.endTimeOffset"></a>

```go
EndTimeOffset *f64
```

- *Type:* *f64

The number of seconds into the past to end the query window.

Must be a non-negative value and cannot exceed 2592000 seconds (30 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#end_time_offset CloudwatchLogAlarm#end_time_offset}

---

### CloudwatchLogAlarmScheduledQueryConfigurationTags <a name="CloudwatchLogAlarmScheduledQueryConfigurationTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

&cloudwatchlogalarm.CloudwatchLogAlarmScheduledQueryConfigurationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.key">Key</a></code> | <code>*string</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.value">Value</a></code> | <code>*string</code> | The value for the specified tag key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

A unique identifier for the tag.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#key CloudwatchLogAlarm#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#value CloudwatchLogAlarm#value}

---

### CloudwatchLogAlarmTags <a name="CloudwatchLogAlarmTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

&cloudwatchlogalarm.CloudwatchLogAlarmTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.key">Key</a></code> | <code>*string</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.value">Value</a></code> | <code>*string</code> | The value for the specified tag key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

A unique identifier for the tag.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#key CloudwatchLogAlarm#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#value CloudwatchLogAlarm#value}

---

### CloudwatchLogAlarmWarmUpConfiguration <a name="CloudwatchLogAlarmWarmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

&cloudwatchlogalarm.CloudwatchLogAlarmWarmUpConfiguration {
	OnlyStartEvaluatingAfterWarmUpPeriodEnds: interface{},
	WarmUpPeriodDurationInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration.property.onlyStartEvaluatingAfterWarmUpPeriodEnds">OnlyStartEvaluatingAfterWarmUpPeriodEnds</a></code> | <code>interface{}</code> | Specifies whether the alarm waits for the full warm-up period before it starts evaluating. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration.property.warmUpPeriodDurationInMinutes">WarmUpPeriodDurationInMinutes</a></code> | <code>*f64</code> | The length of the warm-up period, in minutes. |

---

##### `OnlyStartEvaluatingAfterWarmUpPeriodEnds`<sup>Optional</sup> <a name="OnlyStartEvaluatingAfterWarmUpPeriodEnds" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration.property.onlyStartEvaluatingAfterWarmUpPeriodEnds"></a>

```go
OnlyStartEvaluatingAfterWarmUpPeriodEnds interface{}
```

- *Type:* interface{}

Specifies whether the alarm waits for the full warm-up period before it starts evaluating.

If true, the alarm waits the entire WarmUpPeriodDurationInMinutes before it starts evaluating, even if metric data arrives earlier. If false, the alarm ends the warm-up period early and starts evaluating as soon as it has enough metric data to fill its evaluation window. This is the default behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#only_start_evaluating_after_warm_up_period_ends CloudwatchLogAlarm#only_start_evaluating_after_warm_up_period_ends}

---

##### `WarmUpPeriodDurationInMinutes`<sup>Optional</sup> <a name="WarmUpPeriodDurationInMinutes" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration.property.warmUpPeriodDurationInMinutes"></a>

```go
WarmUpPeriodDurationInMinutes *f64
```

- *Type:* *f64

The length of the warm-up period, in minutes.

For this duration after you create or update the alarm, the alarm stays in INSUFFICIENT_DATA and doesn't perform alarm actions. Valid values range from 1 to 2,880 minutes (2 days). You can change this value while the alarm is still in its warm-up period. Changes have no effect after the warm-up period ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#warm_up_period_duration_in_minutes CloudwatchLogAlarm#warm_up_period_duration_in_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogAlarmScheduledQueryConfigurationOutputReference <a name="CloudwatchLogAlarmScheduledQueryConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

cloudwatchlogalarm.NewCloudwatchLogAlarmScheduledQueryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchLogAlarmScheduledQueryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putScheduleConfiguration">PutScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetLogGroupIdentifiers">ResetLogGroupIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScheduleConfiguration` <a name="PutScheduleConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putScheduleConfiguration"></a>

```go
func PutScheduleConfiguration(value CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putScheduleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLogGroupIdentifiers` <a name="ResetLogGroupIdentifiers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetLogGroupIdentifiers"></a>

```go
func ResetLogGroupIdentifiers()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfiguration">ScheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList">CloudwatchLogAlarmScheduledQueryConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpressionInput">AggregationExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiersInput">LogGroupIdentifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfigurationInput">ScheduleConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArnInput">ScheduledQueryRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpression">AggregationExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiers">LogGroupIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryString">QueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArn">ScheduledQueryRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScheduleConfiguration`<sup>Required</sup> <a name="ScheduleConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfiguration"></a>

```go
func ScheduleConfiguration() CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tags"></a>

```go
func Tags() CloudwatchLogAlarmScheduledQueryConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList">CloudwatchLogAlarmScheduledQueryConfigurationTagsList</a>

---

##### `AggregationExpressionInput`<sup>Optional</sup> <a name="AggregationExpressionInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpressionInput"></a>

```go
func AggregationExpressionInput() *string
```

- *Type:* *string

---

##### `LogGroupIdentifiersInput`<sup>Optional</sup> <a name="LogGroupIdentifiersInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiersInput"></a>

```go
func LogGroupIdentifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() *string
```

- *Type:* *string

---

##### `ScheduleConfigurationInput`<sup>Optional</sup> <a name="ScheduleConfigurationInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfigurationInput"></a>

```go
func ScheduleConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduledQueryRoleArnInput`<sup>Optional</sup> <a name="ScheduledQueryRoleArnInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArnInput"></a>

```go
func ScheduledQueryRoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AggregationExpression`<sup>Required</sup> <a name="AggregationExpression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpression"></a>

```go
func AggregationExpression() *string
```

- *Type:* *string

---

##### `LogGroupIdentifiers`<sup>Required</sup> <a name="LogGroupIdentifiers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiers"></a>

```go
func LogGroupIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryString"></a>

```go
func QueryString() *string
```

- *Type:* *string

---

##### `ScheduledQueryRoleArn`<sup>Required</sup> <a name="ScheduledQueryRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArn"></a>

```go
func ScheduledQueryRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference <a name="CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

cloudwatchlogalarm.NewCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resetEndTimeOffset">ResetEndTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTimeOffset` <a name="ResetEndTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resetEndTimeOffset"></a>

```go
func ResetEndTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffsetInput">EndTimeOffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffset">EndTimeOffset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeOffsetInput`<sup>Optional</sup> <a name="EndTimeOffsetInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffsetInput"></a>

```go
func EndTimeOffsetInput() *f64
```

- *Type:* *f64

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpressionInput"></a>

```go
func ScheduleExpressionInput() *string
```

- *Type:* *string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffsetInput"></a>

```go
func StartTimeOffsetInput() *f64
```

- *Type:* *f64

---

##### `EndTimeOffset`<sup>Required</sup> <a name="EndTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffset"></a>

```go
func EndTimeOffset() *f64
```

- *Type:* *f64

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffset"></a>

```go
func StartTimeOffset() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogAlarmScheduledQueryConfigurationTagsList <a name="CloudwatchLogAlarmScheduledQueryConfigurationTagsList" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

cloudwatchlogalarm.NewCloudwatchLogAlarmScheduledQueryConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogAlarmScheduledQueryConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.get"></a>

```go
func Get(index *f64) CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference <a name="CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

cloudwatchlogalarm.NewCloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogAlarmTagsList <a name="CloudwatchLogAlarmTagsList" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

cloudwatchlogalarm.NewCloudwatchLogAlarmTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogAlarmTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.get"></a>

```go
func Get(index *f64) CloudwatchLogAlarmTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogAlarmTagsOutputReference <a name="CloudwatchLogAlarmTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

cloudwatchlogalarm.NewCloudwatchLogAlarmTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogAlarmTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogAlarmWarmUpConfigurationOutputReference <a name="CloudwatchLogAlarmWarmUpConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchlogalarm"

cloudwatchlogalarm.NewCloudwatchLogAlarmWarmUpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchLogAlarmWarmUpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resetOnlyStartEvaluatingAfterWarmUpPeriodEnds">ResetOnlyStartEvaluatingAfterWarmUpPeriodEnds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resetWarmUpPeriodDurationInMinutes">ResetWarmUpPeriodDurationInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOnlyStartEvaluatingAfterWarmUpPeriodEnds` <a name="ResetOnlyStartEvaluatingAfterWarmUpPeriodEnds" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resetOnlyStartEvaluatingAfterWarmUpPeriodEnds"></a>

```go
func ResetOnlyStartEvaluatingAfterWarmUpPeriodEnds()
```

##### `ResetWarmUpPeriodDurationInMinutes` <a name="ResetWarmUpPeriodDurationInMinutes" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resetWarmUpPeriodDurationInMinutes"></a>

```go
func ResetWarmUpPeriodDurationInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEndsInput">OnlyStartEvaluatingAfterWarmUpPeriodEndsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutesInput">WarmUpPeriodDurationInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEnds">OnlyStartEvaluatingAfterWarmUpPeriodEnds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutes">WarmUpPeriodDurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnlyStartEvaluatingAfterWarmUpPeriodEndsInput`<sup>Optional</sup> <a name="OnlyStartEvaluatingAfterWarmUpPeriodEndsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEndsInput"></a>

```go
func OnlyStartEvaluatingAfterWarmUpPeriodEndsInput() interface{}
```

- *Type:* interface{}

---

##### `WarmUpPeriodDurationInMinutesInput`<sup>Optional</sup> <a name="WarmUpPeriodDurationInMinutesInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutesInput"></a>

```go
func WarmUpPeriodDurationInMinutesInput() *f64
```

- *Type:* *f64

---

##### `OnlyStartEvaluatingAfterWarmUpPeriodEnds`<sup>Required</sup> <a name="OnlyStartEvaluatingAfterWarmUpPeriodEnds" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEnds"></a>

```go
func OnlyStartEvaluatingAfterWarmUpPeriodEnds() interface{}
```

- *Type:* interface{}

---

##### `WarmUpPeriodDurationInMinutes`<sup>Required</sup> <a name="WarmUpPeriodDurationInMinutes" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutes"></a>

```go
func WarmUpPeriodDurationInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



