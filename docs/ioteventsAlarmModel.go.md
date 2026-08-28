# `ioteventsAlarmModel` Submodule <a name="`ioteventsAlarmModel` Submodule" id="@cdktn/provider-awscc.ioteventsAlarmModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IoteventsAlarmModel <a name="IoteventsAlarmModel" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model awscc_iotevents_alarm_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModel(scope Construct, id *string, config IoteventsAlarmModelConfig) IoteventsAlarmModel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig">IoteventsAlarmModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig">IoteventsAlarmModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmCapabilities">PutAlarmCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmEventActions">PutAlarmEventActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmRule">PutAlarmRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmCapabilities">ResetAlarmCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmEventActions">ResetAlarmEventActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelDescription">ResetAlarmModelDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelName">ResetAlarmModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlarmCapabilities` <a name="PutAlarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmCapabilities"></a>

```go
func PutAlarmCapabilities(value IoteventsAlarmModelAlarmCapabilities)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

---

##### `PutAlarmEventActions` <a name="PutAlarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmEventActions"></a>

```go
func PutAlarmEventActions(value IoteventsAlarmModelAlarmEventActions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmEventActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

---

##### `PutAlarmRule` <a name="PutAlarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmRule"></a>

```go
func PutAlarmRule(value IoteventsAlarmModelAlarmRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlarmCapabilities` <a name="ResetAlarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmCapabilities"></a>

```go
func ResetAlarmCapabilities()
```

##### `ResetAlarmEventActions` <a name="ResetAlarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmEventActions"></a>

```go
func ResetAlarmEventActions()
```

##### `ResetAlarmModelDescription` <a name="ResetAlarmModelDescription" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelDescription"></a>

```go
func ResetAlarmModelDescription()
```

##### `ResetAlarmModelName` <a name="ResetAlarmModelName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelName"></a>

```go
func ResetAlarmModelName()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetKey"></a>

```go
func ResetKey()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetSeverity"></a>

```go
func ResetSeverity()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IoteventsAlarmModel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.IoteventsAlarmModel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.IoteventsAlarmModel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.IoteventsAlarmModel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.IoteventsAlarmModel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IoteventsAlarmModel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IoteventsAlarmModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IoteventsAlarmModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IoteventsAlarmModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilities">AlarmCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference">IoteventsAlarmModelAlarmCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActions">AlarmEventActions</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference">IoteventsAlarmModelAlarmEventActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRule">AlarmRule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference">IoteventsAlarmModelAlarmRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList">IoteventsAlarmModelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilitiesInput">AlarmCapabilitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActionsInput">AlarmEventActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescriptionInput">AlarmModelDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelNameInput">AlarmModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRuleInput">AlarmRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severityInput">SeverityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescription">AlarmModelDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelName">AlarmModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severity">Severity</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlarmCapabilities`<sup>Required</sup> <a name="AlarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilities"></a>

```go
func AlarmCapabilities() IoteventsAlarmModelAlarmCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference">IoteventsAlarmModelAlarmCapabilitiesOutputReference</a>

---

##### `AlarmEventActions`<sup>Required</sup> <a name="AlarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActions"></a>

```go
func AlarmEventActions() IoteventsAlarmModelAlarmEventActionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference">IoteventsAlarmModelAlarmEventActionsOutputReference</a>

---

##### `AlarmRule`<sup>Required</sup> <a name="AlarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRule"></a>

```go
func AlarmRule() IoteventsAlarmModelAlarmRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference">IoteventsAlarmModelAlarmRuleOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tags"></a>

```go
func Tags() IoteventsAlarmModelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList">IoteventsAlarmModelTagsList</a>

---

##### `AlarmCapabilitiesInput`<sup>Optional</sup> <a name="AlarmCapabilitiesInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilitiesInput"></a>

```go
func AlarmCapabilitiesInput() interface{}
```

- *Type:* interface{}

---

##### `AlarmEventActionsInput`<sup>Optional</sup> <a name="AlarmEventActionsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActionsInput"></a>

```go
func AlarmEventActionsInput() interface{}
```

- *Type:* interface{}

---

##### `AlarmModelDescriptionInput`<sup>Optional</sup> <a name="AlarmModelDescriptionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescriptionInput"></a>

```go
func AlarmModelDescriptionInput() *string
```

- *Type:* *string

---

##### `AlarmModelNameInput`<sup>Optional</sup> <a name="AlarmModelNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelNameInput"></a>

```go
func AlarmModelNameInput() *string
```

- *Type:* *string

---

##### `AlarmRuleInput`<sup>Optional</sup> <a name="AlarmRuleInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRuleInput"></a>

```go
func AlarmRuleInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severityInput"></a>

```go
func SeverityInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AlarmModelDescription`<sup>Required</sup> <a name="AlarmModelDescription" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescription"></a>

```go
func AlarmModelDescription() *string
```

- *Type:* *string

---

##### `AlarmModelName`<sup>Required</sup> <a name="AlarmModelName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelName"></a>

```go
func AlarmModelName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severity"></a>

```go
func Severity() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IoteventsAlarmModelAlarmCapabilities <a name="IoteventsAlarmModelAlarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmCapabilities {
	AcknowledgeFlow: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow,
	InitializationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.acknowledgeFlow">AcknowledgeFlow</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a></code> | Specifies whether to get notified for alarm state changes. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.initializationConfiguration">InitializationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a></code> | Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model. |

---

##### `AcknowledgeFlow`<sup>Optional</sup> <a name="AcknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.acknowledgeFlow"></a>

```go
AcknowledgeFlow IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

Specifies whether to get notified for alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#acknowledge_flow IoteventsAlarmModel#acknowledge_flow}

---

##### `InitializationConfiguration`<sup>Optional</sup> <a name="InitializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.initializationConfiguration"></a>

```go
InitializationConfiguration IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#initialization_configuration IoteventsAlarmModel#initialization_configuration}

---

### IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow <a name="IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow.property.enabled">Enabled</a></code> | <code>interface{}</code> | The value must be ``TRUE`` or ``FALSE``. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

The value must be ``TRUE`` or ``FALSE``.

If `TRUE`, you receive a notification when the alarm state changes. You must choose to acknowledge the notification before the alarm state can return to `NORMAL`. If `FALSE`, you won't receive notifications. The alarm automatically changes to the `NORMAL` state when the input property value returns to the specified range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#enabled IoteventsAlarmModel#enabled}

---

### IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration <a name="IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration {
	DisabledOnInitialization: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration.property.disabledOnInitialization">DisabledOnInitialization</a></code> | <code>interface{}</code> | The value must be ``TRUE`` or ``FALSE``. |

---

##### `DisabledOnInitialization`<sup>Optional</sup> <a name="DisabledOnInitialization" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration.property.disabledOnInitialization"></a>

```go
DisabledOnInitialization interface{}
```

- *Type:* interface{}

The value must be ``TRUE`` or ``FALSE``.

If `FALSE`, all alarm instances created based on the alarm model are activated. The default value is `TRUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#disabled_on_initialization IoteventsAlarmModel#disabled_on_initialization}

---

### IoteventsAlarmModelAlarmEventActions <a name="IoteventsAlarmModelAlarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActions {
	AlarmActions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions.property.alarmActions">AlarmActions</a></code> | <code>interface{}</code> | Specifies one or more supported actions to receive notifications when the alarm state changes. |

---

##### `AlarmActions`<sup>Optional</sup> <a name="AlarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions.property.alarmActions"></a>

```go
AlarmActions interface{}
```

- *Type:* interface{}

Specifies one or more supported actions to receive notifications when the alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_actions IoteventsAlarmModel#alarm_actions}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActions <a name="IoteventsAlarmModelAlarmEventActionsAlarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActions {
	DynamoDb: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb,
	DynamoDBv2: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2,
	Firehose: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose,
	IotEvents: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents,
	IotSiteWise: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise,
	IotTopicPublish: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish,
	Lambda: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda,
	Sns: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns,
	Sqs: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDb">DynamoDb</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a></code> | Defines an action to write to the Amazon DynamoDB table that you created. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDBv2">DynamoDBv2</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a></code> | Defines an action to write to the Amazon DynamoDB table that you created. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a></code> | Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotEvents">IotEvents</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a></code> | Sends an ITE input, passing in information about the detector model instance and the event that triggered the action. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotSiteWise">IotSiteWise</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a></code> | Sends information about the detector model instance and the event that triggered the action to a specified asset property in ITSW. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotTopicPublish">IotTopicPublish</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a></code> | Information required to publish the MQTT message through the IoT message broker. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.lambda">Lambda</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a></code> | Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sns">Sns</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a></code> | Information required to publish the Amazon SNS message. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sqs">Sqs</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a></code> | Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue. |

---

##### `DynamoDb`<sup>Optional</sup> <a name="DynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDb"></a>

```go
DynamoDb IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a>

Defines an action to write to the Amazon DynamoDB table that you created.

The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.
You must use expressions for all parameters in `DynamoDBAction`. The expressions accept literals, operators, functions, references, and substitution templates.
**Examples**

* For literal values, the expressions must contain single quotes. For example, the value for the `hashKeyType` parameter can be `'STRING'`.
* For references, you must specify either variables or input values. For example, the value for the `hashKeyField` parameter can be `$input.GreenhouseInput.name`.
* For a substitution template, you must use `${}`, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
  In the following example, the value for the `hashKeyValue` parameter uses a substitution template.
  `'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'`
* For a string concatenation, you must use `+`. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
  In the following example, the value for the `tableName` parameter uses a string concatenation.
  `'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`

For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
If the defined payload type is a string, `DynamoDBAction` writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the `payloadField` parameter is `<payload-field>_raw`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#dynamo_db IoteventsAlarmModel#dynamo_db}

---

##### `DynamoDBv2`<sup>Optional</sup> <a name="DynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDBv2"></a>

```go
DynamoDBv2 IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a>

Defines an action to write to the Amazon DynamoDB table that you created.

The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.
You must use expressions for all parameters in `DynamoDBv2Action`. The expressions accept literals, operators, functions, references, and substitution templates.
**Examples**

* For literal values, the expressions must contain single quotes. For example, the value for the `tableName` parameter can be `'GreenhouseTemperatureTable'`.
* For references, you must specify either variables or input values. For example, the value for the `tableName` parameter can be `$variable.ddbtableName`.
* For a substitution template, you must use `${}`, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
  In the following example, the value for the `contentExpression` parameter in `Payload` uses a substitution template.
  `'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'`
* For a string concatenation, you must use `+`. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
  In the following example, the value for the `tableName` parameter uses a string concatenation.
  `'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`

For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
The value for the `type` parameter in `Payload` must be `JSON`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#dynamo_d_bv_2 IoteventsAlarmModel#dynamo_d_bv_2}

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.firehose"></a>

```go
Firehose IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#firehose IoteventsAlarmModel#firehose}

---

##### `IotEvents`<sup>Optional</sup> <a name="IotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotEvents"></a>

```go
IotEvents IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

Sends an ITE input, passing in information about the detector model instance and the event that triggered the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#iot_events IoteventsAlarmModel#iot_events}

---

##### `IotSiteWise`<sup>Optional</sup> <a name="IotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotSiteWise"></a>

```go
IotSiteWise IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a>

Sends information about the detector model instance and the event that triggered the action to a specified asset property in ITSW.

You must use expressions for all parameters in `IotSiteWiseAction`. The expressions accept literals, operators, functions, references, and substitutions templates.
**Examples**

* For literal values, the expressions must contain single quotes. For example, the value for the `propertyAlias` parameter can be `'/company/windfarm/3/turbine/7/temperature'`.
* For references, you must specify either variables or input values. For example, the value for the `assetId` parameter can be `$input.TurbineInput.assetId1`.
* For a substitution template, you must use `${}`, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
  In the following example, the value for the `propertyAlias` parameter uses a substitution template.
  `'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'`

You must specify either `propertyAlias` or both `assetId` and `propertyId` to identify the target asset property in ITSW.
For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#iot_site_wise IoteventsAlarmModel#iot_site_wise}

---

##### `IotTopicPublish`<sup>Optional</sup> <a name="IotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotTopicPublish"></a>

```go
IotTopicPublish IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

Information required to publish the MQTT message through the IoT message broker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#iot_topic_publish IoteventsAlarmModel#iot_topic_publish}

---

##### `Lambda`<sup>Optional</sup> <a name="Lambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.lambda"></a>

```go
Lambda IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#lambda IoteventsAlarmModel#lambda}

---

##### `Sns`<sup>Optional</sup> <a name="Sns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sns"></a>

```go
Sns IoteventsAlarmModelAlarmEventActionsAlarmActionsSns
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

Information required to publish the Amazon SNS message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#sns IoteventsAlarmModel#sns}

---

##### `Sqs`<sup>Optional</sup> <a name="Sqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sqs"></a>

```go
Sqs IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#sqs IoteventsAlarmModel#sqs}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb {
	HashKeyField: *string,
	HashKeyType: *string,
	HashKeyValue: *string,
	Operation: *string,
	Payload: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload,
	PayloadField: *string,
	RangeKeyField: *string,
	RangeKeyType: *string,
	RangeKeyValue: *string,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyField">HashKeyField</a></code> | <code>*string</code> | The name of the hash key (also called the partition key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyType">HashKeyType</a></code> | <code>*string</code> | The data type for the hash key (also called the partition key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyValue">HashKeyValue</a></code> | <code>*string</code> | The value of the hash key (also called the partition key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.operation">Operation</a></code> | <code>*string</code> | The type of operation to perform. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a></code> | Information needed to configure the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payloadField">PayloadField</a></code> | <code>*string</code> | The name of the DynamoDB column that receives the action payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyField">RangeKeyField</a></code> | <code>*string</code> | The name of the range key (also called the sort key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyType">RangeKeyType</a></code> | <code>*string</code> | The data type for the range key (also called the sort key), You can specify the following values:   +  ``'STRING'`` - The range key is a string. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyValue">RangeKeyValue</a></code> | <code>*string</code> | The value of the range key (also called the sort key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.tableName">TableName</a></code> | <code>*string</code> | The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table. |

---

##### `HashKeyField`<sup>Optional</sup> <a name="HashKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyField"></a>

```go
HashKeyField *string
```

- *Type:* *string

The name of the hash key (also called the partition key).

The `hashKeyField` value must match the partition key of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#hash_key_field IoteventsAlarmModel#hash_key_field}

---

##### `HashKeyType`<sup>Optional</sup> <a name="HashKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyType"></a>

```go
HashKeyType *string
```

- *Type:* *string

The data type for the hash key (also called the partition key).

You can specify the following values:

* `'STRING'` - The hash key is a string.
* `'NUMBER'` - The hash key is a number.

If you don't specify `hashKeyType`, the default value is `'STRING'`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#hash_key_type IoteventsAlarmModel#hash_key_type}

---

##### `HashKeyValue`<sup>Optional</sup> <a name="HashKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyValue"></a>

```go
HashKeyValue *string
```

- *Type:* *string

The value of the hash key (also called the partition key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#hash_key_value IoteventsAlarmModel#hash_key_value}

---

##### `Operation`<sup>Optional</sup> <a name="Operation" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.operation"></a>

```go
Operation *string
```

- *Type:* *string

The type of operation to perform.

You can specify the following values:

* `'INSERT'` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
* `'UPDATE'` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
* `'DELETE'` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.

If you don't specify this parameter, ITE triggers the `'INSERT'` operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#operation IoteventsAlarmModel#operation}

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payload"></a>

```go
Payload IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

Information needed to configure the payload.

By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `PayloadField`<sup>Optional</sup> <a name="PayloadField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payloadField"></a>

```go
PayloadField *string
```

- *Type:* *string

The name of the DynamoDB column that receives the action payload.

If you don't specify this parameter, the name of the DynamoDB column is `payload`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload_field IoteventsAlarmModel#payload_field}

---

##### `RangeKeyField`<sup>Optional</sup> <a name="RangeKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyField"></a>

```go
RangeKeyField *string
```

- *Type:* *string

The name of the range key (also called the sort key).

The `rangeKeyField` value must match the sort key of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#range_key_field IoteventsAlarmModel#range_key_field}

---

##### `RangeKeyType`<sup>Optional</sup> <a name="RangeKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyType"></a>

```go
RangeKeyType *string
```

- *Type:* *string

The data type for the range key (also called the sort key), You can specify the following values:   +  ``'STRING'`` - The range key is a string.

* `'NUMBER'` - The range key is number.

If you don't specify `rangeKeyField`, the default value is `'STRING'`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#range_key_type IoteventsAlarmModel#range_key_type}

---

##### `RangeKeyValue`<sup>Optional</sup> <a name="RangeKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyValue"></a>

```go
RangeKeyValue *string
```

- *Type:* *string

The value of the range key (also called the sort key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#range_key_value IoteventsAlarmModel#range_key_value}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#table_name IoteventsAlarmModel#table_name}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload {
	ContentExpression: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.type">Type</a></code> | <code>*string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `ContentExpression`<sup>Optional</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.contentExpression"></a>

```go
ContentExpression *string
```

- *Type:* *string

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.type"></a>

```go
Type *string
```

- *Type:* *string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 {
	Payload: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a></code> | Information needed to configure the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.tableName">TableName</a></code> | <code>*string</code> | The name of the DynamoDB table. |

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.payload"></a>

```go
Payload IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

Information needed to configure the payload.

By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

The name of the DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#table_name IoteventsAlarmModel#table_name}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload {
	ContentExpression: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.type">Type</a></code> | <code>*string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `ContentExpression`<sup>Optional</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.contentExpression"></a>

```go
ContentExpression *string
```

- *Type:* *string

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.type"></a>

```go
Type *string
```

- *Type:* *string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose {
	DeliveryStreamName: *string,
	Payload: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload,
	Separator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.deliveryStreamName">DeliveryStreamName</a></code> | <code>*string</code> | The name of the Kinesis Data Firehose delivery stream where the data is written. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a></code> | You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.separator">Separator</a></code> | <code>*string</code> | A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. |

---

##### `DeliveryStreamName`<sup>Optional</sup> <a name="DeliveryStreamName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.deliveryStreamName"></a>

```go
DeliveryStreamName *string
```

- *Type:* *string

The name of the Kinesis Data Firehose delivery stream where the data is written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#delivery_stream_name IoteventsAlarmModel#delivery_stream_name}

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.payload"></a>

```go
Payload IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `Separator`<sup>Optional</sup> <a name="Separator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.separator"></a>

```go
Separator *string
```

- *Type:* *string

A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream.

Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#separator IoteventsAlarmModel#separator}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload {
	ContentExpression: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.type">Type</a></code> | <code>*string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `ContentExpression`<sup>Optional</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.contentExpression"></a>

```go
ContentExpression *string
```

- *Type:* *string

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.type"></a>

```go
Type *string
```

- *Type:* *string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents {
	InputName: *string,
	Payload: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.inputName">InputName</a></code> | <code>*string</code> | The name of the ITE input where the data is sent. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a></code> | You can configure the action payload when you send a message to an ITE input. |

---

##### `InputName`<sup>Optional</sup> <a name="InputName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.inputName"></a>

```go
InputName *string
```

- *Type:* *string

The name of the ITE input where the data is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#input_name IoteventsAlarmModel#input_name}

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.payload"></a>

```go
Payload IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

You can configure the action payload when you send a message to an ITE input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload {
	ContentExpression: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.type">Type</a></code> | <code>*string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `ContentExpression`<sup>Optional</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.contentExpression"></a>

```go
ContentExpression *string
```

- *Type:* *string

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.type"></a>

```go
Type *string
```

- *Type:* *string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise {
	AssetId: *string,
	EntryId: *string,
	PropertyAlias: *string,
	PropertyId: *string,
	PropertyValue: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.assetId">AssetId</a></code> | <code>*string</code> | The ID of the asset that has the specified property. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.entryId">EntryId</a></code> | <code>*string</code> | A unique identifier for this entry. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyAlias">PropertyAlias</a></code> | <code>*string</code> | The alias of the asset property. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyId">PropertyId</a></code> | <code>*string</code> | The ID of the asset property. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyValue">PropertyValue</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a></code> | The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information. |

---

##### `AssetId`<sup>Optional</sup> <a name="AssetId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.assetId"></a>

```go
AssetId *string
```

- *Type:* *string

The ID of the asset that has the specified property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#asset_id IoteventsAlarmModel#asset_id}

---

##### `EntryId`<sup>Optional</sup> <a name="EntryId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.entryId"></a>

```go
EntryId *string
```

- *Type:* *string

A unique identifier for this entry.

You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#entry_id IoteventsAlarmModel#entry_id}

---

##### `PropertyAlias`<sup>Optional</sup> <a name="PropertyAlias" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyAlias"></a>

```go
PropertyAlias *string
```

- *Type:* *string

The alias of the asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#property_alias IoteventsAlarmModel#property_alias}

---

##### `PropertyId`<sup>Optional</sup> <a name="PropertyId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyId"></a>

```go
PropertyId *string
```

- *Type:* *string

The ID of the asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#property_id IoteventsAlarmModel#property_id}

---

##### `PropertyValue`<sup>Optional</sup> <a name="PropertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyValue"></a>

```go
PropertyValue IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#property_value IoteventsAlarmModel#property_value}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue {
	Quality: *string,
	Timestamp: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp,
	Value: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.quality">Quality</a></code> | <code>*string</code> | The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.timestamp">Timestamp</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a></code> | The timestamp associated with the asset property value. The default is the current event time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a></code> | The value to send to an asset property. |

---

##### `Quality`<sup>Optional</sup> <a name="Quality" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.quality"></a>

```go
Quality *string
```

- *Type:* *string

The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#quality IoteventsAlarmModel#quality}

---

##### `Timestamp`<sup>Optional</sup> <a name="Timestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.timestamp"></a>

```go
Timestamp IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

The timestamp associated with the asset property value. The default is the current event time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#timestamp IoteventsAlarmModel#timestamp}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.value"></a>

```go
Value IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

The value to send to an asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#value IoteventsAlarmModel#value}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp {
	OffsetInNanos: *string,
	TimeInSeconds: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.offsetInNanos">OffsetInNanos</a></code> | <code>*string</code> | The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.timeInSeconds">TimeInSeconds</a></code> | <code>*string</code> | The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199. |

---

##### `OffsetInNanos`<sup>Optional</sup> <a name="OffsetInNanos" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.offsetInNanos"></a>

```go
OffsetInNanos *string
```

- *Type:* *string

The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#offset_in_nanos IoteventsAlarmModel#offset_in_nanos}

---

##### `TimeInSeconds`<sup>Optional</sup> <a name="TimeInSeconds" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.timeInSeconds"></a>

```go
TimeInSeconds *string
```

- *Type:* *string

The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#time_in_seconds IoteventsAlarmModel#time_in_seconds}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue {
	BooleanValue: *string,
	DoubleValue: *string,
	IntegerValue: *string,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.booleanValue">BooleanValue</a></code> | <code>*string</code> | The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.doubleValue">DoubleValue</a></code> | <code>*string</code> | The asset property value is a double. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.integerValue">IntegerValue</a></code> | <code>*string</code> | The asset property value is an integer. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.stringValue">StringValue</a></code> | <code>*string</code> | The asset property value is a string. |

---

##### `BooleanValue`<sup>Optional</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.booleanValue"></a>

```go
BooleanValue *string
```

- *Type:* *string

The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``.

You must use an expression, and the evaluated result should be a Boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#boolean_value IoteventsAlarmModel#boolean_value}

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.doubleValue"></a>

```go
DoubleValue *string
```

- *Type:* *string

The asset property value is a double.

You must use an expression, and the evaluated result should be a double.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#double_value IoteventsAlarmModel#double_value}

---

##### `IntegerValue`<sup>Optional</sup> <a name="IntegerValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.integerValue"></a>

```go
IntegerValue *string
```

- *Type:* *string

The asset property value is an integer.

You must use an expression, and the evaluated result should be an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#integer_value IoteventsAlarmModel#integer_value}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

The asset property value is a string.

You must use an expression, and the evaluated result should be a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#string_value IoteventsAlarmModel#string_value}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish {
	MqttTopic: *string,
	Payload: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.mqttTopic">MqttTopic</a></code> | <code>*string</code> | The MQTT topic of the message. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a></code> | You can configure the action payload when you publish a message to an IoTCore topic. |

---

##### `MqttTopic`<sup>Optional</sup> <a name="MqttTopic" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.mqttTopic"></a>

```go
MqttTopic *string
```

- *Type:* *string

The MQTT topic of the message.

You can use a string expression that includes variables (`$variable.<variable-name>`) and input values (`$input.<input-name>.<path-to-datum>`) as the topic string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#mqtt_topic IoteventsAlarmModel#mqtt_topic}

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.payload"></a>

```go
Payload IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

You can configure the action payload when you publish a message to an IoTCore topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload {
	ContentExpression: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.type">Type</a></code> | <code>*string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `ContentExpression`<sup>Optional</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.contentExpression"></a>

```go
ContentExpression *string
```

- *Type:* *string

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.type"></a>

```go
Type *string
```

- *Type:* *string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda {
	FunctionArn: *string,
	Payload: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.functionArn">FunctionArn</a></code> | <code>*string</code> | The ARN of the Lambda function that is executed. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a></code> | You can configure the action payload when you send a message to a Lambda function. |

---

##### `FunctionArn`<sup>Optional</sup> <a name="FunctionArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.functionArn"></a>

```go
FunctionArn *string
```

- *Type:* *string

The ARN of the Lambda function that is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#function_arn IoteventsAlarmModel#function_arn}

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.payload"></a>

```go
Payload IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

You can configure the action payload when you send a message to a Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload {
	ContentExpression: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.type">Type</a></code> | <code>*string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `ContentExpression`<sup>Optional</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.contentExpression"></a>

```go
ContentExpression *string
```

- *Type:* *string

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.type"></a>

```go
Type *string
```

- *Type:* *string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSns <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns {
	Payload: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload,
	TargetArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a></code> | You can configure the action payload when you send a message as an Amazon SNS push notification. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.targetArn">TargetArn</a></code> | <code>*string</code> | The ARN of the Amazon SNS target where the message is sent. |

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.payload"></a>

```go
Payload IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

You can configure the action payload when you send a message as an Amazon SNS push notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `TargetArn`<sup>Optional</sup> <a name="TargetArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.targetArn"></a>

```go
TargetArn *string
```

- *Type:* *string

The ARN of the Amazon SNS target where the message is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#target_arn IoteventsAlarmModel#target_arn}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload {
	ContentExpression: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.type">Type</a></code> | <code>*string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `ContentExpression`<sup>Optional</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.contentExpression"></a>

```go
ContentExpression *string
```

- *Type:* *string

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.type"></a>

```go
Type *string
```

- *Type:* *string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs {
	Payload: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload,
	QueueUrl: *string,
	UseBase64: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a></code> | You can configure the action payload when you send a message to an Amazon SQS queue. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.queueUrl">QueueUrl</a></code> | <code>*string</code> | The URL of the SQS queue where the data is written. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.useBase64">UseBase64</a></code> | <code>interface{}</code> | Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. |

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.payload"></a>

```go
Payload IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

You can configure the action payload when you send a message to an Amazon SQS queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `QueueUrl`<sup>Optional</sup> <a name="QueueUrl" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.queueUrl"></a>

```go
QueueUrl *string
```

- *Type:* *string

The URL of the SQS queue where the data is written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#queue_url IoteventsAlarmModel#queue_url}

---

##### `UseBase64`<sup>Optional</sup> <a name="UseBase64" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.useBase64"></a>

```go
UseBase64 interface{}
```

- *Type:* interface{}

Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue.

Otherwise, set this to FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#use_base_64 IoteventsAlarmModel#use_base_64}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload {
	ContentExpression: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.type">Type</a></code> | <code>*string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `ContentExpression`<sup>Optional</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.contentExpression"></a>

```go
ContentExpression *string
```

- *Type:* *string

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.type"></a>

```go
Type *string
```

- *Type:* *string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmRule <a name="IoteventsAlarmModelAlarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmRule {
	SimpleRule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule.property.simpleRule">SimpleRule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a></code> | A rule that compares an input property value to a threshold value with a comparison operator. |

---

##### `SimpleRule`<sup>Optional</sup> <a name="SimpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule.property.simpleRule"></a>

```go
SimpleRule IoteventsAlarmModelAlarmRuleSimpleRule
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

A rule that compares an input property value to a threshold value with a comparison operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#simple_rule IoteventsAlarmModel#simple_rule}

---

### IoteventsAlarmModelAlarmRuleSimpleRule <a name="IoteventsAlarmModelAlarmRuleSimpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelAlarmRuleSimpleRule {
	ComparisonOperator: *string,
	InputProperty: *string,
	Threshold: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | The comparison operator. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.inputProperty">InputProperty</a></code> | <code>*string</code> | The value on the left side of the comparison operator. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.threshold">Threshold</a></code> | <code>*string</code> | The value on the right side of the comparison operator. |

---

##### `ComparisonOperator`<sup>Optional</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.comparisonOperator"></a>

```go
ComparisonOperator *string
```

- *Type:* *string

The comparison operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#comparison_operator IoteventsAlarmModel#comparison_operator}

---

##### `InputProperty`<sup>Optional</sup> <a name="InputProperty" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.inputProperty"></a>

```go
InputProperty *string
```

- *Type:* *string

The value on the left side of the comparison operator.

You can specify an ITE input attribute as an input property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#input_property IoteventsAlarmModel#input_property}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.threshold"></a>

```go
Threshold *string
```

- *Type:* *string

The value on the right side of the comparison operator.

You can enter a number or specify an ITE input attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#threshold IoteventsAlarmModel#threshold}

---

### IoteventsAlarmModelConfig <a name="IoteventsAlarmModelConfig" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AlarmRule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule,
	RoleArn: *string,
	AlarmCapabilities: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities,
	AlarmEventActions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions,
	AlarmModelDescription: *string,
	AlarmModelName: *string,
	Key: *string,
	Severity: *f64,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmRule">AlarmRule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a></code> | Defines when your alarm is invoked. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmCapabilities">AlarmCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a></code> | Contains the configuration information of alarm state changes. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmEventActions">AlarmEventActions</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a></code> | Contains information about one or more alarm actions. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelDescription">AlarmModelDescription</a></code> | <code>*string</code> | The description of the alarm model. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelName">AlarmModelName</a></code> | <code>*string</code> | The name of the alarm model. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.key">Key</a></code> | <code>*string</code> | An input attribute used as a key to create an alarm. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.severity">Severity</a></code> | <code>*f64</code> | A non-negative integer that reflects the severity level of the alarm. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of key-value pairs that contain metadata for the alarm model. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlarmRule`<sup>Required</sup> <a name="AlarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmRule"></a>

```go
AlarmRule IoteventsAlarmModelAlarmRule
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

Defines when your alarm is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_rule IoteventsAlarmModel#alarm_rule}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of the IAM role that allows the alarm to perform actions and access AWS resources.

For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#role_arn IoteventsAlarmModel#role_arn}

---

##### `AlarmCapabilities`<sup>Optional</sup> <a name="AlarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmCapabilities"></a>

```go
AlarmCapabilities IoteventsAlarmModelAlarmCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

Contains the configuration information of alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_capabilities IoteventsAlarmModel#alarm_capabilities}

---

##### `AlarmEventActions`<sup>Optional</sup> <a name="AlarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmEventActions"></a>

```go
AlarmEventActions IoteventsAlarmModelAlarmEventActions
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

Contains information about one or more alarm actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_event_actions IoteventsAlarmModel#alarm_event_actions}

---

##### `AlarmModelDescription`<sup>Optional</sup> <a name="AlarmModelDescription" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelDescription"></a>

```go
AlarmModelDescription *string
```

- *Type:* *string

The description of the alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_model_description IoteventsAlarmModel#alarm_model_description}

---

##### `AlarmModelName`<sup>Optional</sup> <a name="AlarmModelName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelName"></a>

```go
AlarmModelName *string
```

- *Type:* *string

The name of the alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_model_name IoteventsAlarmModel#alarm_model_name}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

An input attribute used as a key to create an alarm.

ITE routes [inputs](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html) associated with this key to the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#key IoteventsAlarmModel#key}

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.severity"></a>

```go
Severity *f64
```

- *Type:* *f64

A non-negative integer that reflects the severity level of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#severity IoteventsAlarmModel#severity}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of key-value pairs that contain metadata for the alarm model.

The tags help you manage the alarm model. For more information, see [Tagging your resources](https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html) in the *Developer Guide*.
You can create up to 50 tags for one alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#tags IoteventsAlarmModel#tags}

---

### IoteventsAlarmModelTags <a name="IoteventsAlarmModelTags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

&ioteventsalarmmodel.IoteventsAlarmModelTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.key">Key</a></code> | <code>*string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.value">Value</a></code> | <code>*string</code> | The tag's value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#key IoteventsAlarmModel#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#value IoteventsAlarmModel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference <a name="IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference <a name="IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resetDisabledOnInitialization">ResetDisabledOnInitialization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabledOnInitialization` <a name="ResetDisabledOnInitialization" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resetDisabledOnInitialization"></a>

```go
func ResetDisabledOnInitialization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitializationInput">DisabledOnInitializationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitialization">DisabledOnInitialization</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisabledOnInitializationInput`<sup>Optional</sup> <a name="DisabledOnInitializationInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitializationInput"></a>

```go
func DisabledOnInitializationInput() interface{}
```

- *Type:* interface{}

---

##### `DisabledOnInitialization`<sup>Required</sup> <a name="DisabledOnInitialization" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitialization"></a>

```go
func DisabledOnInitialization() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmCapabilitiesOutputReference <a name="IoteventsAlarmModelAlarmCapabilitiesOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putAcknowledgeFlow">PutAcknowledgeFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putInitializationConfiguration">PutInitializationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetAcknowledgeFlow">ResetAcknowledgeFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetInitializationConfiguration">ResetInitializationConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcknowledgeFlow` <a name="PutAcknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putAcknowledgeFlow"></a>

```go
func PutAcknowledgeFlow(value IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putAcknowledgeFlow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

---

##### `PutInitializationConfiguration` <a name="PutInitializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putInitializationConfiguration"></a>

```go
func PutInitializationConfiguration(value IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putInitializationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

---

##### `ResetAcknowledgeFlow` <a name="ResetAcknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetAcknowledgeFlow"></a>

```go
func ResetAcknowledgeFlow()
```

##### `ResetInitializationConfiguration` <a name="ResetInitializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetInitializationConfiguration"></a>

```go
func ResetInitializationConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlow">AcknowledgeFlow</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfiguration">InitializationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference">IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlowInput">AcknowledgeFlowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfigurationInput">InitializationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcknowledgeFlow`<sup>Required</sup> <a name="AcknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlow"></a>

```go
func AcknowledgeFlow() IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference</a>

---

##### `InitializationConfiguration`<sup>Required</sup> <a name="InitializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfiguration"></a>

```go
func InitializationConfiguration() IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference">IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference</a>

---

##### `AcknowledgeFlowInput`<sup>Optional</sup> <a name="AcknowledgeFlowInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlowInput"></a>

```go
func AcknowledgeFlowInput() interface{}
```

- *Type:* interface{}

---

##### `InitializationConfigurationInput`<sup>Optional</sup> <a name="InitializationConfigurationInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfigurationInput"></a>

```go
func InitializationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyField">ResetHashKeyField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyType">ResetHashKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyValue">ResetHashKeyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetOperation">ResetOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayloadField">ResetPayloadField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyField">ResetRangeKeyField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyType">ResetRangeKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyValue">ResetRangeKeyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.putPayload"></a>

```go
func PutPayload(value IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

---

##### `ResetHashKeyField` <a name="ResetHashKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyField"></a>

```go
func ResetHashKeyField()
```

##### `ResetHashKeyType` <a name="ResetHashKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyType"></a>

```go
func ResetHashKeyType()
```

##### `ResetHashKeyValue` <a name="ResetHashKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyValue"></a>

```go
func ResetHashKeyValue()
```

##### `ResetOperation` <a name="ResetOperation" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetOperation"></a>

```go
func ResetOperation()
```

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayload"></a>

```go
func ResetPayload()
```

##### `ResetPayloadField` <a name="ResetPayloadField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayloadField"></a>

```go
func ResetPayloadField()
```

##### `ResetRangeKeyField` <a name="ResetRangeKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyField"></a>

```go
func ResetRangeKeyField()
```

##### `ResetRangeKeyType` <a name="ResetRangeKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyType"></a>

```go
func ResetRangeKeyType()
```

##### `ResetRangeKeyValue` <a name="ResetRangeKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyValue"></a>

```go
func ResetRangeKeyValue()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetTableName"></a>

```go
func ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyFieldInput">HashKeyFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyTypeInput">HashKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValueInput">HashKeyValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operationInput">OperationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadFieldInput">PayloadFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadInput">PayloadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyFieldInput">RangeKeyFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyTypeInput">RangeKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValueInput">RangeKeyValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyField">HashKeyField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyType">HashKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValue">HashKeyValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadField">PayloadField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyField">RangeKeyField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyType">RangeKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValue">RangeKeyValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payload"></a>

```go
func Payload() IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference</a>

---

##### `HashKeyFieldInput`<sup>Optional</sup> <a name="HashKeyFieldInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyFieldInput"></a>

```go
func HashKeyFieldInput() *string
```

- *Type:* *string

---

##### `HashKeyTypeInput`<sup>Optional</sup> <a name="HashKeyTypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyTypeInput"></a>

```go
func HashKeyTypeInput() *string
```

- *Type:* *string

---

##### `HashKeyValueInput`<sup>Optional</sup> <a name="HashKeyValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValueInput"></a>

```go
func HashKeyValueInput() *string
```

- *Type:* *string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operationInput"></a>

```go
func OperationInput() *string
```

- *Type:* *string

---

##### `PayloadFieldInput`<sup>Optional</sup> <a name="PayloadFieldInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadFieldInput"></a>

```go
func PayloadFieldInput() *string
```

- *Type:* *string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadInput"></a>

```go
func PayloadInput() interface{}
```

- *Type:* interface{}

---

##### `RangeKeyFieldInput`<sup>Optional</sup> <a name="RangeKeyFieldInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyFieldInput"></a>

```go
func RangeKeyFieldInput() *string
```

- *Type:* *string

---

##### `RangeKeyTypeInput`<sup>Optional</sup> <a name="RangeKeyTypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyTypeInput"></a>

```go
func RangeKeyTypeInput() *string
```

- *Type:* *string

---

##### `RangeKeyValueInput`<sup>Optional</sup> <a name="RangeKeyValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValueInput"></a>

```go
func RangeKeyValueInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `HashKeyField`<sup>Required</sup> <a name="HashKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyField"></a>

```go
func HashKeyField() *string
```

- *Type:* *string

---

##### `HashKeyType`<sup>Required</sup> <a name="HashKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyType"></a>

```go
func HashKeyType() *string
```

- *Type:* *string

---

##### `HashKeyValue`<sup>Required</sup> <a name="HashKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValue"></a>

```go
func HashKeyValue() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `PayloadField`<sup>Required</sup> <a name="PayloadField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadField"></a>

```go
func PayloadField() *string
```

- *Type:* *string

---

##### `RangeKeyField`<sup>Required</sup> <a name="RangeKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyField"></a>

```go
func RangeKeyField() *string
```

- *Type:* *string

---

##### `RangeKeyType`<sup>Required</sup> <a name="RangeKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyType"></a>

```go
func RangeKeyType() *string
```

- *Type:* *string

---

##### `RangeKeyValue`<sup>Required</sup> <a name="RangeKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValue"></a>

```go
func RangeKeyValue() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetContentExpression">ResetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentExpression` <a name="ResetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetContentExpression"></a>

```go
func ResetContentExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpressionInput">ContentExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentExpressionInput`<sup>Optional</sup> <a name="ContentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpressionInput"></a>

```go
func ContentExpressionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpression"></a>

```go
func ContentExpression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.putPayload"></a>

```go
func PutPayload(value IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

---

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetPayload"></a>

```go
func ResetPayload()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetTableName"></a>

```go
func ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payloadInput">PayloadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payload"></a>

```go
func Payload() IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference</a>

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payloadInput"></a>

```go
func PayloadInput() interface{}
```

- *Type:* interface{}

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetContentExpression">ResetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentExpression` <a name="ResetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetContentExpression"></a>

```go
func ResetContentExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpressionInput">ContentExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentExpressionInput`<sup>Optional</sup> <a name="ContentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpressionInput"></a>

```go
func ContentExpressionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpression"></a>

```go
func ContentExpression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetDeliveryStreamName">ResetDeliveryStreamName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetSeparator">ResetSeparator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.putPayload"></a>

```go
func PutPayload(value IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

---

##### `ResetDeliveryStreamName` <a name="ResetDeliveryStreamName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetDeliveryStreamName"></a>

```go
func ResetDeliveryStreamName()
```

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetPayload"></a>

```go
func ResetPayload()
```

##### `ResetSeparator` <a name="ResetSeparator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetSeparator"></a>

```go
func ResetSeparator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamNameInput">DeliveryStreamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payloadInput">PayloadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separatorInput">SeparatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamName">DeliveryStreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separator">Separator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payload"></a>

```go
func Payload() IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference</a>

---

##### `DeliveryStreamNameInput`<sup>Optional</sup> <a name="DeliveryStreamNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamNameInput"></a>

```go
func DeliveryStreamNameInput() *string
```

- *Type:* *string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payloadInput"></a>

```go
func PayloadInput() interface{}
```

- *Type:* interface{}

---

##### `SeparatorInput`<sup>Optional</sup> <a name="SeparatorInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separatorInput"></a>

```go
func SeparatorInput() *string
```

- *Type:* *string

---

##### `DeliveryStreamName`<sup>Required</sup> <a name="DeliveryStreamName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamName"></a>

```go
func DeliveryStreamName() *string
```

- *Type:* *string

---

##### `Separator`<sup>Required</sup> <a name="Separator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separator"></a>

```go
func Separator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetContentExpression">ResetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentExpression` <a name="ResetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetContentExpression"></a>

```go
func ResetContentExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpressionInput">ContentExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentExpressionInput`<sup>Optional</sup> <a name="ContentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpressionInput"></a>

```go
func ContentExpressionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpression"></a>

```go
func ContentExpression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetInputName">ResetInputName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.putPayload"></a>

```go
func PutPayload(value IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

---

##### `ResetInputName` <a name="ResetInputName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetInputName"></a>

```go
func ResetInputName()
```

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetPayload"></a>

```go
func ResetPayload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputNameInput">InputNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payloadInput">PayloadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputName">InputName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payload"></a>

```go
func Payload() IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference</a>

---

##### `InputNameInput`<sup>Optional</sup> <a name="InputNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputNameInput"></a>

```go
func InputNameInput() *string
```

- *Type:* *string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payloadInput"></a>

```go
func PayloadInput() interface{}
```

- *Type:* interface{}

---

##### `InputName`<sup>Required</sup> <a name="InputName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputName"></a>

```go
func InputName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetContentExpression">ResetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentExpression` <a name="ResetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetContentExpression"></a>

```go
func ResetContentExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpressionInput">ContentExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentExpressionInput`<sup>Optional</sup> <a name="ContentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpressionInput"></a>

```go
func ContentExpressionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpression"></a>

```go
func ContentExpression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.putPropertyValue">PutPropertyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetAssetId">ResetAssetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetEntryId">ResetEntryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyAlias">ResetPropertyAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyId">ResetPropertyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyValue">ResetPropertyValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPropertyValue` <a name="PutPropertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.putPropertyValue"></a>

```go
func PutPropertyValue(value IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.putPropertyValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

---

##### `ResetAssetId` <a name="ResetAssetId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetAssetId"></a>

```go
func ResetAssetId()
```

##### `ResetEntryId` <a name="ResetEntryId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetEntryId"></a>

```go
func ResetEntryId()
```

##### `ResetPropertyAlias` <a name="ResetPropertyAlias" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyAlias"></a>

```go
func ResetPropertyAlias()
```

##### `ResetPropertyId` <a name="ResetPropertyId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyId"></a>

```go
func ResetPropertyId()
```

##### `ResetPropertyValue` <a name="ResetPropertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyValue"></a>

```go
func ResetPropertyValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValue">PropertyValue</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetIdInput">AssetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryIdInput">EntryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAliasInput">PropertyAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyIdInput">PropertyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValueInput">PropertyValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetId">AssetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryId">EntryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAlias">PropertyAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyId">PropertyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropertyValue`<sup>Required</sup> <a name="PropertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValue"></a>

```go
func PropertyValue() IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference</a>

---

##### `AssetIdInput`<sup>Optional</sup> <a name="AssetIdInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetIdInput"></a>

```go
func AssetIdInput() *string
```

- *Type:* *string

---

##### `EntryIdInput`<sup>Optional</sup> <a name="EntryIdInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryIdInput"></a>

```go
func EntryIdInput() *string
```

- *Type:* *string

---

##### `PropertyAliasInput`<sup>Optional</sup> <a name="PropertyAliasInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAliasInput"></a>

```go
func PropertyAliasInput() *string
```

- *Type:* *string

---

##### `PropertyIdInput`<sup>Optional</sup> <a name="PropertyIdInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyIdInput"></a>

```go
func PropertyIdInput() *string
```

- *Type:* *string

---

##### `PropertyValueInput`<sup>Optional</sup> <a name="PropertyValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValueInput"></a>

```go
func PropertyValueInput() interface{}
```

- *Type:* interface{}

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetId"></a>

```go
func AssetId() *string
```

- *Type:* *string

---

##### `EntryId`<sup>Required</sup> <a name="EntryId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryId"></a>

```go
func EntryId() *string
```

- *Type:* *string

---

##### `PropertyAlias`<sup>Required</sup> <a name="PropertyAlias" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAlias"></a>

```go
func PropertyAlias() *string
```

- *Type:* *string

---

##### `PropertyId`<sup>Required</sup> <a name="PropertyId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyId"></a>

```go
func PropertyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putTimestamp">PutTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetQuality">ResetQuality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetTimestamp">ResetTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTimestamp` <a name="PutTimestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putTimestamp"></a>

```go
func PutTimestamp(value IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putTimestamp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

---

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue"></a>

```go
func PutValue(value IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

---

##### `ResetQuality` <a name="ResetQuality" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetQuality"></a>

```go
func ResetQuality()
```

##### `ResetTimestamp` <a name="ResetTimestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetTimestamp"></a>

```go
func ResetTimestamp()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestamp">Timestamp</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.qualityInput">QualityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestampInput">TimestampInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.quality">Quality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestamp"></a>

```go
func Timestamp() IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.value"></a>

```go
func Value() IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference</a>

---

##### `QualityInput`<sup>Optional</sup> <a name="QualityInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.qualityInput"></a>

```go
func QualityInput() *string
```

- *Type:* *string

---

##### `TimestampInput`<sup>Optional</sup> <a name="TimestampInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestampInput"></a>

```go
func TimestampInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Quality`<sup>Required</sup> <a name="Quality" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.quality"></a>

```go
func Quality() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetOffsetInNanos">ResetOffsetInNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetTimeInSeconds">ResetTimeInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOffsetInNanos` <a name="ResetOffsetInNanos" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetOffsetInNanos"></a>

```go
func ResetOffsetInNanos()
```

##### `ResetTimeInSeconds` <a name="ResetTimeInSeconds" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetTimeInSeconds"></a>

```go
func ResetTimeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanosInput">OffsetInNanosInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSecondsInput">TimeInSecondsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanos">OffsetInNanos</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSeconds">TimeInSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OffsetInNanosInput`<sup>Optional</sup> <a name="OffsetInNanosInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanosInput"></a>

```go
func OffsetInNanosInput() *string
```

- *Type:* *string

---

##### `TimeInSecondsInput`<sup>Optional</sup> <a name="TimeInSecondsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSecondsInput"></a>

```go
func TimeInSecondsInput() *string
```

- *Type:* *string

---

##### `OffsetInNanos`<sup>Required</sup> <a name="OffsetInNanos" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanos"></a>

```go
func OffsetInNanos() *string
```

- *Type:* *string

---

##### `TimeInSeconds`<sup>Required</sup> <a name="TimeInSeconds" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSeconds"></a>

```go
func TimeInSeconds() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetBooleanValue">ResetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetIntegerValue">ResetIntegerValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBooleanValue` <a name="ResetBooleanValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetBooleanValue"></a>

```go
func ResetBooleanValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetDoubleValue"></a>

```go
func ResetDoubleValue()
```

##### `ResetIntegerValue` <a name="ResetIntegerValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetIntegerValue"></a>

```go
func ResetIntegerValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValueInput">BooleanValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValueInput">IntegerValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValue">BooleanValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValue">DoubleValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValue">IntegerValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BooleanValueInput`<sup>Optional</sup> <a name="BooleanValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValueInput"></a>

```go
func BooleanValueInput() *string
```

- *Type:* *string

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValueInput"></a>

```go
func DoubleValueInput() *string
```

- *Type:* *string

---

##### `IntegerValueInput`<sup>Optional</sup> <a name="IntegerValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValueInput"></a>

```go
func IntegerValueInput() *string
```

- *Type:* *string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValue"></a>

```go
func BooleanValue() *string
```

- *Type:* *string

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValue"></a>

```go
func DoubleValue() *string
```

- *Type:* *string

---

##### `IntegerValue`<sup>Required</sup> <a name="IntegerValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValue"></a>

```go
func IntegerValue() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetMqttTopic">ResetMqttTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.putPayload"></a>

```go
func PutPayload(value IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

---

##### `ResetMqttTopic` <a name="ResetMqttTopic" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetMqttTopic"></a>

```go
func ResetMqttTopic()
```

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetPayload"></a>

```go
func ResetPayload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopicInput">MqttTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payloadInput">PayloadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopic">MqttTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payload"></a>

```go
func Payload() IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference</a>

---

##### `MqttTopicInput`<sup>Optional</sup> <a name="MqttTopicInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopicInput"></a>

```go
func MqttTopicInput() *string
```

- *Type:* *string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payloadInput"></a>

```go
func PayloadInput() interface{}
```

- *Type:* interface{}

---

##### `MqttTopic`<sup>Required</sup> <a name="MqttTopic" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopic"></a>

```go
func MqttTopic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetContentExpression">ResetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentExpression` <a name="ResetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetContentExpression"></a>

```go
func ResetContentExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpressionInput">ContentExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentExpressionInput`<sup>Optional</sup> <a name="ContentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpressionInput"></a>

```go
func ContentExpressionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpression"></a>

```go
func ContentExpression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetFunctionArn">ResetFunctionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.putPayload"></a>

```go
func PutPayload(value IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

---

##### `ResetFunctionArn` <a name="ResetFunctionArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetFunctionArn"></a>

```go
func ResetFunctionArn()
```

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetPayload"></a>

```go
func ResetPayload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArnInput">FunctionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payloadInput">PayloadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArn">FunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payload"></a>

```go
func Payload() IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference</a>

---

##### `FunctionArnInput`<sup>Optional</sup> <a name="FunctionArnInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArnInput"></a>

```go
func FunctionArnInput() *string
```

- *Type:* *string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payloadInput"></a>

```go
func PayloadInput() interface{}
```

- *Type:* interface{}

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArn"></a>

```go
func FunctionArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetContentExpression">ResetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentExpression` <a name="ResetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetContentExpression"></a>

```go
func ResetContentExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpressionInput">ContentExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentExpressionInput`<sup>Optional</sup> <a name="ContentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpressionInput"></a>

```go
func ContentExpressionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpression"></a>

```go
func ContentExpression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsList <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsList" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IoteventsAlarmModelAlarmEventActionsAlarmActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.get"></a>

```go
func Get(index *f64) IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb">PutDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDBv2">PutDynamoDBv2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putFirehose">PutFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotEvents">PutIotEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise">PutIotSiteWise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotTopicPublish">PutIotTopicPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putLambda">PutLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSns">PutSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSqs">PutSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDb">ResetDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDBv2">ResetDynamoDBv2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetFirehose">ResetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotEvents">ResetIotEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotSiteWise">ResetIotSiteWise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotTopicPublish">ResetIotTopicPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetLambda">ResetLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSns">ResetSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSqs">ResetSqs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDynamoDb` <a name="PutDynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb"></a>

```go
func PutDynamoDb(value IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a>

---

##### `PutDynamoDBv2` <a name="PutDynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDBv2"></a>

```go
func PutDynamoDBv2(value IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDBv2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a>

---

##### `PutFirehose` <a name="PutFirehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putFirehose"></a>

```go
func PutFirehose(value IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

---

##### `PutIotEvents` <a name="PutIotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotEvents"></a>

```go
func PutIotEvents(value IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotEvents.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

---

##### `PutIotSiteWise` <a name="PutIotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise"></a>

```go
func PutIotSiteWise(value IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a>

---

##### `PutIotTopicPublish` <a name="PutIotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotTopicPublish"></a>

```go
func PutIotTopicPublish(value IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotTopicPublish.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

---

##### `PutLambda` <a name="PutLambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putLambda"></a>

```go
func PutLambda(value IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

---

##### `PutSns` <a name="PutSns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSns"></a>

```go
func PutSns(value IoteventsAlarmModelAlarmEventActionsAlarmActionsSns)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

---

##### `PutSqs` <a name="PutSqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSqs"></a>

```go
func PutSqs(value IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSqs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

---

##### `ResetDynamoDb` <a name="ResetDynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDb"></a>

```go
func ResetDynamoDb()
```

##### `ResetDynamoDBv2` <a name="ResetDynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDBv2"></a>

```go
func ResetDynamoDBv2()
```

##### `ResetFirehose` <a name="ResetFirehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetFirehose"></a>

```go
func ResetFirehose()
```

##### `ResetIotEvents` <a name="ResetIotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotEvents"></a>

```go
func ResetIotEvents()
```

##### `ResetIotSiteWise` <a name="ResetIotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotSiteWise"></a>

```go
func ResetIotSiteWise()
```

##### `ResetIotTopicPublish` <a name="ResetIotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotTopicPublish"></a>

```go
func ResetIotTopicPublish()
```

##### `ResetLambda` <a name="ResetLambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetLambda"></a>

```go
func ResetLambda()
```

##### `ResetSns` <a name="ResetSns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSns"></a>

```go
func ResetSns()
```

##### `ResetSqs` <a name="ResetSqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSqs"></a>

```go
func ResetSqs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDb">DynamoDb</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2">DynamoDBv2</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEvents">IotEvents</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWise">IotSiteWise</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublish">IotTopicPublish</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambda">Lambda</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sns">Sns</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqs">Sqs</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDbInput">DynamoDbInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2Input">DynamoDBv2Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehoseInput">FirehoseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEventsInput">IotEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWiseInput">IotSiteWiseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublishInput">IotTopicPublishInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambdaInput">LambdaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.snsInput">SnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqsInput">SqsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DynamoDb`<sup>Required</sup> <a name="DynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDb"></a>

```go
func DynamoDb() IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference</a>

---

##### `DynamoDBv2`<sup>Required</sup> <a name="DynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2"></a>

```go
func DynamoDBv2() IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehose"></a>

```go
func Firehose() IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference</a>

---

##### `IotEvents`<sup>Required</sup> <a name="IotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEvents"></a>

```go
func IotEvents() IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference</a>

---

##### `IotSiteWise`<sup>Required</sup> <a name="IotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWise"></a>

```go
func IotSiteWise() IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference</a>

---

##### `IotTopicPublish`<sup>Required</sup> <a name="IotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublish"></a>

```go
func IotTopicPublish() IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference</a>

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambda"></a>

```go
func Lambda() IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference</a>

---

##### `Sns`<sup>Required</sup> <a name="Sns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sns"></a>

```go
func Sns() IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference</a>

---

##### `Sqs`<sup>Required</sup> <a name="Sqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqs"></a>

```go
func Sqs() IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference</a>

---

##### `DynamoDbInput`<sup>Optional</sup> <a name="DynamoDbInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDbInput"></a>

```go
func DynamoDbInput() interface{}
```

- *Type:* interface{}

---

##### `DynamoDBv2Input`<sup>Optional</sup> <a name="DynamoDBv2Input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2Input"></a>

```go
func DynamoDBv2Input() interface{}
```

- *Type:* interface{}

---

##### `FirehoseInput`<sup>Optional</sup> <a name="FirehoseInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehoseInput"></a>

```go
func FirehoseInput() interface{}
```

- *Type:* interface{}

---

##### `IotEventsInput`<sup>Optional</sup> <a name="IotEventsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEventsInput"></a>

```go
func IotEventsInput() interface{}
```

- *Type:* interface{}

---

##### `IotSiteWiseInput`<sup>Optional</sup> <a name="IotSiteWiseInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWiseInput"></a>

```go
func IotSiteWiseInput() interface{}
```

- *Type:* interface{}

---

##### `IotTopicPublishInput`<sup>Optional</sup> <a name="IotTopicPublishInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublishInput"></a>

```go
func IotTopicPublishInput() interface{}
```

- *Type:* interface{}

---

##### `LambdaInput`<sup>Optional</sup> <a name="LambdaInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambdaInput"></a>

```go
func LambdaInput() interface{}
```

- *Type:* interface{}

---

##### `SnsInput`<sup>Optional</sup> <a name="SnsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.snsInput"></a>

```go
func SnsInput() interface{}
```

- *Type:* interface{}

---

##### `SqsInput`<sup>Optional</sup> <a name="SqsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqsInput"></a>

```go
func SqsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetTargetArn">ResetTargetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.putPayload"></a>

```go
func PutPayload(value IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

---

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetPayload"></a>

```go
func ResetPayload()
```

##### `ResetTargetArn` <a name="ResetTargetArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetTargetArn"></a>

```go
func ResetTargetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payloadInput">PayloadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArnInput">TargetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArn">TargetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payload"></a>

```go
func Payload() IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference</a>

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payloadInput"></a>

```go
func PayloadInput() interface{}
```

- *Type:* interface{}

---

##### `TargetArnInput`<sup>Optional</sup> <a name="TargetArnInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArnInput"></a>

```go
func TargetArnInput() *string
```

- *Type:* *string

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArn"></a>

```go
func TargetArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetContentExpression">ResetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentExpression` <a name="ResetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetContentExpression"></a>

```go
func ResetContentExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpressionInput">ContentExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentExpressionInput`<sup>Optional</sup> <a name="ContentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpressionInput"></a>

```go
func ContentExpressionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpression"></a>

```go
func ContentExpression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetQueueUrl">ResetQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetUseBase64">ResetUseBase64</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.putPayload"></a>

```go
func PutPayload(value IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

---

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetPayload"></a>

```go
func ResetPayload()
```

##### `ResetQueueUrl` <a name="ResetQueueUrl" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetQueueUrl"></a>

```go
func ResetQueueUrl()
```

##### `ResetUseBase64` <a name="ResetUseBase64" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetUseBase64"></a>

```go
func ResetUseBase64()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payloadInput">PayloadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrlInput">QueueUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64Input">UseBase64Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrl">QueueUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64">UseBase64</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payload"></a>

```go
func Payload() IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference</a>

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payloadInput"></a>

```go
func PayloadInput() interface{}
```

- *Type:* interface{}

---

##### `QueueUrlInput`<sup>Optional</sup> <a name="QueueUrlInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrlInput"></a>

```go
func QueueUrlInput() *string
```

- *Type:* *string

---

##### `UseBase64Input`<sup>Optional</sup> <a name="UseBase64Input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64Input"></a>

```go
func UseBase64Input() interface{}
```

- *Type:* interface{}

---

##### `QueueUrl`<sup>Required</sup> <a name="QueueUrl" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrl"></a>

```go
func QueueUrl() *string
```

- *Type:* *string

---

##### `UseBase64`<sup>Required</sup> <a name="UseBase64" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64"></a>

```go
func UseBase64() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetContentExpression">ResetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentExpression` <a name="ResetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetContentExpression"></a>

```go
func ResetContentExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpressionInput">ContentExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentExpressionInput`<sup>Optional</sup> <a name="ContentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpressionInput"></a>

```go
func ContentExpressionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpression"></a>

```go
func ContentExpression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmEventActionsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmEventActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmEventActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.putAlarmActions">PutAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resetAlarmActions">ResetAlarmActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlarmActions` <a name="PutAlarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.putAlarmActions"></a>

```go
func PutAlarmActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.putAlarmActions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlarmActions` <a name="ResetAlarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resetAlarmActions"></a>

```go
func ResetAlarmActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActions">AlarmActions</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList">IoteventsAlarmModelAlarmEventActionsAlarmActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActionsInput">AlarmActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmActions`<sup>Required</sup> <a name="AlarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActions"></a>

```go
func AlarmActions() IoteventsAlarmModelAlarmEventActionsAlarmActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList">IoteventsAlarmModelAlarmEventActionsAlarmActionsList</a>

---

##### `AlarmActionsInput`<sup>Optional</sup> <a name="AlarmActionsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActionsInput"></a>

```go
func AlarmActionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmRuleOutputReference <a name="IoteventsAlarmModelAlarmRuleOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.putSimpleRule">PutSimpleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resetSimpleRule">ResetSimpleRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSimpleRule` <a name="PutSimpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.putSimpleRule"></a>

```go
func PutSimpleRule(value IoteventsAlarmModelAlarmRuleSimpleRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.putSimpleRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

---

##### `ResetSimpleRule` <a name="ResetSimpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resetSimpleRule"></a>

```go
func ResetSimpleRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRule">SimpleRule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference">IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRuleInput">SimpleRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SimpleRule`<sup>Required</sup> <a name="SimpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRule"></a>

```go
func SimpleRule() IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference">IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference</a>

---

##### `SimpleRuleInput`<sup>Optional</sup> <a name="SimpleRuleInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRuleInput"></a>

```go
func SimpleRuleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference <a name="IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetComparisonOperator">ResetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetInputProperty">ResetInputProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparisonOperator` <a name="ResetComparisonOperator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetComparisonOperator"></a>

```go
func ResetComparisonOperator()
```

##### `ResetInputProperty` <a name="ResetInputProperty" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetInputProperty"></a>

```go
func ResetInputProperty()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputPropertyInput">InputPropertyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputProperty">InputProperty</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.threshold">Threshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperatorInput"></a>

```go
func ComparisonOperatorInput() *string
```

- *Type:* *string

---

##### `InputPropertyInput`<sup>Optional</sup> <a name="InputPropertyInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputPropertyInput"></a>

```go
func InputPropertyInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *string
```

- *Type:* *string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperator"></a>

```go
func ComparisonOperator() *string
```

- *Type:* *string

---

##### `InputProperty`<sup>Required</sup> <a name="InputProperty" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputProperty"></a>

```go
func InputProperty() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.threshold"></a>

```go
func Threshold() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelTagsList <a name="IoteventsAlarmModelTagsList" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IoteventsAlarmModelTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.get"></a>

```go
func Get(index *f64) IoteventsAlarmModelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IoteventsAlarmModelTagsOutputReference <a name="IoteventsAlarmModelTagsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ioteventsalarmmodel"

ioteventsalarmmodel.NewIoteventsAlarmModelTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IoteventsAlarmModelTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



