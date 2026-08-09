# `gameliftGameSessionQueue` Submodule <a name="`gameliftGameSessionQueue` Submodule" id="@cdktn/provider-awscc.gameliftGameSessionQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftGameSessionQueue <a name="GameliftGameSessionQueue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue awscc_gamelift_game_session_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

gameliftgamesessionqueue.NewGameliftGameSessionQueue(scope Construct, id *string, config GameliftGameSessionQueueConfig) GameliftGameSessionQueue
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig">GameliftGameSessionQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig">GameliftGameSessionQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putFilterConfiguration">PutFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicies">PutPlayerLatencyPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPriorityConfiguration">PutPriorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetCustomEventData">ResetCustomEventData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetFilterConfiguration">ResetFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetNotificationTarget">ResetNotificationTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPlayerLatencyPolicies">ResetPlayerLatencyPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPriorityConfiguration">ResetPriorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFilterConfiguration` <a name="PutFilterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putFilterConfiguration"></a>

```go
func PutFilterConfiguration(value GameliftGameSessionQueueFilterConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putFilterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

---

##### `PutPlayerLatencyPolicies` <a name="PutPlayerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicies"></a>

```go
func PutPlayerLatencyPolicies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPriorityConfiguration` <a name="PutPriorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPriorityConfiguration"></a>

```go
func PutPriorityConfiguration(value GameliftGameSessionQueuePriorityConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPriorityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomEventData` <a name="ResetCustomEventData" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetCustomEventData"></a>

```go
func ResetCustomEventData()
```

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetFilterConfiguration` <a name="ResetFilterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetFilterConfiguration"></a>

```go
func ResetFilterConfiguration()
```

##### `ResetNotificationTarget` <a name="ResetNotificationTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetNotificationTarget"></a>

```go
func ResetNotificationTarget()
```

##### `ResetPlayerLatencyPolicies` <a name="ResetPlayerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPlayerLatencyPolicies"></a>

```go
func ResetPlayerLatencyPolicies()
```

##### `ResetPriorityConfiguration` <a name="ResetPriorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPriorityConfiguration"></a>

```go
func ResetPriorityConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftGameSessionQueue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

gameliftgamesessionqueue.GameliftGameSessionQueue_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

gameliftgamesessionqueue.GameliftGameSessionQueue_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

gameliftgamesessionqueue.GameliftGameSessionQueue_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

gameliftgamesessionqueue.GameliftGameSessionQueue_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GameliftGameSessionQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GameliftGameSessionQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GameliftGameSessionQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GameliftGameSessionQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList">GameliftGameSessionQueueDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference">GameliftGameSessionQueueFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicies">PlayerLatencyPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList">GameliftGameSessionQueuePlayerLatencyPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfiguration">PriorityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference">GameliftGameSessionQueuePriorityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList">GameliftGameSessionQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventDataInput">CustomEventDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfigurationInput">FilterConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTargetInput">NotificationTargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPoliciesInput">PlayerLatencyPoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfigurationInput">PriorityConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventData">CustomEventData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTarget">NotificationTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinations"></a>

```go
func Destinations() GameliftGameSessionQueueDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList">GameliftGameSessionQueueDestinationsList</a>

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfiguration"></a>

```go
func FilterConfiguration() GameliftGameSessionQueueFilterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference">GameliftGameSessionQueueFilterConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PlayerLatencyPolicies`<sup>Required</sup> <a name="PlayerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicies"></a>

```go
func PlayerLatencyPolicies() GameliftGameSessionQueuePlayerLatencyPoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList">GameliftGameSessionQueuePlayerLatencyPoliciesList</a>

---

##### `PriorityConfiguration`<sup>Required</sup> <a name="PriorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfiguration"></a>

```go
func PriorityConfiguration() GameliftGameSessionQueuePriorityConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference">GameliftGameSessionQueuePriorityConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tags"></a>

```go
func Tags() GameliftGameSessionQueueTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList">GameliftGameSessionQueueTagsList</a>

---

##### `CustomEventDataInput`<sup>Optional</sup> <a name="CustomEventDataInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventDataInput"></a>

```go
func CustomEventDataInput() *string
```

- *Type:* *string

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `FilterConfigurationInput`<sup>Optional</sup> <a name="FilterConfigurationInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfigurationInput"></a>

```go
func FilterConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationTargetInput`<sup>Optional</sup> <a name="NotificationTargetInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTargetInput"></a>

```go
func NotificationTargetInput() *string
```

- *Type:* *string

---

##### `PlayerLatencyPoliciesInput`<sup>Optional</sup> <a name="PlayerLatencyPoliciesInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPoliciesInput"></a>

```go
func PlayerLatencyPoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityConfigurationInput`<sup>Optional</sup> <a name="PriorityConfigurationInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfigurationInput"></a>

```go
func PriorityConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `CustomEventData`<sup>Required</sup> <a name="CustomEventData" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventData"></a>

```go
func CustomEventData() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotificationTarget`<sup>Required</sup> <a name="NotificationTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTarget"></a>

```go
func NotificationTarget() *string
```

- *Type:* *string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftGameSessionQueueConfig <a name="GameliftGameSessionQueueConfig" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

&gameliftgamesessionqueue.GameliftGameSessionQueueConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	CustomEventData: *string,
	Destinations: interface{},
	FilterConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration,
	NotificationTarget: *string,
	PlayerLatencyPolicies: interface{},
	PriorityConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration,
	Tags: interface{},
	TimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.name">Name</a></code> | <code>*string</code> | A descriptive label that is associated with game session queue. Queue names must be unique within each Region. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.customEventData">CustomEventData</a></code> | <code>*string</code> | Information that is added to all events that are related to this game session queue. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.destinations">Destinations</a></code> | <code>interface{}</code> | A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a></code> | A list of locations where a queue is allowed to place new game sessions. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.notificationTarget">NotificationTarget</a></code> | <code>*string</code> | An SNS topic ARN that is set up to receive game session placement notifications. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.playerLatencyPolicies">PlayerLatencyPolicies</a></code> | <code>interface{}</code> | A set of policies that act as a sliding cap on player latency. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.priorityConfiguration">PriorityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a></code> | Custom settings to use when prioritizing destinations and locations for game session placements. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | The maximum time, in seconds, that a new game session placement request remains in the queue. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A descriptive label that is associated with game session queue. Queue names must be unique within each Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#name GameliftGameSessionQueue#name}

---

##### `CustomEventData`<sup>Optional</sup> <a name="CustomEventData" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.customEventData"></a>

```go
CustomEventData *string
```

- *Type:* *string

Information that is added to all events that are related to this game session queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#custom_event_data GameliftGameSessionQueue#custom_event_data}

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#destinations GameliftGameSessionQueue#destinations}

---

##### `FilterConfiguration`<sup>Optional</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.filterConfiguration"></a>

```go
FilterConfiguration GameliftGameSessionQueueFilterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

A list of locations where a queue is allowed to place new game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#filter_configuration GameliftGameSessionQueue#filter_configuration}

---

##### `NotificationTarget`<sup>Optional</sup> <a name="NotificationTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.notificationTarget"></a>

```go
NotificationTarget *string
```

- *Type:* *string

An SNS topic ARN that is set up to receive game session placement notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#notification_target GameliftGameSessionQueue#notification_target}

---

##### `PlayerLatencyPolicies`<sup>Optional</sup> <a name="PlayerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.playerLatencyPolicies"></a>

```go
PlayerLatencyPolicies interface{}
```

- *Type:* interface{}

A set of policies that act as a sliding cap on player latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#player_latency_policies GameliftGameSessionQueue#player_latency_policies}

---

##### `PriorityConfiguration`<sup>Optional</sup> <a name="PriorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.priorityConfiguration"></a>

```go
PriorityConfiguration GameliftGameSessionQueuePriorityConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

Custom settings to use when prioritizing destinations and locations for game session placements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#priority_configuration GameliftGameSessionQueue#priority_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#tags GameliftGameSessionQueue#tags}

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

The maximum time, in seconds, that a new game session placement request remains in the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}

---

### GameliftGameSessionQueueDestinations <a name="GameliftGameSessionQueueDestinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

&gameliftgamesessionqueue.GameliftGameSessionQueueDestinations {
	DestinationArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations.property.destinationArn">DestinationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#destination_arn GameliftGameSessionQueue#destination_arn}. |

---

##### `DestinationArn`<sup>Optional</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations.property.destinationArn"></a>

```go
DestinationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#destination_arn GameliftGameSessionQueue#destination_arn}.

---

### GameliftGameSessionQueueFilterConfiguration <a name="GameliftGameSessionQueueFilterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

&gameliftgamesessionqueue.GameliftGameSessionQueueFilterConfiguration {
	AllowedLocations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration.property.allowedLocations">AllowedLocations</a></code> | <code>*[]*string</code> | A list of locations to allow game session placement in, in the form of AWS Region codes such as us-west-2. |

---

##### `AllowedLocations`<sup>Optional</sup> <a name="AllowedLocations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration.property.allowedLocations"></a>

```go
AllowedLocations *[]*string
```

- *Type:* *[]*string

A list of locations to allow game session placement in, in the form of AWS Region codes such as us-west-2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#allowed_locations GameliftGameSessionQueue#allowed_locations}

---

### GameliftGameSessionQueuePlayerLatencyPolicies <a name="GameliftGameSessionQueuePlayerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

&gameliftgamesessionqueue.GameliftGameSessionQueuePlayerLatencyPolicies {
	MaximumIndividualPlayerLatencyMilliseconds: *f64,
	PolicyDurationSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.maximumIndividualPlayerLatencyMilliseconds">MaximumIndividualPlayerLatencyMilliseconds</a></code> | <code>*f64</code> | The maximum latency value that is allowed for any player, in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.policyDurationSeconds">PolicyDurationSeconds</a></code> | <code>*f64</code> | The length of time, in seconds, that the policy is enforced while placing a new game session. |

---

##### `MaximumIndividualPlayerLatencyMilliseconds`<sup>Optional</sup> <a name="MaximumIndividualPlayerLatencyMilliseconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.maximumIndividualPlayerLatencyMilliseconds"></a>

```go
MaximumIndividualPlayerLatencyMilliseconds *f64
```

- *Type:* *f64

The maximum latency value that is allowed for any player, in milliseconds.

All policies must have a value set for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#maximum_individual_player_latency_milliseconds GameliftGameSessionQueue#maximum_individual_player_latency_milliseconds}

---

##### `PolicyDurationSeconds`<sup>Optional</sup> <a name="PolicyDurationSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.policyDurationSeconds"></a>

```go
PolicyDurationSeconds *f64
```

- *Type:* *f64

The length of time, in seconds, that the policy is enforced while placing a new game session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#policy_duration_seconds GameliftGameSessionQueue#policy_duration_seconds}

---

### GameliftGameSessionQueuePriorityConfiguration <a name="GameliftGameSessionQueuePriorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

&gameliftgamesessionqueue.GameliftGameSessionQueuePriorityConfiguration {
	LocationOrder: *[]*string,
	PriorityOrder: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.locationOrder">LocationOrder</a></code> | <code>*[]*string</code> | The prioritization order to use for fleet locations, when the PriorityOrder property includes LOCATION. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.priorityOrder">PriorityOrder</a></code> | <code>*[]*string</code> | The recommended sequence to use when prioritizing where to place new game sessions. |

---

##### `LocationOrder`<sup>Optional</sup> <a name="LocationOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.locationOrder"></a>

```go
LocationOrder *[]*string
```

- *Type:* *[]*string

The prioritization order to use for fleet locations, when the PriorityOrder property includes LOCATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#location_order GameliftGameSessionQueue#location_order}

---

##### `PriorityOrder`<sup>Optional</sup> <a name="PriorityOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.priorityOrder"></a>

```go
PriorityOrder *[]*string
```

- *Type:* *[]*string

The recommended sequence to use when prioritizing where to place new game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#priority_order GameliftGameSessionQueue#priority_order}

---

### GameliftGameSessionQueueTags <a name="GameliftGameSessionQueueTags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

&gameliftgamesessionqueue.GameliftGameSessionQueueTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#key GameliftGameSessionQueue#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_game_session_queue#value GameliftGameSessionQueue#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftGameSessionQueueDestinationsList <a name="GameliftGameSessionQueueDestinationsList" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

gameliftgamesessionqueue.NewGameliftGameSessionQueueDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftGameSessionQueueDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.get"></a>

```go
func Get(index *f64) GameliftGameSessionQueueDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftGameSessionQueueDestinationsOutputReference <a name="GameliftGameSessionQueueDestinationsOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

gameliftgamesessionqueue.NewGameliftGameSessionQueueDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftGameSessionQueueDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resetDestinationArn">ResetDestinationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationArn` <a name="ResetDestinationArn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resetDestinationArn"></a>

```go
func ResetDestinationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArnInput">DestinationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArn">DestinationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationArnInput`<sup>Optional</sup> <a name="DestinationArnInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArnInput"></a>

```go
func DestinationArnInput() *string
```

- *Type:* *string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArn"></a>

```go
func DestinationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftGameSessionQueueFilterConfigurationOutputReference <a name="GameliftGameSessionQueueFilterConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

gameliftgamesessionqueue.NewGameliftGameSessionQueueFilterConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameliftGameSessionQueueFilterConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resetAllowedLocations">ResetAllowedLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedLocations` <a name="ResetAllowedLocations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resetAllowedLocations"></a>

```go
func ResetAllowedLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocationsInput">AllowedLocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocations">AllowedLocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedLocationsInput`<sup>Optional</sup> <a name="AllowedLocationsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocationsInput"></a>

```go
func AllowedLocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedLocations`<sup>Required</sup> <a name="AllowedLocations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocations"></a>

```go
func AllowedLocations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftGameSessionQueuePlayerLatencyPoliciesList <a name="GameliftGameSessionQueuePlayerLatencyPoliciesList" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

gameliftgamesessionqueue.NewGameliftGameSessionQueuePlayerLatencyPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftGameSessionQueuePlayerLatencyPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.get"></a>

```go
func Get(index *f64) GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference <a name="GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

gameliftgamesessionqueue.NewGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetMaximumIndividualPlayerLatencyMilliseconds">ResetMaximumIndividualPlayerLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetPolicyDurationSeconds">ResetPolicyDurationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumIndividualPlayerLatencyMilliseconds` <a name="ResetMaximumIndividualPlayerLatencyMilliseconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetMaximumIndividualPlayerLatencyMilliseconds"></a>

```go
func ResetMaximumIndividualPlayerLatencyMilliseconds()
```

##### `ResetPolicyDurationSeconds` <a name="ResetPolicyDurationSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetPolicyDurationSeconds"></a>

```go
func ResetPolicyDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMillisecondsInput">MaximumIndividualPlayerLatencyMillisecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSecondsInput">PolicyDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMilliseconds">MaximumIndividualPlayerLatencyMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSeconds">PolicyDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumIndividualPlayerLatencyMillisecondsInput`<sup>Optional</sup> <a name="MaximumIndividualPlayerLatencyMillisecondsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMillisecondsInput"></a>

```go
func MaximumIndividualPlayerLatencyMillisecondsInput() *f64
```

- *Type:* *f64

---

##### `PolicyDurationSecondsInput`<sup>Optional</sup> <a name="PolicyDurationSecondsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSecondsInput"></a>

```go
func PolicyDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaximumIndividualPlayerLatencyMilliseconds`<sup>Required</sup> <a name="MaximumIndividualPlayerLatencyMilliseconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMilliseconds"></a>

```go
func MaximumIndividualPlayerLatencyMilliseconds() *f64
```

- *Type:* *f64

---

##### `PolicyDurationSeconds`<sup>Required</sup> <a name="PolicyDurationSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSeconds"></a>

```go
func PolicyDurationSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftGameSessionQueuePriorityConfigurationOutputReference <a name="GameliftGameSessionQueuePriorityConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

gameliftgamesessionqueue.NewGameliftGameSessionQueuePriorityConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameliftGameSessionQueuePriorityConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetLocationOrder">ResetLocationOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetPriorityOrder">ResetPriorityOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocationOrder` <a name="ResetLocationOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetLocationOrder"></a>

```go
func ResetLocationOrder()
```

##### `ResetPriorityOrder` <a name="ResetPriorityOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetPriorityOrder"></a>

```go
func ResetPriorityOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrderInput">LocationOrderInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrderInput">PriorityOrderInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrder">LocationOrder</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrder">PriorityOrder</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationOrderInput`<sup>Optional</sup> <a name="LocationOrderInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrderInput"></a>

```go
func LocationOrderInput() *[]*string
```

- *Type:* *[]*string

---

##### `PriorityOrderInput`<sup>Optional</sup> <a name="PriorityOrderInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrderInput"></a>

```go
func PriorityOrderInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocationOrder`<sup>Required</sup> <a name="LocationOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrder"></a>

```go
func LocationOrder() *[]*string
```

- *Type:* *[]*string

---

##### `PriorityOrder`<sup>Required</sup> <a name="PriorityOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrder"></a>

```go
func PriorityOrder() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftGameSessionQueueTagsList <a name="GameliftGameSessionQueueTagsList" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

gameliftgamesessionqueue.NewGameliftGameSessionQueueTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftGameSessionQueueTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.get"></a>

```go
func Get(index *f64) GameliftGameSessionQueueTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftGameSessionQueueTagsOutputReference <a name="GameliftGameSessionQueueTagsOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftgamesessionqueue"

gameliftgamesessionqueue.NewGameliftGameSessionQueueTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftGameSessionQueueTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



