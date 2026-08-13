# `evidentlyExperiment` Submodule <a name="`evidentlyExperiment` Submodule" id="@cdktn/provider-awscc.evidentlyExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyExperiment <a name="EvidentlyExperiment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment awscc_evidently_experiment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

evidentlyexperiment.NewEvidentlyExperiment(scope Construct, id *string, config EvidentlyExperimentConfig) EvidentlyExperiment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig">EvidentlyExperimentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig">EvidentlyExperimentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putMetricGoals">PutMetricGoals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putOnlineAbConfig">PutOnlineAbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putRunningStatus">PutRunningStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTreatments">PutTreatments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRandomizationSalt">ResetRandomizationSalt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRemoveSegment">ResetRemoveSegment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRunningStatus">ResetRunningStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetSamplingRate">ResetSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetSegment">ResetSegment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetricGoals` <a name="PutMetricGoals" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putMetricGoals"></a>

```go
func PutMetricGoals(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putMetricGoals.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOnlineAbConfig` <a name="PutOnlineAbConfig" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putOnlineAbConfig"></a>

```go
func PutOnlineAbConfig(value EvidentlyExperimentOnlineAbConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putOnlineAbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a>

---

##### `PutRunningStatus` <a name="PutRunningStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putRunningStatus"></a>

```go
func PutRunningStatus(value EvidentlyExperimentRunningStatus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putRunningStatus.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTreatments` <a name="PutTreatments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTreatments"></a>

```go
func PutTreatments(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTreatments.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetRandomizationSalt` <a name="ResetRandomizationSalt" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRandomizationSalt"></a>

```go
func ResetRandomizationSalt()
```

##### `ResetRemoveSegment` <a name="ResetRemoveSegment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRemoveSegment"></a>

```go
func ResetRemoveSegment()
```

##### `ResetRunningStatus` <a name="ResetRunningStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRunningStatus"></a>

```go
func ResetRunningStatus()
```

##### `ResetSamplingRate` <a name="ResetSamplingRate" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetSamplingRate"></a>

```go
func ResetSamplingRate()
```

##### `ResetSegment` <a name="ResetSegment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetSegment"></a>

```go
func ResetSegment()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EvidentlyExperiment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

evidentlyexperiment.EvidentlyExperiment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

evidentlyexperiment.EvidentlyExperiment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

evidentlyexperiment.EvidentlyExperiment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

evidentlyexperiment.EvidentlyExperiment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EvidentlyExperiment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EvidentlyExperiment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EvidentlyExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EvidentlyExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.metricGoals">MetricGoals</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList">EvidentlyExperimentMetricGoalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.onlineAbConfig">OnlineAbConfig</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference">EvidentlyExperimentOnlineAbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.runningStatus">RunningStatus</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference">EvidentlyExperimentRunningStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList">EvidentlyExperimentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.treatments">Treatments</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList">EvidentlyExperimentTreatmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.metricGoalsInput">MetricGoalsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.onlineAbConfigInput">OnlineAbConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.randomizationSaltInput">RandomizationSaltInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.removeSegmentInput">RemoveSegmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.runningStatusInput">RunningStatusInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.samplingRateInput">SamplingRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.segmentInput">SegmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.treatmentsInput">TreatmentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.randomizationSalt">RandomizationSalt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.removeSegment">RemoveSegment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.samplingRate">SamplingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.segment">Segment</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetricGoals`<sup>Required</sup> <a name="MetricGoals" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.metricGoals"></a>

```go
func MetricGoals() EvidentlyExperimentMetricGoalsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList">EvidentlyExperimentMetricGoalsList</a>

---

##### `OnlineAbConfig`<sup>Required</sup> <a name="OnlineAbConfig" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.onlineAbConfig"></a>

```go
func OnlineAbConfig() EvidentlyExperimentOnlineAbConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference">EvidentlyExperimentOnlineAbConfigOutputReference</a>

---

##### `RunningStatus`<sup>Required</sup> <a name="RunningStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.runningStatus"></a>

```go
func RunningStatus() EvidentlyExperimentRunningStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference">EvidentlyExperimentRunningStatusOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tags"></a>

```go
func Tags() EvidentlyExperimentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList">EvidentlyExperimentTagsList</a>

---

##### `Treatments`<sup>Required</sup> <a name="Treatments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.treatments"></a>

```go
func Treatments() EvidentlyExperimentTreatmentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList">EvidentlyExperimentTreatmentsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `MetricGoalsInput`<sup>Optional</sup> <a name="MetricGoalsInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.metricGoalsInput"></a>

```go
func MetricGoalsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OnlineAbConfigInput`<sup>Optional</sup> <a name="OnlineAbConfigInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.onlineAbConfigInput"></a>

```go
func OnlineAbConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RandomizationSaltInput`<sup>Optional</sup> <a name="RandomizationSaltInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.randomizationSaltInput"></a>

```go
func RandomizationSaltInput() *string
```

- *Type:* *string

---

##### `RemoveSegmentInput`<sup>Optional</sup> <a name="RemoveSegmentInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.removeSegmentInput"></a>

```go
func RemoveSegmentInput() interface{}
```

- *Type:* interface{}

---

##### `RunningStatusInput`<sup>Optional</sup> <a name="RunningStatusInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.runningStatusInput"></a>

```go
func RunningStatusInput() interface{}
```

- *Type:* interface{}

---

##### `SamplingRateInput`<sup>Optional</sup> <a name="SamplingRateInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.samplingRateInput"></a>

```go
func SamplingRateInput() *f64
```

- *Type:* *f64

---

##### `SegmentInput`<sup>Optional</sup> <a name="SegmentInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.segmentInput"></a>

```go
func SegmentInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TreatmentsInput`<sup>Optional</sup> <a name="TreatmentsInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.treatmentsInput"></a>

```go
func TreatmentsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RandomizationSalt`<sup>Required</sup> <a name="RandomizationSalt" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.randomizationSalt"></a>

```go
func RandomizationSalt() *string
```

- *Type:* *string

---

##### `RemoveSegment`<sup>Required</sup> <a name="RemoveSegment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.removeSegment"></a>

```go
func RemoveSegment() interface{}
```

- *Type:* interface{}

---

##### `SamplingRate`<sup>Required</sup> <a name="SamplingRate" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.samplingRate"></a>

```go
func SamplingRate() *f64
```

- *Type:* *f64

---

##### `Segment`<sup>Required</sup> <a name="Segment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.segment"></a>

```go
func Segment() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyExperimentConfig <a name="EvidentlyExperimentConfig" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

&evidentlyexperiment.EvidentlyExperimentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	MetricGoals: interface{},
	Name: *string,
	OnlineAbConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig,
	Project: *string,
	Treatments: interface{},
	Description: *string,
	RandomizationSalt: *string,
	RemoveSegment: interface{},
	RunningStatus: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus,
	SamplingRate: *f64,
	Segment: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.metricGoals">MetricGoals</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#metric_goals EvidentlyExperiment#metric_goals}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#name EvidentlyExperiment#name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.onlineAbConfig">OnlineAbConfig</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#online_ab_config EvidentlyExperiment#online_ab_config}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#project EvidentlyExperiment#project}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.treatments">Treatments</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatments EvidentlyExperiment#treatments}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.randomizationSalt">RandomizationSalt</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#randomization_salt EvidentlyExperiment#randomization_salt}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.removeSegment">RemoveSegment</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#remove_segment EvidentlyExperiment#remove_segment}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.runningStatus">RunningStatus</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a></code> | Start Experiment. Default is False. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.samplingRate">SamplingRate</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#sampling_rate EvidentlyExperiment#sampling_rate}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.segment">Segment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#segment EvidentlyExperiment#segment}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MetricGoals`<sup>Required</sup> <a name="MetricGoals" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.metricGoals"></a>

```go
MetricGoals interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#metric_goals EvidentlyExperiment#metric_goals}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#name EvidentlyExperiment#name}.

---

##### `OnlineAbConfig`<sup>Required</sup> <a name="OnlineAbConfig" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.onlineAbConfig"></a>

```go
OnlineAbConfig EvidentlyExperimentOnlineAbConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#online_ab_config EvidentlyExperiment#online_ab_config}.

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#project EvidentlyExperiment#project}.

---

##### `Treatments`<sup>Required</sup> <a name="Treatments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.treatments"></a>

```go
Treatments interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatments EvidentlyExperiment#treatments}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}.

---

##### `RandomizationSalt`<sup>Optional</sup> <a name="RandomizationSalt" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.randomizationSalt"></a>

```go
RandomizationSalt *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#randomization_salt EvidentlyExperiment#randomization_salt}.

---

##### `RemoveSegment`<sup>Optional</sup> <a name="RemoveSegment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.removeSegment"></a>

```go
RemoveSegment interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#remove_segment EvidentlyExperiment#remove_segment}.

---

##### `RunningStatus`<sup>Optional</sup> <a name="RunningStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.runningStatus"></a>

```go
RunningStatus EvidentlyExperimentRunningStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a>

Start Experiment. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#running_status EvidentlyExperiment#running_status}

---

##### `SamplingRate`<sup>Optional</sup> <a name="SamplingRate" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.samplingRate"></a>

```go
SamplingRate *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#sampling_rate EvidentlyExperiment#sampling_rate}.

---

##### `Segment`<sup>Optional</sup> <a name="Segment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.segment"></a>

```go
Segment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#segment EvidentlyExperiment#segment}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#tags EvidentlyExperiment#tags}

---

### EvidentlyExperimentMetricGoals <a name="EvidentlyExperimentMetricGoals" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

&evidentlyexperiment.EvidentlyExperimentMetricGoals {
	DesiredChange: *string,
	EntityIdKey: *string,
	MetricName: *string,
	ValueKey: *string,
	EventPattern: *string,
	UnitLabel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.desiredChange">DesiredChange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#desired_change EvidentlyExperiment#desired_change}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.entityIdKey">EntityIdKey</a></code> | <code>*string</code> | The JSON path to reference the entity id in the event. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.metricName">MetricName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#metric_name EvidentlyExperiment#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.valueKey">ValueKey</a></code> | <code>*string</code> | The JSON path to reference the numerical metric value in the event. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.eventPattern">EventPattern</a></code> | <code>*string</code> | Event patterns have the same structure as the events they match. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.unitLabel">UnitLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#unit_label EvidentlyExperiment#unit_label}. |

---

##### `DesiredChange`<sup>Required</sup> <a name="DesiredChange" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.desiredChange"></a>

```go
DesiredChange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#desired_change EvidentlyExperiment#desired_change}.

---

##### `EntityIdKey`<sup>Required</sup> <a name="EntityIdKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.entityIdKey"></a>

```go
EntityIdKey *string
```

- *Type:* *string

The JSON path to reference the entity id in the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#entity_id_key EvidentlyExperiment#entity_id_key}

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#metric_name EvidentlyExperiment#metric_name}.

---

##### `ValueKey`<sup>Required</sup> <a name="ValueKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.valueKey"></a>

```go
ValueKey *string
```

- *Type:* *string

The JSON path to reference the numerical metric value in the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#value_key EvidentlyExperiment#value_key}

---

##### `EventPattern`<sup>Optional</sup> <a name="EventPattern" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.eventPattern"></a>

```go
EventPattern *string
```

- *Type:* *string

Event patterns have the same structure as the events they match.

Rules use event patterns to select events. An event pattern either matches an event or it doesn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#event_pattern EvidentlyExperiment#event_pattern}

---

##### `UnitLabel`<sup>Optional</sup> <a name="UnitLabel" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.unitLabel"></a>

```go
UnitLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#unit_label EvidentlyExperiment#unit_label}.

---

### EvidentlyExperimentOnlineAbConfig <a name="EvidentlyExperimentOnlineAbConfig" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

&evidentlyexperiment.EvidentlyExperimentOnlineAbConfig {
	ControlTreatmentName: *string,
	TreatmentWeights: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.property.controlTreatmentName">ControlTreatmentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#control_treatment_name EvidentlyExperiment#control_treatment_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.property.treatmentWeights">TreatmentWeights</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment_weights EvidentlyExperiment#treatment_weights}. |

---

##### `ControlTreatmentName`<sup>Optional</sup> <a name="ControlTreatmentName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.property.controlTreatmentName"></a>

```go
ControlTreatmentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#control_treatment_name EvidentlyExperiment#control_treatment_name}.

---

##### `TreatmentWeights`<sup>Optional</sup> <a name="TreatmentWeights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.property.treatmentWeights"></a>

```go
TreatmentWeights interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment_weights EvidentlyExperiment#treatment_weights}.

---

### EvidentlyExperimentOnlineAbConfigTreatmentWeights <a name="EvidentlyExperimentOnlineAbConfigTreatmentWeights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

&evidentlyexperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights {
	SplitWeight: *f64,
	Treatment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.property.splitWeight">SplitWeight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#split_weight EvidentlyExperiment#split_weight}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.property.treatment">Treatment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment EvidentlyExperiment#treatment}. |

---

##### `SplitWeight`<sup>Optional</sup> <a name="SplitWeight" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.property.splitWeight"></a>

```go
SplitWeight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#split_weight EvidentlyExperiment#split_weight}.

---

##### `Treatment`<sup>Optional</sup> <a name="Treatment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.property.treatment"></a>

```go
Treatment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment EvidentlyExperiment#treatment}.

---

### EvidentlyExperimentRunningStatus <a name="EvidentlyExperimentRunningStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

&evidentlyexperiment.EvidentlyExperimentRunningStatus {
	AnalysisCompleteTime: *string,
	DesiredState: *string,
	Reason: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.analysisCompleteTime">AnalysisCompleteTime</a></code> | <code>*string</code> | Provide the analysis Completion time for an experiment. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.desiredState">DesiredState</a></code> | <code>*string</code> | Provide CANCELLED or COMPLETED desired state when stopping an experiment. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.reason">Reason</a></code> | <code>*string</code> | Reason is a required input for stopping the experiment. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.status">Status</a></code> | <code>*string</code> | Provide START or STOP action to apply on an experiment. |

---

##### `AnalysisCompleteTime`<sup>Optional</sup> <a name="AnalysisCompleteTime" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.analysisCompleteTime"></a>

```go
AnalysisCompleteTime *string
```

- *Type:* *string

Provide the analysis Completion time for an experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#analysis_complete_time EvidentlyExperiment#analysis_complete_time}

---

##### `DesiredState`<sup>Optional</sup> <a name="DesiredState" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.desiredState"></a>

```go
DesiredState *string
```

- *Type:* *string

Provide CANCELLED or COMPLETED desired state when stopping an experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#desired_state EvidentlyExperiment#desired_state}

---

##### `Reason`<sup>Optional</sup> <a name="Reason" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.reason"></a>

```go
Reason *string
```

- *Type:* *string

Reason is a required input for stopping the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#reason EvidentlyExperiment#reason}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.status"></a>

```go
Status *string
```

- *Type:* *string

Provide START or STOP action to apply on an experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#status EvidentlyExperiment#status}

---

### EvidentlyExperimentTags <a name="EvidentlyExperimentTags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

&evidentlyexperiment.EvidentlyExperimentTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#key EvidentlyExperiment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#value EvidentlyExperiment#value}

---

### EvidentlyExperimentTreatments <a name="EvidentlyExperimentTreatments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

&evidentlyexperiment.EvidentlyExperimentTreatments {
	Feature: *string,
	TreatmentName: *string,
	Variation: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.feature">Feature</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#feature EvidentlyExperiment#feature}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.treatmentName">TreatmentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment_name EvidentlyExperiment#treatment_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.variation">Variation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#variation EvidentlyExperiment#variation}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}. |

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.feature"></a>

```go
Feature *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#feature EvidentlyExperiment#feature}.

---

##### `TreatmentName`<sup>Required</sup> <a name="TreatmentName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.treatmentName"></a>

```go
TreatmentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment_name EvidentlyExperiment#treatment_name}.

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.variation"></a>

```go
Variation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#variation EvidentlyExperiment#variation}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyExperimentMetricGoalsList <a name="EvidentlyExperimentMetricGoalsList" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

evidentlyexperiment.NewEvidentlyExperimentMetricGoalsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyExperimentMetricGoalsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.get"></a>

```go
func Get(index *f64) EvidentlyExperimentMetricGoalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyExperimentMetricGoalsOutputReference <a name="EvidentlyExperimentMetricGoalsOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

evidentlyexperiment.NewEvidentlyExperimentMetricGoalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyExperimentMetricGoalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resetEventPattern">ResetEventPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resetUnitLabel">ResetUnitLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventPattern` <a name="ResetEventPattern" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resetEventPattern"></a>

```go
func ResetEventPattern()
```

##### `ResetUnitLabel` <a name="ResetUnitLabel" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resetUnitLabel"></a>

```go
func ResetUnitLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.desiredChangeInput">DesiredChangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.entityIdKeyInput">EntityIdKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.eventPatternInput">EventPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.unitLabelInput">UnitLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.valueKeyInput">ValueKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.desiredChange">DesiredChange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.entityIdKey">EntityIdKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.eventPattern">EventPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.unitLabel">UnitLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.valueKey">ValueKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DesiredChangeInput`<sup>Optional</sup> <a name="DesiredChangeInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.desiredChangeInput"></a>

```go
func DesiredChangeInput() *string
```

- *Type:* *string

---

##### `EntityIdKeyInput`<sup>Optional</sup> <a name="EntityIdKeyInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.entityIdKeyInput"></a>

```go
func EntityIdKeyInput() *string
```

- *Type:* *string

---

##### `EventPatternInput`<sup>Optional</sup> <a name="EventPatternInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.eventPatternInput"></a>

```go
func EventPatternInput() *string
```

- *Type:* *string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `UnitLabelInput`<sup>Optional</sup> <a name="UnitLabelInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.unitLabelInput"></a>

```go
func UnitLabelInput() *string
```

- *Type:* *string

---

##### `ValueKeyInput`<sup>Optional</sup> <a name="ValueKeyInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.valueKeyInput"></a>

```go
func ValueKeyInput() *string
```

- *Type:* *string

---

##### `DesiredChange`<sup>Required</sup> <a name="DesiredChange" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.desiredChange"></a>

```go
func DesiredChange() *string
```

- *Type:* *string

---

##### `EntityIdKey`<sup>Required</sup> <a name="EntityIdKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.entityIdKey"></a>

```go
func EntityIdKey() *string
```

- *Type:* *string

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.eventPattern"></a>

```go
func EventPattern() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `UnitLabel`<sup>Required</sup> <a name="UnitLabel" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.unitLabel"></a>

```go
func UnitLabel() *string
```

- *Type:* *string

---

##### `ValueKey`<sup>Required</sup> <a name="ValueKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.valueKey"></a>

```go
func ValueKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyExperimentOnlineAbConfigOutputReference <a name="EvidentlyExperimentOnlineAbConfigOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

evidentlyexperiment.NewEvidentlyExperimentOnlineAbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EvidentlyExperimentOnlineAbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.putTreatmentWeights">PutTreatmentWeights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resetControlTreatmentName">ResetControlTreatmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resetTreatmentWeights">ResetTreatmentWeights</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTreatmentWeights` <a name="PutTreatmentWeights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.putTreatmentWeights"></a>

```go
func PutTreatmentWeights(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.putTreatmentWeights.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetControlTreatmentName` <a name="ResetControlTreatmentName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resetControlTreatmentName"></a>

```go
func ResetControlTreatmentName()
```

##### `ResetTreatmentWeights` <a name="ResetTreatmentWeights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resetTreatmentWeights"></a>

```go
func ResetTreatmentWeights()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeights">TreatmentWeights</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList">EvidentlyExperimentOnlineAbConfigTreatmentWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentNameInput">ControlTreatmentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeightsInput">TreatmentWeightsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentName">ControlTreatmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TreatmentWeights`<sup>Required</sup> <a name="TreatmentWeights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeights"></a>

```go
func TreatmentWeights() EvidentlyExperimentOnlineAbConfigTreatmentWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList">EvidentlyExperimentOnlineAbConfigTreatmentWeightsList</a>

---

##### `ControlTreatmentNameInput`<sup>Optional</sup> <a name="ControlTreatmentNameInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentNameInput"></a>

```go
func ControlTreatmentNameInput() *string
```

- *Type:* *string

---

##### `TreatmentWeightsInput`<sup>Optional</sup> <a name="TreatmentWeightsInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeightsInput"></a>

```go
func TreatmentWeightsInput() interface{}
```

- *Type:* interface{}

---

##### `ControlTreatmentName`<sup>Required</sup> <a name="ControlTreatmentName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentName"></a>

```go
func ControlTreatmentName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyExperimentOnlineAbConfigTreatmentWeightsList <a name="EvidentlyExperimentOnlineAbConfigTreatmentWeightsList" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

evidentlyexperiment.NewEvidentlyExperimentOnlineAbConfigTreatmentWeightsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyExperimentOnlineAbConfigTreatmentWeightsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.get"></a>

```go
func Get(index *f64) EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference <a name="EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

evidentlyexperiment.NewEvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resetSplitWeight">ResetSplitWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resetTreatment">ResetTreatment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSplitWeight` <a name="ResetSplitWeight" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resetSplitWeight"></a>

```go
func ResetSplitWeight()
```

##### `ResetTreatment` <a name="ResetTreatment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resetTreatment"></a>

```go
func ResetTreatment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeightInput">SplitWeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatmentInput">TreatmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeight">SplitWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatment">Treatment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SplitWeightInput`<sup>Optional</sup> <a name="SplitWeightInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeightInput"></a>

```go
func SplitWeightInput() *f64
```

- *Type:* *f64

---

##### `TreatmentInput`<sup>Optional</sup> <a name="TreatmentInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatmentInput"></a>

```go
func TreatmentInput() *string
```

- *Type:* *string

---

##### `SplitWeight`<sup>Required</sup> <a name="SplitWeight" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeight"></a>

```go
func SplitWeight() *f64
```

- *Type:* *f64

---

##### `Treatment`<sup>Required</sup> <a name="Treatment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatment"></a>

```go
func Treatment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyExperimentRunningStatusOutputReference <a name="EvidentlyExperimentRunningStatusOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

evidentlyexperiment.NewEvidentlyExperimentRunningStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EvidentlyExperimentRunningStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetAnalysisCompleteTime">ResetAnalysisCompleteTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetDesiredState">ResetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetReason">ResetReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnalysisCompleteTime` <a name="ResetAnalysisCompleteTime" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetAnalysisCompleteTime"></a>

```go
func ResetAnalysisCompleteTime()
```

##### `ResetDesiredState` <a name="ResetDesiredState" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetDesiredState"></a>

```go
func ResetDesiredState()
```

##### `ResetReason` <a name="ResetReason" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetReason"></a>

```go
func ResetReason()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTimeInput">AnalysisCompleteTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.desiredStateInput">DesiredStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.reasonInput">ReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTime">AnalysisCompleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnalysisCompleteTimeInput`<sup>Optional</sup> <a name="AnalysisCompleteTimeInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTimeInput"></a>

```go
func AnalysisCompleteTimeInput() *string
```

- *Type:* *string

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.desiredStateInput"></a>

```go
func DesiredStateInput() *string
```

- *Type:* *string

---

##### `ReasonInput`<sup>Optional</sup> <a name="ReasonInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.reasonInput"></a>

```go
func ReasonInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `AnalysisCompleteTime`<sup>Required</sup> <a name="AnalysisCompleteTime" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTime"></a>

```go
func AnalysisCompleteTime() *string
```

- *Type:* *string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyExperimentTagsList <a name="EvidentlyExperimentTagsList" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

evidentlyexperiment.NewEvidentlyExperimentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyExperimentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.get"></a>

```go
func Get(index *f64) EvidentlyExperimentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyExperimentTagsOutputReference <a name="EvidentlyExperimentTagsOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

evidentlyexperiment.NewEvidentlyExperimentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyExperimentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyExperimentTreatmentsList <a name="EvidentlyExperimentTreatmentsList" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

evidentlyexperiment.NewEvidentlyExperimentTreatmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyExperimentTreatmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.get"></a>

```go
func Get(index *f64) EvidentlyExperimentTreatmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyExperimentTreatmentsOutputReference <a name="EvidentlyExperimentTreatmentsOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyexperiment"

evidentlyexperiment.NewEvidentlyExperimentTreatmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyExperimentTreatmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.featureInput">FeatureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.treatmentNameInput">TreatmentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.variationInput">VariationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.feature">Feature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.treatmentName">TreatmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.variation">Variation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FeatureInput`<sup>Optional</sup> <a name="FeatureInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.featureInput"></a>

```go
func FeatureInput() *string
```

- *Type:* *string

---

##### `TreatmentNameInput`<sup>Optional</sup> <a name="TreatmentNameInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.treatmentNameInput"></a>

```go
func TreatmentNameInput() *string
```

- *Type:* *string

---

##### `VariationInput`<sup>Optional</sup> <a name="VariationInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.variationInput"></a>

```go
func VariationInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.feature"></a>

```go
func Feature() *string
```

- *Type:* *string

---

##### `TreatmentName`<sup>Required</sup> <a name="TreatmentName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.treatmentName"></a>

```go
func TreatmentName() *string
```

- *Type:* *string

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.variation"></a>

```go
func Variation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



