# `sagemakerExperimentTrialComponent` Submodule <a name="`sagemakerExperimentTrialComponent` Submodule" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerExperimentTrialComponent <a name="SagemakerExperimentTrialComponent" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component awscc_sagemaker_experiment_trial_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerexperimenttrialcomponent"

sagemakerexperimenttrialcomponent.NewSagemakerExperimentTrialComponent(scope Construct, id *string, config SagemakerExperimentTrialComponentConfig) SagemakerExperimentTrialComponent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig">SagemakerExperimentTrialComponentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig">SagemakerExperimentTrialComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putMetadataProperties">PutMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putStatus">PutStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetMetadataProperties">ResetMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadataProperties` <a name="PutMetadataProperties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putMetadataProperties"></a>

```go
func PutMetadataProperties(value SagemakerExperimentTrialComponentMetadataProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putMetadataProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a>

---

##### `PutStatus` <a name="PutStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putStatus"></a>

```go
func PutStatus(value SagemakerExperimentTrialComponentStatus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putStatus.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetMetadataProperties` <a name="ResetMetadataProperties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetMetadataProperties"></a>

```go
func ResetMetadataProperties()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerExperimentTrialComponent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerexperimenttrialcomponent"

sagemakerexperimenttrialcomponent.SagemakerExperimentTrialComponent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerexperimenttrialcomponent"

sagemakerexperimenttrialcomponent.SagemakerExperimentTrialComponent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerexperimenttrialcomponent"

sagemakerexperimenttrialcomponent.SagemakerExperimentTrialComponent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerexperimenttrialcomponent"

sagemakerexperimenttrialcomponent.SagemakerExperimentTrialComponent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerExperimentTrialComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerExperimentTrialComponent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerExperimentTrialComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerExperimentTrialComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lineageGroupArn">LineageGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.metadataProperties">MetadataProperties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference">SagemakerExperimentTrialComponentMetadataPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.status">Status</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference">SagemakerExperimentTrialComponentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList">SagemakerExperimentTrialComponentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.metadataPropertiesInput">MetadataPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.statusInput">StatusInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.trialComponentNameInput">TrialComponentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.trialComponentName">TrialComponentName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `LineageGroupArn`<sup>Required</sup> <a name="LineageGroupArn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lineageGroupArn"></a>

```go
func LineageGroupArn() *string
```

- *Type:* *string

---

##### `MetadataProperties`<sup>Required</sup> <a name="MetadataProperties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.metadataProperties"></a>

```go
func MetadataProperties() SagemakerExperimentTrialComponentMetadataPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference">SagemakerExperimentTrialComponentMetadataPropertiesOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.status"></a>

```go
func Status() SagemakerExperimentTrialComponentStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference">SagemakerExperimentTrialComponentStatusOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tags"></a>

```go
func Tags() SagemakerExperimentTrialComponentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList">SagemakerExperimentTrialComponentTagsList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `MetadataPropertiesInput`<sup>Optional</sup> <a name="MetadataPropertiesInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.metadataPropertiesInput"></a>

```go
func MetadataPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.statusInput"></a>

```go
func StatusInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TrialComponentNameInput`<sup>Optional</sup> <a name="TrialComponentNameInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.trialComponentNameInput"></a>

```go
func TrialComponentNameInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `TrialComponentName`<sup>Required</sup> <a name="TrialComponentName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.trialComponentName"></a>

```go
func TrialComponentName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerExperimentTrialComponentConfig <a name="SagemakerExperimentTrialComponentConfig" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerexperimenttrialcomponent"

&sagemakerexperimenttrialcomponent.SagemakerExperimentTrialComponentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	TrialComponentName: *string,
	DisplayName: *string,
	EndTime: *string,
	MetadataProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties,
	StartTime: *string,
	Status: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.trialComponentName">TrialComponentName</a></code> | <code>*string</code> | The name of the trial component. The name must be unique in your AWS account and is not case-sensitive. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The name of the component as displayed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.endTime">EndTime</a></code> | <code>*string</code> | When the component ended. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.metadataProperties">MetadataProperties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a></code> | Metadata properties of the tracking entity, trial, or trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.startTime">StartTime</a></code> | <code>*string</code> | When the component started. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.status">Status</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a></code> | The status of the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of tags to associate with the component. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TrialComponentName`<sup>Required</sup> <a name="TrialComponentName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.trialComponentName"></a>

```go
TrialComponentName *string
```

- *Type:* *string

The name of the trial component. The name must be unique in your AWS account and is not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#trial_component_name SagemakerExperimentTrialComponent#trial_component_name}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The name of the component as displayed.

The name doesn't need to be unique. If DisplayName isn't specified, TrialComponentName is displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#display_name SagemakerExperimentTrialComponent#display_name}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

When the component ended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#end_time SagemakerExperimentTrialComponent#end_time}

---

##### `MetadataProperties`<sup>Optional</sup> <a name="MetadataProperties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.metadataProperties"></a>

```go
MetadataProperties SagemakerExperimentTrialComponentMetadataProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a>

Metadata properties of the tracking entity, trial, or trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#metadata_properties SagemakerExperimentTrialComponent#metadata_properties}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

When the component started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#start_time SagemakerExperimentTrialComponent#start_time}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.status"></a>

```go
Status SagemakerExperimentTrialComponentStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a>

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#status SagemakerExperimentTrialComponent#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of tags to associate with the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#tags SagemakerExperimentTrialComponent#tags}

---

### SagemakerExperimentTrialComponentMetadataProperties <a name="SagemakerExperimentTrialComponentMetadataProperties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerexperimenttrialcomponent"

&sagemakerexperimenttrialcomponent.SagemakerExperimentTrialComponentMetadataProperties {
	CommitId: *string,
	GeneratedBy: *string,
	ProjectId: *string,
	Repository: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.commitId">CommitId</a></code> | <code>*string</code> | The commit ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.generatedBy">GeneratedBy</a></code> | <code>*string</code> | The entity this entity was generated by. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.projectId">ProjectId</a></code> | <code>*string</code> | The project ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.repository">Repository</a></code> | <code>*string</code> | The repository. |

---

##### `CommitId`<sup>Optional</sup> <a name="CommitId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.commitId"></a>

```go
CommitId *string
```

- *Type:* *string

The commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#commit_id SagemakerExperimentTrialComponent#commit_id}

---

##### `GeneratedBy`<sup>Optional</sup> <a name="GeneratedBy" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.generatedBy"></a>

```go
GeneratedBy *string
```

- *Type:* *string

The entity this entity was generated by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#generated_by SagemakerExperimentTrialComponent#generated_by}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#project_id SagemakerExperimentTrialComponent#project_id}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#repository SagemakerExperimentTrialComponent#repository}

---

### SagemakerExperimentTrialComponentStatus <a name="SagemakerExperimentTrialComponentStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerexperimenttrialcomponent"

&sagemakerexperimenttrialcomponent.SagemakerExperimentTrialComponentStatus {
	Message: *string,
	PrimaryStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.property.message">Message</a></code> | <code>*string</code> | If the component failed, a message describing why. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.property.primaryStatus">PrimaryStatus</a></code> | <code>*string</code> | The status of the trial component. |

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.property.message"></a>

```go
Message *string
```

- *Type:* *string

If the component failed, a message describing why.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#message SagemakerExperimentTrialComponent#message}

---

##### `PrimaryStatus`<sup>Optional</sup> <a name="PrimaryStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.property.primaryStatus"></a>

```go
PrimaryStatus *string
```

- *Type:* *string

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#primary_status SagemakerExperimentTrialComponent#primary_status}

---

### SagemakerExperimentTrialComponentTags <a name="SagemakerExperimentTrialComponentTags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerexperimenttrialcomponent"

&sagemakerexperimenttrialcomponent.SagemakerExperimentTrialComponentTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#key SagemakerExperimentTrialComponent#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_experiment_trial_component#value SagemakerExperimentTrialComponent#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerExperimentTrialComponentMetadataPropertiesOutputReference <a name="SagemakerExperimentTrialComponentMetadataPropertiesOutputReference" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerexperimenttrialcomponent"

sagemakerexperimenttrialcomponent.NewSagemakerExperimentTrialComponentMetadataPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerExperimentTrialComponentMetadataPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetCommitId">ResetCommitId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetGeneratedBy">ResetGeneratedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommitId` <a name="ResetCommitId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetCommitId"></a>

```go
func ResetCommitId()
```

##### `ResetGeneratedBy` <a name="ResetGeneratedBy" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetGeneratedBy"></a>

```go
func ResetGeneratedBy()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetRepository"></a>

```go
func ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitIdInput">CommitIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedByInput">GeneratedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitId">CommitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedBy">GeneratedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommitIdInput`<sup>Optional</sup> <a name="CommitIdInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitIdInput"></a>

```go
func CommitIdInput() *string
```

- *Type:* *string

---

##### `GeneratedByInput`<sup>Optional</sup> <a name="GeneratedByInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedByInput"></a>

```go
func GeneratedByInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `CommitId`<sup>Required</sup> <a name="CommitId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitId"></a>

```go
func CommitId() *string
```

- *Type:* *string

---

##### `GeneratedBy`<sup>Required</sup> <a name="GeneratedBy" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedBy"></a>

```go
func GeneratedBy() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerExperimentTrialComponentStatusOutputReference <a name="SagemakerExperimentTrialComponentStatusOutputReference" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerexperimenttrialcomponent"

sagemakerexperimenttrialcomponent.NewSagemakerExperimentTrialComponentStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerExperimentTrialComponentStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resetPrimaryStatus">ResetPrimaryStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetPrimaryStatus` <a name="ResetPrimaryStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resetPrimaryStatus"></a>

```go
func ResetPrimaryStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatusInput">PrimaryStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatus">PrimaryStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `PrimaryStatusInput`<sup>Optional</sup> <a name="PrimaryStatusInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatusInput"></a>

```go
func PrimaryStatusInput() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `PrimaryStatus`<sup>Required</sup> <a name="PrimaryStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatus"></a>

```go
func PrimaryStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerExperimentTrialComponentTagsList <a name="SagemakerExperimentTrialComponentTagsList" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerexperimenttrialcomponent"

sagemakerexperimenttrialcomponent.NewSagemakerExperimentTrialComponentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerExperimentTrialComponentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.get"></a>

```go
func Get(index *f64) SagemakerExperimentTrialComponentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerExperimentTrialComponentTagsOutputReference <a name="SagemakerExperimentTrialComponentTagsOutputReference" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerexperimenttrialcomponent"

sagemakerexperimenttrialcomponent.NewSagemakerExperimentTrialComponentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerExperimentTrialComponentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



