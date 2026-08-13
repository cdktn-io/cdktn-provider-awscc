# `medialiveCloudwatchAlarmTemplate` Submodule <a name="`medialiveCloudwatchAlarmTemplate` Submodule" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveCloudwatchAlarmTemplate <a name="MedialiveCloudwatchAlarmTemplate" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template awscc_medialive_cloudwatch_alarm_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivecloudwatchalarmtemplate"

medialivecloudwatchalarmtemplate.NewMedialiveCloudwatchAlarmTemplate(scope Construct, id *string, config MedialiveCloudwatchAlarmTemplateConfig) MedialiveCloudwatchAlarmTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig">MedialiveCloudwatchAlarmTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig">MedialiveCloudwatchAlarmTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDatapointsToAlarm">ResetDatapointsToAlarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetEvaluationPeriods">ResetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetGroupIdentifier">ResetGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDatapointsToAlarm` <a name="ResetDatapointsToAlarm" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDatapointsToAlarm"></a>

```go
func ResetDatapointsToAlarm()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEvaluationPeriods` <a name="ResetEvaluationPeriods" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetEvaluationPeriods"></a>

```go
func ResetEvaluationPeriods()
```

##### `ResetGroupIdentifier` <a name="ResetGroupIdentifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetGroupIdentifier"></a>

```go
func ResetGroupIdentifier()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetThreshold"></a>

```go
func ResetThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveCloudwatchAlarmTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivecloudwatchalarmtemplate"

medialivecloudwatchalarmtemplate.MedialiveCloudwatchAlarmTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivecloudwatchalarmtemplate"

medialivecloudwatchalarmtemplate.MedialiveCloudwatchAlarmTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivecloudwatchalarmtemplate"

medialivecloudwatchalarmtemplate.MedialiveCloudwatchAlarmTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivecloudwatchalarmtemplate"

medialivecloudwatchalarmtemplate.MedialiveCloudwatchAlarmTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MedialiveCloudwatchAlarmTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MedialiveCloudwatchAlarmTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MedialiveCloudwatchAlarmTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveCloudwatchAlarmTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cloudwatchAlarmTemplateId">CloudwatchAlarmTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarmInput">DatapointsToAlarmInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriodsInput">EvaluationPeriodsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifierInput">GroupIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.periodInput">PeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statisticInput">StatisticInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceTypeInput">TargetResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingDataInput">TreatMissingDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarm">DatapointsToAlarm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifier">GroupIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statistic">Statistic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceType">TargetResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingData">TreatMissingData</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CloudwatchAlarmTemplateId`<sup>Required</sup> <a name="CloudwatchAlarmTemplateId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cloudwatchAlarmTemplateId"></a>

```go
func CloudwatchAlarmTemplateId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperatorInput"></a>

```go
func ComparisonOperatorInput() *string
```

- *Type:* *string

---

##### `DatapointsToAlarmInput`<sup>Optional</sup> <a name="DatapointsToAlarmInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarmInput"></a>

```go
func DatapointsToAlarmInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EvaluationPeriodsInput`<sup>Optional</sup> <a name="EvaluationPeriodsInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriodsInput"></a>

```go
func EvaluationPeriodsInput() *f64
```

- *Type:* *f64

---

##### `GroupIdentifierInput`<sup>Optional</sup> <a name="GroupIdentifierInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifierInput"></a>

```go
func GroupIdentifierInput() *string
```

- *Type:* *string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.periodInput"></a>

```go
func PeriodInput() *f64
```

- *Type:* *f64

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statisticInput"></a>

```go
func StatisticInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetResourceTypeInput`<sup>Optional</sup> <a name="TargetResourceTypeInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceTypeInput"></a>

```go
func TargetResourceTypeInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `TreatMissingDataInput`<sup>Optional</sup> <a name="TreatMissingDataInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingDataInput"></a>

```go
func TreatMissingDataInput() *string
```

- *Type:* *string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperator"></a>

```go
func ComparisonOperator() *string
```

- *Type:* *string

---

##### `DatapointsToAlarm`<sup>Required</sup> <a name="DatapointsToAlarm" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarm"></a>

```go
func DatapointsToAlarm() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriods"></a>

```go
func EvaluationPeriods() *f64
```

- *Type:* *f64

---

##### `GroupIdentifier`<sup>Required</sup> <a name="GroupIdentifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifier"></a>

```go
func GroupIdentifier() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statistic"></a>

```go
func Statistic() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceType"></a>

```go
func TargetResourceType() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `TreatMissingData`<sup>Required</sup> <a name="TreatMissingData" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingData"></a>

```go
func TreatMissingData() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveCloudwatchAlarmTemplateConfig <a name="MedialiveCloudwatchAlarmTemplateConfig" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivecloudwatchalarmtemplate"

&medialivecloudwatchalarmtemplate.MedialiveCloudwatchAlarmTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ComparisonOperator: *string,
	MetricName: *string,
	Name: *string,
	Statistic: *string,
	TargetResourceType: *string,
	TreatMissingData: *string,
	DatapointsToAlarm: *f64,
	Description: *string,
	EvaluationPeriods: *f64,
	GroupIdentifier: *string,
	Period: *f64,
	Tags: *map[string]*string,
	Threshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | The comparison operator used to compare the specified statistic and the threshold. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.metricName">MetricName</a></code> | <code>*string</code> | The name of the metric associated with the alarm. Must be compatible with targetResourceType. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.name">Name</a></code> | <code>*string</code> | A resource's name. Names must be unique within the scope of a resource type in a specific region. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.statistic">Statistic</a></code> | <code>*string</code> | The statistic to apply to the alarm's metric data. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.targetResourceType">TargetResourceType</a></code> | <code>*string</code> | The resource type this template should dynamically generate cloudwatch metric alarms for. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.treatMissingData">TreatMissingData</a></code> | <code>*string</code> | Specifies how missing data points are treated when evaluating the alarm's condition. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.datapointsToAlarm">DatapointsToAlarm</a></code> | <code>*f64</code> | The number of datapoints within the evaluation period that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.description">Description</a></code> | <code>*string</code> | A resource's optional description. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>*f64</code> | The number of periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.groupIdentifier">GroupIdentifier</a></code> | <code>*string</code> | A cloudwatch alarm template group's identifier. Can be either be its id or current name. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.period">Period</a></code> | <code>*f64</code> | The period, in seconds, over which the specified statistic is applied. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Represents the tags associated with a resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.threshold">Threshold</a></code> | <code>*f64</code> | The threshold value to compare with the specified statistic. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.comparisonOperator"></a>

```go
ComparisonOperator *string
```

- *Type:* *string

The comparison operator used to compare the specified statistic and the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template#comparison_operator MedialiveCloudwatchAlarmTemplate#comparison_operator}

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

The name of the metric associated with the alarm. Must be compatible with targetResourceType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template#metric_name MedialiveCloudwatchAlarmTemplate#metric_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A resource's name. Names must be unique within the scope of a resource type in a specific region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template#name MedialiveCloudwatchAlarmTemplate#name}

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.statistic"></a>

```go
Statistic *string
```

- *Type:* *string

The statistic to apply to the alarm's metric data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template#statistic MedialiveCloudwatchAlarmTemplate#statistic}

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.targetResourceType"></a>

```go
TargetResourceType *string
```

- *Type:* *string

The resource type this template should dynamically generate cloudwatch metric alarms for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template#target_resource_type MedialiveCloudwatchAlarmTemplate#target_resource_type}

---

##### `TreatMissingData`<sup>Required</sup> <a name="TreatMissingData" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.treatMissingData"></a>

```go
TreatMissingData *string
```

- *Type:* *string

Specifies how missing data points are treated when evaluating the alarm's condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template#treat_missing_data MedialiveCloudwatchAlarmTemplate#treat_missing_data}

---

##### `DatapointsToAlarm`<sup>Optional</sup> <a name="DatapointsToAlarm" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.datapointsToAlarm"></a>

```go
DatapointsToAlarm *f64
```

- *Type:* *f64

The number of datapoints within the evaluation period that must be breaching to trigger the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template#datapoints_to_alarm MedialiveCloudwatchAlarmTemplate#datapoints_to_alarm}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A resource's optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template#description MedialiveCloudwatchAlarmTemplate#description}

---

##### `EvaluationPeriods`<sup>Optional</sup> <a name="EvaluationPeriods" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.evaluationPeriods"></a>

```go
EvaluationPeriods *f64
```

- *Type:* *f64

The number of periods over which data is compared to the specified threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template#evaluation_periods MedialiveCloudwatchAlarmTemplate#evaluation_periods}

---

##### `GroupIdentifier`<sup>Optional</sup> <a name="GroupIdentifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.groupIdentifier"></a>

```go
GroupIdentifier *string
```

- *Type:* *string

A cloudwatch alarm template group's identifier. Can be either be its id or current name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template#group_identifier MedialiveCloudwatchAlarmTemplate#group_identifier}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.period"></a>

```go
Period *f64
```

- *Type:* *f64

The period, in seconds, over which the specified statistic is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template#period MedialiveCloudwatchAlarmTemplate#period}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Represents the tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template#tags MedialiveCloudwatchAlarmTemplate#tags}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

The threshold value to compare with the specified statistic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template#threshold MedialiveCloudwatchAlarmTemplate#threshold}

---



