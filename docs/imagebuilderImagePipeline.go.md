# `imagebuilderImagePipeline` Submodule <a name="`imagebuilderImagePipeline` Submodule" id="@cdktn/provider-awscc.imagebuilderImagePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderImagePipeline <a name="ImagebuilderImagePipeline" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline awscc_imagebuilder_image_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

imagebuilderimagepipeline.NewImagebuilderImagePipeline(scope Construct, id *string, config ImagebuilderImagePipelineConfig) ImagebuilderImagePipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig">ImagebuilderImagePipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig">ImagebuilderImagePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageScanningConfiguration">PutImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageTestsConfiguration">PutImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.putLoggingConfiguration">PutLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.putWorkflows">PutWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetContainerRecipeArn">ResetContainerRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDistributionConfigurationArn">ResetDistributionConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetEnhancedImageMetadataEnabled">ResetEnhancedImageMetadataEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetExecutionRole">ResetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageRecipeArn">ResetImageRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageScanningConfiguration">ResetImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageTags">ResetImageTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageTestsConfiguration">ResetImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetInfrastructureConfigurationArn">ResetInfrastructureConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetLoggingConfiguration">ResetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetWorkflows">ResetWorkflows</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutImageScanningConfiguration` <a name="PutImageScanningConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageScanningConfiguration"></a>

```go
func PutImageScanningConfiguration(value ImagebuilderImagePipelineImageScanningConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageScanningConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a>

---

##### `PutImageTestsConfiguration` <a name="PutImageTestsConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageTestsConfiguration"></a>

```go
func PutImageTestsConfiguration(value ImagebuilderImagePipelineImageTestsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageTestsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a>

---

##### `PutLoggingConfiguration` <a name="PutLoggingConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.putLoggingConfiguration"></a>

```go
func PutLoggingConfiguration(value ImagebuilderImagePipelineLoggingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfiguration">ImagebuilderImagePipelineLoggingConfiguration</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.putSchedule"></a>

```go
func PutSchedule(value ImagebuilderImagePipelineSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a>

---

##### `PutWorkflows` <a name="PutWorkflows" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.putWorkflows"></a>

```go
func PutWorkflows(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.putWorkflows.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContainerRecipeArn` <a name="ResetContainerRecipeArn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetContainerRecipeArn"></a>

```go
func ResetContainerRecipeArn()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDistributionConfigurationArn` <a name="ResetDistributionConfigurationArn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDistributionConfigurationArn"></a>

```go
func ResetDistributionConfigurationArn()
```

##### `ResetEnhancedImageMetadataEnabled` <a name="ResetEnhancedImageMetadataEnabled" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetEnhancedImageMetadataEnabled"></a>

```go
func ResetEnhancedImageMetadataEnabled()
```

##### `ResetExecutionRole` <a name="ResetExecutionRole" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetExecutionRole"></a>

```go
func ResetExecutionRole()
```

##### `ResetImageRecipeArn` <a name="ResetImageRecipeArn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageRecipeArn"></a>

```go
func ResetImageRecipeArn()
```

##### `ResetImageScanningConfiguration` <a name="ResetImageScanningConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageScanningConfiguration"></a>

```go
func ResetImageScanningConfiguration()
```

##### `ResetImageTags` <a name="ResetImageTags" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageTags"></a>

```go
func ResetImageTags()
```

##### `ResetImageTestsConfiguration` <a name="ResetImageTestsConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageTestsConfiguration"></a>

```go
func ResetImageTestsConfiguration()
```

##### `ResetInfrastructureConfigurationArn` <a name="ResetInfrastructureConfigurationArn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetInfrastructureConfigurationArn"></a>

```go
func ResetInfrastructureConfigurationArn()
```

##### `ResetLoggingConfiguration` <a name="ResetLoggingConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetLoggingConfiguration"></a>

```go
func ResetLoggingConfiguration()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetName"></a>

```go
func ResetName()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetTags"></a>

```go
func ResetTags()
```

##### `ResetWorkflows` <a name="ResetWorkflows" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetWorkflows"></a>

```go
func ResetWorkflows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderImagePipeline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

imagebuilderimagepipeline.ImagebuilderImagePipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

imagebuilderimagepipeline.ImagebuilderImagePipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

imagebuilderimagepipeline.ImagebuilderImagePipeline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

imagebuilderimagepipeline.ImagebuilderImagePipeline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ImagebuilderImagePipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ImagebuilderImagePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ImagebuilderImagePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderImagePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageScanningConfiguration">ImageScanningConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference">ImagebuilderImagePipelineImageScanningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfiguration">ImageTestsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference">ImagebuilderImagePipelineImageTestsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference">ImagebuilderImagePipelineLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference">ImagebuilderImagePipelineScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.workflows">Workflows</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList">ImagebuilderImagePipelineWorkflowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArnInput">ContainerRecipeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArnInput">DistributionConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabledInput">EnhancedImageMetadataEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageRecipeArnInput">ImageRecipeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageScanningConfigurationInput">ImageScanningConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTagsInput">ImageTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfigurationInput">ImageTestsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.infrastructureConfigurationArnInput">InfrastructureConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.loggingConfigurationInput">LoggingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.workflowsInput">WorkflowsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArn">ContainerRecipeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArn">DistributionConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabled">EnhancedImageMetadataEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageRecipeArn">ImageRecipeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTags">ImageTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.infrastructureConfigurationArn">InfrastructureConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageScanningConfiguration`<sup>Required</sup> <a name="ImageScanningConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageScanningConfiguration"></a>

```go
func ImageScanningConfiguration() ImagebuilderImagePipelineImageScanningConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference">ImagebuilderImagePipelineImageScanningConfigurationOutputReference</a>

---

##### `ImageTestsConfiguration`<sup>Required</sup> <a name="ImageTestsConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfiguration"></a>

```go
func ImageTestsConfiguration() ImagebuilderImagePipelineImageTestsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference">ImagebuilderImagePipelineImageTestsConfigurationOutputReference</a>

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.loggingConfiguration"></a>

```go
func LoggingConfiguration() ImagebuilderImagePipelineLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference">ImagebuilderImagePipelineLoggingConfigurationOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.schedule"></a>

```go
func Schedule() ImagebuilderImagePipelineScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference">ImagebuilderImagePipelineScheduleOutputReference</a>

---

##### `Workflows`<sup>Required</sup> <a name="Workflows" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.workflows"></a>

```go
func Workflows() ImagebuilderImagePipelineWorkflowsList
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList">ImagebuilderImagePipelineWorkflowsList</a>

---

##### `ContainerRecipeArnInput`<sup>Optional</sup> <a name="ContainerRecipeArnInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArnInput"></a>

```go
func ContainerRecipeArnInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DistributionConfigurationArnInput`<sup>Optional</sup> <a name="DistributionConfigurationArnInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArnInput"></a>

```go
func DistributionConfigurationArnInput() *string
```

- *Type:* *string

---

##### `EnhancedImageMetadataEnabledInput`<sup>Optional</sup> <a name="EnhancedImageMetadataEnabledInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabledInput"></a>

```go
func EnhancedImageMetadataEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.executionRoleInput"></a>

```go
func ExecutionRoleInput() *string
```

- *Type:* *string

---

##### `ImageRecipeArnInput`<sup>Optional</sup> <a name="ImageRecipeArnInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageRecipeArnInput"></a>

```go
func ImageRecipeArnInput() *string
```

- *Type:* *string

---

##### `ImageScanningConfigurationInput`<sup>Optional</sup> <a name="ImageScanningConfigurationInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageScanningConfigurationInput"></a>

```go
func ImageScanningConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ImageTagsInput`<sup>Optional</sup> <a name="ImageTagsInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTagsInput"></a>

```go
func ImageTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageTestsConfigurationInput`<sup>Optional</sup> <a name="ImageTestsConfigurationInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfigurationInput"></a>

```go
func ImageTestsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InfrastructureConfigurationArnInput`<sup>Optional</sup> <a name="InfrastructureConfigurationArnInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.infrastructureConfigurationArnInput"></a>

```go
func InfrastructureConfigurationArnInput() *string
```

- *Type:* *string

---

##### `LoggingConfigurationInput`<sup>Optional</sup> <a name="LoggingConfigurationInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.loggingConfigurationInput"></a>

```go
func LoggingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WorkflowsInput`<sup>Optional</sup> <a name="WorkflowsInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.workflowsInput"></a>

```go
func WorkflowsInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerRecipeArn`<sup>Required</sup> <a name="ContainerRecipeArn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArn"></a>

```go
func ContainerRecipeArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DistributionConfigurationArn`<sup>Required</sup> <a name="DistributionConfigurationArn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArn"></a>

```go
func DistributionConfigurationArn() *string
```

- *Type:* *string

---

##### `EnhancedImageMetadataEnabled`<sup>Required</sup> <a name="EnhancedImageMetadataEnabled" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabled"></a>

```go
func EnhancedImageMetadataEnabled() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.executionRole"></a>

```go
func ExecutionRole() *string
```

- *Type:* *string

---

##### `ImageRecipeArn`<sup>Required</sup> <a name="ImageRecipeArn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageRecipeArn"></a>

```go
func ImageRecipeArn() *string
```

- *Type:* *string

---

##### `ImageTags`<sup>Required</sup> <a name="ImageTags" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTags"></a>

```go
func ImageTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InfrastructureConfigurationArn`<sup>Required</sup> <a name="InfrastructureConfigurationArn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.infrastructureConfigurationArn"></a>

```go
func InfrastructureConfigurationArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderImagePipelineConfig <a name="ImagebuilderImagePipelineConfig" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

&imagebuilderimagepipeline.ImagebuilderImagePipelineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerRecipeArn: *string,
	Description: *string,
	DistributionConfigurationArn: *string,
	EnhancedImageMetadataEnabled: interface{},
	ExecutionRole: *string,
	ImageRecipeArn: *string,
	ImageScanningConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration,
	ImageTags: *map[string]*string,
	ImageTestsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration,
	InfrastructureConfigurationArn: *string,
	LoggingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfiguration,
	Name: *string,
	Schedule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule,
	Status: *string,
	Tags: *map[string]*string,
	Workflows: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.containerRecipeArn">ContainerRecipeArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.description">Description</a></code> | <code>*string</code> | The description of the image pipeline. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.distributionConfigurationArn">DistributionConfigurationArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.enhancedImageMetadataEnabled">EnhancedImageMetadataEnabled</a></code> | <code>interface{}</code> | Collects additional information about the image being created, including the operating system (OS) version and package list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | The execution role name/ARN for the image build, if provided. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageRecipeArn">ImageRecipeArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageScanningConfiguration">ImageScanningConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a></code> | Contains settings for vulnerability scans. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageTags">ImageTags</a></code> | <code>*map[string]*string</code> | The tags to be applied to images created by this pipeline. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageTestsConfiguration">ImageTestsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a></code> | The image tests configuration of the image pipeline. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.infrastructureConfigurationArn">InfrastructureConfigurationArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfiguration">ImagebuilderImagePipelineLoggingConfiguration</a></code> | The logging configuration settings for the image pipeline. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.name">Name</a></code> | <code>*string</code> | The name of the image pipeline. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a></code> | The schedule of the image pipeline. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.status">Status</a></code> | <code>*string</code> | The status of the image pipeline. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | The tags of this image pipeline. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.workflows">Workflows</a></code> | <code>interface{}</code> | Workflows to define the image build process. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerRecipeArn`<sup>Optional</sup> <a name="ContainerRecipeArn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.containerRecipeArn"></a>

```go
ContainerRecipeArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#container_recipe_arn ImagebuilderImagePipeline#container_recipe_arn}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the image pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#description ImagebuilderImagePipeline#description}

---

##### `DistributionConfigurationArn`<sup>Optional</sup> <a name="DistributionConfigurationArn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.distributionConfigurationArn"></a>

```go
DistributionConfigurationArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}

---

##### `EnhancedImageMetadataEnabled`<sup>Optional</sup> <a name="EnhancedImageMetadataEnabled" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.enhancedImageMetadataEnabled"></a>

```go
EnhancedImageMetadataEnabled interface{}
```

- *Type:* interface{}

Collects additional information about the image being created, including the operating system (OS) version and package list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}

---

##### `ExecutionRole`<sup>Optional</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.executionRole"></a>

```go
ExecutionRole *string
```

- *Type:* *string

The execution role name/ARN for the image build, if provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#execution_role ImagebuilderImagePipeline#execution_role}

---

##### `ImageRecipeArn`<sup>Optional</sup> <a name="ImageRecipeArn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageRecipeArn"></a>

```go
ImageRecipeArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}

---

##### `ImageScanningConfiguration`<sup>Optional</sup> <a name="ImageScanningConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageScanningConfiguration"></a>

```go
ImageScanningConfiguration ImagebuilderImagePipelineImageScanningConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a>

Contains settings for vulnerability scans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#image_scanning_configuration ImagebuilderImagePipeline#image_scanning_configuration}

---

##### `ImageTags`<sup>Optional</sup> <a name="ImageTags" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageTags"></a>

```go
ImageTags *map[string]*string
```

- *Type:* *map[string]*string

The tags to be applied to images created by this pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#image_tags ImagebuilderImagePipeline#image_tags}

---

##### `ImageTestsConfiguration`<sup>Optional</sup> <a name="ImageTestsConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageTestsConfiguration"></a>

```go
ImageTestsConfiguration ImagebuilderImagePipelineImageTestsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a>

The image tests configuration of the image pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#image_tests_configuration ImagebuilderImagePipeline#image_tests_configuration}

---

##### `InfrastructureConfigurationArn`<sup>Optional</sup> <a name="InfrastructureConfigurationArn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.infrastructureConfigurationArn"></a>

```go
InfrastructureConfigurationArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}

---

##### `LoggingConfiguration`<sup>Optional</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.loggingConfiguration"></a>

```go
LoggingConfiguration ImagebuilderImagePipelineLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfiguration">ImagebuilderImagePipelineLoggingConfiguration</a>

The logging configuration settings for the image pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#logging_configuration ImagebuilderImagePipeline#logging_configuration}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the image pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.schedule"></a>

```go
Schedule ImagebuilderImagePipelineSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a>

The schedule of the image pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#schedule ImagebuilderImagePipeline#schedule}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

The status of the image pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#status ImagebuilderImagePipeline#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

The tags of this image pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#tags ImagebuilderImagePipeline#tags}

---

##### `Workflows`<sup>Optional</sup> <a name="Workflows" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.workflows"></a>

```go
Workflows interface{}
```

- *Type:* interface{}

Workflows to define the image build process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#workflows ImagebuilderImagePipeline#workflows}

---

### ImagebuilderImagePipelineImageScanningConfiguration <a name="ImagebuilderImagePipelineImageScanningConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

&imagebuilderimagepipeline.ImagebuilderImagePipelineImageScanningConfiguration {
	EcrConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration,
	ImageScanningEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.property.ecrConfiguration">EcrConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a></code> | Contains ECR settings for vulnerability scans. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.property.imageScanningEnabled">ImageScanningEnabled</a></code> | <code>interface{}</code> | This sets whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image. |

---

##### `EcrConfiguration`<sup>Optional</sup> <a name="EcrConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.property.ecrConfiguration"></a>

```go
EcrConfiguration ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a>

Contains ECR settings for vulnerability scans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#ecr_configuration ImagebuilderImagePipeline#ecr_configuration}

---

##### `ImageScanningEnabled`<sup>Optional</sup> <a name="ImageScanningEnabled" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.property.imageScanningEnabled"></a>

```go
ImageScanningEnabled interface{}
```

- *Type:* interface{}

This sets whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#image_scanning_enabled ImagebuilderImagePipeline#image_scanning_enabled}

---

### ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration <a name="ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

&imagebuilderimagepipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration {
	ContainerTags: *[]*string,
	RepositoryName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.property.containerTags">ContainerTags</a></code> | <code>*[]*string</code> | Tags for Image Builder to apply the output container image that is scanned. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | The name of the container repository that Amazon Inspector scans to identify findings for your container images. |

---

##### `ContainerTags`<sup>Optional</sup> <a name="ContainerTags" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.property.containerTags"></a>

```go
ContainerTags *[]*string
```

- *Type:* *[]*string

Tags for Image Builder to apply the output container image that is scanned.

Tags can help you identify and manage your scanned images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#container_tags ImagebuilderImagePipeline#container_tags}

---

##### `RepositoryName`<sup>Optional</sup> <a name="RepositoryName" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.property.repositoryName"></a>

```go
RepositoryName *string
```

- *Type:* *string

The name of the container repository that Amazon Inspector scans to identify findings for your container images.

The name includes the path for the repository location. If you don't provide this information, Image Builder creates a repository in your account named image-builder-image-scanning-repository to use for vulnerability scans for your output container images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#repository_name ImagebuilderImagePipeline#repository_name}

---

### ImagebuilderImagePipelineImageTestsConfiguration <a name="ImagebuilderImagePipelineImageTestsConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

&imagebuilderimagepipeline.ImagebuilderImagePipelineImageTestsConfiguration {
	ImageTestsEnabled: interface{},
	TimeoutMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.imageTestsEnabled">ImageTestsEnabled</a></code> | <code>interface{}</code> | Defines if tests should be executed when building this image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.timeoutMinutes">TimeoutMinutes</a></code> | <code>*f64</code> | The maximum time in minutes that tests are permitted to run. |

---

##### `ImageTestsEnabled`<sup>Optional</sup> <a name="ImageTestsEnabled" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.imageTestsEnabled"></a>

```go
ImageTestsEnabled interface{}
```

- *Type:* interface{}

Defines if tests should be executed when building this image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#image_tests_enabled ImagebuilderImagePipeline#image_tests_enabled}

---

##### `TimeoutMinutes`<sup>Optional</sup> <a name="TimeoutMinutes" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.timeoutMinutes"></a>

```go
TimeoutMinutes *f64
```

- *Type:* *f64

The maximum time in minutes that tests are permitted to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#timeout_minutes ImagebuilderImagePipeline#timeout_minutes}

---

### ImagebuilderImagePipelineLoggingConfiguration <a name="ImagebuilderImagePipelineLoggingConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

&imagebuilderimagepipeline.ImagebuilderImagePipelineLoggingConfiguration {
	ImageLogGroupName: *string,
	PipelineLogGroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfiguration.property.imageLogGroupName">ImageLogGroupName</a></code> | <code>*string</code> | The name of the log group for image build logs. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfiguration.property.pipelineLogGroupName">PipelineLogGroupName</a></code> | <code>*string</code> | The name of the log group for pipeline execution logs. |

---

##### `ImageLogGroupName`<sup>Optional</sup> <a name="ImageLogGroupName" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfiguration.property.imageLogGroupName"></a>

```go
ImageLogGroupName *string
```

- *Type:* *string

The name of the log group for image build logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#image_log_group_name ImagebuilderImagePipeline#image_log_group_name}

---

##### `PipelineLogGroupName`<sup>Optional</sup> <a name="PipelineLogGroupName" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfiguration.property.pipelineLogGroupName"></a>

```go
PipelineLogGroupName *string
```

- *Type:* *string

The name of the log group for pipeline execution logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#pipeline_log_group_name ImagebuilderImagePipeline#pipeline_log_group_name}

---

### ImagebuilderImagePipelineSchedule <a name="ImagebuilderImagePipelineSchedule" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

&imagebuilderimagepipeline.ImagebuilderImagePipelineSchedule {
	AutoDisablePolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicy,
	PipelineExecutionStartCondition: *string,
	ScheduleExpression: *string,
	Timezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.autoDisablePolicy">AutoDisablePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicy">ImagebuilderImagePipelineScheduleAutoDisablePolicy</a></code> | The auto-disable policy for the image pipeline. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.pipelineExecutionStartCondition">PipelineExecutionStartCondition</a></code> | <code>*string</code> | The condition configures when the pipeline should trigger a new image build. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | The expression determines how often EC2 Image Builder evaluates your pipelineExecutionStartCondition. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.timezone">Timezone</a></code> | <code>*string</code> | The timezone that applies to the scheduling expression, for example "Etc/UTC" or "America/Los_Angeles" in IANA timezone format. |

---

##### `AutoDisablePolicy`<sup>Optional</sup> <a name="AutoDisablePolicy" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.autoDisablePolicy"></a>

```go
AutoDisablePolicy ImagebuilderImagePipelineScheduleAutoDisablePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicy">ImagebuilderImagePipelineScheduleAutoDisablePolicy</a>

The auto-disable policy for the image pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#auto_disable_policy ImagebuilderImagePipeline#auto_disable_policy}

---

##### `PipelineExecutionStartCondition`<sup>Optional</sup> <a name="PipelineExecutionStartCondition" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.pipelineExecutionStartCondition"></a>

```go
PipelineExecutionStartCondition *string
```

- *Type:* *string

The condition configures when the pipeline should trigger a new image build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#pipeline_execution_start_condition ImagebuilderImagePipeline#pipeline_execution_start_condition}

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.scheduleExpression"></a>

```go
ScheduleExpression *string
```

- *Type:* *string

The expression determines how often EC2 Image Builder evaluates your pipelineExecutionStartCondition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#schedule_expression ImagebuilderImagePipeline#schedule_expression}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

The timezone that applies to the scheduling expression, for example "Etc/UTC" or "America/Los_Angeles" in IANA timezone format.

If not specified, this defaults to UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#timezone ImagebuilderImagePipeline#timezone}

---

### ImagebuilderImagePipelineScheduleAutoDisablePolicy <a name="ImagebuilderImagePipelineScheduleAutoDisablePolicy" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

&imagebuilderimagepipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicy {
	FailureCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicy.property.failureCount">FailureCount</a></code> | <code>*f64</code> | The number of consecutive failures after which the pipeline should be automatically disabled. |

---

##### `FailureCount`<sup>Optional</sup> <a name="FailureCount" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicy.property.failureCount"></a>

```go
FailureCount *f64
```

- *Type:* *f64

The number of consecutive failures after which the pipeline should be automatically disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#failure_count ImagebuilderImagePipeline#failure_count}

---

### ImagebuilderImagePipelineWorkflows <a name="ImagebuilderImagePipelineWorkflows" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflows.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

&imagebuilderimagepipeline.ImagebuilderImagePipelineWorkflows {
	OnFailure: *string,
	ParallelGroup: *string,
	Parameters: interface{},
	WorkflowArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflows.property.onFailure">OnFailure</a></code> | <code>*string</code> | Define execution decision in case of workflow failure. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflows.property.parallelGroup">ParallelGroup</a></code> | <code>*string</code> | The parallel group name. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflows.property.parameters">Parameters</a></code> | <code>interface{}</code> | The parameters associated with the workflow. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflows.property.workflowArn">WorkflowArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the workflow. |

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflows.property.onFailure"></a>

```go
OnFailure *string
```

- *Type:* *string

Define execution decision in case of workflow failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#on_failure ImagebuilderImagePipeline#on_failure}

---

##### `ParallelGroup`<sup>Optional</sup> <a name="ParallelGroup" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflows.property.parallelGroup"></a>

```go
ParallelGroup *string
```

- *Type:* *string

The parallel group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#parallel_group ImagebuilderImagePipeline#parallel_group}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflows.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

The parameters associated with the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#parameters ImagebuilderImagePipeline#parameters}

---

##### `WorkflowArn`<sup>Optional</sup> <a name="WorkflowArn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflows.property.workflowArn"></a>

```go
WorkflowArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#workflow_arn ImagebuilderImagePipeline#workflow_arn}

---

### ImagebuilderImagePipelineWorkflowsParameters <a name="ImagebuilderImagePipelineWorkflowsParameters" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

&imagebuilderimagepipeline.ImagebuilderImagePipelineWorkflowsParameters {
	Name: *string,
	Value: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParameters.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParameters.property.value">Value</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#value ImagebuilderImagePipeline#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParameters.property.value"></a>

```go
Value *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_image_pipeline#value ImagebuilderImagePipeline#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference <a name="ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

imagebuilderimagepipeline.NewImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resetContainerTags">ResetContainerTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resetRepositoryName">ResetRepositoryName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerTags` <a name="ResetContainerTags" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resetContainerTags"></a>

```go
func ResetContainerTags()
```

##### `ResetRepositoryName` <a name="ResetRepositoryName" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resetRepositoryName"></a>

```go
func ResetRepositoryName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTagsInput">ContainerTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags">ContainerTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerTagsInput`<sup>Optional</sup> <a name="ContainerTagsInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTagsInput"></a>

```go
func ContainerTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryNameInput"></a>

```go
func RepositoryNameInput() *string
```

- *Type:* *string

---

##### `ContainerTags`<sup>Required</sup> <a name="ContainerTags" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags"></a>

```go
func ContainerTags() *[]*string
```

- *Type:* *[]*string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName"></a>

```go
func RepositoryName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderImagePipelineImageScanningConfigurationOutputReference <a name="ImagebuilderImagePipelineImageScanningConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

imagebuilderimagepipeline.NewImagebuilderImagePipelineImageScanningConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderImagePipelineImageScanningConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.putEcrConfiguration">PutEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resetEcrConfiguration">ResetEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resetImageScanningEnabled">ResetImageScanningEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEcrConfiguration` <a name="PutEcrConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.putEcrConfiguration"></a>

```go
func PutEcrConfiguration(value ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.putEcrConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a>

---

##### `ResetEcrConfiguration` <a name="ResetEcrConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resetEcrConfiguration"></a>

```go
func ResetEcrConfiguration()
```

##### `ResetImageScanningEnabled` <a name="ResetImageScanningEnabled" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resetImageScanningEnabled"></a>

```go
func ResetImageScanningEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfiguration">EcrConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference">ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfigurationInput">EcrConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabledInput">ImageScanningEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabled">ImageScanningEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EcrConfiguration`<sup>Required</sup> <a name="EcrConfiguration" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfiguration"></a>

```go
func EcrConfiguration() ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference">ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference</a>

---

##### `EcrConfigurationInput`<sup>Optional</sup> <a name="EcrConfigurationInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfigurationInput"></a>

```go
func EcrConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ImageScanningEnabledInput`<sup>Optional</sup> <a name="ImageScanningEnabledInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabledInput"></a>

```go
func ImageScanningEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ImageScanningEnabled`<sup>Required</sup> <a name="ImageScanningEnabled" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabled"></a>

```go
func ImageScanningEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderImagePipelineImageTestsConfigurationOutputReference <a name="ImagebuilderImagePipelineImageTestsConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

imagebuilderimagepipeline.NewImagebuilderImagePipelineImageTestsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderImagePipelineImageTestsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resetImageTestsEnabled">ResetImageTestsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resetTimeoutMinutes">ResetTimeoutMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageTestsEnabled` <a name="ResetImageTestsEnabled" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resetImageTestsEnabled"></a>

```go
func ResetImageTestsEnabled()
```

##### `ResetTimeoutMinutes` <a name="ResetTimeoutMinutes" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resetTimeoutMinutes"></a>

```go
func ResetTimeoutMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabledInput">ImageTestsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutesInput">TimeoutMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabled">ImageTestsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutes">TimeoutMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageTestsEnabledInput`<sup>Optional</sup> <a name="ImageTestsEnabledInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabledInput"></a>

```go
func ImageTestsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutMinutesInput`<sup>Optional</sup> <a name="TimeoutMinutesInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutesInput"></a>

```go
func TimeoutMinutesInput() *f64
```

- *Type:* *f64

---

##### `ImageTestsEnabled`<sup>Required</sup> <a name="ImageTestsEnabled" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabled"></a>

```go
func ImageTestsEnabled() interface{}
```

- *Type:* interface{}

---

##### `TimeoutMinutes`<sup>Required</sup> <a name="TimeoutMinutes" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutes"></a>

```go
func TimeoutMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderImagePipelineLoggingConfigurationOutputReference <a name="ImagebuilderImagePipelineLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

imagebuilderimagepipeline.NewImagebuilderImagePipelineLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderImagePipelineLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.resetImageLogGroupName">ResetImageLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.resetPipelineLogGroupName">ResetPipelineLogGroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageLogGroupName` <a name="ResetImageLogGroupName" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.resetImageLogGroupName"></a>

```go
func ResetImageLogGroupName()
```

##### `ResetPipelineLogGroupName` <a name="ResetPipelineLogGroupName" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.resetPipelineLogGroupName"></a>

```go
func ResetPipelineLogGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.property.imageLogGroupNameInput">ImageLogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.property.pipelineLogGroupNameInput">PipelineLogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.property.imageLogGroupName">ImageLogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.property.pipelineLogGroupName">PipelineLogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageLogGroupNameInput`<sup>Optional</sup> <a name="ImageLogGroupNameInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.property.imageLogGroupNameInput"></a>

```go
func ImageLogGroupNameInput() *string
```

- *Type:* *string

---

##### `PipelineLogGroupNameInput`<sup>Optional</sup> <a name="PipelineLogGroupNameInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.property.pipelineLogGroupNameInput"></a>

```go
func PipelineLogGroupNameInput() *string
```

- *Type:* *string

---

##### `ImageLogGroupName`<sup>Required</sup> <a name="ImageLogGroupName" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.property.imageLogGroupName"></a>

```go
func ImageLogGroupName() *string
```

- *Type:* *string

---

##### `PipelineLogGroupName`<sup>Required</sup> <a name="PipelineLogGroupName" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.property.pipelineLogGroupName"></a>

```go
func PipelineLogGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference <a name="ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

imagebuilderimagepipeline.NewImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.resetFailureCount">ResetFailureCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailureCount` <a name="ResetFailureCount" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.resetFailureCount"></a>

```go
func ResetFailureCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.failureCountInput">FailureCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.failureCount">FailureCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailureCountInput`<sup>Optional</sup> <a name="FailureCountInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.failureCountInput"></a>

```go
func FailureCountInput() *f64
```

- *Type:* *f64

---

##### `FailureCount`<sup>Required</sup> <a name="FailureCount" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.failureCount"></a>

```go
func FailureCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderImagePipelineScheduleOutputReference <a name="ImagebuilderImagePipelineScheduleOutputReference" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

imagebuilderimagepipeline.NewImagebuilderImagePipelineScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderImagePipelineScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.putAutoDisablePolicy">PutAutoDisablePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetAutoDisablePolicy">ResetAutoDisablePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetPipelineExecutionStartCondition">ResetPipelineExecutionStartCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoDisablePolicy` <a name="PutAutoDisablePolicy" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.putAutoDisablePolicy"></a>

```go
func PutAutoDisablePolicy(value ImagebuilderImagePipelineScheduleAutoDisablePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.putAutoDisablePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicy">ImagebuilderImagePipelineScheduleAutoDisablePolicy</a>

---

##### `ResetAutoDisablePolicy` <a name="ResetAutoDisablePolicy" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetAutoDisablePolicy"></a>

```go
func ResetAutoDisablePolicy()
```

##### `ResetPipelineExecutionStartCondition` <a name="ResetPipelineExecutionStartCondition" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetPipelineExecutionStartCondition"></a>

```go
func ResetPipelineExecutionStartCondition()
```

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetScheduleExpression"></a>

```go
func ResetScheduleExpression()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetTimezone"></a>

```go
func ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.autoDisablePolicy">AutoDisablePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference">ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.autoDisablePolicyInput">AutoDisablePolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartConditionInput">PipelineExecutionStartConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartCondition">PipelineExecutionStartCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoDisablePolicy`<sup>Required</sup> <a name="AutoDisablePolicy" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.autoDisablePolicy"></a>

```go
func AutoDisablePolicy() ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference">ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference</a>

---

##### `AutoDisablePolicyInput`<sup>Optional</sup> <a name="AutoDisablePolicyInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.autoDisablePolicyInput"></a>

```go
func AutoDisablePolicyInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineExecutionStartConditionInput`<sup>Optional</sup> <a name="PipelineExecutionStartConditionInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartConditionInput"></a>

```go
func PipelineExecutionStartConditionInput() *string
```

- *Type:* *string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpressionInput"></a>

```go
func ScheduleExpressionInput() *string
```

- *Type:* *string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `PipelineExecutionStartCondition`<sup>Required</sup> <a name="PipelineExecutionStartCondition" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartCondition"></a>

```go
func PipelineExecutionStartCondition() *string
```

- *Type:* *string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderImagePipelineWorkflowsList <a name="ImagebuilderImagePipelineWorkflowsList" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

imagebuilderimagepipeline.NewImagebuilderImagePipelineWorkflowsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ImagebuilderImagePipelineWorkflowsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.get"></a>

```go
func Get(index *f64) ImagebuilderImagePipelineWorkflowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderImagePipelineWorkflowsOutputReference <a name="ImagebuilderImagePipelineWorkflowsOutputReference" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

imagebuilderimagepipeline.NewImagebuilderImagePipelineWorkflowsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ImagebuilderImagePipelineWorkflowsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.resetOnFailure">ResetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.resetParallelGroup">ResetParallelGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.resetWorkflowArn">ResetWorkflowArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.resetOnFailure"></a>

```go
func ResetOnFailure()
```

##### `ResetParallelGroup` <a name="ResetParallelGroup" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.resetParallelGroup"></a>

```go
func ResetParallelGroup()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetWorkflowArn` <a name="ResetWorkflowArn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.resetWorkflowArn"></a>

```go
func ResetWorkflowArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList">ImagebuilderImagePipelineWorkflowsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.onFailureInput">OnFailureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.parallelGroupInput">ParallelGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.workflowArnInput">WorkflowArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.onFailure">OnFailure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.parallelGroup">ParallelGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.workflowArn">WorkflowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.parameters"></a>

```go
func Parameters() ImagebuilderImagePipelineWorkflowsParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList">ImagebuilderImagePipelineWorkflowsParametersList</a>

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.onFailureInput"></a>

```go
func OnFailureInput() *string
```

- *Type:* *string

---

##### `ParallelGroupInput`<sup>Optional</sup> <a name="ParallelGroupInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.parallelGroupInput"></a>

```go
func ParallelGroupInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `WorkflowArnInput`<sup>Optional</sup> <a name="WorkflowArnInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.workflowArnInput"></a>

```go
func WorkflowArnInput() *string
```

- *Type:* *string

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.onFailure"></a>

```go
func OnFailure() *string
```

- *Type:* *string

---

##### `ParallelGroup`<sup>Required</sup> <a name="ParallelGroup" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.parallelGroup"></a>

```go
func ParallelGroup() *string
```

- *Type:* *string

---

##### `WorkflowArn`<sup>Required</sup> <a name="WorkflowArn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.workflowArn"></a>

```go
func WorkflowArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderImagePipelineWorkflowsParametersList <a name="ImagebuilderImagePipelineWorkflowsParametersList" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

imagebuilderimagepipeline.NewImagebuilderImagePipelineWorkflowsParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ImagebuilderImagePipelineWorkflowsParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.get"></a>

```go
func Get(index *f64) ImagebuilderImagePipelineWorkflowsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderImagePipelineWorkflowsParametersOutputReference <a name="ImagebuilderImagePipelineWorkflowsParametersOutputReference" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderimagepipeline"

imagebuilderimagepipeline.NewImagebuilderImagePipelineWorkflowsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ImagebuilderImagePipelineWorkflowsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.property.value">Value</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.property.value"></a>

```go
func Value() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



