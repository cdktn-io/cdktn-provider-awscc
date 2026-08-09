# `gameliftMatchmakingConfiguration` Submodule <a name="`gameliftMatchmakingConfiguration` Submodule" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftMatchmakingConfiguration <a name="GameliftMatchmakingConfiguration" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration awscc_gamelift_matchmaking_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftmatchmakingconfiguration"

gameliftmatchmakingconfiguration.NewGameliftMatchmakingConfiguration(scope Construct, id *string, config GameliftMatchmakingConfigurationConfig) GameliftMatchmakingConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig">GameliftMatchmakingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig">GameliftMatchmakingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putGameProperties">PutGameProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAcceptanceTimeoutSeconds">ResetAcceptanceTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAdditionalPlayerCount">ResetAdditionalPlayerCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetBackfillMode">ResetBackfillMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCustomEventData">ResetCustomEventData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetFlexMatchMode">ResetFlexMatchMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameProperties">ResetGameProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionData">ResetGameSessionData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionQueueArns">ResetGameSessionQueueArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetNotificationTarget">ResetNotificationTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetRuleSetArn">ResetRuleSetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGameProperties` <a name="PutGameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putGameProperties"></a>

```go
func PutGameProperties(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putGameProperties.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAcceptanceTimeoutSeconds` <a name="ResetAcceptanceTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAcceptanceTimeoutSeconds"></a>

```go
func ResetAcceptanceTimeoutSeconds()
```

##### `ResetAdditionalPlayerCount` <a name="ResetAdditionalPlayerCount" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAdditionalPlayerCount"></a>

```go
func ResetAdditionalPlayerCount()
```

##### `ResetBackfillMode` <a name="ResetBackfillMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetBackfillMode"></a>

```go
func ResetBackfillMode()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCreationTime"></a>

```go
func ResetCreationTime()
```

##### `ResetCustomEventData` <a name="ResetCustomEventData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCustomEventData"></a>

```go
func ResetCustomEventData()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFlexMatchMode` <a name="ResetFlexMatchMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetFlexMatchMode"></a>

```go
func ResetFlexMatchMode()
```

##### `ResetGameProperties` <a name="ResetGameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameProperties"></a>

```go
func ResetGameProperties()
```

##### `ResetGameSessionData` <a name="ResetGameSessionData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionData"></a>

```go
func ResetGameSessionData()
```

##### `ResetGameSessionQueueArns` <a name="ResetGameSessionQueueArns" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionQueueArns"></a>

```go
func ResetGameSessionQueueArns()
```

##### `ResetNotificationTarget` <a name="ResetNotificationTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetNotificationTarget"></a>

```go
func ResetNotificationTarget()
```

##### `ResetRuleSetArn` <a name="ResetRuleSetArn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetRuleSetArn"></a>

```go
func ResetRuleSetArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftMatchmakingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftmatchmakingconfiguration"

gameliftmatchmakingconfiguration.GameliftMatchmakingConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftmatchmakingconfiguration"

gameliftmatchmakingconfiguration.GameliftMatchmakingConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftmatchmakingconfiguration"

gameliftmatchmakingconfiguration.GameliftMatchmakingConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftmatchmakingconfiguration"

gameliftmatchmakingconfiguration.GameliftMatchmakingConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GameliftMatchmakingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GameliftMatchmakingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GameliftMatchmakingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GameliftMatchmakingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameProperties">GameProperties</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList">GameliftMatchmakingConfigurationGamePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList">GameliftMatchmakingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequiredInput">AcceptanceRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSecondsInput">AcceptanceTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCountInput">AdditionalPlayerCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillModeInput">BackfillModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTimeInput">CreationTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventDataInput">CustomEventDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchModeInput">FlexMatchModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gamePropertiesInput">GamePropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionDataInput">GameSessionDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArnsInput">GameSessionQueueArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTargetInput">NotificationTargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSecondsInput">RequestTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArnInput">RuleSetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetNameInput">RuleSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequired">AcceptanceRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSeconds">AcceptanceTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCount">AdditionalPlayerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillMode">BackfillMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventData">CustomEventData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchMode">FlexMatchMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionData">GameSessionData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArns">GameSessionQueueArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTarget">NotificationTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSeconds">RequestTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArn">RuleSetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetName">RuleSetName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `GameProperties`<sup>Required</sup> <a name="GameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameProperties"></a>

```go
func GameProperties() GameliftMatchmakingConfigurationGamePropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList">GameliftMatchmakingConfigurationGamePropertiesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tags"></a>

```go
func Tags() GameliftMatchmakingConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList">GameliftMatchmakingConfigurationTagsList</a>

---

##### `AcceptanceRequiredInput`<sup>Optional</sup> <a name="AcceptanceRequiredInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequiredInput"></a>

```go
func AcceptanceRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `AcceptanceTimeoutSecondsInput`<sup>Optional</sup> <a name="AcceptanceTimeoutSecondsInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSecondsInput"></a>

```go
func AcceptanceTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `AdditionalPlayerCountInput`<sup>Optional</sup> <a name="AdditionalPlayerCountInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCountInput"></a>

```go
func AdditionalPlayerCountInput() *f64
```

- *Type:* *f64

---

##### `BackfillModeInput`<sup>Optional</sup> <a name="BackfillModeInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillModeInput"></a>

```go
func BackfillModeInput() *string
```

- *Type:* *string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTimeInput"></a>

```go
func CreationTimeInput() *string
```

- *Type:* *string

---

##### `CustomEventDataInput`<sup>Optional</sup> <a name="CustomEventDataInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventDataInput"></a>

```go
func CustomEventDataInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FlexMatchModeInput`<sup>Optional</sup> <a name="FlexMatchModeInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchModeInput"></a>

```go
func FlexMatchModeInput() *string
```

- *Type:* *string

---

##### `GamePropertiesInput`<sup>Optional</sup> <a name="GamePropertiesInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gamePropertiesInput"></a>

```go
func GamePropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `GameSessionDataInput`<sup>Optional</sup> <a name="GameSessionDataInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionDataInput"></a>

```go
func GameSessionDataInput() *string
```

- *Type:* *string

---

##### `GameSessionQueueArnsInput`<sup>Optional</sup> <a name="GameSessionQueueArnsInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArnsInput"></a>

```go
func GameSessionQueueArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationTargetInput`<sup>Optional</sup> <a name="NotificationTargetInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTargetInput"></a>

```go
func NotificationTargetInput() *string
```

- *Type:* *string

---

##### `RequestTimeoutSecondsInput`<sup>Optional</sup> <a name="RequestTimeoutSecondsInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSecondsInput"></a>

```go
func RequestTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `RuleSetArnInput`<sup>Optional</sup> <a name="RuleSetArnInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArnInput"></a>

```go
func RuleSetArnInput() *string
```

- *Type:* *string

---

##### `RuleSetNameInput`<sup>Optional</sup> <a name="RuleSetNameInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetNameInput"></a>

```go
func RuleSetNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AcceptanceRequired`<sup>Required</sup> <a name="AcceptanceRequired" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequired"></a>

```go
func AcceptanceRequired() interface{}
```

- *Type:* interface{}

---

##### `AcceptanceTimeoutSeconds`<sup>Required</sup> <a name="AcceptanceTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSeconds"></a>

```go
func AcceptanceTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `AdditionalPlayerCount`<sup>Required</sup> <a name="AdditionalPlayerCount" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCount"></a>

```go
func AdditionalPlayerCount() *f64
```

- *Type:* *f64

---

##### `BackfillMode`<sup>Required</sup> <a name="BackfillMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillMode"></a>

```go
func BackfillMode() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `CustomEventData`<sup>Required</sup> <a name="CustomEventData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventData"></a>

```go
func CustomEventData() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FlexMatchMode`<sup>Required</sup> <a name="FlexMatchMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchMode"></a>

```go
func FlexMatchMode() *string
```

- *Type:* *string

---

##### `GameSessionData`<sup>Required</sup> <a name="GameSessionData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionData"></a>

```go
func GameSessionData() *string
```

- *Type:* *string

---

##### `GameSessionQueueArns`<sup>Required</sup> <a name="GameSessionQueueArns" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArns"></a>

```go
func GameSessionQueueArns() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotificationTarget`<sup>Required</sup> <a name="NotificationTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTarget"></a>

```go
func NotificationTarget() *string
```

- *Type:* *string

---

##### `RequestTimeoutSeconds`<sup>Required</sup> <a name="RequestTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSeconds"></a>

```go
func RequestTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `RuleSetArn`<sup>Required</sup> <a name="RuleSetArn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArn"></a>

```go
func RuleSetArn() *string
```

- *Type:* *string

---

##### `RuleSetName`<sup>Required</sup> <a name="RuleSetName" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetName"></a>

```go
func RuleSetName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftMatchmakingConfigurationConfig <a name="GameliftMatchmakingConfigurationConfig" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftmatchmakingconfiguration"

&gameliftmatchmakingconfiguration.GameliftMatchmakingConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AcceptanceRequired: interface{},
	Name: *string,
	RequestTimeoutSeconds: *f64,
	RuleSetName: *string,
	AcceptanceTimeoutSeconds: *f64,
	AdditionalPlayerCount: *f64,
	BackfillMode: *string,
	CreationTime: *string,
	CustomEventData: *string,
	Description: *string,
	FlexMatchMode: *string,
	GameProperties: interface{},
	GameSessionData: *string,
	GameSessionQueueArns: *[]*string,
	NotificationTarget: *string,
	RuleSetArn: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceRequired">AcceptanceRequired</a></code> | <code>interface{}</code> | A flag that indicates whether a match that was created with this configuration must be accepted by the matched players. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | A unique identifier for the matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.requestTimeoutSeconds">RequestTimeoutSeconds</a></code> | <code>*f64</code> | The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetName">RuleSetName</a></code> | <code>*string</code> | A unique identifier for the matchmaking rule set to use with this configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceTimeoutSeconds">AcceptanceTimeoutSeconds</a></code> | <code>*f64</code> | The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.additionalPlayerCount">AdditionalPlayerCount</a></code> | <code>*f64</code> | The number of player slots in a match to keep open for future players. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.backfillMode">BackfillMode</a></code> | <code>*string</code> | The method used to backfill game sessions created with this matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.creationTime">CreationTime</a></code> | <code>*string</code> | A time stamp indicating when this data object was created. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.customEventData">CustomEventData</a></code> | <code>*string</code> | Information to attach to all events related to the matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.description">Description</a></code> | <code>*string</code> | A descriptive label that is associated with matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.flexMatchMode">FlexMatchMode</a></code> | <code>*string</code> | Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameProperties">GameProperties</a></code> | <code>interface{}</code> | A set of custom properties for a game session, formatted as key:value pairs. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionData">GameSessionData</a></code> | <code>*string</code> | A set of custom game session properties, formatted as a single string value. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionQueueArns">GameSessionQueueArns</a></code> | <code>*[]*string</code> | The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.notificationTarget">NotificationTarget</a></code> | <code>*string</code> | An SNS topic ARN that is set up to receive matchmaking notifications. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetArn">RuleSetArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AcceptanceRequired`<sup>Required</sup> <a name="AcceptanceRequired" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceRequired"></a>

```go
AcceptanceRequired interface{}
```

- *Type:* interface{}

A flag that indicates whether a match that was created with this configuration must be accepted by the matched players.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#acceptance_required GameliftMatchmakingConfiguration#acceptance_required}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique identifier for the matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#name GameliftMatchmakingConfiguration#name}

---

##### `RequestTimeoutSeconds`<sup>Required</sup> <a name="RequestTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.requestTimeoutSeconds"></a>

```go
RequestTimeoutSeconds *f64
```

- *Type:* *f64

The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#request_timeout_seconds GameliftMatchmakingConfiguration#request_timeout_seconds}

---

##### `RuleSetName`<sup>Required</sup> <a name="RuleSetName" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetName"></a>

```go
RuleSetName *string
```

- *Type:* *string

A unique identifier for the matchmaking rule set to use with this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#rule_set_name GameliftMatchmakingConfiguration#rule_set_name}

---

##### `AcceptanceTimeoutSeconds`<sup>Optional</sup> <a name="AcceptanceTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceTimeoutSeconds"></a>

```go
AcceptanceTimeoutSeconds *f64
```

- *Type:* *f64

The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#acceptance_timeout_seconds GameliftMatchmakingConfiguration#acceptance_timeout_seconds}

---

##### `AdditionalPlayerCount`<sup>Optional</sup> <a name="AdditionalPlayerCount" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.additionalPlayerCount"></a>

```go
AdditionalPlayerCount *f64
```

- *Type:* *f64

The number of player slots in a match to keep open for future players.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#additional_player_count GameliftMatchmakingConfiguration#additional_player_count}

---

##### `BackfillMode`<sup>Optional</sup> <a name="BackfillMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.backfillMode"></a>

```go
BackfillMode *string
```

- *Type:* *string

The method used to backfill game sessions created with this matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#backfill_mode GameliftMatchmakingConfiguration#backfill_mode}

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.creationTime"></a>

```go
CreationTime *string
```

- *Type:* *string

A time stamp indicating when this data object was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#creation_time GameliftMatchmakingConfiguration#creation_time}

---

##### `CustomEventData`<sup>Optional</sup> <a name="CustomEventData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.customEventData"></a>

```go
CustomEventData *string
```

- *Type:* *string

Information to attach to all events related to the matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#custom_event_data GameliftMatchmakingConfiguration#custom_event_data}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A descriptive label that is associated with matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#description GameliftMatchmakingConfiguration#description}

---

##### `FlexMatchMode`<sup>Optional</sup> <a name="FlexMatchMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.flexMatchMode"></a>

```go
FlexMatchMode *string
```

- *Type:* *string

Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#flex_match_mode GameliftMatchmakingConfiguration#flex_match_mode}

---

##### `GameProperties`<sup>Optional</sup> <a name="GameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameProperties"></a>

```go
GameProperties interface{}
```

- *Type:* interface{}

A set of custom properties for a game session, formatted as key:value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#game_properties GameliftMatchmakingConfiguration#game_properties}

---

##### `GameSessionData`<sup>Optional</sup> <a name="GameSessionData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionData"></a>

```go
GameSessionData *string
```

- *Type:* *string

A set of custom game session properties, formatted as a single string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#game_session_data GameliftMatchmakingConfiguration#game_session_data}

---

##### `GameSessionQueueArns`<sup>Optional</sup> <a name="GameSessionQueueArns" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionQueueArns"></a>

```go
GameSessionQueueArns *[]*string
```

- *Type:* *[]*string

The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#game_session_queue_arns GameliftMatchmakingConfiguration#game_session_queue_arns}

---

##### `NotificationTarget`<sup>Optional</sup> <a name="NotificationTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.notificationTarget"></a>

```go
NotificationTarget *string
```

- *Type:* *string

An SNS topic ARN that is set up to receive matchmaking notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#notification_target GameliftMatchmakingConfiguration#notification_target}

---

##### `RuleSetArn`<sup>Optional</sup> <a name="RuleSetArn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetArn"></a>

```go
RuleSetArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#rule_set_arn GameliftMatchmakingConfiguration#rule_set_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#tags GameliftMatchmakingConfiguration#tags}

---

### GameliftMatchmakingConfigurationGameProperties <a name="GameliftMatchmakingConfigurationGameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftmatchmakingconfiguration"

&gameliftmatchmakingconfiguration.GameliftMatchmakingConfigurationGameProperties {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.key">Key</a></code> | <code>*string</code> | The game property identifier. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.value">Value</a></code> | <code>*string</code> | The game property value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.key"></a>

```go
Key *string
```

- *Type:* *string

The game property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#key GameliftMatchmakingConfiguration#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.value"></a>

```go
Value *string
```

- *Type:* *string

The game property value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#value GameliftMatchmakingConfiguration#value}

---

### GameliftMatchmakingConfigurationTags <a name="GameliftMatchmakingConfigurationTags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftmatchmakingconfiguration"

&gameliftmatchmakingconfiguration.GameliftMatchmakingConfigurationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#key GameliftMatchmakingConfiguration#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#value GameliftMatchmakingConfiguration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftMatchmakingConfigurationGamePropertiesList <a name="GameliftMatchmakingConfigurationGamePropertiesList" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftmatchmakingconfiguration"

gameliftmatchmakingconfiguration.NewGameliftMatchmakingConfigurationGamePropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftMatchmakingConfigurationGamePropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.get"></a>

```go
func Get(index *f64) GameliftMatchmakingConfigurationGamePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftMatchmakingConfigurationGamePropertiesOutputReference <a name="GameliftMatchmakingConfigurationGamePropertiesOutputReference" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftmatchmakingconfiguration"

gameliftmatchmakingconfiguration.NewGameliftMatchmakingConfigurationGamePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftMatchmakingConfigurationGamePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftMatchmakingConfigurationTagsList <a name="GameliftMatchmakingConfigurationTagsList" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftmatchmakingconfiguration"

gameliftmatchmakingconfiguration.NewGameliftMatchmakingConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftMatchmakingConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.get"></a>

```go
func Get(index *f64) GameliftMatchmakingConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftMatchmakingConfigurationTagsOutputReference <a name="GameliftMatchmakingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftmatchmakingconfiguration"

gameliftmatchmakingconfiguration.NewGameliftMatchmakingConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftMatchmakingConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



