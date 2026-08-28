# `cloudwatchAlarm` Submodule <a name="`cloudwatchAlarm` Submodule" id="@cdktn/provider-awscc.cloudwatchAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchAlarm <a name="CloudwatchAlarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm awscc_cloudwatch_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.NewCloudwatchAlarm(scope Construct, id *string, config CloudwatchAlarmConfig) CloudwatchAlarm
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig">CloudwatchAlarmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig">CloudwatchAlarmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationCriteria">PutEvaluationCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationWindow">PutEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putMetrics">PutMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putWarmUpConfiguration">PutWarmUpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetActionsEnabled">ResetActionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmActions">ResetAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmDescription">ResetAlarmDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmName">ResetAlarmName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetComparisonOperator">ResetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetDatapointsToAlarm">ResetDatapointsToAlarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluateLowSampleCountPercentile">ResetEvaluateLowSampleCountPercentile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationCriteria">ResetEvaluationCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationInterval">ResetEvaluationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationPeriods">ResetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationWindow">ResetEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetExtendedStatistic">ResetExtendedStatistic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetInsufficientDataActions">ResetInsufficientDataActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetMetricName">ResetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetMetrics">ResetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetOkActions">ResetOkActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetStatistic">ResetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetThreshold">ResetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetThresholdMetricId">ResetThresholdMetricId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetTreatMissingData">ResetTreatMissingData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetWarmUpConfiguration">ResetWarmUpConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDimensions` <a name="PutDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putDimensions"></a>

```go
func PutDimensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putDimensions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEvaluationCriteria` <a name="PutEvaluationCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationCriteria"></a>

```go
func PutEvaluationCriteria(value CloudwatchAlarmEvaluationCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a>

---

##### `PutEvaluationWindow` <a name="PutEvaluationWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationWindow"></a>

```go
func PutEvaluationWindow(value CloudwatchAlarmEvaluationWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a>

---

##### `PutMetrics` <a name="PutMetrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putMetrics"></a>

```go
func PutMetrics(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putMetrics.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWarmUpConfiguration` <a name="PutWarmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putWarmUpConfiguration"></a>

```go
func PutWarmUpConfiguration(value CloudwatchAlarmWarmUpConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putWarmUpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration">CloudwatchAlarmWarmUpConfiguration</a>

---

##### `ResetActionsEnabled` <a name="ResetActionsEnabled" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetActionsEnabled"></a>

```go
func ResetActionsEnabled()
```

##### `ResetAlarmActions` <a name="ResetAlarmActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmActions"></a>

```go
func ResetAlarmActions()
```

##### `ResetAlarmDescription` <a name="ResetAlarmDescription" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmDescription"></a>

```go
func ResetAlarmDescription()
```

##### `ResetAlarmName` <a name="ResetAlarmName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmName"></a>

```go
func ResetAlarmName()
```

##### `ResetComparisonOperator` <a name="ResetComparisonOperator" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetComparisonOperator"></a>

```go
func ResetComparisonOperator()
```

##### `ResetDatapointsToAlarm` <a name="ResetDatapointsToAlarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetDatapointsToAlarm"></a>

```go
func ResetDatapointsToAlarm()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetDimensions"></a>

```go
func ResetDimensions()
```

##### `ResetEvaluateLowSampleCountPercentile` <a name="ResetEvaluateLowSampleCountPercentile" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluateLowSampleCountPercentile"></a>

```go
func ResetEvaluateLowSampleCountPercentile()
```

##### `ResetEvaluationCriteria` <a name="ResetEvaluationCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationCriteria"></a>

```go
func ResetEvaluationCriteria()
```

##### `ResetEvaluationInterval` <a name="ResetEvaluationInterval" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationInterval"></a>

```go
func ResetEvaluationInterval()
```

##### `ResetEvaluationPeriods` <a name="ResetEvaluationPeriods" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationPeriods"></a>

```go
func ResetEvaluationPeriods()
```

##### `ResetEvaluationWindow` <a name="ResetEvaluationWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationWindow"></a>

```go
func ResetEvaluationWindow()
```

##### `ResetExtendedStatistic` <a name="ResetExtendedStatistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetExtendedStatistic"></a>

```go
func ResetExtendedStatistic()
```

##### `ResetInsufficientDataActions` <a name="ResetInsufficientDataActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetInsufficientDataActions"></a>

```go
func ResetInsufficientDataActions()
```

##### `ResetMetricName` <a name="ResetMetricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetMetricName"></a>

```go
func ResetMetricName()
```

##### `ResetMetrics` <a name="ResetMetrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetMetrics"></a>

```go
func ResetMetrics()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOkActions` <a name="ResetOkActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetOkActions"></a>

```go
func ResetOkActions()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetStatistic` <a name="ResetStatistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetStatistic"></a>

```go
func ResetStatistic()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetTags"></a>

```go
func ResetTags()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetThreshold"></a>

```go
func ResetThreshold()
```

##### `ResetThresholdMetricId` <a name="ResetThresholdMetricId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetThresholdMetricId"></a>

```go
func ResetThresholdMetricId()
```

##### `ResetTreatMissingData` <a name="ResetTreatMissingData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetTreatMissingData"></a>

```go
func ResetTreatMissingData()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetUnit"></a>

```go
func ResetUnit()
```

##### `ResetWarmUpConfiguration` <a name="ResetWarmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetWarmUpConfiguration"></a>

```go
func ResetWarmUpConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.CloudwatchAlarm_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.CloudwatchAlarm_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.CloudwatchAlarm_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.CloudwatchAlarm_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudwatchAlarm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudwatchAlarm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudwatchAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList">CloudwatchAlarmDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationCriteria">EvaluationCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference">CloudwatchAlarmEvaluationCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationWindow">EvaluationWindow</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference">CloudwatchAlarmEvaluationWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metrics">Metrics</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList">CloudwatchAlarmMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList">CloudwatchAlarmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.warmUpConfiguration">WarmUpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference">CloudwatchAlarmWarmUpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.actionsEnabledInput">ActionsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmActionsInput">AlarmActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmDescriptionInput">AlarmDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmNameInput">AlarmNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.datapointsToAlarmInput">DatapointsToAlarmInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dimensionsInput">DimensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluateLowSampleCountPercentileInput">EvaluateLowSampleCountPercentileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationCriteriaInput">EvaluationCriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationIntervalInput">EvaluationIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationPeriodsInput">EvaluationPeriodsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationWindowInput">EvaluationWindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.extendedStatisticInput">ExtendedStatisticInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.insufficientDataActionsInput">InsufficientDataActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricsInput">MetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.okActionsInput">OkActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.periodInput">PeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.statisticInput">StatisticInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdMetricIdInput">ThresholdMetricIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.treatMissingDataInput">TreatMissingDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.warmUpConfigurationInput">WarmUpConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.actionsEnabled">ActionsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmActions">AlarmActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmDescription">AlarmDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmName">AlarmName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.datapointsToAlarm">DatapointsToAlarm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluateLowSampleCountPercentile">EvaluateLowSampleCountPercentile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationInterval">EvaluationInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.extendedStatistic">ExtendedStatistic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.insufficientDataActions">InsufficientDataActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.okActions">OkActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.statistic">Statistic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdMetricId">ThresholdMetricId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.treatMissingData">TreatMissingData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dimensions"></a>

```go
func Dimensions() CloudwatchAlarmDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList">CloudwatchAlarmDimensionsList</a>

---

##### `EvaluationCriteria`<sup>Required</sup> <a name="EvaluationCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationCriteria"></a>

```go
func EvaluationCriteria() CloudwatchAlarmEvaluationCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference">CloudwatchAlarmEvaluationCriteriaOutputReference</a>

---

##### `EvaluationWindow`<sup>Required</sup> <a name="EvaluationWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationWindow"></a>

```go
func EvaluationWindow() CloudwatchAlarmEvaluationWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference">CloudwatchAlarmEvaluationWindowOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metrics"></a>

```go
func Metrics() CloudwatchAlarmMetricsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList">CloudwatchAlarmMetricsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tags"></a>

```go
func Tags() CloudwatchAlarmTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList">CloudwatchAlarmTagsList</a>

---

##### `WarmUpConfiguration`<sup>Required</sup> <a name="WarmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.warmUpConfiguration"></a>

```go
func WarmUpConfiguration() CloudwatchAlarmWarmUpConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference">CloudwatchAlarmWarmUpConfigurationOutputReference</a>

---

##### `ActionsEnabledInput`<sup>Optional</sup> <a name="ActionsEnabledInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.actionsEnabledInput"></a>

```go
func ActionsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AlarmActionsInput`<sup>Optional</sup> <a name="AlarmActionsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmActionsInput"></a>

```go
func AlarmActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AlarmDescriptionInput`<sup>Optional</sup> <a name="AlarmDescriptionInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmDescriptionInput"></a>

```go
func AlarmDescriptionInput() *string
```

- *Type:* *string

---

##### `AlarmNameInput`<sup>Optional</sup> <a name="AlarmNameInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmNameInput"></a>

```go
func AlarmNameInput() *string
```

- *Type:* *string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.comparisonOperatorInput"></a>

```go
func ComparisonOperatorInput() *string
```

- *Type:* *string

---

##### `DatapointsToAlarmInput`<sup>Optional</sup> <a name="DatapointsToAlarmInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.datapointsToAlarmInput"></a>

```go
func DatapointsToAlarmInput() *f64
```

- *Type:* *f64

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dimensionsInput"></a>

```go
func DimensionsInput() interface{}
```

- *Type:* interface{}

---

##### `EvaluateLowSampleCountPercentileInput`<sup>Optional</sup> <a name="EvaluateLowSampleCountPercentileInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluateLowSampleCountPercentileInput"></a>

```go
func EvaluateLowSampleCountPercentileInput() *string
```

- *Type:* *string

---

##### `EvaluationCriteriaInput`<sup>Optional</sup> <a name="EvaluationCriteriaInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationCriteriaInput"></a>

```go
func EvaluationCriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `EvaluationIntervalInput`<sup>Optional</sup> <a name="EvaluationIntervalInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationIntervalInput"></a>

```go
func EvaluationIntervalInput() *f64
```

- *Type:* *f64

---

##### `EvaluationPeriodsInput`<sup>Optional</sup> <a name="EvaluationPeriodsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationPeriodsInput"></a>

```go
func EvaluationPeriodsInput() *f64
```

- *Type:* *f64

---

##### `EvaluationWindowInput`<sup>Optional</sup> <a name="EvaluationWindowInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationWindowInput"></a>

```go
func EvaluationWindowInput() interface{}
```

- *Type:* interface{}

---

##### `ExtendedStatisticInput`<sup>Optional</sup> <a name="ExtendedStatisticInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.extendedStatisticInput"></a>

```go
func ExtendedStatisticInput() *string
```

- *Type:* *string

---

##### `InsufficientDataActionsInput`<sup>Optional</sup> <a name="InsufficientDataActionsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.insufficientDataActionsInput"></a>

```go
func InsufficientDataActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `MetricsInput`<sup>Optional</sup> <a name="MetricsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricsInput"></a>

```go
func MetricsInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OkActionsInput`<sup>Optional</sup> <a name="OkActionsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.okActionsInput"></a>

```go
func OkActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.periodInput"></a>

```go
func PeriodInput() *f64
```

- *Type:* *f64

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.statisticInput"></a>

```go
func StatisticInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `ThresholdMetricIdInput`<sup>Optional</sup> <a name="ThresholdMetricIdInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdMetricIdInput"></a>

```go
func ThresholdMetricIdInput() *string
```

- *Type:* *string

---

##### `TreatMissingDataInput`<sup>Optional</sup> <a name="TreatMissingDataInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.treatMissingDataInput"></a>

```go
func TreatMissingDataInput() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `WarmUpConfigurationInput`<sup>Optional</sup> <a name="WarmUpConfigurationInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.warmUpConfigurationInput"></a>

```go
func WarmUpConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ActionsEnabled`<sup>Required</sup> <a name="ActionsEnabled" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.actionsEnabled"></a>

```go
func ActionsEnabled() interface{}
```

- *Type:* interface{}

---

##### `AlarmActions`<sup>Required</sup> <a name="AlarmActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmActions"></a>

```go
func AlarmActions() *[]*string
```

- *Type:* *[]*string

---

##### `AlarmDescription`<sup>Required</sup> <a name="AlarmDescription" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmDescription"></a>

```go
func AlarmDescription() *string
```

- *Type:* *string

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmName"></a>

```go
func AlarmName() *string
```

- *Type:* *string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.comparisonOperator"></a>

```go
func ComparisonOperator() *string
```

- *Type:* *string

---

##### `DatapointsToAlarm`<sup>Required</sup> <a name="DatapointsToAlarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.datapointsToAlarm"></a>

```go
func DatapointsToAlarm() *f64
```

- *Type:* *f64

---

##### `EvaluateLowSampleCountPercentile`<sup>Required</sup> <a name="EvaluateLowSampleCountPercentile" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluateLowSampleCountPercentile"></a>

```go
func EvaluateLowSampleCountPercentile() *string
```

- *Type:* *string

---

##### `EvaluationInterval`<sup>Required</sup> <a name="EvaluationInterval" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationInterval"></a>

```go
func EvaluationInterval() *f64
```

- *Type:* *f64

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationPeriods"></a>

```go
func EvaluationPeriods() *f64
```

- *Type:* *f64

---

##### `ExtendedStatistic`<sup>Required</sup> <a name="ExtendedStatistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.extendedStatistic"></a>

```go
func ExtendedStatistic() *string
```

- *Type:* *string

---

##### `InsufficientDataActions`<sup>Required</sup> <a name="InsufficientDataActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.insufficientDataActions"></a>

```go
func InsufficientDataActions() *[]*string
```

- *Type:* *[]*string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OkActions`<sup>Required</sup> <a name="OkActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.okActions"></a>

```go
func OkActions() *[]*string
```

- *Type:* *[]*string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.statistic"></a>

```go
func Statistic() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `ThresholdMetricId`<sup>Required</sup> <a name="ThresholdMetricId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdMetricId"></a>

```go
func ThresholdMetricId() *string
```

- *Type:* *string

---

##### `TreatMissingData`<sup>Required</sup> <a name="TreatMissingData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.treatMissingData"></a>

```go
func TreatMissingData() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchAlarmConfig <a name="CloudwatchAlarmConfig" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

&cloudwatchalarm.CloudwatchAlarmConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ActionsEnabled: interface{},
	AlarmActions: *[]*string,
	AlarmDescription: *string,
	AlarmName: *string,
	ComparisonOperator: *string,
	DatapointsToAlarm: *f64,
	Dimensions: interface{},
	EvaluateLowSampleCountPercentile: *string,
	EvaluationCriteria: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria,
	EvaluationInterval: *f64,
	EvaluationPeriods: *f64,
	EvaluationWindow: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow,
	ExtendedStatistic: *string,
	InsufficientDataActions: *[]*string,
	MetricName: *string,
	Metrics: interface{},
	Namespace: *string,
	OkActions: *[]*string,
	Period: *f64,
	Statistic: *string,
	Tags: interface{},
	Threshold: *f64,
	ThresholdMetricId: *string,
	TreatMissingData: *string,
	Unit: *string,
	WarmUpConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.actionsEnabled">ActionsEnabled</a></code> | <code>interface{}</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmActions">AlarmActions</a></code> | <code>*[]*string</code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmDescription">AlarmDescription</a></code> | <code>*string</code> | The description of the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmName">AlarmName</a></code> | <code>*string</code> | The name of the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | The arithmetic operation to use when comparing the specified statistic and threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.datapointsToAlarm">DatapointsToAlarm</a></code> | <code>*f64</code> | The number of datapoints that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.dimensions">Dimensions</a></code> | <code>interface{}</code> | The dimensions for the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluateLowSampleCountPercentile">EvaluateLowSampleCountPercentile</a></code> | <code>*string</code> | Used only for alarms based on percentiles. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationCriteria">EvaluationCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a></code> | The evaluation criteria for the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationInterval">EvaluationInterval</a></code> | <code>*f64</code> | The frequency, in seconds, at which the alarm is evaluated. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>*f64</code> | The number of periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationWindow">EvaluationWindow</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a></code> | The evaluation window that the alarm uses to select the range of metric data that it evaluates. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.extendedStatistic">ExtendedStatistic</a></code> | <code>*string</code> | The percentile statistic for the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.insufficientDataActions">InsufficientDataActions</a></code> | <code>*[]*string</code> | The actions to execute when this alarm transitions to the ``INSUFFICIENT_DATA`` state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.metricName">MetricName</a></code> | <code>*string</code> | The name of the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.metrics">Metrics</a></code> | <code>interface{}</code> | An array that enables you to create an alarm based on the result of a metric math expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace of the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.okActions">OkActions</a></code> | <code>*[]*string</code> | The actions to execute when this alarm transitions to the ``OK`` state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.period">Period</a></code> | <code>*f64</code> | The period, in seconds, over which the statistic is applied. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.statistic">Statistic</a></code> | <code>*string</code> | The statistic for the metric associated with the alarm, other than percentile. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of key-value pairs to associate with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.threshold">Threshold</a></code> | <code>*f64</code> | The value to compare with the specified statistic. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.thresholdMetricId">ThresholdMetricId</a></code> | <code>*string</code> | In an alarm based on an anomaly detection model, this is the ID of the ``ANOMALY_DETECTION_BAND`` function used as the threshold for the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.treatMissingData">TreatMissingData</a></code> | <code>*string</code> | Sets how this alarm is to handle missing data points. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.unit">Unit</a></code> | <code>*string</code> | The unit of the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.warmUpConfiguration">WarmUpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration">CloudwatchAlarmWarmUpConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#warm_up_configuration CloudwatchAlarm#warm_up_configuration}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionsEnabled`<sup>Optional</sup> <a name="ActionsEnabled" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.actionsEnabled"></a>

```go
ActionsEnabled interface{}
```

- *Type:* interface{}

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#actions_enabled CloudwatchAlarm#actions_enabled}

---

##### `AlarmActions`<sup>Optional</sup> <a name="AlarmActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmActions"></a>

```go
AlarmActions *[]*string
```

- *Type:* *[]*string

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Specify each action as an Amazon Resource Name (ARN). For more information about creating alarms and the actions that you can specify, see [PutMetricAlarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html) in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#alarm_actions CloudwatchAlarm#alarm_actions}

---

##### `AlarmDescription`<sup>Optional</sup> <a name="AlarmDescription" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmDescription"></a>

```go
AlarmDescription *string
```

- *Type:* *string

The description of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#alarm_description CloudwatchAlarm#alarm_description}

---

##### `AlarmName`<sup>Optional</sup> <a name="AlarmName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmName"></a>

```go
AlarmName *string
```

- *Type:* *string

The name of the alarm.

If you don't specify a name, CFN generates a unique physical ID and uses that ID for the alarm name.
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#alarm_name CloudwatchAlarm#alarm_name}

---

##### `ComparisonOperator`<sup>Optional</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.comparisonOperator"></a>

```go
ComparisonOperator *string
```

- *Type:* *string

The arithmetic operation to use when comparing the specified statistic and threshold.

The specified statistic value is used as the first operand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#comparison_operator CloudwatchAlarm#comparison_operator}

---

##### `DatapointsToAlarm`<sup>Optional</sup> <a name="DatapointsToAlarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.datapointsToAlarm"></a>

```go
DatapointsToAlarm *f64
```

- *Type:* *f64

The number of datapoints that must be breaching to trigger the alarm.

This is used only if you are setting an "M out of N" alarm. In that case, this value is the M, and the value that you set for `EvaluationPeriods` is the N value. For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.
If you omit this parameter, CW uses the same value here that you set for `EvaluationPeriods`, and the alarm goes to alarm state if that many consecutive periods are breaching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#datapoints_to_alarm CloudwatchAlarm#datapoints_to_alarm}

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.dimensions"></a>

```go
Dimensions interface{}
```

- *Type:* interface{}

The dimensions for the metric associated with the alarm.

For an alarm based on a math expression, you can't specify `Dimensions`. Instead, you use `Metrics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#dimensions CloudwatchAlarm#dimensions}

---

##### `EvaluateLowSampleCountPercentile`<sup>Optional</sup> <a name="EvaluateLowSampleCountPercentile" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluateLowSampleCountPercentile"></a>

```go
EvaluateLowSampleCountPercentile *string
```

- *Type:* *string

Used only for alarms based on percentiles.

If `ignore`, the alarm state does not change during periods with too few data points to be statistically significant. If `evaluate` or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#evaluate_low_sample_count_percentile CloudwatchAlarm#evaluate_low_sample_count_percentile}

---

##### `EvaluationCriteria`<sup>Optional</sup> <a name="EvaluationCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationCriteria"></a>

```go
EvaluationCriteria CloudwatchAlarmEvaluationCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a>

The evaluation criteria for the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#evaluation_criteria CloudwatchAlarm#evaluation_criteria}

---

##### `EvaluationInterval`<sup>Optional</sup> <a name="EvaluationInterval" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationInterval"></a>

```go
EvaluationInterval *f64
```

- *Type:* *f64

The frequency, in seconds, at which the alarm is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#evaluation_interval CloudwatchAlarm#evaluation_interval}

---

##### `EvaluationPeriods`<sup>Optional</sup> <a name="EvaluationPeriods" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationPeriods"></a>

```go
EvaluationPeriods *f64
```

- *Type:* *f64

The number of periods over which data is compared to the specified threshold.

If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an "M out of N" alarm, this value is the N, and `DatapointsToAlarm` is the M.
For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#evaluation_periods CloudwatchAlarm#evaluation_periods}

---

##### `EvaluationWindow`<sup>Optional</sup> <a name="EvaluationWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationWindow"></a>

```go
EvaluationWindow CloudwatchAlarmEvaluationWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a>

The evaluation window that the alarm uses to select the range of metric data that it evaluates.

This is either a sliding window or a wall clock window. For more information, see [Alarm evaluation windows](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm-evaluation-window.html) in the *CloudWatch User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#evaluation_window CloudwatchAlarm#evaluation_window}

---

##### `ExtendedStatistic`<sup>Optional</sup> <a name="ExtendedStatistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.extendedStatistic"></a>

```go
ExtendedStatistic *string
```

- *Type:* *string

The percentile statistic for the metric associated with the alarm.

Specify a value between p0.0 and p100.
For an alarm based on a metric, you must specify either `Statistic` or `ExtendedStatistic` but not both.
For an alarm based on a math expression, you can't specify `ExtendedStatistic`. Instead, you use `Metrics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#extended_statistic CloudwatchAlarm#extended_statistic}

---

##### `InsufficientDataActions`<sup>Optional</sup> <a name="InsufficientDataActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.insufficientDataActions"></a>

```go
InsufficientDataActions *[]*string
```

- *Type:* *[]*string

The actions to execute when this alarm transitions to the ``INSUFFICIENT_DATA`` state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#insufficient_data_actions CloudwatchAlarm#insufficient_data_actions}

---

##### `MetricName`<sup>Optional</sup> <a name="MetricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

The name of the metric associated with the alarm.

This is required for an alarm based on a metric. For an alarm based on a math expression, you use `Metrics` instead and you can't specify `MetricName`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#metric_name CloudwatchAlarm#metric_name}

---

##### `Metrics`<sup>Optional</sup> <a name="Metrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.metrics"></a>

```go
Metrics interface{}
```

- *Type:* interface{}

An array that enables you to create an alarm based on the result of a metric math expression.

Each item in the array either retrieves a metric or performs a math expression.
If you specify the `Metrics` parameter, you cannot specify `MetricName`, `Dimensions`, `Period`, `Namespace`, `Statistic`, `ExtendedStatistic`, or `Unit`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#metrics CloudwatchAlarm#metrics}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace of the metric associated with the alarm.

This is required for an alarm based on a metric. For an alarm based on a math expression, you can't specify `Namespace` and you use `Metrics` instead.
For a list of namespaces for metrics from AWS services, see [Services That Publish Metrics.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#namespace CloudwatchAlarm#namespace}

---

##### `OkActions`<sup>Optional</sup> <a name="OkActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.okActions"></a>

```go
OkActions *[]*string
```

- *Type:* *[]*string

The actions to execute when this alarm transitions to the ``OK`` state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#ok_actions CloudwatchAlarm#ok_actions}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.period"></a>

```go
Period *f64
```

- *Type:* *f64

The period, in seconds, over which the statistic is applied.

This is required for an alarm based on a metric. Valid values are 10, 20, 30, 60, and any multiple of 60.
For an alarm based on a math expression, you can't specify `Period`, and instead you use the `Metrics` parameter.
*Minimum:* 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}

---

##### `Statistic`<sup>Optional</sup> <a name="Statistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.statistic"></a>

```go
Statistic *string
```

- *Type:* *string

The statistic for the metric associated with the alarm, other than percentile.

For percentile statistics, use `ExtendedStatistic`.
For an alarm based on a metric, you must specify either `Statistic` or `ExtendedStatistic` but not both.
For an alarm based on a math expression, you can't specify `Statistic`. Instead, you use `Metrics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#statistic CloudwatchAlarm#statistic}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of key-value pairs to associate with the alarm.

You can associate as many as 50 tags with an alarm. To be able to associate tags with the alarm when you create the alarm, you must have the `cloudwatch:TagResource` permission.
Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#tags CloudwatchAlarm#tags}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

The value to compare with the specified statistic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#threshold CloudwatchAlarm#threshold}

---

##### `ThresholdMetricId`<sup>Optional</sup> <a name="ThresholdMetricId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.thresholdMetricId"></a>

```go
ThresholdMetricId *string
```

- *Type:* *string

In an alarm based on an anomaly detection model, this is the ID of the ``ANOMALY_DETECTION_BAND`` function used as the threshold for the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#threshold_metric_id CloudwatchAlarm#threshold_metric_id}

---

##### `TreatMissingData`<sup>Optional</sup> <a name="TreatMissingData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.treatMissingData"></a>

```go
TreatMissingData *string
```

- *Type:* *string

Sets how this alarm is to handle missing data points.

Valid values are `breaching`, `notBreaching`, `ignore`, and `missing`. For more information, see [Configuring How Alarms Treat Missing Data](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data) in the *Amazon User Guide*.
If you omit this parameter, the default behavior of `missing` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#treat_missing_data CloudwatchAlarm#treat_missing_data}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

The unit of the metric associated with the alarm.

Specify this only if you are creating an alarm based on a single metric. Do not specify this if you are specifying a `Metrics` array.
You can specify the following values: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#unit CloudwatchAlarm#unit}

---

##### `WarmUpConfiguration`<sup>Optional</sup> <a name="WarmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.warmUpConfiguration"></a>

```go
WarmUpConfiguration CloudwatchAlarmWarmUpConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration">CloudwatchAlarmWarmUpConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#warm_up_configuration CloudwatchAlarm#warm_up_configuration}.

---

### CloudwatchAlarmDimensions <a name="CloudwatchAlarmDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

&cloudwatchalarm.CloudwatchAlarmDimensions {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.property.name">Name</a></code> | <code>*string</code> | The name of the dimension, from 1–255 characters in length. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.property.value">Value</a></code> | <code>*string</code> | The value for the dimension, from 1–255 characters in length. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the dimension, from 1–255 characters in length.

This dimension name must have been included when the metric was published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#name CloudwatchAlarm#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the dimension, from 1–255 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#value CloudwatchAlarm#value}

---

### CloudwatchAlarmEvaluationCriteria <a name="CloudwatchAlarmEvaluationCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

&cloudwatchalarm.CloudwatchAlarmEvaluationCriteria {
	PromQlCriteria: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria.property.promQlCriteria">PromQlCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a></code> | The PromQL criteria for the alarm evaluation. |

---

##### `PromQlCriteria`<sup>Optional</sup> <a name="PromQlCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria.property.promQlCriteria"></a>

```go
PromQlCriteria CloudwatchAlarmEvaluationCriteriaPromQlCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a>

The PromQL criteria for the alarm evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#prom_ql_criteria CloudwatchAlarm#prom_ql_criteria}

---

### CloudwatchAlarmEvaluationCriteriaPromQlCriteria <a name="CloudwatchAlarmEvaluationCriteriaPromQlCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

&cloudwatchalarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria {
	PendingPeriod: *f64,
	Query: *string,
	RecoveryPeriod: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.pendingPeriod">PendingPeriod</a></code> | <code>*f64</code> | The duration, in seconds, that a contributor must be continuously breaching before it transitions to the ``ALARM`` state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.query">Query</a></code> | <code>*string</code> | The PromQL query that the alarm evaluates. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.recoveryPeriod">RecoveryPeriod</a></code> | <code>*f64</code> | The duration, in seconds, that a contributor must continuously not be breaching before it transitions back to the ``OK`` state. |

---

##### `PendingPeriod`<sup>Optional</sup> <a name="PendingPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.pendingPeriod"></a>

```go
PendingPeriod *f64
```

- *Type:* *f64

The duration, in seconds, that a contributor must be continuously breaching before it transitions to the ``ALARM`` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#pending_period CloudwatchAlarm#pending_period}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.query"></a>

```go
Query *string
```

- *Type:* *string

The PromQL query that the alarm evaluates.

The query must return a result of vector type. Each entry in the vector result represents an alarm contributor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#query CloudwatchAlarm#query}

---

##### `RecoveryPeriod`<sup>Optional</sup> <a name="RecoveryPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.recoveryPeriod"></a>

```go
RecoveryPeriod *f64
```

- *Type:* *f64

The duration, in seconds, that a contributor must continuously not be breaching before it transitions back to the ``OK`` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#recovery_period CloudwatchAlarm#recovery_period}

---

### CloudwatchAlarmEvaluationWindow <a name="CloudwatchAlarmEvaluationWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

&cloudwatchalarm.CloudwatchAlarmEvaluationWindow {
	SlidingWindow: *string,
	WallClockWindow: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.property.slidingWindow">SlidingWindow</a></code> | <code>*string</code> | A sliding window, which advances each time the alarm is evaluated, forming a rolling time window. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.property.wallClockWindow">WallClockWindow</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a></code> | A wall clock window, which aligns the evaluated range to fixed clock boundaries that match the alarm's period, such as the top of the hour, midnight, or the start of the calendar week. |

---

##### `SlidingWindow`<sup>Optional</sup> <a name="SlidingWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.property.slidingWindow"></a>

```go
SlidingWindow *string
```

- *Type:* *string

A sliding window, which advances each time the alarm is evaluated, forming a rolling time window.

This is the default evaluation window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#sliding_window CloudwatchAlarm#sliding_window}

---

##### `WallClockWindow`<sup>Optional</sup> <a name="WallClockWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.property.wallClockWindow"></a>

```go
WallClockWindow CloudwatchAlarmEvaluationWindowWallClockWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a>

A wall clock window, which aligns the evaluated range to fixed clock boundaries that match the alarm's period, such as the top of the hour, midnight, or the start of the calendar week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#wall_clock_window CloudwatchAlarm#wall_clock_window}

---

### CloudwatchAlarmEvaluationWindowWallClockWindow <a name="CloudwatchAlarmEvaluationWindowWallClockWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

&cloudwatchalarm.CloudwatchAlarmEvaluationWindowWallClockWindow {
	Timezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow.property.timezone">Timezone</a></code> | <code>*string</code> | The time zone to use when the alarm aligns the evaluation window to clock boundaries. |

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

The time zone to use when the alarm aligns the evaluation window to clock boundaries.

You can specify an IANA time zone name (for example, `America/New_York`), a fixed UTC offset (for example, `+05:30`), or an offset-prefixed identifier (for example, `UTC+05:30`). The offset must be aligned to a multiple of 5 minutes. If you don't specify a time zone, CloudWatch uses `UTC`.
The time zone affects window alignment for all periods, including periods of one hour or shorter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#timezone CloudwatchAlarm#timezone}

---

### CloudwatchAlarmMetrics <a name="CloudwatchAlarmMetrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

&cloudwatchalarm.CloudwatchAlarmMetrics {
	AccountId: *string,
	Expression: *string,
	Id: *string,
	Label: *string,
	MetricStat: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat,
	Period: *f64,
	ReturnData: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.accountId">AccountId</a></code> | <code>*string</code> | The ID of the account where the metrics are located, if this is a cross-account alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.expression">Expression</a></code> | <code>*string</code> | The math expression to be performed on the returned data, if this object is performing a math expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.id">Id</a></code> | <code>*string</code> | A short name used to tie this object to the results in the response. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.label">Label</a></code> | <code>*string</code> | A human-readable label for this metric or expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.metricStat">MetricStat</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a></code> | The metric to be returned, along with statistics, period, and units. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.period">Period</a></code> | <code>*f64</code> | The granularity, in seconds, of the returned data points. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.returnData">ReturnData</a></code> | <code>interface{}</code> | This option indicates whether to return the timestamps and raw data values of this metric. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The ID of the account where the metrics are located, if this is a cross-account alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#account_id CloudwatchAlarm#account_id}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

The math expression to be performed on the returned data, if this object is performing a math expression.

This expression can use the `Id` of the other metrics to refer to those metrics, and can also use the `Id` of other expressions to use the result of those expressions. For more information about metric math expressions, see [Metric Math Syntax and Functions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax) in the *User Guide*.
Within each MetricDataQuery object, you must specify either `Expression` or `MetricStat` but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#expression CloudwatchAlarm#expression}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.id"></a>

```go
Id *string
```

- *Type:* *string

A short name used to tie this object to the results in the response.

This name must be unique within a single call to `GetMetricData`. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#id CloudwatchAlarm#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.label"></a>

```go
Label *string
```

- *Type:* *string

A human-readable label for this metric or expression.

This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CW dashboard widget, the label is shown. If `Label` is omitted, CW generates a default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#label CloudwatchAlarm#label}

---

##### `MetricStat`<sup>Optional</sup> <a name="MetricStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.metricStat"></a>

```go
MetricStat CloudwatchAlarmMetricsMetricStat
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a>

The metric to be returned, along with statistics, period, and units.

Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.
Within one MetricDataQuery object, you must specify either `Expression` or `MetricStat` but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#metric_stat CloudwatchAlarm#metric_stat}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.period"></a>

```go
Period *f64
```

- *Type:* *f64

The granularity, in seconds, of the returned data points.

For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a `PutMetricData` operation that includes a `StorageResolution of 1 second`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}

---

##### `ReturnData`<sup>Optional</sup> <a name="ReturnData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.returnData"></a>

```go
ReturnData interface{}
```

- *Type:* interface{}

This option indicates whether to return the timestamps and raw data values of this metric.

When you create an alarm based on a metric math expression, specify `True` for this value for only the one math expression that the alarm is based on. You must specify `False` for `ReturnData` for all the other metrics and expressions used in the alarm.
This field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#return_data CloudwatchAlarm#return_data}

---

### CloudwatchAlarmMetricsMetricStat <a name="CloudwatchAlarmMetricsMetricStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

&cloudwatchalarm.CloudwatchAlarmMetricsMetricStat {
	Metric: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric,
	Period: *f64,
	Stat: *string,
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a></code> | The metric to return, including the metric name, namespace, and dimensions. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.period">Period</a></code> | <code>*f64</code> | The granularity, in seconds, of the returned data points. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.stat">Stat</a></code> | <code>*string</code> | The statistic to return. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.unit">Unit</a></code> | <code>*string</code> | The unit to use for the returned data points. |

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.metric"></a>

```go
Metric CloudwatchAlarmMetricsMetricStatMetric
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a>

The metric to return, including the metric name, namespace, and dimensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#metric CloudwatchAlarm#metric}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.period"></a>

```go
Period *f64
```

- *Type:* *f64

The granularity, in seconds, of the returned data points.

For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a `PutMetricData` call that includes a `StorageResolution` of 1 second.
If the `StartTime` parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:

* Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).
* Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).
* Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}

---

##### `Stat`<sup>Optional</sup> <a name="Stat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.stat"></a>

```go
Stat *string
```

- *Type:* *string

The statistic to return.

It can include any CW statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#stat CloudwatchAlarm#stat}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

The unit to use for the returned data points.

Valid values are: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#unit CloudwatchAlarm#unit}

---

### CloudwatchAlarmMetricsMetricStatMetric <a name="CloudwatchAlarmMetricsMetricStatMetric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

&cloudwatchalarm.CloudwatchAlarmMetricsMetricStatMetric {
	Dimensions: interface{},
	MetricName: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.dimensions">Dimensions</a></code> | <code>interface{}</code> | The metric dimensions that you want to be used for the metric that the alarm will watch. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.metricName">MetricName</a></code> | <code>*string</code> | The name of the metric that you want the alarm to watch. This is a required field. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace of the metric that the alarm will watch. |

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.dimensions"></a>

```go
Dimensions interface{}
```

- *Type:* interface{}

The metric dimensions that you want to be used for the metric that the alarm will watch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#dimensions CloudwatchAlarm#dimensions}

---

##### `MetricName`<sup>Optional</sup> <a name="MetricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

The name of the metric that you want the alarm to watch. This is a required field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#metric_name CloudwatchAlarm#metric_name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace of the metric that the alarm will watch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#namespace CloudwatchAlarm#namespace}

---

### CloudwatchAlarmMetricsMetricStatMetricDimensions <a name="CloudwatchAlarmMetricsMetricStatMetricDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

&cloudwatchalarm.CloudwatchAlarmMetricsMetricStatMetricDimensions {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.property.name">Name</a></code> | <code>*string</code> | The name of the dimension, from 1–255 characters in length. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.property.value">Value</a></code> | <code>*string</code> | The value for the dimension, from 1–255 characters in length. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the dimension, from 1–255 characters in length.

This dimension name must have been included when the metric was published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#name CloudwatchAlarm#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the dimension, from 1–255 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#value CloudwatchAlarm#value}

---

### CloudwatchAlarmTags <a name="CloudwatchAlarmTags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

&cloudwatchalarm.CloudwatchAlarmTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.property.key">Key</a></code> | <code>*string</code> | A string that you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.property.value">Value</a></code> | <code>*string</code> | The value for the specified tag key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

A string that you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#key CloudwatchAlarm#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#value CloudwatchAlarm#value}

---

### CloudwatchAlarmWarmUpConfiguration <a name="CloudwatchAlarmWarmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

&cloudwatchalarm.CloudwatchAlarmWarmUpConfiguration {
	OnlyStartEvaluatingAfterWarmUpPeriodEnds: interface{},
	WarmUpPeriodDurationInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration.property.onlyStartEvaluatingAfterWarmUpPeriodEnds">OnlyStartEvaluatingAfterWarmUpPeriodEnds</a></code> | <code>interface{}</code> | Specifies whether the alarm waits for the full warm-up period before it starts evaluating. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration.property.warmUpPeriodDurationInMinutes">WarmUpPeriodDurationInMinutes</a></code> | <code>*f64</code> | The length of the warm-up period, in minutes. |

---

##### `OnlyStartEvaluatingAfterWarmUpPeriodEnds`<sup>Optional</sup> <a name="OnlyStartEvaluatingAfterWarmUpPeriodEnds" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration.property.onlyStartEvaluatingAfterWarmUpPeriodEnds"></a>

```go
OnlyStartEvaluatingAfterWarmUpPeriodEnds interface{}
```

- *Type:* interface{}

Specifies whether the alarm waits for the full warm-up period before it starts evaluating.

If true, the alarm waits the entire WarmUpPeriodDurationInMinutes before it starts evaluating, even if metric data arrives earlier. If false, the alarm ends the warm-up period early and starts evaluating as soon as it has enough metric data to fill its evaluation window. This is the default behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#only_start_evaluating_after_warm_up_period_ends CloudwatchAlarm#only_start_evaluating_after_warm_up_period_ends}

---

##### `WarmUpPeriodDurationInMinutes`<sup>Optional</sup> <a name="WarmUpPeriodDurationInMinutes" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration.property.warmUpPeriodDurationInMinutes"></a>

```go
WarmUpPeriodDurationInMinutes *f64
```

- *Type:* *f64

The length of the warm-up period, in minutes.

For this duration after you create or update the alarm, the alarm stays in INSUFFICIENT_DATA and doesn't perform alarm actions. Valid values range from 1 to 2880 minutes (2 days). You can change this value while the alarm is still in its warm-up period. Changes have no effect after the warm-up period ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm#warm_up_period_duration_in_minutes CloudwatchAlarm#warm_up_period_duration_in_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchAlarmDimensionsList <a name="CloudwatchAlarmDimensionsList" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.NewCloudwatchAlarmDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchAlarmDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.get"></a>

```go
func Get(index *f64) CloudwatchAlarmDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAlarmDimensionsOutputReference <a name="CloudwatchAlarmDimensionsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.NewCloudwatchAlarmDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchAlarmDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAlarmEvaluationCriteriaOutputReference <a name="CloudwatchAlarmEvaluationCriteriaOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.NewCloudwatchAlarmEvaluationCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchAlarmEvaluationCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.putPromQlCriteria">PutPromQlCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resetPromQlCriteria">ResetPromQlCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPromQlCriteria` <a name="PutPromQlCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.putPromQlCriteria"></a>

```go
func PutPromQlCriteria(value CloudwatchAlarmEvaluationCriteriaPromQlCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.putPromQlCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a>

---

##### `ResetPromQlCriteria` <a name="ResetPromQlCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resetPromQlCriteria"></a>

```go
func ResetPromQlCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.promQlCriteria">PromQlCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference">CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.promQlCriteriaInput">PromQlCriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PromQlCriteria`<sup>Required</sup> <a name="PromQlCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.promQlCriteria"></a>

```go
func PromQlCriteria() CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference">CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference</a>

---

##### `PromQlCriteriaInput`<sup>Optional</sup> <a name="PromQlCriteriaInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.promQlCriteriaInput"></a>

```go
func PromQlCriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference <a name="CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.NewCloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetPendingPeriod">ResetPendingPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetRecoveryPeriod">ResetRecoveryPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPendingPeriod` <a name="ResetPendingPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetPendingPeriod"></a>

```go
func ResetPendingPeriod()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetQuery"></a>

```go
func ResetQuery()
```

##### `ResetRecoveryPeriod` <a name="ResetRecoveryPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetRecoveryPeriod"></a>

```go
func ResetRecoveryPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.pendingPeriodInput">PendingPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.recoveryPeriodInput">RecoveryPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.pendingPeriod">PendingPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.recoveryPeriod">RecoveryPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PendingPeriodInput`<sup>Optional</sup> <a name="PendingPeriodInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.pendingPeriodInput"></a>

```go
func PendingPeriodInput() *f64
```

- *Type:* *f64

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `RecoveryPeriodInput`<sup>Optional</sup> <a name="RecoveryPeriodInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.recoveryPeriodInput"></a>

```go
func RecoveryPeriodInput() *f64
```

- *Type:* *f64

---

##### `PendingPeriod`<sup>Required</sup> <a name="PendingPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.pendingPeriod"></a>

```go
func PendingPeriod() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `RecoveryPeriod`<sup>Required</sup> <a name="RecoveryPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.recoveryPeriod"></a>

```go
func RecoveryPeriod() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAlarmEvaluationWindowOutputReference <a name="CloudwatchAlarmEvaluationWindowOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.NewCloudwatchAlarmEvaluationWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchAlarmEvaluationWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.putWallClockWindow">PutWallClockWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resetSlidingWindow">ResetSlidingWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resetWallClockWindow">ResetWallClockWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWallClockWindow` <a name="PutWallClockWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.putWallClockWindow"></a>

```go
func PutWallClockWindow(value CloudwatchAlarmEvaluationWindowWallClockWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.putWallClockWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a>

---

##### `ResetSlidingWindow` <a name="ResetSlidingWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resetSlidingWindow"></a>

```go
func ResetSlidingWindow()
```

##### `ResetWallClockWindow` <a name="ResetWallClockWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resetWallClockWindow"></a>

```go
func ResetWallClockWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.wallClockWindow">WallClockWindow</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference">CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.slidingWindowInput">SlidingWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.wallClockWindowInput">WallClockWindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.slidingWindow">SlidingWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WallClockWindow`<sup>Required</sup> <a name="WallClockWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.wallClockWindow"></a>

```go
func WallClockWindow() CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference">CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference</a>

---

##### `SlidingWindowInput`<sup>Optional</sup> <a name="SlidingWindowInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.slidingWindowInput"></a>

```go
func SlidingWindowInput() *string
```

- *Type:* *string

---

##### `WallClockWindowInput`<sup>Optional</sup> <a name="WallClockWindowInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.wallClockWindowInput"></a>

```go
func WallClockWindowInput() interface{}
```

- *Type:* interface{}

---

##### `SlidingWindow`<sup>Required</sup> <a name="SlidingWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.slidingWindow"></a>

```go
func SlidingWindow() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference <a name="CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.NewCloudwatchAlarmEvaluationWindowWallClockWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resetTimezone"></a>

```go
func ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAlarmMetricsList <a name="CloudwatchAlarmMetricsList" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.NewCloudwatchAlarmMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchAlarmMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.get"></a>

```go
func Get(index *f64) CloudwatchAlarmMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAlarmMetricsMetricStatMetricDimensionsList <a name="CloudwatchAlarmMetricsMetricStatMetricDimensionsList" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.NewCloudwatchAlarmMetricsMetricStatMetricDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchAlarmMetricsMetricStatMetricDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.get"></a>

```go
func Get(index *f64) CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference <a name="CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.NewCloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAlarmMetricsMetricStatMetricOutputReference <a name="CloudwatchAlarmMetricsMetricStatMetricOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.NewCloudwatchAlarmMetricsMetricStatMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchAlarmMetricsMetricStatMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetMetricName">ResetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensions` <a name="PutDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.putDimensions"></a>

```go
func PutDimensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.putDimensions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetDimensions"></a>

```go
func ResetDimensions()
```

##### `ResetMetricName` <a name="ResetMetricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetMetricName"></a>

```go
func ResetMetricName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList">CloudwatchAlarmMetricsMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.dimensions"></a>

```go
func Dimensions() CloudwatchAlarmMetricsMetricStatMetricDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList">CloudwatchAlarmMetricsMetricStatMetricDimensionsList</a>

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.dimensionsInput"></a>

```go
func DimensionsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAlarmMetricsMetricStatOutputReference <a name="CloudwatchAlarmMetricsMetricStatOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.NewCloudwatchAlarmMetricsMetricStatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchAlarmMetricsMetricStatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetStat">ResetStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetric` <a name="PutMetric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.putMetric"></a>

```go
func PutMetric(value CloudwatchAlarmMetricsMetricStatMetric)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a>

---

##### `ResetMetric` <a name="ResetMetric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetMetric"></a>

```go
func ResetMetric()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetStat` <a name="ResetStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetStat"></a>

```go
func ResetStat()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetUnit"></a>

```go
func ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference">CloudwatchAlarmMetricsMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.metricInput">MetricInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.periodInput">PeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.statInput">StatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.stat">Stat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.metric"></a>

```go
func Metric() CloudwatchAlarmMetricsMetricStatMetricOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference">CloudwatchAlarmMetricsMetricStatMetricOutputReference</a>

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.metricInput"></a>

```go
func MetricInput() interface{}
```

- *Type:* interface{}

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.periodInput"></a>

```go
func PeriodInput() *f64
```

- *Type:* *f64

---

##### `StatInput`<sup>Optional</sup> <a name="StatInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.statInput"></a>

```go
func StatInput() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `Stat`<sup>Required</sup> <a name="Stat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.stat"></a>

```go
func Stat() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAlarmMetricsOutputReference <a name="CloudwatchAlarmMetricsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.NewCloudwatchAlarmMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchAlarmMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.putMetricStat">PutMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetMetricStat">ResetMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetReturnData">ResetReturnData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricStat` <a name="PutMetricStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.putMetricStat"></a>

```go
func PutMetricStat(value CloudwatchAlarmMetricsMetricStat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.putMetricStat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetMetricStat` <a name="ResetMetricStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetMetricStat"></a>

```go
func ResetMetricStat()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetReturnData` <a name="ResetReturnData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetReturnData"></a>

```go
func ResetReturnData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.metricStat">MetricStat</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference">CloudwatchAlarmMetricsMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.metricStatInput">MetricStatInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.periodInput">PeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.returnDataInput">ReturnDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.returnData">ReturnData</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricStat`<sup>Required</sup> <a name="MetricStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.metricStat"></a>

```go
func MetricStat() CloudwatchAlarmMetricsMetricStatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference">CloudwatchAlarmMetricsMetricStatOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `MetricStatInput`<sup>Optional</sup> <a name="MetricStatInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.metricStatInput"></a>

```go
func MetricStatInput() interface{}
```

- *Type:* interface{}

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.periodInput"></a>

```go
func PeriodInput() *f64
```

- *Type:* *f64

---

##### `ReturnDataInput`<sup>Optional</sup> <a name="ReturnDataInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.returnDataInput"></a>

```go
func ReturnDataInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `ReturnData`<sup>Required</sup> <a name="ReturnData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.returnData"></a>

```go
func ReturnData() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAlarmTagsList <a name="CloudwatchAlarmTagsList" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.NewCloudwatchAlarmTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchAlarmTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.get"></a>

```go
func Get(index *f64) CloudwatchAlarmTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAlarmTagsOutputReference <a name="CloudwatchAlarmTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.NewCloudwatchAlarmTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchAlarmTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchAlarmWarmUpConfigurationOutputReference <a name="CloudwatchAlarmWarmUpConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchalarm"

cloudwatchalarm.NewCloudwatchAlarmWarmUpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchAlarmWarmUpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.resetOnlyStartEvaluatingAfterWarmUpPeriodEnds">ResetOnlyStartEvaluatingAfterWarmUpPeriodEnds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.resetWarmUpPeriodDurationInMinutes">ResetWarmUpPeriodDurationInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOnlyStartEvaluatingAfterWarmUpPeriodEnds` <a name="ResetOnlyStartEvaluatingAfterWarmUpPeriodEnds" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.resetOnlyStartEvaluatingAfterWarmUpPeriodEnds"></a>

```go
func ResetOnlyStartEvaluatingAfterWarmUpPeriodEnds()
```

##### `ResetWarmUpPeriodDurationInMinutes` <a name="ResetWarmUpPeriodDurationInMinutes" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.resetWarmUpPeriodDurationInMinutes"></a>

```go
func ResetWarmUpPeriodDurationInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEndsInput">OnlyStartEvaluatingAfterWarmUpPeriodEndsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutesInput">WarmUpPeriodDurationInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEnds">OnlyStartEvaluatingAfterWarmUpPeriodEnds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutes">WarmUpPeriodDurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnlyStartEvaluatingAfterWarmUpPeriodEndsInput`<sup>Optional</sup> <a name="OnlyStartEvaluatingAfterWarmUpPeriodEndsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEndsInput"></a>

```go
func OnlyStartEvaluatingAfterWarmUpPeriodEndsInput() interface{}
```

- *Type:* interface{}

---

##### `WarmUpPeriodDurationInMinutesInput`<sup>Optional</sup> <a name="WarmUpPeriodDurationInMinutesInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutesInput"></a>

```go
func WarmUpPeriodDurationInMinutesInput() *f64
```

- *Type:* *f64

---

##### `OnlyStartEvaluatingAfterWarmUpPeriodEnds`<sup>Required</sup> <a name="OnlyStartEvaluatingAfterWarmUpPeriodEnds" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEnds"></a>

```go
func OnlyStartEvaluatingAfterWarmUpPeriodEnds() interface{}
```

- *Type:* interface{}

---

##### `WarmUpPeriodDurationInMinutes`<sup>Required</sup> <a name="WarmUpPeriodDurationInMinutes" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutes"></a>

```go
func WarmUpPeriodDurationInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



