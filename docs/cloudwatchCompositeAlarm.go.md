# `cloudwatchCompositeAlarm` Submodule <a name="`cloudwatchCompositeAlarm` Submodule" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchCompositeAlarm <a name="CloudwatchCompositeAlarm" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm awscc_cloudwatch_composite_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchcompositealarm"

cloudwatchcompositealarm.NewCloudwatchCompositeAlarm(scope Construct, id *string, config CloudwatchCompositeAlarmConfig) CloudwatchCompositeAlarm
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig">CloudwatchCompositeAlarmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig">CloudwatchCompositeAlarmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsEnabled">ResetActionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressor">ResetActionsSuppressor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressorExtensionPeriod">ResetActionsSuppressorExtensionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressorWaitPeriod">ResetActionsSuppressorWaitPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmActions">ResetAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmDescription">ResetAlarmDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmName">ResetAlarmName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetInsufficientDataActions">ResetInsufficientDataActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOkActions">ResetOkActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActionsEnabled` <a name="ResetActionsEnabled" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsEnabled"></a>

```go
func ResetActionsEnabled()
```

##### `ResetActionsSuppressor` <a name="ResetActionsSuppressor" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressor"></a>

```go
func ResetActionsSuppressor()
```

##### `ResetActionsSuppressorExtensionPeriod` <a name="ResetActionsSuppressorExtensionPeriod" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressorExtensionPeriod"></a>

```go
func ResetActionsSuppressorExtensionPeriod()
```

##### `ResetActionsSuppressorWaitPeriod` <a name="ResetActionsSuppressorWaitPeriod" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressorWaitPeriod"></a>

```go
func ResetActionsSuppressorWaitPeriod()
```

##### `ResetAlarmActions` <a name="ResetAlarmActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmActions"></a>

```go
func ResetAlarmActions()
```

##### `ResetAlarmDescription` <a name="ResetAlarmDescription" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmDescription"></a>

```go
func ResetAlarmDescription()
```

##### `ResetAlarmName` <a name="ResetAlarmName" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmName"></a>

```go
func ResetAlarmName()
```

##### `ResetInsufficientDataActions` <a name="ResetInsufficientDataActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetInsufficientDataActions"></a>

```go
func ResetInsufficientDataActions()
```

##### `ResetOkActions` <a name="ResetOkActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOkActions"></a>

```go
func ResetOkActions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchCompositeAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchcompositealarm"

cloudwatchcompositealarm.CloudwatchCompositeAlarm_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchcompositealarm"

cloudwatchcompositealarm.CloudwatchCompositeAlarm_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchcompositealarm"

cloudwatchcompositealarm.CloudwatchCompositeAlarm_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchcompositealarm"

cloudwatchcompositealarm.CloudwatchCompositeAlarm_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudwatchCompositeAlarm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudwatchCompositeAlarm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudwatchCompositeAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchCompositeAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList">CloudwatchCompositeAlarmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabledInput">ActionsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorExtensionPeriodInput">ActionsSuppressorExtensionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorInput">ActionsSuppressorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorWaitPeriodInput">ActionsSuppressorWaitPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActionsInput">AlarmActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescriptionInput">AlarmDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmNameInput">AlarmNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRuleInput">AlarmRuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActionsInput">InsufficientDataActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActionsInput">OkActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabled">ActionsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressor">ActionsSuppressor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorExtensionPeriod">ActionsSuppressorExtensionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorWaitPeriod">ActionsSuppressorWaitPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActions">AlarmActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescription">AlarmDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmName">AlarmName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRule">AlarmRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActions">InsufficientDataActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActions">OkActions</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tags"></a>

```go
func Tags() CloudwatchCompositeAlarmTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList">CloudwatchCompositeAlarmTagsList</a>

---

##### `ActionsEnabledInput`<sup>Optional</sup> <a name="ActionsEnabledInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabledInput"></a>

```go
func ActionsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ActionsSuppressorExtensionPeriodInput`<sup>Optional</sup> <a name="ActionsSuppressorExtensionPeriodInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorExtensionPeriodInput"></a>

```go
func ActionsSuppressorExtensionPeriodInput() *f64
```

- *Type:* *f64

---

##### `ActionsSuppressorInput`<sup>Optional</sup> <a name="ActionsSuppressorInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorInput"></a>

```go
func ActionsSuppressorInput() *string
```

- *Type:* *string

---

##### `ActionsSuppressorWaitPeriodInput`<sup>Optional</sup> <a name="ActionsSuppressorWaitPeriodInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorWaitPeriodInput"></a>

```go
func ActionsSuppressorWaitPeriodInput() *f64
```

- *Type:* *f64

---

##### `AlarmActionsInput`<sup>Optional</sup> <a name="AlarmActionsInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActionsInput"></a>

```go
func AlarmActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AlarmDescriptionInput`<sup>Optional</sup> <a name="AlarmDescriptionInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescriptionInput"></a>

```go
func AlarmDescriptionInput() *string
```

- *Type:* *string

---

##### `AlarmNameInput`<sup>Optional</sup> <a name="AlarmNameInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmNameInput"></a>

```go
func AlarmNameInput() *string
```

- *Type:* *string

---

##### `AlarmRuleInput`<sup>Optional</sup> <a name="AlarmRuleInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRuleInput"></a>

```go
func AlarmRuleInput() *string
```

- *Type:* *string

---

##### `InsufficientDataActionsInput`<sup>Optional</sup> <a name="InsufficientDataActionsInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActionsInput"></a>

```go
func InsufficientDataActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OkActionsInput`<sup>Optional</sup> <a name="OkActionsInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActionsInput"></a>

```go
func OkActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ActionsEnabled`<sup>Required</sup> <a name="ActionsEnabled" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabled"></a>

```go
func ActionsEnabled() interface{}
```

- *Type:* interface{}

---

##### `ActionsSuppressor`<sup>Required</sup> <a name="ActionsSuppressor" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressor"></a>

```go
func ActionsSuppressor() *string
```

- *Type:* *string

---

##### `ActionsSuppressorExtensionPeriod`<sup>Required</sup> <a name="ActionsSuppressorExtensionPeriod" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorExtensionPeriod"></a>

```go
func ActionsSuppressorExtensionPeriod() *f64
```

- *Type:* *f64

---

##### `ActionsSuppressorWaitPeriod`<sup>Required</sup> <a name="ActionsSuppressorWaitPeriod" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorWaitPeriod"></a>

```go
func ActionsSuppressorWaitPeriod() *f64
```

- *Type:* *f64

---

##### `AlarmActions`<sup>Required</sup> <a name="AlarmActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActions"></a>

```go
func AlarmActions() *[]*string
```

- *Type:* *[]*string

---

##### `AlarmDescription`<sup>Required</sup> <a name="AlarmDescription" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescription"></a>

```go
func AlarmDescription() *string
```

- *Type:* *string

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmName"></a>

```go
func AlarmName() *string
```

- *Type:* *string

---

##### `AlarmRule`<sup>Required</sup> <a name="AlarmRule" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRule"></a>

```go
func AlarmRule() *string
```

- *Type:* *string

---

##### `InsufficientDataActions`<sup>Required</sup> <a name="InsufficientDataActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActions"></a>

```go
func InsufficientDataActions() *[]*string
```

- *Type:* *[]*string

---

##### `OkActions`<sup>Required</sup> <a name="OkActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActions"></a>

```go
func OkActions() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchCompositeAlarmConfig <a name="CloudwatchCompositeAlarmConfig" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchcompositealarm"

&cloudwatchcompositealarm.CloudwatchCompositeAlarmConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AlarmRule: *string,
	ActionsEnabled: interface{},
	ActionsSuppressor: *string,
	ActionsSuppressorExtensionPeriod: *f64,
	ActionsSuppressorWaitPeriod: *f64,
	AlarmActions: *[]*string,
	AlarmDescription: *string,
	AlarmName: *string,
	InsufficientDataActions: *[]*string,
	OkActions: *[]*string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmRule">AlarmRule</a></code> | <code>*string</code> | Expression which aggregates the state of other Alarms (Metric or Composite Alarms). |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsEnabled">ActionsEnabled</a></code> | <code>interface{}</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressor">ActionsSuppressor</a></code> | <code>*string</code> | Actions will be suppressed if the suppressor alarm is in the ALARM state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressorExtensionPeriod">ActionsSuppressorExtensionPeriod</a></code> | <code>*f64</code> | Actions will be suppressed if WaitPeriod is active. The length of time that actions are suppressed is in seconds. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressorWaitPeriod">ActionsSuppressorWaitPeriod</a></code> | <code>*f64</code> | Actions will be suppressed if ExtensionPeriod is active. The length of time that actions are suppressed is in seconds. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmActions">AlarmActions</a></code> | <code>*[]*string</code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmDescription">AlarmDescription</a></code> | <code>*string</code> | The description of the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmName">AlarmName</a></code> | <code>*string</code> | The name of the Composite Alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.insufficientDataActions">InsufficientDataActions</a></code> | <code>*[]*string</code> | The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.okActions">OkActions</a></code> | <code>*[]*string</code> | The actions to execute when this alarm transitions to the OK state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of key-value pairs to associate with the composite alarm. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlarmRule`<sup>Required</sup> <a name="AlarmRule" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmRule"></a>

```go
AlarmRule *string
```

- *Type:* *string

Expression which aggregates the state of other Alarms (Metric or Composite Alarms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#alarm_rule CloudwatchCompositeAlarm#alarm_rule}

---

##### `ActionsEnabled`<sup>Optional</sup> <a name="ActionsEnabled" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsEnabled"></a>

```go
ActionsEnabled interface{}
```

- *Type:* interface{}

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#actions_enabled CloudwatchCompositeAlarm#actions_enabled}

---

##### `ActionsSuppressor`<sup>Optional</sup> <a name="ActionsSuppressor" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressor"></a>

```go
ActionsSuppressor *string
```

- *Type:* *string

Actions will be suppressed if the suppressor alarm is in the ALARM state.

ActionsSuppressor can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor CloudwatchCompositeAlarm#actions_suppressor}

---

##### `ActionsSuppressorExtensionPeriod`<sup>Optional</sup> <a name="ActionsSuppressorExtensionPeriod" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressorExtensionPeriod"></a>

```go
ActionsSuppressorExtensionPeriod *f64
```

- *Type:* *f64

Actions will be suppressed if WaitPeriod is active. The length of time that actions are suppressed is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor_extension_period CloudwatchCompositeAlarm#actions_suppressor_extension_period}

---

##### `ActionsSuppressorWaitPeriod`<sup>Optional</sup> <a name="ActionsSuppressorWaitPeriod" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressorWaitPeriod"></a>

```go
ActionsSuppressorWaitPeriod *f64
```

- *Type:* *f64

Actions will be suppressed if ExtensionPeriod is active. The length of time that actions are suppressed is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor_wait_period CloudwatchCompositeAlarm#actions_suppressor_wait_period}

---

##### `AlarmActions`<sup>Optional</sup> <a name="AlarmActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmActions"></a>

```go
AlarmActions *[]*string
```

- *Type:* *[]*string

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Specify each action as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#alarm_actions CloudwatchCompositeAlarm#alarm_actions}

---

##### `AlarmDescription`<sup>Optional</sup> <a name="AlarmDescription" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmDescription"></a>

```go
AlarmDescription *string
```

- *Type:* *string

The description of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#alarm_description CloudwatchCompositeAlarm#alarm_description}

---

##### `AlarmName`<sup>Optional</sup> <a name="AlarmName" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmName"></a>

```go
AlarmName *string
```

- *Type:* *string

The name of the Composite Alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#alarm_name CloudwatchCompositeAlarm#alarm_name}

---

##### `InsufficientDataActions`<sup>Optional</sup> <a name="InsufficientDataActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.insufficientDataActions"></a>

```go
InsufficientDataActions *[]*string
```

- *Type:* *[]*string

The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#insufficient_data_actions CloudwatchCompositeAlarm#insufficient_data_actions}

---

##### `OkActions`<sup>Optional</sup> <a name="OkActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.okActions"></a>

```go
OkActions *[]*string
```

- *Type:* *[]*string

The actions to execute when this alarm transitions to the OK state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#ok_actions CloudwatchCompositeAlarm#ok_actions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of key-value pairs to associate with the composite alarm.

You can associate as many as 50 tags with an alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#tags CloudwatchCompositeAlarm#tags}

---

### CloudwatchCompositeAlarmTags <a name="CloudwatchCompositeAlarmTags" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchcompositealarm"

&cloudwatchcompositealarm.CloudwatchCompositeAlarmTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags.property.key">Key</a></code> | <code>*string</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags.property.value">Value</a></code> | <code>*string</code> | The value for the specified tag key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

A unique identifier for the tag.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#key CloudwatchCompositeAlarm#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#value CloudwatchCompositeAlarm#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchCompositeAlarmTagsList <a name="CloudwatchCompositeAlarmTagsList" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchcompositealarm"

cloudwatchcompositealarm.NewCloudwatchCompositeAlarmTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchCompositeAlarmTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.get"></a>

```go
func Get(index *f64) CloudwatchCompositeAlarmTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchCompositeAlarmTagsOutputReference <a name="CloudwatchCompositeAlarmTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudwatchcompositealarm"

cloudwatchcompositealarm.NewCloudwatchCompositeAlarmTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchCompositeAlarmTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



