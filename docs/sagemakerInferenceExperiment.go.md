# `sagemakerInferenceExperiment` Submodule <a name="`sagemakerInferenceExperiment` Submodule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerInferenceExperiment <a name="SagemakerInferenceExperiment" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment awscc_sagemaker_inference_experiment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.NewSagemakerInferenceExperiment(scope Construct, id *string, config SagemakerInferenceExperimentConfig) SagemakerInferenceExperiment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig">SagemakerInferenceExperimentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig">SagemakerInferenceExperimentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putDataStorageConfig">PutDataStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putModelVariants">PutModelVariants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putShadowModeConfig">PutShadowModeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDataStorageConfig">ResetDataStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDesiredState">ResetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetShadowModeConfig">ResetShadowModeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetStatusReason">ResetStatusReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataStorageConfig` <a name="PutDataStorageConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putDataStorageConfig"></a>

```go
func PutDataStorageConfig(value SagemakerInferenceExperimentDataStorageConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putDataStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a>

---

##### `PutModelVariants` <a name="PutModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putModelVariants"></a>

```go
func PutModelVariants(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putModelVariants.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putSchedule"></a>

```go
func PutSchedule(value SagemakerInferenceExperimentSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a>

---

##### `PutShadowModeConfig` <a name="PutShadowModeConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putShadowModeConfig"></a>

```go
func PutShadowModeConfig(value SagemakerInferenceExperimentShadowModeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putShadowModeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataStorageConfig` <a name="ResetDataStorageConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDataStorageConfig"></a>

```go
func ResetDataStorageConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDesiredState` <a name="ResetDesiredState" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDesiredState"></a>

```go
func ResetDesiredState()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetShadowModeConfig` <a name="ResetShadowModeConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetShadowModeConfig"></a>

```go
func ResetShadowModeConfig()
```

##### `ResetStatusReason` <a name="ResetStatusReason" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetStatusReason"></a>

```go
func ResetStatusReason()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerInferenceExperiment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.SagemakerInferenceExperiment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.SagemakerInferenceExperiment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.SagemakerInferenceExperiment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.SagemakerInferenceExperiment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerInferenceExperiment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerInferenceExperiment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerInferenceExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerInferenceExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dataStorageConfig">DataStorageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference">SagemakerInferenceExperimentDataStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointMetadata">EndpointMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference">SagemakerInferenceExperimentEndpointMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.modelVariants">ModelVariants</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList">SagemakerInferenceExperimentModelVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference">SagemakerInferenceExperimentScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.shadowModeConfig">ShadowModeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference">SagemakerInferenceExperimentShadowModeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList">SagemakerInferenceExperimentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dataStorageConfigInput">DataStorageConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.desiredStateInput">DesiredStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.modelVariantsInput">ModelVariantsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.shadowModeConfigInput">ShadowModeConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.statusReasonInput">StatusReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DataStorageConfig`<sup>Required</sup> <a name="DataStorageConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dataStorageConfig"></a>

```go
func DataStorageConfig() SagemakerInferenceExperimentDataStorageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference">SagemakerInferenceExperimentDataStorageConfigOutputReference</a>

---

##### `EndpointMetadata`<sup>Required</sup> <a name="EndpointMetadata" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointMetadata"></a>

```go
func EndpointMetadata() SagemakerInferenceExperimentEndpointMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference">SagemakerInferenceExperimentEndpointMetadataOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `ModelVariants`<sup>Required</sup> <a name="ModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.modelVariants"></a>

```go
func ModelVariants() SagemakerInferenceExperimentModelVariantsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList">SagemakerInferenceExperimentModelVariantsList</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.schedule"></a>

```go
func Schedule() SagemakerInferenceExperimentScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference">SagemakerInferenceExperimentScheduleOutputReference</a>

---

##### `ShadowModeConfig`<sup>Required</sup> <a name="ShadowModeConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.shadowModeConfig"></a>

```go
func ShadowModeConfig() SagemakerInferenceExperimentShadowModeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference">SagemakerInferenceExperimentShadowModeConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tags"></a>

```go
func Tags() SagemakerInferenceExperimentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList">SagemakerInferenceExperimentTagsList</a>

---

##### `DataStorageConfigInput`<sup>Optional</sup> <a name="DataStorageConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dataStorageConfigInput"></a>

```go
func DataStorageConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.desiredStateInput"></a>

```go
func DesiredStateInput() *string
```

- *Type:* *string

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `ModelVariantsInput`<sup>Optional</sup> <a name="ModelVariantsInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.modelVariantsInput"></a>

```go
func ModelVariantsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `ShadowModeConfigInput`<sup>Optional</sup> <a name="ShadowModeConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.shadowModeConfigInput"></a>

```go
func ShadowModeConfigInput() interface{}
```

- *Type:* interface{}

---

##### `StatusReasonInput`<sup>Optional</sup> <a name="StatusReasonInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.statusReasonInput"></a>

```go
func StatusReasonInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerInferenceExperimentConfig <a name="SagemakerInferenceExperimentConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

&sagemakerinferenceexperiment.SagemakerInferenceExperimentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointName: *string,
	ModelVariants: interface{},
	Name: *string,
	RoleArn: *string,
	Type: *string,
	DataStorageConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig,
	Description: *string,
	DesiredState: *string,
	KmsKey: *string,
	Schedule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule,
	ShadowModeConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig,
	StatusReason: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.endpointName">EndpointName</a></code> | <code>*string</code> | The name of the endpoint used to run the inference experiment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.modelVariants">ModelVariants</a></code> | <code>interface{}</code> | An array of ModelVariantConfig objects. Each ModelVariantConfig object in the array describes the infrastructure configuration for the corresponding variant. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.name">Name</a></code> | <code>*string</code> | The name for the inference experiment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.type">Type</a></code> | <code>*string</code> | The type of the inference experiment that you want to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.dataStorageConfig">DataStorageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a></code> | The Amazon S3 location and configuration for storing inference request and response data. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.description">Description</a></code> | <code>*string</code> | The description of the inference experiment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.desiredState">DesiredState</a></code> | <code>*string</code> | The desired state of the experiment after starting or stopping operation. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a></code> | The duration for which you want the inference experiment to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.shadowModeConfig">ShadowModeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a></code> | The configuration of ShadowMode inference experiment type. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.statusReason">StatusReason</a></code> | <code>*string</code> | The error message or client-specified reason from the StopInferenceExperiment API, that explains the status of the inference experiment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

The name of the endpoint used to run the inference experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#endpoint_name SagemakerInferenceExperiment#endpoint_name}

---

##### `ModelVariants`<sup>Required</sup> <a name="ModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.modelVariants"></a>

```go
ModelVariants interface{}
```

- *Type:* interface{}

An array of ModelVariantConfig objects. Each ModelVariantConfig object in the array describes the infrastructure configuration for the corresponding variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#model_variants SagemakerInferenceExperiment#model_variants}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for the inference experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#name SagemakerInferenceExperiment#name}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#role_arn SagemakerInferenceExperiment#role_arn}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the inference experiment that you want to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#type SagemakerInferenceExperiment#type}

---

##### `DataStorageConfig`<sup>Optional</sup> <a name="DataStorageConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.dataStorageConfig"></a>

```go
DataStorageConfig SagemakerInferenceExperimentDataStorageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a>

The Amazon S3 location and configuration for storing inference request and response data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#data_storage_config SagemakerInferenceExperiment#data_storage_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the inference experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#description SagemakerInferenceExperiment#description}

---

##### `DesiredState`<sup>Optional</sup> <a name="DesiredState" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.desiredState"></a>

```go
DesiredState *string
```

- *Type:* *string

The desired state of the experiment after starting or stopping operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#desired_state SagemakerInferenceExperiment#desired_state}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#kms_key SagemakerInferenceExperiment#kms_key}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.schedule"></a>

```go
Schedule SagemakerInferenceExperimentSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a>

The duration for which you want the inference experiment to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#schedule SagemakerInferenceExperiment#schedule}

---

##### `ShadowModeConfig`<sup>Optional</sup> <a name="ShadowModeConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.shadowModeConfig"></a>

```go
ShadowModeConfig SagemakerInferenceExperimentShadowModeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a>

The configuration of ShadowMode inference experiment type.

Use this field to specify a production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant also specify the percentage of requests that Amazon SageMaker replicates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#shadow_mode_config SagemakerInferenceExperiment#shadow_mode_config}

---

##### `StatusReason`<sup>Optional</sup> <a name="StatusReason" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.statusReason"></a>

```go
StatusReason *string
```

- *Type:* *string

The error message or client-specified reason from the StopInferenceExperiment API, that explains the status of the inference experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#status_reason SagemakerInferenceExperiment#status_reason}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#tags SagemakerInferenceExperiment#tags}

---

### SagemakerInferenceExperimentDataStorageConfig <a name="SagemakerInferenceExperimentDataStorageConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

&sagemakerinferenceexperiment.SagemakerInferenceExperimentDataStorageConfig {
	ContentType: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType,
	Destination: *string,
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.contentType">ContentType</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType">SagemakerInferenceExperimentDataStorageConfigContentType</a></code> | Configuration specifying how to treat different headers. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.destination">Destination</a></code> | <code>*string</code> | The Amazon S3 bucket where the inference request and response data is stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption. |

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.contentType"></a>

```go
ContentType SagemakerInferenceExperimentDataStorageConfigContentType
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType">SagemakerInferenceExperimentDataStorageConfigContentType</a>

Configuration specifying how to treat different headers.

If no headers are specified SageMaker will by default base64 encode when capturing the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#content_type SagemakerInferenceExperiment#content_type}

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

The Amazon S3 bucket where the inference request and response data is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#destination SagemakerInferenceExperiment#destination}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#kms_key SagemakerInferenceExperiment#kms_key}

---

### SagemakerInferenceExperimentDataStorageConfigContentType <a name="SagemakerInferenceExperimentDataStorageConfigContentType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

&sagemakerinferenceexperiment.SagemakerInferenceExperimentDataStorageConfigContentType {
	CsvContentTypes: *[]*string,
	JsonContentTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType.property.csvContentTypes">CsvContentTypes</a></code> | <code>*[]*string</code> | The list of all content type headers that SageMaker will treat as CSV and capture accordingly. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType.property.jsonContentTypes">JsonContentTypes</a></code> | <code>*[]*string</code> | The list of all content type headers that SageMaker will treat as JSON and capture accordingly. |

---

##### `CsvContentTypes`<sup>Optional</sup> <a name="CsvContentTypes" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType.property.csvContentTypes"></a>

```go
CsvContentTypes *[]*string
```

- *Type:* *[]*string

The list of all content type headers that SageMaker will treat as CSV and capture accordingly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#csv_content_types SagemakerInferenceExperiment#csv_content_types}

---

##### `JsonContentTypes`<sup>Optional</sup> <a name="JsonContentTypes" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType.property.jsonContentTypes"></a>

```go
JsonContentTypes *[]*string
```

- *Type:* *[]*string

The list of all content type headers that SageMaker will treat as JSON and capture accordingly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#json_content_types SagemakerInferenceExperiment#json_content_types}

---

### SagemakerInferenceExperimentEndpointMetadata <a name="SagemakerInferenceExperimentEndpointMetadata" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

&sagemakerinferenceexperiment.SagemakerInferenceExperimentEndpointMetadata {

}
```


### SagemakerInferenceExperimentModelVariants <a name="SagemakerInferenceExperimentModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

&sagemakerinferenceexperiment.SagemakerInferenceExperimentModelVariants {
	InfrastructureConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig,
	ModelName: *string,
	VariantName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.infrastructureConfig">InfrastructureConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfig</a></code> | The configuration for the infrastructure that the model will be deployed to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.modelName">ModelName</a></code> | <code>*string</code> | The name of the Amazon SageMaker Model entity. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.variantName">VariantName</a></code> | <code>*string</code> | The name of the variant. |

---

##### `InfrastructureConfig`<sup>Required</sup> <a name="InfrastructureConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.infrastructureConfig"></a>

```go
InfrastructureConfig SagemakerInferenceExperimentModelVariantsInfrastructureConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfig</a>

The configuration for the infrastructure that the model will be deployed to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#infrastructure_config SagemakerInferenceExperiment#infrastructure_config}

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.modelName"></a>

```go
ModelName *string
```

- *Type:* *string

The name of the Amazon SageMaker Model entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#model_name SagemakerInferenceExperiment#model_name}

---

##### `VariantName`<sup>Required</sup> <a name="VariantName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.variantName"></a>

```go
VariantName *string
```

- *Type:* *string

The name of the variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#variant_name SagemakerInferenceExperiment#variant_name}

---

### SagemakerInferenceExperimentModelVariantsInfrastructureConfig <a name="SagemakerInferenceExperimentModelVariantsInfrastructureConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

&sagemakerinferenceexperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig {
	InfrastructureType: *string,
	RealTimeInferenceConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig.property.infrastructureType">InfrastructureType</a></code> | <code>*string</code> | The type of the inference experiment that you want to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig.property.realTimeInferenceConfig">RealTimeInferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a></code> | The infrastructure configuration for deploying the model to a real-time inference endpoint. |

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig.property.infrastructureType"></a>

```go
InfrastructureType *string
```

- *Type:* *string

The type of the inference experiment that you want to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#infrastructure_type SagemakerInferenceExperiment#infrastructure_type}

---

##### `RealTimeInferenceConfig`<sup>Required</sup> <a name="RealTimeInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig.property.realTimeInferenceConfig"></a>

```go
RealTimeInferenceConfig SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a>

The infrastructure configuration for deploying the model to a real-time inference endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#real_time_inference_config SagemakerInferenceExperiment#real_time_inference_config}

---

### SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig <a name="SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

&sagemakerinferenceexperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig {
	InstanceCount: *f64,
	InstanceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | The number of instances of the type specified by InstanceType. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | The instance type the model is deployed to. |

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

The number of instances of the type specified by InstanceType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#instance_count SagemakerInferenceExperiment#instance_count}

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

The instance type the model is deployed to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#instance_type SagemakerInferenceExperiment#instance_type}

---

### SagemakerInferenceExperimentSchedule <a name="SagemakerInferenceExperimentSchedule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

&sagemakerinferenceexperiment.SagemakerInferenceExperimentSchedule {
	EndTime: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule.property.endTime">EndTime</a></code> | <code>*string</code> | The timestamp at which the inference experiment ended or will end. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule.property.startTime">StartTime</a></code> | <code>*string</code> | The timestamp at which the inference experiment started or will start. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

The timestamp at which the inference experiment ended or will end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#end_time SagemakerInferenceExperiment#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

The timestamp at which the inference experiment started or will start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#start_time SagemakerInferenceExperiment#start_time}

---

### SagemakerInferenceExperimentShadowModeConfig <a name="SagemakerInferenceExperimentShadowModeConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

&sagemakerinferenceexperiment.SagemakerInferenceExperimentShadowModeConfig {
	ShadowModelVariants: interface{},
	SourceModelVariantName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig.property.shadowModelVariants">ShadowModelVariants</a></code> | <code>interface{}</code> | List of shadow variant configurations. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig.property.sourceModelVariantName">SourceModelVariantName</a></code> | <code>*string</code> | The name of the production variant, which takes all the inference requests. |

---

##### `ShadowModelVariants`<sup>Optional</sup> <a name="ShadowModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig.property.shadowModelVariants"></a>

```go
ShadowModelVariants interface{}
```

- *Type:* interface{}

List of shadow variant configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#shadow_model_variants SagemakerInferenceExperiment#shadow_model_variants}

---

##### `SourceModelVariantName`<sup>Optional</sup> <a name="SourceModelVariantName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig.property.sourceModelVariantName"></a>

```go
SourceModelVariantName *string
```

- *Type:* *string

The name of the production variant, which takes all the inference requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#source_model_variant_name SagemakerInferenceExperiment#source_model_variant_name}

---

### SagemakerInferenceExperimentShadowModeConfigShadowModelVariants <a name="SagemakerInferenceExperimentShadowModeConfigShadowModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

&sagemakerinferenceexperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants {
	SamplingPercentage: *f64,
	ShadowModelVariantName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants.property.samplingPercentage">SamplingPercentage</a></code> | <code>*f64</code> | The percentage of inference requests that Amazon SageMaker replicates from the production variant to the shadow variant. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants.property.shadowModelVariantName">ShadowModelVariantName</a></code> | <code>*string</code> | The name of the shadow variant. |

---

##### `SamplingPercentage`<sup>Optional</sup> <a name="SamplingPercentage" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants.property.samplingPercentage"></a>

```go
SamplingPercentage *f64
```

- *Type:* *f64

The percentage of inference requests that Amazon SageMaker replicates from the production variant to the shadow variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#sampling_percentage SagemakerInferenceExperiment#sampling_percentage}

---

##### `ShadowModelVariantName`<sup>Optional</sup> <a name="ShadowModelVariantName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants.property.shadowModelVariantName"></a>

```go
ShadowModelVariantName *string
```

- *Type:* *string

The name of the shadow variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#shadow_model_variant_name SagemakerInferenceExperiment#shadow_model_variant_name}

---

### SagemakerInferenceExperimentTags <a name="SagemakerInferenceExperimentTags" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

&sagemakerinferenceexperiment.SagemakerInferenceExperimentTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#key SagemakerInferenceExperiment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_experiment#value SagemakerInferenceExperiment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference <a name="SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.NewSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resetCsvContentTypes">ResetCsvContentTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resetJsonContentTypes">ResetJsonContentTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCsvContentTypes` <a name="ResetCsvContentTypes" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resetCsvContentTypes"></a>

```go
func ResetCsvContentTypes()
```

##### `ResetJsonContentTypes` <a name="ResetJsonContentTypes" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resetJsonContentTypes"></a>

```go
func ResetJsonContentTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.csvContentTypesInput">CsvContentTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.jsonContentTypesInput">JsonContentTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.csvContentTypes">CsvContentTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.jsonContentTypes">JsonContentTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CsvContentTypesInput`<sup>Optional</sup> <a name="CsvContentTypesInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.csvContentTypesInput"></a>

```go
func CsvContentTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `JsonContentTypesInput`<sup>Optional</sup> <a name="JsonContentTypesInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.jsonContentTypesInput"></a>

```go
func JsonContentTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CsvContentTypes`<sup>Required</sup> <a name="CsvContentTypes" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.csvContentTypes"></a>

```go
func CsvContentTypes() *[]*string
```

- *Type:* *[]*string

---

##### `JsonContentTypes`<sup>Required</sup> <a name="JsonContentTypes" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.jsonContentTypes"></a>

```go
func JsonContentTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceExperimentDataStorageConfigOutputReference <a name="SagemakerInferenceExperimentDataStorageConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.NewSagemakerInferenceExperimentDataStorageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceExperimentDataStorageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.putContentType">PutContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContentType` <a name="PutContentType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.putContentType"></a>

```go
func PutContentType(value SagemakerInferenceExperimentDataStorageConfigContentType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.putContentType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType">SagemakerInferenceExperimentDataStorageConfigContentType</a>

---

##### `ResetContentType` <a name="ResetContentType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.contentType">ContentType</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference">SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.contentType"></a>

```go
func ContentType() SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference">SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference</a>

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceExperimentEndpointMetadataOutputReference <a name="SagemakerInferenceExperimentEndpointMetadataOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.NewSagemakerInferenceExperimentEndpointMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceExperimentEndpointMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointConfigName">EndpointConfigName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointStatus">EndpointStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadata">SagemakerInferenceExperimentEndpointMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointConfigName`<sup>Required</sup> <a name="EndpointConfigName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointConfigName"></a>

```go
func EndpointConfigName() *string
```

- *Type:* *string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `EndpointStatus`<sup>Required</sup> <a name="EndpointStatus" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointStatus"></a>

```go
func EndpointStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerInferenceExperimentEndpointMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadata">SagemakerInferenceExperimentEndpointMetadata</a>

---


### SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference <a name="SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.NewSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.putRealTimeInferenceConfig">PutRealTimeInferenceConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRealTimeInferenceConfig` <a name="PutRealTimeInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.putRealTimeInferenceConfig"></a>

```go
func PutRealTimeInferenceConfig(value SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.putRealTimeInferenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.realTimeInferenceConfig">RealTimeInferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.infrastructureTypeInput">InfrastructureTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.realTimeInferenceConfigInput">RealTimeInferenceConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.infrastructureType">InfrastructureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RealTimeInferenceConfig`<sup>Required</sup> <a name="RealTimeInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.realTimeInferenceConfig"></a>

```go
func RealTimeInferenceConfig() SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference</a>

---

##### `InfrastructureTypeInput`<sup>Optional</sup> <a name="InfrastructureTypeInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.infrastructureTypeInput"></a>

```go
func InfrastructureTypeInput() *string
```

- *Type:* *string

---

##### `RealTimeInferenceConfigInput`<sup>Optional</sup> <a name="RealTimeInferenceConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.realTimeInferenceConfigInput"></a>

```go
func RealTimeInferenceConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.infrastructureType"></a>

```go
func InfrastructureType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference <a name="SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.NewSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceExperimentModelVariantsList <a name="SagemakerInferenceExperimentModelVariantsList" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.NewSagemakerInferenceExperimentModelVariantsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceExperimentModelVariantsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.get"></a>

```go
func Get(index *f64) SagemakerInferenceExperimentModelVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceExperimentModelVariantsOutputReference <a name="SagemakerInferenceExperimentModelVariantsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.NewSagemakerInferenceExperimentModelVariantsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceExperimentModelVariantsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.putInfrastructureConfig">PutInfrastructureConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInfrastructureConfig` <a name="PutInfrastructureConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.putInfrastructureConfig"></a>

```go
func PutInfrastructureConfig(value SagemakerInferenceExperimentModelVariantsInfrastructureConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.putInfrastructureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.infrastructureConfig">InfrastructureConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference">SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.infrastructureConfigInput">InfrastructureConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.variantNameInput">VariantNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.modelName">ModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.variantName">VariantName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InfrastructureConfig`<sup>Required</sup> <a name="InfrastructureConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.infrastructureConfig"></a>

```go
func InfrastructureConfig() SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference">SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference</a>

---

##### `InfrastructureConfigInput`<sup>Optional</sup> <a name="InfrastructureConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.infrastructureConfigInput"></a>

```go
func InfrastructureConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.modelNameInput"></a>

```go
func ModelNameInput() *string
```

- *Type:* *string

---

##### `VariantNameInput`<sup>Optional</sup> <a name="VariantNameInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.variantNameInput"></a>

```go
func VariantNameInput() *string
```

- *Type:* *string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.modelName"></a>

```go
func ModelName() *string
```

- *Type:* *string

---

##### `VariantName`<sup>Required</sup> <a name="VariantName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.variantName"></a>

```go
func VariantName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceExperimentScheduleOutputReference <a name="SagemakerInferenceExperimentScheduleOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.NewSagemakerInferenceExperimentScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceExperimentScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceExperimentShadowModeConfigOutputReference <a name="SagemakerInferenceExperimentShadowModeConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.NewSagemakerInferenceExperimentShadowModeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceExperimentShadowModeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.putShadowModelVariants">PutShadowModelVariants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resetShadowModelVariants">ResetShadowModelVariants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resetSourceModelVariantName">ResetSourceModelVariantName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShadowModelVariants` <a name="PutShadowModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.putShadowModelVariants"></a>

```go
func PutShadowModelVariants(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.putShadowModelVariants.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetShadowModelVariants` <a name="ResetShadowModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resetShadowModelVariants"></a>

```go
func ResetShadowModelVariants()
```

##### `ResetSourceModelVariantName` <a name="ResetSourceModelVariantName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resetSourceModelVariantName"></a>

```go
func ResetSourceModelVariantName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.shadowModelVariants">ShadowModelVariants</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList">SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.shadowModelVariantsInput">ShadowModelVariantsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.sourceModelVariantNameInput">SourceModelVariantNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.sourceModelVariantName">SourceModelVariantName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShadowModelVariants`<sup>Required</sup> <a name="ShadowModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.shadowModelVariants"></a>

```go
func ShadowModelVariants() SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList">SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList</a>

---

##### `ShadowModelVariantsInput`<sup>Optional</sup> <a name="ShadowModelVariantsInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.shadowModelVariantsInput"></a>

```go
func ShadowModelVariantsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceModelVariantNameInput`<sup>Optional</sup> <a name="SourceModelVariantNameInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.sourceModelVariantNameInput"></a>

```go
func SourceModelVariantNameInput() *string
```

- *Type:* *string

---

##### `SourceModelVariantName`<sup>Required</sup> <a name="SourceModelVariantName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.sourceModelVariantName"></a>

```go
func SourceModelVariantName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList <a name="SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.NewSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.get"></a>

```go
func Get(index *f64) SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference <a name="SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.NewSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resetSamplingPercentage">ResetSamplingPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resetShadowModelVariantName">ResetShadowModelVariantName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSamplingPercentage` <a name="ResetSamplingPercentage" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resetSamplingPercentage"></a>

```go
func ResetSamplingPercentage()
```

##### `ResetShadowModelVariantName` <a name="ResetShadowModelVariantName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resetShadowModelVariantName"></a>

```go
func ResetShadowModelVariantName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.samplingPercentageInput">SamplingPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.shadowModelVariantNameInput">ShadowModelVariantNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.samplingPercentage">SamplingPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.shadowModelVariantName">ShadowModelVariantName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SamplingPercentageInput`<sup>Optional</sup> <a name="SamplingPercentageInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.samplingPercentageInput"></a>

```go
func SamplingPercentageInput() *f64
```

- *Type:* *f64

---

##### `ShadowModelVariantNameInput`<sup>Optional</sup> <a name="ShadowModelVariantNameInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.shadowModelVariantNameInput"></a>

```go
func ShadowModelVariantNameInput() *string
```

- *Type:* *string

---

##### `SamplingPercentage`<sup>Required</sup> <a name="SamplingPercentage" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.samplingPercentage"></a>

```go
func SamplingPercentage() *f64
```

- *Type:* *f64

---

##### `ShadowModelVariantName`<sup>Required</sup> <a name="ShadowModelVariantName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.shadowModelVariantName"></a>

```go
func ShadowModelVariantName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceExperimentTagsList <a name="SagemakerInferenceExperimentTagsList" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.NewSagemakerInferenceExperimentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceExperimentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.get"></a>

```go
func Get(index *f64) SagemakerInferenceExperimentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceExperimentTagsOutputReference <a name="SagemakerInferenceExperimentTagsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferenceexperiment"

sagemakerinferenceexperiment.NewSagemakerInferenceExperimentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceExperimentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



